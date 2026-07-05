import { getFeature } from "./features"
import { getSolution } from "./solutions"
import { getIndustry } from "./industries"
import type { MarketingPage, RelatedLink } from "./marketing"

/**
 * Resolve a marketing page's related config (feature/solution/industry slugs)
 * into concrete RelatedLink cards. Kept in its own module so the content data
 * files stay free of cross-imports.
 */
export function buildRelated(page: MarketingPage): RelatedLink[] {
  const links: RelatedLink[] = []

  for (const slug of page.related.features) {
    const f = getFeature(slug)
    if (f) links.push({ name: f.name, href: `/features/${f.slug}`, summary: f.summary, icon: f.icon })
  }
  for (const slug of page.related.solutions) {
    const s = getSolution(slug)
    if (s) links.push({ name: s.name, href: `/solutions/${s.slug}`, summary: s.summary, icon: s.icon })
  }
  for (const slug of page.related.industries) {
    const i = getIndustry(slug)
    if (i) links.push({ name: i.name, href: `/industries/${i.slug}`, summary: i.summary, icon: i.icon })
  }

  return links
}
