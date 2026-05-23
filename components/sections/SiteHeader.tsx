import { Countdown } from "../Countdown";

function VenueArrow({ className = "" }: { className?: string }) {
  // Curved-bend "arrow-bend-down-right" icon, matching the Phosphor-style icon
  // used on the live site (32px at viewBox 256). Goes down then curves to the right
  // with a soft 90° bend rather than a hard corner.
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
      focusable="false"
      className={`size-6 lg:size-8 shrink-0 ${className}`}
    >
      <path
        d="M5 4 Q5 14 13 14"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 11 L13 14 L10 17"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DateBlock() {
  return (
    <div className="font-sans font-semibold text-purple text-[14px] md:text-[16px] lg:text-[18px] leading-snug uppercase">
      <div>
        <time dateTime="2026-07-18">Jul 18 2026</time>
      </div>
      <div>12–10pm</div>
    </div>
  );
}

function VenueBlock() {
  return (
    <div className="flex items-start gap-2 font-sans font-semibold text-purple text-[14px] md:text-[16px] lg:text-[18px] leading-snug">
      <div>
        <div>Brooklyn Navy Yard</div>
        <div className="font-normal text-purple/80">63 Flushing Ave, Brooklyn</div>
      </div>
      <VenueArrow className="mt-0.5 md:mt-1" />
    </div>
  );
}

function NavLinks() {
  const links = [
    { href: "#vendors", label: "Vendors" },
    { href: "#about", label: "About" },
  ];
  return (
    <nav
      aria-label="Primary"
      className="flex items-center gap-5 sm:gap-6 lg:gap-8"
    >
      {links.map(({ href, label }) => (
        <a
          key={href}
          href={href}
          className="font-sans font-semibold text-purple text-[14px] md:text-[16px] lg:text-[18px] uppercase tracking-[0.04em] underline decoration-dashed decoration-purple/40 underline-offset-[6px] hover:decoration-purple"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}

function CtaButton() {
  return (
    <a
      href="#tickets"
      className="
        inline-flex items-center justify-center rounded-full
        bg-lime text-purple
        font-sans font-bold uppercase text-[15px] lg:text-[18px] tracking-[-0.02em]
        h-12 lg:h-16 px-8 lg:px-[72px]
        transition-[color,box-shadow,transform] duration-200 ease-out
        hover:text-orange focus-visible:text-orange
        hover:shadow-[-6px_6px_0_0_var(--color-purple)]
        focus-visible:shadow-[-6px_6px_0_0_var(--color-purple)]
        hover:-translate-y-[1px] focus-visible:-translate-y-[1px]
        focus-visible:outline-none
      "
    >
      Get tickets
    </a>
  );
}

export function SiteHeader() {
  return (
    <header>
      <div
        className="
          mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8
          flex flex-col items-start gap-4
          md:flex-row md:flex-wrap md:items-center md:justify-between md:gap-x-8 md:gap-y-4
          py-5 md:py-6 lg:py-8
        "
      >
        <div className="flex items-center gap-6 lg:gap-10">
          <DateBlock />
          <Countdown />
        </div>
        <VenueBlock />
        <div className="flex w-full md:w-auto items-center justify-between md:justify-end gap-5 md:gap-6 lg:gap-8">
          <NavLinks />
          <CtaButton />
        </div>
      </div>
    </header>
  );
}
