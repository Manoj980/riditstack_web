import { createClient, type SupabaseClient } from "@supabase/supabase-js"

import { publicEnv } from "@/lib/env"

/**
 * Browser-safe Supabase client using the **anon** key.
 *
 * Row Level Security is enabled on every table and no anon policies are granted,
 * so this client cannot read or write lead data directly - all writes go through
 * the server API routes using the service role. This client exists for future
 * public reads (e.g. published content) and to keep a single, typed entry point.
 *
 * NEVER import the server client into browser code.
 */
let browserClient: SupabaseClient | null = null

export function getSupabaseBrowserClient(): SupabaseClient {
  if (!publicEnv.supabaseUrl || !publicEnv.supabaseAnonKey) {
    throw new Error(
      "Supabase browser client is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.",
    )
  }
  if (!browserClient) {
    browserClient = createClient(publicEnv.supabaseUrl, publicEnv.supabaseAnonKey, {
      auth: { persistSession: false },
    })
  }
  return browserClient
}
