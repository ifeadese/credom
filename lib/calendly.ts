/**
 * Calendly event type embedded on /schedule ("Schedule a Chat").
 * Override per environment with NEXT_PUBLIC_CALENDLY_URL (exposed to the
 * browser because the widget mounts client-side). Same fallback pattern as
 * `lib/formbold.ts`.
 */
export const DEFAULT_CALENDLY_URL =
  "https://calendly.com/credomprime/schedule-a-chat";

export function getCalendlyUrl(): string {
  return process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || DEFAULT_CALENDLY_URL;
}
