/**
 * 9 dummy vendors arranged 3×3. Each card rotates through the accent palette
 * and carries an optional "FEATURED" sticker badge.
 */

type Vendor = {
  name: string;
  cuisine: string;
  bg: string;
  text: string;
  featured?: boolean;
  featuredBg?: string;
  featuredText?: string;
};

const vendors: Vendor[] = [
  {
    name: "Paradise Vines",
    cuisine: "Natural Wines",
    bg: "bg-purple",
    text: "text-pink-light",
    featured: true,
    featuredBg: "bg-yellow",
    featuredText: "text-purple",
  },
  {
    name: "Slow Burn",
    cuisine: "Filipino BBQ",
    bg: "bg-orange",
    text: "text-warmwhite",
    featured: true,
    featuredBg: "bg-purple",
    featuredText: "text-yellow",
  },
  {
    name: "Bao Heaven",
    cuisine: "Hand-Made Bao",
    bg: "bg-lime",
    text: "text-indigo",
    featured: true,
    featuredBg: "bg-pink",
    featuredText: "text-purple",
  },
  {
    name: "Bashy's",
    cuisine: "Jamaican Mini Patties",
    bg: "bg-pink",
    text: "text-purple",
    featuredBg: "bg-indigo",
    featuredText: "text-pink-light",
  },
  {
    name: "Cold Press Co.",
    cuisine: "Cold-Pressed Juice",
    bg: "bg-yellow",
    text: "text-purple",
    featuredBg: "bg-red",
    featuredText: "text-warmwhite",
  },
  {
    name: "Crumbsworth",
    cuisine: "Plant-Based Cookies",
    bg: "bg-sky",
    text: "text-purple",
    featuredBg: "bg-purple",
    featuredText: "text-sky",
  },
  {
    name: "Slice Society",
    cuisine: "Detroit-Style Pizza",
    bg: "bg-red",
    text: "text-warmwhite",
    featuredBg: "bg-yellow",
    featuredText: "text-red",
  },
  {
    name: "Aunty's Deli",
    cuisine: "Vegan Deli",
    bg: "bg-blush",
    text: "text-purple",
    featuredBg: "bg-lime",
    featuredText: "text-indigo",
  },
  {
    name: "Heat Co.",
    cuisine: "Spicy Condiments",
    bg: "bg-indigo",
    text: "text-pink-light",
    featured: true,
    featuredBg: "bg-yellow",
    featuredText: "text-indigo",
  },
];

function VendorCard({ v }: { v: Vendor }) {
  return (
    <article
      className={`
        ${v.bg} ${v.text}
        relative rounded-[20px] shadow-sticker
        p-6 lg:p-7
        flex flex-col gap-6 lg:gap-8
        min-h-[260px] lg:min-h-[300px]
      `}
    >
      {v.featured && (
        <span
          className={`
            ${v.featuredBg} ${v.featuredText}
            absolute -top-3 -right-3
            rounded-full px-3 py-1
            font-sans font-bold uppercase text-[11px] tracking-[0.08em]
            rotate-[6deg]
            shadow-sticker
          `}
        >
          Featured
        </span>
      )}

      {/* Top: cuisine label */}
      <div className="font-sans font-bold uppercase text-[12px] tracking-[0.08em] opacity-80">
        {v.cuisine}
      </div>

      {/* Bottom: vendor name big */}
      <div className="mt-auto">
        <h3 className="font-display uppercase text-[28px] lg:text-[36px] leading-[0.9] tracking-[-0.02em]">
          {v.name}
        </h3>
      </div>
    </article>
  );
}

export function VendorGrid() {
  return (
    <section
      aria-label="Vendor grid — 9 cards (3×3) + view-all CTA"
      className="relative bg-cream"
    >
      <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        {/* 3×3 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {vendors.map((v) => (
            <VendorCard key={v.name} v={v} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 lg:mt-16 flex justify-center">
          <a
            href="#all-vendors"
            className="
              inline-flex items-center justify-center gap-3
              rounded-full bg-purple text-warmwhite
              font-sans font-bold uppercase text-[15px] lg:text-[18px] tracking-[-0.02em]
              h-12 lg:h-16 px-8 lg:px-12
              transition-[color,box-shadow] duration-200 ease-out
              hover:text-yellow focus-visible:text-yellow
              hover:shadow-[-6px_6px_0_0_var(--color-pink)]
              focus-visible:shadow-[-6px_6px_0_0_var(--color-pink)]
              focus-visible:outline-none
            "
          >
            View all vendors
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
