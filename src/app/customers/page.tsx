import Link from "next/link"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { Reveal } from "@/components/ui/reveal"
import { Tilt } from "@/components/ui/tilt"
import { SectionBadge } from "@/components/ui/section-badge"
import { Button } from "@/components/ui/button"
import { FeatureFaq } from "@/components/features/feature-faq"
import { generateSEO, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo"
import {
  ArrowRight,
  CalendarDays,
  Quote,
  Star,
  TrendingUp,
  Clock,
  ShieldCheck,
  DollarSign,
  Building2,
  Factory,
  HeartPulse,
  ShoppingBag,
  Cpu,
  Truck,
  Sparkles,
} from "lucide-react"

const DEMO_HREF = "/contact?type=demo"

export const metadata: Metadata = generateSEO({
  title: "Customers - Procurement Teams That Run on RiditStack",
  description:
    "See how enterprises and fast-growing companies use RiditStack to cut cycle times, recover margin, and take control of spend. Real outcomes, ROI metrics, and customer stories.",
  path: "/customers",
})

const logos = [
  "Northwind",
  "Vertex",
  "Lumina",
  "Apex Foods",
  "Quanta",
  "Meridian",
  "Cobalt",
  "Stratus",
  "Keystone",
  "Meridian University",
]

const heroStats = [
  { value: "1,000+", label: "teams run on RiditStack" },
  { value: "$1.4B+", label: "spend under management" },
  { value: "4.8/5", label: "average customer rating" },
]

const outcomes = [
  { icon: Clock, value: "73%", label: "faster procurement cycle times" },
  { icon: DollarSign, value: "12%", label: "average savings identified" },
  { icon: TrendingUp, value: "80%", label: "less manual AP effort" },
  { icon: ShieldCheck, value: "100%", label: "spend brought under management" },
]

const featured = [
  {
    company: "Vertex Manufacturing",
    industry: "Manufacturing",
    industryHref: "/industries/manufacturing",
    icon: Factory,
    quote:
      "We haven't had a material-driven line stoppage since we deployed RiditStack. The inventory-to-purchasing link alone paid for it.",
    author: "Elena Rossi, Supply Chain Director",
    metric: "0",
    metricLabel: "line stoppages last year",
  },
  {
    company: "Cobalt Health",
    industry: "Healthcare",
    industryHref: "/industries/healthcare",
    icon: HeartPulse,
    quote:
      "We eliminated stockouts on critical items and cut hours of compliance paperwork every week. Staff spend that time on patients now.",
    author: "David Osei, VP of Supply Chain",
    metric: "100%",
    metricLabel: "critical-item availability",
  },
  {
    company: "Apex Retail Group",
    industry: "Retail",
    industryHref: "/industries/retail",
    icon: ShoppingBag,
    quote:
      "We found seven percent of margin hiding in duplicate vendors and off-contract buying. RiditStack made it visible in a week.",
    author: "Rachel Turner, Head of Procurement",
    metric: "7%",
    metricLabel: "margin recovered",
  },
]

const testimonials = [
  {
    quote:
      "RiditStack gave my team back two days a week. We finally run sourcing events instead of firefighting purchase orders.",
    author: "Priya Nair",
    role: "Head of Procurement, Meridian Foods",
  },
  {
    quote:
      "We shaved four days off our monthly close and stopped chasing invoices entirely. The control is real-time now.",
    author: "David Osei",
    role: "VP Finance, Cobalt Health",
  },
  {
    quote:
      "We replaced a legacy suite that took three years to implement. RiditStack was live across four regions in a quarter.",
    author: "Thomas Wright",
    role: "Global Head of Procurement, Northwind Industries",
  },
  {
    quote:
      "RiditStack found a stack of duplicate SaaS tools and every silent renewal. We cut vendor spend fifteen percent.",
    author: "Jordan Kim",
    role: "COO, Quanta AI",
  },
]

const industries = [
  { name: "Manufacturing", href: "/industries/manufacturing", icon: Factory, note: "Resilient, on-time production" },
  { name: "Healthcare", href: "/industries/healthcare", icon: HeartPulse, note: "Compliant, reliable supply" },
  { name: "Retail", href: "/industries/retail", icon: ShoppingBag, note: "Margin across every store" },
  { name: "Technology", href: "/industries/technology", icon: Cpu, note: "Control at startup speed" },
  { name: "Logistics", href: "/industries/logistics", icon: Truck, note: "Fleets and depots stocked" },
  { name: "Enterprise", href: "/solutions/enterprise", icon: Building2, note: "Global scale and control" },
]

const caseStudies = [
  {
    company: "Northwind Industries",
    industry: "Enterprise Manufacturing",
    challenge: "A three-year legacy rollout with poor adoption and no real-time control.",
    result: "Live across four regions in one quarter, with full spend under management.",
  },
  {
    company: "Meridian University",
    industry: "Education",
    challenge: "Paper requisitions across twelve departments and hard-to-prove grant compliance.",
    result: "Unified departments, faster approvals, and auditable spend for every grant dollar.",
  },
  {
    company: "Stratus Logistics",
    industry: "Logistics",
    challenge: "Twelve ways of buying across depots and invisible network-wide MRO spend.",
    result: "One buying standard, ended parts stockouts, and network-wide cost visibility.",
  },
]

const faqs = [
  {
    q: "What size companies use RiditStack?",
    a: "From early-stage startups to global enterprises. The platform right-sizes to your stage - lightweight for lean teams, and multi-entity, multi-currency, and deeply configurable for global operations.",
  },
  {
    q: "How quickly do customers see results?",
    a: "Most teams are live on their first workflow within two weeks and see measurable impact - faster cycles, recovered savings, less manual work - within the first quarter.",
  },
  {
    q: "Can you share references in my industry?",
    a: "Yes. During a demo we can connect you with reference customers in your industry and of a similar size, so you can hear about results firsthand.",
  },
  {
    q: "How do you measure the ROI customers report?",
    a: "Savings are tied to real transactions - awarded rates compared to actual spend - and efficiency gains are measured against baseline cycle times and AP effort, so the numbers are auditable, not estimated.",
  },
]

const jsonLd = [
  breadcrumbJsonLd([{ name: "Customers", path: "/customers" }]),
  faqJsonLd(faqs),
]

export default function CustomersPage() {
  return (
    <>
      {jsonLd.map((data, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
      ))}
      <Layout>
        {/* Hero */}
        <section className="relative overflow-hidden px-4 pt-12 pb-16 sm:pt-20 sm:pb-20">
          <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.5]" />
            <div className="absolute -top-52 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-40" />
            <div className="absolute -left-20 top-16 h-72 w-72 orb animate-drift" />
            <div className="absolute -right-16 top-24 h-64 w-64 orb orb-2 animate-drift [animation-delay:-8s]" />
          </div>

          <div className="container mx-auto max-w-4xl text-center">
            <Reveal>
              <SectionBadge tone="primary" icon={Sparkles}>Customers</SectionBadge>
            </Reveal>
            <Reveal delay={80} as="h1" className="mt-6 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              The teams reinventing procurement
              <span className="text-gradient-animated"> run on RiditStack.</span>
            </Reveal>
            <Reveal delay={160} as="p" className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
              From global manufacturers to fast-growing startups, procurement and finance teams choose RiditStack to
              control spend, recover margin, and move faster. Here&apos;s what that looks like.
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
                  Explore the platform
                  <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </Button>
            </Reveal>

            <Reveal delay={320} className="mt-14">
              <div className="grid gap-4 rounded-3xl border border-border bg-card/60 p-6 shadow-sm backdrop-blur sm:grid-cols-3 sm:p-8">
                {heroStats.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-3xl font-semibold tracking-tight text-gradient sm:text-4xl">{s.value}</div>
                    <div className="mt-1.5 text-sm text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Trusted-by logos */}
        <section className="border-y border-border bg-muted/30 px-4 py-12">
          <div className="container mx-auto max-w-7xl">
            <Reveal as="p" className="text-center text-sm font-medium text-muted-foreground">
              Trusted by procurement and finance teams across every industry
            </Reveal>
            <div className="mask-fade-edges mt-8 overflow-hidden">
              <div className="flex w-max animate-marquee items-center gap-16">
                {[...logos, ...logos].map((name, i) => (
                  <span
                    key={`${name}-${i}`}
                    aria-hidden={i >= logos.length}
                    className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/70"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Business outcomes / ROI */}
        <section className="px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal><SectionBadge tone="primary" icon={TrendingUp}>Business outcomes</SectionBadge></Reveal>
              <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Results our customers can measure
              </Reveal>
              <Reveal delay={120} as="p" className="mt-5 text-lg text-muted-foreground">
                Averages reported across RiditStack customers - tied to real transactions and baseline benchmarks,
                not estimates.
              </Reveal>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map((o, i) => (
                <Reveal key={o.label} delay={(i % 4) * 70}>
                  <div className="h-full rounded-2xl border border-border bg-card/70 p-6 text-center shadow-sm">
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <o.icon className="h-5 w-5" />
                    </div>
                    <div className="mt-4 text-3xl font-semibold tracking-tight text-gradient">{o.value}</div>
                    <div className="mt-1.5 text-sm text-muted-foreground">{o.label}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Featured customers */}
        <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal><SectionBadge tone="primary">Featured customers</SectionBadge></Reveal>
              <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Procurement transformation, in their words
              </Reveal>
            </div>
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {featured.map((c, i) => (
                <Reveal key={c.company} delay={i * 90} variant="scale">
                  <Tilt max={4}>
                    <div className="border-glow flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-xl">
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <c.icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="font-semibold">{c.company}</div>
                          <Link href={c.industryHref} className="text-xs text-primary hover:underline">
                            {c.industry}
                          </Link>
                        </div>
                      </div>
                      <Quote className="mt-6 h-6 w-6 text-primary/40" />
                      <blockquote className="mt-2 flex-1 text-[15px] leading-relaxed text-foreground/90">
                        {c.quote}
                      </blockquote>
                      <div className="mt-6 flex items-end justify-between border-t border-border pt-5">
                        <span className="text-xs text-muted-foreground">{c.author}</span>
                        <span className="text-right">
                          <span className="block text-2xl font-semibold tracking-tight text-gradient">{c.metric}</span>
                          <span className="block text-[11px] text-muted-foreground">{c.metricLabel}</span>
                        </span>
                      </div>
                    </div>
                  </Tilt>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal><SectionBadge tone="primary" icon={Star}>Testimonials</SectionBadge></Reveal>
              <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Loved by the people who use it daily
              </Reveal>
            </div>
            <div className="mt-14 grid gap-5 md:grid-cols-2">
              {testimonials.map((t, i) => (
                <Reveal key={t.author} delay={(i % 2) * 80}>
                  <figure className="h-full rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
                    <div className="flex gap-0.5 text-primary">
                      {Array.from({ length: 5 }).map((_, s) => (
                        <Star key={s} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <blockquote className="mt-4 text-[15px] leading-relaxed text-foreground/90">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-4 text-sm">
                      <span className="font-semibold">{t.author}</span>
                      <span className="text-muted-foreground"> - {t.role}</span>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Industry breakdown */}
        <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="mx-auto max-w-2xl text-center">
              <Reveal><SectionBadge tone="primary" icon={Building2}>By industry</SectionBadge></Reveal>
              <Reveal delay={60} as="h2" className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Trusted across every sector
              </Reveal>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, i) => (
                <Reveal key={ind.name} delay={(i % 3) * 60}>
                  <Link
                    href={ind.href}
                    className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <ind.icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 font-semibold">
                        {ind.name}
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                      <div className="text-sm text-muted-foreground">{ind.note}</div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case study previews */}
        <section className="px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <Reveal>
                <SectionBadge tone="primary">Case studies</SectionBadge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Transformation stories</h2>
              </Reveal>
              <Reveal delay={80} as="p" className="max-w-sm text-sm text-muted-foreground">
                Deep-dive case studies are part of our upcoming Resources hub. Book a demo to hear the full stories
                and talk to references in your industry.
              </Reveal>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {caseStudies.map((cs, i) => (
                <Reveal key={cs.company} delay={i * 80}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-primary">{cs.industry}</span>
                    <h3 className="mt-2 text-lg font-semibold">{cs.company}</h3>
                    <div className="mt-4 space-y-3 text-sm">
                      <div>
                        <span className="font-medium text-foreground">Challenge. </span>
                        <span className="text-muted-foreground">{cs.challenge}</span>
                      </div>
                      <div>
                        <span className="font-medium text-foreground">Result. </span>
                        <span className="text-muted-foreground">{cs.result}</span>
                      </div>
                    </div>
                    <Link
                      href={DEMO_HREF}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                    >
                      Hear the full story
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="border-t border-border px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
              <Reveal>
                <SectionBadge tone="primary">FAQ</SectionBadge>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Questions, answered</h2>
                <p className="mt-4 text-muted-foreground">
                  Want to talk to a customer like you?{" "}
                  <Link href={DEMO_HREF} className="font-medium text-primary hover:underline">Book a demo</Link> and
                  we&apos;ll connect you.
                </p>
              </Reveal>
              <Reveal delay={120}>
                <FeatureFaq faqs={faqs} />
              </Reveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-20 sm:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl">
            <Reveal variant="scale">
              <div className="border-glow relative overflow-hidden rounded-3xl border border-border bg-card px-6 py-14 text-center shadow-xl sm:px-12 sm:py-16">
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-40" />
                  <div className="absolute inset-0 bg-grid opacity-40 mask-fade-b" />
                </div>
                <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight sm:text-6xl">
                  Become the next
                  <span className="text-gradient-animated"> success story</span>
                </h2>
                <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
                  Book a walkthrough tailored to your team, or start a free trial and see the results for yourself.
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
      </Layout>
    </>
  )
}
