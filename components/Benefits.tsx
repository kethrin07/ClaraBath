const items = [
  {
    title: "Licensed & Insured",
    body: "Fully bonded craftsmen you can trust in your home.",
    image: "/Licensed&Insured.png",
    alt: "Licensed and insured contractor",
    icon: <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" />,
  },
  {
    title: "Lifetime Warranty",
    body: "We stand behind every installation — for life.",
    image: "/lifetime-warranty.png",
    alt: "Brushed gold fixture lifetime warranty",
    icon: <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />,
  },
  {
    title: "Completed in Days",
    body: "Most projects finished in as little as 1–3 days.",
    image: "/completed-in-days.png",
    alt: "Bathroom transformation before and after",
    icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  },
  {
    title: "Premium Materials Only",
    body: "Hand-selected stone, porcelain, and brushed gold.",
    image: "/premium-materials.png",
    alt: "Luxury bathroom material samples",
    icon: <path d="M3 7h18l-2 13H5L3 7zm3-4h12l1 4H5l1-4z" />,
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-cream py-24 text-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">The ClaraBath Standard</p>
          <h2 className="font-serif text-4xl md:text-5xl">Crafted With Uncompromising Quality</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it) => (
            <div key={it.title} className="bg-white shadow-[0_4px_24px_rgba(13,27,42,0.08)] transition hover:shadow-[0_8px_32px_rgba(13,27,42,0.12)]">
              <img
                src={it.image}
                alt={it.alt}
                className="h-48 w-full object-cover"
              />
              <div className="p-8">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mb-6 h-10 w-10 text-gold">
                  {it.icon}
                </svg>
                <h3 className="font-serif text-2xl font-semibold text-navy">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-navy/60">{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}