"use client"

import Link from "next/link"
import Image from "next/image"
import './header.css';
import { useEffect, useState } from "react"
import {
  Menu, X, ArrowRight, Sparkles, CalendarDays,
  LayoutGrid, Workflow, Route, Inbox, ClipboardList, ShoppingCart, CheckCheck,
  Users, KeyRound, ReceiptText, FileSignature, BarChart3, Wallet, Warehouse, Tag,
  Bot, Zap, Plug, Code2, Landmark, Settings2, Truck, Target, Rocket, TrendingUp,
  Building2, Factory, HeartPulse, ShoppingBag, HardHat, Cpu, GraduationCap, Hotel,
  Car, BookOpen, FileText, Calculator, LifeBuoy, Headphones,
  type LucideIcon,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

/**
 * Auth isn't implemented yet, so Login and Book a Demo route to the Contact
 * page with an intent param. Swapping LOGIN_HREF for the real portal later
 * needs no other change to the header.
 */
const LOGIN_HREF = "/contact?type=login"
const DEMO_HREF = "/contact?type=demo"

type MegaItemData = { name: string; href: string; description: string; icon: LucideIcon }
type MegaMenu = {
  sections: { title: string; items: MegaItemData[] }[]
  highlight: { title: string; description: string; cta: string; href: string }
}

const megaMenus: Record<string, MegaMenu> = {
  Platform: {
    sections: [
      {
        title: "Suites & buying",
        items: [
          { name: "Platform Overview", href: "/features", description: "Every module on one record", icon: LayoutGrid },
          { name: "AI Procurement", href: "/features/ai-procurement", description: "AI at every step, built-in", icon: Sparkles },
          { name: "Procure-to-Pay", href: "/features/procure-to-pay", description: "Request to payment, one flow", icon: Workflow },
          { name: "Source-to-Pay", href: "/features/source-to-pay", description: "Sourcing and contracts to spend", icon: Route },
          { name: "Intake Management", href: "/features/intake", description: "One front door for requests", icon: Inbox },
          { name: "Purchase Requisition", href: "/features/purchase-requisitions", description: "Structured, budget-checked", icon: ClipboardList },
          { name: "Purchase Orders", href: "/features/purchase-orders", description: "Budget-checked at commitment", icon: ShoppingCart },
          { name: "Approval Workflows", href: "/features/approvals", description: "No-code, policy-aware routing", icon: CheckCheck },
          { name: "Supplier Management", href: "/features/suppliers", description: "Every vendor on one record", icon: Users },
          { name: "Vendor Portal", href: "/features/vendor-portal", description: "Suppliers help themselves", icon: KeyRound },
        ]
      },
      {
        title: "AP, controls & AI",
        items: [
          { name: "Invoice Automation", href: "/features/invoice-automation", description: "Touchless 3-way matching", icon: ReceiptText },
          { name: "Contract Management", href: "/features/contracts", description: "Terms that enforce themselves", icon: FileSignature },
          { name: "Spend Analytics", href: "/features/analytics", description: "Live spend, AI-found savings", icon: BarChart3 },
          { name: "Budget Control", href: "/features/budgeting", description: "Overspend stopped at source", icon: Wallet },
          { name: "Inventory Management", href: "/features/inventory", description: "Auto-replenish, no stockouts", icon: Warehouse },
          { name: "Asset Management", href: "/features/asset-management", description: "Assets tracked to disposal", icon: Tag },
          { name: "AI Copilot", href: "/features/ai-copilot", description: "Ask procurement anything", icon: Bot },
          { name: "Workflow Automation", href: "/features/workflow-automation", description: "Automate the busywork", icon: Zap },
          { name: "Integrations", href: "/features/integrations", description: "ERP, finance & identity sync", icon: Plug },
          { name: "API", href: "/features/api", description: "Build on an open REST API", icon: Code2 },
        ]
      }
    ],
    highlight: {
      title: "Meet ProcLeo",
      description: "Our flagship AI procurement product - the whole platform on one intelligent record.",
      cta: "Explore ProcLeo",
      href: "/features"
    }
  },
  Solutions: {
    sections: [
      {
        title: "By department",
        items: [
          { name: "Procurement", href: "/solutions/procurement", description: "Run a strategic function", icon: ShoppingCart },
          { name: "Finance", href: "/solutions/finance", description: "Control spend, close faster", icon: Landmark },
          { name: "Operations", href: "/solutions/operations", description: "Keep buying moving", icon: Settings2 },
          { name: "Supply Chain", href: "/solutions/supply-chain", description: "Resilient, visible sourcing", icon: Truck },
          { name: "Executive Leadership", href: "/solutions/executive", description: "Margin, control, and proof", icon: Target },
        ]
      },
      {
        title: "By company size",
        items: [
          { name: "Startups", href: "/solutions/startups", description: "Discipline from day one", icon: Rocket },
          { name: "Mid-Market", href: "/solutions/mid-market", description: "Standardize as you scale", icon: TrendingUp },
          { name: "Enterprise", href: "/solutions/enterprise", description: "Global scale and control", icon: Building2 },
        ]
      }
    ],
    highlight: {
      title: "Find your fit",
      description: "See how teams like yours put RiditStack to work - and what it could save you.",
      cta: "Book a demo",
      href: DEMO_HREF
    }
  },
  Industries: {
    sections: [
      {
        title: "Industries",
        items: [
          { name: "Manufacturing", href: "/industries/manufacturing", description: "Keep the line running", icon: Factory },
          { name: "Healthcare", href: "/industries/healthcare", description: "Compliant, reliable supply", icon: HeartPulse },
          { name: "Retail", href: "/industries/retail", description: "Margin across every store", icon: ShoppingBag },
          { name: "Construction", href: "/industries/construction", description: "On time and on budget", icon: HardHat },
          { name: "Technology", href: "/industries/technology", description: "Control at startup speed", icon: Cpu },
          { name: "Education", href: "/industries/education", description: "Stretch every budget", icon: GraduationCap },
        ]
      },
      {
        title: "More sectors",
        items: [
          { name: "Government", href: "/industries/government", description: "Transparent public buying", icon: Landmark },
          { name: "Hospitality", href: "/industries/hospitality", description: "Cost control across properties", icon: Hotel },
          { name: "Logistics", href: "/industries/logistics", description: "Fleets and depots stocked", icon: Truck },
          { name: "Energy", href: "/industries/energy", description: "High-value, compliant sourcing", icon: Zap },
          { name: "Automotive", href: "/industries/automotive", description: "Precision, just-in-time", icon: Car },
        ]
      }
    ],
    highlight: {
      title: "Built for your sector",
      description: "RiditStack adapts to the workflows, compliance, and scale your industry demands.",
      cta: "Talk to an expert",
      href: DEMO_HREF
    }
  },
  Resources: {
    sections: [
      {
        title: "Learn",
        items: [
          { name: "Blog", href: "/blog", description: "Insights on spend & strategy", icon: BookOpen },
          { name: "Documentation", href: "/features/api", description: "Developer & product docs", icon: FileText },
          { name: "Platform Overview", href: "/features", description: "Tour the whole platform", icon: LayoutGrid },
        ]
      },
      {
        title: "Tools & support",
        items: [
          { name: "ROI Calculator", href: "/pricing", description: "Estimate your savings", icon: Calculator },
          { name: "Integrations", href: "/features/integrations", description: "Connect your stack", icon: Plug },
          { name: "Help Center", href: "/contact", description: "Get answers fast", icon: LifeBuoy },
          { name: "Support", href: "/contact", description: "Talk to our team", icon: Headphones },
        ]
      }
    ],
    highlight: {
      title: "From the blog",
      description: "Practical guidance on procurement, spend, and AI you can put to work this quarter.",
      cta: "Read the blog",
      href: "/blog"
    }
  }
}

const navLinks: { name: string; href: string }[] = [
  { name: "Pricing", href: "/pricing" },
  { name: "Company", href: "/about" },
  { name: "Contact", href: "/contact" },
]

// Shared geometry for every top-level nav item. Both the mega-menu triggers
// and the plain links inherit this identical box (inline-flex, fixed h-9,
// items-center) so every item is naturally the same height and vertically
// centered - matching NavigationMenuTrigger's base style. Only the per-type
// hover/focus/state colors differ below.
const NAV_ITEM_BASE =
  "inline-flex h-9 w-max items-center justify-center rounded-lg px-3 py-2 text-sm font-medium transition-colors"

const triggerClass = cn(
  NAV_ITEM_BASE,
  "bg-transparent text-foreground/80 hover:bg-muted hover:text-foreground data-[state=open]:bg-primary/10 data-[state=open]:text-primary"
)

const linkClass = cn(
  NAV_ITEM_BASE,
  "nav-underline text-foreground/80 hover:text-foreground"
)

function MegaItem({ name, href, description, icon: Icon }: MegaItemData) {
  return (
    <Link
      href={href}
      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted"
    >
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="h-4 w-4" />
      </span>
      <div className="flex-1">
        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-foreground">{name}</span>
          <ArrowRight className="h-3 w-3 text-muted-foreground opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" />
        </div>
        <span className="text-xs leading-relaxed text-muted-foreground">{description}</span>
      </div>
    </Link>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header data-scrolled={scrolled} className="header-sticky top-0 z-50 w-full">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between gap-2">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-transform duration-300 hover:scale-[1.03]"
            aria-label="RiditStack home"
          >
            <Image src="/logo.png" alt="RiditStack" width={160} height={30} priority className="object-contain dark:hidden" />
            <Image src="/logo-white.png" alt="RiditStack" width={160} height={30} priority className="hidden object-contain dark:block" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center lg:flex">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-0.5">
                {Object.entries(megaMenus).map(([key, categoryData]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className={triggerClass}>{key}</NavigationMenuTrigger>
                    <NavigationMenuContent className="overflow-hidden rounded-2xl border border-border bg-popover shadow-2xl">
                      <div className="w-[92vw] max-w-[940px] min-w-0 md:min-w-[720px]">
                        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_0.9fr]">
                          {categoryData.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="border-b border-border p-4 md:border-b-0 md:border-r">
                              <h4 className="mb-2 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                                {section.title}
                              </h4>
                              <div className="space-y-0.5">
                                {section.items.map((item) => (
                                  <MegaItem key={item.href} {...item} />
                                ))}
                              </div>
                            </div>
                          ))}

                          {/* Featured / highlight column */}
                          <div className="relative flex flex-col justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-transparent p-6">
                            <div aria-hidden className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full aurora animate-aurora opacity-40" />
                            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-[var(--brand-2)] shadow-lg shadow-primary/20">
                              <Sparkles className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <h4 className="text-base font-semibold">{categoryData.highlight.title}</h4>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                              {categoryData.highlight.description}
                            </p>
                            <Button size="sm" className="group btn-shine mt-4 w-fit" asChild>
                              <Link href={categoryData.highlight.href}>
                                {categoryData.highlight.cta}
                                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}

                {navLinks.map((link) => (
                  <NavigationMenuItem key={link.href}>
                    <Link href={link.href} className={linkClass}>{link.name}</Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side */}
          <div className="hidden items-center gap-2 lg:flex">
            {/* <Link
              href={LOGIN_HREF}
              className={cn(NAV_ITEM_BASE, "text-foreground/80 hover:text-foreground")}
            >
              Login
            </Link> */}
            <Button className="group btn-shine" asChild>
              <Link href={DEMO_HREF}>
                Book a demo
                <CalendarDays className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-menu-slide lg:hidden">
            <div className="mb-4 max-h-[75vh] overflow-y-auto rounded-2xl border border-border bg-popover p-2 shadow-2xl">
              {Object.entries(megaMenus).map(([key, categoryData]) => (
                <div key={key} className="py-1">
                  <div className="px-3 py-2 text-sm font-semibold">{key}</div>
                  {categoryData.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="px-1 pb-2">
                      <div className="px-2 py-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {section.title}
                      </div>
                      {section.items.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="group flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                            <item.icon className="h-3.5 w-3.5" />
                          </span>
                          <span className="flex-1">{item.name}</span>
                          <ArrowRight className="h-3 w-3 opacity-0 transition-all group-hover:translate-x-0.5 group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}

              <div className="border-t border-border pt-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded-lg px-3 py-2 text-sm font-semibold transition-colors hover:bg-muted"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>

              <div className="mt-2 flex flex-col gap-2 border-t border-border p-2 pt-3">
                <Button variant="ghost" className="justify-start" asChild>
                  <Link href={LOGIN_HREF} onClick={() => setMobileMenuOpen(false)}>Login</Link>
                </Button>
                <Button className="group btn-shine" asChild>
                  <Link href={DEMO_HREF} onClick={() => setMobileMenuOpen(false)}>
                    Book a demo
                    <CalendarDays className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
