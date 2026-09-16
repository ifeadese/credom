"use client";

import { useEffect, useRef } from "react";
import {
  CAL_EMBED_SCRIPT,
  CAL_LINK,
  CAL_NAMESPACE,
  CAL_ORIGIN,
} from "@/lib/cal";
import { colors } from "@/lib/tokens";

/* Cal.com's command-queue API: calls made before `embed.js` loads are queued
   and replayed once it does. Typed loosely — the real surface lives in the
   remote script. */
type CalApi = ((...args: unknown[]) => void) & {
  q?: unknown[][];
  ns?: Record<string, CalApi>;
  loaded?: boolean;
  config?: { forwardQueryParams?: boolean };
};

declare global {
  interface Window {
    Cal?: CalApi;
  }
}

const CONTAINER_ID = `my-cal-inline-${CAL_NAMESPACE}`;

/**
 * Port of Cal.com's inline-embed loader snippet: defines `window.Cal` as a
 * queue, injects `embed.js` once, and gives each namespace its own queue.
 */
function ensureCal(): CalApi {
  if (window.Cal) return window.Cal;

  const push = (api: CalApi, args: unknown[]) => {
    api.q = api.q || [];
    api.q.push(args);
  };

  const cal: CalApi = function (...args: unknown[]) {
    if (!cal.loaded) {
      cal.ns = {};
      cal.q = cal.q || [];
      const script = document.createElement("script");
      script.src = CAL_EMBED_SCRIPT;
      document.head.appendChild(script);
      cal.loaded = true;
    }
    if (args[0] === "init") {
      const api: CalApi = function (...calls: unknown[]) {
        push(api, calls);
      };
      const namespace = args[1];
      api.q = api.q || [];
      if (typeof namespace === "string") {
        cal.ns![namespace] = cal.ns![namespace] || api;
        push(cal.ns![namespace], args);
        push(cal, ["initNamespace", namespace]);
      } else {
        push(cal, args);
      }
      return;
    }
    push(cal, args);
  };

  window.Cal = cal;
  return cal;
}

/**
 * Cal.com's month-view booker is three fixed columns — meta 280px, calendar
 * 480px, time slots 280px on frames 1024px and wider (240/480/240 below) —
 * and it centres that card inside the iframe. Capping the wrapper at the
 * card's width keeps the frame hugging the card, so its left edge sits on
 * the column's left edge with the headings instead of floating centred.
 */
const BOOKER_MAX_WIDTH = "max-w-[1040px]";

/**
 * CREDOM's Cal.com booking page, rendered inline and left-aligned to the
 * content column. Cal.com sizes the iframe to its content, so the wrapper
 * needs no fixed height.
 */
export default function CalEmbed() {
  // Strict mode runs effects twice in development; mounting the embed twice
  // would stack two calendars in the container.
  const mounted = useRef(false);

  useEffect(() => {
    if (mounted.current) return;
    mounted.current = true;

    const Cal = ensureCal();
    Cal("init", CAL_NAMESPACE, { origin: CAL_ORIGIN });
    Cal.config = Cal.config || {};
    Cal.config.forwardQueryParams = true;

    const ns = Cal.ns![CAL_NAMESPACE];
    ns("inline", {
      elementOrSelector: `#${CONTAINER_ID}`,
      config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
      calLink: CAL_LINK,
    });
    ns("ui", {
      cssVarsPerTheme: { dark: { "cal-brand": colors.gold } },
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div
      id={CONTAINER_ID}
      className={`h-full w-full overflow-scroll ${BOOKER_MAX_WIDTH}`}
    />
  );
}
