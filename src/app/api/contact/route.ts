import type { NextRequest } from "next/server"

import { badRequest, ok, serverError, tooManyRequests } from "@/lib/api/response"
import { rateLimit } from "@/lib/api/rate-limit"
import { getClientIp, getReferer } from "@/lib/api/request-meta"
import { verifyTurnstile } from "@/lib/api/turnstile"
import { logger } from "@/lib/logger"
import { contactSchema, fieldErrors } from "@/lib/validation/schemas"
import { LeadRepository } from "@/server/repositories/lead-repository"
import { EmailService } from "@/server/services/email-service"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  const rl = rateLimit(`contact:${ip}`, { limit: 5, windowMs: 60_000 })
  if (!rl.success) return tooManyRequests(rl.retryAfter)

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return badRequest("Invalid request body.")
  }

  const parsed = contactSchema.safeParse(json)
  if (!parsed.success) {
    return badRequest("Please check the highlighted fields.", fieldErrors(parsed.error))
  }
  const input = parsed.data

  const turnstile = await verifyTurnstile(input.turnstileToken, ip)
  if (!turnstile.success) {
    logger.warn("contact", "Turnstile failed", { reason: turnstile.reason })
    return badRequest("Bot verification failed. Please reload the page and try again.")
  }

  const a = input.analytics ?? {}
  try {
    const { id } = await LeadRepository.createContactRequest({
      name: input.name,
      email: input.email,
      company: input.company,
      phone: input.phone,
      subject: input.subject,
      message: input.message,
      page_url: a.page_url ?? getReferer(req),
      ip_address: ip,
    })
    logger.info("contact", "Contact request stored", { id })

    await EmailService.sendContactEmails({
      name: input.name,
      email: input.email,
      company: input.company,
      phone: input.phone,
      subject: input.subject,
      message: input.message,
    })

    return ok("Thanks for reaching out! We'll get back to you within 24 hours.")
  } catch (err) {
    logger.error("contact", "Failed to process contact request", {
      error: err instanceof Error ? err.message : "unknown",
    })
    return serverError()
  }
}
