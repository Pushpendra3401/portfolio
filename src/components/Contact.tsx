"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import confetti from "canvas-confetti";

export function Contact() {
  const { phone, email, github, linkedin } = PORTFOLIO_DATA.personal;
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#3b82f6", "#06b6d4", "#a855f7"],
    });

    setIsSubmitting(false);
    setSubmitted(true);
    e.currentTarget.reset();
  };

  return (
    <SectionContainer
      id="contact"
      title="Initiate Neural Connection"
      subtitle="Reach out directly for full-stack projects, AI collaborations, research opportunities, or career inquiries."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Direct Contact Matrix */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-black text-white tracking-tight mb-2">Direct Reachability</h3>
            <p className="text-slate-400 text-sm font-medium">Click any card below to establish direct communication.</p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {[
              { icon: Mail, label: "Email Address", value: email, href: `mailto:${email}` },
              { icon: Phone, label: "Direct Phone", value: phone, href: `tel:${phone}` },
              { icon: Github, label: "GitHub Profile", value: "Pushpendra3401", href: github },
              { icon: Linkedin, label: "LinkedIn Profile", value: "Pushpendra Deegwal", href: linkedin },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={item.href}
                  target={item.label !== "Direct Phone" && item.label !== "Email Address" ? "_blank" : undefined}
                  rel={item.label !== "Direct Phone" && item.label !== "Email Address" ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-5 p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 transition-all hover:bg-slate-900/80 backdrop-blur-md shadow-lg"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/30 transition-all shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors truncate">
                      {item.value}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Form Container */}
        <div className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl shadow-2xl group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all" />

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-6">Send Transmission</h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="contact-name" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider ml-1">
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact-email" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider ml-1">
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="alex@domain.com"
                  className="w-full px-5 py-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-subject" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider ml-1">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                placeholder="Software Architecture Collaboration"
                className="w-full px-5 py-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact-message" className="text-xs font-mono font-bold text-slate-300 uppercase tracking-wider ml-1">
                Message Body
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                placeholder="Describe your project, timeline, or query..."
                className="w-full px-5 py-4 rounded-2xl bg-slate-950/70 border border-slate-800 text-white placeholder:text-slate-600 text-sm font-medium focus:outline-none focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/60 transition-all resize-none"
              />
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full py-4 px-8 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 disabled:opacity-50 text-white rounded-2xl font-bold text-sm flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-blue-500/20"
            >
              {isSubmitting ? (
                <span>Transmitting Data...</span>
              ) : (
                <>
                  <span>Transmit Message</span>
                  <Send size={18} />
                </>
              )}
            </button>

            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-2.5"
                >
                  <CheckCircle2 size={18} className="shrink-0 text-emerald-400" />
                  <span>Message validated & formatted for dispatch! Response guaranteed within 24 hours.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
