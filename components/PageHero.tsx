import Container from "./Container";
import Eyebrow from "./Eyebrow";
import Watermark from "./Watermark";

type PageHeroProps = {
  eyebrow: React.ReactNode;
  /** Oversized word painted faintly across the bottom of the section. */
  watermark: string;
  /** Display heading; pass line breaks and the gold span inline. */
  heading: React.ReactNode;
  intro: React.ReactNode;
  /** Optional content set below the intro, inside the same column. */
  children?: React.ReactNode;
};

/**
 * Statement hero shared by Contact and Schedule: white, bottom hairline,
 * eyebrow → oversized Rokkitt H1 → intro paragraph, with a faint gold
 * watermark word spanning the section's full width along its bottom edge
 * (DESIGN_SPEC §3.4 / §3.5). Anything passed as children (Schedule's
 * booking embed) sits below the intro in the same column.
 */
export default function PageHero({
  eyebrow,
  watermark,
  heading,
  intro,
  children,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-white pb-[clamp(60px,8vw,100px)] pt-[clamp(70px,9vw,120px)] text-ink">
      <Watermark word={watermark} className="text-gold/[0.09]" />
      <Container className="relative">
        <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
        <h1 className="m-0 mb-[26px] font-display text-[clamp(76px,10.4vw,150px)] font-extrabold leading-[0.8] tracking-[-0.035em] text-ink">
          {heading}
        </h1>
        <p className="m-0 max-w-[560px] text-[19px] leading-[1.7] text-body-ink">
          {intro}
        </p>
        {children ? (
          <div className="mt-[clamp(40px,5vw,64px)]">{children}</div>
        ) : null}
      </Container>
    </section>
  );
}
