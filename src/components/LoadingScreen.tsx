"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          role="status"
          aria-label="Loading Clutch Gaming Cafe"
          className="fixed inset-0 z-[200] bg-coffee-dark flex flex-col items-center justify-center text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="font-serif text-4xl md:text-6xl italic font-bold mb-4 tracking-tight">Clutch Gaming Cafe</div>
            <div className="w-full h-[1px] bg-white/20 relative overflow-hidden">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 bg-cappuccino"
              />
            </div>
          </motion.div>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-[10px] sm:text-xs uppercase tracking-[0.4em] text-cappuccino font-bold text-center px-4"
          >
            Tiruchirappalli&apos;s Premier Gaming Lounge
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
