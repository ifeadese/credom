/**
 * Brand palette — the single source of truth for every hex value in the
 * codebase (DESIGN_SPEC.md §1). `tailwind.config.ts` turns these into
 * utilities; anything that needs a raw value (e.g. the Calendly embed query)
 * reads it from here instead of repeating the literal.
 */
export const colors = {
  white: "#FFFFFF",
  ink: "#201D1B",
  "ink-2": "#2B2724",
  gold: "#D89A2E",
  "gold-deep": "#B87D1E",
  brown: "#5A2A17",
  teal: "#18827B",
  magenta: "#C50E8B",
  paper: "#FAF7F2",
  "paper-2": "#F0EBE3",
  line: "#E4DDD2",
  "line-form": "#DDD4C7",
  body: "#35302B",
  "body-muted": "#6E665F",
  // on-dark family
  "on-dark": "#C9C0B6",
  "on-dark-2": "#E7DFD5",
  "on-brown": "#E4D8CE",
  "on-brown-soft": "#D8CCC2",
  "muted-dark": "#8A8079",
  "muted-dark-2": "#6B625A",
  // supporting shades pulled from the reference markup
  "ink-hero": "#2E2A25",
  "ink-panel": "#2A2621",
  "ink-line": "#3A342E",
  "ink-outline": "#4A443D",
  "body-ink": "#4A443D",
  "bio-muted": "#B7AEA4",
  "gold-soft": "#FBEFDB",
  /** Body copy on the gold band. */
  "on-gold": "#3F2A12",
} as const;

export type ColorToken = keyof typeof colors;

/** `#D89A2E` → `d89a2e`, the form third-party embeds (Calendly) expect. */
export function hexWithoutHash(token: ColorToken): string {
  return colors[token].slice(1).toLowerCase();
}
