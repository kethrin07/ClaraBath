export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy pt-[72px]">
      <div className="mx-auto grid min-h-[calc(100vh-72px)] max-w-7xl grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:py-0">
        <div className="text-left">
          <p className="mb-6 text-xs uppercase tracking-[0.35em] text-gold">
            Premium Bathroom Remodeling
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] text-white md:text-6xl lg:text-7xl">
            Transform Your Bathroom
            <br />
            <span className="italic text-gold">Into a Private Sanctuary</span>
          </h1>
          <p className="mt-8 max-w-md text-base text-white/75">
            Master craftsmen, premium materials, and a lifetime warranty.
            Experience timeless luxury — completed in days, not months.
          </p>
          <a
            href="#get-estimate"
            className="mt-10 inline-block bg-gold px-9 py-4 text-sm font-semibold uppercase tracking-widest text-navy transition hover:brightness-110"
          >
            Get Your Free Estimate
          </a>
          <p className="mt-4 text-xs text-white/55">
            No obligation · Takes 60 seconds
          </p>
        </div>

        <div className="relative h-[420px] w-full overflow-hidden lg:h-[700px]">
          <img
            src="/hero-img.png"
            alt="Luxury remodeled bathroom with marble and brushed gold fixtures"
            className="h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-gold/30" />
        </div>
      </div>
    </section>
  );
}
