"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const { name, role, tagline, github, linkedin, email } = PORTFOLIO_DATA.personal;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* AI-Inspired Background Grid */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        
        {/* Animated Scanning Line */}
        <motion.div
          animate={{
            top: ["0%", "100%", "0%"],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent z-10 opacity-30 pointer-events-none"
        />

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full opacity-50 pointer-events-none animate-pulse" />
        <div className="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-600/5 blur-[100px] rounded-full opacity-40 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest">
              <Cpu size={14} className="animate-spin-slow" />
              AI & Software Engineering Student
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-6xl md:text-8xl font-black tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/20"
          >
            {name.split(" ")[0]} <span className="text-blue-500">{name.split(" ")[1]}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl font-bold text-gray-200 mb-6 flex items-center justify-center gap-3"
          >
            {role}
            <Sparkles className="text-blue-400" size={24} />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed font-medium"
          >
            {tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6"
          >
            <Link
              href="#projects"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Explore Intelligence
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              href="#contact"
              className="px-10 py-5 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 backdrop-blur-sm"
            >
              Neural Connect
            </Link>
          </motion.div>

          {/* Social Links with AI-themed background */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-20 flex items-center justify-center gap-10"
          >
            {[
              { icon: Github, href: github, label: "GitHub" },
              { icon: Linkedin, href: linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${email}`, label: "Email" },
            ].map((social, index) => (
              <Link
                key={index}
                href={social.href}
                target="_blank"
                className="group flex flex-col items-center gap-3 text-gray-400 hover:text-white transition-colors"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-blue-500/50 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_15px_rgba(37,99,235,0.2)] transition-all duration-300">
                  <social.icon size={26} />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
