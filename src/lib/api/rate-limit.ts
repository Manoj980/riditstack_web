/**
 * Lightweight in-memory sliding-window rate limiter.
 *
 * Keyed by IP + bucket name. Good enough to blunt abusive bursts from a single
 * client on a warm serverless instance or a long-lived Node server.
 *
 * NOTE on durability: serverless instances are ephemeral and don't share memory,
 * so this does not enforce a hard global limit across a scaled-out deployment.
 * For strict, distributed limits on Vercel, swap `rateLimit()` for an Upstash
 * Redis (@upstash/ratelimit) implementation - the call site and return shape
 * are designed to make that a drop-in change.
 */

type Hit = { count: number; resetAt: number }

const store = new Map<string, Hit>()

// Opportunistic cleanup so the map can't grow unbounded on a long-lived server.
let lastSweep = 0
function sweep(now: number) {
  if (now - lastSweep < 60_000) return
  lastSweep = now
  for (const [key, hit] of store) {
    if (hit.resetAt <= now) store.delete(key)
  }
}

export type RateLimitResult = {
  success: boolean
  limit: number
  remaining: number
  /** Seconds until the window resets. */
  retryAfter: number
}

export function rateLimit(
  identifier: string,
  opts: { limit?: number; windowMs?: number } = {},
): RateLimitResult {
  const limit = opts.limit ?? 5
  const windowMs = opts.windowMs ?? 60_000
  const now = Date.now()
  sweep(now)

  const existing = store.get(identifier)
  if (!existing || existing.resetAt <= now) {
    store.set(identifier, { count: 1, resetAt: now + windowMs })
    return { success: true, limit, remaining: limit - 1, retryAfter: 0 }
  }

  existing.count += 1
  const retryAfter = Math.max(1, Math.ceil((existing.resetAt - now) / 1000))
  if (existing.count > limit) {
    return { success: false, limit, remaining: 0, retryAfter }
  }
  return { success: true, limit, remaining: limit - existing.count, retryAfter }
}
