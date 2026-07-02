/**
 * Strip HTML tags, trim, and cap string length on every string field before
 * submission. Mirrors the sanitize step used across the onehub / galentines
 * form architecture.
 */
export function sanitizeFormData<T extends object>(
  data: T
): Record<string, unknown> {
  const sanitized: Record<string, unknown> = {};

  for (const [key, value] of Object.entries(data)) {
    if (typeof value === "string") {
      sanitized[key] = value.replace(/<[^>]*>/g, "").trim().slice(0, 1000);
    } else {
      sanitized[key] = value;
    }
  }

  return sanitized;
}
