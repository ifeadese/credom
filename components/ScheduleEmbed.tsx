"use client";

import dynamic from "next/dynamic";

/**
 * Calendly inline scheduler, loaded client-side only (the widget needs
 * `window`). Same approach as ifeadese.com's schedule-chat embed: event-type
 * event-type and landing-page chrome hidden so only the calendar + time
 * picker show (the description on the Calendly event still reaches invitees
 * in confirmations); colours mapped to the brand tokens (Calendly wants hex
 * without `#`).
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
    <div className="h-[900px] w-full bg-white sm:h-[720px]">
      <InlineWidget
        url={url}
        styles={{ height: "100%", width: "100%" }}
        pageSettings={{
          backgroundColor: "ffffff",
          primaryColor: "d89a2e",
          textColor: "201d1b",
          hideEventTypeDetails: true,
          hideLandingPageDetails: true,
          hideGdprBanner: true,
        }}
      />
    </div>
  );
}
