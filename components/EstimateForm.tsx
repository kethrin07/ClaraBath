"use client";
import { useState } from "react";

type Data = {
  zip: string;
  projectType: string;
  timeline: string;
  budget: string;
  name: string;
  phone: string;
  email: string;
};

const initial: Data = { zip: "", projectType: "", timeline: "", budget: "", name: "", phone: "", email: "" };
const projectTypes = ["Full Remodel", "Tub-to-Shower Conversion", "Walk-in Shower", "Other"];
const timelines = ["ASAP", "1–3 Months", "Just Planning"];
const budgets = ["Under $5k", "$5k – $10k", "$10k – $20k", "$20k+"];

export default function EstimateForm() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<Data>(initial);
  const [submitted, setSubmitted] = useState(false);
  const total = 5;
  const progress = (Math.min(step, total) / total) * 100;

  const next = () => setStep((s) => Math.min(s + 1, total));
  const back = () => setStep((s) => Math.max(s - 1, 1));
  const set = <K extends keyof Data>(k: K, v: Data[K]) => setData((d) => ({ ...d, [k]: v }));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Estimate submitted:", data);
    setSubmitted(true);
  };

  const canAdvance =
    (step === 1 && data.zip.length === 5) ||
    (step === 2 && !!data.projectType) ||
    (step === 3 && !!data.timeline) ||
    (step === 4 && !!data.budget);

  return (
    <section id="get-estimate" className="bg-cream py-24 text-navy">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">Free Estimate</p>
          <h2 className="font-serif text-4xl md:text-5xl">Begin Your Transformation</h2>
          <p className="mt-4 text-sm text-navy/65">
            Answer a few quick questions and we'll arrange your complimentary in-home consultation.
          </p>
        </div>

        {/* Two column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 shadow-[0_8px_40px_rgba(13,27,42,0.10)]">

          {/* Left — image */}
          <div className="hidden lg:block min-h-[600px]">
            <img
              src="/estimate-form.png"
              alt="Luxury bathroom remodel"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Right — form */}
          <div className="bg-white p-8 md:p-10">
            {submitted ? (
              <Thanks />
            ) : (
              <>
                <div className="mb-8">
                  <div className="mb-2 flex items-center justify-between text-[11px] uppercase tracking-widest text-navy/60">
                    <span>Begin</span>
                    <span className="text-gold">Step {Math.min(step, total)} of {total}</span>
                  </div>
                  <div className="h-1.5 w-full bg-navy/10">
                    <div
                      className="h-full bg-gold transition-all duration-500"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>

                <div className="min-h-[280px]">
                  {step === 1 && (
                    <StepView title="What's your ZIP code?" sub="So we can match you with a local design consultant.">
                      <input
                        type="text"
                        inputMode="numeric"
                        maxLength={5}
                        value={data.zip}
                        onChange={(e) => set("zip", e.target.value.replace(/\D/g, ""))}
                        placeholder="90210"
                        className="w-full border border-navy/15 bg-cream/40 px-5 py-4 text-center font-serif text-3xl tracking-[0.4em] text-navy focus:border-gold focus:outline-none"
                      />
                    </StepView>
                  )}
                  {step === 2 && (
                    <StepView title="What type of project?">
                      <RadioCards options={projectTypes} value={data.projectType} onChange={(v) => set("projectType", v)} />
                    </StepView>
                  )}
                  {step === 3 && (
                    <StepView title="What's your timeline?">
                      <RadioCards options={timelines} value={data.timeline} onChange={(v) => set("timeline", v)} />
                    </StepView>
                  )}
                  {step === 4 && (
                    <StepView title="Approximate budget?">
                      <RadioCards options={budgets} value={data.budget} onChange={(v) => set("budget", v)} />
                    </StepView>
                  )}
                  {step === 5 && (
                    <StepView title="Where should we send your estimate?">
                      <form onSubmit={submit} className="space-y-4">
                        <Input label="Full Name" value={data.name} onChange={(v) => set("name", v)} required />
                        <Input label="Phone" type="tel" value={data.phone} onChange={(v) => set("phone", v)} required />
                        <Input label="Email" type="email" value={data.email} onChange={(v) => set("email", v)} required />
                        <button type="submit" className="w-full bg-gold px-8 py-4 text-sm font-semibold uppercase tracking-widest text-navy transition hover:brightness-110">
                          Get My Free Estimate
                        </button>
                        <p className="text-center text-xs text-navy/50">
                          By submitting you consent to be contacted about your project.
                        </p>
                      </form>
                    </StepView>
                  )}
                </div>

                {step < 5 && (
                  <div className="mt-8 flex items-center justify-between">
                    <button
                      onClick={back}
                      disabled={step === 1}
                      className="text-xs uppercase tracking-widest text-navy/60 transition hover:text-gold disabled:invisible"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={next}
                      disabled={!canAdvance}
                      className="bg-gold px-8 py-3 text-xs font-semibold uppercase tracking-widest text-navy transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      Next →
                    </button>
                  </div>
                )}

                {step === 5 && (
                  <button
                    onClick={back}
                    className="mt-6 text-xs uppercase tracking-widest text-navy/60 hover:text-gold"
                  >
                    ← Back
                  </button>
                )}
              </>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

function StepView({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div className="animate-[fadeIn_.4s_ease-out]">
      <h3 className="text-center font-serif text-2xl text-navy md:text-3xl">{title}</h3>
      {sub && <p className="mb-6 mt-2 text-center text-sm text-navy/60">{sub}</p>}
      {!sub && <div className="mb-6" />}
      {children}
    </div>
  );
}

function RadioCards({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {options.map((o) => {
        const active = value === o;
        return (
          <button
            key={o}
            type="button"
            onClick={() => onChange(o)}
            className={`border px-5 py-4 text-left font-serif text-lg transition ${
              active
                ? "border-gold bg-gold/10 text-navy"
                : "border-navy/15 bg-white text-navy hover:border-gold hover:bg-cream"
            }`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs uppercase tracking-widest text-navy/60">{label}</span>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border border-navy/15 bg-white px-4 py-3 text-navy focus:border-gold focus:outline-none"
      />
    </label>
  );
}

function Thanks() {
  return (
    <div className="py-12 text-center">
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-gold">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8 text-gold">
          <path d="M5 12l5 5L20 7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <h3 className="font-serif text-3xl text-navy">Thank You</h3>
      <p className="mt-4 text-navy/70">
        A design consultant will reach out within one business day to schedule your complimentary in-home estimate.
      </p>
    </div>
  );
}