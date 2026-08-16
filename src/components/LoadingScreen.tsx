"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 5 seconds progress animation (0% to 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 48); // 48ms * 100 = ~4.8s + fade

    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading Clutch Gaming Cafe"
          className="fixed inset-0 z-[99999] bg-[#170E0E] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
        >
          {/* Ambient Glowing Aura */}
          <div className="absolute w-80 sm:w-[450px] h-80 sm:h-[450px] bg-cappuccino/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative text-center px-4 z-10 flex flex-col items-center"
          >
            {/* Brand Title */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl italic font-bold mb-3 tracking-tight text-white drop-shadow-xl">
              Clutch <span className="text-cappuccino not-italic font-normal">Gaming Cafe</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-cappuccino font-bold mb-6">
              Trichy&apos;s Premier Gaming Lounge • ₹80 / Hr
            </p>

            {/* 5-Second Smooth Progress Bar */}
            <div className="w-56 sm:w-72 h-[3px] bg-white/10 relative overflow-hidden rounded-full my-2">
              <motion.div 
                className="h-full bg-gradient-to-r from-cappuccino via-[#E8B87D] to-cappuccino rounded-full shadow-[0_0_12px_rgba(200,149,95,0.8)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="text-[10px] font-mono text-white/50 tracking-widest mt-2">
              INITIALIZING RIGS • {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
