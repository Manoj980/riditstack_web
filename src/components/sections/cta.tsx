import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Award } from "lucide-react"

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10 relative overflow-hidden">
      {/* Mixpanel-inspired background pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/10 to-accent/5"></div>
      <div className="relative z-10">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-8">
          {/* Certifications */}
          <div className="flex items-center justify-center space-x-8 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">B Corp Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">IDC MarketScape Major Player</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">Spend Matters Recommended</span>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Ready to Transform Your 
              <span className="text-primary"> Procurement Process?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join 1000+ companies that trust RiditStack to manage their procurement 
              operations and drive measurable cost savings.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              No credit card required • 30-day free trial • Enterprise-grade security
            </p>
          </div>
        </div>
      </div>
      </div>
    </section>
  )
}