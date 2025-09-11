"use client"

import Link from "next/link"
import Image from "next/image"
import './header.css';
import { useState } from "react"
import { Menu, X, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const navigation = {
  Platform: {
    sections: [
      {
        title: "Product",
        items: [
          { name: "Product Overview", href: "/features" },
          { name: "Intake Management", href: "/features/intake" },
          { name: "Purchasing", href: "/features/purchasing" },
          { name: "AI-Powered AP", href: "/features/ai-automation" },
          { name: "Supplier Management", href: "/features/suppliers" },
          { name: "Spend Management", href: "/features/spend" },
        ]
      },
      {
        title: "Features",
        items: [
          { name: "Budgeting", href: "/features/budgeting" },
          { name: "Reporting", href: "/features/reporting" },
          { name: "Mobile App", href: "/features/mobile" },
          { name: "Integrations", href: "/integrations" },
          { name: "API", href: "/api" },
          { name: "Security", href: "/security" },
        ]
      },
      {
        title: "Why RiditStack",
        items: [
          { name: "Product Tour", href: "/tour" },
          { name: "Wall of Love", href: "/testimonials" },
          { name: "Case Studies", href: "/case-studies" },
          { name: "ROI Calculator", href: "/calculator" },
        ]
      }
    ]
  },
  Solutions: {
    sections: [
      {
        title: "By Company Size",
        items: [
          { name: "Enterprise", href: "/solutions/enterprise" },
          { name: "Mid-Market", href: "/solutions/mid-market" },
          { name: "Small Business", href: "/solutions/small-business" },
          { name: "Startups", href: "/solutions/startups" },
        ]
      },
      {
        title: "By Industry",
        items: [
          { name: "Manufacturing", href: "/solutions/manufacturing" },
          { name: "Healthcare", href: "/solutions/healthcare" },
          { name: "Education", href: "/solutions/education" },
          { name: "Non-Profit", href: "/solutions/non-profit" },
          { name: "Government", href: "/solutions/government" },
        ]
      },
      {
        title: "By Role",
        items: [
          { name: "Procurement Teams", href: "/solutions/procurement" },
          { name: "Finance Teams", href: "/solutions/finance" },
          { name: "IT Teams", href: "/solutions/it" },
          { name: "Operations", href: "/solutions/operations" },
        ]
      }
    ]
  },
  Resources: {
    sections: [
      {
        title: "Learn",
        items: [
          { name: "Blog", href: "/blog" },
          { name: "Help Center", href: "/help" },
          { name: "Documentation", href: "/docs" },
          { name: "Guides & eBooks", href: "/guides" },
          { name: "Webinars", href: "/webinars" },
        ]
      },
      {
        title: "Tools",
        items: [
          { name: "ROI Calculator", href: "/calculator" },
          { name: "Procurement Assessment", href: "/assessment" },
          { name: "Cost Savings Calculator", href: "/savings-calculator" },
        ]
      },
      {
        title: "Support",
        items: [
          { name: "Support Center", href: "/support" },
          { name: "Contact Support", href: "/contact" },
          { name: "Training", href: "/training" },
          { name: "Community", href: "/community" },
        ]
      }
    ]
  }
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme } = useTheme()

  return (
    <header className={`sticky header-sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
      theme === "dark" 
        ? "border-b border-gray-800/50 shadow-lg shadow-gray-900/20" 
        : "border-b border-gray-200/60 shadow-sm shadow-gray-100/40"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={theme === "dark" ? "/logo-white.png" : "/logo.png"}
                alt="RiditStack Logo"
                width={170}
                height={32}
                className="object-contain"
              />
              {/* <span className="text-2xl font-bold text-foreground">RiditStack</span> */}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {Object.entries(navigation).map(([key, categoryData]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-sm font-semibold hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full data-[state=open]:text-primary data-[state=open]:after:w-full">
                      {key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="border border-border/20 shadow-lg backdrop-blur-sm bg-background/95">
                      <div className="w-[800px] p-6">
                        <div className="grid grid-cols-3 gap-8">
                          {categoryData.sections.map((section, sectionIndex) => (
                            <div key={sectionIndex} className="space-y-3">
                              <h4 className="text-sm font-semibold text-foreground border-b border-border pb-2 group-hover:text-primary transition-colors duration-200">
                                {section.title}
                              </h4>
                              <ul className="space-y-2">
                                {section.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <Link
                                      href={item.href}
                                      className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-all duration-200 hover:bg-muted/50 hover:text-primary hover:pl-3 hover:shadow-sm focus:bg-muted/50 focus:text-primary group"
                                    >
                                      <div className="text-sm font-medium leading-relaxed flex items-center justify-between">
                                        {item.name}
                                        <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                      </div>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href="/pricing" className="text-sm font-semibold hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full">
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side - Theme toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline">Login</Button>
            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 border-t max-h-96 overflow-y-auto bg-background/95 backdrop-blur-sm shadow-lg">
              {Object.entries(navigation).map(([key, categoryData]) => (
                <div key={key} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-foreground border-b border-border hover:text-primary transition-colors duration-200">
                    {key}
                  </div>
                  {categoryData.sections.map((section, sectionIndex) => (
                    <div key={sectionIndex} className="px-3 py-1">
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2 hover:text-primary/70 transition-colors duration-200">
                        {section.title}
                      </div>
                      {section.items.map((item, itemIndex) => (
                        <Link
                          key={itemIndex}
                          href={item.href}
                          className="flex items-center justify-between px-2 py-1 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 hover:pl-3 rounded-md transition-all duration-200 group"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <span>{item.name}</span>
                          <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
              <Link
                href="/pricing"
                className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-foreground hover:text-primary hover:pl-4 border-t border-border transition-all duration-200 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Pricing</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              <div className="flex items-center space-x-2 px-3 py-2 border-t border-border">
                <ThemeToggle />
                <Button variant="outline" size="sm">Login</Button>
                <Button size="sm">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}