import { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { HeroSection } from "@/components/sections/hero-section"
import { FeatureSection } from "@/components/sections/feature-section"
import { TestimonialSection } from "@/components/sections/testimonial-section"
import { BottomCTA } from "@/components/sections/bottom-cta"
import { Card } from "@/components/ui/card"
import { 
  Factory, 
  TrendingUp, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  Cog,
  Clock,
  DollarSign,
  CheckCircle2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Manufacturing Procurement Software | RiditStack",
  description: "Streamline your manufacturing procurement with AI-powered automation, supplier management, and cost optimization tools designed for production environments.",
}

const manufacturingFeatures = [
  {
    icon: <Factory className="h-6 w-6 text-primary" />,
    title: "Production-Ready Procurement",
    description: "Seamlessly integrate with manufacturing workflows and production schedules for just-in-time procurement."
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-accent" />,
    title: "Demand Forecasting",
    description: "AI-powered demand prediction helps optimize inventory levels and reduce stockouts."
  },
  {
    icon: <Shield className="h-6 w-6 text-secondary" />,
    title: "Quality Assurance",
    description: "Built-in quality controls and supplier certification tracking ensure consistent material standards."
  }
]

const keyCapabilities = [
  {
    icon: <Zap className="h-6 w-6 text-accentWarm" />,
    title: "Real-Time Inventory Sync",
    description: "Connect directly with your ERP and manufacturing systems for real-time inventory visibility and automated reorder points."
  },
  {
    icon: <Users className="h-6 w-6 text-primary" />,
    title: "Supplier Collaboration",
    description: "Streamlined communication with suppliers, including delivery schedules, quality requirements, and performance tracking."
  },
  {
    icon: <BarChart3 className="h-6 w-6 text-accent" />,
    title: "Cost Analytics",
    description: "Advanced cost analysis and spend optimization specifically designed for manufacturing materials and components."
  }
]

const testimonials = [
  {
    id: "1",
    quote: "RiditStack transformed our procurement process. We reduced material costs by 23% and eliminated stockouts completely.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechMfg Industries",
    rating: 5,
    metrics: [
      { label: "Cost Reduction", value: "23%" },
      { label: "Efficiency Gain", value: "45%" }
    ]
  },
  {
    id: "2",
    quote: "The integration with our production planning system was seamless. Our procurement team can now focus on strategic sourcing instead of manual processes.",
    author: "Michael Rodriguez",
    role: "Procurement Director",
    company: "Global Manufacturing Co.",
    rating: 5,
    metrics: [
      { label: "Time Saved", value: "8hrs/day" },
      { label: "Process Speed", value: "3x faster" }
    ]
  },
  {
    id: "3",
    quote: "The supplier quality tracking feature helped us maintain consistent material standards across all our production lines.",
    author: "Emma Thompson",
    role: "Quality Manager",
    company: "Precision Parts Ltd.",
    rating: 5,
    metrics: [
      { label: "Quality Score", value: "99.2%" },
      { label: "Defect Reduction", value: "87%" }
    ]
  }
]

export default function ManufacturingProcurementPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <HeroSection
        badge="Manufacturing Solutions"
        headline="Procurement Software Built for Manufacturing Excellence"
        subtext="Optimize your manufacturing procurement with AI-powered automation, real-time inventory sync, and supplier collaboration tools designed for production environments."
        ctaText="Request Demo"
        ctaHref="/demo"
        secondaryCtaText="View Pricing"
        secondaryCtaHref="/pricing"
        features={[
          "Real-time inventory synchronization",
          "AI-powered demand forecasting",
          "Supplier quality management",
          "Production schedule integration"
        ]}
      />

      {/* Key Features Section */}
      <FeatureSection
        badge="Core Features"
        headline="Everything you need for manufacturing procurement"
        description="Our comprehensive platform is specifically designed to handle the unique challenges of manufacturing procurement, from raw materials to finished goods."
        features={manufacturingFeatures}
        ctaText="Explore All Features"
        ctaHref="/features"
      />

      {/* Capabilities Grid */}
      <section className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary rounded-full text-sm font-medium border border-primary/20 dark:border-primary/30 mb-6">
              <Cog className="h-4 w-4" />
              Advanced Capabilities
            </div>
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Engineered for Manufacturing
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Purpose-built features that integrate seamlessly with your manufacturing operations and drive measurable results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {keyCapabilities.map((capability, index) => (
              <Card key={index} className="p-8 bg-white dark:bg-gray-900 border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center">
                    {capability.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {capability.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <FeatureSection
        badge="ROI & Benefits"
        headline="Measurable results for manufacturing teams"
        description="Our manufacturing clients typically see significant improvements in cost, efficiency, and quality within the first 90 days of implementation."
        imagePosition="left"
        features={[
          {
            icon: <DollarSign className="h-6 w-6 text-accent" />,
            title: "Average 25% Cost Reduction",
            description: "Optimize spend through better supplier negotiations, bulk purchasing, and automated approval workflows."
          },
          {
            icon: <Clock className="h-6 w-6 text-primary" />,
            title: "50% Faster Procurement Cycles",
            description: "Streamlined processes and automated workflows dramatically reduce time from requisition to delivery."
          },
          {
            icon: <CheckCircle2 className="h-6 w-6 text-secondary" />,
            title: "99%+ On-Time Delivery",
            description: "Improved supplier collaboration and demand forecasting ensure materials arrive when needed."
          }
        ]}
      />

      {/* Testimonials */}
      <TestimonialSection
        badge="Customer Success"
        headline="Trusted by Manufacturing Leaders"
        description="See how manufacturing companies like yours are transforming their procurement operations with RiditStack."
        testimonials={testimonials}
      />

      {/* Industry-Specific CTA */}
      <BottomCTA
        headline="Ready to Transform Your Manufacturing Procurement?"
        description="Join hundreds of manufacturing companies that have streamlined their procurement operations and reduced costs with RiditStack."
        primaryCtaText="Request Demo"
        primaryCtaHref="/demo"
        secondaryCtaText="Talk to Sales"
        secondaryCtaHref="/contact"
        features={[
          "Free implementation support",
          "30-day money-back guarantee",
          "Dedicated manufacturing specialist"
        ]}
      />
    </Layout>
  )
}