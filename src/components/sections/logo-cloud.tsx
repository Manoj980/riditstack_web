import { Reveal } from "@/components/ui/reveal"

const rowA = ["Northwind", "Vertex", "Lumina", "Apex Foods", "Quanta"]
const rowB = ["Meridian", "Cobalt", "Stratus", "Halcyon", "Everline"]

function MarqueeRow({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  return (
    <div className="mask-fade-edges overflow-hidden">
      <div
        className={`flex w-max items-center gap-14 animate-marquee ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {[...items, ...items].map((name, i) => (
          <span
            key={`${name}-${i}`}
            aria-hidden={i >= items.length}
            className="whitespace-nowrap text-xl font-semibold tracking-tight text-muted-foreground/55 transition-colors duration-300 hover:text-foreground"
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  )
}

export function LogoCloud() {
  return (
    <section className="relative border-y border-border bg-muted/30 px-4 py-12">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-noise opacity-[0.02] mix-blend-overlay" />
      <div className="container mx-auto max-w-7xl">
        <Reveal as="p" className="text-center text-sm font-medium text-muted-foreground">
          Trusted by procurement teams at fast-growing companies worldwide
        </Reveal>

        <Reveal delay={80} className="mt-8 flex flex-col gap-5">
          <MarqueeRow items={rowA} />
          <MarqueeRow items={rowB} reverse />
        </Reveal>
      </div>
    </section>
  )
}
