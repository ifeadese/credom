import Button from "./Button";
import Container from "./Container";
import ParallaxBackdrop from "./ParallaxBackdrop";

type CtaBandProps = {
  heading: React.ReactNode;
  /** `light`: white with a top hairline, gold button. `parallax`: the shared fixed photo under an ink tint, paper heading, transparent paper-outline button. */
  tone?: "light" | "parallax";
};

/** Reused closing CTA band: centered display heading + Schedule a Chat. */
export default function CtaBand({ heading, tone = "light" }: CtaBandProps) {
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
          <h2
            className={`m-0 mb-8 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.94] tracking-[-0.02em] ${
              parallax ? "text-paper" : "text-ink"
            }`}
          >
            {heading}
          </h2>
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
