import { NextResponse } from "next/server"

/**
 * Standard JSON envelope for all form API routes so the client can rely on a
 * single shape: `{ ok, message, ... }`.
 */

export type ApiSuccess<T = undefined> = {
  ok: true
  message: string
} & (T extends undefined ? object : { data: T })

export type ApiError = {
  ok: false
  message: string
  /** Field-level validation errors keyed by field name. */
  errors?: Record<string, string>
  code?: string
}

export function ok<T = undefined>(
  message: string,
  data?: T,
  init?: ResponseInit,
): NextResponse {
  const body = data === undefined ? { ok: true, message } : { ok: true, message, data }
  return NextResponse.json(body, { status: 200, ...init })
}

export function fail(
  message: string,
  init?: {
    status?: number
    errors?: Record<string, string>
    code?: string
    headers?: HeadersInit
  },
): NextResponse {
  const body: ApiError = { ok: false, message }
  if (init?.errors) body.errors = init.errors
  if (init?.code) body.code = init.code
  return NextResponse.json(body, {
    status: init?.status ?? 400,
    headers: init?.headers,
  })
}

export const badRequest = (message: string, errors?: Record<string, string>) =>
  fail(message, { status: 400, errors, code: "bad_request" })

export const tooManyRequests = (retryAfterSeconds: number) =>
  fail("You're sending requests too quickly. Please wait a moment and try again.", {
    status: 429,
    code: "rate_limited",
    headers: { "Retry-After": String(retryAfterSeconds) },
  })

export const serverError = (message = "Something went wrong on our end. Please try again.") =>
  fail(message, { status: 500, code: "server_error" })
