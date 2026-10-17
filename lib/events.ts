/**
 * Event data comes from the internal events app, which owns events, RSVPs
 * and admin. Its address is server-only configuration (EVENTS_APP_URL) and
 * never reaches the browser: guests browse and RSVP on this site, and RSVPs
 * are forwarded server-side by app/api/rsvp.
 */
export function eventsAppUrl(): string | null {
  const url = process.env.EVENTS_APP_URL?.trim().replace(/\/$/, "");
  return url || null;
}

/** Shape served by the events app's GET /api/public/events. */
export type PublicEvent = {
  slug: string;
  name: string;
  startsAt: string;
  endsAt: string | null;
  venue: string | null;
  timezone: string;
  availability: "open" | "closed" | "full";
  url: string;
};

export type EventsResult =
  | { ok: true; events: PublicEvent[] }
  | { ok: false; events: [] };

/** Never throws: an unreachable events app renders the page's error state. */
export async function getUpcomingEvents(): Promise<EventsResult> {
  try {
    const base = eventsAppUrl();
    if (!base) throw new Error("EVENTS_APP_URL is not set");
    const res = await fetch(`${base}/api/public/events`, {
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) throw new Error(`events feed responded ${res.status}`);
    const data = (await res.json()) as { events?: PublicEvent[] };
    return { ok: true, events: Array.isArray(data.events) ? data.events : [] };
  } catch (error) {
    console.error("Could not load events", error);
    return { ok: false, events: [] };
  }
}

export type EventResult =
  | { state: "found"; event: PublicEvent }
  | { state: "missing" }
  | { state: "error" };

/**
 * One event by slug, listed or link-only (the slug is the invitation).
 * Never throws; "error" means the events app could not be reached.
 */
export async function getEvent(slug: string): Promise<EventResult> {
  try {
    const base = eventsAppUrl();
    if (!base) throw new Error("EVENTS_APP_URL is not set");
    const res = await fetch(`${base}/api/public/events/${encodeURIComponent(slug)}`, {
      next: { revalidate: 30 },
      signal: AbortSignal.timeout(5000),
    });
    if (res.status === 404) return { state: "missing" };
    if (!res.ok) throw new Error(`event feed responded ${res.status}`);
    const data = (await res.json()) as { event?: PublicEvent };
    return data.event ? { state: "found", event: data.event } : { state: "missing" };
  } catch (error) {
    console.error(`Could not load event ${slug}`, error);
    return { state: "error" };
  }
}

/** "Thursday 20 November 2026", for the event page. */
export const formatLongDate = (iso: string, tz: string) =>
  format(iso, tz, { weekday: "long", day: "numeric", month: "long", year: "numeric" });

/** Dates render in the event's own zone so Lagos events read in WAT anywhere. */
function format(iso: string, timeZone: string, options: Intl.DateTimeFormatOptions) {
  return new Intl.DateTimeFormat("en-GB", { ...options, timeZone }).format(new Date(iso));
}

/** "Nov", for date tiles. */
export const formatMonthShort = (iso: string, tz: string) =>
  format(iso, tz, { month: "short" });

/** "20", for date tiles. */
export const formatDayNumber = (iso: string, tz: string) =>
  format(iso, tz, { day: "numeric" });

/** "Thursday 20 November". */
export const formatWeekdayDate = (iso: string, tz: string) =>
  format(iso, tz, { weekday: "long", day: "numeric", month: "long" });

/** "6:00 pm WAT" (WAT spelled out for Lagos, where guests expect it over GMT+1). */
export function formatTime(iso: string, tz: string) {
  const time = format(iso, tz, { hour: "numeric", minute: "2-digit", hour12: true });
  if (tz === "Africa/Lagos") return `${time} WAT`;
  const zone = new Intl.DateTimeFormat("en-GB", { timeZone: tz, timeZoneName: "short" })
    .formatToParts(new Date(iso))
    .find((p) => p.type === "timeZoneName")?.value;
  return zone ? `${time} ${zone}` : time;
}
