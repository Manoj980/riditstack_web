"use client"

import * as React from "react"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import {
  Bot,
  FileText,
  ShoppingCart,
  Users,
  BarChart3,
  Plug,
  Check,
  Sparkles,
  ArrowUpRight,
  Layers,
} from "lucide-react"

type Feature = {
  id: string
  icon: React.ElementType
  title: string
  tagline: string
  description: string
  bullets: string[]
  visual: React.ReactNode
}

const features: Feature[] = [
  {
    id: "ap",
    icon: Bot,
    title: "AI-powered AP automation",
    tagline: "Invoices that approve themselves",
    description:
      "AI captures, codes, and 3-way-matches every invoice in seconds — flagging only the exceptions that need a human.",
    bullets: ["3-way matching", "Duplicate & fraud detection", "Touchless approvals"],
    visual: <ApVisual />,
  },
  {
    id: "intake",
    icon: FileText,
    title: "Intake & approvals",
    tagline: "One front door for every request",
    description:
      "Guided intake routes each request to the right approver automatically, with full context and zero email threads.",
    bullets: ["No-code workflow builder", "Policy-aware routing", "Slack & email approvals"],
    visual: <IntakeVisual />,
  },
  {
    id: "po",
    icon: ShoppingCart,
    title: "Purchasing & POs",
    tagline: "Real-time control across departments",
    description:
      "Create, track, and reconcile purchase orders against budgets the moment they're raised — never after the fact.",
    bullets: ["Budget checks at source", "Live PO tracking", "Auto receipt matching"],
    visual: <PoVisual />,
  },
  {
    id: "suppliers",
    icon: Users,
    title: "Supplier management",
    tagline: "Every vendor, one record",
    description:
      "A single hub for onboarding, contracts, and performance — so renewals never sneak up and risk stays visible.",
    bullets: ["Centralized vendor records", "Renewal reminders", "Performance scoring"],
    visual: <SupplierVisual />,
  },
  {
    id: "spend",
    icon: BarChart3,
    title: "Spend & budgets",
    tagline: "Decisions backed by live data",
    description:
      "Drill into spend by team, category, or vendor in real time, with budgets that update as money is committed.",
    bullets: ["Live spend analytics", "Budget alerts", "Board-ready reporting"],
    visual: <SpendVisual />,
  },
  {
    id: "integrations",
    icon: Plug,
    title: "Integrations",
    tagline: "Plugs into your stack in days",
    description:
      "Sync your ERP, accounting, and SSO through a documented API and prebuilt connectors — no rip-and-replace.",
    bullets: ["NetSuite, SAP, QuickBooks", "SSO & SCIM", "Open REST API"],
    visual: <IntegrationsVisual />,
  },
]

const ROTATE_MS = 5000

