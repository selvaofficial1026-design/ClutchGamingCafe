"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PortfolioSlider, { PortfolioItem } from "@/components/PortfolioSlider";
import VideoModal from "@/components/VideoModal";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, MapPin, Trophy, Flame } from "lucide-react";
import Link from "next/link";

const categories = ["All", "Action & Open World", "Co-op & Sports", "Racing & Fighting", "FPS Warfare"];

const portfolioItems: PortfolioItem[] = [
  // 1. FIFA / FC 24
  {
    name: "EA Sports FC 24 (FIFA)",
    description: "The pinnacle of football realism with HyperMotionV, authentic club atmospheres, and intense 2-player local co-op showdowns.",
    image: "/images/games/fifa.jpg",
    category: "Co-op & Sports",
    is4K: true,
    videoId: "vLj-27T-SEQ"
  },
  // 2. It Takes Two
  {
    name: "It Takes Two",
    description: "Game of the Year winner purely engineered for two players. Embark on a wild, heartwarming journey with split-screen gameplay.",
    image: "/images/games/ittakestwo.jpg",
    category: "Co-op & Sports",
    is4K: true,
    videoId: "GAW7VC5H4W4"
  },
  // 3. GTA V
  {
    name: "Grand Theft Auto V",
    description: "Explore the sprawling sun-soaked metropolis of Los Santos. Jump into GTA Online heists, custom stunts, and roleplay servers.",
    image: "/images/games/gta5.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "QkkoHAzjnUs"
  },
  // 4. GTA VI
  {
    name: "Grand Theft Auto VI",
    description: "The next chapter in the groundbreaking Grand Theft Auto series set in Vice City. Ready for launch day gaming at Clutch.",
    image: "/images/games/gta6.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "QdBZY2fkU-0"
  },
  // 5. God of War Ragnarök
  {
    name: "God of War Ragnarök",
    description: "Join Kratos and Atreus as they journey through the Nine Realms facing Norse gods and monsters in glorious 4K 60FPS fidelity.",
    image: "/images/games/godofwar.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "hfJ4Km46A-0"
  },
  // 6. Mortal Kombat 1
  {
    name: "Mortal Kombat 1",
    description: "Visceral next-generation fighting action featuring a reborn universe, fluid combos, Kameo fighters, and devastating Fatalities.",
    image: "/images/games/mortalkombat.jpg",
    category: "Racing & Fighting",
    is4K: true,
    videoId: "MY4bT1wZz_E"
  },
  // 7. Forza Horizon 5
  {
    name: "Forza Horizon 5",
    description: "Lead breathtaking expeditions across the vibrant landscapes of Mexico with hundreds of world-class high-performance cars.",
    image: "/images/games/forza.jpg",
    category: "Racing & Fighting",
    is4K: true,
    videoId: "FYH9n37B7Yw"
  },
  // 8. Need for Speed Unbound
  {
    name: "Need for Speed Unbound",
    description: "Tear up the city streets with signature graffiti effects, intense police chases, precision drifting, and high-stakes pink-slip races.",
    image: "/images/games/nfs.jpg",
    category: "Racing & Fighting",
    is4K: true,
    videoId: "H2Y8XCe7F9E"
  },
  // 9. Battlefield 1
  {
    name: "Battlefield 1",
    description: "Experience the dawn of all-out warfare in an epic, gritty WW1 setting with 64-player multiplayer combat and dynamic destruction.",
    image: "/images/games/bf1.jpg",
    category: "FPS Warfare",
    is4K: true,
    videoId: "4pY3hlQEOc0"
  },
  // 10. Battlefield 2042
  {
    name: "Battlefield 2042 (BF6)",
    description: "Massive 128-player battles in near-future combat. Dominate shifting battlegrounds with wingsuits, tanks, and squad tactics.",
    image: "/images/games/bf2042.jpg",
    category: "FPS Warfare",
    is4K: true,
    videoId: "ASzOzrB-a9E"
  },
  // 11. A Plague Tale: Requiem
  {
    name: "A Plague Tale: Requiem",
    description: "A spectacular heart-rending journey across a breathtaking medieval world twisted by supernatural forces with stunning ray tracing.",
    image: "/images/games/requiem.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "r4D3kQ_oH1s"
  },
  // 12. NBA 2K & WWE 2K Series
  {
    name: "NBA 2K / WWE 2K Series",
    description: "Next-generation sports simulation and arena entertainment. Compete in high-stakes basketball or brutal ladder matches with friends.",
    image: "/images/games/nba2k.jpg",
    category: "Co-op & Sports",
    is4K: true,
    videoId: "M5uH8fL-2jA"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const getCategoryCount = (category: string) => {
    if (category === "All") return portfolioItems.length;
    return portfolioItems.filter(item => item.category === category).length;
  };

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-cappuccino/5 rounded-full blur-[120px]" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[50%] bg-coffee-dark/5 rounded-full blur-[100px]" />
      </div>

      <section className="relative z-10 px-0 md:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-0">
          <SectionHeading 
            subtitle="The Clutch Game Vault" 
            title="All Top Games &amp; Official Trailers" 
          />

          {/* Quick Rate Pill */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="px-6 py-2.5 rounded-full bg-coffee-dark text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-sm">
              <Sparkles size={14} className="text-cappuccino" /> Standard Rate: ₹80 / Hour (All PC &amp; PS5 Setups)
            </div>
          </div>

          {/* Categories - Mobile (3 on top, 2 on bottom) / Desktop (Fluid Row) */}
          <div className="mb-10 md:mb-16">
            
            {/* Mobile Layout: 3 on Top (All, Action & Open World, Co-op & Sports), 2 on Bottom (Racing & Fighting, FPS Warfare) */}
            <div className="flex flex-col items-center gap-2 sm:hidden px-1">
              {/* Top Row: 3 Categories */}
              <div className="grid grid-cols-3 gap-1.5 w-full">
                {categories.slice(0, 3).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "py-2 px-1.5 rounded-full text-[9px] font-bold tracking-tight uppercase transition-all duration-300 flex items-center justify-center text-center cursor-pointer shadow-xs leading-tight min-h-[38px]",
                      activeCategory === cat 
                        ? "bg-coffee-dark text-white shadow-md scale-[1.02]" 
                        : "bg-white text-coffee-dark/80 border border-cream hover:border-cappuccino/40"
                    )}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>

              {/* Bottom Row: 2 Categories */}
              <div className="grid grid-cols-2 gap-2 w-full max-w-[310px]">
                {categories.slice(3, 5).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "py-2 px-2 rounded-full text-[9.5px] font-bold tracking-tight uppercase transition-all duration-300 flex items-center justify-center text-center cursor-pointer shadow-xs leading-tight min-h-[38px]",
                      activeCategory === cat 
                        ? "bg-coffee-dark text-white shadow-md scale-[1.02]" 
                        : "bg-white text-coffee-dark/80 border border-cream hover:border-cappuccino/40"
                    )}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet & Desktop Layout: Single Fluid Row */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 overflow-hidden flex items-center justify-center cursor-pointer",
                    activeCategory === cat 
                      ? "text-white shadow-xl scale-105" 
                      : "text-coffee-dark/70 hover:text-coffee-dark bg-white/70 hover:bg-white backdrop-blur-sm border border-cream hover:border-cappuccino/40 hover:shadow-md"
                  )}
                >
                  <span className="relative z-10">{cat} <span className="opacity-60 ml-1 font-normal">({getCategoryCount(cat)})</span></span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-coffee-dark"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Continuous Auto-Sliding Marquee Gallery */}
        <div className="w-full relative px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <PortfolioSlider 
                items={filteredItems} 
                onPlay={(videoId) => setActiveVideo(videoId)} 
                isPaused={!!activeVideo}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Walk-in CTA Strip - Unique Gaming Sanctuary Card */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
          <div className="group p-6 sm:p-10 md:p-12 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-br from-[#221616] via-coffee-dark to-[#140C0C] text-white border border-cappuccino/30 shadow-premium hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(200,149,95,0.3)] hover:-translate-y-1 relative overflow-hidden transition-all duration-500 text-center">
            
            {/* Ambient Golden Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cappuccino/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-[75px] group-hover:scale-125 transition-all duration-700 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cappuccino/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-[60px] pointer-events-none" />
            
            <div className="relative z-10 space-y-4">
              
              {/* Top Rate & Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cappuccino/15 border border-cappuccino/40 text-cappuccino text-[9.5px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-xs">
                <Flame size={14} className="animate-pulse" />
                <span>₹80 / Hour Standard Rate • Direct Walk-In</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white italic leading-tight">
                Walk in &amp; Play Any Game at <span className="text-cappuccino not-italic font-bold">₹80/hr</span>
              </h3>

              <p className="text-white/75 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                Over 700+ titles pre-installed on ultra-fast NVMe SSDs. Instant login, 240Hz Fast-IPS monitors, and DualSense PS5 controllers with zero wait time.
              </p>

              {/* 3 Compact Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-2 max-w-2xl mx-auto text-left">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-cappuccino shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-white/90">700+ Games Pre-Loaded</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 animate-pulse" />
                  <span className="text-[10px] sm:text-xs font-bold text-white/90">240Hz &amp; 15ms Fiber Ping</span>
                </div>
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                  <span className="w-2 h-2 rounded-full bg-cappuccino shrink-0" />
                  <span className="text-[10px] sm:text-xs font-bold text-white/90">PS5 4K OLED Lounge</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white hover:shadow-[0_0_20px_rgba(200,149,95,0.6)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin size={15} />
                  <span>Get Arena Location</span>
                </Link>
                <a 
                  href="tel:+919345469023"
                  className="w-full sm:w-auto px-7 py-3.5 border border-white/20 bg-white/[0.03] text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-white/10 hover:border-cappuccino/50 transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Trophy size={15} className="text-cappuccino" />
                  <span>Call: +91 93454 69023</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal 
        isOpen={!!activeVideo} 
        videoId={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </main>
  );
}
