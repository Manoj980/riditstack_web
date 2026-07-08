import type { NextRequest } from "next/server"

import { badRequest, ok, serverError, tooManyRequests } from "@/lib/api/response"
import { rateLimit } from "@/lib/api/rate-limit"
import { getClientIp, getReferer } from "@/lib/api/request-meta"
import { verifyTurnstile } from "@/lib/api/turnstile"
import { logger } from "@/lib/logger"
import { fieldErrors, newsletterSchema } from "@/lib/validation/schemas"
import { NewsletterRepository } from "@/server/repositories/newsletter-repository"
import { EmailService } from "@/server/services/email-service"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  const ip = getClientIp(req)

  const rl = rateLimit(`newsletter:${ip}`, { limit: 8, windowMs: 60_000 })
  if (!rl.success) return tooManyRequests(rl.retryAfter)

  let json: unknown
  try {
    json = await req.json()
  } catch {
    return badRequest("Invalid request body.")
  }

  const parsed = newsletterSchema.safeParse(json)
  if (!parsed.success) {
    return badRequest("Please enter a valid email address.", fieldErrors(parsed.error))
  }
  const input = parsed.data

  const turnstile = await verifyTurnstile(input.turnstileToken, ip)
  if (!turnstile.success) {
    logger.warn("newsletter", "Turnstile failed", { reason: turnstile.reason })
    return badRequest("Bot verification failed. Please reload the page and try again.")
  }

  const sourcePage = input.source_page ?? input.analytics?.page_url ?? getReferer(req)
  try {
    const outcome = await NewsletterRepository.subscribe({
      email: input.email,
      source_page: sourcePage,
      ip_address: ip,
    })

    // Idempotent: already-subscribed returns success without re-sending email.
    if (outcome.status === "already_subscribed") {
      logger.info("newsletter", "Duplicate subscribe ignored")
      return ok("You're already subscribed - thanks for being here!")
    }

    logger.info("newsletter", "Subscriber stored", { id: outcome.id })
    await EmailService.sendNewsletterEmails({ email: input.email, sourcePage })

    return ok("You're subscribed! Check your inbox for a welcome email.")
  } catch (err) {
    logger.error("newsletter", "Failed to process subscription", {
      error: err instanceof Error ? err.message : "unknown",
    })
    return serverError()
  }
}
