import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Target, TrendingUp, Rocket } from "lucide-react"

const timelineSteps = [
  {
    icon: Clock,
    timeframe: "2-8 weeks",
    title: "Initial Go-Live",
    description: "Quick deployment with basic procurement workflows and user onboarding to get you started immediately."
  },
  {
    icon: Target,
    timeframe: "1-4 months",
    title: "Operational Excellence",
    description: "Full feature adoption with customized workflows, integrations, and advanced automation capabilities."
  },
  {
    icon: TrendingUp,
    timeframe: "4-12 months",
    title: "ROI Achievement",
    description: "Measurable cost savings, process efficiencies, and improved compliance through optimized procurement practices."
  },
  {
    icon: Rocket,
    timeframe: "12+ months",
    title: "Business Growth",
    description: "Strategic procurement insights driving business decisions and continuous process improvement initiatives."
  }
]

export function Timeline() {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Your Success Timeline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From implementation to ROI, see how RiditStack delivers value at every stage 
            of your procurement transformation journey.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {timelineSteps.map((step, index) => (
            <Card key={index} className="relative border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 bg-background group">
              <CardHeader className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center text-white group-hover:bg-primary/90 transition-colors duration-300">
                  <step.icon className="h-6 w-6 group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-semibold text-primary">
                    {step.timeframe}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
              
              {/* Connection line for desktop */}
              {index < timelineSteps.length - 1 && (
                <div className="hidden lg:block absolute top-14 -right-3 w-6 h-0.5 bg-primary/20"></div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}