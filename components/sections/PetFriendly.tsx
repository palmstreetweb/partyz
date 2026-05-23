import { Wordmark } from "../Wordmark";

/**
 * Bespoke arch shape that holds the "pet friendly" illustration —
 * a tall arch (rounded-top half-pill) with paw prints inside.
 */
function PetArchCard() {
  return (
    <div
      aria-hidden
      className="
        relative w-full max-w-[440px] aspect-[3/4] mx-auto
        rounded-t-full rounded-b-[24px]
        bg-sky shadow-sticker overflow-hidden
      "
    >
      {/* Paw prints scattered */}
      <svg
        viewBox="0 0 200 280"
        className="absolute inset-0 w-full h-full text-purple"
      >
        {/* Cluster 1 — top */}
        <Paw x={70} y={50} r={1} />
        <Paw x={120} y={70} r={-12} />
        {/* Cluster 2 — middle */}
        <Paw x={50} y={150} r={8} />
        <Paw x={130} y={160} r={-5} />
        {/* Cluster 3 — bottom */}
        <Paw x={95} y={230} r={3} />
      </svg>
    </div>
  );
}

function Paw({ x, y, r }: { x: number; y: number; r: number }) {
  // Paw print at viewBox coords (200×280). r = rotation degrees.
  return (
    <g transform={`translate(${x},${y}) rotate(${r})`}>
      {/* Main pad */}
      <ellipse cx="0" cy="6" rx="11" ry="9" fill="currentColor" />
      {/* Toe pads */}
      <ellipse cx="-11" cy="-10" rx="4" ry="5" fill="currentColor" />
      <ellipse cx="-4" cy="-16" rx="4" ry="5" fill="currentColor" />
      <ellipse cx="4" cy="-16" rx="4" ry="5" fill="currentColor" />
      <ellipse cx="11" cy="-10" rx="4" ry="5" fill="currentColor" />
    </g>
  );
}

export function PetFriendly() {
  return (
    <section
      aria-label="Pet friendly — arch-shape image card"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="flex flex-col gap-6 lg:gap-8 order-2 lg:order-1">
            <header className="flex flex-col items-start">
              <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em] mb-2">
                Bring the dog
              </span>
              <Wordmark
                as="h2"
                depth={8}
                depthColor="var(--color-offwhite)"
                className="text-[56px] md:text-[80px] lg:text-[104px] leading-[0.85] block"
              >
                Pet friendly
              </Wordmark>
            </header>

            <p className="font-sans font-semibold text-purple text-[16px] md:text-[18px] lg:text-[20px] leading-snug max-w-prose">
              Partyz is dog-friendly. We&apos;ve curated an outdoor pup-zone with
              treats, fresh water, shade, and a dedicated runaround for your
              furry plus-one. Leashes welcome — well-mannered hoomans
              encouraged.
            </p>

            <a
              href="#about-pets"
              className="
                self-start inline-flex items-center gap-2
                rounded-full bg-purple text-warmwhite
                font-sans font-bold uppercase text-[14px] lg:text-[16px] tracking-[-0.02em]
                h-12 lg:h-14 px-7 lg:px-10
                transition-[color,box-shadow] duration-200 ease-out
                hover:text-yellow focus-visible:text-yellow
                hover:shadow-[-6px_6px_0_0_var(--color-pink)]
                focus-visible:shadow-[-6px_6px_0_0_var(--color-pink)]
                focus-visible:outline-none
              "
            >
              Pet guidelines
            </a>
          </div>

          {/* Right: arch card */}
          <div className="order-1 lg:order-2">
            <PetArchCard />
          </div>
        </div>
      </div>
    </section>
  );
}
