import type { Metadata } from "next";
import Container from "@/components/Container";
import Eyebrow from "@/components/Eyebrow";
import ContactForm from "@/components/ContactForm";
import { contactDetails } from "@/lib/content";

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

const sidebarLinkClass =
  "text-[17px] font-semibold text-ink transition-colors hover:text-gold-deep";

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-line bg-white pb-[clamp(60px,8vw,100px)] pt-[clamp(70px,9vw,120px)] text-ink">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-[0.2em] -right-[1vw] select-none font-display text-[clamp(180px,26vw,380px)] font-black leading-[0.8] tracking-[-0.04em] text-gold/[0.09]"
        >
          MAGIC
        </div>
        <Container className="relative">
          <Eyebrow className="mb-6">Let&apos;s Talk</Eyebrow>
          <h1 className="m-0 mb-[26px] font-display text-[clamp(76px,10.4vw,150px)] font-extrabold leading-[0.8] tracking-[-0.035em] text-ink">
            Let&apos;s Make
            <br />
            <span className="text-gold">MAGIC.</span>
          </h1>
          <p className="m-0 max-w-[560px] text-[19px] leading-[1.7] text-body-ink">
            Tell us about the moment you want to create. We&apos;ll bring the
            strategy, creativity, and seamless execution to make it happen.
          </p>
        </Container>
      </section>

      {/* BODY */}
      <section className="py-[clamp(70px,9vw,110px)]">
        <Container className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] items-start gap-[60px]">
          {/* Form */}
          <ContactForm />

          {/* Sidebar */}
          <aside className="rounded-block bg-paper-2 p-[clamp(24px,4vw,48px)]">
            <h2 className="m-0 mb-[30px] font-display text-[30px] font-bold text-ink">
              Reach us directly
            </h2>
            <div className="mb-7">
              <SidebarLabel>Email</SidebarLabel>
              <a href={`mailto:${contactDetails.email}`} className={sidebarLinkClass}>
                {contactDetails.email}
              </a>
            </div>
            <div className="mb-7">
              <SidebarLabel>Phone</SidebarLabel>
              <a href={contactDetails.phoneHref} className={sidebarLinkClass}>
                {contactDetails.phone}
              </a>
            </div>
            <div className="mb-7">
              <SidebarLabel>Location</SidebarLabel>
              <p className="m-0 text-[16px] leading-[1.7] text-body-ink">
                {contactDetails.location[0]}
                <br />
                {contactDetails.location[1]}
              </p>
            </div>
            <div className="border-t border-line-form pt-[26px]">
              <p className="m-0 font-display text-[22px] font-semibold italic leading-[1.4] text-gold-deep">
                We create moments people don&apos;t just attend; they remember.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
