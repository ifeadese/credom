import type { Metadata } from "next";
import Eyebrow from "@/components/Eyebrow";
import { services, serviceThemeClasses } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Our capabilities span the full spectrum of experiential marketing — strategy, activation, corporate events, traditional media, out-of-home, and digital.",
  alternates: { canonical: "/services" },
};

const anchorFor = (number: string) => `service-${number}`;

export default function ServicesPage() {
  return (
    <>
      {/* HEADER */}
      <section className="mx-auto max-w-content px-10 pb-[clamp(40px,5vw,70px)] pt-[clamp(70px,9vw,120px)]">
        <Eyebrow className="mb-[26px]">Our Services</Eyebrow>
        <p className="m-0 max-w-[1000px] font-display text-[clamp(28px,4.2vw,52px)] font-semibold italic leading-[1.16] tracking-[-0.01em] text-gold-deep">
          <span className="not-italic text-ink">
            Our capabilities span the full spectrum of experiential marketing.
          </span>{" "}
          Every service works independently or as part of a fully integrated
          campaign strategy.
        </p>

        {/* Jump index — straight to a service block */}
        <nav aria-label="Services on this page" className="mt-10 flex flex-wrap gap-[10px]">
          {services.map((service) => (
            <a
              key={service.number}
              href={`#${anchorFor(service.number)}`}
              className="inline-flex min-h-[44px] items-center gap-[10px] rounded-btn border border-line bg-white px-4 py-[10px] text-sm font-bold text-ink transition-colors hover:border-gold"
            >
              <span className="font-display text-base font-bold text-gold-deep">
                {service.number}
              </span>
              {service.title}
            </a>
          ))}
        </nav>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="mx-auto flex max-w-content flex-col gap-5 px-10 pb-[clamp(80px,10vw,120px)]">
        {services.map((service) => {
          const t = serviceThemeClasses[service.theme];
          return (
            <div
              key={service.number}
              id={anchorFor(service.number)}
              className={`grid scroll-mt-24 grid-cols-[repeat(auto-fit,minmax(min(280px,100%),1fr))] gap-8 rounded-block p-[clamp(40px,4vw,56px)] ${t.card}`}
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
                <p className={`m-0 max-w-[480px] text-[16px] leading-[1.65] ${t.body}`}>
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
    </>
  );
}
