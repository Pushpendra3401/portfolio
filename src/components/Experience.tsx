"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export function Experience() {
  const { experience } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="experience" title="Experience" subtitle="My professional journey and volunteer work.">
      <div className="max-w-4xl mx-auto">
        <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-500/50 before:to-transparent">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
            >
              {/* Icon / Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-blue-500/20 bg-[#0a0a0a] text-blue-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 transition-transform group-hover:scale-125">
                <Briefcase size={18} />
              </div>

              {/* Content */}
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]">
                <div className="flex flex-col mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {exp.role}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                    <span className="font-semibold text-blue-400/80">{exp.company}</span>
                    <span className="flex items-center gap-1.5 text-xs">
                      <Calendar size={14} />
                      {exp.duration}
                    </span>
                  </div>
                </div>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, rIndex) => (
                    <li key={rIndex} className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {resp}
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
