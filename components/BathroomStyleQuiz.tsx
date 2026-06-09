"use client";
import { useState } from "react";

type QuizData = {
  style: string;
  mustHaves: string[];
  frustration: string;
  timeline: string;
};

const STYLES = [
  {
    id: "modern",
    label: "Modern & Minimalist",
    desc: "Clean lines, open space, neutral tones",
    profile: {
      name: "The Clean Slate Visionary",
      tagline:
        "You believe a bathroom should feel like breathing room — intentional, uncluttered, and serene.",
    },
  },
  {
    id: "spa",
    label: "Spa & Zen",
    desc: "Natural materials, calming atmosphere",
    profile: {
      name: "The Sanctuary Seeker",
      tagline:
        "For you, the bathroom isn't just functional — it's where you reset. Every detail should invite calm.",
    },
  },
  {
    id: "classic",
    label: "Classic & Timeless",
    desc: "Marble, rich fixtures, enduring beauty",
    profile: {
      name: "The Timeless Connoisseur",
      tagline:
        "You value craftsmanship over trends. Your bathroom will be just as stunning in 20 years.",
    },
  },
  {
    id: "bold",
    label: "Bold & Dramatic",
    desc: "Statement pieces, unexpected details",
    profile: {
      name: "The Statement Maker",
      tagline:
        "Why blend in? You want a bathroom that leaves a lasting impression — every single morning.",
    },
  },
];

const MUST_HAVES = [
  { id: "rainfall", label: "Rainfall Shower" },
  { id: "soaking", label: "Soaking Tub" },
  { id: "heated", label: "Heated Floors" },
  { id: "vanity", label: "Double Vanity" },
  { id: "mirror", label: "Smart Mirror" },
  { id: "walkin", label: "Walk-in Shower" },
];

const FRUSTRATIONS = [
  "Looks Outdated",
  "Poor Storage",
  "Feels Too Small",
  "Water Damage",
  "Bad Lighting",
];

const TIMELINES = [
  { label: "ASAP", desc: "I'm ready to start right away" },
  { label: "Within 3 Months", desc: "Planning ahead for a future project" },
  { label: "Just Exploring", desc: "Getting a sense of what's possible" },
];

const TOTAL = 4;

