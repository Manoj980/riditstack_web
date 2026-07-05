import { Reveal } from "@/components/ui/reveal"

const companies = [
  "Northwind",
  "Vertex",
  "Lumina",
  "Apex Foods",
  "Quanta",
  "Meridian",
  "Cobalt",
  "Stratus",
]

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-muted/30 px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <Reveal as="p" className="text-center text-sm font-medium text-muted-foreground">
          Trusted by procurement teams at fast-growing companies worldwide
        </Reveal>

        <div className="mask-fade-edges mt-8 overflow-hidden">
          <div className="flex w-max animate-marquee items-center gap-16">
            {[...companies, ...companies].map((name, i) => (
              <span
                key={`${name}-${i}`}
                aria-hidden={i >= companies.length}
                className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/70 transition-colors hover:text-foreground"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
