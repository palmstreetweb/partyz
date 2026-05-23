type Benefit = {
  /** Big number/label on the sticker (e.g., "+1", "FREE", "BOOK"). */
  badge: string;
  /** Primary line under the badge. */
  title: string;
  /** Optional secondary line. */
  detail?: string;
  /** Card bg utility. */
  bg: string;
  /** Card text utility. */
  text: string;
  /** Badge sticker bg utility. */
  badgeBg: string;
  /** Badge sticker text utility. */
  badgeText: string;
};

const benefits: Benefit[] = [
  {
    badge: "+1",
    title: "Full day entry",
    detail: "Doors 12pm — last call 10pm",
    bg: "bg-pink",
    text: "text-purple",
    badgeBg: "bg-purple",
    badgeText: "text-yellow",
  },
  {
    badge: "+1",
    title: "Free cocktail",
    detail: "Redeemable at any bar",
    bg: "bg-lime",
    text: "text-indigo",
    badgeBg: "bg-indigo",
    badgeText: "text-yellow",
  },
  {
    badge: "FREE",
    title: "Sampling passport",
    detail: "Tiny pours, big flavor",
    bg: "bg-yellow",
    text: "text-purple",
    badgeBg: "bg-red",
    badgeText: "text-warmwhite",
  },
  {
    badge: "Book",
    title: "Cocktail classes",
    detail: "Hosted by guest bartenders",
    bg: "bg-sky",
    text: "text-purple",
    badgeBg: "bg-orange",
    badgeText: "text-warmwhite",
  },
];

function BenefitCard({ b }: { b: Benefit }) {
  return (
    <article
      className={`
        ${b.bg} ${b.text}
        relative rounded-[20px] shadow-sticker
        px-6 py-7 lg:px-7 lg:py-8
        flex flex-col gap-4 lg:gap-5
        min-h-[200px] lg:min-h-[240px]
      `}
    >
      <span
        className={`
          ${b.badgeBg} ${b.badgeText}
          self-start inline-flex items-center justify-center
          rounded-full px-4 py-1.5
          font-display uppercase text-[20px] lg:text-[24px] leading-none tracking-[-0.02em]
        `}
      >
        {b.badge}
      </span>

      <div className="mt-auto flex flex-col gap-1">
        <h3 className="font-display uppercase text-[24px] lg:text-[30px] leading-[0.95] tracking-[-0.02em]">
          {b.title}
        </h3>
        {b.detail && (
          <p className="font-sans font-semibold text-[13px] lg:text-[15px] opacity-85">
            {b.detail}
          </p>
        )}
      </div>
    </article>
  );
}

export function Tickets() {
  return (
    <section
      aria-label="Tickets — your ticket gets you"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <header className="flex flex-col items-start gap-4 mb-10 lg:mb-14">
          <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em]">
            Tickets
          </span>
          <h2 className="font-display uppercase text-purple text-[36px] md:text-[48px] lg:text-[64px] leading-[0.95] tracking-[-0.02em] max-w-3xl">
            Your Partyz ticket gets you:
          </h2>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {benefits.map((b) => (
            <BenefitCard key={b.title} b={b} />
          ))}
        </div>

        <p className="mt-8 lg:mt-10 font-sans font-bold uppercase text-purple/80 text-[12px] lg:text-[14px] tracking-[0.08em]">
          (Non-alcoholic options available throughout.)
        </p>
      </div>
    </section>
  );
}
