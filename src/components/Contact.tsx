"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, Heart, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import confetti from "canvas-confetti";

export function Contact() {
  const { name, phone, email, github, linkedin } = PORTFOLIO_DATA.personal;
  const currentYear = new Date().getFullYear();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    confetti({
      particleCount: 90,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#06b6d4", "#a855f7"],
    });

    setIsSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <section id="contact" className="relative w-screen lg:w-[100vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden bg-[#050609]">
      {/* Background Section Index Number */}
      <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
        08
      </div>

      <div className="relative z-10 max-w-6xl my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-12">
          {/* Invitation & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-cyan-400" />
              <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
                INITIATE CONNECTION
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight leading-tight">
              LET’S BUILD SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">EXTRAORDINARY</span>
            </h2>

            <p className="text-slate-300 text-sm font-medium leading-relaxed">
              Available for full-stack system architecture, generative AI development, research initiatives, and software engineering roles.
            </p>

            <div className="space-y-3 pt-2">
              <Link
                href={`mailto:${email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-400 hover:text-white transition-all"
              >
                <Mail size={20} className="text-cyan-400" />
                <span className="text-sm font-bold truncate">{email}</span>
              </Link>

              <Link
                href={`tel:${phone}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-200 hover:border-cyan-400 hover:text-white transition-all"
              >
                <Phone size={20} className="text-cyan-400" />
                <span className="text-sm font-bold">{phone}</span>
              </Link>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <Github size={20} />
              </Link>
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
              >
                <Linkedin size={20} />
              </Link>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-bold flex items-center gap-2"
              >
                <Download size={14} />
                Resume PDF
              </a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider mb-6">
              Transmission Terminal
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="final-name" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider ml-1">
                    Your Name
                  </label>
                  <input
                    id="final-name"
                    type="text"
                    required
                    placeholder="Alex Mercer"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 text-xs font-medium focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="final-email" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider ml-1">
                    Your Email
                  </label>
                  <input
                    id="final-email"
                    type="email"
                    required
                    placeholder="alex@domain.com"
                    className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 text-xs font-medium focus:outline-none focus:border-cyan-400 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="final-message" className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  id="final-message"
                  required
                  rows={3}
                  placeholder="Describe your collaboration or project..."
                  className="w-full px-4 py-3 rounded-2xl bg-slate-950/80 border border-slate-800 text-white placeholder:text-slate-600 text-xs font-medium focus:outline-none focus:border-cyan-400 transition-all resize-none"
                />
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 text-white rounded-2xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-lg shadow-blue-500/20"
              >
                {isSubmitting ? (
                  <span>Transmitting...</span>
                ) : (
                  <>
                    <span>Transmit Transmission</span>
                    <Send size={16} />
                  </>
                )}
              </button>

              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="p-3.5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2"
                  >
                    <CheckCircle2 size={16} className="shrink-0 text-emerald-400" />
                    <span>Transmission received & formatted! Guaranteed response within 24h.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

        {/* Integrated Footer Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <p>© {currentYear} {name}. All rights preserved.</p>
          <p className="flex items-center gap-1.5">
            Crafted with <Heart size={13} className="text-red-500 fill-red-500" /> using Next.js, GSAP & Three.js
          </p>
        </div>
      </div>
    </section>
  );
}
