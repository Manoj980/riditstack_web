import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { Reveal } from "@/components/ui/reveal"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Users,
  HelpCircle,
  LogIn,
  KeyRound,
  ShieldCheck,
  Headphones,
  CalendarDays,
  Sparkles,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import { DemoForm } from "@/components/forms/demo-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - RiditStack Procurement Platform",
  description:
    "Get in touch with RiditStack. Book a personalized demo, get login assistance, ask questions, or learn how we can help optimize your procurement processes.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Innovation Drive", "San Francisco, CA 94107", "United States"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Mon–Fri 9:00 AM – 6:00 PM PST"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@riditstack.com", "support@riditstack.com"],
  },
  {
    icon: Clock,
    title: "Support hours",
    details: ["24/7 for Enterprise customers", "Mon–Fri 9:00 AM – 6:00 PM PST for others"],
  },
]

type ContactMode = "default" | "demo" | "login"

type ModeConfig = {
  hero: {
    eyebrow: string
    eyebrowIcon: LucideIcon
    title: string
    highlight: string
    subtitle: string
  }
  form: {
    defaultReason: string
    title: string
    subtitle: string
    submitLabel: string
  }
  reasons: { icon: LucideIcon; title: string; description: string }[]
}

const modes: Record<ContactMode, ModeConfig> = {
  default: {
    hero: {
      eyebrow: "We'd love to hear from you",
      eyebrowIcon: MessageSquare,
      title: "Get in",
      highlight: "touch.",
      subtitle:
        "Ready to transform your procurement? Book a demo, ask questions, or learn how RiditStack can benefit your organization.",
    },
    form: {
      defaultReason: "",
      title: "Send us a message",
      subtitle: "Fill out the form and we'll get back to you within 24 hours.",
      submitLabel: "Send message",
    },
    reasons: [
      { icon: CalendarDays, title: "Book a demo", description: "See RiditStack in action with a personalized walkthrough." },
      { icon: Users, title: "Sales inquiry", description: "Learn about pricing and find the right plan for your team." },
      { icon: HelpCircle, title: "General questions", description: "Get answers about features, capabilities, and integrations." },
    ],
  },
  demo: {
    hero: {
      eyebrow: "See it on your own workflows",
      eyebrowIcon: CalendarDays,
      title: "Book a Personalized",
      highlight: "Demo",
      subtitle:
        "See RiditStack applied to your team, your stack, and the outcomes you care about. Share a few details and we'll tailor a walkthrough — no slideware, just the product on real procurement scenarios.",
    },
    form: {
      defaultReason: "demo",
      title: "Request your demo",
      subtitle: "Tell us about your team and we'll set up a walkthrough tailored to you.",
      submitLabel: "Request demo",
    },
    reasons: [
      { icon: CalendarDays, title: "A time that suits you", description: "We'll coordinate a slot that works for you and your stakeholders." },
      { icon: Sparkles, title: "Tailored to your needs", description: "The walkthrough focuses on the workflows and modules that matter to you." },
      { icon: Users, title: "Bring your whole team", description: "Invite finance, procurement, and ops — everyone who'll use the platform." },
    ],
  },
  login: {
    hero: {
      eyebrow: "Account access",
      eyebrowIcon: LogIn,
      title: "Login",
      highlight: "assistance.",
      subtitle:
        "Your dedicated login portal is on its way. In the meantime, our team can get you into your RiditStack workspace directly — just share a few details below and we'll help you sign in.",
    },
    form: {
      defaultReason: "login",
      title: "Get login help",
      subtitle: "Tell us about your account and our team will help you access your workspace.",
      submitLabel: "Request access",
    },
    reasons: [
      { icon: KeyRound, title: "Access your workspace", description: "We'll help you sign in and get back to work quickly." },
      { icon: ShieldCheck, title: "Verify your account", description: "Confirm your identity and account status securely with our team." },
      { icon: Headphones, title: "Talk to support", description: "Stuck on sign-in? Our support team is ready to help." },
    ],
  },
}

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ type?: string }>
}) {
  const { type } = await searchParams
  const mode: ContactMode = type === "login" ? "login" : type === "demo" ? "demo" : "default"
  const cfg = modes[mode]

  return (
    <Layout>
      <PageHero
        eyebrow={cfg.hero.eyebrow}
        eyebrowIcon={cfg.hero.eyebrowIcon}
        title={cfg.hero.title}
        highlight={cfg.hero.highlight}
        subtitle={cfg.hero.subtitle}
      />

      {/* Contact reasons */}
      <section className="px-4 pb-8">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-3">
            {cfg.reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 80}>
                <div className="group h-full rounded-2xl border border-border bg-card/60 p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                    <reason.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{reason.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-2">
            <Reveal variant="scale">
              {mode === "demo" ? (
                <DemoForm
                  title={cfg.form.title}
                  subtitle={cfg.form.subtitle}
                  submitLabel={cfg.form.submitLabel}
                />
              ) : (
                <ContactForm
                  key={mode}
                  defaultReason={cfg.form.defaultReason}
                  title={cfg.form.title}
                  subtitle={cfg.form.subtitle}
                  submitLabel={cfg.form.submitLabel}
                />
              )}
            </Reveal>

            <Reveal delay={100} className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold tracking-tight">Contact information</h2>
                <p className="mt-2 text-muted-foreground">
                  Prefer to reach out directly? Here&apos;s every way to get in touch.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactInfo.map((info) => (
                  <div
                    key={info.title}
                    className="rounded-2xl border border-border bg-card/60 p-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <info.icon className="h-5 w-5" />
                      </span>
                      <h3 className="font-semibold">{info.title}</h3>
                    </div>
                    <div className="mt-3 space-y-1">
                      {info.details.map((detail) => (
                        <p key={detail} className="text-sm text-muted-foreground">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-glow relative overflow-hidden rounded-2xl border border-primary/20 bg-card p-6">
                <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
                  <div className="absolute -top-16 right-0 h-40 w-40 rounded-full aurora animate-aurora opacity-30" />
                </div>
                <h3 className="text-lg font-semibold">Need help right away?</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our team typically responds within a few hours during business days.
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm">
                  <a
                    href="mailto:hello@riditstack.com"
                    className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                  >
                    <Mail className="h-4 w-4" />
                    hello@riditstack.com
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </Layout>
  )
}
