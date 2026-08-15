"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Flame, ExternalLink } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string | null;
}

export default function VideoModal({ isOpen, onClose, videoId }: VideoModalProps) {
  // Prevent scrolling and listen for Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && videoId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-8"
        >
          {/* Backdrop with dark blur */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md cursor-pointer"
            onClick={onClose}
          />
          
          {/* Compact Medium-Size Video Modal Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 26, stiffness: 320 }}
            role="dialog"
            aria-modal="true"
            aria-label="Game trailer video"
            className="relative w-full max-w-[92%] sm:max-w-xl md:max-w-2xl lg:max-w-[780px] bg-coffee-dark rounded-[1.75rem] overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.95),0_0_35px_rgba(200,149,95,0.25)] border border-cappuccino/40 z-10 flex flex-col"
          >
            {/* Sleek Top Header Bar */}
            <div className="flex items-center justify-between px-5 py-3.5 bg-[#1F1515] border-b border-white/10 select-none">
              <div className="flex items-center gap-2">
                <Flame size={15} className="text-cappuccino" />
                <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/90">
                  Official 4K Game Trailer
                </span>
                <span className="text-[9px] uppercase tracking-widest bg-cappuccino/20 text-cappuccino px-2 py-0.5 rounded-full font-semibold hidden sm:inline-block">
                  Clutch Arena
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="flex items-center gap-1.5 px-3 py-1 bg-white/10 hover:bg-cappuccino text-white hover:text-coffee-dark rounded-full transition-all duration-200 text-xs font-bold active:scale-95 cursor-pointer"
                title="Close (Esc)"
                aria-label="Close trailer modal"
              >
                <span className="text-[10px] uppercase tracking-wider hidden sm:inline-block">Close</span>
                <X size={16} />
              </button>
            </div>

            {/* Video Player 16:9 Aspect Frame */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                className="w-full h-full border-0"
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&enablejsapi=1`}
                title="Official 4K Game Trailer"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Compact Bottom Caption Bar with Direct YouTube Link */}
            <div className="px-5 py-2.5 bg-[#170E0E] flex items-center justify-between text-white/60 text-[11px] border-t border-white/5">
              <span className="text-cappuccino font-semibold">Standard Rate: ₹80 / Hour</span>
              <a 
                href={`https://www.youtube.com/watch?v=${videoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-cappuccino transition-colors flex items-center gap-1.5 font-medium"
              >
                <span>Watch on YouTube</span>
                <ExternalLink size={12} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
