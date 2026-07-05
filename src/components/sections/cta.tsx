import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { ArrowRight, Shield, Award, Check } from "lucide-react"
import Link from "next/link"

const badges = [
  { icon: Shield, label: "B Corp Certified" },
  { icon: Award, label: "IDC MarketScape Major Player" },
  { icon: Award, label: "Spend Matters Recommended" },
]

const assurances = [
  "No credit card required",
  "30-day free trial",
  "Enterprise-grade security",
]

export function CTA() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        <Reveal variant="scale">
          <div className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
            {/* Decorative backdrop */}
            <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
              <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-40" />
              <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
            </div>

            {/* Certification badges */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
              {badges.map((badge) => (
                <div key={badge.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <badge.icon className="h-4 w-4 text-primary" />
                  <span className="font-medium">{badge.label}</span>
                </div>
              ))}
            </div>

            <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
              Take command of your
              <span className="text-gradient-animated"> spend</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Join 1,000+ finance and procurement teams that trust RiditStack to
              control spend and bank measurable savings — starting in week one.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button size="xl" className="group btn-shine w-full sm:w-auto" asChild>
                <Link href="/contact">
                  Start free trial
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="w-full bg-background/60 backdrop-blur sm:w-auto" asChild>
                <Link href="/contact">Schedule a demo</Link>
              </Button>
            </div>

            <div className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-border pt-8 text-sm text-muted-foreground">
              {assurances.map((item) => (
                <span key={item} className="inline-flex items-center gap-1.5">
                  <Check className="h-4 w-4 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
