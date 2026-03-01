"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const faqs = [
  {
    q: "What is IQ Mobility Platform?",
    a: "Your control center for non-emergency medical transportation. Scheduling, dispatching, billing, tracking — everything in one place. No more jumping between tools or spreadsheets. Providers, brokers, and drivers each get their own dedicated panel.",
  },
  {
    q: "Which brokers does it connect with?",
    a: "Modivcare-Logisticare, MTM, Medical Answering Services (MAS), Corporate Transportation Group (CTG), and Sentry. Trips download automatically into your dashboard — no more copying trip data manually.",
  },
  {
    q: "How does billing work?",
    a: "Claims are created, formatted, and submitted automatically. The system supports broker billing, EDI, and CMS-1500. You can see what's pending, what's paid, and what needs attention — all in one view.",
  },
  {
    q: "How does AI improve operations?",
    a: "AI runs in the background — optimizing routes, assigning the right drivers, and keeping everything moving. The AI Receptionist answers calls, books rides, and gives status updates around the clock.",
  },
  {
    q: "Is there a driver app?",
    a: "Yes — IQ Driver Ambulette shows where to go, what's next, and how far from pickup or drop-off. It updates everything in real time with turn-by-turn navigation and one-tap status updates.",
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
