"use client";

import dynamic from "next/dynamic";

/**
 * Calendly inline scheduler, loaded client-side only (the widget needs
 * `window`). Same approach as ifeadese.com's schedule-chat embed: event-type
 * landing-page chrome hidden but the event details panel kept, since it
 * carries the description ("What to expect") maintained on the Calendly event;
 * colours mapped to the brand tokens (Calendly wants hex without `#`).
 */
const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full min-h-[640px] items-center justify-center text-[15px] text-body-muted">
        Loading calendar…
      </div>
    ),
  }
);

type ScheduleEmbedProps = {
  url: string;
};

export default function ScheduleEmbed({ url }: ScheduleEmbedProps) {
  return (
    <div className="h-[1100px] w-full bg-white sm:h-[760px]">
      <InlineWidget
        url={url}
        styles={{ height: "100%", width: "100%" }}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "d89a2e",
          textColor: "201d1b",
          hideEventTypeDetails: false,
          hideLandingPageDetails: true,
          hideGdprBanner: true,
        }}
      />
    </div>
  );
}
