"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 5000, suffix: "+", label: "Bathrooms Remodeled" },
  { number: 20, suffix: "+", label: "Years of Experience" },
  { number: 48, suffix: "hrs", label: "Average Completion Time" },
  { number: 4.9, suffix: "★", label: "Average Customer Rating" },
];

function CountUp({ target, suffix, duration = 2000 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const isDecimal = target % 1 !== 0;
    const steps = 60;
    const stepDuration = duration / steps;
    let current = 0;
    const increment = target / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [started, target, duration]);

  const isDecimal = target % 1 !== 0;

  return (
    <span ref={ref} className="font-serif text-5xl font-semibold text-gold md:text-6xl">
      {isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
    </span>
  );
}

export default function ByTheNumbers() {
  return (
    <section id="numbers" className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">By The Numbers</p>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Results That Speak <span className="italic text-gold">For Themselves</span>
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 gap-px bg-gold/20 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center justify-center bg-cream px-8 py-14 text-center"
            >
              <CountUp target={s.number} suffix={s.suffix} />
              <div className="my-4 h-px w-8 bg-gold/40" />
              <span className="text-xs uppercase tracking-widest text-navy/60">
                {s.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}