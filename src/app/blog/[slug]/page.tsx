import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { Layout } from "@/components/layout/layout"
import { Reveal } from "@/components/ui/reveal"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft, Newspaper } from "lucide-react"
import { posts, getPost } from "@/content/blog"
import { SITE_TITLE } from "@/lib/seo"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}

  return {
    title: SITE_TITLE,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <Layout>
      {/* Article header */}
      <section className="relative overflow-hidden px-4 pt-12 pb-10 sm:pt-16">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-hex mask-fade-b opacity-[0.4]" />
          <div className="absolute -top-44 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full aurora animate-aurora opacity-30" />
        </div>
        <div className="container mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to blog
            </Link>
          </Reveal>

          <Reveal delay={60} className="mt-6">
            <span className="inline-flex w-fit items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {post.category}
            </span>
          </Reveal>

          <Reveal
            delay={100}
            as="h1"
            className="mt-5 text-balance text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl"
          >
            {post.title}
          </Reveal>

          <Reveal delay={160} className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </Reveal>

          {post.authorTitle ? (
            <Reveal delay={200} className="mt-2 text-sm text-muted-foreground/80">
              {post.authorTitle}
            </Reveal>
          ) : null}
        </div>
      </section>

      {/* Article body */}
      <section className="px-4 pb-24">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-6">
            {post.body.map((block, i) => {
              if (block.kind === "h2") {
                return (
                  <Reveal key={i}>
                    <h2 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                      {block.text}
                    </h2>
                  </Reveal>
                )
              }
              if (block.kind === "ul") {
                return (
                  <Reveal key={i}>
                    <ul className="ml-1 space-y-2.5">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 text-muted-foreground">
                          <span aria-hidden className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )
              }
              return (
                <Reveal key={i}>
                  <p className="text-lg leading-relaxed text-muted-foreground">{block.text}</p>
                </Reveal>
              )
            })}
          </div>

          {/* Footer CTA */}
          <div className="mt-14 rounded-2xl border border-border bg-muted/40 p-8 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Newspaper className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">
              See how ProcLeo can transform your procurement
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-muted-foreground">
              Bring AI to every step of buying, from intake to payment, with compliance built for India.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button className="group btn-shine" asChild>
                <Link href="/contact?type=demo">Book a demo</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/blog">Read more articles</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
