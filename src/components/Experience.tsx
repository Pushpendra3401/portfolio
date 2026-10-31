"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Calendar, HeartHandshake, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <SectionContainer
      id="experience"
      title="Timeline & Contributions"
      subtitle="Professional trajectory, volunteer initiatives, and community impact."
    >
      <div className="max-w-4xl mx-auto">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-blue-600/20 before:via-cyan-500/60 before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.role + exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Timeline Node Badge */}
              <div className="flex items-center justify-center w-12 h-12 rounded-2xl border border-blue-500/40 bg-slate-950 text-cyan-400 shadow-[0_0_20px_rgba(37,99,235,0.3)] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125 group-hover:bg-blue-600 group-hover:text-white duration-300">
                <HeartHandshake size={20} />
              </div>

              {/* Card Container */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-8 rounded-[2.5rem] bg-slate-900/40 border border-slate-800/80 hover:border-blue-500/50 transition-all hover:bg-slate-900/70 backdrop-blur-md shadow-xl overflow-hidden relative">
                {/* Glowing Lighting */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 blur-3xl -z-10 group-hover:bg-blue-600/20 transition-all" />

                <div className="flex flex-col mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-[10px] font-mono font-bold uppercase tracking-wider">
                      Volunteer & Mentor
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white group-hover:text-cyan-300 transition-colors">
                    {exp.role}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 font-medium mt-2">
                    <span className="font-bold text-slate-200">{exp.company}</span>
                    <span className="flex items-center gap-1.5 text-xs text-blue-400 font-mono">
                      <Calendar size={13} />
                      {exp.duration}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 pt-4 border-t border-slate-800/80">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed font-medium">
                      <CheckCircle2 size={16} className="text-blue-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
