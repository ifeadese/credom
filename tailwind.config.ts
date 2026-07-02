import type { Config } from "tailwindcss";

/**
 * Design tokens extracted from DESIGN_SPEC.md §1.
 * Colors and font families live here so components reference tokens, never raw hex.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        display: ["var(--font-rokkitt)", "Rokkitt", "serif"],
        body: ["var(--font-mulish)", "Mulish", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      letterSpacing: {
        eyebrow: "0.2em",
        "eyebrow-wide": "0.24em",
      },
      borderRadius: {
        card: "3px",
        block: "4px",
        btn: "2px",
      },
    },
  },
  plugins: [],
};

export default config;
