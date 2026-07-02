import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import CtaBand from "@/components/CtaBand";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import { principles, principleThemeClasses, team } from "@/lib/content";

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

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-content px-10 pb-[clamp(50px,6vw,80px)] pt-[clamp(70px,9vw,120px)]">
        <Eyebrow className="mb-[26px]">About CREDOM</Eyebrow>
        <h1 className="m-0 mb-10 font-display text-[clamp(56px,10vw,128px)] font-extrabold leading-[0.9] tracking-[-0.015em] text-ink">
          Bold.
          <br />
          Strategic.
          <br />
          Immersive.
        </h1>
        <div className="grid max-w-[960px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10">
          <p className="m-0 text-[17px] leading-[1.75] text-body-ink">
            We are an integrated brand experience agency built to shape how
            people encounter, understand, and connect with brands across every
            touchpoint. We unify strategy, creativity, and execution to design
            the full arc of a brand&apos;s presence &mdash; from immersive live
            experiences and cultural activations to out-of-home and media
            channels that extend reach.
          </p>
          <p className="m-0 text-[17px] leading-[1.75] text-body-ink">
            Every campaign is engineered with an insight-led strategy to
            resonate, inspire action, and leave a lasting imprint. We pair
            strategic rigour with creative excellence to ensure every brand
            interaction lands with precision and purpose.
          </p>
        </div>
      </section>

      {/* BELIEF QUOTE */}
      <section className="mx-auto max-w-content px-10 pb-[clamp(70px,9vw,110px)] pt-[clamp(40px,6vw,70px)]">
        <p className="m-0 max-w-[960px] font-display text-[clamp(30px,4.6vw,58px)] font-semibold italic leading-[1.14] tracking-[-0.01em] text-gold">
          We believe the most powerful brand experiences are not merely seen or
          attended, they are felt.
        </p>
      </section>

      {/* VISION / MISSION */}
      <section className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))]">
        <div className="bg-ink px-[clamp(40px,5vw,70px)] py-[clamp(56px,7vw,90px)] text-paper">
          <h2 className="m-0 mb-[22px] font-display text-[clamp(34px,4vw,48px)] font-bold text-gold">
            Vision
          </h2>
          <p className="m-0 max-w-[420px] text-[20px] leading-[1.65] text-on-dark-2">
            To redefine brand impact in Africa through immersive experiences.
          </p>
        </div>
        <div className="bg-gold px-[clamp(40px,5vw,70px)] py-[clamp(56px,7vw,90px)] text-ink">
          <h2 className="m-0 mb-[22px] font-display text-[clamp(34px,4vw,48px)] font-bold">
            Mission
          </h2>
          <p className="m-0 mb-4 max-w-[460px] text-[18px] leading-[1.7]">
            Design and deliver integrated brand experiences that forge deep
            connections that drive engagement and generate measurable growth.
          </p>
          <p className="m-0 max-w-[460px] text-[18px] leading-[1.7]">
            Lead with creative excellence and strategic precision across every
            market that transcends Africa.
          </p>
        </div>
      </section>

      {/* WHAT WE STAND FOR */}
      <section className="mx-auto max-w-content px-10 py-[clamp(80px,10vw,120px)]">
        <div className="mb-[52px] max-w-[680px]">
          <Eyebrow className="mb-[14px]">Our Principles</Eyebrow>
          <h2 className="m-0 mb-5 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink">
            What We Stand For
          </h2>
          <p className="m-0 text-[18px] leading-[1.7] text-body-muted">
            Every brand has a story worth experiencing, not just telling. These
            are the five principles that govern how we think, work, and deliver.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
          {principles.map((p) => {
            const t = principleThemeClasses[p.theme];
            return (
              <div
                key={p.number}
                className={`rounded-card px-8 py-9 ${t.card}`}
              >
                <span
                  className={`mb-[14px] block font-display text-[20px] font-bold ${t.number}`}
                >
                  {p.number}
                </span>
                <h3 className="mb-3 font-display text-[24px] font-bold">
                  {p.title}
                </h3>
                <p className={`m-0 text-[15px] leading-[1.65] ${t.body}`}>
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* MEET THE FORCE */}
      <section className="bg-ink py-[clamp(80px,10vw,120px)] text-paper">
        <Container>
          <Eyebrow tone="gold" className="mb-[14px]">
            Meet the Force
          </Eyebrow>
          <h2 className="m-0 mb-[52px] font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-paper">
            The people behind the moments.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-9">
            {team.map((member) => (
              <div key={member.name}>
                <div className="relative mb-7">
                  <div
                    className={`absolute left-[-14px] top-[14px] h-[230px] w-[200px] rounded-[2px] ${
                      backdropClasses[member.backdrop]
                    }`}
                  />
                  <ImagePlaceholder
                    label="Photo"
                    className="relative h-[250px] w-[220px] rounded-[2px] border border-ink-line bg-ink-hero"
                  />
                </div>
                <h3 className="m-0 mb-1 font-display text-[32px] font-bold">
                  {member.name}{" "}
                  <span className="text-[16px] font-semibold text-gold">
                    {member.role}
                  </span>
                </h3>
                <p className="m-0 mt-4 text-[15px] leading-[1.75] text-bio-muted">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand heading="Ready to be felt, not just seen?" />
    </>
  );
}
