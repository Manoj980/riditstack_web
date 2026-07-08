/**
 * Verify a Cloudflare Turnstile token server-side.
 *
 * If `TURNSTILE_SECRET_KEY` is not configured the check is SKIPPED and returns
 * success - this keeps the forms working out-of-the-box in development while
 * still enforcing verification in any environment where the secret is set.
 *
 * Reads the secret directly (not via `serverEnv()`) so this bot-check never
 * depends on unrelated secrets like the Supabase/Resend keys.
 */
export async function verifyTurnstile(
  token: string | undefined,
  remoteIp?: string,
): Promise<{ success: boolean; reason?: string }> {
  const turnstileSecretKey = process.env.TURNSTILE_SECRET_KEY || ""

  // Not configured → treat as pass (honeypot + rate limiting still apply).
  if (!turnstileSecretKey) return { success: true }

  if (!token) return { success: false, reason: "missing_token" }

  try {
    const body = new URLSearchParams({ secret: turnstileSecretKey, response: token })
    if (remoteIp && remoteIp !== "unknown") body.append("remoteip", remoteIp)

    const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body,
      // Never let bot-check hang the request.
      signal: AbortSignal.timeout(5000),
    })
    const data = (await res.json()) as { success: boolean; "error-codes"?: string[] }
    return data.success
      ? { success: true }
      : { success: false, reason: data["error-codes"]?.join(",") || "failed" }
  } catch {
    // Fail closed on network/verification error to avoid becoming an open door.
    return { success: false, reason: "verification_error" }
  }
}
