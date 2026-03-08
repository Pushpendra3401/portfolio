"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const { name, github, linkedin, email } = PORTFOLIO_DATA.personal;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/5 bg-black/50">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="text-center md:text-left">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:text-blue-400 transition-colors">
            PD<span className="text-blue-500">.</span>
          </Link>
          <p className="text-sm text-gray-500 mt-2 font-medium tracking-tight">
            Built with Next.js, Tailwind CSS & Framer Motion
          </p>
        </div>

        <div className="flex items-center gap-8">
          {[
            { icon: Github, href: github },
            { icon: Linkedin, href: linkedin },
            { icon: Mail, href: `mailto:${email}` },
          ].map((social, index) => (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              className="text-gray-500 hover:text-white transition-colors hover:scale-110 transition-transform"
            >
              <social.icon size={22} />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500 font-medium">
          <span>© {currentYear} {name}</span>
          <span className="w-1 h-1 rounded-full bg-gray-700 mx-1" />
          <span className="flex items-center gap-1">
            Made with <Heart size={14} className="text-red-500 fill-red-500" />
          </span>
        </div>
      </div>
    </footer>
  );
}
