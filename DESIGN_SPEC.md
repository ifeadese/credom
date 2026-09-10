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
- **Body / UI:** `Mulish` (humanist sans). Weights 300–800. Used for paragraphs, nav, buttons, form fields, (the logo is SVG artwork, not live text).
- Load: `https://fonts.googleapis.com/css2?family=Rokkitt:wght@400;500;600;700;800;900&family=Mulish:wght@300;400;500;600;700;800&display=swap`

**Type scale (fluid — all use `clamp()`):**
| Role | Size | Weight / style | Notes |
|---|---|---|---|
| Hero H1 | `clamp(52px, 8.5vw, 110px)` | Rokkitt 800 | line-height 0.9–0.92, letter-spacing -0.01 to -0.015em |
| Page H1 (About/Contact) | `clamp(52px, 9–10vw, 120–128px)` | Rokkitt 800 | line-height 0.9 |
| Section H2 | `clamp(38px, 5–7vw, 64–96px)` | Rokkitt 700–800 | line-height 0.94–1 |
| Big statement / pull-quote | `clamp(28px, 4.2–4.6vw, 52–58px)` | Rokkitt 600 (quotes italic) | line-height 1.12–1.16 |
| Card / block H3 | 24–38px | Rokkitt 700 | |
| Process step label | 30px | Rokkitt 700 | |
| Body | 15–20px | Mulish 400–600 | line-height 1.6–1.75 |
| Eyebrow label | 13px | Mulish 700, `letter-spacing:0.2–0.24em`, `text-transform:uppercase` | gold/gold-deep |
| Nav link | 14px | Mulish 600 | letter-spacing 0.04em |
| Button | 15–16px | Mulish 700 | |

### Spacing & shape
- Content max-width: **1240px**, centered, horizontal padding **40px**.
- Section vertical padding: `clamp(70–80px, 9–12vw, 110–150px)`.
- Card/block radius: **3–4px** (nearly square — brand is crisp, not rounded). Buttons: **2px**.
- Grids use `repeat(auto-fit, minmax(280–320px, 1fr))` with `gap:18–20px` — responsive with no media queries.
- No shadows in the system; separation comes from color blocks and whitespace.

### Logo
Official CREDOM wordmark as inline SVG (`components/Logo.tsx`), traced from the company profile cover: `CRED` + gold `O` dot + `M`, with a short bar under the dot. Letterforms and the bar take the current text color (ink on light, paper on dark); the dot is always gold `#D89A2E`. Artwork ratio 135.2 : 23.95, rendered at 17px tall in the nav (14px on the narrowest phones).

### Nav (fixed, glass on scroll)
- Pattern lifted from selahnotes.app: `position:fixed; top:8px; z-index:50`, 16px side padding. Inner container: max-width 1240, `border-radius:16px`, `transition: all 300ms`.
  - **At rest (scrollY ≤ 24):** transparent. Over the Home hero the text and logo letterforms are **paper**; on every other page they are **ink**.
  - **Scrolled (or drawer open):** paper at 80% (`rgba(250,247,242,.8)`), `backdrop-filter: blur(12px)`, shadow `0 1px 3px rgba(0,0,0,.1), 0 1px 2px -1px rgba(0,0,0,.1)`; text turns ink.
- Bar: padding `16px 32px` (desktop), `14px 16–20px` (mobile). Left: logo (links Home, 14–17px tall fluid). Right: Home · About · Services · Contact (Mulish 600, 14px, hover gold) + **Schedule a Chat** (gold, ink text, radius 2px). Active link: 2px gold underline.
- Mobile (< md): compact gold CTA + two-bar hamburger (bars paper over the hero, ink otherwise); the drawer expands **inside** the rounded glass container (grid-rows 0fr → 1fr, 300ms), gold top rule, stacked links; Escape and route change close it.
- Home's hero runs under the bar (its own top padding clears it); every other page renders a 76px spacer under the fixed nav.

### Footer
- Bg `#201D1B`, text `#C9C0B6`, padding `32px 0`, top hairline `#E4DDD2`.
- One row, space-between and vertically centred; below 480px it becomes a centred column (copyright above the icons, text centred):
  - Left: `© 2026 CREDOM Limited. All rights reserved.` in `#6B625A`.
  - Right: two 40×40 outlined icon links (mail → `hello@credomlimited.com`, Instagram → `@wearecredom`; 18px glyph in `currentColor`, `#E4DDD2` border, 2px radius, gold border + glyph on hover), each carrying its own `aria-label`.
- No logo, address, or nav links — the header nav is the only site navigation.

---

## 3. Pages

