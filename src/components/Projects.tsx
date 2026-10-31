"use client";

import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { ProjectInfo } from "@/types/portfolio";
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
      <div className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-tr from-blue-950 via-slate-900 to-cyan-950 border border-blue-500/30 flex flex-col justify-between p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="px-4 py-1.5 rounded-full bg-blue-500/20 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider border border-blue-500/30">
            GPS / Walk Marketplace
          </span>
          <Cpu className="text-cyan-400 animate-pulse" size={24} />
        </div>
        <div className="z-10">
          <div className="text-xs font-mono text-slate-400 mb-2">Flutter • Socket.io • Twilio OTP • Razorpay</div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            AidKriya Walker
          </div>
        </div>
      </div>
    );
  }

  if (title === "AI Content Assistant") {
    return (
      <div className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-tr from-cyan-950 via-slate-900 to-purple-950 border border-cyan-500/30 flex flex-col justify-between p-8 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-3xl rounded-full pointer-events-none" />
        <div className="flex items-center justify-between z-10">
          <span className="px-4 py-1.5 rounded-full bg-cyan-500/20 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
            LLaMA 3.1 / Multilingual SEO
          </span>
          <Bot className="text-cyan-400 animate-pulse" size={24} />
        </div>
        <div className="z-10">
          <div className="text-xs font-mono text-slate-400 mb-2">React.js • Groq API • OpenAI • jsPDF</div>
          <div className="text-2xl sm:text-3xl font-black text-white">
            AI Content Assistant
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-64 sm:h-80 rounded-3xl bg-gradient-to-tr from-slate-900 via-indigo-950 to-slate-900 border border-indigo-500/30 flex flex-col justify-between p-8 relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full pointer-events-none" />
      <div className="flex items-center justify-between z-10">
        <span className="px-4 py-1.5 rounded-full bg-indigo-500/20 text-indigo-300 font-mono text-xs font-bold uppercase tracking-wider border border-indigo-500/30">
          Interactive Web Application
        </span>
        <CheckSquare className="text-indigo-400 animate-pulse" size={24} />
      </div>
      <div className="z-10">
        <div className="text-xs font-mono text-slate-400 mb-2">React.js • Task Management UI</div>
        <div className="text-2xl sm:text-3xl font-black text-white">
          To-Do App
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { projects } = PORTFOLIO_DATA;
  const [selectedProject, setSelectedProject] = useState<ProjectInfo | null>(null);

  return (
    <div id="projects" className="flex flex-col lg:flex-row flex-nowrap">
      {projects.map((project, index) => (
        <section
          key={project.title}
          className="relative w-screen lg:w-[110vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#06070a]"
        >
          {/* Section Numbering Background */}
          <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
            03.{index + 1}
          </div>

          <div className="relative z-10 max-w-6xl my-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Project Artwork */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <ProjectGraphicPlaceholder title={project.title} />
            </motion.div>

            {/* Project Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-6 space-y-6"
            >
              <div className="flex items-center gap-3">
                <span className="w-10 h-[2px] bg-cyan-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
                  FEATURED PROJECT {index + 1} / {projects.length}
                </span>
              </div>

              {project.status && (
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  <Trophy size={14} />
                  {project.status}
                </span>
              )}

              <h2 className="text-4xl sm:text-5xl font-black text-white uppercase tracking-tight">
                {project.title}
              </h2>

              <p className="text-slate-300 text-base leading-relaxed font-medium">
                {project.description}
              </p>

              {/* Key Features List */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest">
                  Key Innovations
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.features.slice(0, 4).map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
                      <span className="truncate">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-xl bg-slate-900 border border-slate-800 text-cyan-300 text-xs font-mono font-bold"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 transition-all hover:border-cyan-400"
                >
                  Inspect Architecture
                  <ArrowUpRight size={16} className="text-cyan-400" />
                </button>

                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Repository"
                    className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
                  >
                    <Github size={18} />
                  </Link>
                )}

                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live Demo"
                    className="w-11 h-11 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all"
                  >
                    {project.title === "AidKriya Walker" ? <Download size={18} /> : <ExternalLink size={18} />}
                  </Link>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* Modal Detail Drawer */}
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

              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">
                  Full Feature Architecture
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.features.map((feature) => (
                    <div
                      key={feature}
                      className="p-3.5 rounded-2xl bg-slate-950/70 border border-slate-800 text-slate-200 text-xs font-medium flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={15} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-[0.2em] mb-3">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3.5 py-1.5 rounded-xl bg-blue-500/10 border border-blue-500/30 text-xs font-mono font-bold text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-slate-800">
                {selectedProject.github && (
                  <Link
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-full bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all"
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
                    className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2.5 transition-all shadow-lg"
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
    </div>
  );
}
