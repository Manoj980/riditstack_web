"use client"

import { useEffect, useRef } from "react"

import { publicEnv } from "@/lib/env"

// Minimal typing for the Turnstile global we use.
declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string
          callback: (token: string) => void
          "expired-callback"?: () => void
          "error-callback"?: () => void
          theme?: "light" | "dark" | "auto"
        },
      ) => string
      remove: (id: string) => void
      reset: (id?: string) => void
    }
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"

let scriptPromise: Promise<void> | null = null
function loadScript(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve()
  if (window.turnstile) return Promise.resolve()
  if (scriptPromise) return scriptPromise
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script")
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = () => resolve()
    s.onerror = () => reject(new Error("Failed to load Turnstile"))
    document.head.appendChild(s)
  })
  return scriptPromise
}

/**
 * Renders the Cloudflare Turnstile widget and reports the token upward.
 * Renders nothing when no site key is configured, so forms work without it.
 */
export function Turnstile({ onToken }: { onToken: (token: string) => void }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const siteKey = publicEnv.turnstileSiteKey

  useEffect(() => {
    if (!siteKey || !containerRef.current) return
    let cancelled = false
    const el = containerRef.current

    loadScript()
      .then(() => {
        if (cancelled || !window.turnstile || !el) return
        widgetId.current = window.turnstile.render(el, {
          sitekey: siteKey,
          theme: "auto",
          callback: (token) => onToken(token),
          "expired-callback": () => onToken(""),
          "error-callback": () => onToken(""),
        })
      })
      .catch(() => {
        /* network blocked — server still enforces if secret is set */
      })

    return () => {
      cancelled = true
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current)
        } catch {
          /* ignore */
        }
      }
    }
  }, [siteKey, onToken])

  if (!siteKey) return null
  return <div ref={containerRef} className="mt-2" />
}