### 3.1 HOME
1. **Hero** — **ink** bg (`#201D1B`), paper text. The photo (`/images/hero-attention.jpg`) is a 4:3 band above the copy on phones and, from `sm` up, a full-bleed background (`inset:0`, `object-position: 70% center`) fading into ink towards the left with an elliptical falloff — `radial-gradient(ellipse 56% 82% at 80% 50%, transparent 0%, ink 20% at 40%, ink 65% at 66%, ink 90% at 86%, solid ink 100%)` — so there is no panel edge or seam; the ink wraps the photo in a C on the top-left, left and bottom-left — layered over a bottom fade. The overlay never reaches solid ink, so the photo stays faintly visible behind the headline's right half. Hairline geometry over the photo (`sm+`): two diagonal white rules (`130deg` at 12% and `50deg` at 8% opacity, scaled 1.4 so they cross the whole section) and, on `md+`, two concentric gold rings at the top right — 640px at 25% opacity and 448px at 10%. Column (`min-height:820px` on `sm+`, `justify-content:flex-end`, padding `140px 0 88px`): gold eyebrow "Integrated Brand Experience Agency"; H1 (Rokkitt 800, `clamp(50px,8.3vw,120px)`, line-height 0.88, tracking -0.03em) "We create moments people don't just attend; **they remember.**" (last two words gold); below, a row: buttons **Schedule a Chat** (gold) and **Explore Services** (`outline-light`: paper border/text), and a "Explore CREDOM ↓" scroll cue on `md+`.
2. **Intro** — paper bg. Two columns (`1.15fr .85fr`, align end): H2 (Rokkitt 800, `clamp(60px,7.2vw,104px)`, line-height 0.88) "Attention / Is **Earned.** / Experience / Makes It Last." (Earned. gold); right: two paragraphs (second bold) + "About CREDOM →" gold-underlined link.
3. **Services preview** — unchanged: `#F0EBE3`, eyebrow "What We Do", H2 "Full-spectrum capability.", "All services →", 6 colour cards.
4. **"Most Marketing Is Ignored"** — **gold** bg, **ink** text. Faint "CREDOM" watermark (Rokkitt 900, `clamp(170px,29vw,420px)`, ink at 7%) pinned bottom-right. Two columns: H2 `clamp(68px,8.9vw,128px)` with a brown 12px label "Why experiences matter" above and "Ignored." in **brown**; right, two paragraphs (second bold, ink).
5. **How We Work (4D1M)** — white bg. Eyebrow "Our Process — 4D1M", H2 "From Insight / To **Impact.**" (`clamp(60px,7.8vw,112px)`), intro paragraph. Then a hairline list (`border-t #E4DDD2`): each row `110px 260px 1fr` on `md+` — number (12px, gold-deep), H3 (Rokkitt 700, 40px) with a 10px palette dot, description (`#6E665F`). Rows separated by `#E4DDD2`; the **Measure** row is a gold block (ink text, brown number, `md:-mx-7` so it outdents the rail, radius 3).
6. **What we've done** — the single AltDrive case study laid out as **image + plain text, no card**: 4:3 image (radius 4) in a `minmax(280px,2fr)` column, copy in a `3fr` column (gap 56, vertically centred). The copy column carries the section heading itself — eyebrow "What we've done" + H2 with the case-study category, "AltDrive EV Experience 2.0 - Lagos" (`clamp(38px,5vw,64px)`) — then body `#4A443D`, gold-deep bold takeaway, gold "Read more". No separate section header above. Then "Businesses we've served" + the logo rail (logos left-aligned when stacked on phones).
7. **CTA band** — white bg with top hairline (was `#F0EBE3`); H2 `clamp(48px,6.1vw,88px)` "Let's make something they'll **remember.**" (gold) + Schedule a Chat.

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
1. **Hero** — white, bottom hairline. Eyebrow "Let's Talk"; H1 "Let's Make / **MAGIC.**" (`clamp(76px,10.4vw,150px)`, line 0.8, MAGIC gold); intro paragraph. Faint "MAGIC" watermark (Rokkitt 900, gold at 9%) bottom-right, clipped by the section.
2. **Body** — unchanged form. Sidebar: Email, **Phone** (`+234 807 777 2827`, `tel:` link), Location, then the italic tagline in gold-deep. Details live in `lib/content.ts` `contactDetails`.

## 4. Interactions & Behavior
- **Routing:** four pages. Reference uses client-side state switching with smooth `window.scrollTo({top:0})` on change; production should use real routes and scroll-reset on navigation.
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
- **Images:** none shipped — placeholders mark the hero image and two team photos. Client to supply real assets.
- **Icons:** none required; the design uses numbered labels instead of icons by choice.

## 6. Source reference files
- `design/credom-website-preview.html` — self-contained rendered design (open in browser).
- `design/CREDOM Website.dc.html` + `design/support.js` — editable source (renders when served together).
