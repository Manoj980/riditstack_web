import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { ArrowRight, Users, Building2 } from "lucide-react"
import { solutions } from "@/content/solutions"
import { industries } from "@/content/industries"

export function HomeSolutions() {
  return (
    <section className="border-t border-border bg-muted/40 px-4 py-18 sm:py-21">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionBadge tone="primary" icon={Users}>Enterprise solutions</SectionBadge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Shaped to your team</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/solutions" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              All solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 4) * 60}>
              <Link
                href={`/solutions/${s.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-3.5 flex items-center gap-1.5 text-sm font-semibold">
                  {s.name}
                  <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.summary}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function HomeIndustries() {
  return (
    <section className="px-4 py-18 sm:py-21">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionBadge tone="primary" icon={Building2}>Industries</SectionBadge>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Tuned to your sector</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/industries" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              All industries
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 50}>
              <Link
                href={`/industries/${ind.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3.5 transition-all hover:-translate-y-0.5 hover:border-primary/30 hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-transform group-hover:scale-110">
                  <ind.icon className="h-4 w-4" />
                </span>
                <span className="flex-1 text-sm font-medium">{ind.name}</span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
