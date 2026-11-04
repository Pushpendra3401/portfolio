"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, ChevronRight, Cpu } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-r from-lime-950/20 via-transparent to-cyan-950/20 opacity-40 blur-3xl" />
  ),
});

export function Hero() {
  const { role, tagline, github, linkedin, email } = PORTFOLIO_DATA.personal;

  return (
    <section id="hero" className="relative w-screen h-screen shrink-0 flex items-center justify-between px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#05070c]">
      {/* Background 3D WebGL Canvas */}
      <Hero3DCanvas />

      {/* Editorial Decorative Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:80px_80px]" />
        <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
          01
        </div>
      </div>

      <div className="relative z-10 max-w-6xl my-auto">
        {/* Category Header Tag */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[2px] bg-lime-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-lime-400 flex items-center gap-2">
            <Cpu size={14} className="animate-spin-slow text-cyan-400" />
            PUSHPENDRA.DEV • CREATIVE ENGINEER
          </span>
        </motion.div>

        {/* Oversized Kinetic Editorial Typography */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.88] mb-8 uppercase select-none text-white"
        >
          PUSHPENDRA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-cyan-400 to-indigo-400">
            DEEGWAL
          </span>
        </motion.h1>

        {/* Professional Identity Subheadline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row md:items-center gap-6 max-w-3xl mb-12"
        >
          <p className="text-xl sm:text-2xl font-bold text-slate-100 tracking-tight flex items-center gap-3">
            <span>{role}</span>
            <Sparkles className="text-lime-400 shrink-0" size={24} />
          </p>
          <div className="hidden md:block w-px h-10 bg-slate-800" />
          <p className="text-sm sm:text-base text-slate-400 font-medium leading-relaxed">
            {tagline}
          </p>
        </motion.div>

        {/* Action Controls & Social Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center gap-8"
        >
          <a
            href="#intro"
            className="px-8 py-4 bg-gradient-to-r from-lime-500 via-emerald-500 to-cyan-500 hover:from-lime-400 hover:to-cyan-400 text-slate-950 rounded-full font-black text-xs uppercase tracking-wider flex items-center gap-3 transition-all hover:scale-105 shadow-[0_0_30px_rgba(132,204,22,0.4)]"
          >
            Explore Horizontal Journey
            <ArrowRight size={18} />
          </a>

          <div className="flex items-center gap-4 border-l border-slate-800 pl-8">
            <Link
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-lime-400 transition-all"
            >
              <Github size={20} />
            </Link>
            <Link
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-lime-400 transition-all"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href={`mailto:${email}`}
              aria-label="Email"
              className="w-12 h-12 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-lime-400 transition-all"
            >
              <Mail size={20} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Right End Section Indicator */}
      <div className="hidden lg:flex flex-col items-center gap-4 text-slate-600 my-auto pr-6">
        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] [writing-mode:vertical-lr]">
          SCROLL HORIZONTALLY
        </span>
        <ChevronRight size={20} className="animate-pulse text-lime-400" />
      </div>
    </section>
  );
}
