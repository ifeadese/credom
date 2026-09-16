import type { Metadata } from "next";
import CalEmbed from "@/components/CalEmbed";
import PageHero from "@/components/PageHero";
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
      >
        {/* Cal.com's inline embed (calendar + time picker, month view),
            mounted client-side by `components/CalEmbed.tsx`, in the hero's
            column below the intro. Cal.com sizes the frame to its content. */}
        <CalEmbed />
      </PageHero>
    </>
  );
}
