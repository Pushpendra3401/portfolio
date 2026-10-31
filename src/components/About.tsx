"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { GraduationCap, Target, BrainCircuit, BookOpen, Award, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AboutTab = "identity" | "academic" | "coursework";

export function About() {
  const { personal, education, coursework, achievements, projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<AboutTab>("identity");

  const metrics = [
    { label: "Degree Path", value: "B.Tech + M.Tech", icon: GraduationCap, detail: "CS & AI Dual Degree" },
    { label: "Horizon", value: "2023 – 2028", icon: BrainCircuit, detail: "RGIPT Amethi" },
    { label: "Projects Built", value: `${projects.length} Systems`, icon: Code2, detail: "Full Stack & AI" },
    { label: "Honors", value: `${achievements.length} Awards`, icon: Award, detail: "Hackathons & Exams" },
  ];

  return (
    <section id="about" className="relative w-screen lg:w-[100vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#07080c]">
      {/* Background Section Index Number */}
      <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
        04
      </div>

      <div className="relative z-10 max-w-6xl my-auto">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
            BACKGROUND & ACADEMIC HORIZON
          </span>
        </motion.div>

        {/* Metric Banners */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-5 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl"
            >
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center mb-3">
                <metric.icon size={20} />
              </div>
              <p className="text-xl font-black text-white tracking-tight">{metric.value}</p>
              <p className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mt-1">{metric.label}</p>
              <p className="text-[11px] text-slate-500 font-mono">{metric.detail}</p>
            </motion.div>
          ))}
        </div>

        {/* Interactive Tabs */}
        <div className="flex justify-start mb-8">
          <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md">
            {[
              { id: "identity" as AboutTab, label: "Core Identity", icon: BrainCircuit },
              { id: "academic" as AboutTab, label: "Academic Dual Degree", icon: GraduationCap },
              { id: "coursework" as AboutTab, label: "Specialized Coursework", icon: BookOpen },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="aboutActiveTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <tab.icon size={15} />
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Panels */}
        <AnimatePresence mode="wait">
          {activeTab === "identity" && (
            <motion.div
              key="identity"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center font-bold">
                  <BrainCircuit size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Full Stack & AI Engineer</h3>
                  <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Core Identity</p>
                </div>
              </div>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-medium">
                {personal.about}
              </p>
            </motion.div>
          )}

          {activeTab === "academic" && (
            <motion.div
              key="academic"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Integrated Dual Degree</h3>
                  <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">B.Tech + M.Tech in CS & AI</p>
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-2">
                <h4 className="text-xl font-bold text-white">{education.degree}</h4>
                <p className="text-slate-400 text-sm">{education.institution}</p>
                <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 font-mono text-xs font-bold mt-2">
                  Timeline: {education.duration}
                </span>
              </div>
            </motion.div>
          )}

          {activeTab === "coursework" && (
            <motion.div
              key="coursework"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/60 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                  <Target size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white">Specialized CS & AI Curriculum</h3>
                  <p className="text-xs font-mono text-purple-400 uppercase tracking-widest">Core Technical Subjects</p>
                </div>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {coursework.map((course) => (
                  <div
                    key={course}
                    className="p-3 rounded-2xl bg-slate-950/60 border border-slate-800 text-slate-300 text-xs font-bold flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shrink-0" />
                    <span className="truncate">{course}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
