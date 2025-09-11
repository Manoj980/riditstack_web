import { Layout } from "@/components/layout/layout"
import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Timeline } from "@/components/sections/timeline"
import { CTA } from "@/components/sections/cta"
import { organizationJsonLd, softwareProductJsonLd } from "@/lib/seo"

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareProductJsonLd) }}
      />
      <Layout>
        <Hero />
        <Features />
        <Timeline />
        <CTA />
      </Layout>
    </>
  )
}
