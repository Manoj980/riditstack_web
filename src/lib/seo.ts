import type { Metadata } from "next"

/**
 * The browser-tab title shown on every page. Kept uniform site-wide;
 * per-page titles still feed OpenGraph/Twitter cards for social sharing.
 */
export const SITE_TITLE =
  "RiditStack | AI-Powered Procurement & Supply Chain Solutions"

interface SEOProps {
  title: string
  description: string
  keywords?: string
  path?: string
  noIndex?: boolean
}

export function generateSEO({
  title,
  description,
  keywords = "procurement software, automation, purchasing, spend management, supplier management",
  path = "",
  noIndex = false,
}: SEOProps): Metadata {
  const baseUrl = "https://riditstack.com"
  const fullUrl = `${baseUrl}${path}`
  
  return {
    // Tab title stays uniform across the site; `title` still drives social cards below.
    title: SITE_TITLE,
    description,
    keywords,
    robots: noIndex ? "noindex, nofollow" : "index, follow",
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "RiditStack",
      type: "website",
      locale: "en_US",
      images: [
        {
          url: `${baseUrl}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/og-image.jpg`],
      creator: "@riditstack",
      site: "@riditstack",
    },
    alternates: {
      canonical: fullUrl,
    },
    other: {
      "format-detection": "telephone=no",
    },
  }
}

export const defaultSEO: Metadata = generateSEO({
  title: "RiditStack - Procurement Centralization & Automation Platform",
  description: "Transform your procurement processes with RiditStack's comprehensive automation platform. Track, control, and save on purchases across projects, locations, and business units.",
  keywords: "procurement software, automation, purchasing, spend management, supplier management, AI-powered procurement, invoice processing",
})

// JSON-LD structured data for organization
export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "RiditStack",
  "url": "https://riditstack.com",
  "logo": "https://riditstack.com/logo.png",
  "description":
    "RiditStack is an enterprise AI company building intelligent software for procurement, automation, and digital transformation. ProcLeo is its flagship AI procurement product.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://www.linkedin.com/company/riditstack",
    "https://x.com/riditstack"
  ]
}

// Build a BreadcrumbList JSON-LD object from an ordered list of crumbs
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://riditstack.com${item.path}`,
    })),
  }
}

// Build a FAQPage JSON-LD object from Q&A pairs
export function faqJsonLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}

// Build a Product/SoftwareApplication JSON-LD object
export function productJsonLd({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    url: `https://riditstack.com${path}`,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web-based",
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    provider: { "@type": "Organization", name: "RiditStack", url: "https://riditstack.com" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "850" },
  }
}

// JSON-LD structured data for software product
export const softwareProductJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "RiditStack Procurement Platform",
  "operatingSystem": "Web-based",
  "applicationCategory": "BusinessApplication",
  "offers": {
    "@type": "Offer",
    "price": "49",
    "priceCurrency": "USD",
    "priceValidUntil": "2024-12-31"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "850"
  },
  "description": "Comprehensive procurement automation platform with AI-powered features for intake management, purchasing, supplier management, and spend analytics."
}