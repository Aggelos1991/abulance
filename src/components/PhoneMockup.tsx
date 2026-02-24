"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";

/* ── Recreated app screens matching the real IQ Driver interface ── */
const screens = [
  {
    label: "Today's Trips",
    description: "View and manage all scheduled trips with one-tap confirm or cancel",
    content: (
      <div className="flex flex-col h-full bg-[#2a2a2a]">
        {/* App bar */}
        <div className="bg-[#2e6b4f] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 flex flex-col gap-[3px]">
              <div className="w-full h-[2px] bg-[#c8a84e]" />
              <div className="w-full h-[2px] bg-[#c8a84e]" />
              <div className="w-full h-[2px] bg-[#c8a84e]" />
            </div>
          </div>
          <span className="text-white text-xs font-bold">Tue 2/24 Today (5)</span>
          <div className="w-5" />
        </div>

        {/* Trip cards */}
        <div className="flex-1 overflow-hidden px-1 py-1.5 space-y-1.5">
          {[
            { type: "WC", pickup: "Brooklyn, NY 11231", dropoff: "Brooklyn, NY 11206", timeP: "09:15", timeD: "10:15" },
            { type: "WLKR", pickup: "Jackson Heights, NY 11372", dropoff: "Flushing, NY 11377", timeP: "09:30", timeD: "10:00" },
            { type: "WLKR", pickup: "Queens Blvd, Kew...", dropoff: "Astoria, NY 11103", timeP: "10:30", timeD: "11:15" },
          ].map((trip, i) => (
            <div key={i} className="bg-[#3a3a3a] rounded-md p-2">
              <div className="flex items-center justify-between mb-1.5">
                <div className="bg-[#2e8b2e] px-2 py-0.5 rounded">
                  <span className="text-[7px] font-bold text-white">CONFIRM</span>
                </div>
                <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                </svg>
                <div className="bg-[#8b2e2e] px-2 py-0.5 rounded">
                  <span className="text-[7px] font-bold text-white">CANCEL</span>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <span className="text-[7px] text-white/70 border border-white/20 px-1.5 py-0.5 rounded-full">{trip.type}</span>
                <span className="text-[7px] text-white/50">$0.0</span>
              </div>
              <div className="flex items-center gap-1.5 mb-0.5">
                <svg className="w-3 h-3 text-white/40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
                </svg>
                <div className="flex-1">
                  <div className="text-[8px] text-white/80 truncate">{trip.pickup}</div>
                </div>
                <span className="text-[7px] text-white/50">({trip.timeP})</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-3" />
                <div className="flex-1">
                  <div className="text-[8px] text-white/60 truncate">{trip.dropoff}</div>
                </div>
                <span className="text-[7px] text-white/50">({trip.timeD})</span>
                <svg className="w-2.5 h-2.5 text-white/30" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6h-5.6z"/>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="bg-[#2a2a2a] border-t border-white/5 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            </div>
            <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="text-[7px] text-white/40 truncate">OFF Test Iqtaxi c...</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#2e6b2e] border-2 border-green-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Trip Navigation",
    description: "Live map with pickup/drop-off pins and turn-by-turn directions",
    content: (
      <div className="flex flex-col h-full bg-[#2a2a2a]">
        {/* App bar */}
        <div className="bg-[#2e6b4f] px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 flex flex-col gap-[3px]">
              <div className="w-full h-[2px] bg-[#c8a84e]" />
              <div className="w-full h-[2px] bg-[#c8a84e]" />
              <div className="w-full h-[2px] bg-[#c8a84e]" />
            </div>
            <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"/>
            </svg>
          </div>
          <span className="text-white text-xs font-bold">Home</span>
          <div className="w-5" />
        </div>

        {/* Trip info */}
        <div className="bg-[#3a3a3a] p-2.5">
          <div className="flex items-center justify-between mb-1.5">
            <div className="bg-[#2e8b2e] px-2 py-0.5 rounded">
              <span className="text-[7px] font-bold text-white">CONFIRM</span>
            </div>
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
            </svg>
            <div className="bg-[#8b2e2e] px-2 py-0.5 rounded">
              <span className="text-[7px] font-bold text-white">CANCEL</span>
            </div>
          </div>
          <div className="flex items-center gap-1.5 mb-0.5">
            <svg className="w-3 h-3 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM9.8 8.9L7 23h2.1l1.8-8 2.1 2v6h2v-7.5l-2.1-2 .6-3C14.8 12 16.8 13 19 13v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L6 8.3V13h2V9.6l1.8-.7"/>
            </svg>
            <span className="text-[8px] text-white/80 truncate">837 Ashford St, Brooklyn, NY ...</span>
            <span className="text-[7px] text-white/50">(12:15)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-3" />
            <span className="text-[8px] text-white/60 truncate">385 Seneca Ave, Ridgewood, NY 11385</span>
            <span className="text-[7px] text-white/50">(13:15)</span>
          </div>
        </div>

        {/* Map area */}
        <div className="flex-1 relative bg-[#1a1a2e] overflow-hidden">
          {/* Dark map grid */}
          <div className="absolute inset-0" style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }} />
          {/* Road lines */}
          <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-white/10" />
          <div className="absolute top-[55%] left-0 right-0 h-[1px] bg-white/10 rotate-12" />
          <div className="absolute left-[40%] top-0 bottom-0 w-[1px] bg-white/10" />
          <div className="absolute left-[65%] top-0 bottom-0 w-[1px] bg-white/10 -rotate-6" />

          {/* Pickup pin */}
          <div className="absolute top-[40%] left-[45%] -translate-x-1/2 flex flex-col items-center">
            <div className="bg-white px-1.5 py-0.5 rounded text-[6px] font-bold text-gray-800 mb-0.5 shadow-md">
              Pick up
            </div>
            <svg className="w-5 h-6 text-green-500 drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
          </div>

          {/* Map controls */}
          <div className="absolute right-2 top-3 flex flex-col gap-1.5">
            <div className="w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm8.94 3c-.46-4.17-3.77-7.48-7.94-7.94V1h-2v2.06C6.83 3.52 3.52 6.83 3.06 11H1v2h2.06c.46 4.17 3.77 7.48 7.94 7.94V23h2v-2.06c4.17-.46 7.48-3.77 7.94-7.94H23v-2h-2.06z"/>
              </svg>
            </div>
            <div className="w-6 h-6 rounded bg-white/90 shadow flex items-center justify-center">
              <svg className="w-3 h-3 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
              </svg>
            </div>
          </div>

          {/* Google logo */}
          <div className="absolute bottom-2 left-2">
            <span className="text-[7px] font-bold">
              <span className="text-blue-400">G</span>
              <span className="text-red-400">o</span>
              <span className="text-yellow-400">o</span>
              <span className="text-blue-400">g</span>
              <span className="text-green-400">l</span>
              <span className="text-red-400">e</span>
            </span>
          </div>

          {/* Zoom controls */}
          <div className="absolute right-2 bottom-4 flex flex-col gap-0.5">
            <div className="w-6 h-6 rounded-t bg-white/90 shadow flex items-center justify-center text-gray-600 text-sm font-bold">+</div>
            <div className="w-6 h-6 rounded-b bg-white/90 shadow flex items-center justify-center text-gray-600 text-sm font-bold">−</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="bg-[#2a2a2a] border-t border-white/5 px-3 py-2 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-yellow-400" />
            </div>
            <svg className="w-4 h-4 text-white/40" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="text-[7px] text-white/40 truncate">ON Test Iqtaxi c...</span>
          </div>
          <div className="w-7 h-7 rounded-full bg-[#2e6b2e] border-2 border-green-500 flex items-center justify-center">
            <svg className="w-3 h-3 text-green-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/>
              <path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
            </svg>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Pre-Trip Inspection",
    description: "Digital vehicle condition reports with built-in compliance checks",
    content: (
      <div className="flex flex-col h-full bg-[#2a2a2a]">
        {/* App bar */}
        <div className="bg-[#2e6b4f] px-4 py-2.5 flex items-center justify-between">
          <span className="text-white text-[9px] font-bold">CANCEL</span>
          <span className="text-white text-[9px] font-bold">SUBMIT</span>
        </div>

        {/* Form content */}
        <div className="flex-1 overflow-hidden px-4 py-3">
          <h3 className="text-[10px] font-bold text-white text-center mb-2 tracking-wide">
            VEHICLE CONDITION REPORT
          </h3>

          <div className="flex items-center justify-between mb-1">
            <span className="text-[8px] text-white/60">Milage at Start</span>
            <span className="text-[8px] text-white/80 border-b border-[#c8a84e] pb-0.5 px-2">43108</span>
          </div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[8px] text-white/60">Start Time</span>
            <span className="text-[8px] text-white/80 border-b border-[#c8a84e] pb-0.5 px-2">02/24/2026 10:53</span>
          </div>

          <div className="text-center mb-1">
            <span className="text-[9px] font-bold text-white tracking-wide">PRE-TRIP</span>
          </div>
          <div className="w-full h-[1px] bg-[#c8a84e] mb-1" />
          <div className="text-center mb-2">
            <span className="text-[8px] font-bold text-white">TURN ON ALL LIGHTS</span>
          </div>
          <div className="w-full h-[1px] bg-[#c8a84e] mb-2" />

          {/* Checklist */}
          <div className="space-y-2">
            {[
              { label: "Emergency Equipment", checked: true },
              { label: "Fluid Leaks", checked: true },
              { label: "Gauges", checked: true },
              { label: "Horn", checked: true },
              { label: "Windshield wipers", checked: true },
              { label: "Engine", checked: true },
              { label: "Transmition", checked: true },
              { label: "Steering", checked: false },
              { label: "All Lights / Reflectors", checked: false },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-3.5 h-3.5 rounded-sm flex items-center justify-center ${
                  item.checked ? "bg-pink-500" : "border border-white/30"
                }`}>
                  {item.checked && (
                    <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                    </svg>
                  )}
                </div>
                <span className="text-[8px] text-white/80">{item.label}</span>
                <div className="flex-1 border-b border-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
];

export default function PhoneMockup() {
  const sectionRef = useRef(null);
  const [activeScreen, setActiveScreen] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Glow intensity shifts with scroll
  const glowOpacity = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.3, 1, 0.3]);
  const glowScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.8, 1.2, 0.8]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveScreen((prev) => (prev + 1) % screens.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="relative py-20 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">
          {/* Text — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
              Your Entire Fleet,{" "}
              <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
                In Your Pocket
              </span>
            </h2>
            <p className="text-cream-200/60 mb-8 max-w-md mx-auto lg:mx-0">
              Dedicated apps for drivers, dispatchers, and members — each built for exactly what they need.
            </p>

            <div className="flex flex-col gap-3">
              {screens.map((screen, i) => (
                <button
                  key={i}
                  onClick={() => setActiveScreen(i)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-300 ${
                    activeScreen === i
                      ? "bg-white/[0.06] border border-glow-blue/20"
                      : "border border-transparent hover:bg-white/[0.03]"
                  }`}
                >
                  <div className={`w-2 h-2 rounded-full flex-shrink-0 transition-colors duration-300 ${
                    activeScreen === i ? "bg-glow-cyan" : "bg-white/20"
                  }`} />
                  <div>
                    <span className={`text-sm font-medium transition-colors duration-300 block ${
                      activeScreen === i ? "text-cream-50" : "text-cream-200/40"
                    }`}>
                      {screen.label}
                    </span>
                    <span className={`text-xs transition-colors duration-300 block mt-0.5 ${
                      activeScreen === i ? "text-cream-200/50" : "text-cream-200/20"
                    }`}>
                      {screen.description}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Phone — slides up smoothly */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.6 },
            }}
            className="flex-shrink-0"
          >
            {/* Continuous gentle float + horizontal sway */}
            <motion.div
              animate={{
                y: [0, -8, 0, 6, 0],
                x: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Phone frame — metallic bezel */}
              <div className="relative w-[240px] h-[480px] sm:w-[280px] sm:h-[560px] rounded-[38px] sm:rounded-[44px] bg-gradient-to-b from-gray-600 via-gray-800 to-gray-900 p-[2.5px] shadow-[0_0_60px_rgba(0,163,255,0.15),0_25px_50px_rgba(0,0,0,0.5)]">
                {/* Inner edge highlight */}
                <div className="absolute inset-[1px] rounded-[37px] sm:rounded-[43px] bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none z-10" />

                <div className="w-full h-full rounded-[36px] sm:rounded-[42px] bg-black overflow-hidden relative">
                  {/* Dynamic Island */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-black rounded-full z-20">
                    <div className="absolute top-1/2 -translate-y-1/2 right-4 w-[8px] h-[8px] rounded-full bg-gray-900 ring-1 ring-gray-700" />
                  </div>

                  {/* Status bar */}
                  <div className="absolute top-3 left-7 right-7 flex justify-between items-center z-10">
                    <span className="text-[10px] text-white/70 font-semibold">9:41</span>
                    <div className="flex items-center gap-1.5">
                      <div className="flex items-end gap-[2px]">
                        {[4, 6, 8, 10].map((h, idx) => (
                          <div key={idx} className="w-[3px] rounded-full bg-white/50" style={{ height: h }} />
                        ))}
                      </div>
                      <div className="w-[22px] h-[10px] border border-white/40 rounded-[3px] relative">
                        <div className="absolute inset-[1.5px] bg-white/50 rounded-[1.5px]" style={{ width: "70%" }} />
                        <div className="absolute -right-[3px] top-1/2 -translate-y-1/2 w-[2px] h-[5px] bg-white/40 rounded-r-full" />
                      </div>
                    </div>
                  </div>

                  {/* Screen content — inset to show black bezel like a real phone */}
                  <div className="absolute top-[48px] bottom-[28px] left-[4px] right-[4px] rounded-sm overflow-hidden">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={activeScreen}
                        initial={{ opacity: 0, y: 20, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 1.03 }}
                        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="w-full h-full"
                      >
                        {screens[activeScreen].content}
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  {/* Screen reflection overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.02) 100%)",
                    }}
                  />

                  {/* Home indicator */}
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-[5px] bg-white/25 rounded-full z-20" />
                </div>
              </div>

              {/* Side buttons — volume */}
              <div className="absolute -left-[2px] top-[120px] w-[3px] h-[28px] bg-gray-700 rounded-l-full" />
              <div className="absolute -left-[2px] top-[160px] w-[3px] h-[48px] bg-gray-700 rounded-l-full" />
              <div className="absolute -left-[2px] top-[218px] w-[3px] h-[48px] bg-gray-700 rounded-l-full" />
              {/* Side button — power */}
              <div className="absolute -right-[2px] top-[170px] w-[3px] h-[64px] bg-gray-700 rounded-r-full" />

              {/* Animated glow behind phone */}
              <motion.div
                style={{
                  opacity: glowOpacity,
                  scale: glowScale,
                }}
                className="absolute -inset-16 -z-10"
              >
                <div className="absolute inset-0 bg-glow-blue/10 rounded-full blur-[60px]" />
                <div className="absolute inset-4 bg-glow-cyan/8 rounded-full blur-[40px]" />
              </motion.div>

              {/* Ground reflection / shadow */}
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-[200px] h-[20px]">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: "radial-gradient(ellipse, rgba(0,163,255,0.15) 0%, transparent 70%)",
                    filter: "blur(8px)",
                  }}
                />
              </div>

              {/* Floating particles around the phone */}
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-glow-cyan/40"
                  style={{
                    top: `${15 + i * 18}%`,
                    left: i % 2 === 0 ? "-20px" : "calc(100% + 12px)",
                  }}
                  animate={{
                    y: [0, -15, 0],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2.5 + i * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.5,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
