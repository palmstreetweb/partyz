/**
 * "2025 PARTYZ MOMENTS" — horizontal photo strip.
 * No real photography per project brief, so each tile is a flat-color
 * arch-topped shape with a slight rotation to keep the hand-collaged feel.
 */
const tiles = [
  { bg: "bg-pink", rotate: "rotate-[-3deg]" },
  { bg: "bg-sky", rotate: "rotate-[2deg]" },
  { bg: "bg-yellow", rotate: "rotate-[-1deg]" },
  { bg: "bg-lime", rotate: "rotate-[3deg]" },
  { bg: "bg-blush", rotate: "rotate-[-2deg]" },
  { bg: "bg-orange", rotate: "rotate-[1deg]" },
];

export function MomentsStrip() {
  return (
    <section
      aria-label="Partyz moments — photo strip"
      className="relative bg-cream overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <header className="flex flex-col items-center gap-2 mb-10 lg:mb-14">
          <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em]">
            2025
          </span>
          <h2 className="font-display uppercase text-purple text-[40px] md:text-[56px] lg:text-[72px] leading-[0.95] tracking-[-0.02em] text-center">
            Partyz moments
          </h2>
        </header>

        {/* Horizontal strip — scrolls on overflow */}
        <div className="flex gap-5 lg:gap-8 overflow-x-auto pb-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 snap-x snap-mandatory">
          {tiles.map((t, i) => (
            <div
              key={i}
              className={`
                ${t.bg} ${t.rotate}
                shrink-0 snap-start
                w-[240px] h-[320px] md:w-[280px] md:h-[360px] lg:w-[320px] lg:h-[400px]
                rounded-t-full rounded-b-[20px]
                shadow-sticker
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
