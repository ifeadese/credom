import Link from "next/link";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import Button from "@/components/Button";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import VideoSwiper from "@/components/VideoSwiper";
import LogoMarquee from "@/components/LogoMarquee";
import Watermark from "@/components/Watermark";
import ParallaxBackdrop from "@/components/ParallaxBackdrop";
import { services } from "@/lib/services";
import {
  processSteps,
  clients,
  caseStudies,
  caseStudyThemeClasses,
} from "@/lib/content";

/** Palette accent dot next to each (non-highlighted) 4D1M step label. Deliver takes brown's light tint: brown itself vanishes on the dark parallax. */
const stepDotClasses: Record<string, string> = {
  Discover: "bg-gold",
  Design: "bg-magenta",
  Develop: "bg-teal",
  Deliver: "bg-on-brown",
};

export default function HomePage() {
  /* Home shows one case study; the section heading is part of its copy. */
  const study = caseStudies[0];
  const studyTheme = caseStudyThemeClasses[study.theme];

  return (
    <>
      {/*
        HERO — ink surface over the shared parallax photo in greyscale (the
        same fixed layer as the dark sections below, lightly tinted), so the
        photo stays put on scroll and its colour is revealed at What we've
        done. On phones the photo runs behind the whole hero (the 4:3 band
        above the copy is empty space that shows it); from sm up it is a
        fading right-hand panel.
      */}
      <section className="relative isolate overflow-hidden bg-ink text-paper">
        <ParallaxBackdrop grayscale priority tintClassName="bg-ink/45" />
        {/* Phones: the photo runs behind the whole hero; a top fade for the nav and a gradual darkening behind the copy keep the text legible without hiding the image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(32,29,27,0.6)_0%,rgba(32,29,27,0)_16%,rgba(32,29,27,0.6)_34%,rgba(32,29,27,0.72)_100%)] sm:hidden"
        />
        <div className="relative aspect-[4/3] w-full sm:absolute sm:inset-0 sm:aspect-auto sm:w-full">
          {/* From sm up: a wide elliptical falloff (curved, gradual edge) plus a bottom fade, so the photo reads as a right-hand panel */}
          <div
            aria-hidden="true"
            className="absolute inset-0 max-sm:hidden sm:bg-[radial-gradient(ellipse_56%_82%_at_80%_50%,rgba(32,29,27,0)_0%,rgba(32,29,27,0.2)_40%,rgba(32,29,27,0.65)_66%,rgba(32,29,27,0.9)_86%,theme(colors.ink)_100%),linear-gradient(180deg,rgba(32,29,27,0.1)_0%,rgba(32,29,27,0)_40%,rgba(32,29,27,0.7)_100%)]"
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
        <Container className="relative flex flex-col justify-end pb-16 pt-4 sm:min-h-[820px] sm:pb-[88px] sm:pt-[140px]">
          <Eyebrow tone="gold">Integrated Brand Experience Agency</Eyebrow>
          <h1 className="m-0 mt-5 max-w-[1000px] font-display text-[clamp(50px,8.3vw,120px)] font-extrabold leading-[0.9] tracking-[-0.03em] text-paper sm:mt-7 sm:leading-[0.88]">
            We create moments people don&apos;t just attend;{" "}
            <span className="text-gold">they remember.</span>
          </h1>
          <div className="mt-7 sm:mt-14">
            <div>
              <div className="flex flex-wrap gap-[14px] max-sm:flex-col">
                <Button href="/schedule" className="max-sm:w-full">
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
          </div>
        </Container>
      </section>

      {/*
        WHO WE ARE + WHAT WE DO — one section on a vertical gradient from paper
        (top, behind the statement) to paper-2 (bottom, behind the service
        cards), so the two parts blend with no seam. Equal top and bottom
        padding (clamp(36px,5vw,60px)), with a tight clamp(32px,4.5vw,56px)
        gap between the right-aligned About CREDOM button and the services
        header.

        Intro: who CREDOM is, in one short, large statement distilled from the
        About page (intro + vision), no eyebrow. Muted regular-weight Rokkitt with the
        definition lifted to ink and the vision in gold-deep (gold-deep, not
        gold, so the accent still clears 3:1 on paper), then About CREDOM.
      */}
      <section className="bg-gradient-to-b from-paper to-paper-2 py-[clamp(36px,5vw,60px)]">
        <Container>
          <p className="m-0 max-w-[1120px] font-display text-[clamp(30px,3.9vw,54px)] font-normal leading-[1.14] tracking-[-0.01em] text-body-muted">
            <span className="text-ink">
              CREDOM is an integrated brand experience agency.
            </span>{" "}
            We unify strategy, creativity and execution to shape how people
            connect with brands, and to{" "}
            <span className="text-gold-deep">
              redefine brand impact in Africa.
            </span>
          </p>
          {/* Secondary action: gold-underlined text link, styled and right-aligned like All services below */}
          <div className="mt-10 flex justify-end md:mt-12">
            <Link
              href="/about"
              className="border-b-2 border-gold pb-1 text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-70"
            >
              About CREDOM &rarr;
            </Link>
          </div>

          {/* Services preview. ml-auto keeps All services right-aligned even when it wraps under the heading on phones */}
          <div className="mb-8 mt-[clamp(32px,4.5vw,56px)] flex flex-wrap items-end justify-between gap-6 md:mb-10">
            <div>
              <Eyebrow className="mb-[18px]">What We Do</Eyebrow>
              {/* Same type as the other display headings ("From Insight / To Impact."). "Full-Spectrum" never breaks at its hyphen: below sm the size eases down just enough (the word is ~5.9em wide) to keep it on one line in the column */}
              <h2 className="m-0 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-ink max-sm:text-[min(48px,calc((100vw-40px)/6))]">
                <span className="whitespace-nowrap">Full-Spectrum</span>
                <br />
                <span className="text-gold">Capability.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="ml-auto border-b-2 border-gold pb-1 text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-70"
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

      {/*
        WHAT WE'VE DONE — the case study on the shared fixed parallax photo
        (ParallaxBackdrop; also behind How We Work and the closing CTA), right
        after the Who we are + What We Do section. Above the card, gold on the photo, the
        "What we've done" eyebrow over the section H2 "Work That / Moved People."
        (same type and two-line break as the 4D1M heading, "People." in gold)
        and a short description set like the 4D1M intro, 24px above the card
        (32px from md). Below it the split card, inset in
        the column in the service-card shape (radius 3, 1px gold border at 40%
        framing reel and copy, no shadow, `overflow-hidden` so the reel follows
        the corners; paper-2 surface). The reel fills the left cell flush to
        the card's edges, the copy sits on the right. Stacks below 800px — an
        explicit breakpoint rather than auto-fit, so the grid and the reel's
        aspect ratio switch together. The copy opens with the study's category
        as H3. One study today; a second
        would need its own treatment rather than a repeat of this block.
      */}
      <section className="relative isolate py-[clamp(72px,10vw,120px)]">
        <ParallaxBackdrop />
        <Container>
          <div className="mb-6 md:mb-8">
            <Eyebrow tone="gold" className="mb-[18px]">
              What we&apos;ve done
            </Eyebrow>
            {/* Same type as the 4D1M heading ("From Insight To Impact.") */}
            <h2 className="m-0 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-paper">
              Work That
              <br />
              Moved <span className="text-gold">People.</span>
            </h2>
            {/* Same treatment as the 4D1M intro paragraph */}
            <p className="m-0 mt-6 max-w-[760px] text-[18px] leading-[1.7] text-on-dark">
              From immersive activations to corporate events, these are brand
              experiences we&apos;ve designed and delivered end to end, each one
              built to be felt, not just seen, and remembered long after the
              day.
            </p>
          </div>
          <div className="grid grid-cols-1 overflow-hidden rounded-card border border-gold/40 bg-paper-2 min-[800px]:grid-cols-2">
            {/* Portrait clips: a 4:5 band when stacked, full cell height side by side */}
            <div className="relative aspect-[4/5] min-[800px]:aspect-auto min-[800px]:min-h-[560px]">
              {/* absolute wrapper: Safari mis-sizes percentage heights inside aspect-ratio boxes */}
              <div className="absolute inset-0">
                <VideoSwiper
                  videos={study.videos}
                  title={`${study.category} highlights`}
                />
              </div>
            </div>
            {/* Copy on the card surface; padding is ServiceCard's scaled up for the larger card */}
            <div className="flex flex-col justify-center px-6 py-10 text-ink sm:px-12 sm:py-14 lg:px-16 lg:py-20">
              {/* max-width only bites when the split is stacked and the copy has the full width */}
              <div className="flex max-w-[560px] flex-col gap-[18px]">
                {/* Card-sized heading: the half-width cell cannot hold the 4D1M display size; balanced so no line starts on "- Lagos" */}
                <h3 className="m-0 font-display text-[clamp(38px,5vw,64px)] font-bold leading-none tracking-[-0.01em] text-ink [text-wrap:balance]">
                  {study.category}
                </h3>
                {study.description.map((paragraph) => (
                  <p
                    key={paragraph}
                    className={`m-0 text-[16px] leading-[1.7] ${studyTheme.body}`}
                  >
                    {paragraph}
                  </p>
                ))}
                <p className={`m-0 text-[15px] font-bold ${studyTheme.takeaway}`}>
                  {study.takeaway}
                </p>
                <div className="mt-2">
                  <Button href={study.href} variant={studyTheme.button}>
                    Read more
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/*
        BUSINESSES WE'VE SERVED — its own section, kept tight: eyebrow on the
        left, client logos sliding past in a marquee on the right, one row.
        Below sm only the marquee shows, edge to edge; the eyebrow stays for
        screen readers (sr-only) so the logos keep their label. Sits between
        the two parallax sections (What we've done above, How We Work below),
        sliding over the shared fixed photo. Two inner
        hairlines, inset from the band's top and bottom edges, frame the row;
        below sm they run edge to edge with the marquee.
      */}
      <section className="bg-paper-2 py-[clamp(12px,1.5vw,18px)]">
        <Container>
          <div className="flex items-center gap-10 border-y border-line-form py-[clamp(28px,3.5vw,46px)] [--logo-h:30px] max-sm:-mx-gutter max-sm:flex-col max-sm:px-gutter md:[--logo-h:clamp(30px,2.5vw,36px)]">
            <Eyebrow className="shrink-0 max-sm:sr-only">Businesses we&apos;ve served</Eyebrow>
            <LogoMarquee logos={clients} className="min-w-0 max-sm:-mx-gutter max-sm:self-stretch sm:flex-1" />
          </div>
        </Container>
      </section>

      {/*
        HOW WE WORK — 4D1M, on the same fixed parallax photo as What we've done
        (above the logo band) and the closing CTA band (after the gold band
        below), so its type is set light: paper headings,
        on-dark body. Steps are glass cards (paper at 6%, blurred photo behind,
        paper hairline border; the -webkit- blur is spelled out because the
        build emits no prefix and Safari before 18 needs it). The Measure card
        is a light gold tint of the same glass (gold at 20%, same blur, gold/60
        border) with light type: gold-soft number (plain gold fell to 3.3:1 on
        the tint), gold dot, paper heading, on-dark-2 description.
      */}
      <section className="relative isolate py-[clamp(72px,10vw,120px)]">
        <ParallaxBackdrop />
        <Container>
          <div className="max-w-[760px]">
            <Eyebrow tone="gold" className="mb-[18px]">
              Our Process &mdash; 4D1M
            </Eyebrow>
            <h2 className="m-0 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-paper">
              From Insight
              <br />
              To <span className="text-gold">Impact.</span>
            </h2>
            <p className="m-0 mt-6 text-[18px] leading-[1.7] text-on-dark">
              Great experiences don&apos;t happen by chance. Every campaign
              follows an intentional yet flexible process that takes ideas from
              insight to full-spectrum results.
            </p>
          </div>
          {/* Steps as a stack of cards: glass over the parallax photo, the Measure step solid gold; same padding so every card's content shares one rail */}
          <div className="mt-11 flex flex-col gap-[14px] md:mt-16">
            {processSteps.map((step) =>
              step.highlight ? (
                <article
                  key={step.label}
                  className="grid grid-cols-1 gap-[10px] rounded-card border border-gold/60 bg-gold/20 px-5 py-7 text-paper backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] md:grid-cols-[110px_260px_1fr] md:items-center md:gap-[30px] md:px-7 md:py-10"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-gold-soft">
                    {step.number}
                  </span>
                  <h3 className="m-0 flex items-center gap-3 font-display text-[30px] font-bold leading-none md:text-[40px]">
                    <span className="h-[10px] w-[10px] shrink-0 rounded-full bg-gold" />
                    {step.label}
                  </h3>
                  <p className="m-0 max-w-[620px] text-[16px] leading-[1.7] text-on-dark-2">
                    {step.description}
                  </p>
                </article>
              ) : (
                <article
                  key={step.label}
                  className="grid grid-cols-1 gap-[10px] rounded-card border border-paper/10 bg-paper/[0.06] px-5 py-7 backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] md:grid-cols-[110px_260px_1fr] md:items-center md:gap-[30px] md:px-7 md:py-10"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.15em] text-gold">
                    {step.number}
                  </span>
                  <h3 className="m-0 flex items-center gap-3 font-display text-[30px] font-bold leading-none text-paper md:text-[40px]">
                    <span
                      className={`h-[10px] w-[10px] shrink-0 rounded-full ${
                        stepDotClasses[step.label] ?? "bg-gold"
                      }`}
                    />
                    {step.label}
                  </h3>
                  <p className="m-0 max-w-[620px] text-[16px] leading-[1.7] text-on-dark-2">
                    {step.description}
                  </p>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      {/*
        MOST MARKETING IS IGNORED — gold band between How We Work and the
        closing CTA. On gold only the dark service colours hold contrast
        (ink 6.9:1, ink-2 6.1:1, brown 4.8:1; teal and magenta fall to ~2:1),
        so: brown label and "Ignored.", ink heading and bold paragraph, ink-2
        lead paragraph, and teal kept for the decorative CREDOM watermark.
      */}
      <section className="relative overflow-hidden bg-gold py-[clamp(80px,10vw,140px)] text-ink">
        <Watermark word="CREDOM" className="text-teal/[0.14]" />
        <Container className="relative grid grid-cols-1 items-center gap-8 md:grid-cols-[1.1fr_0.9fr] md:gap-[60px]">
          <h2 className="m-0 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.85] tracking-[-0.03em] text-ink">
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
            <p className="m-0 text-ink-2">
              Consumers scroll past ads. Skip commercials. Forget campaigns.
            </p>
            <p className="m-0 font-bold text-ink">
              But experiences? Experiences create emotion, conversation, and
              memory. Brands that win today don&apos;t just market to people.
              They involve them.
            </p>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <CtaBand
        tone="parallax"
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
