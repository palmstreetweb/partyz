import { Wordmark } from "../Wordmark";

type DrinkCardProps = {
  /** Card title — bold display text. */
  title: string;
  /** Small "from VENDOR" text below title. */
  vendor: string;
  /** Background color utility for the card surface. */
  cardBg: string;
  /** Text color utility for title + vendor name (must contrast with cardBg). */
  cardText: string;
  /** Background color utility for the arch-shape image placeholder. */
  archBg: string;
};

function DrinkCard({ title, vendor, cardBg, cardText, archBg }: DrinkCardProps) {
  return (
    <article
      className={`
        ${cardBg} ${cardText}
        rounded-[24px] p-6 lg:p-8
        flex flex-col gap-6 lg:gap-8
        shadow-sticker
        min-h-[420px] lg:min-h-[520px]
      `}
    >
      <header className="flex flex-col gap-2">
        <h3
          className="font-display uppercase text-[36px] md:text-[26px] lg:text-[40px] leading-[0.95] tracking-[-0.02em]"
        >
          {title}
        </h3>
      </header>

      {/* Arch-shape image placeholder — flat-color half-pill rising from the
          bottom edge of the card. */}
      <div className="flex-1 relative overflow-hidden rounded-b-[16px]">
        <div
          aria-hidden
          className={`${archBg} absolute inset-x-4 bottom-0 top-4 rounded-t-full`}
        />
      </div>

      <footer className="font-sans text-[14px] lg:text-[15px] leading-snug">
        <div className="font-normal opacity-90">from</div>
        <div className="font-bold uppercase tracking-[0.04em]">{vendor}</div>
      </footer>
    </article>
  );
}

export function SipSection() {
  return (
    <section
      aria-label="Sip section — drink categories"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Section header lockup */}
        <header className="flex flex-col gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="flex flex-col items-start">
            <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em] mb-2">
              Sip
            </span>
            <Wordmark
              as="h2"
              depth={8}
              depthColor="var(--color-offwhite)"
              className="text-[64px] md:text-[96px] lg:text-[140px] leading-[0.85] block"
            >
              GOOD
            </Wordmark>
          </div>

          <p className="font-sans font-semibold text-purple text-[18px] md:text-[20px] lg:text-[24px] max-w-2xl leading-snug">
            Top-tier drinks from your city&apos;s favorite small bars,
            independent breweries, and natural-wine purveyors.
          </p>
        </header>

        {/* 3-card grid: drink categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <DrinkCard
            title="Craft Cocktails"
            vendor="City Mixology Co."
            cardBg="bg-purple"
            cardText="text-pink-light"
            archBg="bg-pink"
          />
          <DrinkCard
            title="Local Beer"
            vendor="Brooklyn Barrel"
            cardBg="bg-lime"
            cardText="text-indigo"
            archBg="bg-yellow"
          />
          <DrinkCard
            title="Natural Wines"
            vendor="Vine Collective"
            cardBg="bg-orange"
            cardText="text-warmwhite"
            archBg="bg-blush"
          />
        </div>
      </div>
    </section>
  );
}
