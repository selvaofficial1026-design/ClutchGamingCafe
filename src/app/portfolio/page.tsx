"use client";

import React, { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import PortfolioSlider, { PortfolioItem } from "@/components/PortfolioSlider";
import VideoModal from "@/components/VideoModal";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Sparkles, MapPin, Trophy, Flame, Gamepad2, ShieldCheck } from "lucide-react";
import Link from "next/link";

export interface PortfolioGameItem extends PortfolioItem {
  isMultiplayer?: boolean;
}

const categories = ["All", "Multiplayer", "Action & Open World", "Co-op & Sports", "Racing & Fighting", "FPS Warfare"];

const portfolioItems: PortfolioGameItem[] = [
  // 1. EA Sports FC 24
  {
    name: "EA Sports FC 24 (FIFA)",
    description: "The pinnacle of football realism with HyperMotionV, authentic club atmospheres, and intense 2 to 4 player local co-op showdowns.",
    image: "/images/games/fifa.jpg",
    category: "Co-op & Sports",
    isMultiplayer: true,
    is4K: true,
    videoId: "vLj-27T-SEQ"
  },
  // 2. WWE 2K26
  {
    name: "WWE 2K26",
    description: "Next-gen sports entertainment and arena spectacle. Unleash devastating finishers, 4-player Royal Rumbles, and brutal TLC matches in 4K 60FPS.",
    image: "/images/games/wwe2k26.jpg",
    category: "Multiplayer",
    isMultiplayer: true,
    is4K: true,
    videoId: "9o4v6lC1f-o"
  },
  // 3. It Takes Two
  {
    name: "It Takes Two",
    description: "Game of the Year winner purely engineered for two players. Embark on a wild, heartwarming journey with seamless split-screen co-op.",
    image: "/images/games/ittakestwo.jpg",
    category: "Co-op & Sports",
    isMultiplayer: true,
    is4K: true,
    videoId: "GAW7VC5H4W4"
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
  // 5. GTA V
  {
    name: "Grand Theft Auto V",
    description: "Explore the sprawling metropolis of Los Santos. Jump into GTA Online squad heists, custom stunt races, and roleplay servers.",
    image: "/images/games/gta5.jpg",
    category: "Action & Open World",
    isMultiplayer: true,
    is4K: true,
    videoId: "QkkoHAzjnUs"
  },
  // 6. God of War Ragnarök
  {
    name: "God of War Ragnarök",
    description: "Join Kratos and Atreus as they journey through the Nine Realms facing Norse gods and monsters in glorious 4K 60FPS fidelity.",
    image: "/images/games/godofwar.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "hfJ4Km46A-0"
  },
  // 7. Mortal Kombat 1
  {
    name: "Mortal Kombat 1",
    description: "Visceral next-generation 1v1 fighting action featuring a reborn universe, fluid combos, Kameo fighters, and devastating Fatalities.",
    image: "/images/games/mortalkombat.jpg",
    category: "Racing & Fighting",
    isMultiplayer: true,
    is4K: true,
    videoId: "MY4bT1wZz_E"
  },
  // 8. Forza Horizon 5
  {
    name: "Forza Horizon 5",
    description: "Lead breathtaking expeditions across the vibrant landscapes of Mexico with online convoy racing in hundreds of hypercars.",
    image: "/images/games/forza.jpg",
    category: "Racing & Fighting",
    isMultiplayer: true,
    is4K: true,
    videoId: "FYH9n37B7Yw"
  },
  // 9. Need for Speed Unbound
  {
    name: "Need for Speed Unbound",
    description: "Tear up the city streets with signature graffiti effects, intense police chases, precision drifting, and high-stakes multiplayer races.",
    image: "/images/games/nfs.jpg",
    category: "Racing & Fighting",
    isMultiplayer: true,
    is4K: true,
    videoId: "H2Y8XCe7F9E"
  },
  // 10. Battlefield 2042
  {
    name: "Battlefield 2042 (BF6)",
    description: "Massive 128-player all-out warfare in near-future combat. Dominate shifting battlegrounds with wingsuits, tanks, and squad tactics.",
    image: "/images/games/bf2042.jpg",
    category: "FPS Warfare",
    isMultiplayer: true,
    is4K: true,
    videoId: "ASzOzrB-a9E"
  },
  // 11. Battlefield 1
  {
    name: "Battlefield 1",
    description: "Experience the dawn of all-out warfare in an epic, gritty WW1 setting with 64-player multiplayer combat and dynamic destruction.",
    image: "/images/games/bf1.jpg",
    category: "FPS Warfare",
    isMultiplayer: true,
    is4K: true,
    videoId: "4pY3hlQEOc0"
  },
  // 12. NBA 2K25
  {
    name: "NBA 2K Series",
    description: "Next-generation basketball sports simulation. Compete in high-stakes online matchups and 2-4 player arena faceoffs.",
    image: "/images/games/nba2k.jpg",
    category: "Co-op & Sports",
    isMultiplayer: true,
    is4K: true,
    videoId: "M5uH8fL-2jA"
  },
  // 13. A Plague Tale: Requiem
  {
    name: "A Plague Tale: Requiem",
    description: "A spectacular heart-rending journey across a breathtaking medieval world twisted by supernatural forces with stunning ray tracing.",
    image: "/images/games/requiem.jpg",
    category: "Action & Open World",
    is4K: true,
    videoId: "r4D3kQ_oH1s"
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filteredItems = activeCategory === "All" 
    ? portfolioItems 
    : activeCategory === "Multiplayer"
    ? portfolioItems.filter(item => item.isMultiplayer || item.category === "Multiplayer")
    : portfolioItems.filter(item => item.category === activeCategory);

  const getCategoryCount = (category: string) => {
    if (category === "All") return portfolioItems.length;
    if (category === "Multiplayer") return portfolioItems.filter(item => item.isMultiplayer || item.category === "Multiplayer").length;
    return portfolioItems.filter(item => item.category === category).length;
  };

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-[#080C14] text-white">
      
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#00D2FF]/5 rounded-full blur-[140px]" />
        <div className="absolute top-[40%] -right-[5%] w-[30%] h-[50%] bg-[#0284C7]/5 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-0 md:px-12 py-12 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-0">
          <SectionHeading 
            subtitle="The Clutch Game Vault" 
            title="All Top Games &amp; Official Trailers" 
          />

          {/* Quick Rate Pill */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <div className="px-6 py-2.5 rounded-full bg-[#0D131F] text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 border border-[#00D2FF]/30 shadow-[0_0_15px_rgba(0,210,255,0.15)]">
              <Sparkles size={14} className="text-[#00D2FF]" /> PS5 4K: ₹100/hr (Ctrl ₹80) • PS4 HD: ₹80/hr (Ctrl ₹60)
            </div>
          </div>

          {/* Categories - Mobile (3 on top, 2 on bottom) / Desktop (Fluid Row) */}
          <div className="mb-10 md:mb-16">
            
            {/* Mobile Layout: 3 on Top, 3 on Bottom (Grid 3x2) */}
            <div className="flex flex-col items-center gap-2 sm:hidden px-1">
              <div className="grid grid-cols-3 gap-1.5 w-full">
                {categories.slice(0, 3).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "py-2 px-1 rounded-full text-[9px] font-bold tracking-tight uppercase transition-all duration-300 flex items-center justify-center text-center cursor-pointer shadow-xs leading-tight min-h-[38px]",
                      activeCategory === cat 
                        ? "bg-[#00D2FF] text-[#080C14] shadow-[0_0_15px_rgba(0,210,255,0.6)] font-black scale-[1.02]" 
                        : "bg-[#0D131F] text-slate-300 border border-slate-800 hover:border-[#00D2FF]/40"
                    )}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-1.5 w-full">
                {categories.slice(3, 6).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "py-2 px-1 rounded-full text-[9px] font-bold tracking-tight uppercase transition-all duration-300 flex items-center justify-center text-center cursor-pointer shadow-xs leading-tight min-h-[38px]",
                      activeCategory === cat 
                        ? "bg-[#00D2FF] text-[#080C14] shadow-[0_0_15px_rgba(0,210,255,0.6)] font-black scale-[1.02]" 
                        : "bg-[#0D131F] text-slate-300 border border-slate-800 hover:border-[#00D2FF]/40"
                    )}
                  >
                    <span>{cat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tablet & Desktop Layout */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "relative py-2.5 sm:py-3 px-4 sm:px-6 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 overflow-hidden flex items-center justify-center cursor-pointer",
                    activeCategory === cat 
                      ? "text-[#080C14] shadow-[0_0_20px_rgba(0,210,255,0.6)] font-black scale-105" 
                      : "text-slate-300 hover:text-white bg-[#0D131F] hover:bg-[#131C2E] border border-slate-800 hover:border-[#00D2FF]/40"
                  )}
                >
                  <span className="relative z-10">{cat} <span className="opacity-60 ml-1 font-normal">({getCategoryCount(cat)})</span></span>
                  {activeCategory === cat && (
                    <motion.div 
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-[#00D2FF]"
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
          <PortfolioSlider 
            items={filteredItems} 
            onPlay={(videoId) => setActiveVideo(videoId)} 
            isPaused={!!activeVideo}
          />
        </div>

        {/* Walk-in CTA Strip */}
        <div className="max-w-4xl mx-auto mt-12 sm:mt-16 px-4 sm:px-6">
          <div className="group p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.25rem] bg-[#0D131F] text-white border border-slate-800 hover:border-[#00D2FF]/50 shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,210,255,0.22)] hover:-translate-y-1 relative overflow-hidden transition-all duration-500 text-center">
            
            <div 
              className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700" 
              style={{ background: "radial-gradient(circle at top right, rgba(0,210,255,0.2) 0%, transparent 65%)" }} 
            />
            <div 
              className="absolute bottom-0 left-0 w-60 h-60 pointer-events-none opacity-20" 
              style={{ background: "radial-gradient(circle at bottom left, rgba(0,210,255,0.15) 0%, transparent 65%)" }} 
            />
            
            <div className="relative z-10 space-y-4">
              
              {/* Top Rate & Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/40 text-[#00D2FF] text-[9.5px] sm:text-xs font-bold uppercase tracking-[0.25em] shadow-xs">
                <Flame size={14} className="animate-pulse" />
                <span>700+ Titles • Direct Walk-In • ₹80/Hr</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white italic leading-tight">
                Massive Game Vault &amp; <span className="text-[#00D2FF] not-italic font-bold">High-FPS Gaming</span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base max-w-xl mx-auto font-light leading-relaxed">
                All major Triple-A and competitive eSports titles pre-installed on ultra-fast Gen4 NVMe arrays. Play solo campaigns, multiplayer showdowns, or PS5 4K lounge co-op at flat ₹80/hr.
              </p>

              {/* 3 Gaming-Specific Feature Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 py-2 max-w-2xl mx-auto text-left">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <Gamepad2 size={16} className="text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#00D2FF] block">Library</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white/95">700+ Pre-Installed Titles</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <ShieldCheck size={16} className="text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase font-bold text-emerald-400 block">Low Ping</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white/95">Sub-10ms Dedicated Routing</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <Sparkles size={16} className="text-[#00D2FF] shrink-0" />
                  <div>
                    <span className="text-[9px] uppercase font-bold text-[#00D2FF] block">Cloud Sync</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white/95">Steam, Epic &amp; Riot Ready</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <Link 
                  href="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MapPin size={15} />
                  <span>Get Arena Location</span>
                </Link>
                <a 
                  href="tel:+918489800905"
                  className="w-full sm:w-auto px-7 py-3.5 border border-slate-700 bg-[#080C14]/90 text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Trophy size={15} className="text-[#00D2FF]" />
                  <span>Direct Call</span>
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
