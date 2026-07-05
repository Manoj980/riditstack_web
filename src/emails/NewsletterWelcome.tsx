import * as React from "react"

import { EmailLayout } from "./components/EmailLayout"
import { CtaButton, Heading, Paragraph } from "./components/ui"
import { links } from "./components/theme"

export type NewsletterWelcomeProps = {
  email: string
}

export default function NewsletterWelcome(_props: NewsletterWelcomeProps) {
  return (
    <EmailLayout preview="Welcome to the RiditStack briefing" showResourceLinks>
      <Heading>You&apos;re in. Welcome to the RiditStack briefing.</Heading>
      <Paragraph>
        Thanks for subscribing! You&apos;ll now get our monthly briefing on
        procurement, automation, and applied AI — practical, no spam, and you can
        unsubscribe anytime.
      </Paragraph>
      <Paragraph>
        Join 12,000+ enterprise leaders staying ahead of what&apos;s next in AI
        procurement with ProcLeo.
      </Paragraph>
      <CtaButton href={links.blog}>Read the latest</CtaButton>
    </EmailLayout>
  )
}

NewsletterWelcome.PreviewProps = {
  email: "leader@enterprise.com",
} satisfies NewsletterWelcomeProps
