"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Hammer, Search, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  { name: "All Technologies", key: "all", icon: Cpu },
  { name: "Programming", icon: Code2, key: "programming" },
  { name: "ML / AI", icon: Brain, key: "ml_ai" },
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
    <SectionContainer
      id="skills"
      title="Neural Ecosystem of Skills"
      subtitle="Interactive technology constellation mapping expertise across AI engineering and full-stack architecture."
    >
      {/* Interactive Category Filter Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 bg-slate-900/60 p-2 rounded-3xl border border-slate-800/80 backdrop-blur-md">
          {SKILL_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`relative px-4 py-2 rounded-2xl text-xs font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <cat.icon size={15} />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Live Search Box */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
          <input
            type="text"
            placeholder="Search skill or tool..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-2xl bg-slate-900/60 border border-slate-800 text-slate-200 text-xs font-medium placeholder:text-slate-500 focus:outline-none focus:border-blue-500/60 transition-all backdrop-blur-md"
          />
        </div>
      </div>

      {/* Grid of Skill Category Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 transition-all hover:bg-slate-900/70 flex flex-col relative overflow-hidden backdrop-blur-md shadow-lg"
                >
                  {/* Glowing Corner Lighting */}
                  <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 blur-3xl rounded-full -mr-14 -mt-14 group-hover:bg-blue-500/20 transition-all" />

                  <div className="flex items-center gap-4 mb-8 relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/30 transition-all duration-300">
                      <category.icon size={26} />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white group-hover:text-cyan-400 transition-colors uppercase tracking-wider">
                        {category.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-500">
                        {filteredSkills.length} competencies
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2.5 relative z-10">
                    {filteredSkills.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.06, y: -2 }}
                        className="px-4 py-2 rounded-xl bg-slate-950/70 border border-slate-800 text-slate-300 text-xs font-bold tracking-tight group-hover:border-blue-500/40 group-hover:text-white hover:bg-blue-600/20 transition-all cursor-default flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 animate-pulse" />
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
        </AnimatePresence>
      </div>
    </SectionContainer>
  );
}
