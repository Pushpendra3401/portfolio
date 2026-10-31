"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Award, Trophy, Star, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  const { certifications, achievements } = PORTFOLIO_DATA;

  return (
    <SectionContainer
      id="certifications"
      title="Accreditations & Honors"
      subtitle="Recognized hackathon achievements, competitive exam rankings, and industry certifications."
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Achievements Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.2)]">
              <Trophy size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Major Achievements</h3>
              <p className="text-xs font-mono text-amber-400 uppercase tracking-widest">Competitive Excellence</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement}
                initial={{ opacity: 0, x: -25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-amber-500/50 transition-all hover:bg-slate-900/70 backdrop-blur-md relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 blur-2xl rounded-full -mr-14 -mt-14 group-hover:bg-amber-500/20 transition-all" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all shrink-0">
                    <Star size={22} className="fill-amber-400/20" />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-slate-200 group-hover:text-amber-300 transition-colors leading-snug">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Column */}
        <div className="space-y-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-400 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.2)]">
              <Award size={26} />
            </div>
            <div>
              <h3 className="text-2xl font-black text-white tracking-tight">Verified Certifications</h3>
              <p className="text-xs font-mono text-cyan-400 uppercase tracking-widest">GeeksforGeeks & Google</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 transition-all hover:bg-slate-900/70 backdrop-blur-md relative overflow-hidden shadow-lg"
              >
                <div className="absolute top-0 right-0 w-28 h-28 bg-blue-500/10 blur-2xl rounded-full -mr-14 -mt-14 group-hover:bg-blue-500/20 transition-all" />

                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shrink-0">
                    <ShieldCheck size={22} />
                  </div>
                  <p className="text-base sm:text-lg font-bold text-slate-200 group-hover:text-cyan-300 transition-colors leading-snug">
                    {cert}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
