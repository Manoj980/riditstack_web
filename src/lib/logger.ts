/**
 * Minimal structured logger. Keeps PII out of logs by design — callers pass
 * scope + safe metadata (ids, counts, error messages), never raw form bodies.
 */
type Meta = Record<string, unknown>

function line(level: string, scope: string, message: string, meta?: Meta) {
  const payload = { level, scope, message, ...(meta ? { meta } : {}) }
  const text = JSON.stringify(payload)
  if (level === "error") console.error(text)
  else if (level === "warn") console.warn(text)
  else console.log(text)
}

export const logger = {
  info: (scope: string, message: string, meta?: Meta) => line("info", scope, message, meta),
  warn: (scope: string, message: string, meta?: Meta) => line("warn", scope, message, meta),
  error: (scope: string, message: string, meta?: Meta) => line("error", scope, message, meta),
}
