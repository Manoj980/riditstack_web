import { Layout } from "@/components/layout/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ArrowRight,
  MessageSquare,
  Users,
  HelpCircle
} from "lucide-react"
import { ContactForm } from "@/components/contact-form"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact - RiditStack Procurement Platform",
  description: "Get in touch with RiditStack. Schedule a demo, ask questions, or learn how we can help optimize your procurement processes.",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Headquarters",
    details: ["123 Innovation Drive", "San Francisco, CA 94107", "United States"]
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["+1 (555) 123-4567", "Mon-Fri 9:00 AM - 6:00 PM PST"]
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@riditstack.com", "support@riditstack.com"]
  },
  {
    icon: Clock,
    title: "Support Hours",
    details: ["24/7 for Enterprise customers", "Mon-Fri 9:00 AM - 6:00 PM PST for others"]
  }
]

const contactReasons = [
  {
    icon: MessageSquare,
    title: "Schedule a Demo",
    description: "See RiditStack in action with a personalized demo"
  },
  {
    icon: Users,
    title: "Sales Inquiry",
    description: "Learn about pricing and find the right plan"
  },
  {
    icon: HelpCircle,
    title: "General Questions",
    description: "Get answers about features and capabilities"
  }
]

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Get in
                <span className="text-primary"> Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to transform your procurement processes? We&apos;re here to help. 
                Schedule a demo, ask questions, or learn how RiditStack can benefit your organization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Reasons */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How Can We Help?</h2>
            <p className="text-muted-foreground">
              Choose the option that best describes what you&apos;re looking for
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {contactReasons.map((reason, index) => (
              <Card key={index} className="border-0 shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <reason.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{reason.title}</h3>
                  <p className="text-muted-foreground text-sm">{reason.description}</p>
                  <Button variant="outline" className="w-full">
                    Select This Option
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Contact Information</h2>
                <p className="text-muted-foreground">
                  Prefer to reach out directly? Here are all the ways you can get in touch with us.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-semibold">{info.title}</h3>
                          {info.details.map((detail, detailIndex) => (
                            <p key={detailIndex} className="text-muted-foreground text-sm">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Actions */}
              <Card className="border-0 shadow-lg bg-gradient-to-br from-primary/5 to-secondary/5">
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-lg font-semibold">Need Help Right Away?</h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Schedule a 15-minute call
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Email our team directly
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <HelpCircle className="mr-2 h-4 w-4" />
                      Browse our help center
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">
                Still Have Questions?
              </h2>
              <p className="text-xl text-muted-foreground">
                Check out our comprehensive FAQ section or schedule a demo to see 
                RiditStack in action.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View FAQ
              </Button>
              <Button size="lg" className="text-lg px-8 py-3">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}