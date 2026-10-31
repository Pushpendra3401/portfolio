"use client";

import { motion } from "framer-motion";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { ArrowRight, Github, Linkedin, Mail, Cpu, Sparkles, ChevronDown } from "lucide-react";
import Link from "next/link";
import dynamic from "next/dynamic";

const Hero3DCanvas = dynamic(() => import("./Hero3DCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent opacity-40 blur-3xl" />
  ),
});

export function Hero() {
  const { name, role, tagline, github, linkedin, email } = PORTFOLIO_DATA.personal;

  const firstName = name.split(" ")[0];
  const lastName = name.split(" ")[1];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16">
      {/* 3D WebGL Neural Mesh Background */}
      <Hero3DCanvas />

      {/* Decorative Grid & Glow Overlays */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_75%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Ambient Gradient Lights */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 blur-[140px] rounded-full opacity-60 animate-pulse-slow" />
        <div className="absolute top-2/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-cyan-500/10 blur-[120px] rounded-full opacity-40" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-[0.25em] shadow-[0_0_20px_rgba(59,130,246,0.15)] backdrop-blur-md">
              <Cpu size={15} className="animate-spin-slow text-cyan-400" />
              AI & Software Engineering Student
            </span>
          </motion.div>

          {/* Kinetic Big Typography */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] mb-8 select-none"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-slate-100 to-slate-400">
              {firstName}
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500">
              {lastName}
            </span>
          </motion.h1>

          {/* Role & Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4 max-w-3xl mx-auto mb-12"
          >
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-200 flex items-center justify-center gap-3">
              <span>{role}</span>
              <Sparkles className="text-cyan-400 shrink-0 animate-bounce" size={24} />
            </p>

            <p className="text-base sm:text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
              {tagline}
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-wrap items-center justify-center gap-5 mb-16"
          >
            <Link
              href="#projects"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white rounded-2xl font-bold flex items-center gap-3 transition-all hover:scale-105 active:scale-95 group shadow-[0_0_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_40px_rgba(6,182,212,0.6)]"
            >
              Explore Intelligence
              <ArrowRight className="group-hover:translate-x-1.5 transition-transform" size={20} />
            </Link>

            <Link
              href="#contact"
              className="px-8 sm:px-10 py-4 sm:py-5 bg-slate-900/80 hover:bg-slate-800 text-slate-100 border border-slate-700/60 hover:border-blue-500/50 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 backdrop-blur-md shadow-lg"
            >
              Neural Connect
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-8 sm:gap-12"
          >
            {[
              { icon: Github, href: github, label: "GitHub" },
              { icon: Linkedin, href: linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${email}`, label: "Email" },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="group flex flex-col items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-blue-500/60 group-hover:bg-blue-500/10 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300">
                  <social.icon size={24} className="group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-slate-300 transition-colors"
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll Down</span>
            <ChevronDown className="animate-bounce text-blue-400" size={18} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
