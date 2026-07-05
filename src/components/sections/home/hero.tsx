import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { DashboardShowcase } from "@/components/sections/dashboard-showcase"
import { ArrowRight, CalendarDays, Sparkles, Star } from "lucide-react"
import Link from "next/link"

const DEMO_HREF = "/contact?type=demo"

export function HomeHero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-16 sm:pt-16 sm:pb-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.55]" />
        <div className="absolute -top-48 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full aurora animate-aurora" />
        <div className="absolute -left-24 top-24 h-80 w-80 orb animate-drift" />
        <div className="absolute -right-20 top-40 h-72 w-72 orb orb-2 animate-drift [animation-delay:-8s]" />
        <div className="absolute left-1/3 top-72 h-64 w-64 orb orb-3 animate-float-slow opacity-40" />
        <div className="absolute left-[18%] top-0 h-[36rem] w-px beam animate-beam" />
        <div className="absolute right-[22%] top-0 h-[30rem] w-px beam animate-beam [animation-delay:-4s]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <Link
              href="/features"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-2 pr-4 text-sm font-medium shadow-sm backdrop-blur transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="animate-badge-pulse inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                Enterprise AI
              </span>
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                Meet ProcLeo — our flagship AI procurement product
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          <Reveal
            delay={80}
            as="h1"
            className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]"
          >
            The AI company the
            <span className="text-gradient-animated"> enterprise runs on.</span>
          </Reveal>

          <Reveal delay={160} as="p" className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            RiditStack builds intelligent enterprise software — spanning AI procurement, automation,
            cloud, and data. Our flagship product, ProcLeo, runs procurement end to end with AI at every step.
          </Reveal>

          <Reveal delay={240} className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="xl" className="group btn-shine w-full sm:w-auto" asChild>
              <Link href={DEMO_HREF}>
                Book a demo
                <CalendarDays className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="group w-full bg-background/60 backdrop-blur sm:w-auto" asChild>
              <Link href="/features">
                Explore ProcLeo
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </Reveal>

          <Reveal delay={300} className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex gap-0.5 text-primary">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-current" />
              ))}
            </span>
            Rated 4.8/5 by 1,000+ procurement and finance teams
          </Reveal>
        </div>

        <Reveal delay={200} variant="scale" className="mt-16">
          <DashboardShowcase />
        </Reveal>
      </div>
    </section>
  )
}
