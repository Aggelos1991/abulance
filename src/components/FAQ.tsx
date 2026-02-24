"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is IQ Driver Ambulette?",
    a: "Your all-in-one control center for non-emergency medical transportation. Scheduling, dispatching, billing, and tracking — all in one place.",
  },
  {
    q: "Which brokers does it connect with?",
    a: "Modivcare-Logisticare, MTM, Medical Answering Services (MAS), Corporate Transportation Group (CTG), and Sentry. Trips import directly into your dashboard.",
  },
  {
    q: "How does the AI work?",
    a: "AI optimizes routes, assigns drivers, and keeps operations flowing. Our AI Receptionist also handles calls, books rides, and provides status updates automatically.",
  },
  {
    q: "Is there a driver app?",
    a: "Yes — with turn-by-turn navigation, one-tap status updates, and real-time sync. Drivers see exactly where to go and what's next.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50">
            FAQ
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-2"
        >
          {faqs.map((faq, i) => (
            <button
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                openIndex === i
                  ? "bg-white/[0.04] border border-white/10"
                  : "border border-transparent hover:bg-white/[0.02]"
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <span className={`text-sm font-medium ${openIndex === i ? "text-cream-50" : "text-cream-200/60"}`}>
                  {faq.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === i ? 45 : 0 }}
                  className={`text-lg flex-shrink-0 ${openIndex === i ? "text-glow-cyan" : "text-cream-200/20"}`}
                >
                  +
                </motion.span>
              </div>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="mt-3 text-sm text-cream-200/40 leading-relaxed overflow-hidden"
                  >
                    {faq.a}
                  </motion.p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
