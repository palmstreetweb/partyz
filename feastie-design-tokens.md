# FEASTIE Design Tokens — Cleaned & Build-Ready

> Curated from the raw extraction of `feastie.ca` (Framer site, no clean token
> registry — values reverse-engineered from computed styles). Noise removed,
> licensed fonts swapped, decorative one-offs excluded. This is the version to
> build from.

---

## 1. Fonts

| Role | Use this | License | How to load |
|---|---|---|---|
| **Display** (headings/wordmark) | **Bowlby One** (alt: Bagel Fat One) | Free, OFL | `next/font/google` |
| **Body / UI** | **Aspekta** | Free, OFL | `next/font/local` (self-host) |

**Why the swap:** the original display font (Nitti Mostro Comic) is a *paid*
Bold Monday font — can't be self-hosted from the source site. Bowlby One is the
closest free match for that chunky, rounded poster look.

**3D wordmark shadow** is NOT a font — recreate with CSS:
```css
text-shadow: 6px 6px 0 #4F227C;  /* tune offset to taste */
```

**⚠️ Loading note:** Bowlby One is on Google Fonts (easy). **Aspekta is NOT** —
grab the woff2 from its GitHub release and load via `next/font/local`.

- Heading tracking: `letter-spacing: -0.02em`
- Body weights observed: 400 / 500 / 600 / 700

---

## 2. Colors (exact 1:1 match)

### Brand / surfaces
| Token | Hex |
|---|---|
| Cream (page bg) | `#EDEBE6` |
| Off-white | `#FAF5F6` |
| Near-white | `#FEFAFB` |
| Warm white | `#FAF9F5` |
| **Deep Purple** (primary) | `#4F227C` |
| Off-black (text) | `#141413` |
| Black | `#000000` |
| White | `#FFFFFF` |

### Accent palette
| Token | Hex |
|---|---|
| Sky Blue | `#B8DEFA` |
| Pink | `#FFAAF1` |
| Light Pink | `#FBD3FF` |
| Blush | `#F8B3B8` |
| Lime | `#D2E796` |
| Yellow | `#F7DD54` |
| Red | `#EA392E` |
| Orange | `#FB580D` |
| Indigo | `#3330AF` |

### Misc
| Token | Value |
|---|---|
| Form-control grey | `#767676` |
| Translucent surface | `rgba(254,250,251,0.8)` |
| Divider overlay | `rgba(237,237,237,0.5)` |
| Muted text overlay | `rgba(31,30,29,0.4)` |

---

## 3. Type scale (px)

`12 / 14 / 16 / 18 / 20 / 24 / 28 / 32 / 40 / 46 / 48 / 64 / 70 / 80`

- **Display (Bowlby One):** 80, 70, 64, 48, 46, 40
- **Subhead (Aspekta):** 32, 24, 23
- **Body / UI (Aspekta):** 12–18

*(Junk values like `1px` removed.)*

---

## 4. Spacing — 4px grid

`4 / 8 / 12 / 16 / 20 / 24 / 32 / 40 / 48 / 64 / 80 / 104 / 160`

✅ **You don't need custom spacing tokens** — Tailwind's default 4px scale
already covers all of these (`p-4` = 16px, `p-20` = 80px, `p-40` = 160px, etc).

---

## 5. Border radius

**Keep these 4 as tokens:**
| Token | Value | Use |
|---|---|---|
| `--radius-input` | `12px` | inputs, small tags |
| `--radius-card` | `16px` | cards |
| `--radius-card-lg` | `24px` | bigger cards |
| `rounded-full` | — | all buttons & pills |

**❌ Ignore (one-off bespoke shapes — build as components, not tokens):**
any multi-value radius like `16px 16px 200px 200px`, `800px 800px 16px 16px`,
`800px 24px 24px`. These are the arch/blob shapes (GOOD DOGS card, image masses).

---

## 6. Shadow (the signature)

| Token | Value |
|---|---|
| `--shadow-sticker` | `8px 8px 0 0 rgba(79,34,124,0.24)` |

*Optional secondary (elevated cards):* `0 40px 80px rgba(217,119,87,0.24), 0 4px 14px rgba(217,119,87,0.24)`

---

## 7. Breakpoints

Original (Framer): **810 / 1200 / 1600px**. Mapped to Tailwind v4 below so it
matches visually. (Default Tailwind breakpoints also look basically identical if
you'd rather not customize.)

---

## 8. Ready-to-paste Tailwind v4 `@theme`

Drop this into your `globals.css`:

```css
@theme {
  /* Fonts */
  --font-display: "Bowlby One", sans-serif;
  --font-sans: "Aspekta", "Inter", system-ui, sans-serif;

  /* Brand / surfaces */
  --color-cream: #EDEBE6;
  --color-offwhite: #FAF5F6;
  --color-nearwhite: #FEFAFB;
  --color-warmwhite: #FAF9F5;
  --color-purple: #4F227C;
  --color-ink: #141413;

  /* Accents */
  --color-sky: #B8DEFA;
  --color-pink: #FFAAF1;
  --color-pink-light: #FBD3FF;
  --color-blush: #F8B3B8;
  --color-lime: #D2E796;
  --color-yellow: #F7DD54;
  --color-red: #EA392E;
  --color-orange: #FB580D;
  --color-indigo: #3330AF;

  /* Radius */
  --radius-input: 12px;
  --radius-card: 16px;
  --radius-card-lg: 24px;

  /* Shadow */
  --shadow-sticker: 8px 8px 0 0 rgba(79, 34, 124, 0.24);

  /* Breakpoints (match Framer source) */
  --breakpoint-md: 810px;
  --breakpoint-lg: 1200px;
  --breakpoint-xl: 1600px;
}
```

This auto-generates utilities: `bg-lime`, `text-purple`, `rounded-card`,
`shadow-sticker`, `font-display`, `md:` / `lg:` / `xl:` variants, etc.

---

## 9. next/font setup

```ts
// app/fonts.ts
import { Bowlby_One } from "next/font/google";
import localFont from "next/font/local";

export const display = Bowlby_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

// Download Aspekta woff2 from GitHub, drop in /app/fonts/
export const sans = localFont({
  src: [
    { path: "./fonts/Aspekta-500.woff2", weight: "500" },
    { path: "./fonts/Aspekta-600.woff2", weight: "600" },
    { path: "./fonts/Aspekta-700.woff2", weight: "700" },
  ],
  variable: "--font-sans",
});
```
