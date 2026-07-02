"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-[10px]">
      <div className="mx-auto flex max-w-content flex-wrap items-center justify-between gap-6 px-10 py-[18px]">
        <Logo asLink size={23} />

        <div className="flex flex-wrap items-center gap-x-[34px] gap-y-3">
          {links.map(({ href, label }) => {
            const active =
              href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                aria-current={active ? "page" : undefined}
                className="relative py-[6px] font-body text-sm font-semibold tracking-[0.04em] text-ink transition-colors hover:text-gold-deep"
              >
                {label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-[2px] h-[2px] bg-gold" />
                )}
              </Link>
            );
          })}

          <Link
            href="/contact"
            className="rounded-btn bg-gold px-[22px] py-[11px] font-body text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-90"
          >
            Schedule a Chat
          </Link>
        </div>
      </div>
    </nav>
  );
}
