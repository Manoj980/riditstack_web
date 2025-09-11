import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

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
                <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                  {/* Dashboard Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-sm font-medium text-gray-600">RiditStack Dashboard</span>
                      </div>
                      <div className="flex space-x-2">
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                        <div className="w-6 h-6 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Content */}
                  <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50">
                    {/* Top Stats */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-primary">$2.4M</div>
                        <div className="text-sm text-gray-600">Total Spend</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-green-600">1,247</div>
                        <div className="text-sm text-gray-600">Orders</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-blue-600">94%</div>
                        <div className="text-sm text-gray-600">On Time</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 shadow-sm">
                        <div className="text-2xl font-bold text-purple-600">156</div>
                        <div className="text-sm text-gray-600">Suppliers</div>
                      </div>
                    </div>

                    {/* Main Dashboard Content */}
                    <div className="grid grid-cols-3 gap-6">
                      <div className="col-span-2 bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-center mb-4">
                          <h3 className="font-semibold text-gray-900">Spending Trends</h3>
                          <div className="flex space-x-2">
                            <div className="w-3 h-3 bg-primary rounded-full"></div>
                            <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                          </div>
                        </div>
                        {/* Chart Placeholder */}
                        <div className="h-48 bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg flex items-end justify-around p-4">
                          <div className="bg-primary w-8 h-20 rounded-t"></div>
                          <div className="bg-primary/80 w-8 h-32 rounded-t"></div>
                          <div className="bg-primary/60 w-8 h-24 rounded-t"></div>
                          <div className="bg-primary/90 w-8 h-40 rounded-t"></div>
                          <div className="bg-primary w-8 h-28 rounded-t"></div>
                          <div className="bg-primary/70 w-8 h-36 rounded-t"></div>
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
                        <div className="space-y-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">Order #12847 approved</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">New supplier added</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">Invoice pending review</div>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div className="text-sm text-gray-600">Budget updated</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
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