"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export default function SectionHeading({ title, subtitle, centered = true, className }: SectionHeadingProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn("mb-12 md:mb-20", centered ? "text-center" : "text-left", className)}
    >
      {subtitle && (
        <span className="inline-block text-[#00D2FF] font-bold text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-5">
          {subtitle}
        </span>
      )}
      <h2 className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white leading-tight px-2 drop-shadow-lg",
        centered && "mx-auto max-w-3xl"
      )}>
        {title}
      </h2>
      <div className={cn(
        "flex items-center gap-4 mt-8",
        centered && "justify-center"
      )}>
        <div className="h-[1px] w-12 bg-[#00D2FF]/40" />
        <div className="h-[6px] w-[6px] rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF]" />
        <div className="h-[1px] w-12 bg-[#00D2FF]/40" />
      </div>
    </motion.div>
  );
}
