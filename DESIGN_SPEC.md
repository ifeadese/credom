# CREDOM Website — Design Specification

Complete build reference. Fidelity: **high**. Recreate exactly.
Open `design/credom-website-preview.html` alongside this document.

---

## 1. Design Tokens

### Colors
| Token | Hex | Usage |
|---|---|---|
| Ink | `#201D1B` | Primary dark bg, headings on light, dark sections |
| Ink 2 | `#2B2724` | Secondary dark card bg (e.g. Digital Marketing block) |
| Gold (primary) | `#D89A2E` | Brand accent, CTAs, logo dot, active nav, gold sections |
| Gold deep | `#B87D1E` | Small uppercase eyebrow labels on light bg |
| Brown | `#5A2A17` | Chocolate section/card bg (Traditional Media, values) |
| Teal | `#18827B` | Teal section/card bg (OOH, values) |
| Magenta | `#C50E8B` | Magenta section/card bg (Corporate Events, values) |
| Paper | `#FAF7F2` | Default page background (warm off-white) |
| Paper 2 | `#F0EBE3` | Alternate section bg, form sidebar, home CTA band |
| Line | `#E4DDD2` | Borders / dividers on light |
| Line (form) | `#DDD4C7` | Input borders |
| Body text | `#35302B` | Default body copy |
| Body muted | `#6E665F` | Secondary copy on light |
| Body on dark | `#C9C0B6` | Body copy on ink bg |
| Body on dark 2 | `#E7DFD5` / `#E4D8CE` | Higher-contrast body on ink/brown |
| Muted on dark | `#6B625A` / `#8A8079` | Placeholder labels, footer meta, client names |

### Typography
- **Display / headings:** `Rokkitt` (slab serif). Weights 400–900. Used for all H1/H2/H3, eyebrow-adjacent big statements, pull-quotes (italic), and process/step labels.
- **Body / UI:** `DM Sans` (geometric, low-contrast sans — the UI/UX Pro Max "Premium Sans" pick for modern agencies; replaced Mulish in Sept 2026). Weights 400–700. Used for paragraphs, nav, buttons, form fields (the logo is SVG artwork, not live text).
- Load: `https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600;700&display=swap`

**Type scale (fluid — all use `clamp()`):**
| Role | Size | Weight / style | Notes |
|---|---|---|---|
| Hero H1 | `clamp(52px, 8.5vw, 110px)` | Rokkitt 800 | line-height 0.9–0.92, letter-spacing -0.01 to -0.015em |
| Page H1 (About/Contact) | `clamp(52px, 9–10vw, 120–128px)` | Rokkitt 800 | line-height 0.9 |
| Section H2 | `clamp(38px, 5–7vw, 64–96px)` | Rokkitt 700–800 | line-height 0.94–1 |
| Big statement / pull-quote | `clamp(28px, 4.2–4.6vw, 52–58px)` | Rokkitt 600 (quotes italic) | line-height 1.12–1.16 |
| Card / block H3 | 24–38px | Rokkitt 700 | |
| Process step label | 30px | Rokkitt 700 | |
| Body | 15–20px | DM Sans 400–600 | line-height 1.6–1.75 |
| Eyebrow label | 13px | DM Sans 700, `letter-spacing:0.2–0.24em`, `text-transform:uppercase` | gold/gold-deep |
| Nav link | 14px | DM Sans 600 | letter-spacing 0.04em |
| Button | 15–16px | DM Sans 700 | |

