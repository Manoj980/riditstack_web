import { Layout } from "@/components/layout/layout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog - RiditStack Procurement Platform",
  description: "Latest insights, best practices, and industry trends in procurement automation and spend management.",
}

const categories = [
  "All Posts",
  "Procurement Best Practices", 
  "AI & Automation",
  "Industry Insights",
  "Product Updates",
  "Case Studies"
]

const featuredPost = {
  title: "The Future of AI in Procurement: 5 Trends to Watch in 2024",
  excerpt: "Artificial Intelligence is transforming procurement operations worldwide. Here are the key trends that will shape the industry this year and how forward-thinking organizations are already adapting.",
  author: "Sarah Johnson",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "AI & Automation",
  image: "/api/placeholder/600/300",
  featured: true
}

const blogPosts = [
  {
    title: "How to Reduce Procurement Costs by 30% in 6 Months",
    excerpt: "A comprehensive guide to identifying cost-saving opportunities in your procurement process through automation and strategic sourcing.",
    author: "Michael Chen",
    date: "March 12, 2024", 
    readTime: "6 min read",
    category: "Procurement Best Practices"
  },
  {
    title: "Case Study: Global Manufacturing Company Saves $2M Annually",
    excerpt: "Learn how a Fortune 500 manufacturing company reduced costs and improved compliance with RiditStack's procurement automation platform.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "5 min read", 
    category: "Case Studies"
  },
  {
    title: "The Complete Guide to Supplier Risk Management",
    excerpt: "Best practices for identifying, assessing, and mitigating supplier risks to ensure business continuity and compliance.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Industry Insights"
  },
  {
    title: "New Feature: Advanced Spend Analytics Dashboard",
    excerpt: "Introducing powerful new analytics capabilities that provide deeper insights into your organization's spending patterns.",
    author: "Product Team",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Product Updates"
  },
  {
    title: "Building a Business Case for Procurement Automation",
    excerpt: "How to calculate ROI and present a compelling case for procurement automation to your executive team.",
    author: "Sarah Johnson", 
    date: "March 1, 2024",
    readTime: "7 min read",
    category: "Procurement Best Practices"
  },
  {
    title: "Industry Report: State of Procurement Technology 2024",
    excerpt: "Our annual report on procurement technology adoption trends, challenges, and opportunities across industries.",
    author: "Research Team",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Industry Insights"
  }
]

export default function BlogPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Procurement
                <span className="text-primary"> Insights</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Stay ahead of industry trends with expert insights, best practices, 
                and the latest developments in procurement automation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 border-b">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Featured Post</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Featured Image Placeholder */}
              <div className="bg-gradient-to-br from-primary/20 to-secondary/20 min-h-[300px] flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="h-20 w-20 bg-primary/30 rounded-full mx-auto flex items-center justify-center">
                    <User className="h-10 w-10 text-primary" />
                  </div>
                  <p className="text-muted-foreground">Featured Article Image</p>
                </div>
              </div>
              
              <CardContent className="p-8 space-y-6">
                <div className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {featuredPost.category}
                  </div>
                  <h3 className="text-2xl font-bold leading-tight">{featuredPost.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{featuredPost.excerpt}</p>
                </div>
                
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <User className="h-4 w-4" />
                    <span>{featuredPost.author}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                
                <Button>
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-2">Latest Posts</h2>
            <div className="h-1 w-20 bg-primary"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border border-border/50 shadow-sm hover:shadow-lg hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 bg-background group">
                <CardHeader className="space-y-4">
                  <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full w-fit">
                    {post.category}
                  </div>
                  <CardTitle className="text-lg leading-tight">{post.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm text-muted-foreground">
                    {post.date}
                  </div>
                  
                  <Button variant="outline" className="w-full group-hover:border-primary/30 group-hover:text-primary">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-primary/5 to-secondary/5">
            <CardContent className="p-12 text-center space-y-6">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">Stay Updated</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Get the latest procurement insights, industry trends, and product updates 
                  delivered to your inbox every week.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-lg bg-background"
                />
                <Button>Subscribe</Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  )
}