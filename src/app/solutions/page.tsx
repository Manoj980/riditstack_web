import Link from "next/link"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { CTA } from "@/components/sections/cta"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { Building2, ArrowRight, Users } from "lucide-react"
import { generateSEO, breadcrumbJsonLd } from "@/lib/seo"
import { solutionGroups, solutionsByGroup } from "@/content/solutions"

export const metadata: Metadata = generateSEO({
  title: "Solutions by Team & Company Size | RiditStack",
  description:
    "RiditStack procurement solutions for every team and stage — procurement, finance, operations, supply chain, and executives; from startups to global enterprises.",
  path: "/solutions",
})

const breadcrumb = breadcrumbJsonLd([{ name: "Solutions", path: "/solutions" }])

export default function SolutionsIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Layout>
        <PageHero
          eyebrow="Built for how your team works"
          eyebrowIcon={Users}
          title="One platform,"
          highlight="every team."
          subtitle="However you're organized and whatever your stage, RiditStack shapes to your team — bringing procurement, finance, operations, and leadership onto one intelligent record."
        />

        <section className="px-4 pb-4">
          <div className="container mx-auto max-w-6xl space-y-24 lg:space-y-32">
            {solutionGroups.map((group) => (
              <div key={group}>
                <div className="mx-auto max-w-2xl text-center">
                  <Reveal>
                    <SectionBadge tone="primary" icon={group === "By department" ? Users : Building2}>
                      {group}
                    </SectionBadge>
                  </Reveal>
                </div>
                <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {solutionsByGroup(group).map((s, i) => (
                    <Reveal key={s.slug} delay={(i % 3) * 70}>
                      <Link
                        href={`/solutions/${s.slug}`}
                        className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                      >
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                          <s.icon className="h-5 w-5" />
                        </div>
                        <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                          {s.name}
                          <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.summary}</p>
                        <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                          Explore
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-24 lg:mt-32">
          <CTA />
        </div>
      </Layout>
    </>
  )
}
