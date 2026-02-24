"use client";

import { motion } from "framer-motion";

const platforms = [
  { name: "Provider Panel", desc: "Fleet & dispatch control", gradient: "from-glow-blue to-blue-600" },
  { name: "Broker Panel", desc: "Trip import & compliance", gradient: "from-glow-cyan to-teal-500" },
  { name: "Corporate Panel", desc: "Analytics & oversight", gradient: "from-purple-500 to-glow-purple" },
  { name: "Driver App", desc: "Navigation & status", gradient: "from-emerald-500 to-green-600" },
  { name: "Member Care", desc: "Ride booking & tracking", gradient: "from-rose-500 to-pink-600" },
  { name: "Billing Software", desc: "Claims & payments", gradient: "from-amber-500 to-orange-600" },
];

export default function Platforms() {
  return (
    <section id="platforms" className="relative py-28">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Built for{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              Every Role
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-cream-200/40">
            Dedicated tools for everyone in the ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group flex items-center gap-4 p-5 rounded-xl bg-white/[0.03] border border-white/5 hover:border-glow-blue/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${p.gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity`}>
                {p.name.split(" ")[0].substring(0, 2).toUpperCase()}
              </div>
              <div>
                <div className="text-sm font-semibold text-cream-50">{p.name}</div>
                <div className="text-xs text-cream-200/30">{p.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
