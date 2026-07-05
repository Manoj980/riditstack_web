-- =====================================================================
-- RiditStack — lead capture schema
-- Tables: demo_requests, contact_requests, newsletter_subscribers
--
-- Security model:
--   * RLS is ENABLED on every table.
--   * NO policies are granted to anon / authenticated roles, so the public
--     anon key cannot read or write any of this data.
--   * All writes happen server-side through the service_role key, which
--     bypasses RLS. This keeps lead data private by default.
--
-- Apply with the Supabase SQL editor, or the Supabase CLI:
--   supabase db push
-- =====================================================================

-- Needed for gen_random_uuid()
create extension if not exists "pgcrypto";

-- Auto-update updated_at on row change ----------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

-- =====================================================================
-- demo_requests
-- =====================================================================
create table if not exists public.demo_requests (
  id           uuid primary key default gen_random_uuid(),
  name         text not null,
  email        text not null,
  phone        text,
  company      text not null,
  job_title    text,
  industry     text,
  employees    text,
  country      text,
  message      text,
  utm_source   text,
  utm_medium   text,
  utm_campaign text,
  referrer     text,
  page_url     text,
  ip_address   text,
  status       text not null default 'new',
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now()
);

create index if not exists demo_requests_email_idx      on public.demo_requests (email);
create index if not exists demo_requests_created_at_idx on public.demo_requests (created_at desc);
create index if not exists demo_requests_status_idx     on public.demo_requests (status);

drop trigger if exists demo_requests_set_updated_at on public.demo_requests;
create trigger demo_requests_set_updated_at
  before update on public.demo_requests
  for each row execute function public.set_updated_at();

alter table public.demo_requests enable row level security;
-- Deny-all by default: no policies -> anon/authenticated get nothing.

-- =====================================================================
-- contact_requests
-- =====================================================================
create table if not exists public.contact_requests (
  id         uuid primary key default gen_random_uuid(),
  name       text not null,
  email      text not null,
  company    text,
  phone      text,
  subject    text,
  message    text not null,
  page_url   text,
  ip_address text,
  status     text not null default 'new',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists contact_requests_email_idx      on public.contact_requests (email);
create index if not exists contact_requests_created_at_idx on public.contact_requests (created_at desc);
create index if not exists contact_requests_status_idx     on public.contact_requests (status);

drop trigger if exists contact_requests_set_updated_at on public.contact_requests;
create trigger contact_requests_set_updated_at
  before update on public.contact_requests
  for each row execute function public.set_updated_at();

alter table public.contact_requests enable row level security;

-- =====================================================================
-- newsletter_subscribers
-- =====================================================================
create table if not exists public.newsletter_subscribers (
  id          uuid primary key default gen_random_uuid(),
  email       text not null,
  status      text not null default 'subscribed',
  source_page text,
  confirmed   boolean not null default false,
  ip_address  text,
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

-- Case-insensitive uniqueness so we never store the same address twice.
create unique index if not exists newsletter_subscribers_email_key
  on public.newsletter_subscribers (lower(email));
create index if not exists newsletter_subscribers_created_at_idx
  on public.newsletter_subscribers (created_at desc);

drop trigger if exists newsletter_subscribers_set_updated_at on public.newsletter_subscribers;
create trigger newsletter_subscribers_set_updated_at
  before update on public.newsletter_subscribers
  for each row execute function public.set_updated_at();

alter table public.newsletter_subscribers enable row level security;
