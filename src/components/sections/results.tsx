"use client"

import * as React from "react"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { TrendingUp } from "lucide-react"

type Stat = {
  prefix?: string
  value: number
  decimals?: number
  suffix?: string
  label: string
  sub: string
}

const stats: Stat[] = [
  { prefix: "$", value: 2.4, decimals: 1, suffix: "M", label: "average annual savings", sub: "captured in year one" },
  { value: 98, suffix: "%", label: "of invoices auto-matched", sub: "without human touch" },
  { value: 80, suffix: "%", label: "faster month-end close", sub: "21 days → 4 days" },
  { value: 11, suffix: "×", label: "return on investment", sub: "within the first 12 months" },
]

function useCountUp(target: number, decimals: number, start: boolean) {
  const [val, setVal] = React.useState(0)
  React.useEffect(() => {
    if (!start) return
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(target)
      return
    }
    const duration = 1400
    let raf = 0
    let startTs = 0
    const tick = (ts: number) => {
      if (!startTs) startTs = ts
      const p = Math.min((ts - startTs) / duration, 1)
      // easeOutExpo for a premium settle
      const eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p)
      setVal(target * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [start, target, decimals])
  return val
}

function StatCard({ stat, start }: { stat: Stat; start: boolean }) {
  const val = useCountUp(stat.value, stat.decimals ?? 0, start)
  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-card/60 p-6 text-left">
      <div className="text-4xl font-semibold tracking-tight sm:text-5xl">
        <span className="text-gradient">
          {stat.prefix}
          {val.toFixed(stat.decimals ?? 0)}
          {stat.suffix}
        </span>
      </div>
      <div className="mt-3 text-base font-medium">{stat.label}</div>
      <div className="mt-1 text-sm text-muted-foreground">{stat.sub}</div>
    </div>
  )
}

export function Results() {
  const [start, setStart] = React.useState(false)
  const ref = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStart(true)
          obs.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="relative overflow-hidden px-4 py-18 sm:py-21">
      <div aria-hidden className="absolute inset-0 -z-10 border-y border-border bg-muted/40" />
      <div aria-hidden className="pointer-events-none absolute -top-28 left-1/2 -z-10 h-[32rem] w-[38rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-[0.32]" />

      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionBadge tone="primary" icon={TrendingUp}>
              The results
            </SectionBadge>
          </Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Outcomes the boardroom actually cares about
          </Reveal>
          <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground sm:text-xl">
            Not vanity metrics — the savings, speed, and control that show up on the
            P&amp;L within the first year.
          </Reveal>
        </div>

        <div ref={ref} className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 90} className="h-full">
              <StatCard stat={stat} start={start} />
            </Reveal>
          ))}
        </div>

        {/* Emotional proof — customer voice */}
        <Reveal delay={120} variant="scale" className="mx-auto mt-10 max-w-4xl">
          <figure className="relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-10">
            <div aria-hidden className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
            <blockquote className="relative text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              &ldquo;We cut our close from three weeks to four days and clawed back
              <span className="text-gradient"> $2.4M in the first year</span>. RiditStack
              didn&apos;t just digitize procurement — it gave finance the wheel.&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-primary to-[var(--brand-2)] text-sm font-semibold text-primary-foreground">
                JM
              </div>
              <div>
                <div className="text-sm font-semibold">Jordan Mehta</div>
                <div className="text-sm text-muted-foreground">VP Finance, Meridian Group</div>
              </div>
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  )
}
