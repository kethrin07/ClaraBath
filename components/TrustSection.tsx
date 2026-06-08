const badges = [
  "BBB Accredited A+",
  "Licensed & Insured",
  "Financing Available",
  "EPA Lead-Safe Certified",
  "5,000+ Baths Remodeled",
  "Lifetime Warranty",
];

export default function TrustSection() {
  return (
    <section id="about" className="bg-navy py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Why Choose Us</p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">
            Two Decades of <span className="italic text-gold">Refined Craftsmanship</span>
          </h2>
          <div className="my-8 h-px w-24 bg-gold" />
          <p className="max-w-xl text-white/75">
            Family-owned since 2003, we've transformed thousands of bathrooms into private
            sanctuaries. Every project is backed by our lifetime warranty and managed by a
            dedicated design consultant, so the experience feels as luxurious as the result.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {badges.map((b) => (
            <div
              key={b}
              className="flex h-28 items-center justify-center border border-navy bg-navy px-4 text-center text-xs font-medium uppercase tracking-widest text-gold ring-1 ring-gold/40"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
