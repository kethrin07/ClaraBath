const reviews = [
  { name: "Margaret H.", city: "Scottsdale, AZ",
    quote: "From the first consultation to the final walkthrough, every detail was impeccable. Our bathroom feels like a five-star spa." },
  { name: "David & Linda P.", city: "Charlotte, NC",
    quote: "They finished in three days. The brushed gold fixtures and marble look incredible. Worth every penny." },
  { name: "Jonathan R.", city: "Naperville, IL",
    quote: "True craftsmen. Clean, respectful, and the result is timeless. We're already planning the second bath." },
];

function Stars() {
  return (
    <div className="flex gap-1 text-gold">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-24 text-navy">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl">Trusted in Homes Like Yours</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <figure key={r.name} className="flex flex-col bg-white p-8 shadow-[0_4px_24px_rgba(13,27,42,0.08)]">
              <Stars />
              <blockquote className="mt-6 flex-1 font-serif text-xl italic leading-relaxed text-navy">
                “{r.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-navy/10 pt-4">
                <div className="text-sm font-bold uppercase tracking-widest text-navy">{r.name}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-navy/55">{r.city}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
