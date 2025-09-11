import type { Metadata } from "next"

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
    title,
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
  "description": "Procurement Centralization & Automation Platform for modern businesses",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-555-123-4567",
    "contactType": "sales",
    "availableLanguage": "en"
  },
  "sameAs": [
    "https://linkedin.com/company/riditstack",
    "https://twitter.com/riditstack"
  ]
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