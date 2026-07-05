import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { CtaButton, Heading, Paragraph } from "./components/ui"
import { links } from "./components/theme"

export type ContactCustomerProps = {
  name: string
}

export default function ContactCustomer({ name }: ContactCustomerProps) {
  const firstName = name.split(" ")[0] || name
  return (
    <EmailLayout preview="We've received your message — RiditStack" showResourceLinks>
      <Heading>Thanks for reaching out, {firstName}!</Heading>
      <Paragraph>
        We&apos;ve received your message and a member of our team will get back to
        you within 24 hours during business days.
      </Paragraph>
      <Paragraph>
        Need something urgent? Just reply to this email and we&apos;ll prioritise
        it.
      </Paragraph>
      <CtaButton href={links.website}>Visit RiditStack</CtaButton>
    </EmailLayout>
  )
}

ContactCustomer.PreviewProps = { name: "Sam Carter" } satisfies ContactCustomerProps
