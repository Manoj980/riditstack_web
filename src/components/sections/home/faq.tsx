import Link from "next/link"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { FeatureFaq } from "@/components/features/feature-faq"

export const homeFaqs = [
  {
    q: "What does RiditStack do?",
    a: "RiditStack is an enterprise AI company. We build intelligent software for large organizations — spanning procurement, automation, cloud, and data. Our flagship product, ProcLeo, runs the full procurement lifecycle with AI at every step.",
  },
  {
    q: "What is ProcLeo?",
    a: "ProcLeo is RiditStack's flagship AI procurement product. It unifies intake, sourcing, purchasing, supplier management, invoice automation, and spend analytics on one intelligent record, so procurement runs itself and finance stays in control.",
  },
  {
    q: "How is RiditStack different from legacy procurement suites?",
    a: "Legacy suites bolt AI on as an afterthought and take years to implement. RiditStack builds AI into the core, delivers a modern experience people actually adopt, and goes live in weeks — with the depth global enterprises still require.",
  },
  {
    q: "Who uses RiditStack?",
    a: "From startups to global enterprises, across manufacturing, healthcare, retail, technology, government, and more. Procurement, finance, operations, and supply chain teams use it to control spend, recover savings, and move faster.",
  },
  {
    q: "How quickly can we get started?",
    a: "Most teams are live on their first workflow within two weeks — no multi-quarter implementation. You can book a demo tailored to your team, or start a free trial and explore at your own pace.",
  },
]

export function HomeFaq() {
  return (
    <section className="px-4 py-20 sm:py-24 lg:py-32">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <SectionBadge tone="primary">FAQ</SectionBadge>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Questions, answered</h2>
            <p className="mt-4 text-muted-foreground">
              Everything you need to understand RiditStack and ProcLeo. Still curious?{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                Talk to our team
              </Link>
              .
            </p>
          </Reveal>
          <Reveal delay={120}>
            <FeatureFaq faqs={homeFaqs} />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
