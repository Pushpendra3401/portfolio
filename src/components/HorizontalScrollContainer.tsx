"use client";

import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, Menu, X, Download } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const SECTIONS = [
  { id: "hero", label: "01. Introduction" },
  { id: "intro", label: "02. Profile" },
  { id: "projects", label: "03. Projects" },
  { id: "about", label: "04. Background" },
  { id: "skills", label: "05. Skills" },
  { id: "experience", label: "06. Timeline" },
  { id: "certifications", label: "07. Accreditations" },
  { id: "contact", label: "08. Contact" },
];

export function HorizontalScrollContainer({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useGSAP(
    () => {
      if (isMobile || !containerRef.current || !trackRef.current) return;

      const track = trackRef.current;
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1.1,
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            setProgress(self.progress);
            const sectionIndex = Math.min(
              SECTIONS.length - 1,
              Math.floor(self.progress * SECTIONS.length)
            );
            setActiveSection(sectionIndex);
          },
        },
      });

      return () => {
        tween.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { dependencies: [isMobile], scope: containerRef }
  );

  const scrollToSection = (index: number) => {
    if (isMobile) {
      const el = document.getElementById(SECTIONS[index].id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      return;
    }

    if (!trackRef.current) return;
    const getScrollAmount = () => trackRef.current!.scrollWidth - window.innerWidth;
    const targetScroll = (index / (SECTIONS.length - 1)) * getScrollAmount();

    const st = ScrollTrigger.getById("horizontal-track") || ScrollTrigger.getAll()[0];
    if (st) {
      const targetPos = st.start + targetScroll;
      window.scrollTo({ top: targetPos, behavior: "smooth" });
    }
  };

  return (
    <div className="relative bg-[#07080c] text-slate-100 min-h-screen selection:bg-cyan-500 selection:text-black">
      {/* Fixed Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between pointer-events-none">
        {/* Brand Monogram */}
        <Link
          href="/"
          className="pointer-events-auto flex items-center gap-3 text-lg font-black tracking-tighter text-white hover:text-cyan-400 transition-colors group"
        >
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-indigo-600 flex items-center justify-center text-white font-black text-sm shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 transition-transform">
            PD
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-mono text-xs font-bold text-slate-200 group-hover:text-cyan-400 transition-colors">
              PUSHPENDRA DEEGWAL
            </span>
            <span className="text-[10px] font-mono text-slate-500 tracking-wider">
              CREATIVE DEVELOPER
            </span>
          </div>
        </Link>

        {/* Section Index Badge (Desktop) */}
        {!isMobile && (
          <div className="pointer-events-auto hidden md:flex items-center gap-6 bg-slate-950/80 px-6 py-2.5 rounded-full border border-slate-800/80 backdrop-blur-xl shadow-2xl">
            <span className="text-xs font-mono font-bold text-cyan-400">
              {SECTIONS[activeSection]?.label}
            </span>
            <div className="flex items-center gap-1.5">
              {SECTIONS.map((sec, i) => (
                <button
                  key={sec.id}
                  onClick={() => scrollToSection(i)}
                  className={cn(
                    "w-2 h-2 rounded-full transition-all duration-300",
                    activeSection === i
                      ? "w-6 bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
                      : "bg-slate-700 hover:bg-slate-500"
                  )}
                  title={sec.label}
                />
              ))}
            </div>
          </div>
        )}

        {/* Actions & Mobile Menu */}
        <div className="pointer-events-auto flex items-center gap-3">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
          >
            <Download size={14} />
            Resume PDF
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-11 h-11 rounded-2xl bg-slate-900 border border-slate-800 text-slate-200 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-2xl p-8 flex flex-col justify-center gap-6 lg:hidden">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-[0.3em] mb-4">
            Navigation Index
          </div>
          {SECTIONS.map((sec, i) => (
            <button
              key={sec.id}
              onClick={() => scrollToSection(i)}
              className="text-2xl font-black text-left text-slate-200 hover:text-cyan-400 transition-colors flex items-center justify-between"
            >
              <span>{sec.label}</span>
              <ArrowRight size={20} className="text-cyan-400" />
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold rounded-2xl text-center flex items-center justify-center gap-2"
          >
            <Download size={16} />
            Download Resume PDF
          </a>
        </div>
      )}

      {/* Main Track Container */}
      <div ref={containerRef} className="overflow-hidden">
        <div
          ref={trackRef}
          className={cn(
            isMobile
              ? "flex flex-col"
              : "flex flex-nowrap h-screen w-max items-center"
          )}
        >
          {children}
        </div>
      </div>

      {/* Fixed Bottom Horizontal Scroll Progress Bar (Desktop) */}
      {!isMobile && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-6 pointer-events-none flex items-center justify-between">
          <div className="pointer-events-auto flex items-center gap-3 bg-slate-950/80 px-4 py-2 rounded-full border border-slate-800/80 backdrop-blur-md text-xs font-mono text-slate-400">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            SCROLL DOWN / DRAG TO MOVE HORIZONTALLY
          </div>

          <div className="w-64 h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800/80 backdrop-blur-md">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-500 transition-all duration-100 shadow-[0_0_15px_#22d3ee]"
              style={{ width: `${Math.max(5, progress * 100)}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
