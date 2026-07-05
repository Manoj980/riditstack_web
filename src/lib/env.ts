/**
 * Centralised, validated environment access.
 *
 * Server-only secrets are read lazily through `serverEnv()` so that importing
 * this module in a client bundle never trips over a missing secret. Public
 * values (safe to ship to the browser) are exposed directly.
 *
 * We intentionally avoid throwing at module-load time: a missing secret should
 * fail the specific request that needs it (with a clean 500) rather than crash
 * the whole build or every route.
 */

function required(name: string, value: string | undefined): string {
  if (!value || value.trim() === "") {
    throw new Error(
      `Missing required environment variable: ${name}. ` +
        `Add it to .env.local (see .env.example) or your Vercel project settings.`,
    )
  }
  return value
}

/** Values that are safe to expose to the browser. */
export const publicEnv = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://riditstack.com",
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL || "",
  supabaseAnonKey:
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY || "",
  turnstileSiteKey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "",
} as const

/**
 * Server-only secrets. Call inside API routes / server code only.
 * Throws a descriptive error if a required secret is missing.
 */
export function serverEnv() {
  return {
    supabaseUrl: required(
      "SUPABASE_URL",
      process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL,
    ),
    supabaseServiceRoleKey: required(
      "SUPABASE_SERVICE_ROLE_KEY",
      process.env.SUPABASE_SERVICE_ROLE_KEY,
    ),
    resendApiKey: required("RESEND_API_KEY", process.env.RESEND_API_KEY),
    fromEmail: process.env.FROM_EMAIL || "RiditStack <noreply@riditstack.com>",
    salesEmail: process.env.SALES_EMAIL || "sales@riditstack.com",
    supportEmail: process.env.SUPPORT_EMAIL || "support@riditstack.com",
    marketingEmail: process.env.MARKETING_EMAIL || "marketing@riditstack.com",
    // Optional: when unset, Turnstile verification is skipped (dev-friendly).
    turnstileSecretKey: process.env.TURNSTILE_SECRET_KEY || "",
    siteUrl: publicEnv.siteUrl,
  }
}

export type ServerEnv = ReturnType<typeof serverEnv>
