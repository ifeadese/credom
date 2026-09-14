/**
 * Feature flags: the single place a piece of the site is switched on or off.
 *
 * Add a key here (with a comment saying what it gates and why it is off) and
 * read it with `isEnabled("key")` at the point of use. A disabled flag makes
 * its feature inert: the markup is not rendered at all, so nothing ships to
 * the browser, nothing is fetched, and nothing is announced to screen
 * readers. Flags are build-time constants; flipping one is a code change,
 * which keeps every deploy explicit and reviewable (no env-var drift between
 * Vercel and local). If a flag ever needs to vary per environment, resolve it
 * from `process.env` inside this file so callers stay unchanged.
 */
export const flags = {
  /**
   * Home page "What we've done": the "Work That Moved People." heading and
   * the AltDrive EV Experience 2.0 case-study card. Off until the case-study
   * copy and reel are signed off.
   */
  homeCaseStudy: false,
} satisfies Record<string, boolean>;

export type Flag = keyof typeof flags;

export function isEnabled(flag: Flag): boolean {
  return flags[flag];
}
