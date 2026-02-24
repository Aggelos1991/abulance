"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const screens = [
  {
    id: "dispatch",
    label: "Live Dispatch",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
    src: "/screenshots/dispatch.png",
    description: "Real-time map with live vehicle positions, trip scheduling, and route optimization across the NYC metro area.",
  },
  {
    id: "voucher",
    label: "Trip Management",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    src: "/screenshots/voucher.png",
    description: "Complete voucher creation, driver assignment, and trip scheduling with 224+ daily trips managed from one screen.",
  },
  {
    id: "billing",
    label: "Billing & Claims",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    src: "/screenshots/billing.png",
    description: "Automated billing with service codes, insurance processing, and one-click claim submission to all major brokers.",
  },
  {
    id: "fleet",
    label: "Fleet Management",
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25m0 0V3.75A2.25 2.25 0 0012 1.5H5.25A2.25 2.25 0 003 3.75v10.5h11.25z" />
      </svg>
    ),
    src: "/screenshots/fleet.png",
    description: "Complete vehicle inventory with mileage tracking, DOT expiry alerts, TLC license management, and maintenance scheduling.",
  },
];

export default function Platform() {
  const [active, setActive] = useState(0);

  return (
    <section id="platform" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-glow-cyan animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-widest text-glow-cyan">
              Command Center
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Your Entire Operation,{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              One Platform
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-cream-200/60 text-sm sm:text-base">
            See the real IQ Dispatch call center powering NEMT operations across New York.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8"
        >
          {screens.map((screen, i) => (
            <button
              key={screen.id}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                active === i
                  ? "bg-gradient-to-r from-glow-blue to-glow-cyan text-white shadow-lg shadow-glow-blue/20"
                  : "bg-white/[0.04] border border-white/[0.08] text-cream-200/50 hover:text-cream-200/80 hover:border-white/15"
              }`}
            >
              {screen.icon}
              {screen.label}
            </button>
          ))}
        </motion.div>

        {/* Screenshot display */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          {/* Browser chrome frame */}
          <div className="rounded-xl sm:rounded-2xl overflow-hidden border border-white/[0.08] bg-navy-900/80 backdrop-blur-sm shadow-2xl shadow-black/40">
            {/* Title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 bg-navy-800/60 border-b border-white/[0.06]">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <div className="flex-1 mx-4">
                <div className="max-w-sm mx-auto px-3 py-1 rounded-md bg-white/[0.05] text-[10px] text-cream-200/30 text-center truncate">
                  iq-dispatch.iqtaxi.com — {screens[active].label}
                </div>
              </div>
            </div>

            {/* Screenshot with animation */}
            <div className="relative aspect-[16/9] sm:aspect-[16/8] overflow-hidden bg-navy-950">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.35 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={screens[active].src}
                    alt={screens[active].label}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 1152px"
                    priority={active === 0}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Bottom gradient overlay for description */}
              <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-28 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent" />

              {/* Description overlay */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`desc-${active}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="absolute bottom-0 left-0 right-0 px-4 sm:px-6 pb-4 sm:pb-5"
                >
                  <p className="text-xs sm:text-sm text-cream-200/70 max-w-2xl">
                    {screens[active].description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Decorative glow behind frame */}
          <div className="absolute -inset-4 bg-gradient-to-r from-glow-blue/[0.05] via-transparent to-glow-cyan/[0.05] rounded-3xl blur-2xl -z-10 pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
}
