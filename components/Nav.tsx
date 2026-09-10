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

/** Scroll distance after which the bar pins to the viewport and turns to glass. */
const PIN_AFTER = 24;

/**
 * Full-width header in the lighthouseottawa.com pattern — an edge-to-edge bar
 * flush with the top of the page, never a floating pill. At rest it is
 * `position:absolute` at the top of the document, transparent, and simply
 * scrolls away with the page. Once the visitor has scrolled past 24px it
 * becomes `position:fixed`, slides back in from above (400ms `nav-pin`), and
 * reads as glass: paper at 88%, 12px backdrop blur, a hairline bottom rule, and
 * slightly tighter vertical padding. No radius, no inset, no shadow.
 *
 * Over the Home hero the bar is transparent on ink, so its text is paper;
 * everywhere else, and whenever it is pinned or the drawer is open, it is ink.
 * Pages other than Home get a spacer so content starts below it.
 *
 * Horizontal alignment: the bar spans the viewport and its row is the same
 * 1240px column with the responsive page gutter as `Container`, so the logo sits
 * exactly on the content column's text edge.
 */
export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [pinned, setPinned] = useState(false);

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

  // Pinned (fixed + glass) state follows scroll position.
  useEffect(() => {
    const onScroll = () => setPinned(window.scrollY > PIN_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const overHero = pathname === "/";
  const glass = pinned || open;
  // Paper text only while transparent over the ink hero.
  const onDark = overHero && !glass;
  const textColor = onDark ? "text-paper" : "text-ink";
  const barColor = onDark ? "bg-paper" : "bg-ink";

  return (
    <>
      <nav
        className={`inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
          pinned
            ? "fixed animate-[nav-pin_0.4s_cubic-bezier(0.16,1,0.3,1)]"
            : "absolute"
        } ${
          glass
            ? "border-line bg-paper/[.88] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-content px-gutter">
          {/* Bar */}
          <div
            className={`flex items-center justify-between gap-3 transition-[padding] duration-300 md:gap-6 ${
              pinned ? "py-[10px] md:py-3" : "py-[14px] md:py-4"
            }`}
          >
            {/* Logo scales fluidly between 14px and 17px tall */}
            <Logo
              asLink
              size={17}
              variant={onDark ? "dark" : "light"}
              className="h-[clamp(14px,3.5vw,17px)] w-auto transition-colors duration-300"
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
                    className={`relative py-[6px] font-body text-sm font-semibold tracking-[0.04em] transition-colors duration-300 hover:text-gold ${textColor}`}
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
                  className={`block h-[2px] origin-center rounded-full transition-all duration-300 ease-in-out ${barColor} ${
                    open ? "w-7 translate-y-[4.5px] rotate-45" : "w-9"
                  }`}
                />
                <span
                  className={`block h-[2px] origin-center rounded-full transition-all duration-300 ease-in-out ${barColor} ${
                    open ? "w-7 -translate-y-[4.5px] -rotate-45" : "w-7"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Mobile drawer: expands inside the bar */}
          <div
            id="mobile-nav"
            className={`grid transition-[grid-template-rows] duration-300 ease-in-out md:hidden ${
              open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
            aria-hidden={!open}
          >
            <div className="overflow-hidden">
              <div className="pb-5 pt-1">
                <div className="flex flex-col gap-3 border-t border-gold/40 pt-4">
                  {links.map(({ href, label }) => {
                    const active = isActive(href);
                    return (
                      <Link
                        key={href}
                        href={href}
                        tabIndex={open ? 0 : -1}
                        aria-current={active ? "page" : undefined}
                        className={`rounded-xl px-3 py-2 text-left font-body text-base text-ink transition-colors hover:bg-gold/10 ${
                          active ? "font-bold" : "font-medium"
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

      {/* Home lets the hero run under the bar; every other page starts below it. */}
      {!overHero && <div aria-hidden="true" className="h-[76px]" />}
    </>
  );
}
