"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

type TiltProps = {
  children: React.ReactNode
  className?: string
  /** Max rotation in degrees (default 6) */
  max?: number
}

/**
 * Subtle pointer-driven 3D tilt used on the hero product shot.
 * Springs back to rest on leave, disables itself for touch and for
 * users who prefer reduced motion. Zero dependencies.
 */
export function Tilt({ children, className, max = 6 }: TiltProps) {
  const ref = React.useRef<HTMLDivElement | null>(null)
  const frame = React.useRef<number>(0)
  const [enabled, setEnabled] = React.useState(false)

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    setEnabled(fine && !reduce)
  }, [])

  const onMove = (e: React.MouseEvent) => {
    if (!enabled) return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      node.style.transform = `perspective(1400px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg) scale(1.01)`
      node.style.setProperty("--mx", `${(px * 100 + 50).toFixed(1)}%`)
      node.style.setProperty("--my", `${(py * 100 + 50).toFixed(1)}%`)
    })
  }

  const onLeave = () => {
    const node = ref.current
    if (!node) return
    cancelAnimationFrame(frame.current)
    node.style.transform =
      "perspective(1400px) rotateX(0deg) rotateY(0deg) scale(1)"
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ transformStyle: "preserve-3d", transition: "transform 0.5s cubic-bezier(0.22,1,0.36,1)" }}
      className={cn(className)}
    >
      {children}
    </div>
  )
}
