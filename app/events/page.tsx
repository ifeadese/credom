import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import EventsEmptyState from "@/components/EventsEmptyState";
import PageHero from "@/components/PageHero";
import {
  EVENTS_APP_URL,
  type PublicEvent,
  formatDayNumber,
  formatMonthShort,
  formatTime,
  formatWeekdayDate,
  getUpcomingEvents,
} from "@/lib/events";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming CREDOM experiences. Reserve your place, get confirmed, and receive the personal pass that admits you on the day.",
  alternates: { canonical: "/events" },
};

// Matches the feed's own edge cache; new events show within a minute.
export const revalidate = 60;

const primaryAction =
  "inline-flex items-center rounded-btn bg-gold px-7 py-4 font-body text-[15px] font-bold text-ink transition-opacity hover:opacity-90";
const secondaryAction =
  "inline-flex items-center rounded-btn border border-ink px-7 py-4 font-body text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-paper";

export default async function EventsPage() {
  const { ok, events } = await getUpcomingEvents();

  return (
    <>
      <PageHero
        eyebrow="Events"
        watermark="EVENTS"
        heading={
          <>
            What&apos;s
            <br />
            <span className="text-gold">coming up.</span>
          </>
        }
        intro={
          <>
            Reserve your place at a CREDOM experience. Once you&apos;re
            confirmed, your personal pass arrives by email; show its QR at the
            entrance and walk in.
          </>
        }
      />

      <section className="bg-paper py-[clamp(56px,7vw,96px)]">
        <Container className="flex flex-col gap-7">
          {events.length > 0 ? (
            <>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                <h2 className="m-0 font-display text-[clamp(30px,4vw,44px)] font-bold leading-tight text-ink">
                  Open for RSVP
                </h2>
                <p className="m-0 text-[14px] text-body-muted">
                  Times are shown in each event&apos;s local time
                </p>
              </div>
              <ul className="m-0 grid list-none grid-cols-[repeat(auto-fill,minmax(min(320px,100%),1fr))] gap-6 p-0">
                {events.map((event) => (
                  <EventCard key={event.slug} event={event} />
                ))}
              </ul>
            </>
          ) : ok ? (
            <EventsEmptyState
              title="The next CREDOM experience is on its way"
              actions={
                <>
                  <a
                    href="https://www.instagram.com/wearecredom"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={primaryAction}
                  >
                    Follow @wearecredom
                  </a>
                  <Link href="/contact" className={secondaryAction}>
                    Plan an event with us
                  </Link>
                </>
              }
            >
              Nothing is open for RSVP right now. When the next event is
              announced it will appear here first, so check back soon.
            </EventsEmptyState>
          ) : (
            <EventsEmptyState
              title="We couldn't load events just now"
              actions={
                <a
                  href={EVENTS_APP_URL}
                  target="_blank"
                  rel="noopener"
                  className={primaryAction}
                >
                  See events on our events site
                </a>
              }
            >
              Please try again in a moment. You can also find every open
              event, and RSVP, on events.credomlimited.com.
            </EventsEmptyState>
          )}

          <p
            className={`m-0 text-[14px] leading-[1.5] text-body-muted ${
              events.length === 0 ? "text-center" : ""
            }`}
          >
            Invited to a private event? Use the link in your invitation;
            private events are not listed here.
          </p>
        </Container>
      </section>
    </>
  );
}

function EventCard({ event }: { event: PublicEvent }) {
  const open = event.availability === "open";
  const tag =
    event.availability === "full"
      ? "Fully booked"
      : open
        ? "RSVPs open"
        : "RSVPs closed";

  return (
    <li className="flex flex-col overflow-hidden rounded-card border border-line bg-white">
      <div className="flex gap-5 p-6 pb-0 sm:p-[30px] sm:pb-0">
        <div className="w-[72px] shrink-0 self-start rounded-card bg-ink py-3 text-center">
          <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gold">
            {formatMonthShort(event.startsAt, event.timezone)}
          </div>
          <div className="mt-1 font-display text-[38px] font-bold leading-none text-paper">
            {formatDayNumber(event.startsAt, event.timezone)}
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <span
            className={`self-start rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.08em] ${
              open ? "bg-teal text-white" : "bg-paper-2 text-brown"
            }`}
          >
            {tag}
          </span>
          <h3 className="m-0 font-display text-[26px] font-bold leading-[1.12] text-ink">
            {event.name}
          </h3>
        </div>
      </div>
      <dl className="m-0 flex flex-col gap-2.5 p-6 text-[15px] text-body sm:px-[30px]">
        <div className="flex items-center gap-2.5">
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-body-muted"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>
          <dt className="sr-only">Date and time</dt>
          <dd className="m-0">
            {formatWeekdayDate(event.startsAt, event.timezone)} ·{" "}
            {formatTime(event.startsAt, event.timezone)}
          </dd>
        </div>
        {event.venue && (
          <div className="flex items-center gap-2.5">
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-body-muted"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
            <dt className="sr-only">Venue</dt>
            <dd className="m-0">{event.venue}</dd>
          </div>
        )}
      </dl>
      <div className="mt-auto px-6 pb-6 sm:px-[30px] sm:pb-[30px]">
        {/* RSVP lives on the events app, which owns guest data and passes */}
        <a
          href={`${EVENTS_APP_URL}/${encodeURIComponent(event.slug)}`}
          target="_blank"
          rel="noopener"
          className={`block rounded-btn px-6 py-4 text-center font-body text-[15px] font-bold transition-opacity ${
            open
              ? "bg-gold text-ink hover:opacity-90"
              : "border border-line text-ink hover:bg-paper"
          }`}
        >
          {open ? "RSVP" : "View event"}
        </a>
      </div>
    </li>
  );
}
