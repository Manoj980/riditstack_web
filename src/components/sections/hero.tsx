import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"
import { DashboardShowcase } from "@/components/sections/dashboard-showcase"
import { ArrowRight, Sparkles, Star, PlayCircle } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-10 pb-16 sm:pt-16 sm:pb-24">
      {/* Layered animated background field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        {/* Fine grid with radial fade */}
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.55]" />
        {/* Central aurora */}
        <div className="absolute -top-48 left-1/2 h-[46rem] w-[46rem] -translate-x-1/2 rounded-full aurora animate-aurora" />
        {/* Drifting brand orbs */}
        <div className="absolute -left-24 top-24 h-80 w-80 orb animate-drift" />
        <div className="absolute -right-20 top-40 h-72 w-72 orb orb-2 animate-drift [animation-delay:-8s]" />
        <div className="absolute left-1/3 top-72 h-64 w-64 orb orb-3 animate-float-slow opacity-40" />
        {/* Vertical light beams */}
        <div className="absolute left-[18%] top-0 h-[36rem] w-px beam animate-beam" />
        <div className="absolute right-[22%] top-0 h-[30rem] w-px beam animate-beam [animation-delay:-4s]" />
        {/* Top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow badge */}
          <Reveal>
            <Link
              href="/features"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-2 pr-4 text-sm font-medium shadow-sm backdrop-blur transition-all hover:border-primary/40 hover:shadow-md"
            >
              <span className="animate-badge-pulse inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                <Sparkles className="h-3.5 w-3.5" />
                New
              </span>
              <span className="text-muted-foreground transition-colors group-hover:text-foreground">
                AI-powered AP automation is here
              </span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>

          {/* Headline */}
          <Reveal delay={80} as="h1" className="mt-6 max-w-4xl text-balance text-5xl font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-[5.25rem]">
            Stop chasing spend.
            <span className="text-gradient-animated"> Start commanding it.</span>
          </Reveal>

          {/* Subhead */}
          <Reveal delay={160} as="p" className="mt-6 max-w-2xl text-xl leading-relaxed text-muted-foreground sm:text-2xl">
            RiditStack centralizes every request, PO, and invoice on one AI-driven
            platform — so finance and procurement teams cut costs, close faster, and
            scale without the spreadsheets.
          </Reveal>

          {/* CTAs */}
          <Reveal delay={240} className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Button size="xl" className="group btn-shine w-full sm:w-auto" asChild>
              <Link href="/contact">
                Book a demo
                <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="group w-full bg-background/60 backdrop-blur sm:w-auto" asChild>
              <Link href="/features">
                <PlayCircle className="text-primary transition-transform group-hover:scale-110" />
                Explore the platform
              </Link>
            </Button>
          </Reveal>

          {/* Micro trust line */}
          <Reveal delay={300} className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
            <span>Rated 4.8/5 across 850+ verified reviews</span>
          </Reveal>
        </div>

        {/* Product mockup — a real, interactive-looking enterprise dashboard */}
        <Reveal delay={120} variant="scale" className="relative mx-auto mt-16 max-w-5xl">
          {/* Rotating conic glow + soft gradient bloom behind the shot */}
          <div aria-hidden className="absolute -inset-x-16 -top-16 bottom-0 -z-10 rounded-[3rem] conic-glow animate-spin-slow" />
          <div aria-hidden className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[2rem] bg-gradient-to-b from-primary/20 via-secondary/10 to-transparent blur-2xl" />
          <Tilt max={5} className="group">
            <DashboardShowcase />
          </Tilt>

          {/* Floating accent chips for depth */}
          <div
            aria-hidden
            className="animate-float absolute -left-4 top-24 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur lg:block"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[oklch(0.72_0.15_150)]/15 text-[oklch(0.5_0.13_150)]">
                <Sparkles className="h-4 w-4" />
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold leading-none">$1.27M saved</div>
                <div className="mt-1 text-[11px] text-muted-foreground">this quarter</div>
              </div>
            </div>
          </div>
          <div
            aria-hidden
            className="animate-float-slow absolute -right-4 top-52 hidden rounded-2xl border border-border bg-card/90 px-4 py-3 shadow-xl backdrop-blur lg:block [animation-delay:-3s]"
          >
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <ArrowRight className="h-4 w-4 -rotate-45" />
              </span>
              <div className="text-left">
                <div className="text-sm font-semibold leading-none">98% auto-matched</div>
                <div className="mt-1 text-[11px] text-muted-foreground">invoices</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
