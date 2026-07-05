import type { LucideIcon } from "lucide-react"

type Tone = "primary" | "accent"

/**
 * Small pill "eyebrow" used above section headings. Replaces plain uppercase
 * labels with a bordered, glowing chip for a more premium, modern-SaaS feel.
 */
export function SectionBadge({
  children,
  icon: Icon,
  tone = "primary",
}: {
  children: React.ReactNode
  icon?: LucideIcon
  tone?: Tone
}) {
  const toneClass =
    tone === "accent"
      ? "border-accent/25 bg-accent/10 text-accent"
      : "border-primary/25 bg-primary/10 text-primary"

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] shadow-sm backdrop-blur ${toneClass}`}
    >
      {Icon ? (
        <Icon className="h-3.5 w-3.5" />
      ) : (
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-current opacity-60" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      )}
      {children}
    </span>
  )
}
