"use client";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
                IQ Driver Ambulette
              </span>
              <span className="text-[9px] text-cream-200/30 tracking-widest uppercase">by IQ TAXI</span>
            </div>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-cream-200/40">
            <a href="#features" className="hover:text-cream-200/70 transition-colors">Features</a>
            <a href="#integrations" className="hover:text-cream-200/70 transition-colors">Integrations</a>
            <a href="#faq" className="hover:text-cream-200/70 transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-cream-200/70 transition-colors">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-cream-200/30">
            &copy; {new Date().getFullYear()} IQ Driver Ambulette. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
