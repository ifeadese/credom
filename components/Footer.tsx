import Link from "next/link";
import Logo from "./Logo";

const exploreLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-[18px] block font-body text-xs font-bold uppercase tracking-eyebrow text-gold">
      {children}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink pb-10 pt-[70px] text-on-dark">
      <div className="mx-auto max-w-content px-10">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-11 border-b border-ink-line pb-[54px]">
          {/* Brand */}
          <div>
            <Logo size={24} variant="dark" />
          </div>

          {/* Explore */}
          <div>
            <ColumnHeading>Explore</ColumnHeading>
            <div className="flex flex-col gap-3">
              {exploreLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-[15px] text-on-dark transition-colors hover:text-paper"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div>
            <ColumnHeading>Visit</ColumnHeading>
            <p className="m-0 text-[15px] leading-[1.7] text-on-dark">
              Victoria Island,
              <br />
              Lagos, Nigeria.
            </p>
          </div>

          {/* Connect */}
          <div>
            <ColumnHeading>Connect</ColumnHeading>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:hello@credomlimited.com"
                className="text-[15px] text-on-dark transition-colors hover:text-paper"
              >
                hello@credomlimited.com
              </a>
              <a
                href="https://www.instagram.com/wearecredom"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[15px] text-on-dark transition-colors hover:text-paper"
              >
                Instagram — @wearecredom
              </a>
              <Link
                href="/contact#join-our-team"
                className="text-[15px] text-on-dark transition-colors hover:text-paper"
              >
                Join the team
              </Link>
              <Link
                href="/contact"
                className="text-[15px] font-bold text-gold transition-opacity hover:opacity-90"
              >
                Schedule a Chat &rarr;
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 pt-[26px]">
          <span className="text-[13px] text-muted-dark-2">
            &copy; 2026 CREDOM Limited. All rights reserved.
          </span>
          <span className="text-[13px] text-muted-dark-2">
            Redefining brand impact in Africa.
          </span>
        </div>
      </div>
    </footer>
  );
}
