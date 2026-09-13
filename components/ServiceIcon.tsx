import type { ServiceIconName } from "@/lib/services";

/**
 * One line icon per service, drawn on a shared 24px grid with the same
 * 1.5px round-capped stroke so the set reads as a family. Colour comes from
 * `currentColor`; decorative (the card title names the service).
 */
export default function ServiceIcon({
  name,
  className = "",
}: {
  name: ServiceIconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

const paths: Record<ServiceIconName, React.ReactNode> = {
  /* Brand Experience Strategy — compass: direction set before anything moves */
  strategy: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),
  /* Experiential Marketing & Activation — sparks: a moment switched on */
  activation: (
    <>
      <path d="M10 3l1.8 5.2L17 10l-5.2 1.8L10 17l-1.8-5.2L3 10l5.2-1.8z" />
      <path d="M18 14l.8 2.2L21 17l-2.2.8L18 20l-.8-2.2L15 17l2.2-.8z" />
      <path d="M18 3v3M16.5 4.5h3" />
    </>
  ),
  /* Corporate Events & Experiences — calendar with a starred date */
  events: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
      <path d="M12 12.5l.9 1.9 2.1.3-1.5 1.4.4 2.1-1.9-1-1.9 1 .4-2.1-1.5-1.4 2.1-.3z" />
    </>
  ),
  /* Traditional Media — television set with antenna */
  broadcast: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8 3l4 4 4-4" />
    </>
  ),
  /* Out-of-Home — roadside billboard on two posts */
  billboard: (
    <>
      <rect x="3" y="3.5" width="18" height="10" rx="1" />
      <path d="M7 7.5h6M7 10h4" />
      <path d="M8 13.5V21M16 13.5V21M5 21h14" />
    </>
  ),
  /* Digital Marketing — screen with a cursor click */
  digital: (
    <>
      <rect x="2.5" y="4" width="19" height="13" rx="2" />
      <path d="M9 21h6M12 17v4" />
      <path d="M10 7.5l5 2.2-2.1.8-.8 2.1z" />
    </>
  ),
};
