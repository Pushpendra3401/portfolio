"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Award, Trophy, Star, ShieldCheck, HeartHandshake, Calendar, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function ExperienceAndAchievements() {
  const { experience, achievements, certifications } = PORTFOLIO_DATA;

  return (
    <div className="flex flex-col lg:flex-row flex-nowrap">
      {/* Panel 06-A: Timeline & Volunteering */}
      <section id="experience" className="relative w-screen lg:w-[90vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#08090e]">
        <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
          06
        </div>

        <div className="relative z-10 max-w-5xl my-auto w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-[2px] bg-cyan-400" />
            <span className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-cyan-400">
              EXPERIENCE & COMMUNITY IMPACT
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-8">
            Professional Trajectory
          </h2>

          <div className="space-y-6">
            {experience.map((exp) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl relative overflow-hidden"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center">
                      <HeartHandshake size={24} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white">{exp.role}</h3>
                      <p className="text-sm font-bold text-slate-300">{exp.company}</p>
                    </div>
                  </div>
                  <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-cyan-300 font-mono text-xs font-bold flex items-center gap-2 w-fit">
                    <Calendar size={14} />
                    {exp.duration}
                  </span>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-800">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                      <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Panel 06-B: Achievements & Certifications */}
      <section id="certifications" className="relative w-screen lg:w-[100vw] h-screen shrink-0 flex items-center justify-center px-8 md:px-16 lg:px-24 overflow-hidden border-r border-slate-800/80 bg-[#07080d]">
        <div className="absolute top-1/4 left-10 text-[180px] font-black text-slate-900/30 select-none pointer-events-none leading-none tracking-tighter">
          07
        </div>

        <div className="relative z-10 max-w-6xl my-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center">
                <Trophy size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Major Achievements</h3>
                <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Excellence & Competitions</p>
              </div>
            </div>

            <div className="space-y-3">
              {achievements.map((ach) => (
                <div
                  key={ach}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-slate-200 text-sm font-bold flex items-center gap-4 hover:border-amber-500/40 transition-all"
                >
                  <Star size={20} className="text-amber-400 shrink-0 fill-amber-400/20" />
                  <span>{ach}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase tracking-tight">Certifications</h3>
                <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">GeeksforGeeks & Google AI</p>
              </div>
            </div>

            <div className="space-y-3">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 text-slate-200 text-sm font-bold flex items-center gap-4 hover:border-cyan-400 transition-all"
                >
                  <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
                  <span>{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
