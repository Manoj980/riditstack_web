import { Layout } from "@/components/layout/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  FileText, 
  ShoppingCart, 
  Bot, 
  Users, 
  DollarSign, 
  TrendingUp, 
  BarChart3,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Features - RiditStack Procurement Platform",
  description: "Discover comprehensive procurement features including intake management, purchasing, AI-powered automation, supplier management, and more.",
}

const features = [
  {
    icon: FileText,
    title: "Intake Management",
    description: "Streamline purchase requests with customizable workflows and approval processes.",
    benefits: [
      "Customizable approval workflows",
      "Automated routing based on rules",
      "Real-time request tracking",
      "Mobile-friendly interface"
    ],
    details: "Transform chaotic purchase requests into organized, trackable processes. Our intake management system allows you to create custom workflows that automatically route requests to the right approvers based on amount, category, or department rules."
  },
  {
    icon: ShoppingCart,
    title: "Purchasing",
    description: "Create, track, and manage purchase orders with automated workflows.",
    benefits: [
      "PO creation and management",
      "Three-way matching",
      "Vendor communication",
      "Receipt tracking"
    ],
    details: "Centralize all your purchasing activities in one platform. Generate purchase orders automatically from approved requests, track deliveries, and maintain complete visibility across all your procurement activities."
  },
  {
    icon: Bot,
    title: "AI-Powered AP Automation",
    description: "Leverage artificial intelligence to automate invoice processing and matching.",
    benefits: [
      "Automated invoice processing",
      "Intelligent data extraction",
      "Exception handling",
      "Compliance checking"
    ],
    details: "Our AI engine processes invoices automatically, extracting key data points and matching them against purchase orders and receipts. Reduce processing time by 80% while improving accuracy and compliance."
  },
  {
    icon: Users,
    title: "Supplier Management",
    description: "Maintain a centralized supplier database with performance tracking.",
    benefits: [
      "Supplier onboarding",
      "Performance tracking",
      "Contract management",
      "Risk assessment"
    ],
    details: "Build stronger supplier relationships with comprehensive supplier management tools. Track performance metrics, manage contracts, and assess risk across your entire supplier network."
  },
  {
    icon: DollarSign,
    title: "Spend Management",
    description: "Get complete visibility into organizational spending with real-time analytics.",
    benefits: [
      "Real-time spend visibility",
      "Category analysis",
      "Savings tracking",
      "Maverick spend identification"
    ],
    details: "Gain complete control over your organization's spending. Identify cost-saving opportunities, track budgets in real-time, and eliminate maverick spending with comprehensive spend analytics."
  },
  {
    icon: TrendingUp,
    title: "Budgeting",
    description: "Set, track, and control budgets across projects and departments.",
    benefits: [
      "Multi-level budgeting",
      "Real-time tracking",
      "Automated alerts",
      "Variance analysis"
    ],
    details: "Create and manage budgets at any level of your organization. Track spending against budgets in real-time and receive automated alerts when thresholds are exceeded."
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Generate comprehensive reports with actionable insights.",
    benefits: [
      "Pre-built dashboards",
      "Custom report builder",
      "Scheduled reports",
      "Data visualization"
    ],
    details: "Make data-driven decisions with comprehensive reporting and analytics. Access pre-built dashboards or create custom reports to track the metrics that matter most to your organization."
  },
  {
    icon: Zap,
    title: "Integration Ready",
    description: "Seamlessly connect with your existing ERP and business systems.",
    benefits: [
      "ERP integrations",
      "API connectivity",
      "Data synchronization",
      "Workflow automation"
    ],
    details: "Connect RiditStack with your existing systems through our robust API platform. Maintain data consistency and automate workflows across your entire technology stack."
  }
]

export default function FeaturesPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Comprehensive Procurement
                <span className="text-primary"> Platform Features</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need to centralize, automate, and optimize your procurement 
                processes in one powerful, integrated platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h2 className="text-3xl font-bold">{feature.title}</h2>
                  </div>
                  
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {feature.details}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-3">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button className="mt-6">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                {/* Visual */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <Card className="border-0 shadow-xl">
                    <CardContent className="p-8">
                      <div className="space-y-4">
                        <div className="h-4 bg-primary/20 rounded w-3/4"></div>
                        <div className="h-4 bg-secondary/20 rounded w-1/2"></div>
                        <div className="h-4 bg-accent/20 rounded w-5/6"></div>
                        <div className="mt-8 grid grid-cols-2 gap-4">
                          <div className="h-24 bg-primary/10 rounded-lg flex items-center justify-center">
                            <feature.icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="h-24 bg-secondary/10 rounded-lg flex items-center justify-center">
                            <div className="h-8 w-8 bg-secondary rounded"></div>
                          </div>
                          <div className="h-24 bg-accent/10 rounded-lg flex items-center justify-center">
                            <div className="h-8 w-8 bg-accent rounded"></div>
                          </div>
                          <div className="h-24 bg-muted rounded-lg flex items-center justify-center">
                            <div className="h-8 w-8 bg-muted-foreground rounded"></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to See These Features in Action?
              </h2>
              <p className="text-xl text-muted-foreground">
                Schedule a personalized demo to see how RiditStack can transform your procurement process.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}