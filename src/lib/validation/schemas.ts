import { z } from "zod"

/**
 * Shared validation + sanitization for all lead forms.
 *
 * Every string is trimmed and stripped of control characters before length
 * checks run, so validation is performed on the value we actually store.
 */

/** Remove ASCII control chars (except tab/newline) that have no place in form input. */
function sanitize(value: string): string {
  // eslint-disable-next-line no-control-regex
  return value.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "").trim()
}

const cleanString = (max: number) =>
  z
    .string()
    .transform(sanitize)
    .pipe(z.string().max(max, `Must be ${max} characters or fewer.`))

const requiredString = (label: string, min = 1, max = 200) =>
  z
    .string({ error: `${label} is required.` })
    .transform(sanitize)
    .pipe(
      z
        .string()
        .min(min, `${label} is required.`)
        .max(max, `${label} must be ${max} characters or fewer.`),
    )

const optionalString = (max = 200) =>
  z
    .string()
    .transform(sanitize)
    .pipe(z.string().max(max))
    .optional()
    .or(z.literal("").transform(() => undefined))

const emailField = z
  .string({ error: "Email is required." })
  .transform((v) => sanitize(v).toLowerCase())
  .pipe(z.string().min(1, "Email is required.").email("Enter a valid email address.").max(254))

/**
 * Work email: same rules as `emailField`, but rejects personal Gmail
 * addresses so demo requests come from a business domain.
 */
const workEmailField = emailField.refine(
  (v) => !/@(gmail|googlemail)\.com$/.test(v),
  "Please use your work email - Gmail addresses aren't accepted.",
)

// Loose international phone check: digits, spaces, and + ( ) - . between 7 and 20 chars.
const phoneField = z
  .string()
  .transform(sanitize)
  .pipe(
    z
      .string()
      .regex(/^[+()\-.\s0-9]{7,20}$/, "Enter a valid phone number.")
      .max(20),
  )
  .optional()
  .or(z.literal("").transform(() => undefined))

/** Honeypot: must be empty. Bots that auto-fill every field trip this. */
const honeypot = z
  .string()
  .max(0, "Bot detected.")
  .optional()
  .or(z.literal("").transform(() => undefined))

/** Analytics captured on the client and posted with every form. */
export const analyticsSchema = z
  .object({
    utm_source: optionalString(120),
    utm_medium: optionalString(120),
    utm_campaign: optionalString(120),
    referrer: optionalString(500),
    page_url: optionalString(500),
    browser: optionalString(300),
  })
  .partial()

// ---------------------------------------------------------------------
// Book a Demo
// ---------------------------------------------------------------------
export const bookDemoSchema = z.object({
  name: requiredString("Name", 2, 120),
  email: workEmailField,
  phone: phoneField,
  company: requiredString("Company", 1, 160),
  job_title: optionalString(120),
  industry: optionalString(120),
  employees: optionalString(60),
  country: optionalString(120),
  message: optionalString(4000),
  // Spam controls
  company_website: honeypot,
  turnstileToken: z.string().optional(),
  // Analytics
  analytics: analyticsSchema.optional(),
})
export type BookDemoInput = z.infer<typeof bookDemoSchema>

// ---------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------
export const contactSchema = z.object({
  name: requiredString("Name", 2, 160),
  email: emailField,
  company: optionalString(160),
  phone: phoneField,
  subject: optionalString(160),
  // Min length 1 so a single-word message/description is accepted.
  message: requiredString("Message", 1, 4000),
  company_website: honeypot,
  turnstileToken: z.string().optional(),
  analytics: analyticsSchema.optional(),
})
export type ContactInput = z.infer<typeof contactSchema>

// ---------------------------------------------------------------------
// Newsletter
// ---------------------------------------------------------------------
export const newsletterSchema = z.object({
  email: emailField,
  source_page: optionalString(500),
  company_website: honeypot,
  turnstileToken: z.string().optional(),
  analytics: analyticsSchema.optional(),
})
export type NewsletterInput = z.infer<typeof newsletterSchema>

/**
 * Flatten a ZodError into `{ field: message }` for inline form display.
 */
export function fieldErrors(error: z.ZodError): Record<string, string> {
  const out: Record<string, string> = {}
  for (const issue of error.issues) {
    const key = issue.path.join(".") || "form"
    if (!out[key]) out[key] = issue.message
  }
  return out
}