### Spacing & shape
- Content max-width: **1240px**, centered. Horizontal padding is one responsive **gutter** (`--gutter`, exposed to Tailwind as `px-gutter`): **20px** below 640px, **32px** to 1023px, **40px** from 1024px. Every page-level column (`Container`, nav, footer, full-bleed panels) uses it, so left/right padding is identical on every page and section and never squeezes a phone-width text block. Full-bleed side-by-side panels (About vision/mission) pad their outer side with `--edge` (viewport → column text edge) and their inner side with the gutter, so their text lines up with the column.
- Card/block inner padding steps down on phones so gutter + card padding stays modest: service preview cards 24px (34px from 640px), principle cards 24px (32px from md), the case-study card's copy cell 24px (48px from 640px, 64px from 1024px), service blocks and the contact sidebar `clamp(24px, 4vw, 48–56px)`.
- Section vertical padding: `clamp(70–80px, 9–12vw, 110–150px)`.
- Card/block radius: **3–4px** (nearly square — brand is crisp, not rounded). Buttons: **2px**.
- Grids use `repeat(auto-fit, minmax(280–320px, 1fr))` with `gap:18–20px` — responsive with no media queries.
- No shadows in the system; separation comes from color blocks and whitespace.

### Logo
Official CREDOM wordmark as inline SVG (`components/Logo.tsx`), traced from the company profile cover: `CRED` + gold `O` dot + `M`, with a short bar under the dot. Letterforms and the bar take the current text color (ink on light, paper on dark); the dot is always gold `#D89A2E`. Artwork ratio 135.2 : 23.95, rendered at 17px tall in the nav (14px on the narrowest phones).

