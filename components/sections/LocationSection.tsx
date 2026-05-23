import { Wordmark } from "../Wordmark";

/**
 * Stylized "map" placeholder — chunky shape instead of a real Google Maps embed.
 * Soft warm-white card with a centered pin and abstract roads.
 */
function MapShape() {
  return (
    <div
      aria-hidden
      className="
        relative aspect-square w-full
        rounded-[24px] bg-warmwhite
        shadow-sticker overflow-hidden
      "
    >
      {/* Abstract road grid */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full text-purple/15"
        preserveAspectRatio="none"
      >
        <line x1="0" y1="120" x2="400" y2="120" stroke="currentColor" strokeWidth="2" />
        <line x1="0" y1="260" x2="400" y2="260" stroke="currentColor" strokeWidth="2" />
        <line x1="140" y1="0" x2="140" y2="400" stroke="currentColor" strokeWidth="2" />
        <line x1="280" y1="0" x2="280" y2="400" stroke="currentColor" strokeWidth="2" />
        {/* Squiggly "river" */}
        <path
          d="M0 320 Q 100 280 200 320 T 400 300"
          fill="none"
          stroke="var(--color-sky)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
      {/* Map pin */}
      <div
        className="
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
          flex flex-col items-center
        "
      >
        <div className="size-12 rounded-full bg-red border-4 border-warmwhite shadow-sticker" />
        <div className="size-3 rounded-full bg-red -mt-1" />
      </div>
    </div>
  );
}

export function LocationSection() {
  return (
    <section
      aria-label="Location — Come find us"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: header + venue info */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            <header className="flex flex-col items-start">
              <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em] mb-2">
                Come find
              </span>
              <Wordmark
                as="h2"
                depth={8}
                depthColor="var(--color-offwhite)"
                className="text-[64px] md:text-[96px] lg:text-[120px] leading-[0.85] block"
              >
                US!
              </Wordmark>
            </header>

            <div
              className="
                bg-warmwhite rounded-[24px] shadow-sticker
                px-6 py-7 lg:px-8 lg:py-9
                flex flex-col gap-4
              "
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-display uppercase text-[28px] lg:text-[36px] text-purple leading-[0.95] tracking-[-0.02em]">
                  Brooklyn Navy Yard
                </h3>
                <p className="font-sans font-semibold text-purple/80 text-[14px] lg:text-[16px] leading-snug">
                  Event Space · 63 Flushing Ave
                  <br />
                  Brooklyn, NY 11205, USA
                </p>
              </div>

              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  self-start inline-flex items-center gap-2
                  rounded-full bg-purple text-warmwhite
                  font-sans font-bold uppercase text-[13px] lg:text-[15px] tracking-[-0.02em]
                  h-11 lg:h-12 px-6 lg:px-7
                  transition-[color,box-shadow] duration-200 ease-out
                  hover:text-yellow focus-visible:text-yellow
                  hover:shadow-[-6px_6px_0_0_var(--color-pink)]
                  focus-visible:shadow-[-6px_6px_0_0_var(--color-pink)]
                  focus-visible:outline-none
                "
              >
                Open in Google Maps
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>

          {/* Right: map */}
          <div className="order-1 lg:order-2 max-w-[480px] mx-auto w-full lg:max-w-none">
            <MapShape />
          </div>
        </div>
      </div>
    </section>
  );
}
