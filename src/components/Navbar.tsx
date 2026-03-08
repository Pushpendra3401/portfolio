"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-3"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
          PD<span className="text-blue-500">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-full transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-medium text-gray-300 hover:text-white"
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/resume.pdf"
                className="w-full text-center py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <div className="flex items-center justify-center gap-6 mt-4">
                <Link href={PORTFOLIO_DATA.personal.github} target="_blank">
                  <Github className="text-gray-400 hover:text-white transition-colors" size={20} />
                </Link>
                <Link href={PORTFOLIO_DATA.personal.linkedin} target="_blank">
                  <Linkedin className="text-gray-400 hover:text-white transition-colors" size={20} />
                </Link>
                <Link href={`mailto:${PORTFOLIO_DATA.personal.email}`}>
                  <Mail className="text-gray-400 hover:text-white transition-colors" size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