### Nav (full-width, pins on scroll)
- Pattern lifted from lighthouseottawa.com: an edge-to-edge bar flush with the top of the page — no inset, no radius, no shadow, never a floating pill. The row inside is the same 1240px column + page gutter as `Container`, so the logo sits on the content column's text edge.
  - **At rest (scrollY ≤ 24):** `position:absolute; top:0` (it scrolls away with the page), transparent, transparent bottom rule, padding `14px` vertical (`16px` from md). Over the Home hero the text and logo letterforms are **paper**; on every other page they are **ink**.
  - **Pinned (scrollY > 24):** `position:fixed; top:0; z-index:50`, slides back in from above (`nav-pin`: translateY(-100%) → 0, 400ms, cubic-bezier(.16,1,.3,1)). Glass: paper-2 at 88% (`rgba(240,235,227,.88)`, the logo band's ground), `backdrop-filter: blur(12px)`, 1px bottom hairline `#E4DDD2`, vertical padding **grows** to `20px` (`24px` from md) so the pinned bar is taller (89px / 97px) while the logo stays the same size; text turns ink. Background, border and padding transition over 300ms. The drawer being open also applies the glass treatment.
- Left: logo (links Home, 14–17px tall fluid). Right: Home · About · Services · Contact (DM Sans 600, 14px, hover gold) + **Schedule a Chat** (gold, ink text, 15px, 48px tall, radius 2px, links `/schedule`). Active link: 2px gold underline.
- Mobile (< md): gold CTA (44px tall; 12px text, 13px from 400px) + two-bar hamburger in a 48×48 tap target (40px and 32px bars, paper over the hero, ink otherwise); the drawer expands **inside** the bar (grid-rows 0fr → 1fr, 300ms), gold top rule, stacked links; Escape and route change close it.
- Home's hero runs under the bar (its own top padding clears it); every other page renders a spacer the height of the at-rest bar under it (77px, 81px from md).

### Footer
- Bg `#F0EBE3` (paper-2, the same ground as the home logo band and the nav glass), text `#4A443D` (body-ink), padding `32px 0`, top hairline `#E4DDD2`.
- One row, space-between and vertically centred; below 480px it becomes a centred column (copyright above the icons, text centred):
  - Left: `© 2026 CREDOM Limited. All rights reserved.` in `#6B625A`.
  - Right: two 40×40 outlined icon links (mail → `hello@credomlimited.com`, Instagram → `@wearecredom`; 18px glyph in `currentColor`, `#E4DDD2` border, 2px radius, gold border + glyph on hover), each carrying its own `aria-label`.
- No logo, address, or nav links — the header nav is the only site navigation.

---

## 3. Pages

### 3.1 HOME
1. **Hero** — **ink** bg (`#201D1B`), paper text. The photo is the **shared parallax photo in greyscale** (`ParallaxBackdrop grayscale`, ink tint at 45%) — the same fixed layer as the dark sections below, so it holds still as the page scrolls and its colour is revealed at What we've done. On phones it runs behind the whole hero — the 4:3 band above the copy is empty space that shows it — under a vertical gradient (ink 60% at the top for the nav, clear at 16%, 60% from 34% down to 72% at the bottom) so the copy stays legible without hiding the image. From `sm` up it is a full-bleed background fading into ink towards the left with an elliptical falloff — `radial-gradient(ellipse 56% 82% at 80% 50%, transparent 0%, ink 20% at 40%, ink 65% at 66%, ink 90% at 86%, solid ink 100%)` — so there is no panel edge or seam; the ink wraps the photo in a C on the top-left, left and bottom-left — layered over a bottom fade. The overlay never reaches solid ink, so the photo stays faintly visible behind the headline's right half. Hairline geometry over the photo (`sm+`): two diagonal white rules (`130deg` at 12% and `50deg` at 8% opacity, scaled 1.4 so they cross the whole section) and, on `md+`, two concentric gold rings at the top right — 640px at 25% opacity and 448px at 10%. Column (`min-height:820px` on `sm+`, `justify-content:flex-end`, padding `140px 0 88px`): gold eyebrow "Integrated Brand Experience Agency"; H1 (Rokkitt 800, `clamp(50px,8.3vw,120px)`, line-height 0.88, tracking -0.03em) "We create moments people don't just attend; **they remember.**" (last two words gold); below, a row: buttons **Schedule a Chat** (gold) and **Explore Services** (`outline-light`: paper border/text).
2. **Who we are + What We Do** — **one section** on a vertical gradient, paper `#FAF7F2` at the top to paper-2 `#F0EBE3` at the bottom, `py clamp(36px,5vw,60px)` (bottom padding matches the top). Intro first: one column, no eyebrow: one short, large statement defining CREDOM, distilled from the About page (intro + vision): "CREDOM is an integrated brand experience agency. We unify strategy, creativity and execution to shape how people connect with brands, and to redefine brand impact in Africa." Rokkitt 400 (regular, not bold), `clamp(30px,3.9vw,54px)`, line-height 1.14, `max-width:1120px`, set in `#6E665F` (body-muted) with the first sentence (the definition) lifted to ink and "redefine brand impact in Africa." in gold-deep (not gold, so the accent clears 3:1 on paper). Below, an **About CREDOM →** gold-underlined text link, right-aligned in the column — the same style as "All services →" (14px DM Sans 700, ink, 2px gold underline). Then the **services preview**, `clamp(32px,4.5vw,56px)` below the button: eyebrow "What We Do" (18px above), H2 "Full-Spectrum / **Capability.**" (title case, "Capability." gold; same type as the other display headings — Rokkitt 800, `clamp(48px,6.1vw,88px)`, line-height 0.85, tracking -0.03em; "Full-Spectrum" never breaks at the hyphen — below 640px the size eases to `min(48px, (100vw − 40px) / 6)` so it fits one line), "All services →" (always right-aligned, including when it wraps under the heading on phones; 32px above the cards, 40px from md), 6 colour cards. Each card (`components/ServiceCard.tsx`): a 32px line icon top-left in the card's accent (`components/ServiceIcon.tsx` — one family on a 24px grid, 1.5px round stroke: compass for Brand Experience Strategy, sparks for Experiential Marketing & Activation, starred calendar for Corporate Events, TV set for Traditional Media, billboard for OOH, screen + cursor for Digital Marketing); the service number as a faint watermark in the top-right corner (Rokkitt 800, 160px, current colour at 10%, oversized and pushed past the corner so the card's top and right edges crop it); title and description at the bottom, at least 24px below the icon.
3. **What we've done** — its own section on the **shared parallax photo** (see 5 below), right after the Who we are + What We Do section, `py clamp(72px,10vw,120px)`: the single AltDrive case study as a **split card inset in the content column**, in the service-card shape: radius 3, a 1px gold border at 40% framing reel and copy together, no shadow, `overflow-hidden` so the reel follows the corners, `#F0EBE3` (paper-2) surface against the parallax photo. Two equal columns from 800px, stacked below (an explicit breakpoint, so the grid and the reel's aspect ratio switch together). Left cell: a swipeable reel of two looping portrait event clips (`VideoSwiper`) flush with the card's edges, full cell height (`min-height:560px` side by side; a 4:5 band when stacked). Scroll-snap slides; gold active dot bottom-left; round paper-outline controls bottom-right — play/pause, sound, prev/next. Clips start muted with tap-to-unmute (they carry an audio track), nothing beyond metadata loads until the reel is in the viewport, only the slide in view plays, and `prefers-reduced-motion: reduce` starts the reel paused on its poster. Right cell: copy vertically centred, padded 40/24px (56/48px from 640px, 80/64px from 1024px; ServiceCard's padding scaled up for the larger card), text column `max-width:560px` (bites when stacked). Above the card, on the photo: eyebrow "What we've done" (gold) over H2 "Work That / **Moved People.**" (title case, broken onto two lines; paper, "Moved People." gold; same type as the 4D1M heading — Rokkitt 800, `clamp(48px,6.1vw,88px)`, line-height 0.85, tracking -0.03em, 18px below the eyebrow), 24px above the card (32px from md). The card's copy opens with H3 with the case-study category, "AltDrive EV Experience 2.0 - Lagos" (Rokkitt 700, `clamp(38px,5vw,64px)`, ink, `text-wrap: balance` so no line starts on "- Lagos"), then body `#4A443D`, gold-deep bold takeaway, gold "Read more".
4. **Businesses we've served** — sits between the two parallax sections (What we've done above, How We Work below), sliding over the fixed photo; its own tight band on `#F0EBE3`, `py clamp(12px,1.5vw,18px)`, with two **inner hairlines** (`#DDD4C7`, line-form) inset from its top and bottom edges framing the row (`py clamp(28px,3.5vw,46px)` inside them; the lines span the content column, edge to edge below 640px with the marquee); eyebrow on the left and the client logos on the right as a **marquee** (`components/LogoMarquee.tsx`): an endless leftward loop (6s per pass, linear) filling the rest of the row, edges fading out through a mask, paused on hover, standing still as a swipeable row under `prefers-reduced-motion: reduce`. Below 640px the eyebrow is visually hidden (kept for screen readers) and only the marquee shows, running edge to edge (out through the gutter) — the logos never stack.
5. **How We Work (4D1M)** — on the **shared parallax photo**, right after the logo band, so the type is set light. Eyebrow "Why work with us" (gold), H2 "Our Process From Insight **To Impact.**" (balanced wrapping, `max-width:900px`) (`clamp(48px,6.1vw,88px)`, paper, "To Impact." gold), intro paragraph (on-dark `#C9C0B6`, `max-width:760px`): "Most marketing is ignored, and experiences worth remembering are rare. Attention has to be earned; experience is what makes it last. Great experiences don't happen by chance, so every campaign follows an intentional yet flexible process built to produce results while ensuring a memorable experience." Then a short attributed quote 20px below, set like the About belief line — Rokkitt 600 italic gold, `clamp(20px,2vw,26px)`: "People will never forget how you made them feel." with "— Maya Angelou" as a 13px on-dark eyebrow-style credit. Then the steps as a stack of cards, 14px apart, each padded 28/20px (40/28px from md), radius 3, laid out `110px 260px 1fr` on `md+` — number (12px, gold), H3 (Rokkitt 700, 40px, paper) with a 10px palette dot (gold, magenta, teal, and `#E4D8CE` on-brown for Deliver — brown itself vanishes on the dark ground), description (on-dark-2 `#E7DFD5`, a step lighter than the intro so it holds 4.5:1 through the glass fill). Steps 01–04 are **glass**: paper fill at 6%, `backdrop-filter: blur(12px)` over the parallax photo, 1px paper border at 10%. The **Measure** card is a light gold tint of the same glass — gold at 20%, the same `blur(12px)` backdrop, 1px gold border at 60% — with light type: gold-soft `#FBEFDB` number (plain gold fell to 3.3:1 on the tint), gold dot, paper heading, on-dark-2 description; same padding and border width so all five share one content rail.
   - **Parallax photo** (`components/ParallaxBackdrop.tsx`) — What we've done, How We Work and the closing CTA band share one still photo that stays fixed in the viewport while the page scrolls, What we've done, How We Work and the closing CTA all share it: the logo band slides over the photo between the first two. "Concert photos" by @nainoa on Unsplash (Unsplash License), `/images/parallax-concert.jpg` at 2400px wide, `object-fit: cover`, under a flat ink tint at 80% — sized so on-dark body copy keeps ≥4.5:1 even over the brightest stage glow (measured ~5:1 worst case, ~7:1 typical). Built as a `position: fixed` layer clipped by `clip-path: inset(0)` on an absolute wrapper, not `background-attachment: fixed` (ignored by iOS Safari); `h-lvh` so mobile toolbar changes do not make it jump.
