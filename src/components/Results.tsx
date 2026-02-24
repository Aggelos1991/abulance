"use client";

import { motion, useInView, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate: (v) => setDisplay(Math.round(v)),
      });
      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 98, suffix: "%", label: "On-Time Rate", context: "vs. 78% industry avg" },
  { value: 45, suffix: "%", label: "Cost Reduction", context: "vs. manual dispatch" },
  { value: 300, suffix: "%", label: "Trip Volume Growth", context: "within first year" },
  { value: 99, suffix: "%", label: "Billing Accuracy", context: "automated claims" },
];

export default function Results() {
  return (
    <section id="results" className="relative py-20 sm:py-24">
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
            Proven{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              Results
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 rounded-xl bg-white/[0.03] border border-white/5 hover:border-glow-blue/15 transition-colors duration-300"
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-br from-glow-blue to-glow-cyan bg-clip-text text-transparent mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-cream-200/60 font-medium">
                {stat.label}
              </div>
              <div className="text-[10px] text-cream-200/35 mt-1">
                {stat.context}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
