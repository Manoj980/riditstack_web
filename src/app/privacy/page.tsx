import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Privacy Policy | RiditStack",
  description: "How RiditStack collects, uses, and protects your personal and business data.",
  path: "/privacy",
})

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information RiditStack collects, how we use and protect it, and the choices you have. It applies to our websites and products."
      updated="July 5, 2026"
      sections={[
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly — such as your name, work email, company, and any details you submit through our forms — as well as information generated when you use our products, including usage and log data.",
            "For customers, we process procurement and business data on your behalf as a data processor, under the terms of your agreement with us.",
          ],
        },
        {
          heading: "How we use information",
          body: [
            "We use information to provide and improve our products, respond to inquiries, secure our services, and communicate with you about your account and relevant updates.",
            "We do not sell your personal information, and we do not use customer data to train shared AI models.",
          ],
        },
        {
          heading: "How we protect information",
          body: [
            "We apply enterprise-grade safeguards including encryption in transit and at rest, role-based access controls, and continuous monitoring, aligned to SOC 2 and ISO 27001 practices.",
          ],
        },
        {
          heading: "Data sharing",
          body: [
            "We share information only with service providers who help us operate our business under appropriate contractual protections, or where required by law. We do not sell personal data to third parties.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Depending on your location, you may have rights to access, correct, delete, or port your personal data, and to object to or restrict certain processing. To exercise these rights, contact us using the details below.",
          ],
        },
        {
          heading: "Data retention",
          body: [
            "We retain personal information for as long as necessary to provide our services and meet legal, accounting, or reporting obligations, after which it is deleted or anonymized.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. Material changes will be posted here with a revised effective date.",
          ],
        },
      ]}
    />
  )
}