6. **Closing CTA** — closes the How We Work section (and the page): the same parallax photo, `margin-top clamp(80px,10vw,140px)` below the Measure card, centred in a 900px column. Eyebrow "Now it's your turn" (gold, 18px above) over H2 `clamp(48px,6.1vw,88px)` in paper, "Let's make something **they'll remember.**" (gold) (32px above the button) + Schedule a Chat as a **transparent** button (`outline-light`: 1px paper border, paper text, no fill).

### 3.2 ABOUT
1. **Hero** — two columns (`.95fr 1.05fr`): H1 "Bold. / Strategic. / Immersive." (Rokkitt 800, `clamp(56px,6.6vw,104px)`, line 0.84) staggered (2nd line gold, indented 6%; 3rd 12%) — columns are `minmax(0,…)` and the scale is chosen so the widest line never crosses into the copy column, `sticky top:120px` on `md+`; right: eyebrow "About CREDOM" + the four intro paragraphs (`lib/content.ts` `aboutIntro`).
2. **Belief quote** — `#F0EBE3` band: 96px gold rule, then the quote in Rokkitt 600 italic gold, `clamp(32px,4vw,58px)`.
3. **Vision / Mission** — full-bleed split, `min-height:440px`, eyebrow at top, statement at bottom: **Vision** (teal) "Redefine brand impact in Africa." + copy; **Mission** (gold, brown eyebrow) "Connection that drives growth." + two paragraphs.
4. **Why choose us** — white, bottom hairline. Two columns (`.8fr 1.2fr`): H2 "Why / choose / **us?**" (`clamp(68px,8.9vw,128px)`, sticky on `md+`); right: eyebrow "Why Us", four paragraphs, then the italic gold-deep line above a top hairline.
5. **What We Stand For** — eyebrow "Our Principles", H2 "Built on belief. / Driven by **principle.**" (`clamp(56px,7.2vw,104px)`), "05 Principles" label. **Bento**: `md:grid-cols-6`, cards 01–03 span 2, 04–05 span 3, `min-height:340px`, number top / title+copy bottom. Colours unchanged (magenta, brown, gold, teal, white).
6. **Team** — unchanged layout (single COO feature); bio is now three paragraphs (`bio: string[]`).

