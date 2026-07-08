import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { DetailRow, Heading, Paragraph } from "./components/ui"

export type NewsletterAdminProps = {
  email: string
  sourcePage?: string
  timestamp: string
}

export default function NewsletterAdmin(props: NewsletterAdminProps) {
  return (
    <EmailLayout preview={`New newsletter subscriber - ${props.email}`}>
      <Heading>New newsletter subscriber</Heading>
      <Paragraph>Someone just joined the RiditStack briefing.</Paragraph>
      <DetailRow label="Email" value={props.email} />
      <DetailRow label="Source page" value={props.sourcePage} />
      <DetailRow label="Subscribed" value={props.timestamp} />
    </EmailLayout>
  )
}

NewsletterAdmin.PreviewProps = {
  email: "leader@enterprise.com",
  sourcePage: "https://riditstack.com/pricing",
  timestamp: "5 Jul 2026, 11:20 AM UTC",
} satisfies NewsletterAdminProps
