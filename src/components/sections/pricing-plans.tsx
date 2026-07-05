"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { Check, Star, ArrowRight } from "lucide-react"

type Plan = {
  name: string
  monthly: number | null
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    name: "Starter",
    monthly: 49,
    description: "For small teams getting started with procurement automation.",
    features: [
      "Basic intake management",
      "Purchase order creation",
      "Supplier database",
      "Basic reporting",
      "Email support",
      "Up to 100 POs/month",
    ],
    cta: "Start free trial",
  },
  {
    name: "Professional",
    monthly: 99,
    description: "For growing companies that need advanced automation.",
    features: [
      "Everything in Starter",
      "AI-powered AP automation",
      "Advanced workflow builder",
      "Spend analytics",
      "Budget management",
      "API integrations",
      "Priority support",
      "Up to 500 POs/month",
    ],
    popular: true,
    cta: "Start free trial",
  },
  {
    name: "Enterprise",
    monthly: null,
    description: "For large organizations requiring full control.",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Advanced compliance tools",
      "Multi-entity support",
      "Custom reporting",
      "Dedicated success manager",
      "24/7 phone support",
      "Unlimited POs",
    ],
    cta: "Contact sales",
  },
]

export function PricingPlans() {
  const [annual, setAnnual] = React.useState(true)

  return (
    <div>
      {/* Billing toggle */}
      <Reveal className="flex items-center justify-center gap-4">
        <span className={`text-sm font-medium ${annual ? "text-muted-foreground" : "text-foreground"}`}>
          Monthly
        </span>
        <button
          type="button"
          role="switch"
          aria-checked={annual}
          aria-label="Toggle annual billing"
          onClick={() => setAnnual((v) => !v)}
          className="relative inline-flex h-7 w-12 shrink-0 items-center rounded-full border border-border bg-muted transition-colors data-[on=true]:bg-primary"
          data-on={annual}
        >
          <span
            className="inline-block h-5 w-5 translate-x-1 rounded-full bg-background shadow transition-transform data-[on=true]:translate-x-6"
            data-on={annual}
          />
        </button>
        <span className={`text-sm font-medium ${annual ? "text-foreground" : "text-muted-foreground"}`}>
          Annual
          <span className="ml-2 rounded-full bg-[oklch(0.72_0.15_150)]/12 px-2 py-0.5 text-xs font-semibold text-[oklch(0.5_0.13_150)]">
            Save 20%
          </span>
        </span>
      </Reveal>

      {/* Plan cards */}
      <div className="mt-12 grid items-start gap-6 md:grid-cols-3">
        {plans.map((plan, i) => {
          const price =
            plan.monthly === null
              ? "Custom"
              : annual
                ? `$${Math.round(plan.monthly * 0.8)}`
                : `$${plan.monthly}`
          return (
            <Reveal key={plan.name} delay={i * 90} variant="scale">
              <div
                className={`relative flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 ${
                  plan.popular
                    ? "border-glow border-primary/30 bg-card shadow-2xl glow-soft md:-mt-4 md:mb-4"
                    : "border-border bg-card/60 shadow-sm hover:-translate-y-1 hover:shadow-xl"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-primary to-[var(--brand-2)] px-3 py-1 text-xs font-semibold text-primary-foreground shadow-md">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      Most popular
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <p className="mt-2 min-h-10 text-sm text-muted-foreground">{plan.description}</p>

                <div className="mt-5 flex items-baseline gap-1">
                  <span className="text-4xl font-semibold tracking-tight">{price}</span>
                  {plan.monthly !== null && (
                    <span className="text-sm text-muted-foreground">/user / mo</span>
                  )}
                </div>
                <p className="mt-1 h-4 text-xs text-muted-foreground">
                  {plan.monthly !== null
                    ? annual
                      ? "billed annually"
                      : "billed monthly"
                    : "tailored to your needs"}
                </p>

                <Button
                  asChild
                  size="lg"
                  variant={plan.popular ? "default" : "outline"}
                  className={`group mt-6 w-full ${plan.popular ? "btn-shine" : "bg-background/60"}`}
                >
                  <Link href="/contact">
                    {plan.cta}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>

                <ul className="mt-7 space-y-3 border-t border-border pt-6">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )
        })}
      </div>
    </div>
  )
}
