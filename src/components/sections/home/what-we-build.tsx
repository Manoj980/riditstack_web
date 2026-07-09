import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"
import { Counter } from "@/components/ui/counter"
import { Tilt } from "@/components/ui/tilt"
import { SectionBadge } from "@/components/ui/section-badge"
import { Button } from "@/components/ui/button"
import { FeatureMock } from "@/components/features/feature-mock"
import {
  ShoppingCart,
  RefreshCw,
  Bot,
  Layers,
  Zap,
  Cloud,
  ArrowRight,
  Sparkles,
  MessageSquare,
  Tag,
  Boxes,
  CalendarDays,
} from "lucide-react"

const DEMO_HREF = "/contact?type=demo"

/* ---------------- Enterprise statistics band ---------------- */
const stats: {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}[] = [
  { value: 1000, suffix: "+", label: "Users worldwide" },
  { value: 400, prefix: "$", suffix: "M", label: "Spend managed" },
  { value: 10, suffix: "+", label: "Countries" },
  { value: 85, suffix: "+", label: "Five-star reviews" },
]

export function EnterpriseStats() {
  return (
    <section className="px-4 py-14">
      <div className="container mx-auto max-w-7xl">
        <Reveal variant="scale">
          <div className="glass-card grid gap-y-8 rounded-3xl p-8 sm:grid-cols-2 sm:p-10 lg:grid-cols-4 lg:divide-x lg:divide-border/60">
            {stats.map((s, i) => (
              <div key={s.label} className={`text-center ${i > 0 ? "lg:pl-6" : ""}`}>
                <div className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                  <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals} />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ---------------- What we build (service areas) ---------------- */
const areas = [
  {
    icon: ShoppingCart,
    title: "AI Procurement",
    body: "ProcLeo, our flagship product, runs procurement end to end - sourcing, buying, AP, and analytics with AI at every step.",
    href: "/features",
    flagship: true,
  },
  {
    icon: RefreshCw,
    title: "Digital Transformation",
    body: "We modernize the systems and workflows enterprises depend on - replacing manual, disconnected processes with intelligent ones.",
    href: DEMO_HREF,
  },
  {
    icon: Bot,
    title: "AI Consulting",
    body: "From strategy to deployment, we help enterprises apply AI where it changes the economics - not where it makes a demo.",
    href: DEMO_HREF,
  },
  {
    icon: Layers,
    title: "Enterprise Platforms",
    body: "Configurable, secure platforms built for scale - multi-entity, multi-region, and ready for the way large organizations operate.",
    href: DEMO_HREF,
  },
  {
    icon: Zap,
    title: "Automation",
    body: "Workflow and document automation that removes the repetitive glue work, so teams spend their time on decisions.",
    href: "/features/workflow-automation",
  },
  {
    icon: Cloud,
    title: "Cloud & Data",
    body: "Cloud-native architecture and unified data - so every insight is live, every integration is real-time, and nothing is siloed.",
    href: DEMO_HREF,
  },
]

export function WhatWeBuild() {
  return (
    <section className="border-y border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-15">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><SectionBadge tone="primary" icon={Sparkles}>What we build</SectionBadge></Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Intelligent software, across the enterprise
          </Reveal>
          <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground">
            RiditStack is an enterprise AI company. We build products and platforms that make large
            organizations faster, leaner, and smarter - anchored by our flagship procurement product, ProcLeo.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={(i % 3) * 70}>
              <Link
                href={a.href}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
                  a.flagship
                    ? "border-primary/30 bg-gradient-to-br from-primary/10 via-card to-card"
                    : "border-border bg-gradient-to-b from-card to-card/50 hover:border-primary/30"
                }`}
              >
                {/* Hover glow bloom */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-[var(--brand-2)] group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/25">
                    <a.icon className="h-5 w-5" />
                  </div>
                  {a.flagship && (
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      Flagship
                    </span>
                  )}
                </div>
                <h3 className="relative mt-4 flex items-center gap-1.5 font-semibold">
                  {a.title}
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="relative mt-1.5 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- ProcLeo flagship highlight ---------------- */
const procleoMetrics = [
  { value: "40+", label: "AI-powered modules" },
  { value: "80%", label: "less manual work" },
  { value: "< 2 wks", label: "to first workflow live" },
]

const procleoCallouts = [
  { icon: Sparkles, title: "AI Procurement", body: "AI at every step, from intake to payment.", href: "/features/ai-procurement" },
  { icon: MessageSquare, title: "AI Copilot", body: "Ask procurement anything, in plain language.", href: "/features/ai-copilot" },
  { icon: Tag, title: "Asset Management", body: "Track every asset from purchase to disposal.", href: "/features/asset-management" },
  { icon: Boxes, title: "Inventory", body: "Auto-replenish before you ever run out.", href: "/features/inventory" },
]

export function ProcleoHighlight() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:py-15">
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionBadge tone="primary" icon={ShoppingCart}>Flagship product · ProcLeo</SectionBadge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              AI procurement, from request to payment
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              ProcLeo is RiditStack&apos;s flagship AI procurement product. It unifies intake, sourcing,
              suppliers, invoicing, and analytics on one intelligent record - so procurement runs itself and
              finance stays in control.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {procleoCallouts.map((c) => (
                <Link
                  key={c.title}
                  href={c.href}
                  className="group flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <c.icon className="h-4 w-4" />
                  </span>
                  <span>
                    <span className="flex items-center gap-1 text-sm font-semibold">
                      {c.title}
                      <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{c.body}</span>
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" className="group btn-shine" asChild>
                <Link href="/features">
                  Explore ProcLeo
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={DEMO_HREF}>
                  Book a demo
                  <CalendarDays className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} variant="scale">
            <Tilt max={5}>
              <FeatureMock
                name="ProcLeo · AI Procurement"
                icon={ShoppingCart}
                metrics={procleoMetrics}
                highlights={[
                  "Guided intake that routes itself",
                  "Touchless 3-way invoice matching",
                  "AI copilot grounded in your data",
                  "Live spend analytics and savings",
                ]}
              />
            </Tilt>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
