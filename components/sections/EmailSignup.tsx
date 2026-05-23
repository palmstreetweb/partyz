"use client";

/**
 * "Sign up to get notified" email capture.
 * Sky-blue card with input + submit. The form is intentionally a no-op
 * (action="#") since this is a design-only build.
 */
export function EmailSignup() {
  return (
    <section
      aria-label="Email signup"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div
          className="
            bg-sky text-purple
            rounded-[24px] shadow-sticker
            px-6 py-10 md:px-10 md:py-12 lg:px-16 lg:py-14
            flex flex-col lg:flex-row items-center gap-8 lg:gap-12
          "
        >
          <div className="flex flex-col gap-3 flex-1 text-center lg:text-left">
            <h2 className="font-display uppercase text-[28px] md:text-[36px] lg:text-[44px] leading-[0.95] tracking-[-0.02em]">
              Get notified when 2026 tickets drop
            </h2>
            <p className="font-sans font-semibold text-purple/85 text-[14px] lg:text-[16px]">
              Early-bird list. No spam, ever.
            </p>
          </div>

          <form
            action="#"
            onSubmit={(e) => e.preventDefault()}
            className="w-full lg:w-auto lg:min-w-[440px] flex flex-col sm:flex-row gap-3"
          >
            <label className="sr-only" htmlFor="signup-email">
              Email address
            </label>
            <input
              id="signup-email"
              type="email"
              required
              placeholder="you@example.com"
              className="
                flex-1 h-12 lg:h-14 px-5
                rounded-input bg-warmwhite text-purple
                font-sans font-semibold text-[14px] lg:text-[16px]
                placeholder:text-purple/50
                outline outline-2 outline-transparent
                focus-visible:outline-purple
                transition
              "
            />
            <button
              type="submit"
              className="
                inline-flex items-center justify-center
                rounded-full bg-purple text-warmwhite
                font-sans font-bold uppercase text-[14px] lg:text-[16px] tracking-[-0.02em]
                h-12 lg:h-14 px-8 lg:px-10
                transition-[color,box-shadow] duration-200 ease-out
                hover:text-yellow focus-visible:text-yellow
                hover:shadow-[-6px_6px_0_0_var(--color-pink)]
                focus-visible:shadow-[-6px_6px_0_0_var(--color-pink)]
                focus-visible:outline-none
              "
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
