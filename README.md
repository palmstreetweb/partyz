# Partyz

Single-page marketing site for a fictional one-day food + drinks + music
festival. Built as a design rebuild of [feastie.ca](https://feastie.ca/) — same
visual language (chunky multi-color collage, 3D extruded section headers, arch
shapes), generic Partyz content, no proprietary assets copied.

## Stack

- **Next.js 16** (App Router, Turbopack)
- **React 19**
- **Tailwind CSS v4** (CSS-first `@theme`, no `tailwind.config`)
- **TypeScript 5**
- **next/font**: Bowlby One (Google) for display, Aspekta (self-hosted woff2) for body / UI

## Develop

```bash
pnpm install
pnpm dev      # starts on http://localhost:3000
pnpm build    # production build
pnpm lint
```

## Structure

```
app/
  fonts/             # Aspekta woff2 files (OFL — see Aspekta-LICENSE.txt)
  fonts.ts           # next/font setup (Bowlby One + Aspekta)
  globals.css        # @theme tokens + body bg
  layout.tsx         # root layout, wires font CSS variables
  page.tsx           # composes all section components
components/
  Wordmark.tsx       # reusable 3D extruded display wordmark
  Countdown.tsx      # live ticking countdown (client component)
  sections/          # one component per page section, in DOM order
DECISIONS.md         # design / build decisions log
reference-screenshots/  # full-page captures of the live FEASTIE site at
                        # 1280 / 768 / 375 (diff targets, gitignore-able)
```

## Design tokens

All colors, radii, the signature `shadow-sticker`, and the marquee animation
live in `app/globals.css` under the `@theme` block. **No hex literals or
random px values in component code** — see [DECISIONS.md](DECISIONS.md) for the
audit and rationale.

| Token group | Where |
|---|---|
| Brand / accent colors | `--color-*` in `@theme` |
| Radii | `--radius-input`, `--radius-card`, `--radius-card-lg` |
| Signature shadow | `--shadow-sticker` (`8px 8px 0 0 rgba(79,34,124,0.24)`) |
| Marquee animation | `--animate-marquee` + `@keyframes` inside `@theme` (Tailwind v4 requirement) |

## Adding a section

1. Create `components/sections/MyThing.tsx` — semantic root (`<section>` with
   `aria-label`), theme-token-only styles.
2. Import + render it in `app/page.tsx` in the correct DOM position.

## What's intentionally divergent from feastie.ca

- **Display font:** Bowlby One (free / OFL) instead of Nitti Mostro Comic
  Solid (paid Bold Monday foundry — can't be redistributed).
- **3D wordmark:** CSS `text-shadow` stack on real text instead of SVG with
  pre-baked extrusion paths. Looks similar; won't pixel-match.
- **Photography:** flat-color arch shapes instead of food / drink photos.
- **Brand & copy:** "Partyz" everywhere, generic vendors / dummy dates.
- **Hero "Good Dogs Welcome" badge:** dropped; only the dedicated "Pet
  friendly" section uses the pup content.

Full reasoning in [DECISIONS.md](DECISIONS.md).
