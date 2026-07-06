import { Layout } from "@/components/layout/layout"
import { HomeHero } from "@/components/sections/home/hero"
import { LogoCloud } from "@/components/sections/logo-cloud"
import { EnterpriseStats, WhatWeBuild, ProcleoHighlight } from "@/components/sections/home/what-we-build"
import { Features } from "@/components/sections/features"
import { HomeSolutions, HomeIndustries } from "@/components/sections/home/explore"
import {
  SecurityCompliance,
  HomeIntegrations,
  HomeTestimonials,
  ResourcesTeaser,
} from "@/components/sections/home/trust"
import { HomeFaq, homeFaqs } from "@/components/sections/home/faq"
import { CTA } from "@/components/sections/cta"
import { organizationJsonLd, softwareProductJsonLd, faqJsonLd } from "@/lib/seo"

export default function Home() {
  const homeFaqJsonLd = faqJsonLd(homeFaqs)

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareProductJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }} />
      <Layout>
        {/* Enterprise AI company → flagship product (ProcLeo) → proof → convert */}
        <HomeHero />
        <LogoCloud />
        <EnterpriseStats />
        <WhatWeBuild />
        <ProcleoHighlight />
        <Features />
        <HomeSolutions />
        <HomeIndustries />
        <SecurityCompliance />
        <HomeIntegrations />
        <HomeTestimonials />
        <ResourcesTeaser />
        <HomeFaq />
        <CTA />
      </Layout>
    </>
  )
}
