import type { Metadata } from "next"
import { LegalPage } from "@/components/legal/legal-page"
import { generateSEO } from "@/lib/seo"

export const metadata: Metadata = generateSEO({
  title: "Terms of Service | RiditStack",
  description: "The terms that govern your use of RiditStack websites and products.",
  path: "/terms",
})

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="These terms govern your access to and use of RiditStack's websites and products. By using our services, you agree to these terms."
      updated="July 5, 2026"
      sections={[
        {
          heading: "Using our services",
          body: [
            "You may use our services only in compliance with these terms and all applicable laws. You are responsible for the activity that occurs under your account and for keeping your credentials secure.",
          ],
        },
        {
          heading: "Accounts",
          body: [
            "To use certain features you must create an account and provide accurate information. You are responsible for maintaining the confidentiality of your account and for all activities that occur under it.",
          ],
        },
        {
          heading: "Subscriptions and payment",
          body: [
            "Paid services are billed according to the plan you select. Fees are non-refundable except as required by law or expressly stated in your order. We may change pricing with reasonable notice.",
          ],
        },
        {
          heading: "Acceptable use",
          body: [
            "You agree not to misuse our services - including by attempting to disrupt them, access them without authorization, or use them to violate the rights of others or any applicable law.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            "RiditStack and its licensors retain all rights in the services and related software. You retain all rights to the data you submit, and grant us the limited rights needed to provide the services.",
          ],
        },
        {
          heading: "Disclaimers and liability",
          body: [
            "Our services are provided on an 'as is' basis to the extent permitted by law. To the maximum extent permitted, RiditStack is not liable for indirect, incidental, or consequential damages arising from your use of the services.",
          ],
        },
        {
          heading: "Termination",
          body: [
            "You may stop using the services at any time. We may suspend or terminate access if you breach these terms or where required to protect the services or comply with law.",
          ],
        },
        {
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. Continued use of the services after changes take effect constitutes acceptance of the revised terms.",
          ],
        },
      ]}
    />
  )
}
