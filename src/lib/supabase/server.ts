import "server-only"

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

import { serverEnv } from "@/lib/env"

/**
 * Privileged Supabase client using the **service role** key.
 *
 * This client bypasses Row Level Security and must ONLY ever be used inside
 * server-side code (API routes, server actions). The `server-only` import above
 * makes the build fail if this module is ever pulled into a client bundle.
 */
let serviceClient: SupabaseClient | null = null

export function getSupabaseServerClient(): SupabaseClient {
  if (!serviceClient) {
    const env = serverEnv()
    serviceClient = createClient(env.supabaseUrl, env.supabaseServiceRoleKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { "x-riditstack-source": "server" } },
    })
  }
  return serviceClient
}
