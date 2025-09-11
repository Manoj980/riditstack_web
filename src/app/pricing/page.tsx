import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Star } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - RiditStack Procurement Platform",
  description: "Simple, transparent pricing for procurement automation. Choose the plan that fits your business needs with no hidden fees.",
}

const plans = [
  {
    name: "Starter",
    price: "$49",
    period: "per user/month",
    description: "Perfect for small businesses getting started with procurement automation",
    features: [
      "Basic intake management",
      "Purchase order creation",
      "Supplier database",
      "Basic reporting",
      "Email support",
      "Up to 100 POs/month"
    ],
    popular: false
  },
  {
    name: "Professional",
    price: "$99",
    period: "per user/month",
    description: "Ideal for growing companies that need advanced automation",
    features: [
      "Everything in Starter",
      "AI-powered AP automation",
      "Advanced workflow builder",
      "Spend analytics",
      "Budget management",
      "API integrations",
      "Priority support",
      "Up to 500 POs/month"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "contact sales",
    description: "For large organizations requiring full customization and control",
    features: [
      "Everything in Professional",
      "Custom integrations",
      "Advanced compliance tools",
      "Multi-entity support",
      "Custom reporting",
      "Dedicated success manager",
      "24/7 phone support",
      "Unlimited POs"
    ],
    popular: false
  }
]

const features = [
  "30-day free trial",
  "No setup fees", 
  "No hidden costs",
  "Cancel anytime",
  "SOC 2 Type II certified",
  "Enterprise-grade security"
]

const faqs = [
  {
    question: "How does the free trial work?",
    answer: "Start with a 30-day free trial that includes full access to all features in your chosen plan. No credit card required to begin."
  },
  {
    question: "Can I change plans anytime?",
    answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at your next billing cycle."
  },
  {
    question: "What integrations are included?",
    answer: "We offer native integrations with popular ERP systems, accounting software, and business tools. Custom integrations are available for Enterprise plans."
  },
  {
    question: "Is there a setup fee?",
    answer: "No setup fees for any plan. We provide free onboarding and training to help you get started quickly."
  },
  {
    question: "What support is included?",
    answer: "All plans include comprehensive support. Starter includes email support, Professional adds priority support, and Enterprise includes 24/7 phone support with a dedicated success manager."
  }
]

export default function PricingPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Simple, Transparent
                <span className="text-primary"> Pricing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose the plan that fits your business needs. No hidden fees, 
                no surprises. Start your 30-day free trial today.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-0 shadow-lg ${
                plan.popular 
                  ? 'ring-2 ring-primary shadow-xl scale-105' 
                  : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-white px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center space-y-4">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.price !== "Custom" && (
                        <span className="text-muted-foreground ml-1">/{plan.period}</span>
                      )}
                    </div>
                    {plan.price === "Custom" && (
                      <span className="text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className="w-full" 
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                  >
                    {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What&apos;s Included</h2>
            <p className="text-muted-foreground">
              Every plan includes these essential features at no extra cost
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Get answers to common questions about our pricing and plans
            </p>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-muted-foreground">
                Join 1000+ companies that trust RiditStack with their procurement operations.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 30-day free trial • Setup in minutes
            </p>
          </div>
        </div>
      </section>
    </Layout>
  )
}