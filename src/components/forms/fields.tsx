"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/** Shared input styling matching the site's form controls. */
const controlClass =
  "w-full rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-sm text-white/90 placeholder:text-white/40 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(37,99,235,0.25)] aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:border-destructive aria-[invalid=true]:focus:shadow-[0_0_25px_rgba(239,68,68,0.25)]"

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null
  return (
    <p id={id} className="text-xs font-medium text-destructive">
      {message}
    </p>
  )
}

type FieldProps = {
  label: string
  name: string
  error?: string
  required?: boolean
  children?: React.ReactNode
}

function Wrapper({ label, name, error, required, children }: FieldProps) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>
      {children}
      <FieldError id={`${name}-error`} message={error} />
    </div>
  )
}

export function TextField({
  label,
  name,
  error,
  required,
  type = "text",
  ...rest
}: FieldProps &
  React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <Wrapper label={label} name={name} error={error} required={required}>
      <input
        id={name}
        name={name}
        type={type}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(controlClass)}
        {...rest}
      />
    </Wrapper>
  )
}

export function TextAreaField({
  label,
  name,
  error,
  required,
  ...rest
}: FieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <Wrapper label={label} name={name} error={error} required={required}>
      <textarea
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(controlClass, "resize-none")}
        {...rest}
      />
    </Wrapper>
  )
}

export function SelectField({
  label,
  name,
  error,
  required,
  children,
  ...rest
}: FieldProps & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <Wrapper label={label} name={name} error={error} required={required}>
      <select
        id={name}
        name={name}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={cn(
          controlClass,
          "cursor-pointer appearance-none bg-[right_0.9rem_center] bg-no-repeat pr-10 [background-image:url(\"data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20width='16'%20height='16'%20viewBox='0%200%2024%2024'%20fill='none'%20stroke='rgba(255,255,255,0.5)'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'%3E%3Cpath%20d='m6%209%206%206%206-6'/%3E%3C/svg%3E\")] [background-size:16px]",
          "[color-scheme:dark] [&>option]:bg-[oklch(0.2_0.024_280)] [&>option]:text-white/90 [&>option]:py-2 [&>option:checked]:bg-[oklch(0.32_0.09_280)] [&>option:checked]:text-white [&>option:first-child]:text-white/50",
        )}
        {...rest}
      >
        {children}
      </select>
    </Wrapper>
  )
}

/**
 * Visually-hidden honeypot. Real users never see or fill it; bots that
 * auto-complete every field trip the server-side check.
 */
export function Honeypot({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
      <label htmlFor="company_website">Company website</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
