import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import CtaBand from "@/components/CtaBand";
import { services, serviceThemeClasses } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our capabilities span the full spectrum of experiential marketing — strategy, activation, corporate events, traditional media, out-of-home, and digital.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="mx-auto max-w-content px-10 pb-[clamp(40px,5vw,70px)] pt-[clamp(70px,9vw,120px)]">
        <Eyebrow className="mb-[26px]">Our Services</Eyebrow>
        <p className="m-0 max-w-[1000px] font-display text-[clamp(28px,4.2vw,52px)] font-semibold italic leading-[1.16] tracking-[-0.01em] text-gold">
          <span className="not-italic text-ink">
            Our capabilities span the full spectrum of experiential marketing.
          </span>{" "}
          Every service works independently or as part of a fully integrated
          campaign strategy.
        </p>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="mx-auto flex max-w-content flex-col gap-5 px-10 pb-[clamp(80px,10vw,120px)]">
        {services.map((service) => {
          const t = serviceThemeClasses[service.theme];
          return (
            <div
              key={service.number}
              className={`grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-8 rounded-block p-[clamp(40px,4vw,56px)] ${t.card}`}
            >
              <div>
                <span
                  className={`mb-3 block font-display text-[22px] font-bold ${t.number}`}
                >
                  {service.number}
                </span>
                <h3 className="mb-4 font-display text-[clamp(28px,3vw,38px)] font-bold leading-[1.05]">
                  {service.title}
                </h3>
                <p className={`m-0 text-[16px] leading-[1.65] ${t.body}`}>
                  {service.description}
                </p>
              </div>
              <ul className="m-0 flex list-none flex-col gap-3 self-center p-0">
                {service.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className={`relative pl-[18px] text-[16px] ${t.listText}`}
                  >
                    <span
                      className={`absolute left-0 top-[9px] h-[6px] w-[6px] rounded-full ${t.bullet}`}
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <CtaBand heading="One channel or all of them." />
    </>
  );
}
