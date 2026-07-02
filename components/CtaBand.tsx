import Button from "./Button";

/** Reused closing CTA band: paper-2 bg, centered heading + Schedule a Chat. */
export default function CtaBand({ heading }: { heading: string }) {
  return (
    <section className="bg-paper-2 px-10 py-[clamp(80px,10vw,120px)] text-center">
      <div className="mx-auto max-w-[820px]">
        <h2 className="m-0 mb-[26px] font-display text-[clamp(40px,6vw,80px)] font-extrabold leading-[0.98] tracking-[-0.01em] text-ink">
          {heading}
        </h2>
        <Button href="/contact" size="lg">
          Schedule a Chat
        </Button>
      </div>
    </section>
  );
}
