import { Layout } from "@/components/layout/layout"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { 
  Users, 
  Target, 
  Award, 
  Globe, 
  TrendingUp,
  Shield,
  Heart,
  ArrowRight
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About - RiditStack Procurement Platform",
  description: "Learn about RiditStack's mission to revolutionize procurement automation and help businesses optimize their purchasing processes.",
}

const stats = [
  { number: "1000+", label: "Customers Worldwide" },
  { number: "$40B", label: "Spend Managed" },
  { number: "80+", label: "Countries" },
  { number: "850+", label: "Five-Star Reviews" }
]

const values = [
  {
    icon: Heart,
    title: "Customer First",
    description: "Every decision we make starts with our customers. We build software that solves real problems and delivers measurable value."
  },
  {
    icon: Shield,
    title: "Trust & Security",
    description: "We maintain the highest standards of security and compliance to protect our customers' sensitive procurement data."
  },
  {
    icon: TrendingUp,
    title: "Continuous Innovation",
    description: "We&apos;re constantly evolving our platform with cutting-edge technology like AI and machine learning to stay ahead."
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "We&apos;re committed to helping organizations worldwide optimize their procurement processes and reduce costs."
  }
]

const team = [
  {
    name: "Sarah Johnson",
    role: "CEO & Co-Founder",
    description: "Former procurement executive with 15+ years experience at Fortune 500 companies."
  },
  {
    name: "Michael Chen", 
    role: "CTO & Co-Founder",
    description: "Technology leader specializing in AI and enterprise software architecture."
  },
  {
    name: "Emily Rodriguez",
    role: "VP of Product",
    description: "Product strategist with deep expertise in procurement workflows and user experience."
  },
  {
    name: "David Kim",
    role: "VP of Engineering", 
    description: "Engineering leader focused on building scalable, secure enterprise platforms."
  }
]

const milestones = [
  { year: "2018", event: "Company founded with vision to automate procurement" },
  { year: "2019", event: "First enterprise customers and $2M seed funding" },
  { year: "2020", event: "Launched AI-powered invoice processing capabilities" },
  { year: "2021", event: "Reached 100+ customers and $10M Series A" },
  { year: "2022", event: "International expansion and B Corp certification" },
  { year: "2023", event: "1000+ customers milestone and $25M Series B" },
  { year: "2024", event: "Advanced AI features and global market leadership" }
]

export default function AboutPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Revolutionizing Procurement
                <span className="text-primary"> for Modern Business</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                At RiditStack, we&apos;re on a mission to help organizations worldwide 
                transform their procurement processes through intelligent automation 
                and data-driven insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="space-y-2">
                <div className="text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Target className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Mission</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To democratize enterprise-grade procurement automation, making it 
                  accessible to organizations of all sizes. We believe every business 
                  deserves the tools to optimize their purchasing processes, reduce 
                  costs, and drive growth.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-primary" />
                  <h2 className="text-3xl font-bold">Our Vision</h2>
                </div>
                <p className="text-lg text-muted-foreground">
                  To be the global leader in procurement automation, powered by AI 
                  and machine learning. We envision a world where procurement processes 
                  are intelligent, transparent, and effortlessly efficient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core values guide everything we do, from product development 
              to customer relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our experienced leadership team combines deep procurement expertise 
              with cutting-edge technology innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="h-20 w-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <Users className="h-10 w-10 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium text-sm">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground">
              From startup to industry leader, here are the key milestones in our growth.
            </p>
          </div>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm">
                  {milestone.year.slice(-2)}
                </div>
                <div className="flex-grow">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="font-bold text-primary">{milestone.year}</span>
                  </div>
                  <p className="text-muted-foreground">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Join Our Mission
              </h2>
              <p className="text-xl text-muted-foreground">
                Be part of the procurement revolution. Whether you&apos;re looking to 
                transform your processes or join our team, we&apos;d love to hear from you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                View Careers
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}