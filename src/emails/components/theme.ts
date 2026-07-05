/** Shared brand tokens for all transactional emails (inline-style friendly). */
export const brand = {
  primary: "#6d28d9",
  primaryDark: "#4c1d95",
  text: "#0f172a",
  muted: "#64748b",
  border: "#e2e8f0",
  bg: "#f1f5f9",
  card: "#ffffff",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://riditstack.com",
}

export const links = {
  website: brand.siteUrl,
  docs: `${brand.siteUrl}/features/api`,
  caseStudies: `${brand.siteUrl}/customers`,
  blog: `${brand.siteUrl}/blog`,
  pricing: `${brand.siteUrl}/pricing`,
}
