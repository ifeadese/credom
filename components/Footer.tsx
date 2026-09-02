/**
 * Footer contact icons: 18px, drawn in currentColor so they inherit the
 * enclosing link's hover transition. The links are icon-only, so each one
 * carries its own aria-label -- these SVGs stay decorative.
 */
const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
  className: "h-[18px] w-[18px]",
} as const;

function MailIcon() {
  return (
    <svg {...iconProps}>
      <rect x="2.5" y="4.75" width="19" height="14.5" rx="2.5" />
      <path d="m3.5 7 7.6 5.3a1.6 1.6 0 0 0 1.8 0L20.5 7" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg {...iconProps}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

/** Outlined square that holds one icon-only link. */
const iconLinkClasses =
  "inline-flex h-10 w-10 items-center justify-center rounded-btn border border-line text-body-ink transition-colors hover:border-gold-deep hover:text-gold-deep";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper py-8 text-body-ink">
      <div className="mx-auto flex max-w-content flex-col items-center gap-4 px-10 text-center min-[480px]:flex-row min-[480px]:justify-between min-[480px]:text-left">
        <span className="text-[13px] text-body-muted">
          &copy; 2026 CREDOM Limited. All rights reserved.
        </span>
        <div className="flex gap-3">
          <a
            href="mailto:hello@credomlimited.com"
            aria-label="Email hello@credomlimited.com"
            className={iconLinkClasses}
          >
            <MailIcon />
          </a>
          <a
            href="https://www.instagram.com/wearecredom"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="CREDOM on Instagram — @wearecredom"
            className={iconLinkClasses}
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </footer>
  );
}
