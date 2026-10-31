"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { BrainCircuit, GraduationCap } from "lucide-react";

export function IntroSection() {
  const { personal, education } = PORTFOLIO_DATA;

  return (
    <section id="intro" className="relative w-screen lg:w-[90vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#090b10]">
      {/* Background Section Index Number */}
      <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
        02
      </div>

      <div className="relative z-10 max-w-5xl my-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
            PERSONAL PROFILE & VISION
          </span>
        </motion.div>

        {/* Large Editorial Introduction Statement */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.15] mb-10 tracking-tight"
        >
          Engineering intelligent full-stack systems and neural AI solutions to solve <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">real-world complex problems.</span>
        </motion.h2>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-6">
              <BrainCircuit size={26} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-3">
              Core Motivation
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
              {personal.about}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-6">
              <GraduationCap size={26} />
            </div>
            <h3 className="text-xl font-black text-white uppercase tracking-wider mb-3">
              Academic Dual Degree
            </h3>
            <p className="text-white font-bold text-base mb-1">{education.degree}</p>
            <p className="text-slate-400 text-xs font-mono mb-3">{education.institution}</p>
            <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 text-xs font-mono font-bold">
              {education.duration}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
