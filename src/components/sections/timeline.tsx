import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { Clock, Target, TrendingUp, Rocket, Sparkles } from "lucide-react"

const timelineSteps = [
  {
    icon: Clock,
    timeframe: "2-8 weeks",
    title: "Initial go-live",
    description:
      "Quick deployment with core procurement workflows and guided onboarding to get your team productive immediately.",
  },
  {
    icon: Target,
    timeframe: "1-4 months",
    title: "Operational excellence",
    description:
      "Full feature adoption with customized workflows, integrations, and advanced automation across teams.",
  },
  {
    icon: TrendingUp,
    timeframe: "4-12 months",
    title: "ROI achievement",
    description:
      "Measurable cost savings, process efficiencies, and improved compliance from optimized procurement.",
  },
  {
    icon: Rocket,
    timeframe: "12+ months",
    title: "Business growth",
    description:
      "Strategic procurement insights that drive smarter decisions and continuous improvement company-wide.",
  },
]

export function Timeline() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:py-24 lg:py-32">
      {/* Subtle dotted texture only - the gradient rail carries the color here */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-dots opacity-40 mask-fade-b" />

      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionBadge tone="primary" icon={Sparkles}>
              The benefits
            </SectionBadge>
          </Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Value that compounds at every stage
          </Reveal>
          <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground sm:text-xl">
            From first go-live to company-wide transformation - here&apos;s what
            RiditStack returns to your team at each step of the journey.
          </Reveal>
        </div>

        {/* ---------- Desktop: horizontal connected stepper ---------- */}
        <div className="relative mt-16 hidden lg:block">
          {/* Gradient rail behind the nodes */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-8 h-0.5 mask-fade-edges bg-gradient-to-r from-primary/40 via-primary/70 to-primary/40"
          />
          <ol className="relative grid grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 110} className="group flex flex-col items-center">
                {/* Node */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[var(--brand-2)] text-white shadow-lg shadow-primary/25 ring-4 ring-background transition-transform duration-300 group-hover:-translate-y-1">
                  <step.icon className="h-7 w-7" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-[11px] font-bold text-primary shadow-sm">
                    {index + 1}
                  </span>
                </div>

                {/* Card */}
                <div className="relative mt-7 flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/30 group-hover:shadow-xl">
                  {/* Ghosted step numeral */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-1 -top-3 select-none text-7xl font-bold leading-none text-primary/[0.07]"
                  >
                    {index + 1}
                  </span>
                  <span className="relative mx-auto inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {step.timeframe}
                  </span>
                  <h3 className="relative mt-3 text-xl font-semibold tracking-tight">{step.title}</h3>
                  <p className="relative mt-2 text-[15px] leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* ---------- Mobile / tablet: vertical timeline ---------- */}
        <ol className="relative mt-12 space-y-5 lg:hidden">
          {/* Vertical spine */}
          <div
            aria-hidden
            className="absolute left-8 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary/60 via-primary/30 to-transparent"
          />
          {timelineSteps.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 90} className="relative flex gap-5">
              {/* Node */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-[var(--brand-2)] text-white shadow-lg shadow-primary/25 ring-4 ring-background">
                <step.icon className="h-7 w-7" />
                <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-background text-[11px] font-bold text-primary shadow-sm">
                  {index + 1}
                </span>
              </div>
              {/* Card */}
              <div className="flex-1 rounded-2xl border border-border bg-card/70 p-5 shadow-sm backdrop-blur-sm">
                <span className="inline-flex w-fit rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {step.timeframe}
                </span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