export function Features() {
  const [active, setActive] = React.useState(0)
  const [paused, setPaused] = React.useState(false)
  const tabsRef = React.useRef<(HTMLButtonElement | null)[]>([])

  // Auto-advance (Linear-style), paused on interaction and when reduced motion is set
  React.useEffect(() => {
    if (paused) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches)
      return
    const id = window.setInterval(() => setActive((i) => (i + 1) % features.length), ROTATE_MS)
    return () => window.clearInterval(id)
  }, [paused])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return
    e.preventDefault()
    setPaused(true)
    const next =
      e.key === "ArrowDown"
        ? (active + 1) % features.length
        : (active - 1 + features.length) % features.length
    setActive(next)
    tabsRef.current[next]?.focus()
  }

  const current = features[active]

  return (
    <section className="relative overflow-hidden px-4 py-18 sm:py-21">
      {/* Calm tinted surface — a change of shade for rhythm, no gradient wash */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 border-y border-border bg-muted/40" />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionBadge tone="primary" icon={Layers}>
              The platform
            </SectionBadge>
          </Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            One platform from request to reconciliation
          </Reveal>
          <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Explore the modules that replace your patchwork of tools — each one
            sharing the same data, so nothing slips through the cracks.
          </Reveal>
        </div>

        {/* Interactive explorer */}
        <Reveal delay={120} variant="scale" className="mt-14 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)]">
          {/* Tab list */}
          <div
            role="tablist"
            aria-label="Platform capabilities"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            onMouseEnter={() => setPaused(true)}
            onFocusCapture={() => setPaused(true)}
            className="flex flex-col gap-2"
          >
            {features.map((f, i) => {
              const selected = i === active
              return (
                <button
                  key={f.id}
                  ref={(el) => {
                    tabsRef.current[i] = el
                  }}
                  role="tab"
                  type="button"
                  id={`feature-tab-${f.id}`}
                  aria-selected={selected}
                  aria-controls={`feature-panel-${f.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActive(i)}
                  className={`group relative flex items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    selected
                      ? "border-transparent bg-card shadow-lg border-gradient"
                      : "border-border bg-card/40 hover:border-primary/30 hover:bg-card/70"
                  }`}
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors ${
                      selected
                        ? "bg-gradient-to-br from-primary to-[var(--brand-2)] text-primary-foreground shadow-lg shadow-primary/20"
                        : "bg-muted text-muted-foreground group-hover:text-primary"
                    }`}
                  >
                    <f.icon className="h-5 w-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold tracking-tight">{f.title}</span>
                    </div>
                    <p className="mt-0.5 truncate text-sm text-muted-foreground">{f.tagline}</p>
                  </div>
                  <ArrowUpRight
                    className={`h-4 w-4 shrink-0 transition-all duration-300 ${
                      selected ? "text-primary opacity-100" : "text-muted-foreground/40 opacity-0 group-hover:opacity-100"
                    }`}
                  />
                  {/* Auto-advance progress bar */}
                  {selected && !paused && (
                    <span
                      key={active}
                      aria-hidden
                      className="absolute bottom-0 left-4 right-4 h-0.5 origin-left rounded-full bg-primary/70"
                      style={{ animation: `grow-right ${ROTATE_MS}ms linear forwards`, transform: "scaleX(0)", transformOrigin: "left" }}
                    />
                  )}
                </button>
              )
            })}
          </div>

          {/* Preview panel */}
          <div
            role="tabpanel"
            id={`feature-panel-${current.id}`}
            aria-labelledby={`feature-tab-${current.id}`}
            className="spotlight relative flex min-h-[22rem] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-xl sm:p-8"
            onMouseMove={(e) => {
              const r = e.currentTarget.getBoundingClientRect()
              e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`)
              e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`)
            }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />

            {/* key forces a fresh fade/slide on change */}
            <div key={current.id} className="relative flex h-full flex-col" style={{ opacity: 0 }} ref={animateIn}>
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                {current.tagline}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">{current.title}</h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {current.description}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {current.bullets.map((b) => (
                  <li
                    key={b}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/80"
                  >
                    <Check className="h-3.5 w-3.5 text-primary" />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Live mini-mock */}
              <div className="mt-auto pt-7">{current.visual}</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* Fades the panel content in whenever it mounts (on tab change) */
function animateIn(node: HTMLDivElement | null) {
  if (!node) return
  node.style.opacity = "0"
  node.style.transform = "translateY(10px)"
  requestAnimationFrame(() => {
    node.style.transition = "opacity 0.45s cubic-bezier(0.22,1,0.36,1), transform 0.45s cubic-bezier(0.22,1,0.36,1)"
    node.style.opacity = "1"
    node.style.transform = "none"
  })
}

/* ---------- Per-feature mini visuals ---------- */

function MockShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border/70 bg-background/60 p-3.5">{children}</div>
  )
}

