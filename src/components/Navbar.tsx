"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#integrations", label: "Integrations" },
  { href: "#results", label: "Results" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-navy-950/90 backdrop-blur-xl border-b border-glow-blue/10 shadow-lg shadow-glow-blue/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo */}
          <a href="https://www.iqtaxi.com/newsite/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center shadow-lg shadow-glow-blue/30 group-hover:shadow-glow-blue/60 transition-shadow duration-300 logo-glow">
                <svg className="w-6 h-6" viewBox="0 0 64 64" fill="none">
                  {/* Wheelchair – dynamic accessibility symbol */}
                  <circle cx="24" cy="14" r="5" fill="white"/>
                  <path d="M22 22c0 0 2-2 6 0l2 10h12l3 8" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 28l-2 14" stroke="white" strokeWidth="3.5" strokeLinecap="round"/>
                  <circle cx="22" cy="46" r="8" stroke="white" strokeWidth="3.5" fill="none"/>
                  {/* EKG heartbeat accent */}
                  <path d="M38 30l3-8 4 14 3-6h8" stroke="#00d4ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9"/>
                </svg>
              </div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-glow-blue to-glow-cyan opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-xl font-bold text-cream-50 tracking-tight leading-tight">
                IQ <span className="text-glow-cyan">Mobility</span>
              </span>
              <span className="text-[9px] text-cream-200/40 tracking-widest uppercase">by IQ TAXI</span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-cream-200/70 hover:text-cream-50 transition-colors duration-200 rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-semibold text-cream-50 bg-gradient-to-r from-glow-blue to-glow-cyan rounded-full hover:shadow-lg hover:shadow-glow-blue/30 transition-all duration-300 hover:scale-105"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-cream-50 block transition-colors"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-cream-50 block"
            />
            <motion.span
              animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-cream-50 block transition-colors"
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-950/95 backdrop-blur-xl border-b border-glow-blue/10"
          >
            <div className="px-6 py-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 text-cream-200/70 hover:text-cream-50 hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-3 text-center font-semibold text-cream-50 bg-gradient-to-r from-glow-blue to-glow-cyan rounded-full"
              >
                Request Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
