import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { PricingPlans } from "@/components/sections/pricing-plans"
import { CTA } from "@/components/sections/cta"
import { Reveal } from "@/components/ui/reveal"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { CheckCircle, BadgeDollarSign } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - RiditStack Procurement Platform",
  description:
    "Simple, transparent pricing for procurement automation. Choose the plan that fits your business needs with no hidden fees.",
}

const included = [
  "30-day free trial",
  "No setup fees",
  "No hidden costs",
  "Cancel anytime",
  "SOC 2 Type II certified",
  "Enterprise-grade security",
]

const faqs = [
  {
    question: "How does the free trial work?",
    answer:
      "Start with a 30-day free trial that includes full access to all features in your chosen plan. No credit card required to begin.",
  },
  {
    question: "Can I change plans anytime?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    question: "What integrations are included?",
    answer:
      "We offer native integrations with popular ERP systems, accounting software, and business tools. Custom integrations are available for Enterprise plans.",
  },
  {
    question: "Is there a setup fee?",
    answer:
      "No setup fees for any plan. We provide free onboarding and training to help you get started quickly.",
  },
  {
    question: "What support is included?",
    answer:
      "All plans include comprehensive support. Starter includes email support, Professional adds priority support, and Enterprise includes 24/7 phone support with a dedicated success manager.",
  },
]

export default function PricingPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Simple, transparent pricing"
        eyebrowIcon={BadgeDollarSign}
        title="Pricing that scales"
        highlight="with your team."
        subtitle="Choose the plan that fits your business — no hidden fees, no surprises. Start your 30-day free trial today."
      />

      {/* Pricing plans */}
      <section className="px-4 pb-20">
        <div className="container mx-auto max-w-6xl">
          <PricingPlans />
        </div>
      </section>

      {/* What's included */}
      <section className="border-y border-border bg-muted/20 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl">
          <Reveal className="text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Every plan includes the essentials
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Core features that come standard, at no extra cost.
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <Reveal
                key={item}
                delay={i * 60}
                className="flex items-center gap-3 rounded-xl border border-border bg-card/60 px-4 py-3.5"
              >
                <CheckCircle className="h-5 w-5 shrink-0 text-primary" />
                <span className="font-medium">{item}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="mb-10 text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              Everything you need to know about our pricing and plans.
            </p>
          </Reveal>
          <Reveal>
            <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card/60 px-5">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="text-base font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <CTA />
    </Layout>
  )
}
