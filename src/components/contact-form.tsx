"use client"

import { useState } from "react"
import {
  ArrowRight,
  CheckCircle2,
  Handshake,
  HelpCircle,
  KeyRound,
  Loader2,
  MessageSquare,
  Sparkles,
  Wrench,
} from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Honeypot, TextAreaField, TextField } from "@/components/forms/fields"
import { SelectMenu, type SelectOption } from "@/components/forms/select-menu"
import { Turnstile } from "@/components/forms/turnstile"
import { useFormSubmit } from "@/hooks/use-form-submit"

type ContactFormProps = {
  /** Pre-selected "Reason for Contact" value (e.g. "demo", "login") */
  defaultReason?: string
  /** Form card title */
  title?: string
  /** Supporting copy under the title */
  subtitle?: string
  /** Submit button label */
  submitLabel?: string
}

const REASONS: SelectOption[] = [
  { value: "demo", label: "Demo Request", icon: Sparkles },
  { value: "login", label: "Login Assistance", icon: KeyRound },
  { value: "sales", label: "Sales Inquiry", icon: MessageSquare },
  { value: "support", label: "Technical Support", icon: Wrench },
  { value: "partnership", label: "Partnership Opportunity", icon: Handshake },
  { value: "other", label: "Other", icon: HelpCircle },
]

export function ContactForm({
  defaultReason = "",
  title = "Send us a message",
  subtitle = "Fill out the form and we'll get back to you within 24 hours.",
  submitLabel = "Send message",
}: ContactFormProps) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    reason: defaultReason,
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [turnstileToken, setTurnstileToken] = useState("")
  const [clientErrors, setClientErrors] = useState<Record<string, string>>({})

  const { submit, isSubmitting, isSuccess, fieldErrors } = useFormSubmit({
    endpoint: "/api/contact",
  })

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      // Clear this field's client-side error as soon as the user edits it.
      setClientErrors((prev) => {
        if (!prev[key]) return prev
        const next = { ...prev }
        delete next[key]
        return next
      })
    }

  // Validate every required field on the client so they all highlight together
  // (the server treats `subject`/reason as optional, and an early return would
  // skip server validation for the rest).
  function validate() {
    const e: Record<string, string> = {}
    if (!form.firstName.trim()) e.firstName = "First name is required."
    if (!form.lastName.trim()) e.lastName = "Last name is required."
    if (!form.email.trim()) e.email = "Email address is required."
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email address."
    if (!form.reason) e.reason = "Please select a reason for contact."
    if (!form.message.trim()) e.message = "Message is required."
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    setClientErrors(errs)
    if (Object.keys(errs).length > 0) return

    const reasonLabel = REASONS.find((r) => r.value === form.reason)?.label
    await submit({
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      company: form.company,
      phone: form.phone,
      subject: reasonLabel,
      message: form.message,
      company_website: honeypot,
      turnstileToken,
    })
  }

  // Client-side errors take precedence, falling back to server field errors.
  const firstNameError = clientErrors.firstName ?? fieldErrors.name
  const lastNameError = clientErrors.lastName
  const emailError = clientErrors.email ?? fieldErrors.email
  const subjectError = clientErrors.reason ?? fieldErrors.subject
  const messageError = clientErrors.message ?? fieldErrors.message

  if (isSuccess) {
    return (
      <Card className="premium-form-border dark relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[rgba(15,18,30,0.82)] backdrop-blur-[24px] shadow-[0_0_40px_rgba(37,99,235,0.18),0_0_90px_rgba(37,99,235,0.12),0_20px_80px_rgba(0,0,0,0.45)]">
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100px] bg-gradient-to-b from-white/[0.08] to-transparent" />
        <CardContent className="flex animate-in fade-in flex-col items-center justify-center gap-4 py-16 text-center duration-500">
          <span className="flex h-16 w-16 animate-in zoom-in-50 items-center justify-center rounded-full bg-primary/10 text-primary duration-500">
            <CheckCircle2 className="h-9 w-9" />
          </span>
          <h3 className="text-2xl font-semibold">Message sent!</h3>
          <p className="max-w-sm text-muted-foreground">
            Thanks, {form.firstName || "there"}. We&apos;ve received your message and
            will get back to you within 24 hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="premium-form-border dark relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[rgba(15,18,30,0.82)] backdrop-blur-[24px] shadow-[0_0_40px_rgba(37,99,235,0.18),0_0_90px_rgba(37,99,235,0.12),0_20px_80px_rgba(0,0,0,0.45)] transition-all duration-500 hover:-translate-y-1 hover:scale-[1.01] hover:border-white/20 hover:shadow-[0_0_60px_rgba(37,99,235,0.28),0_0_120px_rgba(37,99,235,0.18),0_24px_90px_rgba(0,0,0,0.5)]">
      {/* soft white top highlight for premium depth */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[100px] bg-gradient-to-b from-white/[0.08] to-transparent" />
      {/* faint interior blue glow bleeding up through the glass */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 120%, rgba(37,99,235,0.28), transparent 70%)",
        }}
      />
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Honeypot value={honeypot} onChange={setHoneypot} />

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="First name"
              name="firstName"
              required
              autoComplete="given-name"
              value={form.firstName}
              onChange={set("firstName")}
              error={firstNameError}
            />
            <TextField
              label="Last name"
              name="lastName"
              required
              autoComplete="family-name"
              value={form.lastName}
              onChange={set("lastName")}
              error={lastNameError}
            />
          </div>

          <TextField
            label="Email address"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={set("email")}
            error={emailError}
          />

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={set("company")}
              error={fieldErrors.company}
            />
            <TextField
              label="Phone number"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={set("phone")}
              error={fieldErrors.phone}
            />
          </div>

          <SelectMenu
            label="Reason for contact"
            name="reason"
            required
            value={form.reason}
            onValueChange={(v) => {
              setForm((f) => ({ ...f, reason: v }))
              setClientErrors((prev) => {
                if (!prev.reason) return prev
                const next = { ...prev }
                delete next.reason
                return next
              })
            }}
            options={REASONS}
            placeholder="Select a reason"
            error={subjectError}
          />

          <TextAreaField
            label="Message"
            name="message"
            required
            rows={4}
            placeholder="Tell us more about how we can help..."
            value={form.message}
            onChange={set("message")}
            error={messageError}
          />

          <Turnstile onToken={setTurnstileToken} />

          <Button
            type="submit"
            size="lg"
            className="w-full border-0 bg-gradient-to-b from-[#2563EB] via-[#3B82F6] to-[#60A5FA] text-white shadow-[0_8px_30px_rgba(37,99,235,0.35)] transition-all duration-300 hover:scale-[1.02] hover:brightness-105 hover:shadow-[0_10px_40px_rgba(37,99,235,0.45)]"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                {submitLabel}
                <ArrowRight className="h-4 w-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
