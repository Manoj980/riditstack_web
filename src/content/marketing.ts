import type { LucideIcon } from "lucide-react"

/**
 * Shared content model for the marketing "vertical" pages - Solutions (by
 * department / by company size) and Industries. Both render through the same
 * MarketingPageTemplate, so their content shares one shape.
 */

export type MarketingKind = "solution" | "industry"

export type IconItem = { icon: LucideIcon; title: string; body: string }

export type RelatedLink = {
  name: string
  href: string
  summary: string
  icon: LucideIcon
}

export type MarketingPage = {
  kind: MarketingKind
  slug: string
  name: string
  /** Short label used in nav + cards */
  menuLabel: string
  /** Grouping used on index pages / menus, e.g. "By department" */
  group: string
  icon: LucideIcon
  summary: string
  eyebrow: string
  hero: {
    titleLead: string
    titleHighlight: string
    subtitle: string
  }
  metrics: { value: string; label: string }[]
  pains: {
    heading: string
    body: string
    items: IconItem[]
  }
  solution: {
    heading: string
    body: string
    highlights: string[]
  }
  capabilities: {
    heading: string
    subheading: string
    items: IconItem[]
  }
  workflow: { title: string; body: string }[]
  story: {
    quote: string
    author: string
    role: string
    company: string
    metric: string
    metricLabel: string
  }
  faqs: { q: string; a: string }[]
  related: {
    features: string[]
    solutions: string[]
    industries: string[]
  }
  seo: { title: string; description: string; keywords?: string }
}

/** Integration logos shown on the shared integrations strip. */
export const INTEGRATION_LOGOS = [
  "SAP",
  "Oracle NetSuite",
  "Microsoft Dynamics",
  "QuickBooks",
  "Xero",
  "Sage",
  "Workday",
  "Okta",
  "Slack",
  "Salesforce",
]
