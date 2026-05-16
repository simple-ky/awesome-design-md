# Restoran Kum Heng — Landing Page Design

> **Status:** Approved · **Date:** 2026-05-16
> **Output:** `restoran/` at repo root
> **Template source:** `design-md/starbucks/DESIGN.md` with red+gold cultural override
> **Implementation spec:** [Mission B](../../missions/mission-b-implementation.md)

---

## Architecture

Three-file static output matching the Mission B CLI format:

```
restoran/
├── index.html       # full single-page site, six sections
├── styles.css       # CSS custom properties from DESIGN.md tokens; override applied
├── script.js        # ~50 lines: smooth-scroll, mobile menu, gallery lightbox
├── DEPLOY.md        # hand-off doc (Cloudflare Pages / Vercel / GitHub Pages)
└── _meta/
    └── generated-with.json
```

## Color System

Starbucks tokens kept entirely except two semantic roles swapped for cultural fit:

| CSS Var | Starbucks Original | Restoran Override | Role |
|---|---|---|---|
| `--primary` | `#00754A` Green Accent | `#8B0000` Chinese Red | CTA fill, active states |
| `--primary-dark` | `#1E3932` House Green | `#5C0000` Deep Crimson | Hero band, footer |
| `--brand-heading` | `#006241` Starbucks Green | `#8B0000` Chinese Red | Section headings |
| `--accent` | `#cba258` Gold | `#D4AF37` True Gold | Prices, ceremony |
| `--canvas` | `#f2f0eb` Neutral Warm | **kept** | Page background |
| `--surface` | `#edebe9` Ceramic | **kept** | Section washes |
| `--ink` | `rgba(0,0,0,0.87)` | **kept** | Body text |
| `--ink-soft` | `rgba(0,0,0,0.58)` | **kept** | Secondary text |

WhatsApp CTA button preserves `#25D366` (WhatsApp brand green) — spec rule: contact green must remain recognizable.

## Typography

SoDoSans (proprietary) → **Manrope** (Google Fonts). Chinese fallback stack appended for `en-ms-zh` language setting.

```css
--font-display: "Manrope", "Noto Serif TC", "PingFang TC", system-ui, sans-serif;
--font-body:    "Manrope", "Noto Sans TC",  system-ui, sans-serif;
--tracking:     -0.01em;
```

## Six Sections

1. **Hero** — Deep crimson (`#5C0000`) band. Wordmark + tagline. Gold-pill primary CTA → WhatsApp. Warm gradient image placeholder (right column, 40/60 split).
2. **About** — Cream canvas (`#f2f0eb`). Family story paragraph. Photo placeholder right.
3. **Menu** — Five item cards on ceramic (`#edebe9`). White card, 12px radius, whisper shadow. Price in gold (`#D4AF37`).
4. **Hours + Location** — Split: hours table (row-striped) left, Google Maps iframe placeholder right. Red section header.
5. **Gallery** — 3-column CSS grid, 5 warm-tone gradient placeholders (crimson/ochre/cream — representing food and interior).
6. **Contact / CTA** — Deep crimson band. WhatsApp button (green preserved). Phone, address. Footer: "Sejak 1978 · Petaling Jaya, Selangor".

## Placeholder Content Source

All copy from `mission-b-implementation.md §9.2` fixture — marked `〔TODO: confirm with merchant〕` where real data is needed. Images are CSS gradients; real photos are drop-in replacements via the `<img>` src attributes documented in `DEPLOY.md`.

## Responsive

Follows Starbucks breakpoints verbatim: `<480px` → `480–767px` → `768–1023px` → `1024px+`. Hero collapses to stacked (image top) at mobile. Gallery drops to 1-column at `<480px`.
