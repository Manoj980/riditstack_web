import Link from "next/link"
import {
  ArrowRight,
  ChevronRight,
  Check,
  CalendarDays,
  Sparkles,
  Quote,
  Plug,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"
import { SectionBadge } from "@/components/ui/section-badge"
import { FeatureMock } from "@/components/features/feature-mock"
import { FeatureFaq } from "@/components/features/feature-faq"
import { INTEGRATION_LOGOS, type MarketingPage, type RelatedLink } from "@/content/marketing"

const DEMO_HREF = "/contact?type=demo"

export function MarketingPageTemplate({
  page,
  related,
}: {
  page: MarketingPage
  related: RelatedLink[]
}) {
  const parent =
    page.kind === "solution"
      ? { name: "Solutions", href: "/solutions" }
      : { name: "Industries", href: "/industries" }

  return (
    <>
      {/* ============================ HERO ============================ */}
      <section className="relative overflow-hidden px-4 pt-10 pb-14 sm:pt-16 sm:pb-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.5]" />
          <div className="absolute -top-52 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-40" />
          <div className="absolute -left-20 top-16 h-72 w-72 orb animate-drift" />
          <div className="absolute -right-16 top-24 h-64 w-64 orb orb-2 animate-drift [animation-delay:-8s]" />
          <div className="absolute left-[20%] top-0 h-[26rem] w-px beam animate-beam" />
          <div className="absolute right-[24%] top-0 h-[22rem] w-px beam animate-beam [animation-delay:-4s]" />
        </div>

        <div className="container mx-auto max-w-5xl">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              <Link href={parent.href} className="transition-colors hover:text-foreground">
                {parent.name}
              </Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="font-medium text-foreground">{page.name}</span>
            </nav>
          </Reveal>

          <div className="mt-6 flex flex-col items-center text-center">
            <Reveal delay={60}>
              <SectionBadge tone="primary" icon={page.icon}>
                {page.eyebrow}
              </SectionBadge>
            </Reveal>

            <Reveal
              delay={120}
              as="h1"
              className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
            >
              {page.hero.titleLead}{" "}
              <span className="text-gradient-animated">{page.hero.titleHighlight}</span>
            </Reveal>

            <Reveal
              delay={200}
              as="p"
              className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
            >
              {page.hero.subtitle}
            </Reveal>

            <Reveal delay={280} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Button size="xl" className="group btn-shine w-full sm:w-auto" asChild>
                <Link href={DEMO_HREF}>
                  Book a demo
                  <CalendarDays className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="group w-full bg-background/60 backdrop-blur sm:w-auto" asChild>
                <Link href="/features">
                  Explore the platform
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={360} className="mt-14">
            <div className="grid gap-4 rounded-3xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur sm:grid-cols-3 sm:p-8">
              {page.metrics.map((m) => (
                <div key={m.label} className="text-center">
                  <div className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{m.value}</div>
                  <div className="mt-1.5 text-sm text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================== PAIN POINTS =========================== */}
      <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionBadge tone="accent">The challenges</SectionBadge>
            </Reveal>
            <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {page.pains.heading}
            </Reveal>
            <Reveal delay={120} as="p" className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {page.pains.body}
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {page.pains.items.map((pain, i) => (
              <Reveal key={pain.title} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <pain.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{pain.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{pain.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== SOLUTION =========================== */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <SectionBadge tone="primary" icon={Sparkles}>
                The RiditStack approach
              </SectionBadge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">{page.solution.heading}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{page.solution.body}</p>
              <ul className="mt-7 space-y-3">
                {page.solution.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-[15px] leading-relaxed text-foreground/90">{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={120} variant="scale">
              <Tilt max={5}>
                <FeatureMock
                  name={page.name}
                  icon={page.icon}
                  metrics={page.metrics}
                  highlights={page.solution.highlights}
                />
              </Tilt>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== CAPABILITIES =========================== */}
      <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionBadge tone="primary">Capabilities</SectionBadge>
            </Reveal>
            <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              {page.capabilities.heading}
            </Reveal>
            <Reveal delay={120} as="p" className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {page.capabilities.subheading}
            </Reveal>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 70}>
                <div className="group h-full rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== WORKFLOW =========================== */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionBadge tone="primary">How it works</SectionBadge>
            </Reveal>
            <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
              A clear path from problem to outcome
            </Reveal>
          </div>

          <div className="relative mt-14 grid gap-6 md:grid-cols-4">
            <div aria-hidden className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />
            {page.workflow.map((step, i) => (
              <Reveal key={step.title} delay={i * 90} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-background text-lg font-semibold text-primary shadow-sm">
                  {i + 1}
                </div>
                <h3 className="mt-5 font-semibold">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* =========================== CUSTOMER STORY =========================== */}
      <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-5xl">
          <Reveal variant="scale">
            <figure className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-xl sm:p-12">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-16 -right-10 h-40 w-40 rounded-full aurora animate-aurora opacity-25" />
              </div>
              <Quote className="h-8 w-8 text-primary/40" />
              <blockquote className="mt-4 text-xl font-medium leading-relaxed tracking-tight text-foreground sm:text-2xl">
                &ldquo;{page.story.quote}&rdquo;
              </blockquote>
              <div className="mt-8 flex flex-col justify-between gap-6 border-t border-border pt-6 sm:flex-row sm:items-center">
                <figcaption>
                  <div className="font-semibold">{page.story.author}</div>
                  <div className="text-sm text-muted-foreground">
                    {page.story.role}, {page.story.company}
                  </div>
                </figcaption>
                <div className="text-left sm:text-right">
                  <div className="text-3xl font-semibold tracking-tight text-gradient">{page.story.metric}</div>
                  <div className="text-sm text-muted-foreground">{page.story.metricLabel}</div>
                </div>
              </div>
            </figure>
          </Reveal>
        </div>
      </section>

      {/* =========================== INTEGRATIONS =========================== */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <SectionBadge tone="primary" icon={Plug}>Integrations</SectionBadge>
            </Reveal>
            <Reveal delay={60} as="h2" className="mt-4 text-2xl font-semibold tracking-tight sm:text-3xl">
              Fits the systems you already run on
            </Reveal>
            <Reveal delay={120} as="p" className="mt-4 text-muted-foreground">
              RiditStack syncs bidirectionally with your ERP, finance, and identity stack - so procurement
              connects to everything without a rip-and-replace.{" "}
              <Link href="/features/integrations" className="font-medium text-primary hover:underline">
                See all integrations
              </Link>
              .
            </Reveal>
          </div>
          <Reveal delay={160} className="mask-fade-edges mt-10 overflow-hidden">
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {INTEGRATION_LOGOS.map((logo) => (
                <span key={logo} className="text-lg font-semibold tracking-tight text-muted-foreground/70">
                  {logo}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============================= FAQ ============================= */}
      <section className="border-t border-border px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <SectionBadge tone="primary">FAQ</SectionBadge>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Questions, answered</h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to evaluate RiditStack for {page.name.toLowerCase()}. Still curious?{" "}
                <Link href={DEMO_HREF} className="font-medium text-primary hover:underline">
                  Book a demo
                </Link>
                .
              </p>
            </Reveal>
            <Reveal delay={120}>
              <FeatureFaq faqs={page.faqs} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* =========================== RELATED =========================== */}
      {related.length > 0 && (
        <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <SectionBadge tone="primary">Keep exploring</SectionBadge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Related products & pages</h2>
              </Reveal>
              <Reveal delay={80}>
                <Link href="/features" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
                  See the whole platform
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Reveal>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {related.map((rel, i) => (
                <Reveal key={rel.href} delay={(i % 4) * 70}>
                  <Link
                    href={rel.href}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <rel.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 flex items-center gap-1.5 font-semibold">
                      {rel.name}
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{rel.summary}</p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================= CTA ============================= */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal variant="scale">
            <div className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
              <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-40" />
                <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
              </div>
              <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                Ready to transform {page.name.toLowerCase()}
                <span className="text-gradient-animated"> with RiditStack?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                Book a walkthrough tailored to your team, or start a free trial and explore at your own pace.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button size="xl" className="group btn-shine w-full sm:w-auto" asChild>
                  <Link href={DEMO_HREF}>
                    Book a demo
                    <CalendarDays className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button size="xl" variant="outline" className="group w-full bg-background/60 backdrop-blur sm:w-auto" asChild>
                  <Link href="/pricing">
                    View pricing
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
