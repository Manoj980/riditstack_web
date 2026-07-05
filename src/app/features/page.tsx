import Link from "next/link"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { CTA } from "@/components/sections/cta"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { LayoutGrid, ArrowRight, Workflow, Boxes, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { generateSEO } from "@/lib/seo"
import {
  featureCategories,
  featuresByCategory,
  type FeatureCategory,
} from "@/content/features"

export const metadata: Metadata = generateSEO({
  title: "Platform Overview - Procurement Software | RiditStack",
  description:
    "Explore the RiditStack platform: procure-to-pay and source-to-pay suites, intake, purchasing, approvals, supplier management, invoice automation, spend analytics, AI copilot, and more — on one connected record.",
  path: "/features",
})

const categoryMeta: Record<
  FeatureCategory,
  { icon: LucideIcon; blurb: string }
> = {
  Suites: {
    icon: Workflow,
    blurb: "End-to-end suites that connect the entire procurement lifecycle on one record.",
  },
  "Core modules": {
    icon: Boxes,
    blurb: "The building blocks of day-to-day procurement — each sharing the same data.",
  },
  "AI & control": {
    icon: Sparkles,
    blurb: "Intelligence and guardrails that turn your procurement data into decisions.",
  },
}

export default function FeaturesPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="One platform, every workflow"
        eyebrowIcon={LayoutGrid}
        title="Everything you need to"
        highlight="command spend."
        subtitle="From the first request to the final payment, RiditStack unifies procurement on a single intelligent record. Explore the suites and modules that replace your patchwork of tools."
      />

      <section className="px-4 pb-4">
        <div className="container mx-auto max-w-6xl space-y-24 lg:space-y-32">
          {featureCategories.map((category) => {
            const meta = categoryMeta[category]
            const items = featuresByCategory(category)
            const CatIcon = meta.icon
            return (
              <div key={category}>
                <div className="mx-auto max-w-2xl text-center">
                  <Reveal>
                    <SectionBadge tone="primary" icon={CatIcon}>
                      {category}
                    </SectionBadge>
                  </Reveal>
                  <Reveal delay={80} as="p" className="mt-4 text-lg text-muted-foreground">
                    {meta.blurb}
                  </Reveal>
                </div>

                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((f, i) => (
                    <Reveal key={f.slug} delay={(i % 3) * 70}>
                      <Link
                        href={`/features/${f.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <f.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                          {f.name}
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {f.summary}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <div className="mt-24 lg:mt-32">
        <CTA />
      </div>
    </Layout>
  )
}
