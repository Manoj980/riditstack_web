import type { NextRequest } from "next/server"

/**
 * Best-effort client IP extraction from the usual proxy headers.
 * On Vercel, `x-forwarded-for` is set; the first entry is the client.
 */
export function getClientIp(req: NextRequest): string {
  const xff = req.headers.get("x-forwarded-for")
  if (xff) {
    const first = xff.split(",")[0]?.trim()
    if (first) return first
  }
  return req.headers.get("x-real-ip") || "unknown"
}

/** Server-side referer, used as a fallback when the client didn't send analytics. */
export function getReferer(req: NextRequest): string | undefined {
  return req.headers.get("referer") || undefined
}
