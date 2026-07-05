"use client"

import { useEffect } from "react"

import { captureUtmFromUrl } from "@/lib/analytics"

/** Persists UTM params from the landing URL once, on first client render. */
export function AnalyticsInit() {
  useEffect(() => {
    captureUtmFromUrl()
  }, [])
  return null
}
