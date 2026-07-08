import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { CtaButton, Heading, Paragraph } from "./components/ui"
import { links } from "./components/theme"

export type BookDemoCustomerProps = {
  name: string
}

export default function BookDemoCustomer({ name }: BookDemoCustomerProps) {
  const firstName = name.split(" ")[0] || name
  return (
    <EmailLayout
      preview="Thanks for booking your ProcLeo demo!"
      showResourceLinks
    >
      <Heading>Thanks for booking your ProcLeo demo, {firstName}!</Heading>
      <Paragraph>
        We&apos;ve received your request and a product specialist will reach out
        within 24 hours to schedule a walkthrough tailored to your team, your
        stack, and the outcomes you care about.
      </Paragraph>
      <Paragraph>
        No slideware - just ProcLeo running on real procurement scenarios. If
        you&apos;d like to bring colleagues from finance, procurement, or ops,
        they&apos;re very welcome to join.
      </Paragraph>
      <CtaButton href={links.website}>Explore RiditStack</CtaButton>
      <Paragraph>
        In the meantime, here are a few resources to get you started:
      </Paragraph>
    </EmailLayout>
  )
}

BookDemoCustomer.PreviewProps = { name: "Jordan Reyes" } satisfies BookDemoCustomerProps
