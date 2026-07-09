import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { CTA } from "@/components/sections/cta"
import { Reveal } from "@/components/ui/reveal"
import {
  Users,
  Target,
  Award,
  Globe,
  TrendingUp,
  Shield,
  Heart,
  Building2,
} from "lucide-react"
import type { Metadata } from "next"
import { SITE_TITLE } from "@/lib/seo"

export const metadata: Metadata = {
  title: SITE_TITLE,
  description:
    "Learn about RiditStack's mission to revolutionize procurement automation and help businesses optimize their purchasing processes.",
}

const stats = [
  { number: "1000+", label: "Users worldwide" },
  { number: "$400M", label: "Spend managed" },
  { number: "10+", label: "Countries" },
  { number: "85+", label: "Five-star reviews" },
]

const values = [
  {
    icon: Heart,
    title: "Customer first",
    description:
      "Every decision we make starts with our customers. We build software that solves real problems and delivers measurable value.",
  },
  {
    icon: Shield,
    title: "Trust & security",
    description:
      "We maintain the highest standards of security and compliance to protect our customers' sensitive procurement data.",
  },
  {
    icon: TrendingUp,
    title: "Continuous innovation",
    description:
      "We're constantly evolving our platform with cutting-edge technology like AI and machine learning to stay ahead.",
  },
  {
    icon: Globe,
    title: "Global impact",
    description:
      "We're committed to helping organizations worldwide optimize their procurement processes and reduce costs.",
  },
]

const team = [
  {
    name: "Suman Kumar",
    role: "CEO & Co-Founder",
    description: "Sets RiditStack's vision and leads the company's growth across procurement automation.",
  },
  {
    name: "Manish Mishra",
    role: "CTO & Co-Founder",
    description: "Drives the technology strategy behind RiditStack's AI-powered procurement platform.",
  },
  {
    name: "Pavan Tamvada",
    role: "VP of Product",
    description: "Shapes the product roadmap with a focus on procurement workflows and user experience.",
  },
  {
    name: "Pritesh Kumar",
    role: "VP of Engineering",
    description: "Leads engineering to build scalable, secure, enterprise-grade platforms.",
  },
]

// Timeline data for the "Our journey" section (currently hidden).
// const milestones = [
//   { year: "2018", event: "Company founded with a vision to automate procurement" },
//   { year: "2019", event: "First enterprise customers and $2M seed funding" },
//   { year: "2020", event: "Launched AI-powered invoice processing capabilities" },
//   { year: "2021", event: "Reached 100+ customers and $10M Series A" },
//   { year: "2022", event: "International expansion and B Corp certification" },
//   { year: "2023", event: "1000+ customers milestone and $25M Series B" },
//   { year: "2024", event: "Advanced AI features and global market leadership" },
// ]

export default function AboutPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Our story"
        eyebrowIcon={Building2}
        title="Revolutionizing procurement"
        highlight="for modern business."
        subtitle="We're on a mission to help organizations worldwide transform their procurement through intelligent automation and data-driven insights."
      />

      {/* Stats */}
      <section className="border-y border-border bg-muted/20 px-4 py-14">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="text-4xl font-semibold tracking-tight text-gradient sm:text-5xl">
                  {stat.number}
                </div>
                <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="px-4 py-20 sm:py-24 lg:py-15">
        <div className="container mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              {
                icon: Target,
                title: "Our mission",
                body: "To democratize enterprise-grade procurement automation, making it accessible to organizations of all sizes. Every business deserves the tools to optimize purchasing, reduce costs, and drive growth.",
              },
              {
                icon: Award,
                title: "Our vision",
                body: "To be the global leader in procurement automation, powered by AI and machine learning. We envision a world where procurement is intelligent, transparent, and effortlessly efficient.",
              },
            ].map((block, i) => (
              <Reveal key={block.title} delay={i * 100} variant="scale">
                <div className="h-full rounded-3xl border border-border bg-card/60 p-8 shadow-sm">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <block.icon className="h-6 w-6" />
                  </span>
                  <h2 className="mt-5 text-2xl font-semibold tracking-tight">{block.title}</h2>
                  <p className="mt-3 text-muted-foreground">{block.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-border px-4 py-20 sm:py-24 lg:py-15">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Our values</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              These core values guide everything we do, from product development to customer
              relationships.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <value.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-border bg-muted/20 px-4 py-20 sm:py-24 lg:py-20">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Leadership team</h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Deep procurement expertise combined with cutting-edge technology innovation.
            </p>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 80}>
                <div className="h-full rounded-2xl border border-border bg-card/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-primary/15 to-[var(--brand-2)]/15 text-primary">
                    <Users className="h-9 w-9" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                  <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{member.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - "Our journey" hidden for now, restore when ready */}
      {/* <section className="border-t border-border bg-muted/20 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-3xl">
          <Reveal className="mb-12 text-center">
            <h2 className="text-3xl font-semibold tracking-tight">Our journey</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
              From startup to industry leader - the key milestones in our growth.
            </p>
          </Reveal>
          <div className="relative pl-8">
            <div
              aria-hidden
              className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-primary via-border to-transparent"
            />
            <div className="space-y-8">
              {milestones.map((m, i) => (
                <Reveal key={m.year} delay={i * 60} className="relative">
                  <span className="absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-primary/30 bg-background">
                    <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                  </span>
                  <div className="flex items-baseline gap-3">
                    <span className="text-sm font-semibold text-primary">{m.year}</span>
                  </div>
                  <p className="mt-1 text-muted-foreground">{m.event}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <CTA />
    </Layout>
  )
}
