"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { ExternalLink, Github, Layout, CheckCircle2, Download, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

interface ProjectCardProps {
  project: any;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07] overflow-hidden"
    >
      {/* Background Accent */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-600/10 blur-3xl -z-10 group-hover:bg-blue-600/20 transition-all duration-500" />
      
      <div className="flex flex-col h-full">
        <div className="flex items-start justify-between mb-6">
          <div className="p-3.5 rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
            <Layout size={24} />
          </div>
          <div className="flex items-center gap-3">
            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                title="View Source Code"
              >
                <Github size={20} />
              </Link>
            )}
            {project.live && (
              <Link
                href={project.live}
                target="_blank"
                className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-white/20 transition-all"
                title={project.title === "AidKriya Walker" ? "Download APK" : "Live Demo"}
              >
                {project.title === "AidKriya Walker" ? <Download size={20} /> : <ExternalLink size={20} />}
              </Link>
            )}
          </div>
        </div>

        {project.status && (
          <div className="mb-3">
            <span className="px-3 py-1 rounded-full bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 text-[10px] font-bold uppercase tracking-wider">
              {project.status}
            </span>
          </div>
        )}

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {project.description}
        </p>

        <div className="space-y-4 mb-8">
          <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em]">Key Features</h4>
          <ul className="space-y-2.5">
            <AnimatePresence initial={false}>
              {(isExpanded ? project.features : project.features.slice(0, 4)).map((feature: string, fIndex: number) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-start gap-2.5 text-xs text-gray-400 group-hover:text-gray-300 transition-colors"
                >
                  <CheckCircle2 size={14} className="text-blue-500 shrink-0 mt-0.5" />
                  {feature}
                </motion.li>
              ))}
            </AnimatePresence>
            
            {project.features.length > 4 && (
              <li>
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  suppressHydrationWarning
                  className="flex items-center gap-1.5 text-[10px] text-blue-400 hover:text-blue-300 font-bold transition-colors pl-6"
                >
                  {isExpanded ? (
                    <>
                      Show Less <ChevronUp size={12} />
                    </>
                  ) : (
                    <>
                      + {project.features.length - 4} more features <ChevronDown size={12} />
                    </>
                  )}
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech: string, tIndex: number) => (
              <span
                key={tIndex}
                className="px-2.5 py-1 rounded-lg bg-blue-500/5 border border-blue-500/10 text-[10px] font-semibold text-blue-400 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-all"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="projects" title="Featured Projects" subtitle="A showcase of my recent work, featuring full-stack applications and AI solutions.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </SectionContainer>
  );
}
