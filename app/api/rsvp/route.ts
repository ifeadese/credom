import { NextResponse } from "next/server";
import { eventsAppUrl } from "@/lib/events";

export const dynamic = "force-dynamic";

const UNAVAILABLE =
  "We couldn't save your RSVP just now. Please try again in a moment.";

/**
 * Forwards a guest's RSVP to the internal events app, so the browser only ever
 * talks to this site. The events app validates, rate-limits and emails; its
 * `{ ok, message | error }` reply and status pass straight back. The shared
 * secret lets it trust the guest IP we forward, keeping its rate limit per
 * guest instead of per this server.
 */
export async function POST(request: Request) {
  const base = eventsAppUrl();
  if (!base) {
    console.error("RSVP proxy: EVENTS_APP_URL is not set");
    return NextResponse.json({ ok: false, error: UNAVAILABLE }, { status: 503 });
  }

  const body = await request.text();
  if (body.length > 4096) {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 413 });
  }

  const guestIp =
    request.headers.get("x-real-ip") ??
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "";
  const headers: Record<string, string> = { "Content-Type": "application/json" };
  const secret = process.env.RSVP_PROXY_SECRET;
  if (secret && guestIp) {
    headers["x-rsvp-proxy-secret"] = secret;
    headers["x-credom-client-ip"] = guestIp;
  }

  try {
    const res = await fetch(`${base}/api/rsvp`, {
      method: "POST",
      headers,
      body,
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    const data = await res.json().catch(() => null);
    if (!data || typeof data !== "object") {
      throw new Error(`events app responded ${res.status} without JSON`);
    }
    const retryAfter = res.headers.get("Retry-After");
    return NextResponse.json(data, {
      status: res.status,
      headers: retryAfter ? { "Retry-After": retryAfter } : undefined,
    });
  } catch (error) {
    console.error("RSVP proxy failed", error);
    return NextResponse.json({ ok: false, error: UNAVAILABLE }, { status: 502 });
  }
}
