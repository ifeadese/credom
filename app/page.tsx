import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import Image from "next/image";
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

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-white text-ink">
        <div className="absolute right-0 top-0 h-full w-[44%] border-l border-line bg-paper-2 max-sm:hidden">
          <Image
            src="/images/hero-attention.jpg"
            alt="A man in sunglasses in front of a glowing sign at a live brand event"
            fill
            priority
            sizes="44vw"
            className="object-cover"
            style={{ objectPosition: "62% center" }}
          />
        </div>
        <div className="relative mx-auto max-w-content px-10 pb-[clamp(80px,11vw,140px)] pt-[clamp(80px,12vw,150px)]">
          {/* Cap the column so text never runs under the photo panel (56vw − left offset − gap). */}
          <div className="max-w-[760px] sm:max-w-[min(760px,56vw-84px)]">
            <Eyebrow className="mb-[26px] tracking-eyebrow-wide">
              Integrated Brand Experience Agency
            </Eyebrow>
            <h1 className="m-0 mb-6 font-display text-[clamp(52px,8.5vw,110px)] font-extrabold leading-[0.92] tracking-[-0.01em] text-ink">
              Attention
              <br />
              Is Earned.
            </h1>
            <p className="m-0 mb-7 font-display text-[clamp(22px,3vw,32px)] font-semibold text-gold-deep">
              Experience Makes It Last.
            </p>
            <p className="m-0 mb-10 max-w-[560px] text-[18px] leading-[1.7] text-body-ink">
              CREDOM transforms ideas into immersive activations, strategic
              experiences, and memorable brand moments designed to capture
              attention and leave lasting impact.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="/contact">Schedule a Chat</Button>
              <Button href="/services" variant="outline">
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="mx-auto max-w-content px-10 py-[clamp(80px,10vw,130px)]">
        <p className="m-0 max-w-[1000px] font-display text-[clamp(30px,4.6vw,58px)] font-semibold leading-[1.12] tracking-[-0.01em] text-ink">
          We create moments people don&apos;t just attend;{" "}
          <span className="text-gold">they remember.</span>
        </p>
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
          <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
            {services.map((service) => (
              <ServiceCard key={service.number} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* MOST MARKETING IS IGNORED */}
      <section className="overflow-hidden bg-gold py-[clamp(80px,11vw,140px)] text-paper">
        <div className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-[50px] px-10">
          <h2 className="m-0 font-display text-[clamp(48px,7vw,96px)] font-extrabold leading-[0.94] tracking-[-0.01em] text-white">
            Most
            <br />
            Marketing
            <br />
            Is Ignored.
          </h2>
          <div className="max-w-[440px]">
            <p className="m-0 mb-[22px] text-[19px] leading-[1.7] text-gold-soft">
              Consumers scroll past ads. Skip commercials. Forget campaigns.
            </p>
            <p className="m-0 text-[19px] font-semibold leading-[1.7] text-white">
              But experiences? Experiences create emotion, conversation, and
              memory. Brands that win today don&apos;t just market to people.
              They involve them.
            </p>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="mx-auto max-w-content px-10 py-[clamp(80px,10vw,120px)]">
        <div className="mb-[52px] max-w-[720px]">
          <Eyebrow className="mb-[14px]">Our Process &mdash; 4D1M</Eyebrow>
          <h2 className="m-0 mb-5 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink">
            How We Work
          </h2>
          <p className="m-0 text-[18px] leading-[1.7] text-body-muted">
            Great experiences don&apos;t happen by chance. Every campaign
            follows an intentional yet flexible process that takes ideas from
            insight to full-spectrum results.
          </p>
        </div>
        <div className="flex flex-col gap-[14px]">
          {processSteps.map((step) => (
            <div
              key={step.label}
              className={`grid grid-cols-1 items-center gap-2 rounded-card px-[38px] py-[30px] sm:grid-cols-[200px_1fr] sm:gap-6 ${
                step.highlight
                  ? "border border-gold bg-gold text-ink"
                  : "border border-line bg-white text-ink"
              }`}
            >
              <div className="flex items-center gap-[14px]">
                <span
                  className={`h-[10px] w-[10px] shrink-0 rounded-full ${
                    step.highlight ? "bg-ink" : stepDotClasses[step.label] ?? "bg-gold"
                  }`}
                />
                <h3 className="m-0 font-display text-[30px] font-bold">
                  {step.label}
                </h3>
              </div>
              <p
                className={`m-0 text-[16px] leading-[1.65] ${
                  step.highlight ? "opacity-[0.85]" : "text-body-muted"
                }`}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPANIES WE SERVED */}
      <section className="bg-paper-2 py-[clamp(80px,10vw,120px)]">
        <Container>
          <div className="mb-[52px] max-w-[720px]">
            <Eyebrow className="mb-[14px]">Companies We Served</Eyebrow>
            <h2 className="m-0 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink">
              Work that moved people.
            </h2>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-5">
            {caseStudies.map((study) => {
              const t = caseStudyThemeClasses[study.theme];
              return (
                <article
                  key={study.client}
                  className={`flex flex-col gap-[18px] rounded-block p-[clamp(40px,4vw,56px)] ${t.card}`}
                >
                  <span
                    className={`text-[12px] font-bold uppercase tracking-eyebrow ${t.category}`}
                  >
                    {study.category}
                  </span>
                  <h3 className="m-0 font-display text-[clamp(26px,2.8vw,36px)] font-bold leading-[1.1]">
                    {study.client}
                  </h3>
                  <p className={`m-0 text-[16px] leading-[1.7] ${t.body}`}>
                    {study.description}
                  </p>
                  <p className={`m-0 text-[15px] font-bold ${t.takeaway}`}>
                    {study.takeaway}
                  </p>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CLIENTS */}
      <section className="border-t border-line bg-white py-[clamp(70px,8vw,100px)] text-ink">
        <Container>
          <Eyebrow className="mb-[38px] text-center">
            Brands We&apos;ve Served
          </Eyebrow>
          <div className="flex flex-wrap items-center justify-center gap-x-16 gap-y-[14px]">
            {clients.map((name) => (
              <span
                key={name}
                className="font-display text-[clamp(24px,2.8vw,36px)] font-semibold text-ink"
              >
                {name}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand heading="Let's make something they'll remember." />
    </>
  );
}
