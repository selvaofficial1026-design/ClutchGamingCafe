"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PortfolioItem {
  name: string;
  description: string;
  image: string;
  category: string;
  videoId?: string;
  is4K?: boolean;
}

interface PortfolioSliderProps {
  items: PortfolioItem[];
  onPlay: (videoId: string) => void;
  isPaused?: boolean;
}

export default function PortfolioSlider({ items, onPlay, isPaused = false }: PortfolioSliderProps) {
  const [isSliderHovered, setIsSliderHovered] = useState(false);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused || isSliderHovered) return;

    let animId: number;
    // Fluid continuous animation using requestAnimationFrame for buttery smooth speed
    const step = () => {
      if (sliderRef.current) {
        sliderRef.current.scrollLeft += 1.8;

        // Reset scroll position for seamless infinite loop effect
        if (sliderRef.current.scrollLeft >= sliderRef.current.scrollWidth / 2) {
          sliderRef.current.scrollLeft = 0;
        }
      }
      animId = requestAnimationFrame(step);
    };

    animId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animId);
  }, [isPaused, isSliderHovered]);

  if (items.length === 0) {
    return (
      <div className="flex justify-center py-20 text-slate-500 font-serif italic text-xl">
        No games found in this category.
      </div>
    );
  }

  // Duplicate items for infinite marquee scrolling
  const duplicatedItems = items.length < 4 
    ? [...items, ...items, ...items, ...items] 
    : [...items, ...items];

  return (
    <div 
      className="relative group/slider w-full max-w-full overflow-hidden px-0 py-6 pb-12"
      onMouseEnter={() => setIsSliderHovered(true)}
      onMouseLeave={() => {
        setIsSliderHovered(false);
        setHoveredCardIndex(null);
      }}
      onTouchStart={() => setIsSliderHovered(true)}
      onTouchEnd={() => {
        setIsSliderHovered(false);
        setHoveredCardIndex(null);
      }}
    >
      {/* Continuous Marquee Container */}
      <div 
        ref={sliderRef}
        className="flex gap-6 pl-6 overflow-x-auto [&::-webkit-scrollbar]:hidden select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {duplicatedItems.map((item, index) => {
          const isCardHovered = hoveredCardIndex === index;
          const isAnotherCardHovered = hoveredCardIndex !== null && hoveredCardIndex !== index;

          return (
            <motion.div
              key={item.name + index}
              onMouseEnter={() => setHoveredCardIndex(index)}
              onMouseLeave={() => setHoveredCardIndex(null)}
              animate={{
                scale: isCardHovered ? 1.04 : isAnotherCardHovered ? 0.98 : 1,
                opacity: isAnotherCardHovered ? 0.8 : 1,
                y: isCardHovered ? -10 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className={cn(
                "w-[70vw] xs:w-[62vw] sm:w-[44vw] md:w-[320px] lg:w-[360px] shrink-0 relative transition-all duration-300",
                isCardHovered ? "z-30" : "z-10"
              )}
            >
              <div 
                onClick={() => item.videoId && onPlay(item.videoId)}
                className="group/card bg-[#0D131F] rounded-2xl sm:rounded-3xl overflow-hidden cursor-pointer h-full flex flex-col transition-all duration-500 border border-slate-800 hover:border-[#00D2FF]/60 shadow-[0_4px_25px_rgba(0,0,0,0.6)] hover:shadow-[0_10px_35px_rgba(0,210,255,0.25)]"
              >
                {/* Aspect Ratio Official Game Poster Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080C14]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 70vw, 360px"
                    className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-110"
                  />
                  
                  {/* Subtle Gradient Shade for Title Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/30 to-transparent opacity-85 group-hover/card:opacity-95 transition-opacity duration-300" />
                  
                  {/* Play Trailer Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-90 md:scale-75 md:group-hover:scale-100">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00D2FF] rounded-full flex items-center justify-center text-[#080C14] shadow-[0_0_25px_rgba(0,210,255,0.8)] hover:scale-110 hover:bg-white transition-all duration-300">
                      <Play fill="currentColor" size={18} className="ml-0.5" />
                    </div>
                  </div>

                  {/* Badges on Top */}
                  <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 right-2.5 sm:right-3.5 flex items-center justify-between pointer-events-none z-10">
                    <div className="bg-[#080C14]/90 text-[#00D2FF] border border-[#00D2FF]/40 px-2 sm:px-2.5 py-0.5 rounded-full text-[8.5px] sm:text-[9.5px] uppercase tracking-widest font-bold shadow-md">
                      {item.category}
                    </div>

                    {item.is4K && (
                      <div className="bg-[#080C14]/90 text-[#00D2FF] border border-[#00D2FF]/30 px-2 py-0.5 rounded-full text-[8px] sm:text-[9px] font-bold uppercase tracking-widest shadow-md flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] inline-block" /> 4K
                      </div>
                    )}
                  </div>
                  
                  {/* Title on the bottom of the poster */}
                  <div className="absolute bottom-2.5 sm:bottom-3.5 left-3 sm:left-4 right-3 sm:right-4 z-10">
                    <h3 className="text-base sm:text-xl md:text-2xl font-serif text-white font-bold mb-0.5 drop-shadow-md leading-tight group-hover/card:text-[#00D2FF] transition-colors line-clamp-1">
                      {item.name}
                    </h3>
                  </div>
                </div>

                {/* Description & Action Bar */}
                <div className="p-3.5 sm:p-4 md:p-5 flex-1 flex flex-col justify-between bg-[#0D131F]">
                  <p className="text-slate-300 text-[11px] sm:text-xs font-sans line-clamp-2 leading-relaxed font-normal">
                    {item.description}
                  </p>
                  <div className="mt-3 pt-2.5 border-t border-slate-800 flex justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-wider font-bold">
                    <span className="text-[#00D2FF]">PS5 ₹100 • PS4 ₹80/hr</span>
                    <span className="text-[#00D2FF] flex items-center gap-1 group-hover/card:underline">
                      Watch <Play size={9} fill="currentColor" />
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
