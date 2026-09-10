"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Escape closes the drawer.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-[10px]">
      <div className="relative mx-auto max-w-content">
        {/* Bar */}
        <div className="flex items-center justify-between gap-3 px-4 py-[14px] min-[400px]:px-5 md:gap-6 md:px-10 md:py-[18px]">
          {/* Logo scales fluidly between 16px and 23px tall on narrow viewports */}
          <Logo
            asLink
            size={23}
            className="h-[clamp(16px,4.5vw,23px)] w-auto"
          />

          {/* Desktop links */}
          <div className="hidden items-center gap-x-[34px] md:flex">
            {links.map(({ href, label }) => {
              const active = isActive(href);
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
              className="shrink-0 whitespace-nowrap rounded-btn bg-gold px-[22px] py-[11px] font-body text-sm font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-90"
            >
              Schedule a Chat
            </Link>
          </div>

          {/* Mobile: CTA pill + hamburger */}
          <div className="flex shrink-0 items-center gap-2 min-[400px]:gap-3 md:hidden">
            <Link
              href="/contact"
              className="shrink-0 whitespace-nowrap rounded-btn bg-gold px-3 py-[9px] font-body text-xs font-bold tracking-[0.02em] text-ink transition-opacity hover:opacity-90 min-[400px]:px-[14px] min-[400px]:text-[13px]"
            >
              Schedule a Chat
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              className="relative z-50 flex h-10 w-10 cursor-pointer flex-col items-end justify-center gap-[7px] rounded-full"
            >
              <span
                className={`block h-[2px] origin-center rounded-full bg-ink transition-all duration-300 ease-in-out ${
                  open ? "w-7 translate-y-[4.5px] rotate-45" : "w-9"
                }`}
              />
              <span
                className={`block h-[2px] origin-center rounded-full bg-ink transition-all duration-300 ease-in-out ${
                  open ? "w-7 -translate-y-[4.5px] -rotate-45" : "w-7"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile drawer: expands beneath the bar and overlays the page */}
        <div
          id="mobile-nav"
          className={`absolute inset-x-0 top-full grid border-b border-line bg-paper/95 shadow-[0_12px_32px_rgba(32,29,27,0.10)] backdrop-blur-[10px] transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
            open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!open}
        >
          <div className="overflow-hidden">
            <div className="px-5 pb-5 pt-1">
              <div className="flex flex-col gap-3 border-t border-gold/40 pt-4">
                {links.map(({ href, label }) => {
                  const active = isActive(href);
                  return (
                    <Link
                      key={href}
                      href={href}
                      tabIndex={open ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      className={`rounded-xl px-3 py-2 text-left font-body text-base transition-colors hover:bg-gold/10 ${
                        active ? "font-bold text-ink" : "font-medium text-ink"
                      }`}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
