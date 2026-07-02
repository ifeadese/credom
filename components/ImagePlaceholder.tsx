import type { CSSProperties } from "react";

type ImagePlaceholderProps = {
  /** Uppercase label shown centered, e.g. "Hero Image" or "Photo". */
  label: string;
  /**
   * Sizing / background / border utilities. Placeholders are intentionally
   * bare so the client can drop real assets into the same box later.
   */
  className?: string;
  style?: CSSProperties;
  /** Tracking of the label; hero uses 0.22em, team photos 0.18em. */
  labelTracking?: string;
};

/**
 * Clearly-marked image placeholder. No real imagery ships with the design —
 * these mark the hero and team photo slots at their correct dimensions.
 */
export default function ImagePlaceholder({
  label,
  className = "",
  style,
  labelTracking = "0.18em",
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={`${label} placeholder`}
      className={`flex items-center justify-center ${className}`}
      style={style}
    >
      <span
        className="font-body text-xs uppercase text-muted-dark-2"
        style={{ letterSpacing: labelTracking }}
      >
        {label}
      </span>
    </div>
  );
}
