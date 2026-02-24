"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Scheduling used to take us hours every morning. Now it runs itself — trips come in from the brokers and the system handles the rest.",
    name: "Maria S.",
    role: "Fleet Manager",
    initials: "MS",
  },
  {
    quote: "Our drivers actually love the app. They know where to go, what's next, and they don't have to call dispatch every five minutes.",
    name: "James R.",
    role: "Operations Director",
    initials: "JR",
  },
  {
    quote: "Billing accuracy went from constant rejections to near-perfect claims. The automated EDI submissions alone saved us a full-time position.",
    name: "Linda T.",
    role: "Billing Coordinator",
    initials: "LT",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              NEMT Providers
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 sm:p-6 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-glow-blue/15 transition-colors duration-300 flex flex-col"
            >
              <svg className="w-6 h-6 text-glow-blue/40 mb-4 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
              </svg>
              <p className="text-sm leading-relaxed text-cream-200/70 mb-6 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-glow-blue to-glow-cyan flex items-center justify-center text-white text-xs font-bold">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-cream-50">{t.name}</div>
                  <div className="text-xs text-cream-200/40">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