### 3.3 SERVICES
1. **Header** — unchanged statement, then a **jump index**: six `44px`-tall white chips (`#E4DDD2` border, radius 2, gold-deep number + title) linking to `#service-01…06`.
2. **6 service blocks** — unchanged colours; each carries `id="service-NN"` + `scroll-mt-24`; descriptions and full bullet lists per the September copy (`lib/services.ts`).
3. No closing CTA band (PR #6).

### 3.4 CONTACT
1. **Hero** — white, bottom hairline. Eyebrow "Let's Talk"; H1 "Let's Make / **MAGIC.**" (`clamp(76px,10.4vw,150px)`, line 0.8, MAGIC gold); intro paragraph. Faint "MAGIC" watermark (Rokkitt 900, gold at 9%) spanning the section's full width along its bottom edge (`components/Watermark.tsx`).
2. **Body** — unchanged form (submit button "Send Message"). Sidebar: Email, **Phone** (`+234 807 777 2827`, `tel:` link), **"Prefer to pick a time?"** → "Schedule a 30-minute chat →" linking `/schedule`, Location, then the italic tagline in gold-deep. Details live in `lib/content.ts` `contactDetails`.

### 3.5 SCHEDULE (`/schedule`)
The destination of every **Schedule a Chat** button (nav pill, Home hero, Home CTA band, Contact sidebar link). Not in the nav link row — the gold pill is its only entry.
1. **Hero** — the shared `components/PageHero.tsx` (same markup as Contact): white, bottom hairline, eyebrow "Schedule a Chat"; H1 "Let's talk. / **Pick a time.**" (`clamp(76px,10.4vw,150px)`, line 0.8); intro paragraph (`lib/content.ts` `scheduleIntro`). Faint "CHAT" watermark (Rokkitt 900, gold at 9%) spanning the section's full width along its bottom edge.
2. **Body** — white, no vertical padding, **no Container**: CREDOM's Calendly event as a plain server-rendered **`<iframe>`** (`app/schedule/page.tsx`, URL built by `lib/calendly.ts`) running edge to edge, 720px tall at every width (Calendly's date step is ~600px on phones and its time list scrolls inside the frame, so a taller phone-only frame only added blank white), no border or radius. Event-type details, landing-page chrome and the GDPR banner are all hidden, so **only the calendar + time picker show on the page**; the event description ("What to expect": 01 A quick intro · 02 Your moment · 03 Next steps + email/phone fallback) lives on the Calendly event and appears on Calendly's booking step and confirmation email, not on the page. Colours from `lib/tokens.ts`: primary gold, text ink, background white. Hiding the GDPR banner is deliberate — the site has no cookies or consent UI of its own and the banner would cover the calendar; revisit if a site-wide consent mechanism is added.

