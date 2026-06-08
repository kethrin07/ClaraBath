"use client";
import { useState, useRef } from "react";

const reviews = [
  {
    name: "Margaret H.",
    city: "Scottsdale, AZ",
    project: "Full Master Bath Remodel",
    quote:
      "From the first consultation to the final walkthrough, every detail was impeccable. The marble flooring, brushed gold fixtures, and frameless glass enclosure, it feels like a five-star hotel every morning.",
  },
  {
    name: "David & Linda P.",
    city: "Charlotte, NC",
    project: "Tub-to-Shower Conversion",
    quote:
      "They finished in three days. Yes, three days, and the result is stunning. The brushed gold fixtures and marble tile look incredible together. Our only regret is not doing this sooner.",
  },
  {
    name: "Jonathan R.",
    city: "Naperville, IL",
    project: "Walk-in Shower Installation",
    quote:
      "True craftsmen in every sense. Punctual, clean, and respectful throughout. The result is timeless, the kind of bathroom you see in architectural magazines. Already planning the second bath.",
  },
  {
    name: "Susan & Mark T.",
    city: "Austin, TX",
    project: "Guest Bath Renovation",
    quote:
      "The design consultant spent over an hour with us on materials and layout. The final result exceeded every expectation. Our guests constantly ask who did the work, the stone and tile quality is extraordinary.",
  },
  {
    name: "Patricia W.",
    city: "Denver, CO",
    project: "Full Bathroom Remodel",
    quote:
      "Three home renovations and this was by far the smoothest. No surprises, no delays, no mess. The team treated my home like their own. Elegant, functional, and better than I imagined.",
  },
  {
    name: "Robert & Claire M.",
    city: "Atlanta, GA",
    project: "Master Bath Remodel",
    quote:
      "We were quoted a 2-week timeline and they wrapped up in 4 days. The attention to detail on the custom tilework alone was worth every dollar. An absolute pleasure from start to finish.",
  },
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
  const [index, setIndex] = useState(0);
  const isAnimating = useRef(false);
  const visibleCount = 3;
  const maxIndex = reviews.length - visibleCount;

  const slide = (dir: "left" | "right") => {
    if (isAnimating.current) return;
    if (dir === "right" && index >= maxIndex) return;
    if (dir === "left" && index <= 0) return;
    isAnimating.current = true;
    setIndex((i) => (dir === "right" ? i + 1 : i - 1));
    setTimeout(() => { isAnimating.current = false; }, 400);
  };

  return (
    <section id="testimonials" className="bg-cream py-24 text-navy">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Client Stories</p>
          <h2 className="font-serif text-4xl md:text-5xl">Trusted in Homes Like Yours</h2>
        </div>

        {/* Sliding track */}
        <div className="overflow-hidden">
          <div
            className="flex gap-6 transition-transform duration-400 ease-in-out"
            style={{
              transform: `translateX(calc(-${index} * (100% / ${visibleCount} + 8px)))`,
            }}
          >
            {reviews.map((r) => (
              <div
                key={r.name}
                className="w-[calc(33.333%-16px)] flex-none bg-white p-8 shadow-[0_4px_24px_rgba(13,27,42,0.08)] flex flex-col"
              >
                <p className="mb-4 text-xs uppercase tracking-[0.25em] text-gold">{r.project}</p>
                <Stars />
                <blockquote className="mt-5 flex-1 font-serif text-lg italic leading-relaxed text-navy">
                  "{r.quote}"
                </blockquote>
                <div className="my-6 h-px w-10 bg-gold" />
                <figcaption>
                  <div className="text-sm font-bold uppercase tracking-widest text-navy">{r.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-navy/55">{r.city}</div>
                </figcaption>
              </div>
            ))}
          </div>
        </div>

        {/* Dots + Arrows centered */}
        <div className="mt-10 flex items-center justify-center gap-6">
          <button
            onClick={() => slide("left")}
            disabled={index === 0}
            className="flex h-11 w-11 items-center justify-center border border-navy/20 text-navy transition hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Previous"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path d="M15 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 transition-all duration-300 ${
                  i === index ? "w-8 bg-gold" : "w-3 bg-navy/20 hover:bg-navy/40"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => slide("right")}
            disabled={index >= maxIndex}
            className="flex h-11 w-11 items-center justify-center border border-navy/20 text-navy transition hover:border-gold hover:text-gold disabled:opacity-30 disabled:cursor-not-allowed"
            aria-label="Next"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}