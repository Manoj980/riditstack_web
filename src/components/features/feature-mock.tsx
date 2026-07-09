import type { LucideIcon } from "lucide-react"
import { Check } from "lucide-react"

type FeatureMockProps = {
  name: string
  icon: LucideIcon
  metrics: { value: string; label: string }[]
  highlights: string[]
}

/**
 * Reusable, abstract "product window" mock rendered in the solution section of
 * every feature page. It adapts to each module using its own metrics and
 * highlights, so the visual language is consistent without ever repeating the
 * same static image. Pure server component - no client JS.
 */
export function FeatureMock({ name, icon: Icon, metrics, highlights }: FeatureMockProps) {
  return (
    <div className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card p-5 shadow-xl glow-soft sm:p-6">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full aurora animate-aurora opacity-25" />
        <div className="absolute inset-0 bg-hex opacity-30 mask-fade-b" />
      </div>

      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-border/70 pb-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.7_0.17_30)]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.82_0.13_90)]/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.72_0.15_150)]/70" />
        <span className="ml-2 inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
          <Icon className="h-3.5 w-3.5" />
          {name}
        </span>
      </div>

      {/* Metric tiles */}
      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {metrics.map((m, i) => (
          <div
            key={m.label}
            className={`rounded-xl border border-border/70 p-3 ${
              i === 0
                ? "bg-gradient-to-br from-primary/12 to-[var(--brand-2)]/10"
                : "bg-background/60"
            }`}
          >
            <div className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {m.value}
            </div>
            <div className="mt-1 text-[11px] leading-tight text-muted-foreground">
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Highlight checklist */}
      <div className="mt-4 space-y-2">
        {highlights.map((h, i) => (
          <div
            key={h}
            className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/60 px-3 py-2.5"
          >
            <span
              className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-lg ${
                i === 0
                  ? "bg-gradient-to-br from-primary to-[var(--brand-2)] text-primary-foreground"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <Check className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-medium text-foreground/90">{h}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
