import Link from "next/link"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { PageHero } from "@/components/sections/page-hero"
import { Reveal } from "@/components/ui/reveal"
import { SectionBadge } from "@/components/ui/section-badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User, Newspaper, Mail, BookOpen } from "lucide-react"

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
  "Case Studies",
]

const featuredPost = {
  title: "The Future of AI in Procurement: 5 Trends to Watch in 2024",
  excerpt: "Artificial Intelligence is transforming procurement operations worldwide. Here are the key trends that will shape the industry this year and how forward-thinking organizations are already adapting.",
  author: "Sarah Johnson",
  date: "March 15, 2024",
  readTime: "8 min read",
  category: "AI & Automation",
  featured: true,
}

const blogPosts = [
  {
    title: "How to Reduce Procurement Costs by 30% in 6 Months",
    excerpt: "A comprehensive guide to identifying cost-saving opportunities in your procurement process through automation and strategic sourcing.",
    author: "Michael Chen",
    date: "March 12, 2024",
    readTime: "6 min read",
    category: "Procurement Best Practices",
  },
  {
    title: "Case Study: Global Manufacturing Company Saves $2M Annually",
    excerpt: "Learn how a Fortune 500 manufacturing company reduced costs and improved compliance with RiditStack's procurement automation platform.",
    author: "Emily Rodriguez",
    date: "March 10, 2024",
    readTime: "5 min read",
    category: "Case Studies",
  },
  {
    title: "The Complete Guide to Supplier Risk Management",
    excerpt: "Best practices for identifying, assessing, and mitigating supplier risks to ensure business continuity and compliance.",
    author: "David Kim",
    date: "March 8, 2024",
    readTime: "10 min read",
    category: "Industry Insights",
  },
  {
    title: "New Feature: Advanced Spend Analytics Dashboard",
    excerpt: "Introducing powerful new analytics capabilities that provide deeper insights into your organization's spending patterns.",
    author: "Product Team",
    date: "March 5, 2024",
    readTime: "4 min read",
    category: "Product Updates",
  },
  {
    title: "Building a Business Case for Procurement Automation",
    excerpt: "How to calculate ROI and present a compelling case for procurement automation to your executive team.",
    author: "Sarah Johnson",
    date: "March 1, 2024",
    readTime: "7 min read",
    category: "Procurement Best Practices",
  },
  {
    title: "Industry Report: State of Procurement Technology 2024",
    excerpt: "Our annual report on procurement technology adoption trends, challenges, and opportunities across industries.",
    author: "Research Team",
    date: "February 28, 2024",
    readTime: "12 min read",
    category: "Industry Insights",
  },
]

export default function BlogPage() {
  return (
    <Layout>
      <PageHero
        eyebrow="Insights"
        eyebrowIcon={BookOpen}
        title="Procurement"
        highlight="insights."
        subtitle="Stay ahead of industry trends with expert insights, best practices, and the latest developments in procurement automation."
      />

      {/* Categories */}
      <section className="border-y border-border bg-muted/30 px-4 py-12">
        <div className="container mx-auto max-w-7xl">
          <Reveal className="flex flex-wrap justify-center gap-3">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Featured Post */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <SectionBadge tone="primary" icon={Newspaper}>Featured post</SectionBadge>
          </Reveal>

          <Reveal delay={80} className="mt-8">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="grid gap-0 lg:grid-cols-2">
                {/* Featured Image */}
                <div className="relative flex aspect-video items-center justify-center bg-gradient-to-br from-primary/10 via-muted to-secondary/10 lg:aspect-auto lg:min-h-[320px]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Newspaper className="h-7 w-7" />
                  </div>
                </div>

                <div className="flex flex-col gap-6 p-8 sm:p-10">
                  <div className="space-y-4">
                    <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      {featuredPost.category}
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight tracking-tight">{featuredPost.title}</h3>
                    <p className="leading-relaxed text-muted-foreground">{featuredPost.excerpt}</p>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>

                  <div>
                    <Button className="group" asChild>
                      <Link href="/blog">
                        Read full article
                        <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="border-t border-border bg-muted/40 px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-7xl">
          <Reveal>
            <SectionBadge tone="primary">Latest posts</SectionBadge>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Reveal key={post.title} delay={(index % 3) * 80}>
                <div className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl">
                  <div className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {post.category}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold leading-tight tracking-tight">{post.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="mt-2 text-sm text-muted-foreground">{post.date}</div>

                  <Link
                    href="/blog"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    Read more
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="px-4 py-20 sm:py-24 lg:py-32">
        <div className="container mx-auto max-w-4xl">
          <Reveal variant="scale">
            <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-sm sm:p-12">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Mail className="h-5 w-5" />
              </div>
              <h2 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
                Stay <span className="text-gradient-animated">updated</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Get the latest procurement insights, industry trends, and product updates
                delivered to your inbox every week.
              </p>

              <div className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 rounded-lg border border-border bg-background px-4 py-2 text-sm shadow-sm outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/20"
                />
                <Button className="group">Subscribe</Button>
              </div>

              <p className="mt-4 text-sm text-muted-foreground">
                No spam, unsubscribe anytime. We respect your privacy.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}
