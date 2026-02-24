"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const brokers = [
  {
    name: "MAS",
    full: "Medical Answering Services",
    color: "from-blue-500 to-blue-700",
    glow: "rgba(59, 130, 246, 0.5)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
  {
    name: "Modivcare",
    full: "Modivcare-Logisticare",
    color: "from-teal-500 to-emerald-600",
    glow: "rgba(20, 184, 166, 0.5)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
  {
    name: "MTM",
    full: "Medical Transportation Management",
    color: "from-purple-500 to-violet-600",
    glow: "rgba(139, 92, 246, 0.5)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    name: "CTG",
    full: "Corporate Transportation Group",
    color: "from-amber-500 to-orange-600",
    glow: "rgba(245, 158, 11, 0.5)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
  {
    name: "Sentry",
    full: "Sentry Transportation",
    color: "from-rose-500 to-red-600",
    glow: "rgba(244, 63, 94, 0.5)",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

export default function Integrations() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="integrations" className="relative py-20 sm:py-28 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-blue/[0.04] rounded-full blur-[100px]" />
      </div>

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-cream-200/60 tracking-wide">
              Live Integrations
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cream-50 mb-4">
            Connected to{" "}
            <span className="bg-gradient-to-r from-glow-blue via-glow-cyan to-glow-purple bg-clip-text text-transparent">
              Major Brokers
            </span>
          </h2>
          <p className="mx-auto max-w-md text-sm sm:text-base text-cream-200/50">
            Trips flow directly into your dashboard — zero manual entry, zero delays.
          </p>
        </motion.div>

        {/* Central hub + broker cards */}
        <div className="relative">
          {/* Central hub icon */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
            className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 mb-8 sm:mb-12"
          >
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-glow-blue to-glow-cyan opacity-20 blur-xl animate-pulse-glow" />
            <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-glow-blue/20 to-glow-cyan/20 border border-glow-blue/30 flex items-center justify-center backdrop-blur-sm">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-glow-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
              </svg>
            </div>

            {/* Orbiting dots */}
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-glow-cyan/60"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "linear",
                  delay: i * 1.3,
                }}
                style={{
                  top: "50%",
                  left: "50%",
                  transformOrigin: `${20 + i * 8}px 0px`,
                }}
              />
            ))}
          </motion.div>

          {/* Broker cards grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10"
          >
            {brokers.map((broker, i) => (
              <motion.div
                key={broker.name}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08, type: "spring", bounce: 0.3 }}
                whileHover={{ y: -6, scale: 1.03 }}
                onHoverStart={() => setHoveredIndex(i)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative flex flex-col items-center gap-3 sm:gap-4 p-4 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.15] transition-all duration-500 cursor-default"
              >
                {/* Card glow on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${broker.glow.replace("0.5", "0.08")} 0%, transparent 70%)`,
                  }}
                />

                {/* Icon container */}
                <div className="relative">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${broker.color} flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-500`}
                    style={{
                      boxShadow: hoveredIndex === i ? `0 8px 30px ${broker.glow.replace("0.5", "0.3")}` : undefined,
                    }}
                  >
                    {broker.icon}
                  </div>

                  {/* Connected indicator */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-navy-950 flex items-center justify-center">
                    <motion.div
                      className="w-2.5 h-2.5 rounded-full bg-emerald-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.3 }}
                    />
                  </div>
                </div>

                {/* Text */}
                <div className="text-center">
                  <div className="text-sm sm:text-base font-semibold text-cream-50 mb-0.5">
                    {broker.name}
                  </div>
                  <div className="text-[10px] sm:text-xs text-cream-200/35 leading-tight">
                    {broker.full}
                  </div>
                </div>

                {/* Bottom status bar */}
                <div className="w-full flex items-center justify-center gap-1.5 pt-2 sm:pt-3 border-t border-white/[0.04]">
                  <motion.div
                    className="h-[3px] rounded-full bg-gradient-to-r from-glow-blue to-glow-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: "60%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom tagline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8"
          >
            {[
              { label: "Auto-Import", desc: "Trips sync instantly" },
              { label: "Real-Time", desc: "Live status updates" },
              { label: "Zero Entry", desc: "Fully automated" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 1 + i * 0.1 }}
                className="flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-glow-cyan/70 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75" />
                </svg>
                <span className="text-xs sm:text-sm text-cream-200/50">
                  <span className="text-cream-50/80 font-medium">{item.label}</span>{" "}
                  <span className="hidden sm:inline">— {item.desc}</span>
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
