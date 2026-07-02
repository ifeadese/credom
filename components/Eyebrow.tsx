type EyebrowProps = {
  children: React.ReactNode;
  /** gold (#D89A2E) on dark bg, gold-deep (#B87D1E) on light bg. */
  tone?: "gold" | "gold-deep";
  className?: string;
};

/** Small uppercase brand label (Mulish 700, wide tracking). */
export default function Eyebrow({
  children,
  tone = "gold-deep",
  className = "",
}: EyebrowProps) {
  const color = tone === "gold" ? "text-gold" : "text-gold-deep";
  return (
    <span
      className={`block font-body text-[13px] font-bold uppercase tracking-eyebrow ${color} ${className}`}
    >
      {children}
    </span>
  );
}
