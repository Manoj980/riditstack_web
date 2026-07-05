import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { DetailRow, Heading, Paragraph } from "./components/ui"

export type BookDemoAdminProps = {
  name: string
  email: string
  phone?: string
  company: string
  jobTitle?: string
  industry?: string
  employees?: string
  country?: string
  message?: string
  timestamp: string
}

export default function BookDemoAdmin(props: BookDemoAdminProps) {
  return (
    <EmailLayout preview={`New demo request — ${props.company}`}>
      <Heading>New demo request</Heading>
      <Paragraph>
        A new ProcLeo demo request just came in. Reach out within 24 hours.
      </Paragraph>
      <DetailRow label="Name" value={props.name} />
      <DetailRow label="Email" value={props.email} />
      <DetailRow label="Phone" value={props.phone} />
      <DetailRow label="Company" value={props.company} />
      <DetailRow label="Job title" value={props.jobTitle} />
      <DetailRow label="Industry" value={props.industry} />
      <DetailRow label="Company size" value={props.employees} />
      <DetailRow label="Country" value={props.country} />
      <DetailRow label="Message" value={props.message} />
      <DetailRow label="Submitted" value={props.timestamp} />
    </EmailLayout>
  )
}

BookDemoAdmin.PreviewProps = {
  name: "Jordan Reyes",
  email: "jordan@acme.com",
  phone: "+1 (555) 123-4567",
  company: "Acme Corp",
  jobTitle: "VP Procurement",
  industry: "Manufacturing",
  employees: "1000-5000",
  country: "United States",
  message: "Interested in AI-driven PO automation across 3 regions.",
  timestamp: "5 Jul 2026, 10:24 AM UTC",
} satisfies BookDemoAdminProps
