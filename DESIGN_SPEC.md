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
| Paper 2 | `#F0EBE3` | Alternate section bg, form sidebar, CTA bands |
| Line | `#E4DDD2` | Borders / dividers on light |
| Line (form) | `#DDD4C7` | Input borders |
| Body text | `#35302B` | Default body copy |
| Body muted | `#6E665F` | Secondary copy on light |
| Body on dark | `#C9C0B6` | Body copy on ink bg |
| Body on dark 2 | `#E7DFD5` / `#E4D8CE` | Higher-contrast body on ink/brown |
| Muted on dark | `#6B625A` / `#8A8079` | Placeholder labels, footer meta, client names |

### Typography
- **Display / headings:** `Rokkitt` (slab serif). Weights 400–900. Used for all H1/H2/H3, eyebrow-adjacent big statements, pull-quotes (italic), and process/step labels.
- **Body / UI:** `Mulish` (humanist sans). Weights 300–800. Used for paragraphs, nav, buttons, form fields, and the **logo wordmark** (weight 800).
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
Wordmark `CRED` + `O` + `M` in **Mulish 800, 23–24px, letter-spacing 0.04em**. The "O" is replaced by a stacked mark:
- a gold (`#D89A2E`) filled circle, **15×15px**, `border-radius:50%`
- a gold bar beneath it, **17×3px**, `border-radius:2px`, `margin-top:2px`
- the circle+bar column sits inline with `margin:0 2px`.
Ink color on light backgrounds; `#FAF7F2` on dark. Dot/bar stay gold in both.

---

## 2. Global Chrome

### Nav (sticky)
- `position:sticky; top:0; z-index:50`, bg `rgba(250,247,242,0.9)` + `backdrop-filter:blur(10px)`, bottom border `1px #E4DDD2`.
- Inner: max-width 1240, padding `18px 40px`, flex space-between, wraps on narrow.
- Left: logo (links Home). Right: Home · About · Services · Contact links (Mulish 600, 14px) + **Schedule a Chat** button (gold bg, ink text, `11px 22px`, radius 2px).
- **Active link:** 2px gold underline bar under the current page's link.

### Footer
- Bg `#201D1B`, text `#C9C0B6`, padding `70px 0 40px`.
- 4-column grid (`auto-fit, minmax(220px,1fr)`, gap 44px), bottom border divider:
  1. Logo (white) + tagline in Rokkitt 500 19px, muted `#8A8079`.
  2. **Explore** — Home / About / Services / Contact links.
  3. **Visit** — Victoria Island, Lagos, Nigeria.
  4. **Connect** — `hello@credomlimited.com` + "Schedule a Chat →" (gold).
- Column headings: eyebrow style, gold.
- Bottom row: `© 2026 CREDOM Limited. All rights reserved.` and `Redefining brand impact in Africa.` in `#6B625A`.

---

## 3. Pages

### 3.1 HOME
1. **Hero** — **white** bg (`#FFFFFF`, bottom border `#E4DDD2`). A right-side panel (44% width, `#F0EBE3`, left border `#E4DDD2`) is the **hero image placeholder** (label "Hero Image"). Content (max-width 760): gold-deep eyebrow "Integrated Brand Experience Agency"; ink H1 "Attention / Is Earned."; gold-deep subhead (Rokkitt 600) "Experience Makes It Last."; body paragraph (`#4A443D`); two buttons — **Schedule a Chat** (gold) and **Explore Services** (outline `1px` ink, ink text).
2. **Statement** — max-width 1000, Rokkitt 600 ~clamp(30,4.6vw,58): "We create moments people don't just attend; **they remember.**" (last two words gold).
3. **Services preview** — bg `#F0EBE3`. Header row: eyebrow "What We Do" + H2 "Full-spectrum capability." + "All services →" link (gold underline). Grid of **6 cards** (`auto-fit minmax(300px,1fr)`, gap 18, min-height 220, padding `38px 34px`, radius 3), each with a numbered label (Rokkitt 700), H3, and one-line description. Card colors & titles in order:
   - 01 Brand Experience Strategy — **gold** bg, ink text
   - 02 Experiential Marketing & Activation — **ink** bg, cream text, gold number
   - 03 Corporate Events & Experiences — **magenta** bg, cream text
   - 04 Traditional Media — **brown** bg, cream text, gold number
   - 05 Out-of-Home (OOH) — **teal** bg, cream text
   - 06 Digital Marketing — **ink 2** bg, cream text, gold number
