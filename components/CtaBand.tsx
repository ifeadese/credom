import Button from "./Button";

/** Reused closing CTA band: white, top hairline, centered display heading + Schedule a Chat. */
export default function CtaBand({ heading }: { heading: React.ReactNode }) {
  return (
    <section className="border-t border-line bg-white px-10 py-[clamp(80px,10vw,120px)] text-center">
      <div className="mx-auto max-w-[900px]">
        <h2 className="m-0 mb-8 font-display text-[clamp(48px,6.1vw,88px)] font-extrabold leading-[0.94] tracking-[-0.02em] text-ink">
          {heading}
        </h2>
        <Button href="/contact" size="lg">
          Schedule a Chat
        </Button>
      </div>
    </section>
  );
}
