"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show premium intro for 1.6 seconds then smoothly fade away
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          key="loading-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -40 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading Clutch Gaming Cafe"
          className="fixed inset-0 z-[99999] bg-[#1F1515] flex flex-col items-center justify-center text-white select-none pointer-events-auto"
        >
          {/* Ambient Glow */}
          <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-cappuccino/15 rounded-full blur-[100px] pointer-events-none" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative text-center px-4 z-10"
          >
            {/* Logo Monogram Badge */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 rounded-full border border-cappuccino/50 bg-[#2A1D1D] flex items-center justify-center shadow-[0_0_30px_rgba(200,149,95,0.35)]">
              <span className="font-serif font-bold italic text-cappuccino text-xl sm:text-2xl tracking-tighter">
                CGC
              </span>
            </div>

            {/* Brand Title */}
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl italic font-bold mb-4 tracking-tight text-white drop-shadow-lg">
              Clutch <span className="text-cappuccino not-italic font-normal">Gaming Cafe</span>
            </h1>

            {/* Golden Animated Progress Bar */}
            <div className="w-48 sm:w-64 h-[2px] mx-auto bg-white/15 relative overflow-hidden rounded-full my-4">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-cappuccino to-transparent"
              />
            </div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-[9px] sm:text-[11px] uppercase tracking-[0.35em] text-cappuccino/90 font-bold"
            >
              Trichy&apos;s Premier Gaming Lounge • ₹80 / Hr
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
