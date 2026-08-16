"use client";

import React, { memo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface MenuItemCardProps {
  name: string;
  description: string;
  price: string;
  image: string;
  category?: string;
  is4K?: boolean;
  tag?: string;
  youtubeId?: string;
  index?: number;
  onPlay?: (youtubeId: string) => void;
}

function MenuItemCard({
  name,
  description,
  price,
  image,
  category,
  is4K,
  tag,
  youtubeId,
  index = 0,
  onPlay,
}: MenuItemCardProps) {
  const handleAction = () => {
    if (onPlay && youtubeId) onPlay(youtubeId);
  };

  return (
    <motion.div
      onClick={handleAction}
      onKeyDown={(e) => {
        if (youtubeId && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          handleAction();
        }
      }}
      role={youtubeId ? "button" : undefined}
      tabIndex={youtubeId ? 0 : undefined}
      aria-label={youtubeId ? `Play official trailer for ${name}` : undefined}
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3), ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity" }}
      className={`group bg-white rounded-premium overflow-hidden shadow-premium hover:shadow-premium-hover transition-all duration-300 border border-cream/50 ${youtubeId ? 'cursor-pointer focus:outline-none focus:ring-2 focus:ring-cappuccino' : ''}`}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          quality={80}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-coffee-dark/20 group-hover:bg-coffee-dark/50 transition-colors duration-300" />
        
        {youtubeId && (
          <div className="absolute inset-0 flex items-center justify-center opacity-85 md:opacity-0 md:group-hover:opacity-100 transition-all duration-300 transform scale-90 md:scale-75 md:group-hover:scale-100">
            <div className="w-12 h-12 bg-cappuccino text-coffee-dark rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(200,160,120,0.8)] hover:scale-110 hover:bg-white transition-all">
              <Play className="fill-current ml-0.5" size={20} />
            </div>
          </div>
        )}
        
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {category && (
            <div className="bg-cappuccino/90 backdrop-blur-md text-coffee-dark px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg w-fit">
              {category}
            </div>
          )}
          {tag && (
            <div className="bg-coffee-dark text-white px-3 py-1 rounded-full text-[9px] uppercase tracking-[0.2em] font-bold shadow-lg w-fit">
              {tag}
            </div>
          )}
        </div>

        {is4K !== undefined && (
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md px-2 py-1 rounded-lg shadow-xl border border-cream flex items-center gap-1.5">
            <div className={`w-2 h-2 rounded-full border-2 ${is4K ? 'border-green-600' : 'border-red-600'} flex items-center justify-center`}>
              <div className={`w-1 h-1 rounded-full ${is4K ? 'bg-green-600' : 'bg-red-600'}`} />
            </div>
            <span className={`text-[8px] font-bold uppercase tracking-widest ${is4K ? 'text-green-700' : 'text-red-700'}`}>
              {is4K ? '4K' : 'HD'}
            </span>
          </div>
        )}
      </div>
      <div className="p-3.5 sm:p-5 md:p-6">
        <div className="flex justify-between items-start mb-1.5 sm:mb-2">
          <h3 className="text-base sm:text-lg font-serif text-coffee-dark font-bold group-hover:text-cappuccino transition-colors duration-200 line-clamp-1">
            {name}
          </h3>
          <span className="text-cappuccino font-bold font-sans text-sm sm:text-lg">{price}</span>
        </div>
        <p className="text-coffee-dark/80 text-[11px] sm:text-xs font-sans line-clamp-2 leading-relaxed font-normal min-h-[2.2rem] sm:min-h-[2.5rem]">
          {description}
        </p>
        <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3.5 border-t border-cream flex justify-between items-center text-[9px] sm:text-[10px] uppercase tracking-wider font-bold">
          <span className="text-coffee-dark/50 text-[8.5px] sm:text-[9px] tracking-widest">Rate: ₹80/hr</span>
          {youtubeId && (
            <span className="text-cappuccino flex items-center gap-1.5 group-hover:underline">
              <span>Watch Trailer</span>
              <Play size={10} fill="currentColor" />
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default memo(MenuItemCard);
