# CREDOM site redesign — design canvas source (September 2026)

Editable source of the "CREDOM Site Redesign" canvas:
https://claude.ai/code/artifact/2ed7ce89-9700-4b6d-a79d-bdf81abda5a7

- `build.py` generates every `*.dc.html` artboard (shared CSS + per-page markup; the
  mobile artboards are the same markup rendered at 390px via media queries).
  Run `python3 build.py` from this folder after editing it.
- `canvas.json` lays the artboards out (desktop 1440 at x=0, mobile 390 at x=1560) and
  holds the sticky notes.
- Images are downsampled copies of `public/images/*` sized for the canvas.
- Copy is taken from Pelumi's 8 Sept 2026 HTML draft ("DOCTYPE html.html") plus the
  copy already shipping in `lib/content.ts` / `lib/services.ts`.

Re-seed the canvas from these files (not from the published page) after edits.
