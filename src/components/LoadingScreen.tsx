"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 3 seconds progress animation (0% to 100%)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 28);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

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
          exit={{ opacity: 0, y: -25 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading Clutch Gaming Cafe"
          className="fixed inset-0 z-[99999] bg-[#080C14] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
        >
          {/* Cyber Cyan Ambient Glowing Aura */}
          <div className="absolute w-80 sm:w-[450px] h-80 sm:h-[450px] bg-[#00D2FF]/15 rounded-full blur-[130px] pointer-events-none animate-pulse" />

          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative text-center px-4 z-10 flex flex-col items-center"
          >
            {/* Brand Title */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl italic font-bold mb-2 tracking-tight text-white drop-shadow-[0_0_20px_rgba(0,210,255,0.4)]">
              CLUTCH <span className="text-[#00D2FF] not-italic font-normal">GAMING CAFE</span>
            </h1>

            {/* Subtitle */}
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#00D2FF] font-bold mb-6">
              Samayapuram, Trichy • Standard: ₹80 / Hr
            </p>

            {/* 3-Second Smooth Cyber Progress Bar */}
            <div className="w-56 sm:w-72 h-[3px] bg-slate-800 relative overflow-hidden rounded-full my-2">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#00D2FF] via-[#38BDF8] to-[#00D2FF] rounded-full shadow-[0_0_12px_#00D2FF]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Percentage Indicator */}
            <div className="text-[10px] font-mono text-[#00D2FF]/75 tracking-widest mt-2">
              INITIALIZING RIGS • {progress}%
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
