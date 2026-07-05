import { Reveal } from "@/components/ui/reveal"
import { Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type PageHeroProps = {
  /** Small pill label above the headline */
  eyebrow?: string
  eyebrowIcon?: LucideIcon
  /** Plain leading part of the headline */
  title: string
  /** Gradient-highlighted trailing part of the headline */
  highlight?: string
  subtitle?: string
  children?: React.ReactNode
}

/**
 * Shared marketing page header — matches the homepage hero's layered
 * aurora/grid/beam backdrop so every inner page reads as one product.
 */
export function PageHero({
  eyebrow,
  eyebrowIcon: EyebrowIcon = Sparkles,
  title,
  highlight,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden px-4 pt-16 pb-14 sm:pt-24 sm:pb-20">
      {/* Layered animated background field */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.5]" />
        <div className="absolute -top-52 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-45" />
        <div className="absolute -left-20 top-16 h-72 w-72 orb animate-drift" />
        <div className="absolute -right-16 top-24 h-64 w-64 orb orb-2 animate-drift [animation-delay:-8s]" />
        <div className="absolute left-[20%] top-0 h-[26rem] w-px beam animate-beam" />
        <div className="absolute right-[24%] top-0 h-[22rem] w-px beam animate-beam [animation-delay:-4s]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col items-center text-center">
          {eyebrow && (
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 py-1.5 pl-3 pr-4 text-sm font-medium shadow-sm backdrop-blur">
                <span className="inline-flex items-center gap-1.5 text-primary">
                  <EyebrowIcon className="h-4 w-4" />
                </span>
                <span className="text-muted-foreground">{eyebrow}</span>
              </span>
            </Reveal>
          )}

          <Reveal
            delay={80}
            as="h1"
            className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
          >
            {title}
            {highlight && <span className="text-gradient-animated"> {highlight}</span>}
          </Reveal>

          {subtitle && (
            <Reveal
              delay={160}
              as="p"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {subtitle}
            </Reveal>
          )}

          {children && (
            <Reveal delay={240} className="mt-8 w-full">
              {children}
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