## 4. Interactions & Behavior
- **Routing:** five pages (Home, About, Services, Contact, Schedule). Reference uses client-side state switching with smooth `window.scrollTo({top:0})` on change; production should use real routes and scroll-reset on navigation.
- **Active nav** underline reflects current page.
- **Nav hover:** links may shift toward gold on hover (optional polish; keep subtle).
- **Contact form:**
  - Client validation: Name + Email required; Email must be a valid address.
  - Reference behavior: builds a `mailto:ifeoluwaadese@gmail.com` with subject `Schedule a Chat — {name}` and a body containing Name / Email / Company / Interested in / Message, then shows the success panel.
  - **Production:** replace `mailto` with a real submission via **FormBold** (chosen for cost — free tier of 100 submissions/month, paid from ~$4/mo, cheaper than Formspree). POST the form to a FormBold form endpoint configured to deliver to **ifeoluwaadese@gmail.com**. Store the endpoint URL in `.env.local` (e.g. `NEXT_PUBLIC_FORMBOLD_ENDPOINT`), never hardcode it. Keep client-side validation and the success state. Enable FormBold's spam protection in the form settings.
- The Home hero photo panel is decorative on phones (4:3 band) — do not hide it; it is the only imagery above the fold.
- No entrance animations are required (an earlier fade was removed because it gated visibility — do not reintroduce opacity-based entrance animations that can get stuck).

## 5. Assets
- **Fonts:** Rokkitt + Mulish (Google Fonts).
- **Images & video:** the hero photo, the About team photo, the client logos, and the Home case-study reel are shipped. The reel clips are the owner's iPhone MOVs (HEVC 1080×1920) transcoded to 540×960 H.264 MP4 (CRF 30, 30fps, mono AAC 64k, faststart) in `public/videos/case-studies/` with a poster JPG each in `public/images/case-studies/`. Re-encode with ffmpeg when clips change; keep each under a few MB.
- **Icons:** none required; the design uses numbered labels instead of icons by choice.

## 6. Source reference files
- `design/credom-website-preview.html` — self-contained rendered design (open in browser).
- `design/CREDOM Website.dc.html` + `design/support.js` — editable source (renders when served together).
