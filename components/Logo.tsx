import Link from "next/link";

type LogoProps = {
  /** Font size of the wordmark in px (per spec: 23–24). */
  size?: number;
  /** Text color context. Dot + bar stay gold in both. */
  variant?: "light" | "dark";
  /** When true, renders as a Home link with an accessible label. */
  asLink?: boolean;
  className?: string;
};

/**
 * CREDOM wordmark: CRED + stacked gold dot/bar (the "O") + M.
 * Mulish 800, letter-spacing 0.04em. Ink on light bg, paper on dark.
 */
export default function Logo({
  size = 23,
  variant = "light",
  asLink = false,
  className = "",
}: LogoProps) {
  const textColor = variant === "dark" ? "text-paper" : "text-ink";

  const mark = (
    <span
      aria-hidden="true"
      className={`inline-flex items-center font-body font-extrabold tracking-[0.04em] ${textColor} ${className}`}
      style={{ fontSize: `${size}px` }}
    >
      CRED
      <span className="mx-[2px] inline-flex flex-col items-center">
        <span className="h-[15px] w-[15px] rounded-full bg-gold" />
        <span className="mt-[2px] h-[3px] w-[17px] rounded-[2px] bg-gold" />
      </span>
      M
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" aria-label="CREDOM — home" className="inline-flex items-center">
        {mark}
      </Link>
    );
  }

  return mark;
}
