const steps = [
  { n: 1, title: "Tell Us About Your Project", body: "Share ZIP, project type, and your timeline in 60 seconds." },
  { n: 2, title: "Get a Free In-Home Quote", body: "A designer visits, measures, and crafts a tailored proposal." },
  { n: 3, title: "We Handle Everything", body: "From permits to installation, your sanctuary is in expert hands." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="bg-navy py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-gold">How It Works</p>
          <h2 className="font-serif text-4xl text-white md:text-5xl">A Refined, Effortless Process</h2>
        </div>

        <div className="relative grid gap-12 md:grid-cols-3">
          <div
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px md:block"
            style={{
              backgroundImage:
                "repeating-linear-gradient(to right, #C9A84C 0 6px, transparent 6px 14px)",
            }}
          />
          {steps.map((s) => (
            <div key={s.n} className="relative text-center">
              <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-gold bg-navy">
                <span className="font-serif text-2xl text-gold">{s.n}</span>
              </div>
              <h3 className="font-serif text-2xl text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
