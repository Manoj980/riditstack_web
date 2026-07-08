"use client"

import * as React from "react"
import { Tilt } from "@/components/ui/tilt"
import { DashboardShowcase } from "@/components/sections/dashboard-showcase"
import { Sparkles, Check, TrendingUp, ShieldCheck } from "lucide-react"

/**
 * Layered hero "cockpit": the ProcLeo dashboard on a 3D tilt, ringed by
 * overlapping glass widgets that drift on a float loop and shift with the
 * pointer (mouse parallax). All motion is guarded for touch + reduced motion
 * - the parent only publishes --nx/--ny when a fine pointer is present, and
 * `.parallax`/`.animate-float*` are neutralized under prefers-reduced-motion.
 * Floating widgets are desktop-only (lg+) so mobile stays clean and CLS-free.
 */
export function HeroShowcase() {
  const sceneRef = React.useRef<HTMLDivElement | null>(null)
  const enabled = React.useRef(false)
  const frame = React.useRef(0)

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    enabled.current = fine && !reduce
  }, [])

  const onMove = (e: React.MouseEvent) => {
    if (!enabled.current) return
    const node = sceneRef.current
    if (!node) return
    const r = node.getBoundingClientRect()
    const nx = (e.clientX - r.left) / r.width - 0.5
    const ny = (e.clientY - r.top) / r.height - 0.5
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      node.style.setProperty("--nx", nx.toFixed(3))
      node.style.setProperty("--ny", ny.toFixed(3))
    })
  }

  const onLeave = () => {
    const node = sceneRef.current
    if (!node) return
    cancelAnimationFrame(frame.current)
    node.style.setProperty("--nx", "0")
    node.style.setProperty("--ny", "0")
  }

  return (
    <div
      ref={sceneRef}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="relative lg:pl-6"
      style={{ ["--nx" as string]: "0", ["--ny" as string]: "0" }}
    >
      {/* Conic glow bloom behind the product shot */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-6 -z-10 rounded-[2rem] conic-glow animate-spin-slow"
      />

      {/* Base panel - tilts in 3D under the pointer */}
      <div className="parallax" style={{ ["--depth" as string]: "8" }}>
        <Tilt max={6}>
          <DashboardShowcase />
        </Tilt>
      </div>

      {/* ---- Floating overlay widgets (desktop only) ---- */}

      {/* Top-right: AI invoice-match notification */}
      <div
        aria-hidden
        className="parallax animate-float absolute right-0 -top-5 hidden w-60 lg:block"
        style={{ ["--depth" as string]: "42" }}
      >
        <div className="glass-card rounded-2xl p-3.5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[oklch(0.72_0.15_150)]/15 text-[oklch(0.5_0.13_150)]">
              <Check className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <div className="text-[13px] font-semibold">Invoice #INV-20418</div>
              <div className="truncate text-[11px] text-muted-foreground">3-way matched to PO-4471</div>
            </div>
          </div>
          <div className="mt-2.5 flex items-center gap-1.5 border-t border-border/60 pt-2.5 text-[11px] font-medium text-primary">
            <Sparkles className="h-3 w-3" /> Approved by AI in 1.4s
          </div>
        </div>
      </div>

      {/* Bottom-left: AI Copilot assistant */}
      <div
        aria-hidden
        className="parallax animate-float-slow absolute -bottom-8 -left-6 hidden w-64 lg:block"
        style={{ ["--depth" as string]: "30", animationDelay: "-3s" }}
      >
        <div className="glass-card rounded-2xl p-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-[var(--brand-2)] text-primary-foreground shadow-sm">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            <span className="text-[13px] font-semibold">AI Copilot</span>
            <span className="ml-auto inline-flex items-center gap-1 text-[10px] font-medium text-[oklch(0.5_0.13_150)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.72_0.15_150)]" /> live
            </span>
          </div>
          <p className="mt-2 rounded-lg bg-muted/50 px-2.5 py-2 text-[11px] leading-relaxed text-foreground/80">
            Flagged <span className="font-semibold text-foreground">3 duplicate invoices</span> worth
            <span className="font-semibold text-foreground"> $4,210</span> this week.
          </p>
        </div>
      </div>

      {/* Right-lower: savings ring KPI */}
      <div
        aria-hidden
        className="parallax animate-float absolute -right-2 bottom-8 hidden w-44 lg:block"
        style={{ ["--depth" as string]: "52", animationDelay: "-1.5s" }}
      >
        <div className="glass-card rounded-2xl p-3.5">
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 44 44" className="h-12 w-12 -rotate-90">
              <circle cx="22" cy="22" r="18" fill="none" strokeWidth="4" className="ring-track" />
              <circle
                cx="22"
                cy="22"
                r="18"
                fill="none"
                strokeWidth="4"
                strokeLinecap="round"
                stroke="var(--primary)"
                strokeDasharray="113"
                strokeDashoffset="28"
              />
            </svg>
            <div>
              <div className="text-lg font-semibold tracking-tight">$1.27M</div>
              <div className="text-[11px] text-muted-foreground">saved YTD</div>
            </div>
          </div>
          <div className="mt-2 inline-flex items-center gap-1 text-[11px] font-medium text-[oklch(0.5_0.13_150)]">
            <TrendingUp className="h-3 w-3" /> +24.9% vs last year
          </div>
        </div>
      </div>

      {/* Top-left: supplier risk pill */}
      <div
        aria-hidden
        className="parallax animate-float-slow absolute -left-4 top-16 hidden lg:block"
        style={{ ["--depth" as string]: "24", animationDelay: "-5s" }}
      >
        <div className="glass-card flex items-center gap-2 rounded-full px-3 py-1.5">
          <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.5_0.13_150)]" />
          <span className="text-[11px] font-semibold">Supplier risk: Low</span>
        </div>
      </div>
    </div>
  )
}
