# CREDOM — Website

Marketing website for **CREDOM**, an integrated brand experience agency based in Lagos, Nigeria.

> _"We create moments people don't just attend; they remember."_

This repository is a **development handoff**. It contains high-fidelity design references (built in HTML) plus a full specification. The task is to **recreate these designs in a production stack of your choice** (see below) — not to ship the reference HTML as-is.

---

## What's in here

```
credom/
├── README.md                        ← you are here
├── DESIGN_SPEC.md                   ← full spec: tokens, screens, components, behavior
└── design/
    ├── credom-website-preview.html  ← open this in a browser to see the design (self-contained)
    ├── CREDOM Website.dc.html       ← editable source of the design
    └── support.js                   ← runtime for the .dc.html source
```

**To view the design:** open `design/credom-website-preview.html` in any browser. It's fully self-contained (fonts inlined) and works offline.

---

## The build task

Recreate the four pages **pixel-faithfully** in a real codebase. The reference is **high-fidelity** — colors, type, spacing, and copy are final. Reproduce them exactly using your stack's own patterns and components.

**Pages:** Home · About · Services · Contact

### Recommended stack
No codebase exists yet, so pick a modern, deployable setup. Suggested:
- **Next.js (App Router) + TypeScript + Tailwind CSS**, deployed on Vercel (the owner already uses Vercel/Next for other projects).
- Alternatively Astro if a mostly-static marketing site is preferred.

This is a small marketing site — a single-page app with client routing (as the reference demonstrates) or true multi-page routes are both fine. Prefer real routes (`/`, `/about`, `/services`, `/contact`) for SEO.

### Definition of done
- [ ] All four pages match the reference in layout, color, type, and copy.
- [ ] Responsive from 320px → large desktop (the reference uses `clamp()` + CSS auto-fit grids — no fixed breakpoints required, but verify on mobile).
- [ ] Contact form validates and delivers to **ifeoluwaadese@gmail.com** (see spec — the reference uses a `mailto:` fallback; production should use a real form backend such as Formspree, Resend, or a serverless route).
- [ ] Fonts: **Rokkitt** (display) + **Mulish** (body), loaded via Google Fonts or self-hosted.
- [ ] Logo reproduced (CRED + gold dot/underline "O" + M).
- [ ] Accessible: semantic landmarks, labelled form fields, visible focus states, AA contrast.
- [ ] Deployed to a live URL.

See **DESIGN_SPEC.md** for every measurement, hex value, and line of copy.

---

## Notes for production
- **Imagery:** the design uses labelled placeholders (hero, team photos). Real photography/logo must be supplied by the client and dropped into those slots.
- **Public email** shown on the site is `hello@credomlimited.com`. The **contact form** routes to `ifeoluwaadese@gmail.com`.
- **Contact address:** 3 Jakande Crescent, Victoria Island, Lagos, Nigeria.
- Keep the editorial, high-whitespace character of the brand — do not compress the generous vertical rhythm.
