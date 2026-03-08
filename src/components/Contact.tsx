"use client";

import { PORTFOLIO_DATA } from "@/constants/portfolio";
import { SectionContainer } from "./SectionContainer";
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export function Contact() {
  const { phone, email, github, linkedin } = PORTFOLIO_DATA.personal;
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert("Message sent successfully! (This is a demo)");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <SectionContainer id="contact" title="Get In Touch" subtitle="Let's build something amazing together. Reach out via form or social media.">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Contact Information</h3>
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: email, href: `mailto:${email}` },
                { icon: Phone, label: "Phone", value: phone, href: `tel:${phone}` },
                { icon: Github, label: "GitHub", value: "Pushpendra3401", href: github },
                { icon: Linkedin, label: "LinkedIn", value: "Pushpendra Deegwal", href: linkedin },
              ].map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  target={item.label !== "Phone" && item.label !== "Email" ? "_blank" : undefined}
                  className="group flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all hover:bg-white/[0.07]"
                >
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all shrink-0">
                    <item.icon size={28} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 group-hover:text-gray-400 uppercase tracking-widest">{item.label}</p>
                    <p className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors break-all">{item.value}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-8 md:p-12 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 blur-3xl -z-10 group-hover:bg-blue-600/10 transition-colors" />
          <h3 className="text-3xl font-bold text-white mb-8 tracking-tight">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input
                  type="text"
                  required
                  suppressHydrationWarning
                  placeholder="John Doe"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Email</label>
                <input
                  type="email"
                  required
                  suppressHydrationWarning
                  placeholder="john@example.com"
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Subject</label>
              <input
                type="text"
                required
                suppressHydrationWarning
                placeholder="Project Collaboration"
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
              <textarea
                required
                rows={5}
                suppressHydrationWarning
                placeholder="Tell me about your project..."
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all resize-none"
              />
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              suppressHydrationWarning
              className="w-full py-4 px-8 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-lg shadow-blue-500/25"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </form>
        </div>
      </div>
    </SectionContainer>
  );
}
