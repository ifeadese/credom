/**
 * Rokkitt 900 uppercase metrics, measured in-browser at font-size 1000:
 * [advance, left side bearing, right ink edge, ascent, descent].
 * Only capitals — watermark words are always set in caps.
 */
const ROKKITT_BLACK_CAPS: Record<string, [number, number, number, number, number]> = {
  A: [725, 2, 723, 583, 0],
  B: [671, 30, 649, 583, 0],
  C: [676, 29, 657, 594, 10],
  D: [733, 30, 704, 583, 0],
  E: [619, 30, 603, 583, 0],
  F: [593, 30, 583, 583, 0],
  G: [700, 29, 666, 594, 10],
  H: [726, 30, 696, 583, 0],
  I: [360, 30, 330, 583, 0],
  J: [360, -35, 335, 583, 171],
  K: [694, 30, 694, 583, 0],
  L: [575, 30, 555, 583, 0],
  M: [846, 30, 816, 583, 0],
  N: [714, 30, 689, 583, 0],
  O: [730, 29, 701, 594, 10],
  P: [639, 30, 629, 583, 0],
  Q: [730, 29, 701, 594, 181],
  R: [683, 30, 683, 583, 0],
  S: [574, 30, 566, 593, 10],
  T: [650, 15, 635, 583, 0],
  U: [708, 22, 686, 583, 10],
  V: [677, 0, 677, 583, 0],
  W: [950, 0, 950, 583, 0],
  X: [715, 7, 708, 583, 0],
  Y: [668, 0, 668, 583, 0],
  Z: [593, 30, 569, 583, 0],
};

type WatermarkProps = {
  /** Uppercase word to paint. */
  word: string;
  /** Colour (`text-*`, the fill is currentColor) and any position overrides. */
  className?: string;
};

/**
 * Faint oversized word that spans the full width of its positioned parent,
 * pinned to the parent's bottom edge — never clipped on either side.
 *
 * It is an SVG whose viewBox is the word's ink box: the SVG scales with the
 * parent's width, so the type size follows the container rather than the
 * viewport. `textLength` pins the total advance to the measured value, so the
 * word still fits the box while the fallback serif is showing before Rokkitt
 * loads (letter spacing absorbs the difference, glyphs are never stretched).
 */
export default function Watermark({ word, className = "" }: WatermarkProps) {
  const glyphs = [...word.toUpperCase()].map(
    (ch) => ROKKITT_BLACK_CAPS[ch] ?? ROKKITT_BLACK_CAPS.M,
  );
  const advance = glyphs.reduce((sum, [adv]) => sum + adv, 0);
  const first = glyphs[0];
  const last = glyphs[glyphs.length - 1];
  const inkLeft = first[1];
  const inkRight = advance - last[0] + last[2];
  const ascent = Math.max(...glyphs.map((g) => g[3]));
  const descent = Math.max(...glyphs.map((g) => g[4]));

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox={`${inkLeft} 0 ${inkRight - inkLeft} ${ascent + descent}`}
      className={`pointer-events-none absolute bottom-0 left-0 block h-auto w-full select-none ${className}`}
    >
      <text
        x="0"
        y={ascent}
        fontSize="1000"
        textLength={advance}
        lengthAdjust="spacing"
        className="fill-current font-display font-black"
      >
        {word}
      </text>
    </svg>
  );
}
