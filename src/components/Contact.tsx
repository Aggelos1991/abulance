"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      firstName: (form.elements.namedItem("firstName") as HTMLInputElement).value,
      lastName: (form.elements.namedItem("lastName") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28">
      <div className="absolute top-0 left-0 right-0 section-divider" />

      <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-cream-50 mb-4">
            Ready to{" "}
            <span className="bg-gradient-to-r from-glow-blue to-glow-cyan bg-clip-text text-transparent">
              Get Started?
            </span>
          </h2>
          <p className="text-cream-200/60 text-sm">
            See how IQ Driver Ambulette can streamline your operations.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="rounded-2xl glass p-5 sm:p-8"
        >
          {status === "sent" ? (
            <div className="text-center py-8">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-7 h-7 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-cream-50 mb-2">Request Received</h3>
              <p className="text-sm text-cream-200/60">We&apos;ll be in touch within 24 hours.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm text-glow-cyan hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <input
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-glow-blue/40 transition-colors"
                />
                <input
                  name="lastName"
                  type="text"
                  required
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-glow-blue/40 transition-colors"
                />
              </div>
              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-glow-blue/40 transition-colors"
              />
              <input
                name="company"
                type="text"
                placeholder="Company"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-glow-blue/40 transition-colors"
              />
              <textarea
                name="message"
                rows={3}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-sm text-cream-50 placeholder-cream-200/30 focus:outline-none focus:border-glow-blue/40 transition-colors resize-none"
              />
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-glow-blue to-glow-cyan rounded-xl hover:shadow-lg hover:shadow-glow-blue/20 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Request Demo"}
              </button>
              {status === "error" && (
                <p className="text-center text-xs text-rose-400">Something went wrong. Please try again or call us directly.</p>
              )}
            </form>
          )}

          <div className="mt-6 pt-6 border-t border-white/5 flex flex-wrap justify-center gap-6 text-xs text-cream-200/40">
            <span>646-772-3668</span>
            <span>Astoria, NY 11106</span>
            <span>646-552-1111</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
