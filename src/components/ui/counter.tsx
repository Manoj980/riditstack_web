"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type CounterProps = {
  /** Target number to count up to. */
  value: number
  /** Text rendered before the number (e.g. "$"). */
  prefix?: string
  /** Text rendered after the number (e.g. "+", "%", "/5", "B+"). */
  suffix?: string
  /** Decimal places to show (default 0). */
  decimals?: number
  /** Group thousands with commas (default true when decimals === 0). */
  group?: boolean
  /** Count duration in ms (default 1600). */
  duration?: number
  className?: string
}

function format(n: number, decimals: number, group: boolean) {
  const fixed = n.toFixed(decimals)
  if (!group) return fixed
  const [int, dec] = fixed.split(".")
  const grouped = int.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
  return dec ? `${grouped}.${dec}` : grouped
}

/**
 * Scroll-triggered count-up. Uses one IntersectionObserver, animates on a
 * single rAF loop with an ease-out curve, runs once, and honors
 * prefers-reduced-motion by jumping straight to the final value. No deps.
 */
export function Counter({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  group,
  duration = 1600,
  className,
}: CounterProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null)
  const [display, setDisplay] = React.useState(0)
  const grouped = group ?? decimals === 0

  React.useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setDisplay(value)
      return
    }

    let raf = 0
    let start = 0
    const run = (ts: number) => {
      if (!start) start = ts
      const t = Math.min((ts - start) / duration, 1)
      // easeOutExpo - fast then settle, feels premium
      const eased = t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
      setDisplay(value * eased)
      if (t < 1) raf = requestAnimationFrame(run)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          raf = requestAnimationFrame(run)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(node)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value, duration])

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {format(display, decimals, grouped)}
      {suffix}
    </span>
  )
}
