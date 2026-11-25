# Blossom Rocket Brand Guide

Version 1.0 · November 2026

This guide is built from the live brand system in this repository (`styles/tokens.css`, `styles/typography.css`, `styles/gradients.css`, and the logo files in `public/`). Where the site and this guide differ, update both together.

---

## 1. Brand at a glance

**Who we are.** Blossom Rocket helps organizations centralize, automate, and scale branded merchandise through on-demand Company Stores, Co-Branding programs and Swag Storefronts powered by SplashBrands, supported by in-house creative services (brand identity, brand systems, website design, marketing asset libraries).

**The idea in the name.** *Blossom* is growth, craft and care. *Rocket* is speed, lift and momentum. The mark joins both: a single continuous line that reads as a flower bud and a rocket at the same time, drawn in the full brand spectrum.

**Personality.** Optimistic, clear, energetic, organized. Playful in color, disciplined in layout.

---

## 2. Logo

### Primary lockup
Horizontal lockup: the lowercase wordmark **blossom** + the bud/rocket mark + **rocket**. The mark sits between the words and drops below the baseline, so the flame/leaves hang under the line of type.

| File | Use |
|---|---|
| `brand/logos/logo.svg` | Primary, dark wordmark (`#101211`) on light backgrounds |
| `brand/logos/logo-inverted.svg` | White wordmark on dark or brand backgrounds |
| `brand/logos/logo.jpg` | Raster preview, 1920×1080 on white |

Note: the gradient mark inside the SVGs is embedded as raster images. Ask for a fully vector master before large-format print (signage, embroidery, apparel).

### The mark
One continuous rounded stroke with round caps. Its gradient runs top to bottom through the spectrum:

| Point on the mark | Sampled color |
|---|---|
| Tip of the bud | `#7663F3` violet |
| Left petal | `#FC66FD` pink |
| Crossing (body) | `#006FED` blue |
| Left fin | `#02BBF3` sky |
| Center flame | `#0FDECC` teal |
| Right fin | `#7AC367` green |
| Right fin tail | `#FF9505` orange |

### Clear space and size
- Clear space on all sides equals the x-height of the wordmark (the height of the "o"). Nothing enters that zone.
- Minimum width: 120 px on screen, 1.25 in / 32 mm in print. Below that, use the mark alone.
- The mark alone (bud/rocket) can be used as an avatar, favicon or stamp, minimum 24 px.

### Backgrounds
- Light: off-white `#FAFAF8`, white, or Cloud `#F4F3FC` with the primary logo.
- Dark: Ink `#1A1A2E` or Zinc `#18181B` with the inverted logo.
- Photography: only over calm, low-detail areas; add an Ink overlay (`rgba(26,26,46,0.4)`) if contrast is weak.

### Don't
- Recolor the wordmark in a gradient, or the mark in a single flat color (except one-color production, below).
- Stretch, rotate, outline, add shadows or glows.
- Reorder the lockup or set the words in another typeface.
- Place the full-color mark on a busy gradient or saturated pink/violet.
- Capitalize it in the logo. The logo is always lowercase; in running text write **Blossom Rocket**.

One-color production (embroidery, screen print, engraving): solid Ink `#1A1A2E` or solid white for the whole lockup.

---

## 3. Color

The palette is a spectrum, from violet through pink, blue, cyan, green and amber, held together by deep ink neutrals and lots of off-white space. Violet is the anchor.

### Core brand colors

| Name | Hex | Role |
|---|---|---|
| **Violet** (primary) | `#7C5CE8` | Primary buttons, links, focus, brand text |
| Violet Dark | `#4C35A8` | Button hover, pressed |
| Violet Light | `#EDE9FD` | Tints, chips, active backgrounds |
| **Pink** (accent) | `#D946A8` | Accent text, link hover, highlights |
| Blue | `#2E8FE8` | Info, supporting accent |
| Cyan | `#06C4A4` | Supporting accent, growth |
| Green | `#2ECF8E` | Success, growth |
| Amber | `#F5A623` | Warmth, warning, end of spectrum |

### Neutrals

| Name | Hex | Role |
|---|---|---|
| Ink | `#1A1A2E` | Primary text, dark surfaces |
| Ink Mid | `#4A4A6A` | Secondary text |
| Ink Faint | `#8480AE` | Tertiary text, captions |
| Cloud | `#F4F3FC` | Page background (app), text on dark |
| Off-white | `#FAFAF8` | Site body background |
| Zinc | `#18181B` | Neutral dark surface |
| White | `#FFFFFF` | Cards, base surface |
| Border | `#E4E2F4` / strong `#C9C6E4` | Dividers, inputs |

Each hue also has a full 50–900 scale in `brand/tokens/tokens.css` (and `colors.json`).

### Proportion
Roughly 70% neutrals (off-white, white, cloud), 20% ink, 10% color. Color is a signal, not wallpaper. Use full-spectrum gradients for thin accents (lines, underlines, a highlighted phrase), not big fills.

### Gradients

| Token | Stops | Use |
|---|---|---|
| Spectrum (site signature) | `#9B5CF6 → #6366F1 → #3B82F6 → #06B6D4 → #10B981 → #F59E0B` | Highlighted headline words, 2.5 px hover bars, progress bars, scrollbar |
| Brand | `#7C5CE8 → #D946A8` (135°) | Brand panels, badges |
| Cool Arc | `#7C5CE8 → #2E8FE8 → #06C4A4` | Cool supporting panels |
| Warm Glow | `#D946A8 → #F5A623` | Warm callouts |
| Growth | `#06C4A4 → #3DE9A4` | Success / growth moments |
| Dark Brand | `#1A1A2E → #2D1F5E` | Dark hero and footer backgrounds |
| Label line | `#9B5CF6 → #06B6D4` | Eyebrow dash, nav underline, divider dots |

