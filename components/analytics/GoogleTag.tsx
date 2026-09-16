"use client";

import Script from "next/script";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Google Analytics 4 tag (gtag.js).
 *
 * The measurement ID is read from the environment by the root layout on the
 * server and handed in as a prop, so the variable needs no NEXT_PUBLIC_
 * prefix. Set it in Vercel's Production scope only, so dev servers and
 * preview deploys never report to the live property. With no ID the tag
 * renders nothing.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * gtag.js only records a page view on the first full load. App Router
 * navigations swap the page without reloading, so GA would never see a page
 * reached by a client-side link. Re-issue the `config` call on each route
 * change; gtag reads the URL from the address bar, which the router has
 * already updated by then. The initial load is covered by the inline snippet
 * below.
 *
 * GA4's enhanced measurement can also send a page view on history changes.
 * Keep that option off in the GA4 data stream, or these navigations count
 * twice.
 */
export function GoogleTag({ id }: { id?: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const query = searchParams.toString();
  const page = query ? `${pathname}?${query}` : pathname;

  // Keyed on the page string, not the searchParams object: hash-only
  // navigations rebuild that object without changing the URL. Seeded with the
  // page that loaded, so neither the mount effect nor StrictMode's second
  // pass duplicates the inline snippet's page view.
  const lastSent = useRef(page);

  useEffect(() => {
    if (lastSent.current === page) return;
    lastSent.current = page;
    if (!id) return;
    window.gtag?.("config", id);
  }, [page, id]);

  if (!id) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
        strategy="afterInteractive"
      />
      <Script id="google-tag" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${id}');
        `}
      </Script>
    </>
  );
}
