import { Wordmark } from "../Wordmark";

export function AboutSection() {
  return (
    <section
      aria-label="About — long-form copy"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <header className="lg:col-span-5 flex flex-col items-start sticky top-8 self-start">
            <span className="font-sans font-bold uppercase text-purple text-[13px] lg:text-[15px] tracking-[0.06em] mb-2">
              About
            </span>
            <Wordmark
              as="h2"
              depth={8}
              depthColor="var(--color-offwhite)"
              className="text-[64px] md:text-[88px] lg:text-[120px] leading-[0.85] block"
            >
              Partyz
            </Wordmark>
          </header>

          <div className="lg:col-span-7 flex flex-col gap-5 lg:gap-6 font-sans text-purple text-[16px] md:text-[18px] lg:text-[20px] leading-[1.5]">
            <p>
              Partyz puts a spotlight on local, BIPOC, and female-owned small
              businesses — paired with very good drinks. It&apos;s one day of
              food, music, cocktails, beer, natural wine, sun, dogs, and
              dancing.
            </p>

            <p>
              We&apos;re built by people who think the best parts of a city
              are the small things — the bartender who remembers your order,
              the family-run kitchen with a 30-year recipe, the small label
              pouring something you&apos;ve never tasted. Partyz is a one-day
              container for all of that.
            </p>

            <p>
              Tickets include one free drink token. Non-alcoholic options
              available. Bring your friends. Bring your dog. Eat well.
            </p>

            <dl className="grid grid-cols-2 gap-y-4 gap-x-8 pt-6 lg:pt-8 border-t border-purple/15">
              <div>
                <dt className="font-bold uppercase text-[12px] tracking-[0.08em] opacity-70">
                  Produced by
                </dt>
                <dd className="font-semibold mt-1">Partyz Collective</dd>
              </div>
              <div>
                <dt className="font-bold uppercase text-[12px] tracking-[0.08em] opacity-70">
                  Since
                </dt>
                <dd className="font-semibold mt-1">2024</dd>
              </div>
              <div>
                <dt className="font-bold uppercase text-[12px] tracking-[0.08em] opacity-70">
                  Press
                </dt>
                <dd className="font-semibold mt-1">press@partyz.test</dd>
              </div>
              <div>
                <dt className="font-bold uppercase text-[12px] tracking-[0.08em] opacity-70">
                  Vendors
                </dt>
                <dd className="font-semibold mt-1">vendors@partyz.test</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
