import type { NextRequest } from "next/server"

import { badRequest, ok, serverError, tooManyRequests } from "@/lib/api/response"
import { rateLimit } from "@/lib/api/rate-limit"
import { getClientIp, getReferer } from "@/lib/api/request-meta"
import { verifyTurnstile } from "@/lib/api/turnstile"
import { logger } from "@/lib/logger"
import { bookDemoSchema, fieldErrors } from "@/lib/validation/schemas"
import { LeadRepository } from "@/server/repositories/lead-repository"
import { EmailService } from "@/server/services/email-service"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  // 1. Rate limit - 5 demo requests / minute / IP.
  const rl = rateLimit(`book-demo:${ip}`, { limit: 5, windowMs: 60_000 })
  if (!rl.success) return tooManyRequests(rl.retryAfter)

  // 2. Parse body.
  let json: unknown
  try {
    json = await req.json()
  } catch {
    return badRequest("Invalid request body.")
  }

  // 3. Validate + sanitize (honeypot enforced by schema).
  const parsed = bookDemoSchema.safeParse(json)
  if (!parsed.success) {
    return badRequest("Please check the highlighted fields.", fieldErrors(parsed.error))
  }
  const input = parsed.data

  // 4. Bot protection.
  const turnstile = await verifyTurnstile(input.turnstileToken, ip)
  if (!turnstile.success) {
    logger.warn("book-demo", "Turnstile failed", { reason: turnstile.reason })
    return badRequest("Bot verification failed. Please reload the page and try again.")
  }

  const a = input.analytics ?? {}
  try {
    // 5. Persist.
    const { id } = await LeadRepository.createDemoRequest({
      name: input.name,
      email: input.email,
      phone: input.phone,
      company: input.company,
      job_title: input.job_title,
      industry: input.industry,
      employees: input.employees,
      country: input.country,
      message: input.message,
      utm_source: a.utm_source,
      utm_medium: a.utm_medium,
      utm_campaign: a.utm_campaign,
      referrer: a.referrer ?? getReferer(req),
      page_url: a.page_url,
      ip_address: ip,
    })
    logger.info("book-demo", "Demo request stored", { id, company: input.company })

    // 6. Notify sales + confirm to customer (non-blocking failures logged inside).
    await EmailService.sendBookDemoEmails({
      name: input.name,
      email: input.email,
      phone: input.phone,
      company: input.company,
      jobTitle: input.job_title,
      industry: input.industry,
      employees: input.employees,
      country: input.country,
      message: input.message,
    })

    return ok("Thanks! Your demo request is in - a specialist will reach out within 24 hours.")
  } catch (err) {
    logger.error("book-demo", "Failed to process demo request", {
      error: err instanceof Error ? err.message : "unknown",
    })
    return serverError()
  }
}
