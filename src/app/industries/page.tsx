import Link from "next/link"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { CTA } from "@/components/sections/cta"
import { Reveal } from "@/components/ui/reveal"
import { Building2, ArrowRight } from "lucide-react"
import { generateSEO, breadcrumbJsonLd } from "@/lib/seo"
import { industries } from "@/content/industries"

export const metadata: Metadata = generateSEO({
  title: "Procurement Software by Industry | RiditStack",
  description:
    "Industry-specific procurement, powered by RiditStack's flagship AI product ProcLeo — manufacturing, healthcare, retail, construction, technology, government, and more.",
  path: "/industries",
})

const breadcrumb = breadcrumbJsonLd([{ name: "Industries", path: "/industries" }])

export default function IndustriesIndexPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
      <Layout>
        <PageHero
          eyebrow="Tuned to your sector"
          eyebrowIcon={Building2}
          title="Procurement built for"
          highlight="your industry."
          subtitle="Every industry buys differently — different risks, rules, and rhythms. RiditStack and its flagship AI product, ProcLeo, adapt to the way your sector actually operates."
        />

        <section className="px-4 pb-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind, i) => (
                <Reveal key={ind.slug} delay={(i % 3) * 60}>
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="group flex h-full flex-col rounded-2xl border border-border bg-card/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                      <ind.icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-4 flex items-center gap-1.5 text-lg font-semibold tracking-tight">
                      {ind.name}
                      <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{ind.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                      Explore
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <div className="mt-24 lg:mt-32">
          <CTA />
        </div>
      </Layout>
    </>
  )
}
