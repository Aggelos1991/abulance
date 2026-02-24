"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const cards = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
    front: "Smart Scheduling & Dispatch",
    back: "Trips import automatically from brokers. AI optimizes routes, assigns drivers, and eliminates scheduling conflicts — with real-time tracking, mileage calculations, and live ETAs for every trip.",
    gradient: "from-glow-blue to-blue-600",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
    front: "AI Receptionist & Billing",
    back: "Our AI answers calls, books rides, and gives status updates around the clock. Claims are created, formatted, and submitted automatically via EDI, CMS-1500, and direct broker billing.",
    gradient: "from-purple-500 to-glow-purple",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
    front: "Apps for Every Role",
    back: "Provider, broker, and corporate dashboards for oversight. Driver app with turn-by-turn navigation and one-tap status. Member portal for booking rides, tracking drivers, and appointment reminders.",
    gradient: "from-glow-cyan to-teal-500",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    front: "HIPAA Compliant & Secure",
    back: "Full HIPAA compliance baked in. Connects directly with Modivcare, MTM, MAS, CTG, and Sentry — trips download automatically into your dashboard with zero manual entry.",
    gradient: "from-emerald-500 to-green-600",
  },
];

function FlipCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (flipped) {
      timerRef.current = setTimeout(() => setFlipped(false), 7000);
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [flipped]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="flip-card h-44 sm:h-52"
      onClick={() => setFlipped(!flipped)}
    >
      <div className={`flip-card-inner ${flipped ? "flip-card-flipped" : ""}`}>
        {/* Front */}
        <div className="flip-card-front rounded-2xl glass border border-white/[0.08] p-6 flex flex-col items-center justify-center text-center gap-4">
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white opacity-80`}>
            {card.icon}
          </div>
          <h3 className="text-base font-semibold text-cream-50">
            {card.front}
          </h3>
        </div>
        {/* Back */}
        <div className={`flip-card-back rounded-2xl p-6 flex items-center justify-center bg-gradient-to-br ${card.gradient}`}>
          <p className="text-sm leading-relaxed text-white/90 text-center">
            {card.back}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section id="features" className="relative py-20 sm:py-28 medical-pattern">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <svg className="w-5 h-5" viewBox="0 0 64 64" fill="none">
              <circle cx="24" cy="14" r="5" fill="#00d4ff"/>
              <path d="M22 22c0 0 2-2 6 0l2 10h12l3 8" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 28l-2 14" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round"/>
              <circle cx="22" cy="46" r="8" stroke="#00d4ff" strokeWidth="4" fill="none"/>
            </svg>
            <span className="text-xs font-semibold uppercase tracking-widest text-glow-cyan">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Medical Transportation,{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              Reimagined
            </span>
          </h2>
          <p className="mx-auto max-w-lg text-cream-200/60">
            Tap or hover to learn more about each capability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
          {cards.map((card, i) => (
            <FlipCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
