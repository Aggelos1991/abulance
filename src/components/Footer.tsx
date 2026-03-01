"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top row: Logo + Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
          {/* Logo */}
          <a href="https://www.iqtaxi.com/newsite/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center shadow-md shadow-glow-blue/20">
              <svg className="w-5 h-5" viewBox="0 0 64 64" fill="none">
                <circle cx="24" cy="14" r="5" fill="white"/>
                <path d="M22 22c0 0 2-2 6 0l2 10h12l3 8" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M20 28l-2 14" stroke="white" strokeWidth="4" strokeLinecap="round"/>
                <circle cx="22" cy="46" r="8" stroke="white" strokeWidth="4" fill="none"/>
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-cream-200/60">
                IQ Mobility
              </span>
              <span className="text-[9px] text-cream-200/30 tracking-widest uppercase">by IQ TAXI</span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cream-200/40">
            <a href="#features" className="hover:text-cream-200/70 transition-colors">Features</a>
            <a href="#integrations" className="hover:text-cream-200/70 transition-colors">Integrations</a>
            <a href="#faq" className="hover:text-cream-200/70 transition-colors">FAQ</a>
            <a href="/contact" className="hover:text-cream-200/70 transition-colors">Contact</a>
          </div>
        </div>

        {/* Business Addresses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-10 pt-8 border-t border-white/5">
          {/* IQTaxi */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-glow-cyan mb-3">IQTaxi</h4>
            <address className="not-italic text-xs leading-relaxed text-cream-200/40 space-y-1">
              <p>23-47 31 Ave., Astoria NY, 11106, USA</p>
              <p>
                Phone:{" "}
                <a href="tel:+306944146889" className="text-cream-200/60 hover:text-glow-cyan transition-colors">
                  +30.6944.146.889
                </a>
              </p>
            </address>
          </div>

          {/* Lifecare Ambulette */}
          <div className="text-center sm:text-left">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-glow-cyan mb-3">Lifecare Ambulette Inc</h4>
            <address className="not-italic text-xs leading-relaxed text-cream-200/40 space-y-1">
              <p>1224 Brunswick Ave, Far Rockaway, NY 11691-3920</p>
              <p>
                Phone:{" "}
                <a href="tel:+16467723668" className="text-cream-200/60 hover:text-glow-cyan transition-colors">
                  646-772-3668
                </a>
              </p>
              <p>
                Fax: 718-327-3010
              </p>
              <p>
                Director:{" "}
                <a href="tel:+16465521111" className="text-cream-200/60 hover:text-glow-cyan transition-colors">
                  646-552-1111
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-6 border-t border-white/5 text-center text-xs text-cream-200/30">
          &copy; {new Date().getFullYear()} IQ Mobility. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