export default function BathroomStyleQuiz() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<QuizData>({
    style: "",
    mustHaves: [],
    frustration: "",
    timeline: "",
  });

  const progress = step >= 1 && step <= TOTAL ? (step / TOTAL) * 100 : 0;

  const canAdvance =
    (step === 1 && !!data.style) ||
    (step === 2 && data.mustHaves.length > 0) ||
    (step === 3 && !!data.frustration) ||
    (step === 4 && !!data.timeline);

  const toggleMustHave = (id: string) =>
    setData((d) => {
      const has = d.mustHaves.includes(id);
      if (has) return { ...d, mustHaves: d.mustHaves.filter((m) => m !== id) };
      if (d.mustHaves.length >= 3) return d;
      return { ...d, mustHaves: [...d.mustHaves, id] };
    });

  const selectedStyle = STYLES.find((s) => s.id === data.style);
  const matchScore = Math.min(
    98,
    72 +
      data.mustHaves.length * 4 +
      (data.frustration ? 4 : 0) +
      (data.timeline === "ASAP" ? 4 : 0)
  );

  return (
    <section className="bg-cream py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">
            60-Second Style Profile
          </p>
          <h2 className="font-serif text-4xl text-navy md:text-5xl">
            Discover Your Dream Bathroom
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm text-navy/60">
            Answer 4 quick questions and unlock a personalized style profile tailored around your
            taste.
          </p>
        </div>

        <div className="mx-auto max-w-2xl bg-white shadow-[0_8px_48px_rgba(13,27,42,0.09)]">
          {step === 0 && <IntroStep onStart={() => setStep(1)} />}

          {step >= 1 && step <= TOTAL && (
            <div className="p-8 md:p-12">
              {/* Progress */}
              <div className="mb-10">
                <div className="mb-2 flex justify-between text-[11px] uppercase tracking-widest">
                  <span className="text-navy/45">Style Profile</span>
                  <span className="font-semibold text-gold">
                    Step {step} of {TOTAL}
                  </span>
                </div>
                <div className="h-1 w-full bg-navy/10">
                  <div
                    className="h-full bg-gold transition-all duration-700 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="mt-3 flex justify-between">
                  {Array.from({ length: TOTAL }, (_, i) => (
                    <div
                      key={i}
                      className={`h-1.5 w-1.5 rounded-full transition-all duration-500 ${
                        i + 1 <= step ? "bg-gold" : "bg-navy/15"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="animate-[fadeIn_.4s_ease-out]">
                {step === 1 && (
                  <StyleStep
                    value={data.style}
                    onChange={(v) => setData((d) => ({ ...d, style: v }))}
                  />
                )}
                {step === 2 && (
                  <MustHavesStep selected={data.mustHaves} onToggle={toggleMustHave} />
                )}
                {step === 3 && (
                  <FrustrationStep
                    value={data.frustration}
                    onChange={(v) => setData((d) => ({ ...d, frustration: v }))}
                  />
                )}
                {step === 4 && (
                  <TimelineStep
                    value={data.timeline}
                    onChange={(v) => setData((d) => ({ ...d, timeline: v }))}
                  />
                )}
              </div>

              <div className="mt-10 flex items-center justify-between">
                <button
                  onClick={() => setStep((s) => Math.max(s - 1, 1))}
                  disabled={step === 1}
                  className="text-xs uppercase tracking-widest text-navy/50 transition hover:text-gold disabled:invisible"
                >
                  ← Back
                </button>
                <button
                  onClick={() => setStep((s) => s + 1)}
                  disabled={!canAdvance}
                  className="bg-gold px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-35"
                >
                  {step === TOTAL ? "Reveal My Profile →" : "Continue →"}
                </button>
              </div>
            </div>
          )}

          {step === TOTAL + 1 && selectedStyle && (
            <ResultStep
              profile={selectedStyle.profile}
              mustHaves={data.mustHaves.map(
                (id) => MUST_HAVES.find((m) => m.id === id)?.label ?? id
              )}
              matchScore={matchScore}
            />
          )}
        </div>
      </div>
    </section>
  );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="p-8 text-center md:p-12">
      <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center border border-gold bg-navy">
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <path
            d="M10 34 C10 26 14 18 20 14 C26 18 30 26 30 34"
            stroke="#C9A84C"
            strokeWidth="1.3"
            fill="none"
          />
          <line x1="8" y1="34" x2="32" y2="34" stroke="#C9A84C" strokeWidth="1.3" />
          <line x1="20" y1="14" x2="20" y2="8" stroke="#C9A84C" strokeWidth="1.3" />
          <line x1="16" y1="10" x2="24" y2="10" stroke="#C9A84C" strokeWidth="1.3" />
        </svg>
      </div>

      <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Free · 60 Seconds</p>
      <h3 className="font-serif text-3xl text-navy md:text-4xl">
        What's Your Bathroom Personality?
      </h3>
      <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-navy/60">
        Answer 4 quick questions to unlock a personalized style profile — and see exactly what's
        possible for your space.
      </p>

      <button
        onClick={onStart}
        className="mt-8 w-full bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-navy transition hover:brightness-110"
      >
        Start My Style Quiz →
      </button>
      <p className="mt-3 text-xs text-navy/40">No sign-up · No obligation</p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["Personalized Results", "Style Profile", "Expert Matched"].map((f) => (
          <span
            key={f}
            className="border border-gold/30 px-4 py-1.5 text-[11px] uppercase tracking-wider text-navy/50"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Step 1: Style ────────────────────────────────────────────────────────────

function StyleStep({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <h3 className="mb-2 text-center font-serif text-2xl text-navy">What's your style?</h3>
      <p className="mb-7 text-center text-sm text-navy/55">
        Choose the aesthetic that speaks to you most.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {STYLES.map((s) => {
          const active = value === s.id;
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => onChange(s.id)}
              className={`border p-5 text-left transition ${
                active
                  ? "border-gold bg-gold/10 text-navy"
                  : "border-navy/15 bg-white hover:border-gold/50"
              }`}
            >
              <div className={`mb-3 ${active ? "text-gold" : "text-navy/35"}`}>
                <StyleIcon id={s.id} />
              </div>
              <p className="font-serif text-[15px] text-navy">{s.label}</p>
              <p className="mt-1 text-xs text-navy/50">{s.desc}</p>
              {active && (
                <div className="mt-2.5 flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-gold" />
                  <span className="text-[10px] uppercase tracking-wider text-gold">Selected</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

function StyleIcon({ id }: { id: string }) {
  const cls = "h-8 w-8 mx-auto";
  if (id === "modern")
    return (
      <svg viewBox="0 0 40 40" fill="none" className={cls}>
        <rect x="8" y="26" width="24" height="7" stroke="currentColor" strokeWidth="1.2" />
        <rect x="13" y="14" width="14" height="12" stroke="currentColor" strokeWidth="1.2" />
        <line x1="8" y1="22" x2="32" y2="22" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (id === "spa")
    return (
      <svg viewBox="0 0 40 40" fill="none" className={cls}>
        <path
          d="M20 8 C13 14 8 19 8 25 C8 31 13 34 20 34 C27 34 32 31 32 25 C32 19 27 14 20 8Z"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <path
          d="M20 14 C17 18 15 21 15 25 C15 28 17 30 20 30"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
    );
  if (id === "classic")
    return (
      <svg viewBox="0 0 40 40" fill="none" className={cls}>
        <line x1="7" y1="34" x2="33" y2="34" stroke="currentColor" strokeWidth="1.2" />
        <line x1="13" y1="34" x2="13" y2="18" stroke="currentColor" strokeWidth="1.2" />
        <line x1="20" y1="34" x2="20" y2="18" stroke="currentColor" strokeWidth="1.2" />
        <line x1="27" y1="34" x2="27" y2="18" stroke="currentColor" strokeWidth="1.2" />
        <path d="M9 18 L20 8 L31 18" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <line x1="7" y1="18" x2="33" y2="18" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 40 40" fill="none" className={cls}>
      <polygon
        points="20,5 23.5,15.5 34.5,15.5 25.5,22.5 29,33 20,26 11,33 14.5,22.5 5.5,15.5 16.5,15.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
      />
    </svg>
  );
}

// ─── Step 2: Must-haves ───────────────────────────────────────────────────────

function MustHavesStep({
  selected,
  onToggle,
}: {
  selected: string[];
  onToggle: (id: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-2 text-center font-serif text-2xl text-navy">Your must-haves?</h3>
      <div className="mb-6 flex items-center justify-center gap-3">
        <span className="text-sm text-navy/55">Choose up to 3</span>
        {selected.length > 0 && (
          <span className="border border-gold/40 bg-gold/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-gold">
            {selected.length} / 3
          </span>
        )}
      </div>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {MUST_HAVES.map((m) => {
          const active = selected.includes(m.id);
          const maxed = !active && selected.length >= 3;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onToggle(m.id)}
              disabled={maxed}
              className={`relative border p-4 text-center transition ${
                active
                  ? "border-gold bg-gold/10"
                  : maxed
                  ? "cursor-not-allowed border-navy/8 opacity-40"
                  : "border-navy/15 bg-white hover:border-gold/50"
              }`}
            >
              {active && (
                <div className="absolute right-2 top-2 flex h-4 w-4 items-center justify-center bg-gold">
                  <svg viewBox="0 0 12 12" fill="none" className="h-2.5 w-2.5">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#0D1B2A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
              <div className={`mb-2 ${active ? "text-gold" : "text-navy/35"}`}>
                <MustHaveIcon id={m.id} />
              </div>
              <p className="text-xs font-medium text-navy">{m.label}</p>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function MustHaveIcon({ id }: { id: string }) {
  const cls = "h-7 w-7 mx-auto";
  if (id === "rainfall")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls}>
        <rect x="6" y="5" width="20" height="5" rx="2.5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="16" y1="10" x2="16" y2="14" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10" y1="17" x2="10" y2="21" stroke="currentColor" strokeWidth="1.2" />
        <line x1="16" y1="17" x2="16" y2="21" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="17" x2="22" y2="21" stroke="currentColor" strokeWidth="1.2" />
        <line x1="10" y1="24" x2="10" y2="27" stroke="currentColor" strokeWidth="1.2" />
        <line x1="16" y1="24" x2="16" y2="27" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="24" x2="22" y2="27" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (id === "soaking")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls}>
        <path
          d="M4 20 L28 20 Q28 27 22 27 L10 27 Q4 27 4 20Z"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path d="M8 20 L8 12 Q8 7 13 7" stroke="currentColor" strokeWidth="1.2" fill="none" />
        <line x1="10" y1="27" x2="10" y2="30" stroke="currentColor" strokeWidth="1.2" />
        <line x1="22" y1="27" x2="22" y2="30" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (id === "heated")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls}>
        <line x1="6" y1="27" x2="26" y2="27" stroke="currentColor" strokeWidth="1.2" />
        <line x1="6" y1="23" x2="26" y2="23" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M10 23 Q10 17 13 15 Q10 13 13 8"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M16 23 Q16 17 19 15 Q16 13 19 8"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
        <path
          d="M22 23 Q22 17 25 15 Q22 13 25 8"
          stroke="currentColor"
          strokeWidth="1.2"
          fill="none"
        />
      </svg>
    );
  if (id === "vanity")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls}>
        <rect x="4" y="18" width="24" height="9" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="12" cy="18" rx="4" ry="2" stroke="currentColor" strokeWidth="1.2" />
        <ellipse cx="22" cy="18" rx="4" ry="2" stroke="currentColor" strokeWidth="1.2" />
        <rect x="8" y="8" width="7" height="10" stroke="currentColor" strokeWidth="1.2" />
        <rect x="17" y="8" width="7" height="10" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  if (id === "mirror")
    return (
      <svg viewBox="0 0 32 32" fill="none" className={cls}>
        <rect x="9" y="5" width="14" height="20" stroke="currentColor" strokeWidth="1.2" />
        <line x1="16" y1="25" x2="16" y2="29" stroke="currentColor" strokeWidth="1.2" />
        <line x1="12" y1="29" x2="20" y2="29" stroke="currentColor" strokeWidth="1.2" />
        <line x1="5" y1="3" x2="7" y2="5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="27" y1="3" x2="25" y2="5" stroke="currentColor" strokeWidth="1.2" />
        <line x1="4" y1="15" x2="9" y2="15" stroke="currentColor" strokeWidth="1.2" />
        <line x1="28" y1="15" x2="23" y2="15" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    );
  return (
    <svg viewBox="0 0 32 32" fill="none" className={cls}>
      <rect x="4" y="5" width="18" height="24" stroke="currentColor" strokeWidth="1.2" />
      <line x1="22" y1="5" x2="28" y2="5" stroke="currentColor" strokeWidth="1.2" />
      <line x1="28" y1="5" x2="28" y2="29" stroke="currentColor" strokeWidth="1.2" />
      <line x1="28" y1="29" x2="22" y2="29" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8" y1="12" x2="8" y2="22" stroke="currentColor" strokeWidth="1.2" />
      <line x1="8" y1="17" x2="14" y2="17" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="20.5" cy="17" r="1.2" fill="currentColor" />
    </svg>
  );
}

// ─── Step 3: Frustration ──────────────────────────────────────────────────────

function FrustrationStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-2 text-center font-serif text-2xl text-navy">Biggest frustration?</h3>
      <p className="mb-7 text-center text-sm text-navy/55">
        What bothers you most about your current bathroom?
      </p>
      <div className="space-y-2.5">
        {FRUSTRATIONS.map((f) => {
          const active = value === f;
          return (
            <button
              key={f}
              type="button"
              onClick={() => onChange(f)}
              className={`flex w-full items-center justify-between border px-5 py-3.5 text-left transition ${
                active
                  ? "border-gold bg-gold/10"
                  : "border-navy/15 bg-white hover:border-gold/50"
              }`}
            >
              <span className="font-serif text-base text-navy">{f}</span>
              {active && (
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-gold">
                  <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#0D1B2A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Step 4: Timeline ─────────────────────────────────────────────────────────

function TimelineStep({
  value,
  onChange,
}: {
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <h3 className="mb-2 text-center font-serif text-2xl text-navy">
        When do you see this happening?
      </h3>
      <p className="mb-7 text-center text-sm text-navy/55">
        No pressure — just helps us tailor your experience.
      </p>
      <div className="space-y-3">
        {TIMELINES.map((t) => {
          const active = value === t.label;
          return (
            <button
              key={t.label}
              type="button"
              onClick={() => onChange(t.label)}
              className={`flex w-full items-center justify-between border px-5 py-4 text-left transition ${
                active
                  ? "border-gold bg-gold/10"
                  : "border-navy/15 bg-white hover:border-gold/50"
              }`}
            >
              <div>
                <p className="font-serif text-lg text-navy">{t.label}</p>
                <p className="mt-0.5 text-xs text-navy/50">{t.desc}</p>
              </div>
              {active && (
                <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center bg-gold">
                  <svg viewBox="0 0 12 12" fill="none" className="h-3 w-3">
                    <path
                      d="M2 6l3 3 5-5"
                      stroke="#0D1B2A"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Result ───────────────────────────────────────────────────────────────────

function ResultStep({
  profile,
  mustHaves,
  matchScore,
}: {
  profile: { name: string; tagline: string };
  mustHaves: string[];
  matchScore: number;
}) {
  return (
    <div className="animate-[fadeIn_.6s_ease-out] p-8 text-center md:p-12">
      {/* Trophy badge */}
      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center border border-gold bg-navy shadow-[0_0_0_6px_rgba(201,168,76,0.10)]">
        <svg viewBox="0 0 40 40" fill="none" className="h-10 w-10">
          <polygon
            points="20,4 23.1,13.5 33,13.5 25.5,19.5 28.6,29 20,23 11.4,29 14.5,19.5 7,13.5 16.9,13.5"
            stroke="#C9A84C"
            strokeWidth="1.3"
            fill="none"
          />
          <line x1="20" y1="29" x2="20" y2="36" stroke="#C9A84C" strokeWidth="1.3" />
          <line x1="14" y1="36" x2="26" y2="36" stroke="#C9A84C" strokeWidth="1.3" />
        </svg>
      </div>

      {/* Match score */}
      <div className="mb-5 inline-flex items-center gap-2 border border-gold/40 bg-gold/10 px-4 py-1.5">
        <div className="h-1.5 w-1.5 rounded-full bg-gold" />
        <span className="text-[11px] font-semibold uppercase tracking-widest text-gold">
          {matchScore}% Style Match
        </span>
      </div>

      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-navy/45">
        Your Bathroom Profile
      </p>
      <h3 className="font-serif text-3xl text-navy md:text-4xl">{profile.name}</h3>
      <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-navy/65">
        {profile.tagline}
      </p>

      {mustHaves.length > 0 && (
        <div className="mt-8">
          <p className="mb-3 text-[11px] uppercase tracking-widest text-navy/40">
            Top Priorities Identified
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {mustHaves.map((m) => (
              <span
                key={m}
                className="border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-navy"
              >
                {m}
              </span>
            ))}
          </div>
        </div>
      )}

      <div className="my-8 flex items-center gap-4">
        <div className="h-px flex-1 bg-navy/10" />
        <span className="text-[11px] uppercase tracking-widest text-navy/35">Next Step</span>
        <div className="h-px flex-1 bg-navy/10" />
      </div>

      <p className="mx-auto mb-6 max-w-xs text-sm text-navy/60">
        See what's possible for your space — get a complimentary in-home estimate tailored to your
        profile.
      </p>

      <a
        href="#get-estimate"
        className="inline-block w-full bg-gold py-4 text-sm font-semibold uppercase tracking-widest text-navy transition hover:brightness-110"
      >
        See My Personalized Estimate →
      </a>
      <p className="mt-3 text-xs text-navy/40">No obligation · In-home · Free consultation</p>
    </div>
  );
}
