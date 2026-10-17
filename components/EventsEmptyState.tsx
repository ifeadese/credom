/**
 * "No events yet" panel: a fanned stack of blank event passes with a gold
 * sparkle, then a heading, a line of copy and any actions passed as children.
 * The events app (events.credomlimited.com) home page carries a copy of this
 * component so the two empty states read as one product; keep them in step.
 */
export default function EventsEmptyState({
  title,
  children,
  actions,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col items-center gap-5 overflow-hidden rounded-card border border-line bg-white px-6 py-14 text-center sm:px-10 sm:py-[72px]">
      {/* Soft gold glow behind the illustration */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 h-56 w-56 -translate-x-1/2 rounded-full bg-gold-soft blur-3xl"
      />
      <PassStack className="relative h-auto w-[220px] sm:w-[260px]" />
      <h3 className="relative m-0 max-w-[22ch] font-display text-[28px] font-semibold leading-[1.1] text-ink sm:text-[34px]">
        {title}
      </h3>
      <p className="relative m-0 max-w-[48ch] text-[16px] leading-[1.6] text-body">{children}</p>
      {actions ? (
        <div className="relative mt-1 flex flex-col items-center gap-3 sm:flex-row">{actions}</div>
      ) : null}
    </div>
  );
}

function PassStack({ className }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 240 160" fill="none" className={className}>
      {/* Back passes, fanned */}
      <rect x="40" y="42" width="160" height="90" rx="6" transform="rotate(-9 120 87)" className="fill-paper-2 stroke-line" strokeWidth="1.5" />
      <rect x="40" y="42" width="160" height="90" rx="6" transform="rotate(6 120 87)" className="fill-paper stroke-line" strokeWidth="1.5" />

      {/* Front pass */}
      <rect x="36" y="38" width="168" height="92" rx="6" className="fill-white stroke-line" strokeWidth="1.5" />
      {/* Date tile, blank */}
      <rect x="50" y="52" width="46" height="62" rx="3" className="fill-paper-2" />
      <rect x="61" y="61" width="24" height="5" rx="2.5" className="fill-gold" opacity="0.7" />
      <rect x="60" y="76" width="26" height="24" rx="3" className="fill-line" />
      {/* Text lines */}
      <rect x="108" y="56" width="34" height="9" rx="4.5" className="fill-teal" opacity="0.85" />
      <rect x="108" y="74" width="42" height="8" rx="4" className="fill-ink" opacity="0.8" />
      <rect x="108" y="90" width="32" height="6" rx="3" className="fill-line" />
      <rect x="108" y="103" width="38" height="6" rx="3" className="fill-line" />
      {/* Perforation + QR stub */}
      <path d="M160 46v76" className="stroke-line" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round" />
      <g className="fill-ink" opacity="0.75">
        <rect x="170" y="62" width="9" height="9" rx="1.5" />
        <rect x="183" y="62" width="9" height="9" rx="1.5" />
        <rect x="170" y="75" width="9" height="9" rx="1.5" />
        <rect x="183" y="88" width="9" height="9" rx="1.5" />
        <rect x="170" y="88" width="4" height="4" rx="1" />
        <rect x="186" y="77" width="4" height="4" rx="1" />
      </g>

      {/* Sparkles */}
      <path d="M208 18c1.2 6.4 3.6 8.8 10 10-6.4 1.2-8.8 3.6-10 10-1.2-6.4-3.6-8.8-10-10 6.4-1.2 8.8-3.6 10-10Z" className="fill-gold" />
      <path d="M28 120c.7 3.6 2 5 5.6 5.6-3.6.7-4.9 2-5.6 5.6-.7-3.6-2-4.9-5.6-5.6 3.6-.6 4.9-2 5.6-5.6Z" className="fill-gold" opacity="0.6" />
      <circle cx="222" cy="52" r="2.5" className="fill-gold" opacity="0.5" />
    </svg>
  );
}
