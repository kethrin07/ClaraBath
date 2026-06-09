"use client";
import { useState } from "react";

const faqs = [
  {
    q: "How long does a bathroom remodel take?",
    a: "Most projects are completed in just 1 to 3 days. Unlike traditional contractors who can take weeks or even months, our crews are specifically trained for efficient, high-quality installation. We come in with a clear plan, the right materials, and a dedicated team so your daily routine is disrupted as little as possible. In many cases, homeowners are using their new bathroom the very next day.",
  },
  {
    q: "Do I need to leave my home during the remodel?",
    a: "Not at all. You are completely welcome to stay home throughout the entire process. Our crew is trained to respect your space and your schedule. Work areas are fully contained with protective coverings, and the team cleans up thoroughly at the end of every single day. Most homeowners barely notice the work happening beyond the room being remodeled.",
  },
  {
    q: "What's included in the free estimate?",
    a: "A dedicated design consultant visits your home at a time that works for you. They take precise measurements, walk through your vision and style preferences, discuss your budget honestly, and put together a fully itemised proposal covering materials, labour, and timeline. There is absolutely no cost for this visit and no obligation to move forward if you decide it is not the right fit.",
  },
  {
    q: "Is financing available?",
    a: "Yes, we offer a range of flexible financing options to make your dream bathroom accessible regardless of your budget. This includes 0% APR plans for qualified homeowners, extended payment terms, and low monthly payment structures. Your design consultant will walk you through every available option during your free in-home estimate so you can choose what works best for your financial situation.",
  },
  {
    q: "Are your contractors licensed and insured?",
    a: "Every single contractor in our network is fully licensed, bonded, and insured before they ever set foot in a client's home. We conduct thorough credential verification and background checks as part of our vetting process. You will never have to worry about liability, workmanship quality, or who is in your home. We only work with professionals who meet our strict standards.",
  },
  {
    q: "What if I'm not happy with the result?",
    a: "Your satisfaction is backed by a lifetime warranty on all workmanship. If anything we have installed ever fails or does not meet your expectations for any reason, we will return and make it right at absolutely no cost to you. We have built our reputation over two decades on the quality of our results and the trust of our clients, and we take that responsibility seriously.",
  },
  {
    q: "What areas do you service?",
    a: "We currently serve homeowners across the United States with a growing network of licensed contractors in most major metropolitan areas and surrounding suburbs. When you enter your ZIP code in our estimate form, we instantly match you with qualified professionals operating in your specific area. If we do not yet have coverage in your region, we will let you know right away rather than waste your time.",
  },
  {
    q: "How is BathQuoteHomes different from hiring a contractor directly?",
    a: "When you hire a contractor directly, you take on the full risk of vetting their credentials, negotiating pricing, and managing the project yourself. BathQuoteHomes does all of that for you. We pre-screen every contractor in our network, provide you with competitive quotes from multiple professionals, and support you through the entire process. You get better pricing, verified quality, and complete peace of mind.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-cream py-24 text-navy">
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