# Decisions

Notes on design / build choices made during the Partyz rebuild from the
feastie.ca reference. Written for the next engineer (or future me) so the
"why" doesn't get lost.

## Font swap: Nitti Mostro Comic Solid → Bowlby One

**Source:** The live FEASTIE site uses **Nitti Mostro Comic Solid** for its
display wordmark (FEASTIE, SIP / SNACK / FESTIVAL, section headers).

**Why we swapped:** Nitti Mostro Comic is a paid Bold Monday foundry font.
It cannot be redistributed or self-hosted from the source site, and we don't
have a license. Building against it would either violate Bold Monday's
license or break the moment we deploy.

**What we use instead:** **Bowlby One** (Google Fonts, OFL license). Free,
self-host-able via `next/font/google`. Closest free match for the chunky,
rounded, poster-display look. Loaded as a single weight 400 — the family
only ships one weight, which matches Nitti Mostro Comic Solid's single-style
nature.

**Visual delta vs the original:**
- Bowlby One letterforms are slightly narrower and more uniform.
- Nitti has more hand-drawn warmth (slight curve variation per letter).
- Both feel chunky and poster-y, so the *brand voice* survives the swap.
- The 3D extrusion behavior differs (see below).

## 3D wordmark technique: SVG (theirs) → CSS text-shadow (ours)

**What the live site does:** The giant `FEASTIE` wordmark is an **SVG**
referencing a `<symbol>` with pre-baked extrusion paths
(`viewBox="0 0 453 89"`, single `<use>` element). The 3D depth is part of
the asset itself, drawn with bezier paths.

**What we do:** A reusable
[`Wordmark`](components/Wordmark.tsx) component that stacks N
`text-shadow` layers in cream against a final purple outline layer. Front
face is `color: purple`. Depth direction is bottom-right.

**Why we picked text-shadow:**
- No SVG asset to design/maintain per word.
- Works for any string (PARTYZ, GOOD, US!, PARTYZ-the-footer, etc.).
- Theme-driven via CSS variables.

**Honest tradeoff:** This will *never* pixel-match the live wordmark. The
text-shadow technique produces a "stair-step" extrusion that's slightly
chunkier-looking than the live SVG's clean bezier extrusion. We get the
*feel* but not the *form*.

**Switching to SVG later** would mean designing per-word SVG assets with the
extrusion baked in. Worth doing if pixel parity becomes a brand requirement.

## Photography → flat color shapes

**What the live site does:** Real food/drink photography placed inside arch
masks (e.g., the drinks tile in the hero, the food/drinks arches at the
bottom of the hero, the photo strip in 2025 Moments).

**What we do:** Flat solid-color arch shapes pulled from the accent palette.

**Why:** Per the project brief — no copying of proprietary assets, no
licensed photography. The arch *shape language* is preserved (it's a strong
visual signature of the design); the *content* is dummy.

## Body bg: cream (`#EDEBE6`)

I flipped this twice during the build before settling on cream, which is
what `getComputedStyle(document.body).backgroundColor` returns on the live
site. Cream looks marginally greyer in isolation than my eye expected when
comparing screenshots, but it *is* the live value. The pinker feel I was
chasing was a screenshot color-profile artifact.

## Live countdown wired (not static placeholder)

Initial direction was "static placeholder, don't wire a real countdown."
After observing the live FEASTIE actually ticks, we switched to a real
countdown to `2026-07-18T12:00:00` in
[`components/Countdown.tsx`](components/Countdown.tsx).

This is the only client component on the page — kept narrow to avoid
hydrating the entire header. Uses `setInterval(1s)` and `tabular-nums` so
digits don't jitter.

## "GOOD DOGS WELCOME" → dedicated "Pet friendly" section only

The live site puts a `GOOD DOGS WELCOME` shield-shape badge in the hero
*and* has a separate dedicated section further down. We dropped the hero
badge per project direction and renamed the dedicated section to a more
generic "Pet friendly" with `Partyz`-flavored copy.

## Tailwind v4 quirks we hit

- **Custom animations must live inside `@theme`.** Defining `@keyframes`
  at the top level of `globals.css` (outside `@theme`) silently does not
  register the `animate-*` utility. The marquee animation broke until I
  moved `@keyframes marquee` inside the `@theme` block.
- **Arbitrary negative rotation:** `rotate-[-4deg]` works, `-rotate-[4deg]`
  also compiles but applies via the `rotate` property (not `transform`).
  Either is fine; query `getComputedStyle(el).rotate`, not `.transform`.

## Font extraction gotcha (Framer sites)

The live FEASTIE site loads each Aspekta weight as a **separate
font-family** name (`"Aspekta 600"`, `"Aspekta 700"`, …). This means
`getComputedStyle(el).fontWeight` always returns `400`, but the visual
weight comes from the family-name selection. When matching weights against
a Framer reference, always trust the **fontFamily** string, never the
**fontWeight** number.

## Hover pattern for primary CTAs

Single shared treatment on every pill button:
- `hover:text-orange focus-visible:text-orange`
- `hover:shadow-[-6px_6px_0_0_var(--color-purple)]`
- 200ms ease-out transition on color + shadow

The drop-shadow appears below-left, creating a "lifted off a purple base"
effect that mirrors the live FEASTIE GET TICKETS hover.

## Custom Framer breakpoints dropped

Tokens file proposed `md:810 / lg:1200 / xl:1600` to match Framer's source
breakpoints. We use Tailwind defaults (`md:768 / lg:1024 / xl:1280`)
instead — keeps the code clean and matches the QA breakpoints you asked
about (375 / 768 / 1280).
