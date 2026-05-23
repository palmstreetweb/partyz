/**
 * Transitional band between Sip and Eat sections.
 * Sky-blue pill carrying a "thank-you / applications open" message.
 */
export function VendorIntro() {
  return (
    <section
      aria-label="Vendor intro — thank-you / applications open"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
        <div
          className="
            bg-sky text-purple
            rounded-[24px] shadow-sticker
            px-6 py-8 lg:px-10 lg:py-10
            flex flex-col items-center gap-3 lg:gap-4
            text-center
          "
        >
          <h2 className="font-display uppercase text-[28px] md:text-[36px] lg:text-[44px] leading-[0.95] tracking-[-0.02em]">
            Thank you to our 2025 partners
          </h2>
          <a
            href="#vendors"
            className="
              font-sans font-bold uppercase
              text-orange text-[14px] md:text-[16px] lg:text-[18px]
              tracking-[0.04em] underline decoration-dashed decoration-orange/60 underline-offset-[6px]
              hover:decoration-orange focus-visible:decoration-orange focus-visible:outline-none
            "
          >
            2026 partner applications are now open →
          </a>
        </div>
      </div>
    </section>
  );
}
