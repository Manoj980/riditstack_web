"use client"

import { useCallback, useRef, useState } from "react"
import { toast } from "sonner"

import { getAnalytics } from "@/lib/analytics"

type ApiResponse = {
  ok: boolean
  message: string
  errors?: Record<string, string>
}

type SubmitState = "idle" | "submitting" | "success" | "error"

type UseFormSubmitOptions = {
  endpoint: string
  /** Toast + inline reset after a successful submit. */
  onSuccess?: () => void
}

/**
 * Shared submission logic for every form: attaches analytics, POSTs JSON,
 * manages loading/success/error state, surfaces field errors inline, and fires
 * success/error toasts. Guards against double-submits via a ref.
 */
export function useFormSubmit({ endpoint, onSuccess }: UseFormSubmitOptions) {
  const [state, setState] = useState<SubmitState>("idle")
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const inFlight = useRef(false)

  const submit = useCallback(
    async (payload: Record<string, unknown>): Promise<boolean> => {
      if (inFlight.current) return false
      inFlight.current = true
      setState("submitting")
      setFieldErrors({})

      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ ...payload, analytics: getAnalytics() }),
        })

        let data: ApiResponse
        try {
          data = (await res.json()) as ApiResponse
        } catch {
          data = { ok: false, message: "Unexpected server response. Please try again." }
        }

        if (res.ok && data.ok) {
          setState("success")
          toast.success(data.message)
          onSuccess?.()
          return true
        }

        setState("error")
        if (data.errors) setFieldErrors(data.errors)
        toast.error(data.message || "Something went wrong. Please try again.")
        return false
      } catch {
        setState("error")
        toast.error("Network error. Please check your connection and try again.")
        return false
      } finally {
        inFlight.current = false
      }
    },
    [endpoint, onSuccess],
  )

  const reset = useCallback(() => {
    setState("idle")
    setFieldErrors({})
  }, [])

  return {
    submit,
    reset,
    state,
    fieldErrors,
    isSubmitting: state === "submitting",
    isSuccess: state === "success",
  }
}
