import Link from "next/link"
import Image from "next/image"
import { Github, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { NewsletterForm } from "@/components/forms/newsletter-form"

const footerLinks = {
  Platform: [
    { name: "AI Procurement", href: "/features/ai-procurement" },
    { name: "Procure-to-Pay", href: "/features/procure-to-pay" },
    { name: "Invoice Automation", href: "/features/invoice-automation" },
    { name: "Spend Analytics", href: "/features/analytics" },
    { name: "AI Copilot", href: "/features/ai-copilot" },
    { name: "All modules", href: "/features" },
  ],
  Solutions: [
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "Mid-Market", href: "/solutions/mid-market" },
    { name: "Procurement Teams", href: "/solutions/procurement" },
    { name: "Finance Teams", href: "/solutions/finance" },
    { name: "All solutions", href: "/solutions" },
  ],
  Industries: [
    { name: "Manufacturing", href: "/industries/manufacturing" },
    { name: "Healthcare", href: "/industries/healthcare" },
    { name: "Retail", href: "/industries/retail" },
    { name: "Technology", href: "/industries/technology" },
    { name: "All industries", href: "/industries" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Documentation", href: "/features/api" },
    { name: "Pricing", href: "/pricing" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Book a demo", href: "/contact?type=demo" },
    { name: "Login", href: "/contact?type=login" },
  ],
}

const socials = [
  { name: "LinkedIn", href: "https://www.linkedin.com/company/riditstack-private-limited/", icon: Linkedin },
  { name: "Twitter", href: "https://x.com/riditstack", icon: Twitter },
  { name: "YouTube", href: "https://www.youtube.com/@riditstack", icon: Youtube },
  { name: "Instagram", href: "https://www.instagram.com/riditstack", icon: Instagram },
]

export function Footer() {
  return (
    <footer className="dark relative overflow-hidden border-t border-white/10 bg-[#0a0e1a] py-10 text-white">
      {/* Newsletter */}
      <div className="relative z-10 container mx-auto px-4 pt-14">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[oklch(0.24_0.05_282)] via-[oklch(0.19_0.04_284)] to-[oklch(0.15_0.03_286)] px-6 py-10 shadow-2xl ring-1 ring-white/10 sm:px-10 sm:py-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/40 blur-[90px]" />
            <div className="absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[var(--brand-2)]/25 blur-[90px]" />
            <div className="absolute inset-0 bg-grid opacity-[0.06]" />
          </div>
          <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div className="max-w-md">
              <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                Enterprise AI insights, straight to your inbox
              </h3>
              <p className="mt-2 text-sm text-white/80">
                Join 12,000+ leaders getting our monthly briefing on procurement, automation, and applied AI.
                No spam, unsubscribe anytime.
              </p>
            </div>
            <NewsletterForm sourcePage="footer" variant="dark" />
          </div>
        </div>
      </div>

      {/* Link columns - footer-bg image scoped to this section */}
      <div className="relative isolate overflow-hidden">
        {/* Single dark overlay (base tone), below the watermark */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-[#050814]/80" />
        {/* Subtle grid texture */}
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0 bg-grid opacity-[0.12] mask-fade-b" />
        {/* Watermark: footer-bg rendered as a Next.js <Image>, centered and scaled to
            ~140% width with its natural aspect ratio preserved - never stretched.
            Sits above the dark overlay (so it stays visible) but below the content. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-[1] flex items-center justify-center overflow-hidden"
        >
          <Image
            src="/footer-bg.jpeg"
            alt=""
            width={1600}
            height={336}
            className="h-auto w-[140%] max-w-none select-none object-contain opacity-[0.16] blur-[1px]"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-14 pt-14">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-[1.6fr_repeat(5,1fr)]">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <Link href="/" className="inline-flex items-center">
              <Image src="/logo.png" alt="RiditStack" width={170} height={32} className="object-contain dark:hidden" />
              <Image src="/logo-white.png" alt="RiditStack" width={170} height={32} className="hidden object-contain dark:block" />
            </Link>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              RiditStack is an enterprise AI company building intelligent software - powered by ProcLeo, our
              flagship AI procurement product.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold">{category}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span>All systems operational</span>
            <span className="mx-2 text-border">•</span>
            <span>© 2026 RiditStack. All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="transition-colors hover:text-primary">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-primary">Terms</Link>
            <Link href="/cookies" className="transition-colors hover:text-primary">Cookies</Link>
          </div>
        </div>
        </div>
      </div>
    </footer>
  )
}
