"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { FieldError } from "@/components/forms/fields"

export type SelectOption = {
  value: string
  label: string
  /** Optional leading icon (lucide component) */
  icon?: React.ComponentType<{ className?: string }>
}

type SelectMenuProps = {
  label: string
  name: string
  value: string
  onValueChange: (value: string) => void
  options: SelectOption[]
  placeholder?: string
  required?: boolean
  error?: string
}

export function SelectMenu({
  label,
  name,
  value,
  onValueChange,
  options,
  placeholder = "Select an option",
  required,
  error,
}: SelectMenuProps) {
  const [open, setOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const rootRef = React.useRef<HTMLDivElement>(null)

  const selected = options.find((o) => o.value === value) ?? null

  // Close on outside click.
  React.useEffect(() => {
    if (!open) return
    function onPointerDown(e: PointerEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("pointerdown", onPointerDown)
    return () => document.removeEventListener("pointerdown", onPointerDown)
  }, [open])

  // When opening, highlight the current selection.
  React.useEffect(() => {
    if (open) {
      const i = options.findIndex((o) => o.value === value)
      setActiveIndex(i >= 0 ? i : 0)
    }
  }, [open, options, value])

  function commit(index: number) {
    const opt = options[index]
    if (!opt) return
    onValueChange(opt.value)
    setOpen(false)
  }

  function onKeyDown(e: React.KeyboardEvent) {
    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        if (!open) return setOpen(true)
        setActiveIndex((i) => (i + 1) % options.length)
        break
      case "ArrowUp":
        e.preventDefault()
        if (!open) return setOpen(true)
        setActiveIndex((i) => (i - 1 + options.length) % options.length)
        break
      case "Enter":
      case " ":
        e.preventDefault()
        if (open) commit(activeIndex)
        else setOpen(true)
        break
      case "Escape":
        setOpen(false)
        break
      case "Tab":
        setOpen(false)
        break
    }
  }

  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-sm font-medium">
        {label} {required ? <span className="text-primary">*</span> : null}
      </label>

      <div ref={rootRef} className="relative">
        {/* Trigger */}
        <button
          type="button"
          id={name}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={`${name}-listbox`}
          aria-invalid={!!error}
          onClick={() => setOpen((o) => !o)}
          onKeyDown={onKeyDown}
          className={cn(
            "flex w-full items-center justify-between gap-2 rounded-[14px] border border-white/[0.08] bg-white/[0.04] px-3.5 py-2.5 text-left text-sm outline-none transition-all duration-300",
            "hover:border-white/20 hover:bg-white/[0.06]",
            "focus:border-blue-500 focus:bg-white/[0.06] focus:shadow-[0_0_25px_rgba(37,99,235,0.25)]",
            open && "border-blue-500 bg-white/[0.06] shadow-[0_0_25px_rgba(37,99,235,0.25)]",
            error && "border-destructive focus:border-destructive",
          )}
        >
          <span className="flex min-w-0 items-center gap-2.5">
            {selected?.icon ? (
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-primary/15 text-primary">
                <selected.icon className="h-3.5 w-3.5" />
              </span>
            ) : null}
            <span className={cn("truncate", selected ? "text-white/90" : "text-white/40")}>
              {selected ? selected.label : placeholder}
            </span>
          </span>
          <ChevronDown
            className={cn(
              "h-4 w-4 shrink-0 text-white/50 transition-transform duration-300",
              open && "rotate-180 text-blue-400",
            )}
          />
        </button>

        {/* Panel */}
        {open ? (
          <ul
            id={`${name}-listbox`}
            role="listbox"
            aria-label={label}
            className={cn(
              "absolute z-50 mt-2 max-h-72 w-full overflow-auto rounded-[16px] border border-white/[0.1] p-1.5",
              "bg-[oklch(0.2_0.024_280)]/95 backdrop-blur-xl",
              "shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_20px_60px_rgba(0,0,0,0.55),0_0_40px_rgba(37,99,235,0.15)]",
              "animate-in fade-in-0 zoom-in-95 slide-in-from-top-1 duration-150",
              "[scrollbar-width:thin]",
            )}
          >
            {options.map((opt, i) => {
              const isSelected = opt.value === value
              const isActive = i === activeIndex
              const Icon = opt.icon
              return (
                <li
                  key={opt.value}
                  role="option"
                  aria-selected={isSelected}
                  onMouseEnter={() => setActiveIndex(i)}
                  onClick={() => commit(i)}
                  className={cn(
                    "flex cursor-pointer items-center gap-2.5 rounded-[11px] px-2.5 py-2 text-sm transition-colors",
                    isActive ? "bg-white/[0.07] text-white" : "text-white/80",
                    isSelected && "text-primary",
                  )}
                >
                  {Icon ? (
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors",
                        isSelected || isActive
                          ? "bg-primary/20 text-primary"
                          : "bg-white/[0.06] text-white/70",
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                  ) : null}
                  <span className="flex-1 truncate">{opt.label}</span>
                  {isSelected ? (
                    <Check className="h-4 w-4 shrink-0 text-primary" />
                  ) : null}
                </li>
              )
            })}
          </ul>
        ) : null}
      </div>

      <FieldError id={`${name}-error`} message={error} />
    </div>
  )
}
