/**
 * Upcoming events, read from the events app (events.credomlimited.com), which
 * owns event data, RSVPs and admin. Both that app's home page and this site's
 * /events page show the same list; RSVP itself happens on the events app.
 */
export const EVENTS_APP_URL = (
  process.env.EVENTS_APP_URL || "https://events.credomlimited.com"
).replace(/\/$/, "");

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
    const res = await fetch(`${EVENTS_APP_URL}/api/public/events`, {
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