4. **"Most Marketing Is Ignored"** — **gold** bg, cream text, padding `clamp(80,11vw,140)`. Two-column (`auto-fit minmax(320px,1fr)`, gap 50, center-aligned): left H2 (Rokkitt 800, clamp(48,7vw,96), white) "Most / Marketing / Is Ignored."; right two paragraphs (2nd bold).
5. **How We Work (4D1M)** — header: eyebrow "Our Process — 4D1M", H2 "How We Work", intro paragraph. Then **5 rows** (`gap:14px`), each a `grid-template-columns:200px 1fr` card (radius 3): colored palette dot (10px — gold, magenta, teal, brown) + label (Rokkitt 700 30px) + description. First 4 rows **white** bg with `1px #E4DDD2` border; **Measure** row gold bg / ink with an ink dot.
6. **Businesses We’ve Served** — bg `#F0EBE3`. Eyebrow "Businesses we’ve served" + H2 "Work that moved people." Two case-study cards (`auto-fit minmax(320px,1fr)`, gap 20, radius 4, padding clamp(40,4vw,56)): **The Midea Pro Shop** (ink bg — category eyebrow gold, gold takeaway line) and **Terra** (gold bg — category eyebrow brown, brown takeaway line). Each card: category eyebrow, H3 client name, body paragraph, bold takeaway.
7. **Clients** — **white** bg, top border `#E4DDD2`. Centered gold-deep eyebrow "Brands We've Served" + centered wrapping row of names (Rokkitt 600, clamp(24,2.8vw,36), ink): AltDrive, AltBank, Midea.
8. **CTA band** — `#F0EBE3`, centered. H2 "Let's make something they'll remember." + Schedule a Chat button.

### 3.2 ABOUT
1. **Hero** — eyebrow "About CREDOM"; H1 stacked "Bold. / Strategic. / Immersive." (Rokkitt 800, clamp(56,10vw,128)); two-column intro paragraphs (max-width 960).
2. **Belief quote** — Rokkitt **italic** 600, gold, clamp(30,4.6vw,58), max-width 960: "We believe the most powerful brand experiences are not merely seen or attended, they are felt."
3. **Vision / Mission** — full-bleed 2-column split (`auto-fit minmax(320px,1fr)`): **Vision** **teal** bg, white H2 + body; **Mission** gold bg, ink H2 + two paragraphs. Copy in reference.
4. **Why Choose Us** — white bg, bottom border `#E4DDD2`. Eyebrow "Why Us" + H2 "Why choose us?" + two-column paragraphs (max-width 1000; "We hand you a system… integrators by design…" / "deep roots across FMCG, fintech, telecoms, banking…") + italic gold pull-quote (Rokkitt 600, clamp(24,3vw,36)): "Our end-to-end project management ensures nothing falls through the gaps — memorable for your audience, effortless for you."
5. **What We Stand For** — header (eyebrow "Our Principles", H2, intro). Grid of **5 cards** (`auto-fit minmax(300px,1fr)`, gap 18, padding `36px 32px`, radius 3), numbered:
   - 01 People-Centricity — magenta
   - 02 Reliability & Detail — brown
   - 03 Innovation — gold (ink text)
   - 04 Excellence — teal
   - 05 Teamwork — white bg, ink text, `1px #E4DDD2` border
6. **Meet the Force** — **`#F0EBE3`** bg, ink text. Eyebrow + H2 "The people behind the moments." Two team members (`auto-fit minmax(320px,1fr)`, gap 36), each: an **offset photo placeholder** (a colored block 200×230 behind a 220×250 white photo slot with `#E4DDD2` border, radius 2 — gold behind member 1, brown behind member 2) then name (Rokkitt 700 32px) + role (gold-deep, 16px) + bio (`#6E665F`).
   - **Pelumi Adese** — Business Lead / COO (bio in reference)
   - **Fetuga S.O** — Project Manager (bio in reference)
