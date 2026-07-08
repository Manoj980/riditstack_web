import { Layout } from "@/components/layout/layout"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { ScrollText } from "lucide-react"

export type LegalSection = { heading: string; body: string[] }

export function LegalPage({
  title,
  intro,
  updated,
  sections,
  contactCard = true,
}: {
  title: string
  intro: string
  updated: string
  sections: LegalSection[]
  contactCard?: boolean
}) {
  return (
    <Layout>
      <section className="relative overflow-hidden px-4 pt-14 pb-10 sm:pt-20">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.4]" />
          <div className="absolute -top-40 left-1/2 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-30" />
        </div>
        <div className="container mx-auto max-w-3xl text-center">
          <Reveal><SectionBadge tone="primary" icon={ScrollText}>Legal</SectionBadge></Reveal>
          <Reveal delay={60} as="h1" className="mt-5 text-4xl font-semibold tracking-tight sm:text-6xl">
            {title}
          </Reveal>
          <Reveal delay={120} as="p" className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {intro}
          </Reveal>
          <Reveal delay={160} as="p" className="mt-4 text-sm text-muted-foreground">
            Last updated: {updated}
          </Reveal>
        </div>
      </section>

      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <Reveal key={section.heading} delay={Math.min(i, 4) * 40}>
                <div>
                  <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">{section.heading}</h2>
                  <div className="mt-3 space-y-3">
                    {section.body.map((para, j) => (
                      <p key={j} className="leading-relaxed text-muted-foreground">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {contactCard && (
            <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-6 text-sm text-muted-foreground">
              Questions about this policy? Contact us at{" "}
              <a href="mailto:legal@riditstack.com" className="font-medium text-primary hover:underline">
                legal@riditstack.com
              </a>
              .
            </div>
          )}
        </div>
      </section>
    </Layout>
  )
}
