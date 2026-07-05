import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { HeroShowcase } from "@/components/sections/home/hero-showcase"
import { ArrowRight, CalendarDays, Sparkles, Star, ShieldCheck, Lock, Globe } from "lucide-react"
import Link from "next/link"

const DEMO_HREF = "/contact?type=demo"

const compliance = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: Lock, label: "ISO 27001" },
  { icon: Globe, label: "GDPR" },
]

const heroLogos = ["Northwind", "Vertex", "Lumina", "Meridian"]

export function HomeHero() {
  return (
    <section className="relative -mt-16 overflow-hidden px-4 pt-24 pb-16 sm:pt-28 lg:pb-28">
      {/* Layered premium background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-mesh opacity-70" />
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.5]" />
        <div className="absolute -top-48 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full aurora animate-aurora" />
        <div className="absolute -left-24 top-24 h-80 w-80 orb animate-drift" />
        <div className="absolute right-[-6rem] top-40 h-72 w-72 orb orb-2 animate-drift [animation-delay:-8s]" />
        <div className="absolute left-[16%] top-0 h-[36rem] w-px beam animate-beam" />
        <div className="absolute right-[30%] top-0 h-[30rem] w-px beam animate-beam [animation-delay:-4s]" />
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10">
          {/* ---- Left: copy ---- */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
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
                  Meet ProcLeo — flagship AI procurement
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Reveal>

            <Reveal
              delay={80}
              as="h1"
              className="mt-6 max-w-xl text-balance text-4xl font-semibold leading-[1.03] tracking-tight sm:text-6xl lg:text-[4rem] xl:text-[3.5rem]"
            >
              AI Procurement Built for 
              <span className="text-gradient-animated"> Modern Enterprises</span>
            </Reveal>

            <Reveal delay={160} as="p" className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              RiditStack builds intelligent enterprise software — spanning AI procurement, automation,
              cloud, and data. Our flagship product, ProcLeo, runs procurement end to end with AI at every step.
            </Reveal>

            <Reveal delay={240} className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
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

            {/* Rating */}
            <Reveal delay={300} className="mt-7 flex items-center gap-2 text-sm text-muted-foreground">
              <span className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </span>
              Rated 4.8/5 by 1,000+ procurement and finance teams
            </Reveal>

            {/* Compliance + logos */}
            <Reveal delay={340} className="mt-8 flex w-full flex-col items-center gap-5 border-t border-border/70 pt-7 lg:items-start">
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 lg:justify-start">
                {compliance.map((c) => (
                  <span key={c.label} className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                    <c.icon className="h-4 w-4 text-primary/80" />
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">
                {heroLogos.map((name) => (
                  <span key={name} className="text-base font-semibold tracking-tight text-muted-foreground/55">
                    {name}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* ---- Right: layered product cockpit ---- */}
          <Reveal delay={200} variant="scale" className="mt-4 self-start lg:mt-4">
            <HeroShowcase />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
