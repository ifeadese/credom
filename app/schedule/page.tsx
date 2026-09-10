import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { buildCalendlyEmbedUrl } from "@/lib/calendly";
import { scheduleIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schedule a Chat",
  description:
    "Book a 30-minute chat with CREDOM about the moment you want to create. Pick a time that suits you and we'll take it from there.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  return (
    <>
      <PageHero
        eyebrow="Schedule a Chat"
        watermark="CHAT"
        heading={
          <>
            Let&apos;s talk.
            <br />
            <span className="text-gold">Pick a time.</span>
          </>
        }
        intro={scheduleIntro}
      />

      {/* BODY — Calendly's calendar + time picker, server-rendered as a plain
          iframe and run edge to edge. Event details and landing-page chrome
          are hidden; the event description lives on Calendly and reaches
          invitees on the booking step and in the confirmation email. */}
      <section className="bg-white">
        <iframe
          src={buildCalendlyEmbedUrl()}
          title="Schedule a Chat"
          className="h-[900px] w-full bg-white sm:h-[720px]"
        />
      </section>
    </>
  );
}
