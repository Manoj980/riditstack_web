import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template"
import { generateSEO, breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/seo"
import { solutions, getSolution } from "@/content/solutions"
import { buildRelated } from "@/content/related"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = getSolution(slug)
  if (!page) return {}
  return generateSEO({
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    path: `/solutions/${page.slug}`,
  })
}

export default async function SolutionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = getSolution(slug)
  if (!page) notFound()

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Solutions", path: "/solutions" },
      { name: page.name, path: `/solutions/${page.slug}` },
    ]),
    faqJsonLd(page.faqs),
    productJsonLd({
      name: `RiditStack for ${page.name}`,
      description: page.seo.description,
      path: `/solutions/${page.slug}`,
    }),
  ]

  return (
    <>
      {jsonLd.map((data, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
      ))}
      <Layout>
        <MarketingPageTemplate page={page} related={buildRelated(page)} />
      </Layout>
    </>
  )
}
