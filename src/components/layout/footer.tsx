import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  Platform: [
    { name: "Intake Management", href: "/features/intake" },
    { name: "Purchasing", href: "/features/purchasing" },
    { name: "AI-Powered AP", href: "/features/ai-automation" },
    { name: "Supplier Management", href: "/features/suppliers" },
    { name: "Spend Management", href: "/features/spend" },
    { name: "Budgeting", href: "/features/budgeting" },
    { name: "Reporting", href: "/features/reporting" },
  ],
  Solutions: [
    { name: "Enterprise", href: "/solutions/enterprise" },
    { name: "Mid-Market", href: "/solutions/mid-market" },
    { name: "Small Business", href: "/solutions/small-business" },
    { name: "Non-Profit", href: "/solutions/non-profit" },
  ],
  Resources: [
    { name: "Blog", href: "/blog" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Documentation", href: "/docs" },
    { name: "Support", href: "/support" },
    { name: "API", href: "/api" },
  ],
  Company: [
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="RiditStack Logo"
                width={170}
                height={32}
                className="object-contain"
              />
              {/* <span className="text-2xl font-bold text-foreground">RiditStack</span> */}
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Procurement Centralization & Automation Platform for modern businesses
            </p>
            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                1000+ customers • $40B spend managed • 80+ countries
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-1">
              <h3 className="text-sm font-semibold text-foreground">{category}</h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <span>© 2024 RiditStack. All rights reserved.</span>
            </div>
            <div className="flex space-x-6">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}