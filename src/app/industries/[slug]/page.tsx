import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { MarketingPageTemplate } from "@/components/marketing/marketing-page-template"
import { generateSEO, breadcrumbJsonLd, faqJsonLd, productJsonLd } from "@/lib/seo"
import { industries, getIndustry } from "@/content/industries"
import { buildRelated } from "@/content/related"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return industries.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params
  const page = getIndustry(slug)
  if (!page) return { title: "Industry not found | RiditStack" }
  return generateSEO({
    title: page.seo.title,
    description: page.seo.description,
    keywords: page.seo.keywords,
    path: `/industries/${page.slug}`,
  })
}

export default async function IndustryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params
  const page = getIndustry(slug)
  if (!page) notFound()

  const jsonLd = [
    breadcrumbJsonLd([
      { name: "Industries", path: "/industries" },
      { name: page.name, path: `/industries/${page.slug}` },
    ]),
    faqJsonLd(page.faqs),
    productJsonLd({
      name: `RiditStack for ${page.name}`,
      description: page.seo.description,
      path: `/industries/${page.slug}`,
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
