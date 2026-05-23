import { Wordmark } from "../Wordmark";

const colA = [
  { label: "Apply to vendor", href: "#vendor-apply" },
  { label: "Become a sponsor", href: "#sponsor" },
  { label: "Press inquiries", href: "mailto:press@partyz.test" },
];

const colB = [
  { label: "Vendors", href: "#vendors" },
  { label: "About", href: "#about" },
  { label: "Tickets", href: "#tickets" },
];

const social = [
  { label: "Instagram", href: "https://instagram.com" },
  { label: "TikTok", href: "https://tiktok.com" },
  { label: "Email", href: "mailto:hi@partyz.test" },
];

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      className="
        font-sans font-semibold text-purple text-[14px] lg:text-[15px]
        underline decoration-dashed decoration-purple/30 underline-offset-[5px]
        hover:decoration-purple focus-visible:decoration-purple focus-visible:outline-none
      "
    >
      {label}
    </a>
  );
}

export function SiteFooter() {
  return (
    <footer
      aria-label="Site footer"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 pt-16 pb-10 lg:pt-24 lg:pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 mb-12 lg:mb-16">
          {/* Brand mark */}
          <div className="lg:col-span-6">
            <Wordmark
              as="div"
              depth={8}
              depthColor="var(--color-offwhite)"
              className="text-[64px] md:text-[96px] lg:text-[128px] leading-[0.85] block"
            >
              Partyz
            </Wordmark>
            <p className="mt-4 font-sans font-semibold text-purple/80 text-[14px] lg:text-[16px] max-w-md">
              One day of food, drinks, music, and dogs in Brooklyn.
            </p>
          </div>

          {/* Link columns */}
          <nav
            aria-label="Footer links"
            className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-8"
          >
            <div>
              <h3 className="font-sans font-bold uppercase text-purple text-[12px] tracking-[0.08em] mb-4">
                Get involved
              </h3>
              <ul className="flex flex-col gap-3">
                {colA.map((l) => (
                  <li key={l.href}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-bold uppercase text-purple text-[12px] tracking-[0.08em] mb-4">
                Explore
              </h3>
              <ul className="flex flex-col gap-3">
                {colB.map((l) => (
                  <li key={l.href}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-sans font-bold uppercase text-purple text-[12px] tracking-[0.08em] mb-4">
                Follow
              </h3>
              <ul className="flex flex-col gap-3">
                {social.map((l) => (
                  <li key={l.href}>
                    <FooterLink {...l} />
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-purple/15 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-sans text-[12px] lg:text-[13px] text-purple/70">
          <span>© 2026 Partyz Collective. All rights reserved.</span>
          <span className="font-bold uppercase tracking-[0.08em] text-purple">
            @partyz.bk
          </span>
        </div>
      </div>
    </footer>
  );
}
