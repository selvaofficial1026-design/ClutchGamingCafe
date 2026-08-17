"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  Gamepad2, 
  ArrowUpRight,
  Quote,
  Flame,
  Radio,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Target,
  MapPin,
  Phone,
  Monitor,
  Cpu
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const keyStats = [
  { value: "700+", label: "Games Pre-Installed", desc: "Steam, Epic, Riot, EA & PSN Ready" },
  { value: "240Hz", label: "Fast-IPS Displays", desc: "1ms GtG Response & G-Sync" },
  { value: "1 Gbps", label: "Dedicated Fiber", desc: "Ultra-Low 10-15ms Server Ping" },
  { value: "₹80", label: "Flat Hourly Rate", desc: "All PC & PS5 Setups Included" }
];

const zones = [
  {
    id: "zone-01",
    pinNumber: "01",
    pinLabel: "PC ARENA",
    zone: "Zone 01",
    title: "240Hz PC Battle Arena",
    subtitle: "High-FPS PC Gaming Rigs",
    desc: "Equipped with mechanical keyboards, studio noise-isolating headsets, high-DPI optical mice, and high-back ergonomic gaming chairs for long competitive sessions.",
    image: "/images/arena/zone_pc_arena.jpg",
    specs: ["240Hz Fast-IPS", "RTX Architecture", "1 Gbps Leased Fiber"],
    coords: "Sector A • Northern Hub"
  },
  {
    id: "zone-02",
    pinNumber: "02",
    pinLabel: "PS5 4K",
    zone: "Zone 02",
    title: "PS5 4K OLED Lounge",
    subtitle: "Console Co-op & Couch Gaming",
    desc: "Designed for social multiplayer and story immersion. Play EA Sports FC 24, Mortal Kombat 1, Tekken 8, and God of War Ragnarök in 4K HDR fidelity.",
    image: "/images/arena/zone_ps5_lounge.jpg",
    specs: ["PlayStation 5", "4K HDR OLED", "DualSense Haptics"],
    coords: "Sector B • Eastern Lounge"
  },
  {
    id: "zone-03",
    pinNumber: "03",
    pinLabel: "FUEL CAFE",
    zone: "Zone 03",
    title: "The Fuel Cafe Counter",
    subtitle: "Artisan Beverages & Gourmet Food",
    desc: "Recharge your energy with roasted espresso blends, chilled iced mochas, thick shakes, crisp seasoned fries, and loaded sandwiches served straight to your station.",
    image: "/images/arena/zone_cafe_fuel.jpg",
    specs: ["Cold Brews & Shakes", "Fresh Gourmet Food", "Desk Delivery"],
    coords: "Sector C • Central Cafe Bar"
  },
  {
    id: "zone-04",
    pinNumber: "04",
    pinLabel: "VIP LAN",
    zone: "Zone 04",
    title: "VIP LAN & Squad Hub",
    subtitle: "Private 5v5 Squad Gaming",
    desc: "A dedicated team battle room tailored for 5v5 squad practice, LAN rivalries, private community matches, and uninterrupted team comms.",
    image: "/images/arena/zone_vip_lan.jpg",
    specs: ["5v5 Layout", "Low-Ping Routing", "Acoustic Insulation"],
    coords: "Sector D • Private Squad Bay"
  }
];