7. **CTA band** — H2 "Ready to be felt, not just seen?" + Schedule a Chat.

### 3.3 SERVICES
1. **Header** — eyebrow "Our Services" + big statement: "Our capabilities span the full spectrum of experiential marketing." (ink, roman) + italic gold continuation "Every service works independently or as part of a fully integrated campaign strategy."
2. **6 full service blocks** (stacked, `gap:20`, padding `clamp(40,4vw,56)`, radius 4). Each block is a 2-column grid (`auto-fit minmax(280px,1fr)`, gap 32): left = number + H3 (clamp(28,3vw,38)) + description; right = bulleted capability list (custom dot bullets, 6px, `padding-left:18px`). Colors & content match the Home preview order:
   - 01 Brand Experience Strategy — gold / ink
   - 02 Experiential Marketing & Activation — ink / cream
   - 03 Corporate Events & Experiences — magenta / cream
   - 04 Traditional Media — brown / cream
   - 05 Out-of-Home (OOH) Marketing — teal / cream
   - 06 Digital Marketing — ink 2 / cream
   (Full bullet lists in the reference HTML.)
3. **CTA band** — H2 "One channel or all of them." + Schedule a Chat.

### 3.4 CONTACT
1. **Hero** — **white** bg, bottom border `#E4DDD2`. Gold-deep eyebrow "Let's Talk"; ink H1 "From Insight / To Impact." (clamp(52,9vw,120)); intro paragraph (`#4A443D`).
2. **Body** — 2-column (`auto-fit minmax(320px,1fr)`, gap 60, align start):
   - **Left — form.** Fields: Full Name (required), Email (required, type email), Company/Organization (optional), "What are you interested in?" (select — the 6 services + "An integrated campaign" + "Not sure yet"), "Tell us about your project" (textarea, 5 rows). Inputs: white bg, `1px #DDD4C7` border, radius 2, padding `14px 16px`, 15px. Labels: 13px Mulish 700. Submit: **Schedule a Chat** (gold, `16px 38px`).
     - On submit → success panel appears (bg `#F0EBE3`, left border `4px #18827B`): "Thank you. Your message is ready to send…"
   - **Right — sidebar** (`#F0EBE3`, radius 4, padding clamp(36,4vw,48)): H2 "Reach us directly"; **Email** `hello@credomlimited.com`; **Location** — Victoria Island, Lagos, Nigeria; divider; italic gold tagline.

---

## 4. Interactions & Behavior
- **Routing:** four pages. Reference uses client-side state switching with smooth `window.scrollTo({top:0})` on change; production should use real routes and scroll-reset on navigation.
- **Active nav** underline reflects current page.
- **Nav hover:** links may shift toward gold on hover (optional polish; keep subtle).
- **Contact form:**
  - Client validation: Name + Email required; Email must be a valid address.
  - Reference behavior: builds a `mailto:ifeoluwaadese@gmail.com` with subject `Schedule a Chat — {name}` and a body containing Name / Email / Company / Interested in / Message, then shows the success panel.
  - **Production:** replace `mailto` with a real submission via **FormBold** (chosen for cost — free tier of 100 submissions/month, paid from ~$4/mo, cheaper than Formspree). POST the form to a FormBold form endpoint configured to deliver to **ifeoluwaadese@gmail.com**. Store the endpoint URL in `.env.local` (e.g. `NEXT_PUBLIC_FORMBOLD_ENDPOINT`), never hardcode it. Keep client-side validation and the success state. Enable FormBold's spam protection in the form settings.
- No entrance animations are required (an earlier fade was removed because it gated visibility — do not reintroduce opacity-based entrance animations that can get stuck).

## 5. Assets
- **Fonts:** Rokkitt + Mulish (Google Fonts).
- **Images:** none shipped — placeholders mark the hero image and two team photos. Client to supply real assets + final logo file.
- **Icons:** none required; the design uses numbered labels instead of icons by choice.

## 6. Source reference files
- `design/credom-website-preview.html` — self-contained rendered design (open in browser).
- `design/CREDOM Website.dc.html` + `design/support.js` — editable source (renders when served together).
