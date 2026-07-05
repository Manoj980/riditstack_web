# RiditStack — Functional Forms

Production implementation of the three lead-capture forms:

| Form            | UI                                            | API                   | Table                    |
| --------------- | --------------------------------------------- | --------------------- | ------------------------ |
| Book a Demo     | `DemoForm` (contact page, `?type=demo`)       | `POST /api/book-demo` | `demo_requests`          |
| Contact         | `ContactForm` (`/contact`)                    | `POST /api/contact`   | `contact_requests`       |
| Newsletter      | `NewsletterForm` (footer)                     | `POST /api/newsletter`| `newsletter_subscribers` |

Every submission is **validated → stored in Supabase → emailed via Resend**, with
spam protection, rate limiting, inline validation, loading/success/error states,
and toast notifications.

---

## 1. Architecture

```
src/
├─ app/api/{book-demo,contact,newsletter}/route.ts   API route handlers (nodejs runtime)
├─ lib/
│  ├─ env.ts                       validated env access (public + serverEnv())
│  ├─ analytics.ts                 client UTM/referrer/page capture
│  ├─ logger.ts                    structured, PII-free logging
│  ├─ api/
│  │  ├─ response.ts               ok()/fail()/badRequest()/tooManyRequests()/serverError()
│  │  ├─ rate-limit.ts             in-memory sliding-window limiter
│  │  ├─ request-meta.ts           client IP / referer extraction
│  │  └─ turnstile.ts              Cloudflare Turnstile verification (optional)
│  ├─ supabase/{client,server}.ts  anon (browser) + service-role (server) clients
│  └─ validation/schemas.ts        Zod schemas + sanitization + fieldErrors()
├─ server/
│  ├─ repositories/                LeadRepository, NewsletterRepository
│  └─ services/email-service.ts    EmailService (Resend + lazy React Email)
├─ emails/                         6 React Email templates + shared layout
├─ hooks/use-form-submit.ts        shared submit hook (loading/success/error/toasts)
└─ components/forms/               DemoForm, NewsletterForm, fields, Turnstile widget
supabase/migrations/0001_init.sql  schema + RLS
```

### Request lifecycle (every route)

1. **Rate limit** by IP (429 on abuse).
2. **Parse** JSON (400 on malformed body).
3. **Validate + sanitize** with Zod, incl. the **honeypot** field (400 on failure).
4. **Verify Turnstile** (skipped if not configured).
5. **Persist** via a repository (service-role Supabase client).
6. **Email** admin + customer via Resend (failures logged, never block the response).
7. Return the standard JSON envelope: `{ ok, message, errors?, code? }`.

---

## 2. Setup

### 2.1 Install & env

```bash
npm install
cp .env.example .env.local   # then fill in the values
```

See `.env.example` for the full list. Minimum to go live:

- `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`, `SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `RESEND_API_KEY`, and the `FROM_EMAIL` / `SALES_EMAIL` / `SUPPORT_EMAIL` / `MARKETING_EMAIL` addresses
- `NEXT_PUBLIC_SITE_URL`

> Without Supabase/Resend env the forms validate and rate-limit correctly but
> return a graceful `500` at the persistence step. Add the env to go end-to-end.

### 2.2 Database

Run `supabase/migrations/0001_init.sql` in the **Supabase SQL editor**, or with the CLI:

```bash
supabase db push
```

This creates the three tables, indexes, `updated_at` triggers, and enables
**Row Level Security with no anon policies** — so the public anon key cannot read
or write lead data. All writes go through the server using the service-role key.

### 2.3 Resend

1. Create an API key at [resend.com](https://resend.com).
2. Verify your sending domain and make sure `FROM_EMAIL` uses it
   (e.g. `RiditStack <noreply@riditstack.com>`).
3. Preview the templates locally: `npx react-email dev` (renders `src/emails/`).

### 2.4 Cloudflare Turnstile (optional)

Bot protection is layered: **honeypot + rate limiting are always on**; Turnstile
is an optional extra. To enable it, set both:

- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — renders the widget on the forms.
- `TURNSTILE_SECRET_KEY` — enforces server-side verification.

Leave both blank to disable (nothing renders, verification is skipped).

---

## 3. Emails sent

| Trigger        | To                | Subject                                      | Template               |
| -------------- | ----------------- | -------------------------------------------- | ---------------------- |
| Book a Demo    | `SALES_EMAIL`     | `New Demo Request - {Company}`               | `BookDemoAdmin`        |
| Book a Demo    | customer          | `Thanks for booking your ProcLeo demo!`      | `BookDemoCustomer`     |
| Contact        | `SUPPORT_EMAIL`   | `New Contact Message - {subject}`            | `ContactAdmin`         |
| Contact        | customer          | `We've received your message — RiditStack`   | `ContactCustomer`      |
| Newsletter     | subscriber        | `Welcome to the RiditStack briefing 🎉`      | `NewsletterWelcome`    |
| Newsletter     | `MARKETING_EMAIL` | `New newsletter subscriber`                  | `NewsletterAdmin`      |

Admin notifications set `reply-to` to the customer so the team can reply directly.

---

## 4. Security notes

- **Service-role key is server-only** — `lib/supabase/server.ts` imports
  `server-only`, so the build fails if it ever leaks into a client bundle.
- **RLS enabled, deny-by-default** — no anon policies exist.
- **All input validated & sanitized server-side** (control chars stripped, length
  bounds, email/phone format) before storage.
- **Duplicate detection** — newsletter uses a case-insensitive unique index;
  re-subscribing is idempotent (no error, no duplicate email).
- **Logs are PII-free** — only ids, counts, and error messages are logged.

### Rate limiting on Vercel

`lib/api/rate-limit.ts` is an in-memory limiter — effective per warm instance but
**not shared across a scaled-out serverless deployment**. For a strict global
limit, swap it for [`@upstash/ratelimit`](https://github.com/upstash/ratelimit)
backed by Upstash Redis; the `rateLimit()` signature is designed as a drop-in.

---

## 5. Deploy to Vercel

1. Push the repo and import it in Vercel.
2. **Settings → Environment Variables**: add every variable from `.env.example`
   (Production + Preview). `NEXT_PUBLIC_*` values are exposed to the browser by
   design; all others stay server-side.
3. Ensure the Resend domain and `FROM_EMAIL` are verified.
4. Run the SQL migration against your Supabase project (once).
5. Deploy. The API routes run on the Node.js runtime (`export const runtime = "nodejs"`).

### Verify after deploy

```bash
curl -i -X POST https://YOUR-DOMAIN/api/newsletter \
  -H 'content-type: application/json' \
  -d '{"email":"you@example.com","source_page":"smoke-test"}'
```

Expect `200 {"ok":true,...}`, a row in `newsletter_subscribers`, a welcome email,
and a notification to `MARKETING_EMAIL`.
