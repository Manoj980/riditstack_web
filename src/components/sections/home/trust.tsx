import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { INTEGRATION_LOGOS } from "@/content/marketing"
import {
  ShieldCheck,
  Lock,
  FileCheck,
  Globe,
  Server,
  KeyRound,
  Plug,
  Star,
  ArrowRight,
  BookOpen,
} from "lucide-react"

/* ---------------- Security & compliance ---------------- */
const certifications = [
  { icon: ShieldCheck, label: "SOC 2 Type II" },
  { icon: FileCheck, label: "ISO 27001" },
  { icon: Globe, label: "GDPR" },
]
const securityFeatures = [
  { icon: Lock, title: "Encryption everywhere", body: "Data encrypted in transit and at rest, always." },
  { icon: KeyRound, title: "SSO & SCIM", body: "Enterprise identity, single sign-on, and provisioning." },
  { icon: Server, title: "Role-based access", body: "Granular permissions and full audit logging." },
]

export function SecurityCompliance() {
  return (
    <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionBadge tone="primary" icon={ShieldCheck}>Security & compliance</SectionBadge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Enterprise-grade trust, by default
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              RiditStack is built to the standards global enterprises require - secure, compliant, and auditable
              from the ground up, so your procurement data is protected at every layer.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {certifications.map((c) => (
                <span
                  key={c.label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-semibold shadow-sm"
                >
                  <c.icon className="h-4 w-4 text-primary" />
                  {c.label}
                </span>
              ))}
            </div>
          </Reveal>

          <div className="grid gap-4">
            {securityFeatures.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- Integrations ---------------- */
export function HomeIntegrations() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><SectionBadge tone="primary" icon={Plug}>Integrations</SectionBadge></Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Connects to the systems you already run
          </Reveal>
          <Reveal delay={120} as="p" className="mt-4 text-muted-foreground">
            Bidirectional, real-time sync with your ERP, finance, and identity stack - plus an open API.{" "}
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
  )
}

/* ---------------- Testimonials ---------------- */
const quotes = [
  {
    quote: "RiditStack gave my team back two days a week. We run sourcing events instead of firefighting POs.",
    author: "Priya Nair",
    role: "Head of Procurement",
  },
  {
    quote: "We shaved four days off our monthly close and stopped chasing invoices entirely.",
    author: "Rahul Deshpande",
    role: "VP Finance",
  },
  {
    quote: "We replaced a legacy suite that took three years to roll out. RiditStack was live in a quarter.",
    author: "Arjun Menon",
    role: "Global Head of Procurement",
  },
]

export function HomeTestimonials() {
  return (
    <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal><SectionBadge tone="primary" icon={Star}>Testimonials</SectionBadge></Reveal>
          <Reveal delay={60} as="h2" className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Trusted by the people who use it
          </Reveal>
        </div>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {quotes.map((t, i) => (
            <Reveal key={t.author} delay={(i % 3) * 70}>
              <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm">
                <div className="flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm">
                  <span className="font-semibold">{t.author}</span>
                  <span className="block text-muted-foreground">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- Case studies + resources ---------------- */
const caseStudies = [
  { company: "Northwind Industries", industry: "Manufacturing", result: "Live across four regions in one quarter." },
  { company: "Apex Retail Group", industry: "Retail", result: "Recovered 7% of margin from hidden spend." },
  { company: "Quanta AI", industry: "Technology", result: "Cut vendor spend 15% by killing duplicate SaaS." },
]

export function CaseStudiesTeaser() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <SectionBadge tone="primary">Customer success</SectionBadge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Proof, not promises</h2>
          </Reveal>
          <Reveal delay={80}>
            <Link href="/customers" className="group inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
              All customers
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <Reveal key={cs.company} delay={i * 80}>
              <Link
                href="/customers"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <span className="text-xs font-semibold uppercase tracking-wider text-primary">{cs.industry}</span>
                <h3 className="mt-2 text-lg font-semibold">{cs.company}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{cs.result}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                  Read the story
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ResourcesTeaser() {
  return (
    <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-7xl">
        <div className="grid items-center gap-8 rounded-3xl border border-border bg-card p-8 shadow-sm md:grid-cols-[1.3fr_1fr] sm:p-10">
          <div>
            <SectionBadge tone="primary" icon={BookOpen}>Latest resources</SectionBadge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Sharpen your procurement strategy
            </h2>
            <p className="mt-4 text-muted-foreground">
              Insights on spend, savings, and supplier strategy from the RiditStack team. Read the blog for
              practical guidance you can put to work this quarter.
            </p>
            <Link
              href="/blog"
              className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
            >
              Visit the blog
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <p className="text-sm font-semibold">On the blog</p>
            <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
              <li>• How AI is reshaping the procure-to-pay cycle</li>
              <li>• Finding hidden savings in tail spend</li>
              <li>• A practical guide to touchless AP</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
