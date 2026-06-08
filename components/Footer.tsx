export default function Footer() {
  return (
    <footer className="bg-navy py-10 text-center text-xs text-white/50" style={{ borderTop: "1px solid rgba(201,168,76,0.30)" }}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-3 font-serif text-xl text-gold">ClaraBath</div>
        © {new Date().getFullYear()} ClaraBath Remodels. Licensed contractor. Financing subject to credit approval.
      </div>
    </footer>
  );
}
