"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { BookOpen, GraduationCap, Target, BrainCircuit } from "lucide-react";

export function About() {
  const { personal, education, coursework } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="about" title="Neural Profile" subtitle="Decoding my background and technical trajectory.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* About Content */}
        <div className="space-y-8">
          <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-blue-500/10 transition-all" />
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mb-8 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-500">
              <BrainCircuit size={32} />
            </div>
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest italic">Core Identity</h3>
            <p className="text-gray-400 leading-relaxed text-lg font-medium">
              {personal.about}
            </p>
          </div>

          <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-indigo-500/30 transition-all group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-indigo-500/10 transition-all" />
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-indigo-500/10 text-indigo-400 mb-8 group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-500">
              <GraduationCap size={32} />
            </div>
            <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-widest italic">Academic Foundation</h3>
            <div className="space-y-3">
              <p className="text-white font-bold text-xl leading-tight">{education.degree}</p>
              <p className="text-gray-400 font-medium">{education.institution}</p>
              <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-bold text-sm mt-2">
                {education.duration}
              </div>
            </div>
          </div>
        </div>

        {/* Coursework & Interests */}
        <div className="space-y-8 h-full">
          <div className="p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all group relative overflow-hidden h-full">
            <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-purple-500/10 transition-all" />
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-500/10 text-purple-400 mb-8 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all duration-500">
              <Target size={32} />
            </div>
            <h3 className="text-2xl font-black text-white mb-8 uppercase tracking-widest italic">Specialized Training</h3>
            <div className="flex flex-wrap gap-3">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-bold hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
