"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Hammer, Search, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  { name: "All Stack", key: "all", icon: Cpu },
  { name: "Programming", icon: Code2, key: "programming" },
  { name: "AI & ML", icon: Brain, key: "ml_ai" },
  { name: "Frameworks", icon: Layout, key: "frameworks" },
  { name: "Web Dev", icon: Server, key: "web" },
  { name: "Databases", icon: Database, key: "databases" },
  { name: "Dev Tools", icon: Hammer, key: "tools" },
];

export function Skills() {
  const { techStack } = PORTFOLIO_DATA;
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const displayCategories = SKILL_CATEGORIES.filter((c) => c.key !== "all");

  return (
    <section id="skills" className="relative w-screen lg:w-[100vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#06080d]">
      {/* Background Section Index Number */}
      <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
        05
      </div>

      <div className="relative z-10 max-w-6xl my-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-12 h-[2px] bg-cyan-400" />
          <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
            TECHNICAL MATRIX & COMPETENCIES
          </span>
        </motion.div>

        {/* Moving Marquee Text Band */}
        <div className="w-full overflow-hidden mb-8 py-3 bg-slate-900/40 border-y border-slate-800/80 rounded-2xl flex items-center">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold text-cyan-400/80 uppercase tracking-[0.2em]"
          >
            <span>PYTHON • C++ • PYTORCH • OPENCV • NEXT.JS • FLUTTER • NODE.JS • MONGODB • DOCKER • POSTMAN</span>
            <span>PYTHON • C++ • PYTORCH • OPENCV • NEXT.JS • FLUTTER • NODE.JS • MONGODB • DOCKER • POSTMAN</span>
          </motion.div>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2 bg-slate-900/60 p-2 rounded-2xl border border-slate-800/80 backdrop-blur-md">
            {SKILL_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => setSelectedCategory(cat.key)}
                  className={`relative px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all duration-300 flex items-center gap-2 ${
                    isActive
                      ? "text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeSkillTab"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <cat.icon size={14} />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-64">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={15} />
            <input
              type="text"
              placeholder="Search skill..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs font-mono placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {displayCategories
              .filter((cat) => selectedCategory === "all" || selectedCategory === cat.key)
              .map((category) => {
                const allSkills = techStack[category.key as keyof typeof techStack] || [];
                const filteredSkills = allSkills.filter((s) =>
                  s.toLowerCase().includes(searchQuery.toLowerCase())
                );

                if (searchQuery && filteredSkills.length === 0) return null;

                return (
                  <motion.div
                    key={category.name}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="p-6 rounded-3xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 transition-all backdrop-blur-xl relative overflow-hidden"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center">
                        <category.icon size={22} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black text-white uppercase tracking-wider">
                          {category.name}
                        </h3>
                        <p className="text-[11px] font-mono text-slate-500">
                          {filteredSkills.length} competencies
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {filteredSkills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 text-xs font-mono font-bold hover:border-cyan-400 hover:text-cyan-300 transition-all flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
