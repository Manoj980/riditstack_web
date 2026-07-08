"use client"

/**
 * Client-side capture of marketing attribution. UTM params are read from the
 * URL and persisted to sessionStorage on first load, so they survive internal
 * navigation between landing and the form submission.
 */

export type Analytics = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referrer?: string
  page_url?: string
  browser?: string
}

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign"] as const
const STORAGE_KEY = "riditstack:utm"

/** Call once (e.g. on first client render) to persist UTM params from the URL. */
export function captureUtmFromUrl(): void {
  if (typeof window === "undefined") return
  const params = new URLSearchParams(window.location.search)
  const found: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) found[key] = value
  }
  if (Object.keys(found).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found))
    } catch {
      /* storage may be unavailable (private mode) - ignore */
    }
  }
}

function storedUtm(): Record<string, string> {
  if (typeof window === "undefined") return {}
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY)
    return raw ? (JSON.parse(raw) as Record<string, string>) : {}
  } catch {
    return {}
  }
}

/** Snapshot of attribution + context to attach to a form submission. */
export function getAnalytics(): Analytics {
  if (typeof window === "undefined") return {}
  const utm = storedUtm()
  return {
    utm_source: utm.utm_source,
    utm_medium: utm.utm_medium,
    utm_campaign: utm.utm_campaign,
    referrer: document.referrer || undefined,
    page_url: window.location.href,
    browser: navigator.userAgent,
  }
}
