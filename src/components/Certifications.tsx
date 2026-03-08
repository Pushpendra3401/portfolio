"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Award, Trophy, CheckCircle2, Star } from "lucide-react";
import { motion } from "framer-motion";

export function Certifications() {
  const { certifications, achievements } = PORTFOLIO_DATA;

  return (
    <SectionContainer id="certifications" title="Certifications & Achievements" subtitle="A record of my learning journey and recognized accomplishments.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Achievements Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform">
              <Trophy size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Major Achievements</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-yellow-500/30 transition-all hover:bg-white/[0.07] overflow-hidden"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform shrink-0">
                    <Star size={24} />
                  </div>
                  <p className="text-lg font-medium text-gray-200 group-hover:text-yellow-500 transition-colors">
                    {achievement}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform">
              <Award size={28} />
            </div>
            <h3 className="text-2xl font-bold text-white">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 group-hover:scale-110 transition-transform shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-lg font-medium text-gray-200 group-hover:text-blue-500 transition-colors">
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
