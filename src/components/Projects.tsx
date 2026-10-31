"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { ProjectInfo } from "@/types/portfolio";
import { SectionContainer } from "./SectionContainer";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Download,
  X,
  Trophy,
  ArrowUpRight,
  Cpu,
  Bot,
  CheckSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

function ProjectGraphicPlaceholder({ title }: { title: string }) {
  if (title === "AidKriya Walker") {
    return (
      <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-blue-900/60 via-slate-900 to-cyan-950/80 border border-blue-500/20 flex flex-col justify-between p-5 relative overflow-hidden group-hover:border-blue-500/50 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-blue-500/20 text-cyan-300 font-mono text-[10px] font-bold tracking-wider">
            GPS / Walk Matrix
          </span>
          <Cpu className="text-blue-400 animate-pulse" size={18} />
        </div>
        <div className="z-10">
          <div className="text-xs font-mono text-slate-400 mb-1">Flutter • Socket.io • Maps</div>
          <div className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
            AidKriya Walker
          </div>
        </div>
      </div>
    );
  }

  if (title === "AI Content Assistant") {
    return (
      <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-cyan-950/70 via-slate-900 to-purple-950/80 border border-cyan-500/20 flex flex-col justify-between p-5 relative overflow-hidden group-hover:border-cyan-500/50 transition-all">
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-[10px] font-bold tracking-wider">
            LLM / LLaMA 3.1
          </span>
          <Bot className="text-cyan-400 animate-pulse" size={18} />
        </div>
        <div className="z-10">
          <div className="text-xs font-mono text-slate-400 mb-1">React • Groq API • jsPDF</div>
          <div className="text-lg font-black text-white group-hover:text-cyan-300 transition-colors">
            AI Content Assistant
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-44 rounded-2xl bg-gradient-to-tr from-slate-900 via-indigo-950/70 to-slate-900 border border-indigo-500/20 flex flex-col justify-between p-5 relative overflow-hidden group-hover:border-indigo-500/50 transition-all">
      <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/20 blur-2xl rounded-full pointer-events-none" />
      <div className="flex items-center justify-between z-10">
        <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-[10px] font-bold tracking-wider">
          React Task System
        </span>
        <CheckSquare className="text-indigo-400 animate-pulse" size={18} />
      </div>
      <div className="z-10">
        <div className="text-xs font-mono text-slate-400 mb-1">React.js • Web App</div>
        <div className="text-lg font-black text-white group-hover:text-indigo-300 transition-colors">
          To-Do App
        </div>
      </div>
    </div>
  );
}

interface ProjectCardProps {
  project: ProjectInfo;
  index: number;
  onSelect: (project: ProjectInfo) => void;
}

function ProjectCard({ project, index, onSelect }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="group relative flex flex-col p-6 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 transition-all hover:bg-slate-900/80 backdrop-blur-md shadow-xl overflow-hidden cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Background Accent Lighting */}
      <div className="absolute -top-12 -right-12 w-36 h-36 bg-blue-600/10 blur-3xl -z-10 group-hover:bg-blue-600/20 transition-all duration-500" />

      {/* Media Cover */}
      <div className="mb-6">
        <ProjectGraphicPlaceholder title={project.title} />
      </div>

      <div className="flex flex-col flex-1">
        {project.status && (
          <div className="mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-[10px] font-bold uppercase tracking-wider">
              <Trophy size={12} />
              {project.status}
            </span>
          </div>
        )}

        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-cyan-400 transition-colors flex items-center justify-between">
          <span>{project.title}</span>
          <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-400" />
        </h3>

        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
          {project.description}
        </p>

        {/* Feature Highlights */}
        <div className="space-y-2 mb-6">
          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">Top Features</span>
          {project.features.slice(0, 3).map((feature) => (
            <div key={feature} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle2 size={13} className="text-blue-400 shrink-0" />
              <span className="truncate">{feature}</span>
            </div>
          ))}
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-auto pt-6 border-t border-slate-800/80 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);

  return (
    <SectionContainer
      id="projects"
      title="Intelligence Lab"
      subtitle="A showcase of scalable full-stack applications, AI language models, and mobile platforms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
            onSelect={(proj) => setSelectedProject(proj)}
          />
        ))}
      </div>

      {/* Detail Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xl overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-3xl p-6 sm:p-10 rounded-[2.5rem] bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                aria-label="Close detail modal"
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
              >
                <X size={20} />
              </button>

              <div className="mb-6">
                {selectedProject.status && (
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Trophy size={14} />
                    {selectedProject.status}
                  </span>
                )}
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  {selectedProject.title}
                </h3>
              </div>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-8 font-medium">
                {selectedProject.description}
              </p>

              {/* All Features List */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Full Feature Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-slate-200 text-xs font-medium flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={15} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs font-bold text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions & Links */}
              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm flex items-center gap-2.5 transition-all"
                  >
                    <Github size={18} />
                    View GitHub Code
                  </Link>
                )}

                {selectedProject.live && (
                  <Link
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm flex items-center gap-2.5 transition-all shadow-lg"
                  >
                    {selectedProject.title === "AidKriya Walker" ? (
                      <>
                        <Download size={18} />
                        Download APK Demo
                      </>
                    ) : (
                      <>
                        <ExternalLink size={18} />
                        Launch Live Application
                      </>
                    )}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </SectionContainer>
  );
}
