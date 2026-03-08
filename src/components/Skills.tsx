"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { motion } from "framer-motion";
import { Code2, Brain, Layout, Server, Database, Hammer, Cpu } from "lucide-react";

const SKILL_CATEGORIES = [
  { name: "Programming", icon: Code2, key: "programming" },
  { name: "ML / AI", icon: Brain, key: "ml_ai" },
  { name: "Frameworks", icon: Layout, key: "frameworks" },
  { name: "Web Development", icon: Server, key: "web" },
  { name: "Databases", icon: Database, key: "databases" },
  { name: "Developer Tools", icon: Hammer, key: "tools" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

export function Skills() {
  const { techStack } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="skills" title="Neural Network of Skills" subtitle="Mapping my expertise across the AI and Software Development landscape.">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {SKILL_CATEGORIES.map((category) => {
          const skills = techStack[category.key as keyof typeof techStack];
          return (
            <motion.div
              key={category.name}
              variants={itemVariants}
              className="group p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all hover:bg-white/[0.08] flex flex-col relative overflow-hidden"
            >
              {/* Decorative Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/10 blur-2xl rounded-full -mr-12 -mt-12 group-hover:bg-blue-500/20 transition-all" />
              
              <div className="flex items-center gap-5 mb-10 relative z-10">
                <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.2)] transition-all duration-500">
                  <category.icon size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-black text-white group-hover:text-blue-400 transition-colors uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="h-0.5 w-0 group-hover:w-full bg-blue-500/50 transition-all duration-500 mt-1" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2.5 relative z-10">
                {skills.map((skill, sIndex) => (
                  <motion.span
                    key={sIndex}
                    whileHover={{ scale: 1.05, y: -3, backgroundColor: "rgba(59, 130, 246, 0.15)", borderColor: "rgba(59, 130, 246, 0.4)" }}
                    className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 text-sm font-bold tracking-tight group-hover:text-white transition-all cursor-default flex items-center gap-2"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500/50 group-hover:bg-blue-400 animate-pulse" />
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionContainer>
  );
}
