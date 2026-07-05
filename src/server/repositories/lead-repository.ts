import "server-only"

import { getSupabaseServerClient } from "@/lib/supabase/server"

/**
 * Persistence for demo + contact leads. Uses the service-role client, so it
 * must only ever run server-side. Returns the created row's id.
 */

export type DemoRequestRecord = {
  name: string
  email: string
  phone?: string
  company: string
  job_title?: string
  industry?: string
  employees?: string
  country?: string
  message?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  referrer?: string
  page_url?: string
  ip_address?: string
}

export type ContactRequestRecord = {
  name: string
  email: string
  company?: string
  phone?: string
  subject?: string
  message: string
  page_url?: string
  ip_address?: string
}

export const LeadRepository = {
  async createDemoRequest(record: DemoRequestRecord): Promise<{ id: string }> {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase
      .from("demo_requests")
      .insert(record)
      .select("id")
      .single()

    if (error) throw new Error(`Failed to store demo request: ${error.message}`)
    return { id: data.id as string }
  },

  async createContactRequest(record: ContactRequestRecord): Promise<{ id: string }> {
    const supabase = getSupabaseServerClient()
    const { data, error } = await supabase
      .from("contact_requests")
      .insert(record)
      .select("id")
      .single()

    if (error) throw new Error(`Failed to store contact request: ${error.message}`)
    return { id: data.id as string }
  },
}
