"use client";

import { useEffect, useRef, useState } from "react";
import type { CaseStudyVideo } from "@/lib/content";

type VideoSwiperProps = {
  videos: CaseStudyVideo[];
  /** Accessible name for the carousel region. */
  title: string;
};

/** Share of a slide that must be in the track before it counts as the active one. */
const SLIDE_THRESHOLD = 0.6;

/**
 * Full-bleed, swipeable reel of looping clips. Slides are native scroll-snap
 * panels (touch swipe and trackpad scroll just work); the control cluster
 * (play/pause, sound, prev/next) and dots cover mouse and keyboard users.
 *
 * Nothing beyond metadata loads until the reel scrolls into the viewport;
 * then only the slide in view plays and the others pause. Clips start muted
 * (autoplay policy) and carry an audio track for the sound toggle; the
 * choice carries across swipes. With `prefers-reduced-motion: reduce` the
 * reel starts paused on its poster.
 */
export default function VideoSwiper({ videos, title }: VideoSwiperProps) {
  const regionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  /** Last slide asked for, so rapid arrow clicks step from the request, not from settled state. */
  const targetRef = useRef(0);
  const [active, setActive] = useState(0);
  const [inView, setInView] = useState(false);
  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  // Reduced motion: start paused on the poster.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPlaying(false);
    }
  }, []);

  // Which slide is in view as the user swipes. `isIntersecting` is true for
  // edge-adjacent (ratio 0) slides, so gate on the ratio and take the best.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children);
    const observer = new IntersectionObserver(
      (entries) => {
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (
            entry.intersectionRatio >= SLIDE_THRESHOLD &&
            (!best || entry.intersectionRatio > best.intersectionRatio)
          ) {
            best = entry;
          }
        }
        if (best) {
          const index = slides.indexOf(best.target);
          targetRef.current = index;
          setActive(index);
        }
      },
      { root: track, threshold: SLIDE_THRESHOLD }
    );
    slides.forEach((slide) => observer.observe(slide));
    return () => observer.disconnect();
  }, [videos.length]);

  // Is the reel itself on screen? Viewport-rooted, so nothing plays (or
  // downloads beyond metadata) while the section is below the fold.
  useEffect(() => {
    const region = regionRef.current;
    if (!region) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 }
    );
    observer.observe(region);
    return () => observer.disconnect();
  }, []);

  // Play the active clip only while on screen and not paused; pause the rest.
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === active && inView && playing) {
        void video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [active, inView, playing]);

  function step(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const next = (targetRef.current + direction + videos.length) % videos.length;
    targetRef.current = next;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  }

  return (
    <div
      ref={regionRef}
      className="relative h-full w-full overflow-hidden bg-ink"
      role="region"
      aria-roledescription="carousel"
      aria-label={title}
    >
      <div
        ref={trackRef}
        className="flex h-full w-full snap-x snap-mandatory overflow-x-auto overscroll-x-contain [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {videos.map((video, i) => (
          <div
            key={video.src}
            className="relative h-full w-full shrink-0 snap-start"
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${videos.length}: ${video.alt}`}
          >
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={video.src}
              poster={video.poster}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Controls — bottom right: play/pause, sound, then prev/next when there is more than one clip */}
      <div className="absolute bottom-4 right-4 flex gap-2 sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setPlaying((p) => !p)}
          aria-label={playing ? "Pause video" : "Play video"}
          className={controlClasses}
        >
          <PlayIcon playing={playing} />
        </button>
        <button
          type="button"
          onClick={() => setMuted((m) => !m)}
          aria-label={muted ? "Unmute video" : "Mute video"}
          className={controlClasses}
        >
          <SoundIcon muted={muted} />
        </button>
        {videos.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => step(-1)}
              aria-label="Previous video"
              className={controlClasses}
            >
              <ArrowIcon direction="left" />
            </button>
            <button
              type="button"
              onClick={() => step(1)}
              aria-label="Next video"
              className={controlClasses}
            >
              <ArrowIcon direction="right" />
            </button>
          </>
        )}
      </div>

      {/* Dots — bottom left */}
      {videos.length > 1 && (
        <div
          className="pointer-events-none absolute bottom-5 left-5 flex gap-2 sm:bottom-7 sm:left-7"
          aria-hidden="true"
        >
          {videos.map((video, i) => (
            <span
              key={video.src}
              className={`h-[6px] rounded-full transition-[width,background-color] duration-300 ${
                i === active ? "w-6 bg-gold" : "w-[6px] bg-paper/60"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const controlClasses =
  "flex h-10 w-10 items-center justify-center rounded-full border border-paper/40 bg-ink/40 text-paper backdrop-blur-sm transition-colors hover:border-gold hover:text-gold";

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function PlayIcon({ playing }: { playing: boolean }) {
  return (
    <svg {...iconProps}>
      {playing ? (
        /* Pause bars */
        <path d="M5.5 3.5v9M10.5 3.5v9" />
      ) : (
        /* Play triangle */
        <path d="M5 3.5v9l7-4.5z" fill="currentColor" />
      )}
    </svg>
  );
}

function SoundIcon({ muted }: { muted: boolean }) {
  return (
    <svg {...iconProps}>
      {/* Speaker body */}
      <path d="M2 6h2.5L8 3v10L4.5 10H2z" />
      {muted ? (
        /* Slash */
        <path d="M11 6l3 4M14 6l-3 4" />
      ) : (
        /* Waves */
        <path d="M10.5 5.5a3.5 3.5 0 0 1 0 5M12.5 3.5a6 6 0 0 1 0 9" />
      )}
    </svg>
  );
}

function ArrowIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      {...iconProps}
      style={direction === "left" ? { transform: "scaleX(-1)" } : undefined}
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  );
}
