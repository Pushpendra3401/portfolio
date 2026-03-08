"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  children: ReactNode;
  id: string;
  className?: string;
  title?: string;
  subtitle?: string;
}

export function SectionContainer({
  children,
  id,
  className,
  title,
  subtitle,
}: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-24 px-6 relative overflow-hidden", className)}>
      {/* AI Decorative Grid for each section */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {(title || subtitle) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center"
          >
            {title && (
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white uppercase italic">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed font-medium">
                {subtitle}
              </p>
            )}
            <div className="mt-6 flex justify-center">
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
            </div>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
