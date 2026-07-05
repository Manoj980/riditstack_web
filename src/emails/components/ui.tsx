import * as React from "react"
import { Button, Column, Row, Section, Text } from "@react-email/components"

import { brand } from "./theme"

export function Heading({ children }: { children: React.ReactNode }) {
  return <Text style={heading}>{children}</Text>
}

export function Paragraph({ children }: { children: React.ReactNode }) {
  return <Text style={paragraph}>{children}</Text>
}

export function CtaButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Section style={{ textAlign: "center", padding: "8px 0 4px" }}>
      <Button href={href} style={button}>
        {children}
      </Button>
    </Section>
  )
}

/** Label/value grid used by the admin notification emails. */
export function DetailRow({ label, value }: { label: string; value?: string | null }) {
  if (!value) return null
  return (
    <Row style={detailRow}>
      <Column style={detailLabelCol}>
        <Text style={detailLabel}>{label}</Text>
      </Column>
      <Column>
        <Text style={detailValue}>{value}</Text>
      </Column>
    </Row>
  )
}

const heading: React.CSSProperties = {
  fontSize: "20px",
  fontWeight: 700,
  color: brand.text,
  margin: "0 0 12px",
}
const paragraph: React.CSSProperties = {
  fontSize: "15px",
  lineHeight: "24px",
  color: brand.text,
  margin: "0 0 14px",
}
const button: React.CSSProperties = {
  backgroundColor: brand.primary,
  color: "#ffffff",
  fontSize: "15px",
  fontWeight: 600,
  padding: "12px 22px",
  borderRadius: "10px",
  textDecoration: "none",
}
const detailRow: React.CSSProperties = {
  borderBottom: `1px solid ${brand.border}`,
  padding: "8px 0",
}
const detailLabelCol: React.CSSProperties = { width: "140px", verticalAlign: "top" }
const detailLabel: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 600,
  color: brand.muted,
  margin: 0,
}
const detailValue: React.CSSProperties = {
  fontSize: "14px",
  color: brand.text,
  margin: 0,
  wordBreak: "break-word",
}
