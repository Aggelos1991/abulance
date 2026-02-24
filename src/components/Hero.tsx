"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false });

function WheelchairAccent({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 64 64" fill="currentColor" opacity="0.06">
      <circle cx="24" cy="14" r="5"/>
      <path d="M22 22c0 0 2-2 6 0l2 10h12l3 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
      <path d="M20 28l-2 14" stroke="currentColor" strokeWidth="4" strokeLinecap="round" fill="none"/>
      <circle cx="22" cy="46" r="8" stroke="currentColor" strokeWidth="4" fill="none"/>
    </svg>
  );
}

function HeartbeatLine() {
  return (
    <svg
      className="absolute bottom-32 left-0 right-0 w-full h-16 opacity-[0.06]"
      viewBox="0 0 1200 60"
      preserveAspectRatio="none"
    >
      <polyline
        points="0,30 200,30 230,30 250,10 270,50 290,20 310,40 330,30 400,30 600,30 630,30 650,8 670,52 690,18 710,42 730,30 800,30 1000,30 1030,30 1050,12 1070,48 1090,22 1110,38 1130,30 1200,30"
        fill="none"
        stroke="#00d4ff"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const globeY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20 pb-10 sm:pt-0 sm:pb-0">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Wheelchair accents */}
      <WheelchairAccent className="absolute top-24 left-[8%] w-12 h-12 sm:w-20 sm:h-20 text-glow-cyan animate-float-slow" />
      <WheelchairAccent className="absolute top-[30%] right-[6%] w-10 h-10 sm:w-16 sm:h-16 text-glow-blue animate-float" />

      {/* Heartbeat EKG line */}
      <HeartbeatLine />

      {/* 3D Scene with parallax */}
      <motion.div style={{ y: globeY }} className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-full max-w-3xl">
          <Scene3D />
        </div>
      </motion.div>

      {/* Content with parallax */}
      <motion.div style={{ y: textY, opacity: fadeOut }} className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 text-center flex flex-col items-center gap-5 sm:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]"
        >
          <svg className="w-4 h-4" viewBox="0 0 64 64" fill="none">
            <circle cx="24" cy="14" r="5" fill="#00d4ff"/>
            <path d="M22 22c0 0 2-2 6 0l2 10h12l3 8" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M20 28l-2 14" stroke="#00d4ff" strokeWidth="4" strokeLinecap="round"/>
            <circle cx="22" cy="46" r="8" stroke="#00d4ff" strokeWidth="4" fill="none"/>
            <path d="M40 28l3-8 4 14 3-6h6" stroke="#4a7cff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className="text-xs font-medium text-cream-200/70 tracking-wide">
            Medical Transportation Technology
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]"
        >
          <span className="text-cream-50">One Smart Platform for</span>
          <br />
          <span className="bg-gradient-to-r from-glow-blue via-glow-cyan to-glow-blue bg-clip-text text-transparent">
            Medical Transport
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-xl text-base md:text-lg text-cream-200/60 leading-relaxed"
        >
          AI-powered scheduling, dispatch, and billing — built for NEMT
          providers, brokers, and transportation companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href="#contact"
            className="group relative px-8 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-glow-blue to-glow-cyan rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-glow-blue/25"
          >
            <span className="relative z-10">Request a Demo</span>
            <div className="absolute inset-0 bg-gradient-to-r from-glow-cyan to-glow-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#features"
            className="px-8 py-3.5 text-sm font-semibold text-cream-200/70 border border-cream-200/20 rounded-full hover:border-glow-blue/40 hover:text-cream-50 transition-all duration-300"
          >
            Explore Features
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-navy-950 to-transparent" />
    </section>
  );
}
