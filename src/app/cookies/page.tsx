import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Cookie Policy | RiditStack",
  description: "How RiditStack uses cookies and similar technologies, and how to manage them.",
  path: "/cookies",
})

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="This policy explains how RiditStack uses cookies and similar technologies on our websites, and how you can control them."
      updated="July 5, 2026"
      sections={[
        {
          heading: "What cookies are",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help the site function, remember your preferences, and understand how it's used.",
          ],
        },
        {
          heading: "How we use cookies",
          body: [
            "We use strictly necessary cookies to operate our site, functional cookies to remember your preferences, and analytics cookies to understand and improve how our site performs.",
            "Where required, we use analytics and marketing cookies only with your consent.",
          ],
        },
        {
          heading: "Types of cookies we use",
          body: [
            "Essential cookies enable core functionality such as security and network management. Analytics cookies help us measure and improve site performance. Preference cookies remember choices like theme and language.",
          ],
        },
        {
          heading: "Managing cookies",
          body: [
            "You can control and delete cookies through your browser settings, and adjust your consent preferences at any time. Disabling some cookies may affect how the site works.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy as our use of cookies evolves. Any changes will be posted here with a revised effective date.",
          ],
        },
      ]}
    />
  )
}
