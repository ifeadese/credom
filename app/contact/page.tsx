import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about the moment you want to create. We'll bring the strategy, creativity, and seamless execution to make it happen.",
  alternates: { canonical: "/contact" },
};

function SidebarLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-2 block text-[12px] font-bold uppercase tracking-[0.18em] text-gold-deep">
      {children}
    </span>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink pb-[clamp(60px,8vw,100px)] pt-[clamp(70px,9vw,120px)] text-paper">
        <Container>
          <Eyebrow tone="gold" className="mb-6">
            Let&apos;s Talk
          </Eyebrow>
          <h1 className="m-0 mb-[26px] font-display text-[clamp(52px,9vw,120px)] font-extrabold leading-[0.9] tracking-[-0.015em] text-paper">
            From Insight
            <br />
            To Impact.
          </h1>
          <p className="m-0 max-w-[560px] text-[19px] leading-[1.7] text-on-dark">
            Tell us about the moment you want to create. We&apos;ll bring the
            strategy, creativity, and seamless execution to make it happen.
          </p>
        </Container>
      </section>

      {/* BODY */}
      <section className="mx-auto grid max-w-content grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-[60px] px-10 py-[clamp(70px,9vw,110px)]">
        {/* Form */}
        <ContactForm />

        {/* Sidebar */}
        <aside className="rounded-block bg-paper-2 p-[clamp(36px,4vw,48px)]">
          <h2 className="m-0 mb-[30px] font-display text-[30px] font-bold text-ink">
            Reach us directly
          </h2>
          <div className="mb-7">
            <SidebarLabel>Email</SidebarLabel>
            <a
              href="mailto:hello@credomlimited.com"
              className="text-[17px] font-semibold text-ink transition-colors hover:text-gold-deep"
            >
              hello@credomlimited.com
            </a>
          </div>
          <div className="mb-7">
            <SidebarLabel>Studio</SidebarLabel>
            <p className="m-0 text-[16px] leading-[1.7] text-body-ink">
              3 Jakande Crescent,
              <br />
              Victoria Island,
              <br />
              Lagos, Nigeria.
            </p>
          </div>
          <div className="border-t border-line-form pt-[26px]">
            <p className="m-0 font-display text-[22px] font-semibold italic leading-[1.4] text-gold">
              We create moments people don&apos;t just attend; they remember.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
}
