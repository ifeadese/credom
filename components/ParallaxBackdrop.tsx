import Image from "next/image";

/**
 * The one photo every parallax section shares. Swap it here; the tint below
 * is sized for it, so re-check body-text contrast when it changes.
 * "Concert photos" by @nainoa on Unsplash, Unsplash License:
 * https://unsplash.com/photos/NcdG9mK3PBY (downloaded at 2400px wide).
 */
const backdropImage = "/images/parallax-concert.jpg";

/**
 * Fixed-position photo behind a section, under an ink tint, so consecutive
 * sections that use it look like windows onto the same still image while the
 * page scrolls past (a parallax without JS).
 *
 * Not `background-attachment: fixed` — iOS Safari ignores it. Instead the
 * photo is a `position: fixed` layer inside an absolutely positioned wrapper
 * with `clip-path: inset(0)`, which clips even fixed descendants to the
 * section's box. The host section must be `relative isolate` (the backdrop
 * sits at `-z-10` within it) and have no transformed ancestor, which would
 * turn `fixed` into `absolute`.
 *
 * `h-lvh` (largest viewport height) keeps the photo from jumping when mobile
 * browser toolbars collapse. Decorative, so it carries no alt text.
 *
 * The home hero uses the same layer in greyscale under a lighter tint, so
 * scrolling from the hero into the first colour section reads as the photo's
 * colour being revealed.
 */
type ParallaxBackdropProps = {
  /** Render the photo in greyscale (home hero). */
  grayscale?: boolean;
  /** Tint over the photo; the dark sections use ink at 80%. */
  tintClassName?: string;
  /** Load eagerly when the backdrop is above the fold. */
  priority?: boolean;
};

export default function ParallaxBackdrop({
  grayscale = false,
  tintClassName = "bg-ink/80",
  priority = false,
}: ParallaxBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 [clip-path:inset(0)]"
    >
      <div className="fixed left-0 top-0 h-lvh w-full">
        <Image
          src={backdropImage}
          alt=""
          fill
          sizes="100vw"
          priority={priority}
          className={`object-cover ${grayscale ? "grayscale" : ""}`}
        />
        <div className={`absolute inset-0 ${tintClassName}`} />
      </div>
    </div>
  );
}
