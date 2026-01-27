import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const proofPoints = [
  "1000+ customers",
  "$40B spend managed", 
  "80+ countries",
  "850+ ratings across platforms"
]

export function Hero() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-primary-foreground via-primary-foreground to-muted/20 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-secondary/5 to-accent/5"></div>
      <div className="relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* Centered Content */}
          <div className="text-center space-y-12">
            {/* Main Content */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Procurement made smarter with decision-driven solutions
                {/* <span className="text-primary"> Total purchase control.</span> */}
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Simplify and optimize your procurement process with AI power and Empowering teams with visibility and control to streamline operations and scale seamlessly.
              </p>
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <Button size="lg" className="text-lg px-12 py-4 rounded-full">
                Book a Demo
              </Button>
            </div>

            {/* Dashboard Image */}
            <div className="mt-16">
              <div className="relative mx-auto max-w-5xl">
                <Image
                    src={"/dashboard.png"}
                    alt="Dashboard Image"
                    width={1536}
                    height={981}
                    className="object-contain rounded-[20px] border-8 border-primary/12 shadow-[0_4px_108px_0_rgba(16,20,45,0.3)]"
                  />
              </div>
            </div>

            {/* Proof Points */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
              {proofPoints.map((point, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                  <span className="text-sm font-medium text-center">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}