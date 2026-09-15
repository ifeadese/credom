import Button from "./Button";
import Container from "./Container";
import Eyebrow from "./Eyebrow";
import ParallaxBackdrop from "./ParallaxBackdrop";

type CtaBandProps = {
  heading: React.ReactNode;
  /** Optional small uppercase label above the heading. */
  eyebrow?: string;
  /** Optional supporting paragraph between the heading and the button. */
  body?: React.ReactNode;
  /** `light`: white with a top hairline, gold button. `parallax`: the shared fixed photo under an ink tint, paper heading, transparent paper-outline button. */
  tone?: "light" | "parallax";
};

/** Reused closing CTA band: centered display heading + Schedule a Chat. */
export default function CtaBand({
  heading,
  eyebrow,
  body,
  tone = "light",
}: CtaBandProps) {
  const parallax = tone === "parallax";

  return (
    <section
      className={`py-[clamp(80px,10vw,120px)] text-center ${
        parallax ? "relative isolate" : "border-t border-line bg-white"
      }`}
    >
      {parallax && <ParallaxBackdrop />}
      <Container>
        <div className="mx-auto max-w-[900px]">
          {eyebrow && (
            <Eyebrow
              tone={parallax ? "gold" : "gold-deep"}
              className="mb-[18px]"
            >
              {eyebrow}
            </Eyebrow>
          )}
          <h2
            className={`m-0 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.94] tracking-[-0.02em] ${
              body ? "mb-6" : "mb-8"
            } ${parallax ? "text-paper" : "text-ink"}`}
          >
            {heading}
          </h2>
          {body && (
            <p
              className={`mx-auto mb-10 mt-0 max-w-[640px] text-[17px] leading-[1.7] md:text-[19px] ${
                parallax ? "text-on-dark-2" : "text-body-muted"
              }`}
            >
              {body}
            </p>
          )}
          {/* On the parallax photo the button is transparent (paper outline, like the hero's secondary); the light band keeps the solid gold */}
          <Button
            href="/schedule"
            size="lg"
            variant={parallax ? "outline-light" : "gold"}
          >
            Schedule a Chat
          </Button>
        </div>
      </Container>
    </section>
  );
}
