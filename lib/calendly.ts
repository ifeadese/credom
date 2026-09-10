import { hexWithoutHash } from "./tokens";

/** Calendly event type embedded on /schedule ("Schedule a Chat"). */
export const CALENDLY_EVENT_URL =
  "https://calendly.com/credomprime/schedule-a-chat";

/**
 * Builds the inline-embed URL for a Calendly event: brand colours (Calendly
 * wants hex without `#`), the event-type / landing-page chrome and the GDPR
 * banner hidden so only the calendar + time picker show, and the embed
 * markers Calendly uses to lay the page out for an iframe. Any query string
 * already on `eventUrl` (e.g. `?month=`) is preserved.
 */
export function buildCalendlyEmbedUrl(
  eventUrl: string = CALENDLY_EVENT_URL
): string {
  const url = new URL(eventUrl);
  const params: Record<string, string> = {
    background_color: hexWithoutHash("white"),
    primary_color: hexWithoutHash("gold"),
    text_color: hexWithoutHash("ink"),
    hide_event_type_details: "1",
    hide_landing_page_details: "1",
    hide_gdpr_banner: "1",
    embed_type: "Inline",
    embed_domain: "1",
  };
  for (const [key, value] of Object.entries(params)) {
    url.searchParams.set(key, value);
  }
  return url.toString();
}
