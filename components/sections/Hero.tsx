import { Wordmark } from "../Wordmark";

/**
 * Bespoke shapes used only in the hero.
 * These exist as one-off components per the "arch / blob" guidance in the build loop.
 */

function PinkBlob({ className = "" }: { className?: string }) {
  // Soft pink "wave" blob that anchors the bottom of the hero.
  // Lopsided ellipse — wider on the right, peaks above center.
  return (
    <svg
      aria-hidden
      viewBox="0 0 1280 320"
      preserveAspectRatio="none"
      className={`absolute inset-x-0 bottom-0 w-full h-[220px] md:h-[280px] lg:h-[320px] ${className}`}
    >
      <path
        d="M0 220 C 220 60, 480 0, 760 60 C 960 110, 1100 200, 1280 180 L 1280 320 L 0 320 Z"
        fill="var(--color-pink)"
        opacity="0.95"
      />
    </svg>
  );
}

function SkyArch({ className = "" }: { className?: string }) {
  // Sky-blue arch peeking from the right edge — half-pill shape rising out of the floor.
  return (
    <svg
      aria-hidden
      viewBox="0 0 360 360"
      className={`absolute right-0 bottom-0 w-[200px] md:w-[280px] lg:w-[360px] aspect-square ${className}`}
    >
      <path
        d="M0 360 L 0 200 A 180 200 0 0 1 360 200 L 360 360 Z"
        fill="var(--color-sky)"
      />
    </svg>
  );
}

function Squiggle({
  className = "",
  variant = "curl",
}: {
  className?: string;
  variant?: "curl" | "dashes" | "rays";
}) {
  if (variant === "curl") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden className={className}>
        <path
          d="M4 24 Q14 4 24 24 Q34 44 44 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  if (variant === "dashes") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden className={className}>
        {[
          [10, 8, 24, 18],
          [30, 12, 40, 24],
          [12, 28, 22, 38],
          [32, 32, 42, 42],
        ].map(([x1, y1, x2, y2], i) => (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        ))}
      </svg>
    );
  }
  // rays
  return (
    <svg viewBox="0 0 48 48" aria-hidden className={className}>
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180;
        const x1 = 24 + Math.cos(rad) * 12;
        const y1 = 24 + Math.sin(rad) * 12;
        const x2 = 24 + Math.cos(rad) * 22;
        const y2 = 24 + Math.sin(rad) * 22;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        );
      })}
    </svg>
  );
}

/**
 * Multi-color stickered lockup — three party-themed words stacked, each on its
 * own colored sticker block. Rotation and offsets keep the feel hand-placed.
 */
function PartyLockup() {
  return (
    <div className="relative inline-flex flex-col items-start gap-3 lg:gap-4">
      {/* Decorative dashes upper-left of the lockup */}
      <Squiggle
        variant="dashes"
        className="absolute -left-14 -top-4 size-12 lg:-left-20 lg:size-16 text-purple hidden md:block"
      />
      {/* Decorative rays right of the lockup */}
      <Squiggle
        variant="rays"
        className="absolute -right-10 top-1/3 size-10 lg:-right-16 lg:size-14 text-purple hidden md:block"
      />

      <span
        className="font-display uppercase text-indigo bg-lime
          px-6 py-3 rounded-[24px] shadow-sticker
          text-[60px] md:text-[88px] lg:text-[110px] leading-[0.95] tracking-[-0.02em]
          rotate-[-4deg] origin-bottom-left"
      >
        Sip
      </span>
      <span
        className="font-display uppercase text-yellow bg-orange
          px-6 py-3 rounded-[24px] shadow-sticker
          text-[60px] md:text-[88px] lg:text-[110px] leading-[0.95] tracking-[-0.02em]
          rotate-[-1deg] ml-8 lg:ml-16"
      >
        Dance
      </span>
      <span
        className="font-display uppercase text-purple bg-pink
          px-6 py-3 rounded-[24px] shadow-sticker
          text-[60px] md:text-[88px] lg:text-[110px] leading-[0.95] tracking-[-0.02em]
          rotate-[2deg]"
      >
        Celebrate
      </span>
    </div>
  );
}

/**
 * Smaller secondary CTA — pink-light pill that mirrors the GET TICKETS hover
 * pattern (lifted reveal of a purple drop-shadow with text-orange).
 */
function SponsorButton() {
  return (
    <a
      href="#sponsor"
      className="
        inline-flex items-center justify-center rounded-full
        bg-pink text-purple
        font-sans font-bold uppercase text-[15px] lg:text-[18px] tracking-[-0.02em]
        h-12 lg:h-16 px-8 lg:px-10
        transition-[color,box-shadow] duration-200 ease-out
        hover:text-orange focus-visible:text-orange
        hover:shadow-[-6px_6px_0_0_var(--color-purple)]
        focus-visible:shadow-[-6px_6px_0_0_var(--color-purple)]
        focus-visible:outline-none
      "
    >
      Become a sponsor
    </a>
  );
}

export function Hero() {
  return (
    <section aria-label="Hero" className="relative overflow-hidden">
      {/* Decorative shapes layered behind content */}
      <PinkBlob />
      <SkyArch />

      <div className="relative mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-6 pb-32 md:pb-48 lg:pt-12 lg:pb-56">
        {/* Giant wordmark + sponsor CTA */}
        <div className="relative">
          <Wordmark
            depth={12}
            depthColor="var(--color-offwhite)"
            className="text-[88px] md:text-[156px] lg:text-[260px] leading-[0.85] block w-full text-center md:text-left"
          >
            PARTYZ
          </Wordmark>

          {/* Sponsor CTA: below the wordmark, right-aligned on desktop. */}
          <div className="mt-6 lg:mt-4 flex justify-center lg:justify-end">
            <SponsorButton />
          </div>
        </div>

        {/* Stickered lockup + caption (left-anchored) */}
        <div className="mt-10 lg:mt-16 flex flex-col items-start gap-6">
          <PartyLockup />

          <div className="flex items-center gap-3">
            {/* Decorative curl next to caption */}
            <Squiggle
              variant="curl"
              className="size-6 lg:size-8 text-purple"
            />
            <p className="font-sans font-bold uppercase text-purple text-[12px] md:text-[14px] tracking-[0.06em]">
              With live music &amp; DJs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
