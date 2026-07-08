"use client"

import { useState } from "react"
import { ArrowRight, Check, Loader2 } from "lucide-react"

import { Honeypot } from "@/components/forms/fields"
import { useFormSubmit } from "@/hooks/use-form-submit"

/**
 * Newsletter subscribe form. Styled for the dark footer panel by default; pass
 * `variant="light"` to use it on light backgrounds.
 */
export function NewsletterForm({
  sourcePage,
  variant = "dark",
}: {
  sourcePage?: string
  variant?: "dark" | "light"
}) {
  const [email, setEmail] = useState("")
  const [honeypot, setHoneypot] = useState("")
  const { submit, isSubmitting, isSuccess, fieldErrors } = useFormSubmit({
    endpoint: "/api/newsletter",
  })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submit({ email, source_page: sourcePage, company_website: honeypot })
  }

  const dark = variant === "dark"

  if (isSuccess) {
    return (
      <div
        className={`flex w-full max-w-sm animate-in fade-in items-center gap-2 rounded-lg px-4 py-3 text-sm font-medium duration-500 ${
          dark ? "bg-white/15 text-white" : "bg-primary/10 text-primary"
        }`}
      >
        <Check className="h-4 w-4" />
        You&apos;re subscribed - check your inbox!
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full max-w-sm">
      <Honeypot value={honeypot} onChange={setHoneypot} />
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          name="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@company.com"
          aria-invalid={!!fieldErrors.email}
          className={
            dark
              ? "h-11 flex-1 rounded-lg border border-white/25 bg-white/15 px-4 text-sm text-white outline-none backdrop-blur transition-colors placeholder:text-white/60 focus-visible:border-white/70 focus-visible:ring-2 focus-visible:ring-white/40"
              : "h-11 flex-1 rounded-lg border border-border bg-background px-4 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary"
          }
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className={
            dark
              ? "group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-white px-5 text-sm font-semibold text-[oklch(0.45_0.2_280)] shadow-sm transition-all hover:-translate-y-px hover:shadow-md disabled:opacity-60"
              : "group inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-px hover:shadow-md disabled:opacity-60"
          }
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Subscribing…
            </>
          ) : (
            <>
              Subscribe
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </div>
      {fieldErrors.email ? (
        <p className={`mt-2 text-xs font-medium ${dark ? "text-white/90" : "text-destructive"}`}>
          {fieldErrors.email}
        </p>
      ) : null}
    </form>
  )
}
