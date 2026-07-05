import * as React from "react"
import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components"

import { brand, links } from "./theme"

type EmailLayoutProps = {
  preview: string
  children: React.ReactNode
  /** Show the marketing footer links (website/docs/case studies/blog). */
  showResourceLinks?: boolean
}

/**
 * Branded shell shared by every transactional email. Keeps header, footer,
 * spacing, and colours consistent so templates only supply their body.
 */
export function EmailLayout({ preview, children, showResourceLinks }: EmailLayoutProps) {
  return (
    <Html>
      <Head />
      <Preview>{preview}</Preview>
      <Body style={styles.body}>
        <Container style={styles.container}>
          <Section style={styles.header}>
            <Text style={styles.brandMark}>
              Ridit<span style={{ color: brand.primary }}>Stack</span>
            </Text>
            <Text style={styles.brandTag}>Enterprise AI • Powered by ProcLeo</Text>
          </Section>

          <Section style={styles.card}>{children}</Section>

          {showResourceLinks ? (
            <Section style={styles.resourceRow}>
              <Link href={links.website} style={styles.resourceLink}>
                Website
              </Link>
              <span style={styles.dot}>•</span>
              <Link href={links.docs} style={styles.resourceLink}>
                Documentation
              </Link>
              <span style={styles.dot}>•</span>
              <Link href={links.caseStudies} style={styles.resourceLink}>
                Case Studies
              </Link>
              <span style={styles.dot}>•</span>
              <Link href={links.blog} style={styles.resourceLink}>
                Blog
              </Link>
            </Section>
          ) : null}

          <Hr style={styles.hr} />
          <Text style={styles.footer}>
            © {new Date().getFullYear()} RiditStack. All rights reserved.
            <br />
            You received this email because you interacted with RiditStack.
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

const styles: Record<string, React.CSSProperties> = {
  body: {
    backgroundColor: brand.bg,
    fontFamily:
      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    margin: 0,
    padding: "24px 0",
  },
  container: { maxWidth: "560px", margin: "0 auto", padding: "0 16px" },
  header: { textAlign: "center", padding: "8px 0 20px" },
  brandMark: { fontSize: "22px", fontWeight: 700, color: brand.text, margin: 0 },
  brandTag: { fontSize: "12px", color: brand.muted, margin: "4px 0 0" },
  card: {
    backgroundColor: brand.card,
    borderRadius: "14px",
    border: `1px solid ${brand.border}`,
    padding: "32px",
  },
  resourceRow: { textAlign: "center", padding: "18px 0 4px" },
  resourceLink: {
    color: brand.primary,
    fontSize: "13px",
    fontWeight: 600,
    textDecoration: "none",
    margin: "0 6px",
  },
  dot: { color: brand.muted, fontSize: "12px" },
  hr: { borderColor: brand.border, margin: "20px 0" },
  footer: { fontSize: "12px", color: brand.muted, textAlign: "center", lineHeight: "18px" },
}
