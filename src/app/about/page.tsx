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
  Target
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
    <main className="min-h-screen flex flex-col pt-0 bg-background relative overflow-hidden">
      
      {/* Executive Hero Banner */}
      <section className="relative h-[60vh] md:h-[65vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arena/zone_pc_arena.jpg"
            alt="Clutch Gaming Cafe Arena"
            fill
            unoptimized
            className="object-cover brightness-[0.3] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 mb-6 border border-cappuccino/40 rounded-full text-cappuccino text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase backdrop-blur-md bg-black/40 shadow-lg"
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
            className="text-white/80 text-sm sm:text-base md:text-lg font-light max-w-2xl mx-auto leading-relaxed"
          >
            Engineered from the ground up to deliver uncompromising framerates, ultra-low latency, and luxury cafe comfort for gamers across Trichy.
          </motion.p>
        </div>
      </section>

      {/* Executive Key Metrics Bar */}
      <section className="relative z-20 -mt-10 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 bg-white p-4 sm:p-6 md:p-8 rounded-[2rem] border border-cream shadow-premium">
          {keyStats.map((stat, idx) => (
            <div key={idx} className="p-3.5 sm:p-4 rounded-2xl bg-background border border-cream/50 flex flex-col justify-between">
              <div>
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-coffee-dark font-bold block mb-1">
                  {stat.value}
                </span>
                <h4 className="text-xs font-bold uppercase tracking-wider text-cappuccino mb-1">
                  {stat.label}
                </h4>
              </div>
              <p className="text-[11px] text-coffee-dark/60 font-sans">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-background relative z-10">
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
                className="text-coffee-dark/80 text-base md:text-lg font-light leading-relaxed mb-4"
              >
                At Clutch Gaming Cafe, we believe gaming is a modern social craft that demands the finest hardware, instantaneous feedback, and an atmosphere of refined comfort.
              </motion.p>
              <motion.p 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="text-coffee-dark/65 leading-relaxed text-sm md:text-base font-light"
              >
                We established Clutch to give Trichy&apos;s gaming community a premier battleground. Whether you are running high-stakes multiplayer sessions with your squad, exploring expansive open-world campaigns in 4K, or enjoying gourmet cafe snacks between rounds, our facility is engineered to keep you in the zone.
              </motion.p>
            </div>

            {/* Ambient Headquarters Photo Card */}
            <div className="lg:col-span-5 relative aspect-[16/11] rounded-[2.5rem] overflow-hidden shadow-premium group border border-cream">
              <Image 
                src="/images/arena/zone_vip_lan.jpg" 
                alt="Clutch Gaming VIP Lounge" 
                fill 
                unoptimized
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/90 via-coffee-dark/20 to-transparent flex items-end p-6 md:p-8">
                <div className="text-white">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-cappuccino font-bold block mb-1">
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
            className="mt-16 p-8 md:p-12 rounded-[2.5rem] bg-coffee-dark text-white border border-cappuccino/30 shadow-premium relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-cappuccino/10 rounded-full blur-[90px] pointer-events-none" />
            
            <div className="flex items-start gap-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-cappuccino/20 border border-cappuccino/40 text-cappuccino flex items-center justify-center shrink-0 hidden sm:flex">
                <Quote size={28} />
              </div>
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                  &ldquo;Zero stutter, zero lag, zero compromises.&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-cappuccino" />
                  <span className="text-[11px] uppercase tracking-[0.25em] font-bold text-cappuccino">
                    The Clutch Management
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-10 shrink-0">
              <Link 
                href="/portfolio"
                className="px-8 py-4 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center gap-2 shadow-lg active:scale-95 cursor-pointer"
              >
                <span>700+ Games Vault</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* Continuous Kinetic Specs Ticker Strip */}
          <div className="mt-16 overflow-hidden bg-coffee-dark rounded-2xl border border-cappuccino/30 py-4 shadow-premium">
            <div className="flex w-max">
              <motion.div
                animate={{ x: ["0%", "-50%"] }}
                transition={{ ease: "linear", duration: 25, repeat: Infinity }}
                className="flex items-center gap-10 whitespace-nowrap px-6"
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
                    <span className="text-xs md:text-sm font-bold uppercase tracking-[0.25em] text-white flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cappuccino animate-pulse" />
                      {specItem}
                    </span>
                    <span className="text-cappuccino/60 text-xs">•</span>
                  </React.Fragment>
                ))}
              </motion.div>
            </div>
          </div>

        </div>
      </section>

      {/* Interactive CGC Core Circle & Pinned Arena Zones Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white relative z-10 border-t border-cream overflow-hidden">
        
        {/* Subtle Radar Background Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-cappuccino/15" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full border border-dashed border-cappuccino/20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          <SectionHeading
            subtitle="The Architecture"
            title="Explore Our Arena &amp; Zones"
          />

          <p className="text-center text-coffee-dark/60 text-sm max-w-xl mx-auto -mt-6 mb-16 font-light">
            An interconnected ecosystem designed for peak gaming performance and hospitality. Click any zone card to zoom into full high-definition view.
          </p>

          {/* Interactive Hub & Connected Nodes Container */}
          <div className="relative">

            {/* Desktop Center CGC Circle Badge */}
            <div className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 flex-col items-center justify-center pointer-events-auto">
              
              {/* Pulsing Outer Rings */}
              <div className="absolute w-52 h-52 rounded-full border border-cappuccino/30 animate-ping opacity-20 pointer-events-none" />
              <div className="absolute w-44 h-44 rounded-full border-2 border-dashed border-cappuccino/40 animate-spin [animation-duration:35s] pointer-events-none" />

              {/* Central CGC Core Disc */}
              <motion.div 
                whileHover={{ scale: 1.08 }}
                className="w-32 h-32 rounded-full bg-coffee-dark border-4 border-cappuccino shadow-[0_0_35px_rgba(197,160,89,0.35)] flex flex-col items-center justify-center text-center p-3 cursor-pointer group transition-all duration-300 relative z-20"
              >
                <div className="w-7 h-7 rounded-full bg-cappuccino/20 border border-cappuccino/40 flex items-center justify-center text-cappuccino mb-0.5 group-hover:bg-cappuccino group-hover:text-coffee-dark transition-colors">
                  <Flame size={14} />
                </div>
                <span className="font-serif font-bold text-base text-white tracking-wider leading-none">
                  CGC
                </span>
                <span className="text-[7px] uppercase tracking-[0.2em] font-extrabold text-cappuccino mt-1">
                  Arena Core
                </span>
                <span className="text-[6.5px] text-white/50 tracking-widest mt-0.5">
                  4 ZONES • ₹80/HR
                </span>
              </motion.div>
            </div>

            {/* 4 Connected Pinned Zone Cards Grid with Staggered 1-by-1 Pop Up */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-20 lg:gap-y-14">
              {zones.map((zoneItem, idx) => {
                const isHovered = hoveredZone === zoneItem.id;

                return (
                  <motion.div
                    key={zoneItem.id}
                    initial={{ opacity: 0, scale: 0.88, y: 35 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: idx * 0.18, 
                      ease: [0.22, 1, 0.36, 1] 
                    }}
                    onMouseEnter={() => setHoveredZone(zoneItem.id)}
                    onMouseLeave={() => setHoveredZone(null)}
                    onClick={() => setZoomedZoneIndex(idx)}
                    className={cn(
                      "max-w-[560px] w-full mx-auto bg-background rounded-[2.25rem] overflow-hidden border transition-all duration-500 group flex flex-col justify-between relative shadow-sm cursor-pointer",
                      isHovered ? "border-cappuccino shadow-2xl -translate-y-2" : "border-cream hover:border-cappuccino/60 hover:shadow-premium"
                    )}
                  >
                    {/* Zone Photo Frame with Click-to-Zoom Indicator */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-coffee-dark">
                      <Image 
                        src={zoneItem.image} 
                        alt={zoneItem.title} 
                        fill 
                        unoptimized
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/95 via-coffee-dark/25 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                      
                      {/* Zoom Trigger Button on Hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30">
                        <div className="px-4 py-2 rounded-full bg-coffee-dark/90 text-cappuccino border border-cappuccino/60 shadow-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 backdrop-blur-md transform group-hover:scale-105 transition-transform">
                          <ZoomIn size={16} /> Click to Zoom Photo
                        </div>
                      </div>

                      {/* Interactive Connected Pin Indicator */}
                      <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2">
                        <div className="flex items-center gap-2 bg-coffee-dark/95 border border-cappuccino/60 px-3 py-1 rounded-full shadow-lg backdrop-blur-md">
                          <span className="w-2 h-2 rounded-full bg-cappuccino animate-pulse" />
                          <span className="text-[8.5px] uppercase tracking-widest font-extrabold text-cappuccino">
                            PIN {zoneItem.pinNumber} • {zoneItem.pinLabel}
                          </span>
                        </div>
                      </div>

                      {/* Sector Tag */}
                      <div className="absolute top-3.5 right-3.5 z-20">
                        <span className="text-[8px] uppercase tracking-widest font-bold bg-black/60 text-white/80 px-2.5 py-0.5 rounded-full border border-white/10 backdrop-blur-sm">
                          {zoneItem.coords}
                        </span>
                      </div>

                      {/* Title & Subtitle overlay on Photo */}
                      <div className="absolute bottom-3.5 left-5 right-5 z-20">
                        <h3 className="text-xl sm:text-2xl font-serif text-white font-bold drop-shadow-md leading-tight group-hover:text-cappuccino transition-colors">
                          {zoneItem.title}
                        </h3>
                        <p className="text-cappuccino/90 text-xs font-sans mt-0.5 font-semibold flex items-center gap-1.5">
                          <Radio size={12} className="text-cappuccino shrink-0" />
                          {zoneItem.subtitle}
                        </p>
                      </div>
                    </div>

                    {/* Zone Details & Pinned Circuit Info */}
                    <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                      <p className="text-coffee-dark/70 text-xs sm:text-sm leading-relaxed mb-5 font-light">
                        {zoneItem.desc}
                      </p>

                      {/* Specs Tags & Pinned Status */}
                      <div className="flex flex-wrap items-center justify-between gap-3 pt-3.5 border-t border-cream/80">
                        <div className="flex flex-wrap items-center gap-1.5">
                          {zoneItem.specs.map((sp, sIdx) => (
                            <span key={sIdx} className="text-[9px] uppercase tracking-wider font-bold bg-white text-coffee-dark/80 px-2.5 py-0.5 rounded-full border border-cream shadow-xs">
                              {sp}
                            </span>
                          ))}
                        </div>
                        <div className="text-[9px] uppercase tracking-widest font-bold text-cappuccino flex items-center gap-1">
                          <Maximize2 size={11} /> Zoom HD
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile / Tablet Central Badge */}
            <div className="lg:hidden mt-10 flex flex-col items-center justify-center text-center">
              <div className="px-6 py-3 rounded-full bg-coffee-dark border border-cappuccino/50 shadow-lg text-white inline-flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-cappuccino animate-pulse" />
                <span className="font-serif font-bold text-sm">CGC Arena Core Hub</span>
                <span className="text-[10px] uppercase tracking-widest text-cappuccino font-bold">4 Linked Zones</span>
              </div>
            </div>

          </div>

          {/* Visitor Call to Action Strip */}
          <div className="mt-20 p-10 md:p-14 bg-coffee-dark rounded-[2.5rem] text-white shadow-premium relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cappuccino font-bold">
                Direct Walk-In Sanctuary
              </span>
              <h3 className="text-2xl md:text-4xl font-serif italic text-white">
                Ready to Experience Clutch Gaming Cafe?
              </h3>
              <p className="text-white/70 text-sm max-w-xl font-light">
                Open 7 days a week (10:00 AM – 11:00 PM). ₹80 per hour with 700+ titles ready to play at 1st Floor (Above KFC), Samayapuram, Trichy.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 shrink-0 justify-center">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 cursor-pointer"
              >
                Get Directions
              </Link>
              <Link 
                href="/portfolio"
                className="px-8 py-4 border border-white/30 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white/10 transition-all cursor-pointer"
              >
                700+ Games Vault
              </Link>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
            onClick={() => setZoomedZoneIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 15 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[720px] bg-coffee-dark border border-cappuccino/50 rounded-3xl overflow-hidden shadow-2xl text-white flex flex-col"
            >
              {/* Modal Header Bar with Clutch Gaming Cafe Branding & Close Button */}
              <div className="px-5 py-3.5 border-b border-cappuccino/20 flex items-center justify-between bg-black/50">
                <div className="flex items-center gap-2.5 min-w-0 pr-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-cappuccino shrink-0 animate-pulse" />
                  <span className="text-xs uppercase tracking-widest font-extrabold text-cappuccino truncate">
                    Clutch Gaming Cafe • {currentZoomed.title}
                  </span>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[8.5px] uppercase tracking-widest text-cappuccino font-bold bg-white/10 px-2.5 py-1 rounded-full border border-cappuccino/30 hidden sm:inline">
                    Clutch Gaming Cafe
                  </span>
                  <button
                    onClick={() => setZoomedZoneIndex(null)}
                    className="px-3 py-1 rounded-full bg-white/10 hover:bg-cappuccino hover:text-coffee-dark text-white text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 transition-all cursor-pointer border border-white/10"
                    aria-label="Close zoomed view"
                  >
                    <span>Close</span>
                    <X size={14} />
                  </button>
                </div>
              </div>

              {/* Zoomed HD Image Frame with Navigation Arrows */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black flex items-center justify-center">
                <Image
                  src={currentZoomed.image}
                  alt={currentZoomed.title}
                  fill
                  unoptimized
                  priority
                  className="object-cover"
                />

                {/* Left Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedZoneIndex((prev) => (prev !== null ? (prev - 1 + zones.length) % zones.length : 0));
                  }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/65 hover:bg-cappuccino hover:text-coffee-dark text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer z-10"
                  aria-label="Previous Zone"
                >
                  <ChevronLeft size={18} />
                </button>

                {/* Right Arrow */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomedZoneIndex((prev) => (prev !== null ? (prev + 1) % zones.length : 0));
                  }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/65 hover:bg-cappuccino hover:text-coffee-dark text-white flex items-center justify-center border border-white/20 shadow-lg transition-all cursor-pointer z-10"
                  aria-label="Next Zone"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Modal Info Footer */}
              <div className="p-4 sm:p-5 bg-coffee-dark/95 border-t border-cappuccino/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-[9px] uppercase tracking-widest font-extrabold text-cappuccino bg-white/10 px-2 py-0.5 rounded-full border border-cappuccino/30">
                      PIN {currentZoomed.pinNumber}
                    </span>
                    <h4 className="text-base sm:text-lg font-serif font-bold text-white leading-tight">
                      {currentZoomed.title}
                    </h4>
                  </div>
                  <p className="text-xs text-white/70 font-light line-clamp-1 sm:line-clamp-2">
                    {currentZoomed.desc}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 shrink-0">
                  {currentZoomed.specs.map((sp, idx) => (
                    <span key={idx} className="text-[9px] uppercase tracking-wider font-bold bg-white/10 text-cappuccino px-2.5 py-0.5 rounded-full border border-cappuccino/30">
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
