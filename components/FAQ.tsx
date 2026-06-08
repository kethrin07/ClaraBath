"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a bathroom remodel take?",
    a: "Most projects are completed in just 1–3 days. Unlike traditional contractors who can take weeks, our crews are trained for efficient, high-quality installation so your daily routine is disrupted as little as possible.",
  },
  {
    q: "Do I need to leave my home during the remodel?",
    a: "No — you're welcome to stay home throughout the process. Our crew respects your space, keeps work areas contained, and cleans up thoroughly at the end of each day.",
  },
  {
    q: "What's included in the free estimate?",
    a: "A dedicated design consultant visits your home, takes measurements, discusses your vision and budget, and creates a fully itemised proposal — at no cost and no obligation to proceed.",
  },
  {
    q: "Is financing available?",
    a: "Yes. We offer flexible financing options including 0% APR plans for qualified homeowners. Your consultant will walk you through available options during your free in-home estimate.",
  },
  {
    q: "Are your contractors licensed and insured?",
    a: "Every contractor in our network is fully licensed, bonded, and insured. We verify credentials before any work begins so you never have to worry about liability or quality.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "We back every installation with a lifetime warranty on workmanship. If anything we've done ever fails or doesn't meet your expectations, we return and make it right — at no cost to you.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-cream py-24 text-navy">
      <div className="mx-auto max-w-3xl px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">FAQ</p>
          <h2 className="font-serif text-4xl md:text-5xl text-navy">Frequently Asked Questions</h2>
        </div>

        {/* Accordion */}
        <div className="divide-y divide-navy/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left transition hover:text-gold"
              >
                <span className="font-serif text-lg text-navy">{faq.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className={`ml-4 h-5 w-5 flex-none text-gold transition-transform duration-300 ${
                    open === i ? "rotate-45" : ""
                  }`}
                >
                  <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  open === i ? "max-h-48 pb-5" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-navy/65">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}