### Accessibility
- Body text is Ink or Ink Mid on light surfaces. Never set body copy in a brand color or gradient.
- Violet `#7C5CE8` on white passes AA for large text and UI; for small text on white prefer Violet Dark `#4C35A8`.
- Gradient text is for display sizes only (24 px and up).

---

## 4. Typography

| Role | Typeface | Notes |
|---|---|---|
| Display / headings | **Parkinsans** (Google Fonts) | Semibold (600), tight tracking −0.03em |
| Body / UI | **Plus Jakarta Sans** (Google Fonts) | Regular 400, Semibold 600 for labels |

Fallbacks: `system-ui, sans-serif`.

> Site note: Parkinsans is loaded via `next/font`, but Plus Jakarta Sans is referenced in CSS without being loaded, so visitors without it installed see the system font. Load it with `next/font/google` to match this guide.

### Type scale (desktop / mobile)

| Style | Font | Size | Line height | Tracking |
|---|---|---|---|---|
| H1 | Parkinsans 600 | 72 / 36 px | 1.1 | −0.03em |
| H2 | Parkinsans 600 | 60 / 36 px | 1.15 | −0.03em |
| H3 | Parkinsans 600 | 30 / 30 px | 1.15 | −0.03em |
| H4 | Parkinsans 600 | 26 px | 1.2 | −0.02em |
| H5 | Parkinsans 600 | 24 px | 1.2 | −0.02em |
| Subtext / lead | Plus Jakarta Sans 400 | 18 / 16 px | 1.8 | 0 |
| Body | Plus Jakarta Sans 400 | 16 / 14 px | 1.6 | 0 |
| Small | Plus Jakarta Sans 400 | 14 / 12 px | 1.5 | 0 |
| Eyebrow / label | Plus Jakarta Sans 600, UPPERCASE | 11 px | 1 | 0.16em |
| Pill | Plus Jakarta Sans 600, UPPERCASE | 12 / 10 px | 1 | 0.1em |

### Headline pattern
Title Case headline, with the payoff phrase set in the spectrum gradient:
> Branded Merchandise, *Centralized and On Demand.*
> Three Ways to Put Branded Merchandise *On Autopilot.*

Eyebrows sit above headings: a short 18 px gradient dash, then the label in gradient caps (e.g. "PRIMARY SOLUTIONS").

---

## 5. Graphic elements and imagery

- **Glow orbs.** Large, heavily blurred circles (blur 70–90 px, opacity 12–22%) in violet `#9B5CF6`, cyan `#06B6D4` and green `#10B981`, placed off the corners of hero sections. They add atmosphere, never content.
- **Spectrum lines.** 1.5–2.5 px gradient rules that grow in from the left on hover (ease `cubic-bezier(0.16, 1, 0.3, 1)`).
- **Pills.** Fully rounded capsules with uppercase labels for categories and proof points ("No Minimums", "No Inventory").
- **Buttons.** Fully rounded (pill) shapes. Primary is Violet with white text, hover Violet Dark; the spectrum gradient may fade in on hover. Secondary is an outline button. The 🚀 emoji may close a primary CTA ("Launch Your Brand with Blossom Rocket 🚀").
- **Shapes.** Soft and rounded: round caps, full-radius pills, generous card radii (16–24 px). Avoid sharp, heavy, or boxy graphics.
- **Custom cursor.** On desktop, a small violet dot with a trailing ring, echoing the bud.
- **Photography.** Real merchandise in real use: people wearing and using branded products, clean flat-lays and lifestyle product shots. Bright, natural light, clean backgrounds with room for type. Avoid dark, moody, or cluttered stock imagery.
- **Motion.** Calm and confident: fade-up reveals, long expo ease-outs, nothing bouncy.
- **Layout.** Generous whitespace. Section padding scales from 80 px to 160 px vertically. Centered hero, two-column feature sections on desktop.

---

## 6. Voice and tone

**We sound like** a capable, upbeat partner who makes a messy process simple.

- **Clear before clever.** Say what it is and what it does: "Company Stores centralize merchandise ordering across an entire organization."
- **Concrete benefits.** Lead with specifics: no order minimums, no inventory, ships in 2 to 5 days, thousands of pre-approved products.
- **Energetic, not hype.** One flourish per headline, usually the gradient phrase. A rocket emoji on a CTA is the ceiling.
- **Speak to the team.** Address marketing, brand, communications, procurement and operations teams directly about their problems: consistency, approvals, time.

| Do | Don't |
|---|---|
| "Put branded merchandise on autopilot." | "Revolutionary synergistic swag solutions!!!" |
| "No minimums. No inventory." | Vague claims without proof points |
| "Launch Your Brand with Blossom Rocket 🚀" | Multiple emojis, slang, ALL CAPS sentences |

Naming: **Blossom Rocket** (two words, both capitalized) in text; product names are **Company Stores**, **Co-Branding**, **Swag Storefronts**. Partner name is **SplashBrands**.

---

## 7. Files and tokens

```
brand/
  BRAND_GUIDE.md          this guide
  logos/logo.svg          primary lockup, dark wordmark
  logos/logo-inverted.svg white wordmark for dark backgrounds
  logos/logo.jpg          raster preview
  tokens/tokens.css       Tailwind v4 @theme tokens (copy of styles/tokens.css)
  tokens/colors.json      all color tokens as JSON
```

The source of truth for the website remains `styles/tokens.css`.
