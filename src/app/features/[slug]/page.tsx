import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { FeaturePageTemplate } from "@/components/features/feature-page-template"
import { generateSEO } from "@/lib/seo"
import { features, getFeature } from "@/content/features"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return features.map((f) => ({ slug: f.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const feature = getFeature(slug)
  if (!feature) return {}

  return generateSEO({
    title: feature.seo.title,
    description: feature.seo.description,
    keywords: feature.seo.keywords,
    path: `/features/${feature.slug}`,
  })
}

export default async function FeaturePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const feature = getFeature(slug)
  if (!feature) notFound()

  // Structured data - BreadcrumbList + FAQPage for rich results
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Platform",
        item: "https://riditstack.com/features",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: feature.name,
        item: `https://riditstack.com/features/${feature.slug}`,
      },
    ],
  }

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: feature.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Layout>
        <FeaturePageTemplate feature={feature} />
      </Layout>
    </>
  )
}
