/**
 * Cal.com booking embedded on /schedule ("Schedule a Chat", 30 minutes).
 * The embed itself is wired up in `components/CalEmbed.tsx`; this file only
 * holds the identifiers so the booking link changes in one place.
 */
export const CAL_ORIGIN = "https://app.cal.com";
export const CAL_EMBED_SCRIPT = `${CAL_ORIGIN}/embed/embed.js`;
/** Cal.com event slug (`<username>/<event>`). */
export const CAL_LINK = "credomlimited/30min";
/** Embed namespace Cal.com's loader uses to scope this event's API. */
export const CAL_NAMESPACE = "30min";
