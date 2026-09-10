import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ScheduleEmbed from "@/components/ScheduleEmbed";
import { getCalendlyUrl } from "@/lib/calendly";
import { scheduleIntro } from "@/lib/content";

export const metadata: Metadata = {
  title: "Schedule a Chat",
  description:
    "Book a 30-minute chat with CREDOM about the moment you want to create. Pick a time that suits you and we'll take it from there.",
  alternates: { canonical: "/schedule" },
};

export default function SchedulePage() {
  const calendlyUrl = getCalendlyUrl();

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-white pb-[clamp(60px,8vw,100px)] pt-[clamp(70px,9vw,120px)] text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.2em] -right-[1vw] select-none font-display text-[clamp(180px,26vw,380px)] font-black leading-[0.8] tracking-[-0.04em] text-gold/[0.09]"
        >
          CHAT
        </div>
        <Container className="relative">
          <Eyebrow className="mb-6">Schedule a Chat</Eyebrow>
          <h1 className="m-0 mb-[26px] font-display text-[clamp(76px,10.4vw,150px)] font-extrabold leading-[0.8] tracking-[-0.035em] text-ink">
            Let&apos;s talk.
            <br />
            <span className="text-gold">Pick a time.</span>
          </h1>
          <p className="m-0 max-w-[560px] text-[19px] leading-[1.7] text-body-ink">
            {scheduleIntro}
          </p>
        </Container>
      </section>

      {/* BODY — the Calendly widget runs edge to edge; its own details panel carries the description */}
      <section className="bg-white">
        <ScheduleEmbed url={calendlyUrl} />
      </section>

    </>
  );
}
