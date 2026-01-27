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
          { name: "Product Overview", href: "/features", description: "Complete procurement platform overview" },
          { name: "Intake Management", href: "/features/intake", description: "Streamline request processes" },
          { name: "Purchasing", href: "/features/purchasing", description: "Smart purchasing workflows" },
          { name: "AI-Powered AP", href: "/features/ai-automation", description: "Automated accounts payable" },
          { name: "Supplier Management", href: "/features/suppliers", description: "Manage vendor relationships" },
        ]
      },
      {
        title: "Features",
        items: [
          { name: "Budgeting", href: "/features/budgeting", description: "Budget planning & tracking" },
          { name: "Reporting", href: "/features/reporting", description: "Advanced analytics & insights" },
          { name: "Mobile App", href: "/features/mobile", description: "Procurement on the go" },
          { name: "Integrations", href: "/integrations", description: "Connect your tools" },
          { name: "Security", href: "/security", description: "Enterprise-grade security" },
        ]
      }
    ],
    image: "/platform-illustration.png",
    imageAlt: "Platform Overview",
    highlight: {
      title: "Platform Overview",
      description: "Discover how RiditStack transforms your procurement process with AI-powered automation and intelligent workflows.",
      cta: "Explore Platform"
    }
  },
  Solutions: {
    sections: [
      {
        title: "By Company Size",
        items: [
          { name: "Enterprise", href: "/solutions/enterprise", description: "Scale across global operations" },
          { name: "Mid-Market", href: "/solutions/mid-market", description: "Growth-focused solutions" },
          { name: "Small Business", href: "/solutions/small-business", description: "Streamlined for efficiency" },
          { name: "Startups", href: "/solutions/startups", description: "Build procurement from day one" },
        ]
      },
      {
        title: "By Industry",
        items: [
          { name: "Manufacturing", href: "/solutions/manufacturing", description: "Production & supply chain" },
          { name: "Healthcare", href: "/solutions/healthcare", description: "Compliance & patient care" },
          { name: "Education", href: "/solutions/education", description: "Budget optimization" },
          { name: "Technology", href: "/solutions/technology", description: "Scale tech operations" },
          { name: "Non-Profit", href: "/solutions/non-profit", description: "Mission-focused spending" },
        ]
      }
    ],
    image: "/solutions-illustration.png",
    imageAlt: "Solutions Overview",
    highlight: {
      title: "Industry Solutions",
      description: "Tailored procurement solutions designed for your industry's unique challenges and compliance requirements.",
      cta: "Find Your Solution"
    }
  },
  Resources: {
    sections: [
      {
        title: "Learn",
        items: [
          { name: "Blog", href: "/blog", description: "Latest insights & trends" },
          { name: "Help Center", href: "/help", description: "Get support & answers" },
          { name: "Documentation", href: "/docs", description: "Technical guides" },
          { name: "Guides & eBooks", href: "/guides", description: "In-depth resources" },
          { name: "Case Studies", href: "/case-studies", description: "Customer success stories" },
        ]
      },
      {
        title: "Tools & Support",
        items: [
          { name: "ROI Calculator", href: "/calculator", description: "Calculate your savings" },
          { name: "Support Center", href: "/support", description: "Get expert help" },
          { name: "Training", href: "/training", description: "Learn the platform" },
          { name: "Community", href: "/community", description: "Connect with users" },
        ]
      }
    ],
    image: "/resources-illustration.png",
    imageAlt: "Learning Resources",
    highlight: {
      title: "Learning Center",
      description: "Access comprehensive resources, tools, and expert insights to optimize your procurement strategy.",
      cta: "Start Learning"
    }
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
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="space-x-2">
                {Object.entries(navigation).map(([key, categoryData]) => (
                  <NavigationMenuItem key={key}>
                    <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-200 relative px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-3/4 data-[state=open]:text-primary dark:data-[state=open]:text-primary data-[state=open]:after:w-3/4 data-[state=open]:bg-primary/10 dark:data-[state=open]:bg-primary/20">
                      {key}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent 
                      className="border-0 shadow-xl bg-white dark:bg-gray-900 rounded-xl overflow-hidden z-[60]"
                      style={{
                        position: 'fixed',
                        left: '50%',
                        top: '68px',
                        transform: 'translateX(-50%)',
                        margin: '0',
                        right: 'auto'
                      }}
                    >
                      <div className="w-[85vw] max-w-[1200px] min-w-0 md:min-w-[800px] p-0">
                        {/* 3-Column Grid Layout */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                          {/* Left Column - First Section */}
                          {categoryData.sections[0] && (
                            <div className="p-4 md:p-6 border-gray-100 dark:border-gray-700 md:border-r border-b md:border-b-0">
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                  {categoryData.sections[0].title}
                                </h4>
                              </div>
                              <div className="space-y-2">
                                {categoryData.sections[0].items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:translate-x-1"
                                  >
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                          {item.name}
                                        </span>
                                        <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                      </div>
                                      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                                        {item.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Middle Column - Second Section */}
                          {categoryData.sections[1] && (
                            <div className="p-4 md:p-6 border-gray-100 dark:border-gray-700 md:border-r border-b md:border-b-0">
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                  {categoryData.sections[1].title}
                                </h4>
                              </div>
                              <div className="space-y-2">
                                {categoryData.sections[1].items.map((item, itemIndex) => (
                                  <Link
                                    key={itemIndex}
                                    href={item.href}
                                    className="group flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:translate-x-1"
                                  >
                                    <div className="flex-1">
                                      <div className="flex items-center gap-2">
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-200 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-200">
                                          {item.name}
                                        </span>
                                        <ArrowRight className="h-3 w-3 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
                                      </div>
                                      <span className="text-xs text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-200">
                                        {item.description}
                                      </span>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          )}
                          
                          {/* Right Column - Image/Illustration + CTA */}
                          <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 md:p-6 flex flex-col justify-center relative">
                            <div className="text-center relative z-10">
                              {/* Image/Illustration */}
                              <div className="mb-4">
                                <div className="w-16 h-16 mx-auto bg-primary/10 dark:bg-primary/20 rounded-2xl flex items-center justify-center mb-3">
                                  <div className="w-8 h-8 bg-primary rounded-xl flex items-center justify-center">
                                    <div className="w-4 h-4 bg-white rounded opacity-90"></div>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Title */}
                              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                                {categoryData.highlight?.title}
                              </h4>
                              
                              {/* Short Text */}
                              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                {categoryData.highlight?.description}
                              </p>
                              
                              {/* CTA Button */}
                              <Button size="sm" className="bg-primary hover:bg-primary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
                                {categoryData.highlight?.cta}
                                <ArrowRight className="ml-2 h-3 w-3" />
                              </Button>
                            </div>
                            
                            {/* Decorative Elements */}
                            <div className="absolute top-3 right-3 w-8 h-8 bg-primary/20 rounded-full opacity-20 pointer-events-none"></div>
                            <div className="absolute bottom-3 left-3 w-6 h-6 bg-secondary/30 rounded-full opacity-30 pointer-events-none"></div>
                          </div>
                        </div>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                <NavigationMenuItem>
                  <Link href="/pricing" className="text-sm font-semibold text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary transition-all duration-200 relative px-4 py-2 rounded-lg hover:bg-primary/10 dark:hover:bg-primary/20 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-3/4">
                    Pricing
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right side - Theme toggle and CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <ThemeToggle />
            <Button variant="outline" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-200">
              Login
            </Button>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Get Started
            </Button>
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
          <div className="lg:hidden mobile-menu-slide">
            <div className="space-y-1 px-2 pb-3 pt-2 border-t max-h-96 overflow-y-auto bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl border-gray-200 dark:border-gray-700 rounded-b-xl mx-4 mb-4">
              {Object.entries(navigation).map(([key, categoryData]) => (
                <div key={key} className="space-y-1">
                  <div className="px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white border-b border-gray-200 dark:border-gray-700 hover:text-gray-700 dark:hover:text-gray-300 transition-colors duration-200">
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
                          className="flex items-center justify-between px-2 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 hover:pl-3 rounded-md transition-all duration-200 group"
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
                className="flex items-center justify-between px-3 py-2 text-sm font-semibold text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-gray-300 hover:pl-4 border-t border-gray-200 dark:border-gray-700 transition-all duration-200 group"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span>Pricing</span>
                <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
              </Link>
              <div className="flex items-center space-x-2 px-3 py-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50 rounded-b-xl -mx-2 -mb-3 mt-2">
                <ThemeToggle />
                <Button variant="outline" size="sm" className="border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-200">
                  Login
                </Button>
                <Button size="sm" className="bg-gradient-to-r from-primary to-secondary text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}