export default function AboutPage() {
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [zoomedZoneIndex, setZoomedZoneIndex] = useState<number | null>(null);

  // Esc key listener for zoom modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setZoomedZoneIndex(null);
        return;
      }
      if (zoomedZoneIndex !== null) {
        if (e.key === "ArrowRight") {
          setZoomedZoneIndex((prev) => (prev !== null ? (prev + 1) % zones.length : 0));
        } else if (e.key === "ArrowLeft") {
          setZoomedZoneIndex((prev) => (prev !== null ? (prev - 1 + zones.length) % zones.length : 0));
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [zoomedZoneIndex]);

  const currentZoomed = zoomedZoneIndex !== null ? zones[zoomedZoneIndex] : null;

  return (
    <main className="min-h-screen flex flex-col pt-0 bg-[#080C14] text-white relative overflow-hidden">
      
      {/* Executive Hero Banner */}
      <section className="relative h-[60vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arena/zone_pc_arena.jpg"
            alt="Clutch Gaming Cafe Arena"
            fill
            unoptimized
            className="object-cover brightness-[0.25] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/60 to-black/80" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 border border-[#00D2FF]/40 rounded-full text-[#00D2FF] text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase backdrop-blur-md bg-[#080C14]/80 shadow-[0_0_20px_rgba(0,210,255,0.25)]"
          >
            <Sparkles size={14} /> Trichy&apos;s Premier Gaming Lounge • Standard: ₹80 / Hour
          </motion.span>
          
          {/* Kinetic Word-by-Word Slide-In from Left */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white mb-6 italic tracking-tight drop-shadow-2xl">
            {"The Pursuit of Pure Performance".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.75, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-2 sm:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-slate-300 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Engineered from the ground up to deliver uncapped framerates, ultra-low latency, and luxury cafe comfort for gamers across Trichy.
          </motion.p>
        </div>
      </section>

      {/* Executive Key Metrics Bar */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 bg-[#0D131F] p-4 sm:p-6 md:p-8 rounded-[2rem] border border-slate-800 shadow-[0_15px_45px_rgba(0,0,0,0.8)]">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-[#080C14] border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-[#00D2FF] font-bold block mb-1">
                  {stat.value}
                </span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                  {stat.label}
                </h4>
              </div>
              <p className="text-[11px] text-slate-400 font-sans">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#080C14] relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <SectionHeading
                subtitle="Our Philosophy"
                title="Built by Passion, Driven by Performance"
                centered={false}
              />
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-300 text-base md:text-lg font-light leading-relaxed mb-4"
              >
                At Clutch Gaming Cafe, we believe gaming is a modern social craft that demands the finest hardware, instantaneous feedback, and an atmosphere of refined comfort.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-slate-400 leading-relaxed text-sm md:text-base font-light"
              >
                We established Clutch to give Trichy&apos;s gaming community a premier battleground. Whether you are running high-stakes multiplayer sessions with your squad, exploring expansive open-world campaigns in 4K, or enjoying gourmet cafe snacks between rounds, our facility is engineered to keep you in the zone.
              </motion.p>
            </div>

            {/* Ambient Headquarters Photo Card */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.8)] group border border-slate-800 hover:border-[#00D2FF]/50 transition-colors">
              <Image 
                src="/images/arena/zone_vip_lan.jpg" 
                alt="Clutch Gaming VIP Lounge" 
                fill 
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/30 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#00D2FF] font-bold block mb-1">
                    Samayapuram, Trichy • 1st Floor (Above KFC)
                  </span>
                  <p className="font-serif text-xl font-bold italic">
                    1st Floor (Above KFC), Samayapuram, Trichy
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Executive Quote & Guarantee Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-[#0D131F] text-white border border-slate-800 hover:border-[#00D2FF]/40 shadow-[0_15px_45px_rgba(0,0,0,0.8)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#00D2FF]/10 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#00D2FF]/15 border border-[#00D2FF]/40 text-[#00D2FF] flex items-center justify-center shrink-0 hidden sm:flex">
                <Quote size={28} />
              </div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                  &ldquo;Zero stutter, zero lag, zero compromises.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-[#00D2FF]" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-[#00D2FF]">
                    The Clutch Management
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,210,255,0.5)] active:scale-95 cursor-pointer"
              >
                <span>700+ Games Vault</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Continuous Kinetic Specs Ticker Strip */}
          <div className="mt-8 sm:mt-12 md:mt-16 overflow-hidden bg-[#0D131F] rounded-full sm:rounded-2xl border border-slate-800 py-2.5 sm:py-3.5 shadow-premium relative">
            
            <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-[#0D131F] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-[#0D131F] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 32, repeat: Infinity }}
                className="flex items-center gap-6 sm:gap-8 md:gap-10 whitespace-nowrap px-4 sm:px-6"
              >
                {[
                  "240Hz Fast-IPS Displays",
                  "RTX High-FPS PC Battle Rigs",
                  "1 Gbps Dedicated Low-Ping Fiber",
                  "PS5 4K 60FPS OLED Lounge",
                  "Sony DualSense Haptic Feedback",
                  "Ultra-Fast NVMe Gen4 Storage",
                  "15ms Stable Ping to Mumbai",
                  "₹80 / Hour Standard Rate",
                  "240Hz Fast-IPS Displays",
                  "RTX High-FPS PC Battle Rigs",
                  "1 Gbps Dedicated Low-Ping Fiber",
                  "PS5 4K 60FPS OLED Lounge",
                  "Sony DualSense Haptic Feedback",
                  "Ultra-Fast NVMe Gen4 Storage",
                  "15ms Stable Ping to Mumbai",
                  "₹80 / Hour Standard Rate"
                ].map((specItem, sI) => (
                  <React.Fragment key={sI}>
                    <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse shrink-0 shadow-[0_0_6px_#00D2FF]" />
                      <span>{specItem}</span>
                    </span>
                    <span className="text-[#00D2FF]/50 text-xs">•</span>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive CGC Core Circle & Pinned Arena Zones Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-[#080C14] relative z-10 border-t border-slate-800 overflow-hidden">
        
        {/* Subtle Radar Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#00D2FF]/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-dashed border-[#00D2FF]/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <SectionHeading
            subtitle="The Architecture"
            title="Explore Our Arena &amp; Zones"
          />

          <p className="text-center text-slate-400 text-sm max-w-xl mx-auto -mt-6 mb-16 font-light">
            An interconnected ecosystem designed for peak gaming performance and hospitality. Click any zone card to zoom into full high-definition view.
          </p>

          {/* Interactive Hub & Connected Nodes Container */}
          <div className="relative">

            {/* Desktop Center CGC Circle Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center justify-center pointer-events-auto">
              
              {/* Pulsing Outer Rings */}
              <div className="absolute w-52 h-52 rounded-full border border-[#00D2FF]/30 animate-ping opacity-20 pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-[#00D2FF]/40 animate-spin [animation-duration:35s] pointer-events-none" />

              {/* Central CGC Core Disc */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className="w-32 h-32 rounded-full bg-[#0D131F] border-4 border-[#00D2FF] shadow-[0_0_35px_rgba(0,210,255,0.4)] flex flex-col items-center justify-center text-center p-3 cursor-pointer group transition-all duration-300 relative z-20"
              >
                <div className="w-7 h-7 rounded-full bg-[#00D2FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] mb-0.5 group-hover:bg-[#00D2FF] group-hover:text-[#080C14] transition-colors">
                  <Flame size={14} />
                </div>
                <span className="font-serif font-bold text-base text-white tracking-wider leading-none">
                  CGC
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] font-extrabold text-[#00D2FF] mt-1">
                  Arena Core
                </span>
                <span className="text-[6.5px] text-white/60 tracking-widest mt-0.5">
                  4 ZONES • ₹80/HR
                </span>
              </motion.div>
            </div>

            {/* 4 Connected Pinned Zone Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-14">
              {zones.map((zoneItem, idx) => {
                const isHovered = hoveredZone === zoneItem.id;

                return (
                  <motion.div
                    key={zoneItem.id}
                    initial={{ opacity: 0, scale: 0.82, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ 
                      type: "spring",
                      stiffness: 240,
                      damping: 18,
                      mass: 0.7,
                      delay: (idx % 2) * 0.18 + Math.floor(idx / 2) * 0.12,
                    }}
                    onMouseEnter={() => setHoveredZone(zoneItem.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    onClick={() => setZoomedZoneIndex(idx)}
                    className={cn(
                      "max-w-[560px] w-full mx-auto bg-[#0D131F] rounded-2xl sm:rounded-[2.25rem] overflow-hidden border transition-all duration-500 group flex flex-col justify-between relative shadow-[0_10px_35px_rgba(0,0,0,0.6)] cursor-pointer",
                      isHovered ? "border-[#00D2FF] shadow-[0_15px_45px_rgba(0,210,255,0.25)] -translate-y-2" : "border-slate-800 hover:border-[#00D2FF]/60"
                    )}
                  >
                    {/* Zone Photo Frame with Click-to-Zoom Indicator */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080C14]">
                      <Image 
                        src={zoneItem.image} 
                        alt={zoneItem.title} 
                        fill 
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/30 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />
                      
                      {/* Zoom Trigger Button on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                        <div className="px-4 py-2 rounded-full bg-[#080C14]/90 text-[#00D2FF] border border-[#00D2FF]/60 shadow-[0_0_20px_rgba(0,210,255,0.5)] text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transform group-hover:scale-105 transition-transform">
                          <ZoomIn size={16} /> Click to Zoom Photo
                        </div>
                      </div>

                      {/* Interactive Connected Pin Indicator */}
                      <div className="absolute top-2.5 sm:top-3.5 left-2.5 sm:left-3.5 z-20 flex items-center gap-2">
                        <div className="flex items-center gap-2 bg-[#080C14]/95 border border-[#00D2FF]/50 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full shadow-lg backdrop-blur-md">
                          <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-[#00D2FF] animate-pulse shadow-[0_0_6px_#00D2FF]" />
                          <span className="text-[7.5px] sm:text-[8.5px] uppercase tracking-widest font-extrabold text-[#00D2FF]">
                            PIN {zoneItem.pinNumber} • {zoneItem.pinLabel}
                          </span>
                        </div>
                      </div>

                      {/* Sector Tag */}
                      <div className="absolute top-2.5 sm:top-3.5 right-2.5 sm:right-3.5 z-20">
                        <span className="text-[7.5px] sm:text-[8px] uppercase tracking-widest font-bold bg-[#080C14]/80 text-white/90 px-2 sm:px-2.5 py-0.5 rounded-full border border-slate-700 backdrop-blur-sm">
                          {zoneItem.coords}
                        </span>
                      </div>

                      {/* Title & Subtitle overlay on Photo */}
                      <div className="absolute bottom-2.5 sm:bottom-3.5 left-3.5 sm:left-5 right-3.5 sm:right-5 z-20">
                        <h3 className="text-lg sm:text-2xl font-serif text-white font-bold drop-shadow-md leading-tight group-hover:text-[#00D2FF] transition-colors line-clamp-1">
                          {zoneItem.title}
                        </h3>
                        <p className="text-[#00D2FF] text-[11px] sm:text-xs font-sans mt-0.5 font-semibold flex items-center gap-1.5">
                          <Radio size={11} className="text-[#00D2FF] shrink-0" />
                          {zoneItem.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Zone Details */}
                    <div className="p-4 sm:p-5 md:p-6 flex flex-col justify-between flex-1 bg-[#0D131F]">
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5 font-light line-clamp-3 sm:line-clamp-none">
                        {zoneItem.desc}
                      </p>

                      {/* Specs Tags */}
                      <div className="flex flex-wrap items-center justify-between gap-2.5 pt-3 border-t border-slate-800">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {zoneItem.specs.map((sp, sIdx) => (
                            <span key={sIdx} className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold bg-[#080C14] text-slate-300 px-2 sm:px-2.5 py-0.5 rounded-full border border-slate-800 shadow-xs">
                              {sp}
                            </span>
                          ))}
                        </div>
                        <div className="text-[8px] sm:text-[9px] uppercase tracking-widest font-bold text-[#00D2FF] flex items-center gap-1">
                          <Maximize2 size={10} /> Zoom HD
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile / Tablet Central Badge */}
            <div className="lg:hidden mt-10 flex flex-col items-center justify-center text-center">
              <div className="px-6 py-3 rounded-full bg-[#0D131F] border border-[#00D2FF]/50 shadow-lg text-white inline-flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-pulse" />
                <span className="font-serif font-bold text-sm">CGC Arena Core Hub</span>
                <span className="text-[10px] uppercase tracking-widest text-[#00D2FF] font-bold">4 Linked Zones</span>
              </div>
            </div>

          </div>

          {/* Visitor Call to Action Strip */}
          <div className="mt-12 sm:mt-16 md:mt-20 p-6 sm:p-10 md:p-12 bg-[#0D131F] rounded-[2rem] sm:rounded-[2.5rem] text-white border border-slate-800 hover:border-[#00D2FF]/50 shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,210,255,0.22)] hover:-translate-y-1 relative overflow-hidden transition-all duration-500 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 text-center lg:text-left">
            
            <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700" style={{ background: "radial-gradient(circle at top right, rgba(0,210,255,0.2) 0%, transparent 65%)" }} />
            <div className="absolute bottom-0 left-0 w-52 h-52 pointer-events-none opacity-20" style={{ background: "radial-gradient(circle at bottom left, rgba(0,210,255,0.15) 0%, transparent 65%)" }} />

            <div className="space-y-3 sm:space-y-4 relative z-10 max-w-xl">
              {/* Top Live Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_6px_#00D2FF] animate-pulse" />
                <span>Tournament Architecture • Zero Throttling</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white leading-tight">
                Built for Uncapped FPS &amp; <span className="text-[#00D2FF]">Thermal Dominance</span>
              </h3>

              <p className="text-slate-300 text-xs sm:text-sm md:text-base font-light leading-relaxed">
                Engineered with 240Hz Fast-IPS panels, high-grade RTX architecture, optical mechanical switches, and dual-zone industrial climate control for zero frame drops.
              </p>

              {/* Hardware-Specific Info Tags */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
                <span className="px-3 py-1.5 rounded-lg bg-[#080C14] border border-slate-800 text-[10px] sm:text-xs text-white/90 font-medium flex items-center gap-1.5">
                  <Monitor size={13} className="text-[#00D2FF]" /> 240Hz Fast-IPS (0.5ms GTG)
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#080C14] border border-slate-800 text-[10px] sm:text-xs text-white/90 font-medium flex items-center gap-1.5">
                  <Cpu size={13} className="text-[#00D2FF]" /> High-Performance RTX Rigs
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#080C14] border border-slate-800 text-[10px] sm:text-xs text-white/90 font-medium flex items-center gap-1.5">
                  <Gamepad2 size={13} className="text-[#00D2FF]" /> PS5 4K OLED HDR Lounge
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-[#080C14] border border-slate-800 text-[10px] sm:text-xs text-[#00D2FF] font-bold">
                  Flat ₹80 / Hr
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0 justify-center w-full sm:w-auto relative z-10">
              <Link 
                href="/contact"
                className="w-full sm:w-auto px-7 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest text-center hover:bg-white hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin size={15} />
                <span>Get Directions</span>
              </Link>
              <a 
                href="tel:+918489800905"
                className="w-full sm:w-auto px-7 py-3.5 border border-slate-700 bg-[#080C14]/90 text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone size={15} className="text-[#00D2FF]" />
                <span>Direct Call</span>
              </a>
            </div>

          </div>

        </div>
      </section>

      {/* Compact High-Definition Click-to-Zoom Lightbox Modal */}
      <AnimatePresence>
        {currentZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md"
            onClick={() => setZoomedZoneIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[720px] bg-[#0D131F] border border-[#00D2FF]/40 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
            >
              {/* Modal Header Bar */}
              <div className="px-5 py-3.5 border-b border-slate-800 flex items-center justify-between bg-[#080C14]">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] shrink-0 animate-pulse shadow-[0_0_6px_#00D2FF]" />
                  <span className="text-xs uppercase tracking-widest font-extrabold text-[#00D2FF] truncate">
                    CLUTCH GAMING CAFE • {currentZoomed.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    onClick={() => setZoomedZoneIndex(null)}
                    className="px-3 py-1 rounded-full bg-[#0D131F] hover:bg-[#00D2FF] hover:text-[#080C14] text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border border-slate-700"
                    aria-label="Close zoomed view"
                  >
                    <span>Close</span>
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Zoomed HD Image Frame */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={currentZoomed.image}
                  alt={currentZoomed.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedZoneIndex((prev) => (prev !== null ? (prev - 1 + zones.length) % zones.length : 0));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-[#00D2FF] hover:text-[#080C14] text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer z-10"
                  aria-label="Previous Zone"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedZoneIndex((prev) => (prev !== null ? (prev + 1) % zones.length : 0));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/75 hover:bg-[#00D2FF] hover:text-[#080C14] text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer z-10"
                  aria-label="Next Zone"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Modal Info Footer */}
              <div className="p-4 sm:p-5 bg-[#080C14] border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-[#00D2FF] bg-[#0D131F] px-2 py-0.5 rounded-full border border-[#00D2FF]/30">
                      PIN {currentZoomed.pinNumber}
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                      {currentZoomed.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light line-clamp-1 sm:line-clamp-2">
                    {currentZoomed.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {currentZoomed.specs.map((sp, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-wider font-bold bg-[#0D131F] text-[#00D2FF] px-2.5 py-0.5 rounded-full border border-slate-800">
                      {sp}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </main>
  );
}
