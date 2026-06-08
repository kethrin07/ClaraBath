"use client";
import { useState } from "react";

const links = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how", label: "How It Works" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#about", label: "About" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50"
      style={{
        backgroundColor: "#F5F0E8",
        borderBottom: "1px solid rgba(201,168,76,0.40)",
      }}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <a href="#" className="font-serif text-2xl font-semibold text-gold tracking-wide">
          ClaraBath
        </a>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm text-navy/80 transition hover:text-gold">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        
          <a href="#get-estimate"
          className="hidden border border-gold px-5 py-2.5 text-xs font-medium uppercase tracking-widest text-gold transition hover:bg-gold hover:text-navy md:inline-block"
        >
          Get Free Estimate
        </a>
        <button
          aria-label="Menu"
          onClick={() => setOpen((o) => !o)}
          className="text-gold md:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </nav>
      {open && (
        <div className="border-t border-gold/20 bg-cream md:hidden">
          <ul className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-sm text-navy/80 hover:text-gold">
                  {l.label}
                </a>
              </li>
            ))}
            <a href="#get-estimate" onClick={() => setOpen(false)} className="mt-3 border border-gold px-5 py-3 text-center text-xs font-medium uppercase tracking-widest text-gold">
              Get Free Estimate
            </a>
          </ul>
        </div>
      )}
    </header>
  );
}