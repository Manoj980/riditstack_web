"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type RevealProps = {
  children: React.ReactNode
  className?: string
  /** Stagger delay in ms */
  delay?: number
  /** Reveal variant — "up" (default) or "scale" */
  variant?: "up" | "scale"
  /** Render as a different element */
  as?: React.ElementType
  /** Reveal only once (default true) */
  once?: boolean
}

/**
 * Lightweight, dependency-free scroll-reveal.
 * Uses a single shared IntersectionObserver, respects prefers-reduced-motion
 * (handled in globals.css), and keeps the main bundle lean — no Framer Motion
 * required for these entrance choreographies.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  variant = "up",
  as,
  once = true,
}: RevealProps) {
  const Comp = (as ?? "div") as React.ElementType
  const ref = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            if (once) observer.unobserve(entry.target)
          } else if (!once) {
            entry.target.classList.remove("is-visible")
          }
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [once])

  return (
    <Comp
      ref={ref}
      data-reveal={variant === "scale" ? "scale" : ""}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={cn(className)}
    >
      {children}
    </Comp>
  )
}
