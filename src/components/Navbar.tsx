"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Download } from "lucide-react";
import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    const sectionIds = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(id);
              }
            });
          },
          { threshold: 0.3 }
        );
        observer.observe(el);
        observers.push(observer);
      }
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observers.forEach((o) => o.disconnect());
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 pointer-events-none">
      <nav
        className={cn(
          "max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 pointer-events-auto",
          scrolled
            ? "bg-slate-950/80 backdrop-blur-xl border border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border border-transparent"
        )}
      >
        {/* Brand Logo */}
        <Link
          href="/"
          className="group flex items-center gap-2 text-xl font-black tracking-tighter text-white hover:text-blue-400 transition-colors"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
            PD
          </div>
          <span className="hidden sm:inline-block font-mono text-sm font-bold text-slate-300 group-hover:text-cyan-400 transition-colors">
            deegwal<span className="text-blue-500">.ai</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1.5 bg-slate-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-md">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 rounded-full text-xs font-bold transition-all duration-300",
                  isActive
                    ? "text-white"
                    : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600/80 to-cyan-600/80 rounded-full shadow-[0_0_15px_rgba(37,99,235,0.4)] -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* CTA & Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2"
          >
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-3 p-6 bg-slate-950/95 border border-slate-800 rounded-3xl shadow-2xl backdrop-blur-2xl pointer-events-auto"
          >
            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-2xl bg-slate-900/50 hover:bg-blue-600/20 text-slate-200 hover:text-blue-400 text-sm font-bold transition-all"
                >
                  {link.name}
                </Link>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-2xl font-bold text-center flex items-center justify-center gap-2"
              >
                <Download size={16} />
                Download Resume PDF
              </a>

              <div className="flex items-center justify-center gap-6 mt-4 pt-4 border-t border-slate-800/80">
                <Link
                  href={PORTFOLIO_DATA.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="text-slate-400 hover:text-white transition-colors" size={20} />
                </Link>
                <Link
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="text-slate-400 hover:text-white transition-colors" size={20} />
                </Link>
                <Link
                  href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                  aria-label="Email"
                >
                  <Mail className="text-slate-400 hover:text-white transition-colors" size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
