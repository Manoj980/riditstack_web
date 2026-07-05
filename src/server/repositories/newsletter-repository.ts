import "server-only"

import { getSupabaseServerClient } from "@/lib/supabase/server"

/**
 * Persistence for newsletter subscribers, with duplicate detection built on the
 * case-insensitive unique index defined in the migration.
 */

export type NewsletterRecord = {
  email: string
  source_page?: string
  ip_address?: string
}

export type SubscribeOutcome =
  | { status: "created"; id: string }
  | { status: "already_subscribed" }

export const NewsletterRepository = {
  async subscribe(record: NewsletterRecord): Promise<SubscribeOutcome> {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase
      .from("newsletter_subscribers")
      .insert(record)
      .select("id")
      .single()

    if (!error) return { status: "created", id: data.id as string }

    // 23505 = unique_violation → the address is already subscribed.
    if (error.code === "23505") return { status: "already_subscribed" }

    throw new Error(`Failed to store subscriber: ${error.message}`)
  },
}
