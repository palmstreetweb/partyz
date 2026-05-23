function Sparkle({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      focusable="false"
      className={`size-3 md:size-4 shrink-0 ${className}`}
    >
      <path
        d="M12 0 L13.6 8 L24 12 L13.6 16 L12 24 L10.4 16 L0 12 L10.4 8 Z"
        fill="currentColor"
      />
    </svg>
  );
}

const ANNOUNCEMENT = "PARTYZ 2026 IS BACK · JULY 18, 12–10PM · BROOKLYN NAVY YARD";

export function AnnouncementBar() {
  // The visual marquee duplicates the strip to allow seamless looping.
  // The screen-reader-only span carries the message once for AT.
  return (
    <section
      aria-label="Site announcement"
      className="bg-sky text-purple relative overflow-hidden border-b border-purple/10"
    >
      <p className="sr-only">{ANNOUNCEMENT}</p>
      <div
        aria-hidden
        className="flex w-max animate-marquee motion-reduce:animate-none py-3"
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            className="flex shrink-0 items-center gap-6 md:gap-10 pr-6 md:pr-10"
          >
            {Array.from({ length: 6 }).map((_, i) => (
              <li
                key={i}
                className="flex items-center gap-6 md:gap-10 font-sans font-bold tracking-[0.04em] text-[13px] md:text-[14px] leading-none whitespace-nowrap"
              >
                <span>{ANNOUNCEMENT}</span>
                <Sparkle className="text-red" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
