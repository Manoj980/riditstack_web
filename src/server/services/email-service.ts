import "server-only"

import type { ReactElement } from "react"
import { Resend } from "resend"

import { serverEnv } from "@/lib/env"
import { logger } from "@/lib/logger"

/**
 * Thin wrapper around Resend. Templates are imported lazily inside each method
 * so a cold API route only pulls in the one template tree it actually renders.
 *
 * Emails are sent with Promise.allSettled: a failed confirmation email never
 * blocks the internal notification (or the user's success response). Failures
 * are logged, not thrown - the submission is already persisted by that point.
 */

let resendClient: Resend | null = null
function resend(): Resend {
  if (!resendClient) resendClient = new Resend(serverEnv().resendApiKey)
  return resendClient
}

function formatTimestamp(date = new Date()): string {
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(date) + " UTC"
}

type SendArgs = {
  to: string | string[]
  subject: string
  react: ReactElement
  replyTo?: string
}

async function send(label: string, args: SendArgs): Promise<boolean> {
  const env = serverEnv()
  try {
    const { error } = await resend().emails.send({
      from: env.fromEmail,
      to: args.to,
      subject: args.subject,
      react: args.react,
      replyTo: args.replyTo,
    })
    if (error) {
      logger.error("email", `Resend rejected ${label}`, { error: error.message })
      return false
    }
    return true
  } catch (err) {
    logger.error("email", `Failed to send ${label}`, {
      error: err instanceof Error ? err.message : "unknown",
    })
    return false
  }
}

export type DemoEmailData = {
  name: string
  email: string
  phone?: string
  company: string
  jobTitle?: string
  industry?: string
  employees?: string
  country?: string
  message?: string
}

export type ContactEmailData = {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
}

export const EmailService = {
  async sendBookDemoEmails(data: DemoEmailData): Promise<void> {
    const env = serverEnv()
    const timestamp = formatTimestamp()
    const [{ default: BookDemoAdmin }, { default: BookDemoCustomer }] = await Promise.all([
      import("@/emails/BookDemoAdmin"),
      import("@/emails/BookDemoCustomer"),
    ])

    await Promise.allSettled([
      send("book-demo:admin", {
        to: env.salesEmail,
        subject: `New Demo Request - ${data.company}`,
        replyTo: data.email,
        react: BookDemoAdmin({ ...data, jobTitle: data.jobTitle, timestamp }),
      }),
      send("book-demo:customer", {
        to: data.email,
        subject: "Thanks for booking your ProcLeo demo!",
        react: BookDemoCustomer({ name: data.name }),
      }),
    ])
  },

  async sendContactEmails(data: ContactEmailData): Promise<void> {
    const env = serverEnv()
    const timestamp = formatTimestamp()
    const [{ default: ContactAdmin }, { default: ContactCustomer }] = await Promise.all([
      import("@/emails/ContactAdmin"),
      import("@/emails/ContactCustomer"),
    ])

    await Promise.allSettled([
      send("contact:admin", {
        to: env.supportEmail,
        subject: `New Contact Message${data.subject ? ` - ${data.subject}` : ""}`,
        replyTo: data.email,
        react: ContactAdmin({ ...data, timestamp }),
      }),
      send("contact:customer", {
        to: data.email,
        subject: "We've received your message - RiditStack",
        react: ContactCustomer({ name: data.name }),
      }),
    ])
  },

  async sendNewsletterEmails(data: { email: string; sourcePage?: string }): Promise<void> {
    const env = serverEnv()
    const timestamp = formatTimestamp()
    const [{ default: NewsletterWelcome }, { default: NewsletterAdmin }] = await Promise.all([
      import("@/emails/NewsletterWelcome"),
      import("@/emails/NewsletterAdmin"),
    ])

    await Promise.allSettled([
      send("newsletter:welcome", {
        to: data.email,
        subject: "Welcome to the RiditStack briefing 🎉",
        react: NewsletterWelcome({ email: data.email }),
      }),
      send("newsletter:admin", {
        to: env.marketingEmail,
        subject: "New newsletter subscriber",
        react: NewsletterAdmin({ email: data.email, sourcePage: data.sourcePage, timestamp }),
      }),
    ])
  },
}
