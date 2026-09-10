import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import {
  aboutIntro,
  principles,
  principleThemeClasses,
  team,
  whyChooseUs,
} from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "CREDOM is an integrated brand experience agency built to shape how people encounter, understand, and connect with brands across every touchpoint.",
  alternates: { canonical: "/about" },
};

const backdropClasses: Record<"gold" | "brown", string> = {
  gold: "bg-gold",
  brown: "bg-brown",
};

/** Bento layout for the five principle cards: three across, then two wide. */
const principleSpanClasses = ["md:col-span-2", "md:col-span-2", "md:col-span-2", "md:col-span-3", "md:col-span-3"];

export default function AboutPage() {
  return (
    <>
      {/* HERO — staggered headline stays pinned while the intro scrolls */}
      <section className="mx-auto max-w-content px-10 pb-[clamp(56px,6vw,90px)] pt-[clamp(72px,9vw,120px)]">
        <div className="grid grid-cols-1 items-start gap-9 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
          <h1 className="m-0 font-display text-[clamp(64px,8.6vw,124px)] font-extrabold leading-[0.84] tracking-[-0.035em] text-ink md:sticky md:top-[120px]">
            <span className="block">Bold.</span>
            <span className="block text-gold md:ml-[8%]">Strategic.</span>
            <span className="block md:ml-[16%]">Immersive.</span>
          </h1>
          <div className="flex max-w-[620px] flex-col gap-[22px]">
            <Eyebrow>About CREDOM</Eyebrow>
            {aboutIntro.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="m-0 text-[17px] leading-[1.75] text-body-ink"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* BELIEF QUOTE */}
      <section className="bg-paper-2 py-[clamp(72px,8vw,110px)]">
        <Container>
          <div className="mb-10 w-24 border-t border-gold" />
          <blockquote className="m-0 max-w-[1040px] font-display text-[clamp(32px,4vw,58px)] font-semibold italic leading-[1.12] tracking-[-0.01em] text-gold">
            &ldquo;We believe the most powerful brand experiences are not merely
            seen or attended, they are felt.&rdquo;
          </blockquote>
        </Container>
      </section>

      {/* VISION / MISSION */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        <div className="flex min-h-[440px] flex-col justify-between gap-7 bg-teal px-[clamp(20px,5vw,70px)] py-[clamp(56px,7vw,90px)] text-paper">
          <Eyebrow className="!text-paper opacity-85">Vision</Eyebrow>
          <div>
            <h2 className="m-0 max-w-[480px] font-display text-[clamp(38px,4vw,56px)] font-bold leading-[0.98] text-white">
              Redefine brand impact in Africa.
            </h2>
            <p className="m-0 mt-5 max-w-[480px] text-[18px] leading-[1.7] text-white opacity-[0.92]">
              To redefine brand impact in Africa through immersive experiences.
            </p>
          </div>
        </div>
        <div className="flex min-h-[440px] flex-col justify-between gap-7 bg-gold px-[clamp(20px,5vw,70px)] py-[clamp(56px,7vw,90px)] text-ink">
          <Eyebrow className="!text-brown">Mission</Eyebrow>
          <div>
            <h2 className="m-0 max-w-[480px] font-display text-[clamp(38px,4vw,56px)] font-bold leading-[0.98]">
              Connection that drives growth.
            </h2>
            <p className="m-0 mt-5 max-w-[480px] text-[18px] leading-[1.7]">
              Design and deliver integrated brand experiences that forge deep
              connections that drive engagement and generate measurable growth.
            </p>
            <p className="m-0 mt-[14px] max-w-[480px] text-[18px] leading-[1.7]">
              Lead with creative excellence and strategic precision across every
              market that transcends Africa.
            </p>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="border-b border-line bg-white">
        <div className="mx-auto max-w-content px-10 py-[clamp(72px,10vw,120px)]">
          <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-20">
            <h2 className="m-0 font-display text-[clamp(68px,8.9vw,128px)] font-extrabold leading-[0.8] tracking-[-0.035em] text-ink md:sticky md:top-[120px]">
              Why
              <br />
              choose
              <br />
              <span className="text-gold">us?</span>
            </h2>
            <div className="flex max-w-[620px] flex-col gap-[22px]">
              <Eyebrow>Why Us</Eyebrow>
              {whyChooseUs.paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="m-0 text-[17px] leading-[1.75] text-body-ink"
                >
                  {paragraph}
                </p>
              ))}
              <p className="m-0 mt-6 border-t border-line pt-[30px] font-display text-[clamp(26px,2.4vw,34px)] font-semibold italic leading-[1.2] text-gold-deep">
                {whyChooseUs.quote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="mx-auto max-w-content px-10 py-[clamp(72px,10vw,120px)]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow className="mb-[18px]">Our Principles</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(56px,7.2vw,104px)] font-extrabold leading-[0.86] tracking-[-0.03em] text-ink">
              Built on belief.
              <br />
              Driven by <span className="text-gold">principle.</span>
            </h2>
          </div>
          <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-body-muted">
            05 Principles
          </span>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-[14px] md:mt-16 md:grid-cols-6">
          {principles.map((p, i) => {
            const t = principleThemeClasses[p.theme];
            return (
              <div
                key={p.number}
                className={`flex flex-col justify-between gap-6 rounded-card p-[26px] md:min-h-[340px] md:p-8 ${t.card} ${principleSpanClasses[i]}`}
              >
                <span className={`block font-display text-[22px] font-bold ${t.number}`}>
                  {p.number}
                </span>
                <div>
                  <h3 className="m-0 font-display text-[28px] font-bold leading-[0.96] md:text-[34px]">
                    {p.title}
                  </h3>
                  <p className={`m-0 mt-3 max-w-[340px] text-[15px] leading-[1.6] ${t.body}`}>
                    {p.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-paper-2 py-[clamp(80px,10vw,120px)] text-ink">
        <Container>
          <div className="flex flex-col gap-[clamp(56px,8vw,96px)]">
            {team.map((member) => (
              <div
                key={member.name}
                className="grid grid-cols-1 items-center gap-[clamp(36px,6vw,72px)] md:grid-cols-[360px_minmax(0,1fr)]"
              >
                <div className="relative w-full max-w-[360px] pb-[20px] pl-[20px]">
                  <div
                    className={`absolute bottom-0 left-0 h-[calc(100%-20px)] w-[calc(100%-20px)] rounded-[2px] ${
                      backdropClasses[member.backdrop]
                    }`}
                  />
                  <Image
                    src={member.photo}
                    alt={`Portrait of ${member.name}`}
                    width={360}
                    height={424}
                    className="relative aspect-[312/367] w-full rounded-[2px] border border-line object-cover object-top"
                  />
                </div>
                <div className="max-w-[620px]">
                  {/* Doubles as the section's opener now that the "Meet the Force" headline is gone. */}
                  <span className="mb-[14px] block text-[14px] font-bold uppercase tracking-[0.2em] text-gold-deep">
                    Meet the {member.role}
                  </span>
                  <h2 className="m-0 font-display text-[clamp(40px,5.4vw,68px)] font-bold leading-[1.02] tracking-[-0.01em]">
                    {member.name}
                  </h2>
                  {member.bio.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="m-0 mt-[18px] text-[clamp(16px,1.5vw,18px)] leading-[1.8] text-body-muted"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
