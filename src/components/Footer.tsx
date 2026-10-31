"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Github, Linkedin, Mail, Heart, ArrowUp, Cpu } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { name, github, linkedin, email } = PORTFOLIO_DATA.personal;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-6 border-t border-slate-800/80 bg-slate-950/90 overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2.5 text-2xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-base shadow-[0_0_20px_rgba(37,99,235,0.4)]">
                PD
              </div>
              <span>Pushpendra Deegwal</span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md font-medium">
              Full Stack Developer & AI Enthusiast building scalable web systems, machine learning tools, and immersive digital experiences.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[11px] font-mono font-semibold">
              <Cpu size={13} className="animate-spin-slow text-cyan-400" />
              RGIPT CS & AI (B.Tech + M.Tech)
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400 font-medium">
              {["About", "Skills", "Projects", "Experience", "Certifications", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Actions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Social Matrix</h4>
            <div className="flex items-center gap-3">
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
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
                >
                  <social.icon size={18} />
                </Link>
              ))}
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-blue-500/40 text-slate-300 text-xs font-bold flex items-center gap-2 transition-all hover:scale-105"
            >
              Back to Top
              <ArrowUp size={14} className="text-cyan-400" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {currentYear} {name}. All rights preserved.</p>
          <p className="flex items-center gap-1.5">
            Designed & Built with <Heart size={13} className="text-red-500 fill-red-500" /> using Next.js & Three.js
          </p>
        </div>
      </div>
    </footer>
  );
}
