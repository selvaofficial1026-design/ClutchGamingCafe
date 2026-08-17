"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import MenuItemCard from "@/components/MenuItemCard";
import SectionHeading from "@/components/SectionHeading";
import VideoModal from "@/components/VideoModal";
import { Star, User2, MapPin, Phone, Clock, Zap, Monitor, Gamepad2, Flame, Navigation, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const featuredItems = [
  {
    name: "EA Sports FC 24 (FIFA)",
    description: "Experience 4K HyperMotionV football action on our PS5 OLED lounge with DualSense haptic feedback. (₹100/hr • Extra Controller: ₹80)",
    price: "₹100 / hr",
    image: "/images/games/fifa.jpg",
    category: "PS5 4K Gaming",
    tag: "Most Popular",
    youtubeId: "vLj-27T-SEQ"
  },
  {
    name: "Grand Theft Auto V & VI",
    description: "Jump into high-stakes GTA Online heists, custom stunts, and get ready for Vice City on our Sony PlayStation 5 & PS4 setups.",
    price: "₹80 / hr",
    image: "/images/games/gta5.jpg",
    category: "PS5 & PS4 Gaming",
    tag: "High FPS",
    youtubeId: "QkkoHAzjnUs"
  },
  {
    name: "God of War Ragnarök",
    description: "Embark on an epic mythic journey across the Nine Realms with Kratos and Atreus in glorious 4K 60FPS fidelity.",
    price: "₹100 / hr",
    image: "/images/games/godofwar.jpg",
    category: "PS5 Exclusive",
    tag: "4K HDR",
    youtubeId: "hfJ4Km46A-0"
  }
];

const testimonials = [
  {
    name: "Sanjay & Squad",
    role: "Weekend FIFA & PS5 Crew",
    quote: "Best 4-player gaming spot in Trichy. The PS5 4K OLED setup, ice-cold AC, and smooth vibes make weekend sessions unmatched."
  },
  {
    name: "Karthik R.",
    role: "Competitive Console Gamer",
    quote: "120Hz Fast-IPS displays and dedicated fiber ping give a proper competitive edge. Top-tier PlayStation console setups."
  }
];

const tickerHighlights = [
  "PS5 4K: ₹100 / HOUR",
  "PS4 HD: ₹80 / HOUR",
  "PS5 CONTROLLER: ₹80",
  "PS4 CONTROLLER: ₹60",
  "SONY PS5 4K 120HZ",
  "SONY PS4 HD GAMING",
  "EA SPORTS FC 24 & FIFA",
  "WWE 2K26 MULTIPLAYER",
  "IT TAKES TWO CO-OP",
  "GTA V & GTA VI READY",
  "GOD OF WAR RAGNARÖK",
  "MORTAL KOMBAT 11",
  "FORZA HORIZON 5",
  "120HZ FAST-IPS DISPLAYS",
  "ULTRA-LOW PING DEDICATED FIBER",
  "CHILLED JUICES & LAYS SNACKS"
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col pt-0 bg-[#080C14] text-white relative">
      <Hero />

      {/* Transparent Rate Card Banner */}
      <section className="py-10 sm:py-12 bg-[#0D131F] text-white relative z-10 border-y border-[#00D2FF]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8">
          <div className="flex items-center gap-4 sm:gap-5 text-center md:text-left">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#00D2FF]/15 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shrink-0 hidden sm:flex shadow-[0_0_20px_rgba(0,210,255,0.3)]">
              <Zap size={30} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#00D2FF] font-bold block mb-1">
                Transparent Hourly Rate Card
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic text-white">
                PS5: <span className="text-[#00D2FF] font-sans not-italic font-bold">₹100</span> • PS4: <span className="text-[#00D2FF] font-sans not-italic font-bold">₹80</span> / Hr
              </h2>
              <span className="text-[11px] text-slate-400 font-light mt-0.5 block">
                Extra Controller: PS5 ₹80 • PS4 ₹60 | Zero Hidden Charges
              </span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-semibold text-white/90">
            <div className="flex items-center gap-2 bg-[#080C14] border border-slate-700 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs">
              <Gamepad2 size={15} className="text-[#00D2FF] shrink-0" /> PS5 4K: ₹100/hr
            </div>
            <div className="flex items-center gap-2 bg-[#080C14] border border-slate-700 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs">
              <Gamepad2 size={15} className="text-[#00D2FF] shrink-0" /> PS4 HD: ₹80/hr
            </div>
            <div className="flex items-center gap-2 bg-[#080C14] border border-slate-700 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-xs">
              <Monitor size={15} className="text-[#00D2FF] shrink-0" /> 120Hz Fast-IPS Displays
            </div>
          </div>
        </div>
      </section>

      {/* Featured Arena & Games Showcase */}
      <section className="py-16 sm:py-24 md:py-32 px-4 sm:px-6 md:px-12 bg-gradient-to-b from-[#080C14] via-[#0D131F]/60 to-[#080C14] relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Highlights"
            title="Featured Games &amp; Battle Stations"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {featuredItems.map((item, index) => (
              <MenuItemCard 
                key={item.name} 
                index={index} 
                {...item} 
                onPlay={(id) => setActiveVideo(id)}
              />
            ))}
          </div>
          <div className="mt-12 sm:mt-16 md:mt-20 text-center px-2">
            <Link
              href="/portfolio"
              className="inline-block w-full sm:w-auto px-6 sm:px-12 py-4 sm:py-5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-[0.18em] sm:tracking-[0.25em] hover:bg-white transition-all shadow-[0_10px_35px_rgba(0,210,255,0.4)] hover:shadow-[0_15px_45px_rgba(0,210,255,0.7)] active:scale-95 cursor-pointer text-center"
            >
              Explore Full Game Vault
            </Link>
          </div>
        </div>
      </section>

      {/* Condensed About Section */}
      <section id="about" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-[#080C14] overflow-hidden relative z-10 border-t border-slate-800">
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-[10px] uppercase tracking-[0.5em] text-[#00D2FF] font-bold mb-4 block">Our Philosophy</span>
           <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white italic leading-tight mb-6">
             Built by Gamers, for Gamers
           </h2>
           <p className="text-slate-300 leading-relaxed text-base sm:text-lg font-light max-w-2xl mx-auto mb-10">
             Clutch Gaming Cafe was created to bring high-end PlayStation console gaming, 120Hz Fast-IPS displays, low-latency dedicated optical fiber, and premium lounge comfort directly to gamers in Trichy.
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-6 border-t border-slate-800">
             <div className="p-4 rounded-2xl bg-[#0D131F] border border-slate-800">
               <h4 className="text-2xl sm:text-3xl font-serif text-[#00D2FF] italic mb-1">₹100 / ₹80</h4>
               <p className="text-[9.5px] uppercase tracking-widest text-slate-400 font-bold">PS5 / PS4 Rates</p>
             </div>
             <div className="p-4 rounded-2xl bg-[#0D131F] border border-slate-800">
               <h4 className="text-2xl sm:text-3xl font-serif text-[#00D2FF] italic mb-1">120Hz</h4>
               <p className="text-[9.5px] uppercase tracking-widest text-slate-400 font-bold">Fast-IPS Panels</p>
             </div>
             <div className="p-4 rounded-2xl bg-[#0D131F] border border-slate-800">
               <h4 className="text-2xl sm:text-3xl font-serif text-[#00D2FF] italic mb-1">Low Ping</h4>
               <p className="text-[9.5px] uppercase tracking-widest text-slate-400 font-bold">Dedicated Fiber</p>
             </div>
             <div className="p-4 rounded-2xl bg-[#0D131F] border border-slate-800">
               <h4 className="text-2xl sm:text-3xl font-serif text-[#00D2FF] italic mb-1">PS5 &amp; PS4</h4>
               <p className="text-[9.5px] uppercase tracking-widest text-slate-400 font-bold">4K OLED Lounge</p>
             </div>
           </div>
        </div>
      </section>

      {/* Continuous Capabilities Ticker */}
      <section className="py-8 sm:py-10 bg-[#0D131F] overflow-hidden border-y border-slate-800">
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex items-center gap-10 sm:gap-12 whitespace-nowrap px-6"
          >
            {[...tickerHighlights, ...tickerHighlights].map((item, i) => (
              <React.Fragment key={i}>
                <span className="text-base sm:text-xl md:text-2xl font-bold font-serif italic text-white tracking-widest flex items-center gap-2">
                  <Flame size={16} className="text-[#00D2FF]" /> {item}
                </span>
                <span className="text-[#00D2FF] text-2xl opacity-60">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Parallax Divider */}
      <section className="relative h-[45vh] md:h-[55vh] overflow-hidden">
        <motion.div
          initial={{ opacity: 0.9 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 will-change-transform"
        >
          <Image
            src="/images/hero_cyber_arena.jpg"
            alt="Clutch Gaming Arena Ambience"
            fill
            quality={80}
            sizes="100vw"
            className="object-cover brightness-[0.25]"
          />
          <div className="absolute inset-0 bg-[#080C14]/60" />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-[#00D2FF] font-bold mb-4 block">The Clutch Standard</span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white italic mb-6">High FPS. Low Latency. Pure Passion.</h2>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_25px_rgba(0,210,255,0.6)] active:scale-95 cursor-pointer"
            >
              Visit Us in Trichy
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-14 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-[#080C14] relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="Gamer Community"
            title="Loved by Trichy's Gamers"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-10">
            {testimonials.map((test, i) => (
              <motion.div 
                key={test.name}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ y: -6, scale: 1.015 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-[#0D131F] p-5 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-white flex flex-col justify-between shadow-[0_10px_35px_rgba(0,0,0,0.7)] hover:shadow-[0_15px_40px_rgba(0,210,255,0.22)] transition-all relative overflow-hidden group border border-slate-800 hover:border-[#00D2FF]/50"
              >
                {/* Subtle Ambient Aura */}
                <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-[#00D2FF]/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-[#00D2FF]/20 transition-colors duration-500 blur-[40px] pointer-events-none" />
                
                {/* Top Row: 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
                  <div className="flex items-center gap-1 text-[#00D2FF]">
                    {[...Array(5)].map((_, sI) => (
                      <Star key={sI} size={13} fill="currentColor" className="drop-shadow-[0_0_8px_#00D2FF]" />
                    ))}
                  </div>
                  <span className="text-[8.5px] uppercase tracking-wider font-bold text-[#00D2FF] bg-[#080C14] border border-[#00D2FF]/30 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    5.0 ★ Verified
                  </span>
                </div>
                
                {/* Compact Quote Text */}
                <p className="text-sm sm:text-base md:text-lg font-serif leading-snug sm:leading-relaxed mb-4 sm:mb-6 italic relative z-10 text-white drop-shadow-sm">
                  &ldquo;{test.quote}&rdquo;
                </p>
                
                {/* User Info Footer */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-slate-800">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-[#00D2FF]/20 border border-[#00D2FF]/40 flex items-center justify-center text-[#00D2FF] shadow-sm group-hover:bg-[#00D2FF] group-hover:text-[#080C14] transition-colors duration-500 shrink-0">
                      <User2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{test.name}</h4>
                      <p className="text-[#00D2FF] font-sans text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest">{test.role}</p>
                    </div>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-slate-400 font-bold hidden xs:inline-block">
                    Trichy Arena
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Operating Hours Action Card */}
      <section id="location" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 bg-gradient-to-t from-[#0D131F] to-[#080C14] relative z-10 border-t border-slate-800">
        <div className="group max-w-5xl mx-auto rounded-2xl sm:rounded-[2.25rem] bg-[#0D131F] text-white p-5 sm:p-8 md:p-10 relative overflow-hidden shadow-[0_15px_45px_rgba(0,0,0,0.8)] hover:shadow-[0_20px_50px_rgba(0,210,255,0.25)] hover:-translate-y-1 border border-slate-800 hover:border-[#00D2FF]/50 transition-all duration-500">
          
          {/* Subtle Ambient Glow */}
          <div 
            className="absolute -right-10 -bottom-10 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700" 
            style={{ background: "radial-gradient(circle at bottom right, rgba(0,210,255,0.2) 0%, transparent 65%)" }} 
          />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            
            {/* Info Section */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-3.5"
            >
              {/* Live Status Pill */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/30 text-[#00D2FF] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] animate-pulse" />
                <span>Prime Highway Landmark • Direct Walk-In</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif italic text-white leading-tight">
                Visit Clutch Gaming Cafe <span className="text-[#00D2FF] font-sans not-italic text-xs sm:text-sm font-bold uppercase tracking-wider block sm:inline-block sm:ml-2">Samayapuram, Trichy</span>
              </h2>

              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Located right on the Trichy-Chennai National Highway (1st Floor Above KFC). Step in anytime for Sony PlayStation 5 (4K 120Hz) and PlayStation 4 console gaming lounge.
              </p>

              {/* 4 Location & Visit Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center shrink-0 text-[#00D2FF]">
                    <MapPin size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#00D2FF] block">Landmark</span>
                    <span className="text-[11px] sm:text-xs text-white/95 font-medium">1st Floor (Above KFC), Samayapuram</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center shrink-0 text-[#00D2FF]">
                    <Clock size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#00D2FF] block">Schedule</span>
                    <span className="text-[11px] sm:text-xs text-white/95 font-medium">10:00 AM – 11:00 PM (All 7 Days)</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center shrink-0 text-[#00D2FF]">
                    <Navigation size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#00D2FF] block">Accessibility</span>
                    <span className="text-[11px] sm:text-xs text-white/95 font-medium">Highway Frontage &amp; Free Parking</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#080C14] border border-slate-800 group-hover:border-[#00D2FF]/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center shrink-0 text-[#00D2FF]">
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#00D2FF] block">Pricing</span>
                    <span className="text-[11px] sm:text-xs text-white/95 font-medium">PS5: ₹100/hr • PS4: ₹80/hr</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons Container */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center pt-2 sm:pt-0">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1st+Floor+No+21%2FB+Above+KFC+Trichy-Chennai+Highway+Samayapuram+Tiruchirappalli+Tamil+Nadu+621112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest text-center hover:bg-white hover:shadow-[0_0_25px_rgba(0,210,255,0.7)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin size={15} />
                <span>Get Google Maps Route</span>
              </a>
              <a 
                href="tel:+918489800905" 
                className="w-full py-3.5 px-6 border border-slate-700 bg-[#080C14]/90 text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Phone size={15} className="text-[#00D2FF]" /> 
                <span>Direct Call</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={!!activeVideo} 
        videoId={activeVideo} 
        onClose={() => setActiveVideo(null)} 
      />
    </main>
  );
}
