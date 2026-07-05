import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { ReceiptText, EyeOff, Hourglass, AlertTriangle } from "lucide-react"

const pains = [
  {
    icon: ReceiptText,
    stat: "5–10%",
    statLabel: "of spend lost to leakage",
    title: "Spend leaks everywhere",
    description:
      "Maverick buying, duplicate invoices, and renewals nobody caught. The savings are real — they're just invisible.",
  },
  {
    icon: EyeOff,
    stat: "0",
    statLabel: "single source of truth",
    title: "Nobody has the full picture",
    description:
      "Requests live in email, approvals in chat, budgets in spreadsheets. By the time finance reconciles it, the quarter's gone.",
  },
  {
    icon: Hourglass,
    stat: "21 days",
    statLabel: "average month-end close",
    title: "Everything moves too slowly",
    description:
      "Manual data entry and approval ping-pong stall every purchase. Teams wait, vendors wait, and the close drags on.",
  },
]

export function Problem() {
  return (
    <section className="relative overflow-hidden px-4 py-18 sm:py-21">
      {/* Calm, neutral backdrop — the coral accents live in the cards, not the background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-[0.22] mask-fade-b" />

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionBadge tone="accent" icon={AlertTriangle}>
              The problem
            </SectionBadge>
          </Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Procurement wasn&apos;t built for how you work now
          </Reveal>
          <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Growth multiplies purchases — and the tools meant to control them turn
            into the bottleneck. Here&apos;s what it actually costs.
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pains.map((pain, index) => (
            <Reveal key={pain.title} delay={index * 90} className="h-full">
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -left-10 -top-10 h-32 w-32 rounded-full bg-accent/15 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
                />
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent transition-transform group-hover:scale-110">
                  <pain.icon className="h-5 w-5" />
                </div>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="bg-gradient-to-br from-accent to-[oklch(0.62_0.2_20)] bg-clip-text text-3xl font-semibold tracking-tight text-transparent sm:text-4xl">
                    {pain.stat}
                  </span>
                  <span className="text-sm text-muted-foreground">{pain.statLabel}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold tracking-tight">{pain.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {pain.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
