"use client"

import { useState } from "react"
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Honeypot, SelectField, TextAreaField, TextField } from "@/components/forms/fields"
import { Turnstile } from "@/components/forms/turnstile"
import { useFormSubmit } from "@/hooks/use-form-submit"

const INDUSTRIES = [
  "Manufacturing",
  "Healthcare",
  "Retail",
  "Technology",
  "Financial Services",
  "Energy & Utilities",
  "Public Sector",
  "Other",
]

const COMPANY_SIZES = ["1-50", "51-200", "201-1000", "1001-5000", "5000+"]

type DemoFormProps = {
  title?: string
  subtitle?: string
  submitLabel?: string
}

export function DemoForm({
  title = "Request your demo",
  subtitle = "Tell us about your team and we'll set up a walkthrough tailored to you.",
  submitLabel = "Request demo",
}: DemoFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    job_title: "",
    industry: "",
    employees: "",
    country: "",
    message: "",
  })
  const [honeypot, setHoneypot] = useState("")
  const [turnstileToken, setTurnstileToken] = useState("")

  const { submit, isSubmitting, isSuccess, fieldErrors } = useFormSubmit({
    endpoint: "/api/book-demo",
  })

  const set =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    ) =>
      setForm((f) => ({ ...f, [key]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    await submit({ ...form, company_website: honeypot, turnstileToken })
  }

  if (isSuccess) {
    return (
      <Card className="border-0 shadow-xl">
        <CardContent className="flex animate-in fade-in flex-col items-center justify-center gap-4 py-16 text-center duration-500">
          <span className="flex h-16 w-16 animate-in zoom-in-50 items-center justify-center rounded-full bg-primary/10 text-primary duration-500">
            <CheckCircle2 className="h-9 w-9" />
          </span>
          <h3 className="text-2xl font-semibold">Request received!</h3>
          <p className="max-w-sm text-muted-foreground">
            Thanks, {form.name.split(" ")[0] || "there"}. A ProcLeo specialist will
            reach out within 24 hours to schedule your personalized demo.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="relative border-0 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">{title}</CardTitle>
        <p className="text-muted-foreground">{subtitle}</p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} noValidate className="space-y-5">
          <Honeypot value={honeypot} onChange={setHoneypot} />

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Full name"
              name="name"
              required
              autoComplete="name"
              value={form.name}
              onChange={set("name")}
              error={fieldErrors.name}
            />
            <TextField
              label="Work email"
              name="email"
              type="email"
              required
              autoComplete="email"
              value={form.email}
              onChange={set("email")}
              error={fieldErrors.email}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Company"
              name="company"
              required
              autoComplete="organization"
              value={form.company}
              onChange={set("company")}
              error={fieldErrors.company}
            />
            <TextField
              label="Job title"
              name="job_title"
              autoComplete="organization-title"
              value={form.job_title}
              onChange={set("job_title")}
              error={fieldErrors.job_title}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <TextField
              label="Phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              value={form.phone}
              onChange={set("phone")}
              error={fieldErrors.phone}
            />
            <TextField
              label="Country"
              name="country"
              autoComplete="country-name"
              value={form.country}
              onChange={set("country")}
              error={fieldErrors.country}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <SelectField
              label="Industry"
              name="industry"
              value={form.industry}
              onChange={set("industry")}
              error={fieldErrors.industry}
            >
              <option value="">Select an industry</option>
              {INDUSTRIES.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </SelectField>
            <SelectField
              label="Company size"
              name="employees"
              value={form.employees}
              onChange={set("employees")}
              error={fieldErrors.employees}
            >
              <option value="">Select company size</option>
              {COMPANY_SIZES.map((s) => (
                <option key={s} value={s}>
                  {s} employees
                </option>
              ))}
            </SelectField>
          </div>

          <TextAreaField
            label="What would you like to see?"
            name="message"
            rows={4}
            placeholder="Tell us about your procurement workflows and goals..."
            value={form.message}
            onChange={set("message")}
            error={fieldErrors.message}
          />

          <Turnstile onToken={setTurnstileToken} />

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Submitting…
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
