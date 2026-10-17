import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import EventsEmptyState from "@/components/EventsEmptyState";
import RsvpForm from "@/components/RsvpForm";
import { formatLongDate, formatTime, getEvent } from "@/lib/events";

// Availability (open / full / closed) can change; the RSVP itself re-checks.
export const revalidate = 30;

const SLUG = /^[a-z0-9](?:[a-z0-9-]{0,58}[a-z0-9])?$/;

type Props = { params: { slug: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const result = SLUG.test(params.slug) ? await getEvent(params.slug) : null;
  if (result?.state !== "found") return { title: "Events" };
  return {
    title: `RSVP · ${result.event.name}`,
    description: `Reserve your place at ${result.event.name}, a CREDOM experience.`,
    alternates: { canonical: `/events/${result.event.slug}` },
  };
}

export default async function EventPage({ params }: Props) {
  if (!SLUG.test(params.slug)) notFound();
  const result = await getEvent(params.slug);
  if (result.state === "missing") notFound();

  if (result.state === "error") {
    return (
      <section className="bg-paper py-[clamp(56px,7vw,96px)]">
        <Container>
          <EventsEmptyState
            title="We couldn't load this event just now"
            actions={
              <Link
                href="/contact"
                className="inline-flex items-center rounded-btn border border-ink px-7 py-4 font-body text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-paper"
              >
                Get in touch
              </Link>
            }
          >
            Please refresh in a moment. If this keeps happening, let us know
            and we&apos;ll save your place.
          </EventsEmptyState>
        </Container>
      </section>
    );
  }

  const { event } = result;

  return (
    <section className="border-b border-line bg-white pb-[clamp(60px,8vw,100px)] pt-[clamp(48px,6vw,88px)]">
      <Container>
        <Link
          href="/events"
          className="mb-10 inline-flex items-center gap-2 text-[14px] font-semibold text-body-muted transition-colors hover:text-gold-deep"
        >
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5" /><path d="m12 19-7-7 7-7" /></svg>
          All events
        </Link>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(360px,100%),1fr))] items-start gap-[clamp(40px,6vw,80px)]">
          <div>
            <Eyebrow className="mb-5">You&apos;re invited</Eyebrow>
            <h1 className="m-0 mb-8 font-display text-[clamp(44px,6vw,80px)] font-extrabold leading-[0.95] tracking-[-0.02em] text-ink">
              {event.name}
            </h1>
            <dl className="m-0 flex flex-col gap-5">
              <Detail label="Date">{formatLongDate(event.startsAt, event.timezone)}</Detail>
              <Detail label="Time">{formatTime(event.startsAt, event.timezone)}</Detail>
              {event.venue && <Detail label="Venue">{event.venue}</Detail>}
            </dl>
            <p className="m-0 mt-8 max-w-[46ch] text-[17px] leading-[1.7] text-body-ink">
              RSVP here. Confirmed guests receive a personal pass by email
              ahead of the event; show its QR at the entrance and walk in.
            </p>
          </div>

          <div className="rounded-block bg-paper-2 p-[clamp(24px,4vw,48px)]">
            {event.availability === "open" && (
              <>
                <h2 className="m-0 mb-7 font-display text-[30px] font-bold text-ink">
                  Reserve your place
                </h2>
                <RsvpForm eventSlug={event.slug} />
              </>
            )}
            {event.availability === "closed" && (
              <Notice title="RSVPs are closed">
                Thank you for your interest. RSVPs for this event are no longer
                being accepted.
              </Notice>
            )}
            {event.availability === "full" && (
              <Notice title="This event is fully booked">
                We have reached capacity. If a place opens up, we&apos;ll be in
                touch.
              </Notice>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function Detail({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <dt className="mb-1 text-[12px] font-bold uppercase tracking-[0.18em] text-gold-deep">
        {label}
      </dt>
      <dd className="m-0 text-[18px] font-semibold text-ink">{children}</dd>
    </div>
  );
}

function Notice({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div role="status">
      <h2 className="m-0 mb-3 font-display text-[30px] font-bold text-ink">{title}</h2>
      <p className="m-0 text-[16px] leading-[1.6] text-body-ink">{children}</p>
    </div>
  );
}
