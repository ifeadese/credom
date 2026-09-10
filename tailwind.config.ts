import type { Config } from "tailwindcss";
import { colors } from "./lib/tokens";

/**
 * Design tokens extracted from DESIGN_SPEC.md §1.
 * Colours come from `lib/tokens.ts` (the one place hex lives); font families
 * and the rest live here so components reference tokens, never raw hex.
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors,
      fontFamily: {
        display: ["var(--font-rokkitt)", "Rokkitt", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1240px",
      },
      spacing: {
        // Page gutter (20px phone → 32px tablet → 40px desktop); set in globals.css
        gutter: "var(--gutter)",
        // Viewport edge → content-column text edge; lets full-bleed panels align to the column
        edge: "var(--edge)",
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
