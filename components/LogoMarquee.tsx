import Image from "next/image";
import { clients } from "@/lib/content";

type Client = (typeof clients)[number];

type LogoMarqueeProps = {
  logos: Client[];
  className?: string;
};

/** Roster repeats per loop group, so a three-logo roster still overfills the widest track. */
const REPEATS = 2;

/**
 * Client logos sliding past in an endless loop. The track holds two identical
 * groups and slides left by one group (`animate-marquee`, -50%), so the loop
 * seam never shows; the second group is hidden from assistive tech and only
 * the first pass of the first group carries alt text. Edges fade out through a
 * mask, hovering pauses the loop, and with `prefers-reduced-motion: reduce` it
 * stands still as a single swipeable row.
 *
 * Logo height comes from `--logo-h` set by the parent (times each logo's `scale`).
 */
export default function LogoMarquee({ logos, className = "" }: LogoMarqueeProps) {
  const group = Array.from({ length: REPEATS }, () => logos).flat();

  return (
    <div
      className={`overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)] motion-reduce:overflow-x-auto motion-reduce:[scrollbar-width:none] motion-reduce:[&::-webkit-scrollbar]:hidden ${className}`}
    >
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 || undefined}
            className={`flex shrink-0 items-center gap-x-14 pr-14 ${
              copy === 1 ? "motion-reduce:hidden" : ""
            }`}
          >
            {group.map((client, i) => (
              <Image
                key={`${client.name}-${i}`}
                src={client.logo}
                alt={copy === 0 && i < logos.length ? client.name : ""}
                width={client.width}
                height={client.height}
                className="w-auto max-w-none"
                style={{ height: `calc(var(--logo-h) * ${client.scale})` }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
