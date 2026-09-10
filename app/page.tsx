import Link from "next/link";
import Image from "next/image";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { services } from "@/lib/services";
import {
  processSteps,
  clients,
  caseStudies,
  caseStudyThemeClasses,
} from "@/lib/content";

/** Palette accent dot next to each (non-highlighted) 4D1M step label. */
const stepDotClasses: Record<string, string> = {
  Discover: "bg-gold",
  Design: "bg-magenta",
  Develop: "bg-teal",
  Deliver: "bg-brown",
};

const heroImage = {
  src: "/images/hero-attention.jpg",
  alt: "A man in sunglasses in front of a glowing sign at a live brand event",
};

export default function HomePage() {
  return (
    <>
      {/* HERO — ink surface; the photo is a 4:3 band above the copy on phones and a fading right-hand panel from sm up */}
      <section className="relative overflow-hidden bg-ink text-paper">
        <div className="relative aspect-[4/3] w-full sm:absolute sm:inset-y-0 sm:right-0 sm:aspect-auto sm:w-[72%]">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 640px) 72vw, 100vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
          />
          {/* Fade the photo into the ink ground: downwards on phones; a wide elliptical falloff (curved, gradual edge) plus a bottom fade on wider screens */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,29,27,0.78)_0%,rgba(32,29,27,0)_38%,#201D1B_100%)] sm:bg-[radial-gradient(ellipse_72%_78%_at_90%_50%,rgba(32,29,27,0)_0%,rgba(32,29,27,0.2)_40%,rgba(32,29,27,0.65)_66%,rgba(32,29,27,0.9)_86%,rgba(32,29,27,0.97)_100%),linear-gradient(180deg,rgba(32,29,27,0.1)_0%,rgba(32,29,27,0)_40%,rgba(32,29,27,0.7)_100%)]"
          />
        </div>
        {/* Hairline geometry from the original hero: two diagonal rules across the whole section and a gold ring on the right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 scale-[1.4] max-sm:hidden"
          style={{
            backgroundImage:
              "linear-gradient(130deg, transparent 30%, rgba(255,255,255,0.12) 30.12%, transparent 30.4%), linear-gradient(50deg, transparent 55%, rgba(255,255,255,0.08) 55.12%, transparent 55.4%)",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[8%] top-[12%] h-[640px] w-[640px] rounded-full border border-gold/25 max-md:hidden"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[calc(8%+96px)] top-[calc(12%+96px)] h-[448px] w-[448px] rounded-full border border-gold/10 max-md:hidden"
        />
        <div className="relative mx-auto flex w-full max-w-content flex-col justify-end px-10 pb-16 pt-4 sm:min-h-[820px] sm:pb-[88px] sm:pt-[140px]">
          <Eyebrow tone="gold">Integrated Brand Experience Agency</Eyebrow>
          <h1 className="m-0 mt-5 max-w-[1000px] font-display text-[clamp(50px,8.3vw,120px)] font-extrabold leading-[0.9] tracking-[-0.03em] text-paper sm:mt-7 sm:leading-[0.88]">
            We create moments people don&apos;t just attend;{" "}
            <span className="text-gold">they remember.</span>
          </h1>
          <div className="mt-7 flex flex-col items-start gap-7 sm:mt-14 md:flex-row md:items-end md:justify-between md:gap-10">
            <div>
              <div className="flex flex-wrap gap-[14px] max-sm:flex-col">
                <Button href="/contact" className="max-sm:w-full">
                  Schedule a Chat
                </Button>
                <Button
                  href="/services"
                  variant="outline-light"
                  className="max-sm:w-full"
                >
                  Explore Services
                </Button>
              </div>
            </div>
            <div className="hidden flex-col items-start gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-dark md:flex">
              Explore CREDOM
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-[22px] w-[22px] text-gold"
              >
                <path d="M12 5v14" />
                <path d="m6 13 6 6 6-6" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-paper py-[clamp(72px,10vw,120px)]">
        <Container>
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-[1.15fr_0.85fr] md:gap-20">
            <h2 className="m-0 font-display text-[clamp(60px,7.2vw,104px)] font-extrabold leading-[0.88] tracking-[-0.03em] text-ink">
              Attention
              <br />
              Is <span className="text-gold">Earned.</span>
              <br />
              Experience
              <br />
              Makes It Last.
            </h2>
            <div className="flex max-w-[480px] flex-col gap-[22px]">
              <p className="m-0 text-[18px] leading-[1.7] text-body-ink">
                From live activations to premium corporate experiences, we
                combine creativity, strategy, and seamless execution to help
                brands connect with people in meaningful ways.
              </p>
              <p className="m-0 text-[18px] font-bold leading-[1.7] text-ink">
                The strongest brand moments aren&apos;t simply communicated.
                They&apos;re experienced.
              </p>
              <Link
                href="/about"
                className="self-start border-b-2 border-gold pb-[2px] text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-70"
              >
                About CREDOM &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="bg-paper-2 py-[clamp(80px,10vw,120px)]">
        <Container>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow className="mb-[14px]">What We Do</Eyebrow>
              <h2 className="m-0 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink">
                Full-spectrum capability.
              </h2>
            </div>
            <Link
              href="/services"
              className="border-b-2 border-gold pb-1 text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-70"
            >
              All services &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-[18px]">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* MOST MARKETING IS IGNORED */}
      <section className="relative overflow-hidden bg-gold py-[clamp(80px,10vw,140px)] text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.3em] -right-[6vw] select-none font-display text-[clamp(170px,29vw,420px)] font-black leading-[0.8] tracking-[-0.04em] text-ink/[0.07] sm:-bottom-[0.15em] sm:-right-[2vw]"
        >
          CREDOM
        </div>
        <div className="relative mx-auto grid max-w-content grid-cols-1 items-center gap-8 px-10 md:grid-cols-[1.1fr_0.9fr] md:gap-[60px]">
          <h2 className="m-0 font-display text-[clamp(68px,8.9vw,128px)] font-extrabold leading-[0.82] tracking-[-0.035em] text-ink">
            <span className="mb-[30px] block font-body text-[12px] font-bold uppercase tracking-[0.18em] text-brown">
              Why experiences matter
            </span>
            Most
            <br />
            Marketing
            <br />
            Is <span className="text-brown">Ignored.</span>
          </h2>
          <div className="flex max-w-[460px] flex-col gap-5 text-[17px] leading-[1.7] md:text-[19px]">
            <p className="m-0 text-[#3F2A12]">
              Consumers scroll past ads. Skip commercials. Forget campaigns.
            </p>
            <p className="m-0 font-bold text-ink">
              But experiences? Experiences create emotion, conversation, and
              memory. Brands that win today don&apos;t just market to people.
              They involve them.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK — 4D1M */}
      <section className="bg-white py-[clamp(72px,10vw,120px)]">
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow className="mb-[18px]">Our Process &mdash; 4D1M</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(60px,7.8vw,112px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-ink">
              From Insight
              <br />
              To <span className="text-gold">Impact.</span>
            </h2>
            <p className="m-0 mt-6 text-[18px] leading-[1.7] text-body-muted">
              Great experiences don&apos;t happen by chance. Every campaign
              follows an intentional yet flexible process that takes ideas from
              insight to full-spectrum results.
            </p>
          </div>
          <div className="mt-11 border-t border-line md:mt-16">
            {processSteps.map((step) =>
              step.highlight ? (
                <article
                  key={step.label}
                  className="grid grid-cols-1 gap-[10px] rounded-card bg-gold px-5 py-7 text-ink md:-mx-7 md:grid-cols-[110px_260px_1fr] md:items-center md:gap-[30px] md:px-7 md:py-10"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-brown">
                    {step.number}
                  </span>
                  <h3 className="m-0 flex items-center gap-3 font-display text-[30px] font-bold leading-none md:text-[40px]">
                    <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-ink" />
                    {step.label}
                  </h3>
                  <p className="m-0 max-w-[620px] text-[16px] leading-[1.7] text-[#3F2A12]">
                    {step.description}
                  </p>
                </article>
              ) : (
                <article
                  key={step.label}
                  className="grid grid-cols-1 gap-[10px] border-b border-line py-7 md:grid-cols-[110px_260px_1fr] md:items-center md:gap-[30px] md:py-10"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-gold-deep">
                    {step.number}
                  </span>
                  <h3 className="m-0 flex items-center gap-3 font-display text-[30px] font-bold leading-none text-ink md:text-[40px]">
                    <span
                      className={`h-[10px] w-[10px] shrink-0 rounded-full ${
                        stepDotClasses[step.label] ?? "bg-gold"
                      }`}
                    />
                    {step.label}
                  </h3>
                  <p className="m-0 max-w-[620px] text-[16px] leading-[1.7] text-body-muted">
                    {step.description}
                  </p>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      {/* WHAT WE'VE DONE — the case study carries the section heading; the client roster closes as a rail */}
      <section className="flex flex-col bg-paper-2 py-[clamp(80px,10vw,120px)]">
        <Container>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
            {caseStudies.map((study) => {
              const t = caseStudyThemeClasses[study.theme];
              return (
                <article
                  key={study.client}
                  className="grid items-center gap-8 md:grid-cols-[minmax(280px,2fr)_3fr] md:gap-14"
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-block">
                    <Image
                      src={study.image.src}
                      alt={study.image.alt}
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {/* Copy sits directly on the section background — no card behind it */}
                  <div className="flex flex-col gap-[18px] text-ink">
                    {/* Section heading lives inside the copy column, beside the image */}
                    <Eyebrow>What we&apos;ve done</Eyebrow>
                    <h2 className="m-0 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink">
                      {study.category}
                    </h2>
                    {study.description.map((paragraph) => (
                      <p
                        key={paragraph}
                        className={`m-0 text-[16px] leading-[1.7] ${t.body}`}
                      >
                        {paragraph}
                      </p>
                    ))}
                    <p className={`m-0 text-[15px] font-bold ${t.takeaway}`}>
                      {study.takeaway}
                    </p>
                    <div className="mt-2">
                      <Button href={study.href} variant={t.button}>
                        Read more
                      </Button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>

        {/*
          Roster closes the section: one logo per row on mobile, reflowing into a
          hairline rail from md up where three logos fit one line.
        */}
        <Container className="mt-12 md:mt-14">
          <Eyebrow className="mb-[14px]">Businesses we&apos;ve served</Eyebrow>
          <div className="[--logo-h:30px] md:flex md:items-center md:justify-start md:gap-10 md:border-y md:border-line md:py-[26px] md:[--logo-h:clamp(30px,2.5vw,36px)]">
            <div className="flex flex-col md:flex-row md:items-center md:gap-14">
              {clients.map((client, i) => (
                <div
                  key={client.name}
                  className={`flex items-center justify-start py-4 md:py-0 ${
                    i < clients.length - 1
                      ? "border-b border-line md:border-b-0"
                      : ""
                  }`}
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="w-auto"
                    style={{ height: `calc(var(--logo-h) * ${client.scale})` }}
                  />
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand
        heading={
          <>
            Let&apos;s make something they&apos;ll{" "}
            <span className="text-gold">remember.</span>
          </>
        }
      />
    </>
  );
}
