import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  FileText, 
  ShoppingCart, 
  Bot, 
  Users, 
  DollarSign, 
  TrendingUp, 
  BarChart3,
  Zap 
} from "lucide-react"

const features = [
  {
    icon: FileText,
    title: "Intake Management",
    description: "Streamline purchase requests with customizable workflows and approval processes that fit your organization's structure."
  },
  {
    icon: ShoppingCart,
    title: "Purchasing",
    description: "Create, track, and manage purchase orders with automated workflows and real-time visibility across all departments."
  },
  {
    icon: Bot,
    title: "AI-Powered AP Automation",
    description: "Leverage artificial intelligence to automate invoice processing, matching, and approval workflows for maximum efficiency."
  },
  {
    icon: Users,
    title: "Supplier Management",
    description: "Maintain a centralized supplier database with performance tracking, contract management, and relationship optimization."
  },
  {
    icon: DollarSign,
    title: "Spend Management",
    description: "Get complete visibility into organizational spending with real-time analytics and budget tracking capabilities."
  },
  {
    icon: TrendingUp,
    title: "Budgeting",
    description: "Set, track, and control budgets across projects and departments with automated alerts and approval workflows."
  },
  {
    icon: BarChart3,
    title: "Reporting",
    description: "Generate comprehensive reports with actionable insights to optimize procurement processes and reduce costs."
  },
  {
    icon: Zap,
    title: "Integration Ready",
    description: "Seamlessly connect with your existing ERP, accounting, and business systems through our robust API platform."
  }
]

export function Features() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Comprehensive Procurement Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to centralize, automate, and optimize your procurement 
            processes in one powerful platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 group bg-background">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-all duration-300">
                  <feature.icon className="h-6 w-6 text-primary group-hover:scale-105 transition-transform duration-300" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}