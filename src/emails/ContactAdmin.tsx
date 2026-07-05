import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { DetailRow, Heading, Paragraph } from "./components/ui"

export type ContactAdminProps = {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
  timestamp: string
}

export default function ContactAdmin(props: ContactAdminProps) {
  return (
    <EmailLayout preview={`New contact message from ${props.name}`}>
      <Heading>New contact message</Heading>
      <Paragraph>A new message came in through the contact form.</Paragraph>
      <DetailRow label="Name" value={props.name} />
      <DetailRow label="Email" value={props.email} />
      <DetailRow label="Company" value={props.company} />
      <DetailRow label="Phone" value={props.phone} />
      <DetailRow label="Subject" value={props.subject} />
      <DetailRow label="Message" value={props.message} />
      <DetailRow label="Submitted" value={props.timestamp} />
    </EmailLayout>
  )
}

ContactAdmin.PreviewProps = {
  name: "Sam Carter",
  email: "sam@globex.com",
  company: "Globex",
  phone: "+1 (555) 987-6543",
  subject: "Sales inquiry",
  message: "We'd like to understand enterprise pricing and SSO options.",
  timestamp: "5 Jul 2026, 11:02 AM UTC",
} satisfies ContactAdminProps
