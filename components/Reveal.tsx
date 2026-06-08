"use client";
import { useEffect, useRef, useState } from "react";

export default function Reveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => e.isIntersecting && (setV(true), o.disconnect()),
      { threshold: 0.1 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return <div ref={ref} className={`reveal ${v ? "visible" : ""}`}>{children}</div>;
}