function ApVisual() {
  return (
    <MockShell>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Invoice #INV-20418</span>
        <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.72_0.15_150)]/12 px-2 py-0.5 font-semibold text-[oklch(0.5_0.13_150)]">
          <Check className="h-3 w-3" /> Matched
        </span>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2 text-[11px]">
        {[
          ["PO", "✓ 4471"],
          ["Receipt", "✓ GRN-92"],
          ["Amount", "$28,900"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-lg bg-muted/60 p-2">
            <div className="text-muted-foreground">{k}</div>
            <div className="mt-0.5 font-medium">{v}</div>
          </div>
        ))}
      </div>
      <div className="mt-3 flex items-center gap-1.5 text-[11px] text-primary">
        <Sparkles className="h-3 w-3" /> Approved by AI in 1.4s
      </div>
    </MockShell>
  )
}

function IntakeVisual() {
  const steps = ["Request", "Manager", "Finance", "PO"]
  return (
    <MockShell>
      <div className="text-xs font-medium">Approval route</div>
      <div className="mt-3 flex items-center">
        {steps.map((s, i) => (
          <React.Fragment key={s}>
            <div className="flex flex-col items-center gap-1">
              <div
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-semibold ${
                  i < 2 ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {i < 2 ? <Check className="h-3.5 w-3.5" /> : i + 1}
              </div>
              <span className="text-[10px] text-muted-foreground">{s}</span>
            </div>
            {i < steps.length - 1 && (
              <div className={`mx-1 h-px flex-1 ${i < 1 ? "bg-primary/60" : "bg-border"}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </MockShell>
  )
}

function PoVisual() {
  const rows = [
    ["PO-4471", "AWS", "$28,900", 72],
    ["PO-4470", "Figma", "$1,440", 18],
    ["PO-4469", "Slack", "$6,200", 44],
  ] as const
  return (
    <MockShell>
      <div className="space-y-2.5">
        {rows.map(([po, vendor, amt, pct]) => (
          <div key={po} className="flex items-center gap-3 text-[11px]">
            <span className="w-16 font-medium">{po}</span>
            <span className="w-12 text-muted-foreground">{vendor}</span>
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-muted">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-[var(--brand-2)]" style={{ width: `${pct}%` }} />
            </div>
            <span className="w-14 text-right font-medium">{amt}</span>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function SupplierVisual() {
  const vendors = [
    ["AC", "Acme Corp", "A+", "Renews 14d"],
    ["NW", "Northwind", "A", "Active"],
    ["VX", "Vertex Ltd", "B+", "Active"],
  ] as const
  return (
    <MockShell>
      <div className="space-y-2">
        {vendors.map(([init, name, score, status]) => (
          <div key={name} className="flex items-center gap-2.5 text-[11px]">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-muted text-[9px] font-semibold text-muted-foreground">
              {init}
            </div>
            <span className="flex-1 font-medium">{name}</span>
            <span className="rounded-full bg-primary/10 px-1.5 py-0.5 font-semibold text-primary">{score}</span>
            <span className="w-16 text-right text-muted-foreground">{status}</span>
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function SpendVisual() {
  const bars = [40, 62, 38, 71, 55, 84]
  return (
    <MockShell>
      <div className="flex items-center justify-between text-xs">
        <span className="font-medium">Spend by category</span>
        <span className="text-muted-foreground">Q2</span>
      </div>
      <div className="mt-3 flex h-20 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 items-end">
            <div
              data-bar
              className={`w-full rounded-md ${i === bars.length - 1 ? "bg-gradient-to-t from-primary to-[var(--brand-2)]" : "bg-primary/15"}`}
              style={{ height: `${h}%`, transformOrigin: "bottom", animation: `grow-up 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 70}ms both` }}
            />
          </div>
        ))}
      </div>
    </MockShell>
  )
}

function IntegrationsVisual() {
  const apps = ["NetSuite", "SAP", "QuickBooks", "Okta", "Slack", "Xero"]
  return (
    <MockShell>
      <div className="grid grid-cols-3 gap-2">
        {apps.map((a) => (
          <div
            key={a}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-border/70 bg-muted/40 px-2 py-2 text-[11px] font-medium"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.15_150)]" />
            {a}
          </div>
        ))}
      </div>
    </MockShell>
  )
}
