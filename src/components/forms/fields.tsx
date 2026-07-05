"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

/** Shared input styling matching the site's form controls. */
const controlClass =
  "w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none transition-colors focus:ring-2 focus:ring-primary aria-[invalid=true]:border-destructive aria-[invalid=true]:focus:ring-destructive/40"

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
        className={cn(controlClass)}
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
