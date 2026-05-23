import { Wordmark } from "../Wordmark";

type StatProps = {
  /** Big number / metric text (e.g., "40+"). */
  metric: string;
  /** Label under the metric. */
  label: string;
  /** Background utility. */
  bg: string;
  /** Metric text color utility. */
  metricColor: string;
  /** Label color utility. */
  labelColor: string;
  /** Optional rotation utility (e.g., "rotate-[-2deg]"). */
  rotation?: string;
};

function StatCard({ metric, label, bg, metricColor, labelColor, rotation = "" }: StatProps) {
  return (
    <div
      className={`
        ${bg}
        rounded-[24px] shadow-sticker
        px-6 py-8 lg:px-8 lg:py-10
        flex flex-col items-center justify-center gap-2 lg:gap-3
        text-center
        ${rotation}
      `}
    >
      <div className={`${metricColor} font-display text-[64px] md:text-[88px] lg:text-[110px] leading-[0.85] tracking-[-0.02em]`}>
        {metric}
      </div>
      <div className={`${labelColor} font-sans font-bold uppercase text-[14px] lg:text-[16px] tracking-[0.06em]`}>
        {label}
      </div>
    </div>
  );
}

export function EatSection() {
  return (
    <section
      aria-label="Eat section — intro + stats"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* Section header lockup — mirror of Sip */}
        <header className="flex flex-col gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="flex flex-col items-start">
            <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em] mb-2">
              Eat
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
            Curated street food, snacks, and treats from local, BIPOC, and
            female-owned small businesses — ready to make your day delicious.
          </p>
        </header>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <StatCard
            metric="40+"
            label="vendors"
            bg="bg-pink"
            metricColor="text-purple"
            labelColor="text-purple"
            rotation="rotate-[-2deg]"
          />
          <StatCard
            metric="15+"
            label="cuisines"
            bg="bg-lime"
            metricColor="text-indigo"
            labelColor="text-indigo"
            rotation="rotate-[1deg]"
          />
          <StatCard
            metric="1"
            label="day only"
            bg="bg-orange"
            metricColor="text-yellow"
            labelColor="text-warmwhite"
            rotation="rotate-[-1deg]"
          />
        </div>
      </div>
    </section>
  );
}
