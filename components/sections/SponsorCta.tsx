/**
 * Full-bleed sponsor application band — orange bg, big call to action.
 */
export function SponsorCta() {
  return (
    <section
      aria-label="Sponsor CTA band"
      className="relative bg-orange overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-14 lg:py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
          <h2
            className="
              font-display uppercase text-warmwhite
              text-[36px] md:text-[48px] lg:text-[64px]
              leading-[0.95] tracking-[-0.02em]
              text-center lg:text-left
            "
          >
            Now accepting sponsor applications for 2026
          </h2>

          <a
            href="#sponsor"
            className="
              shrink-0 inline-flex items-center justify-center
              rounded-full bg-yellow text-purple
              font-sans font-bold uppercase text-[15px] lg:text-[18px] tracking-[-0.02em]
              h-12 lg:h-16 px-8 lg:px-[72px]
              transition-[color,box-shadow] duration-200 ease-out
              hover:text-red focus-visible:text-red
              hover:shadow-[-6px_6px_0_0_var(--color-purple)]
              focus-visible:shadow-[-6px_6px_0_0_var(--color-purple)]
              focus-visible:outline-none
            "
          >
            Become a sponsor
          </a>
        </div>
      </div>
    </section>
  );
}
