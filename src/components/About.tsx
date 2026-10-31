"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { GraduationCap, Target, BrainCircuit, BookOpen, Award, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type AboutTab = "identity" | "academic" | "coursework";

export function About() {
  const { personal, education, coursework, achievements, projects } = PORTFOLIO_DATA;
  const [activeTab, setActiveTab] = useState<AboutTab>("identity");

  const metrics = [
    { label: "Degree Path", value: "B.Tech + M.Tech", icon: GraduationCap, detail: "CS & AI Dual Degree" },
    { label: "Target Horizon", value: "2023 – 2028", icon: BrainCircuit, detail: "RGIPT Amethi" },
    { label: "Featured Projects", value: `${projects.length} Systems`, icon: Code2, detail: "Full Stack & AI" },
    { label: "Recognitions", value: `${achievements.length} Honors`, icon: Award, detail: "Hackathons & Exams" },
  ];

  return (
    <SectionContainer
      id="about"
      title="Neural Profile"
      subtitle="Decoding background, academic trajectory, and technical specialized knowledge."
    >
      {/* Metric Cards Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/40 transition-all hover:bg-slate-900/80 group backdrop-blur-md"
          >
            <div className="w-10 h-10 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all">
              <metric.icon size={20} />
            </div>
            <p className="text-xl sm:text-2xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
              {metric.value}
            </p>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-1">{metric.label}</p>
            <p className="text-[11px] text-slate-500 font-mono mt-0.5">{metric.detail}</p>
          </motion.div>
        ))}
      </div>

      {/* Interactive Tabs */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex p-1.5 rounded-full bg-slate-900/80 border border-slate-800/80 backdrop-blur-md">
          {[
            { id: "identity" as AboutTab, label: "Core Identity", icon: BrainCircuit },
            { id: "academic" as AboutTab, label: "Academic Foundation", icon: GraduationCap },
            { id: "coursework" as AboutTab, label: "Specialized Training", icon: BookOpen },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 sm:px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 ${
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
              <tab.icon size={16} />
              <span className="hidden sm:inline-block">{tab.label}</span>
              <span className="sm:hidden">{tab.label.split(" ")[0]}</span>
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
            className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-blue-600/20 transition-all" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold">
                <BrainCircuit size={28} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Core Identity</h3>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Full Stack & AI Engineer</p>
              </div>
            </div>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed font-medium mb-8">
              {personal.about}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Specialization</span>
                <p className="text-slate-200 font-bold mt-1">Full Stack Applications & Generative AI</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
                <span className="text-xs text-slate-400 uppercase tracking-widest font-bold">Location</span>
                <p className="text-slate-200 font-bold mt-1">Amethi / Uttar Pradesh, India</p>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === "academic" && (
          <motion.div
            key="academic"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-cyan-600/20 transition-all" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Academic Foundation</h3>
                <p className="text-xs font-mono text-blue-400 uppercase tracking-widest">Integrated Dual Degree Program</p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-950/70 border border-slate-800 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h4 className="text-xl sm:text-2xl font-bold text-white leading-snug max-w-2xl">
                  {education.degree}
                </h4>
                <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 font-bold text-sm">
                  {education.duration}
                </span>
              </div>
              <p className="text-slate-400 font-medium text-base sm:text-lg">
                {education.institution}
              </p>
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
            className="p-8 sm:p-12 rounded-[2.5rem] bg-slate-900/50 border border-slate-800/90 relative overflow-hidden backdrop-blur-xl group"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-600/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-purple-600/20 transition-all" />

            <div className="flex items-center gap-4 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
                <Target size={28} />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">Specialized Training & Coursework</h3>
                <p className="text-xs font-mono text-purple-400 uppercase tracking-widest">Computer Science & AI Curriculum</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {coursework.map((course, index) => (
                <motion.div
                  key={course}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                  className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-purple-500/40 text-slate-300 hover:text-white text-sm font-bold transition-all flex items-center gap-3 group/item"
                >
                  <div className="w-2 h-2 rounded-full bg-purple-500/50 group-hover/item:bg-purple-400 animate-pulse shrink-0" />
                  <span>{course}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
