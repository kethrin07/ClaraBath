"use client";

export default function Footer() {
  return (
    <footer className="bg-navy" style={{ borderTop: "1px solid rgba(201,168,76,0.30)" }}>
      
      {/* Main footer grid */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand col */}
          <div className="md:col-span-1">
            <div className="font-serif text-2xl text-gold">Check Bath Homes</div>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Connecting homeowners with professional bathroom renovation contractors. Your dream bathroom starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="space-y-3">
                <li><a href="#benefits" className="text-sm text-white/55 transition hover:text-gold">Benefits</a></li>
                <li><a href="#how" className="text-sm text-white/55 transition hover:text-gold">How It Works</a></li>
                <li><a href="#numbers" className="text-sm text-white/55 transition hover:text-gold">By The Numbers</a></li>
                <li><a href="#testimonials" className="text-sm text-white/55 transition hover:text-gold">Testimonials</a></li>
                <li><a href="#about" className="text-sm text-white/55 transition hover:text-gold">About</a></li>
                <li><a href="#faq" className="text-sm text-white/55 transition hover:text-gold">FAQ</a></li>
                <li><a href="#get-estimate" className="text-sm text-white/55 transition hover:text-gold">Get Free Estimate</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-sm text-white/55 transition hover:text-gold">
                  About Us
                </a>
              </li>
              <li>
                <a href="#get-estimate" className="text-sm text-white/55 transition hover:text-gold">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-widest text-white">Legal</h4>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms & Conditions"].map((item) => (
                <li key={item}>
                  
                    <a href="#"
                    onClick={(e) => e.preventDefault()}
                    className="text-sm text-white/55 transition hover:text-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-white/10" />
      </div>

      {/* Bottom disclaimer + copyright */}
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <p className="text-xs leading-relaxed text-white/40">
            <span className="font-semibold text-white/60">Disclaimer:</span> This website offers a free service to assist homeowners in locating contractors within their vicinity. All contractors featured here are independent. This site does not provide any warranties or guarantees for the work carried out. It is the homeowner's responsibility to ensure that the hired contractor possesses the necessary licenses and insurance required for the work they are undertaking.
          </p>
          <p className="text-xs leading-relaxed text-white/40 md:text-right">
            © {new Date().getFullYear()} Check Bath Homes. All Rights Reserved. We connect homeowners with trusted local bathroom renovation professionals who deliver quality results.
          </p>
        </div>
      </div>

    </footer>
  );
}