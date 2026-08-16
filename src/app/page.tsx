"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import MenuItemCard from "@/components/MenuItemCard";
import SectionHeading from "@/components/SectionHeading";
import VideoModal from "@/components/VideoModal";
import { Star, User2, MapPin, Phone, Clock, Zap, Monitor, Gamepad2, ShieldCheck, Flame, Trophy, Play, Quote, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const featuredItems = [
  {
    name: "EA Sports FC 24 (FIFA)",
    description: "Experience 4K HyperMotionV football action on our PS5 OLED lounge with DualSense haptic feedback. (₹80/hr)",
    price: "₹80 / hr",
    image: "/images/games/fifa.jpg",
    category: "PS5 4K Gaming",
    tag: "Most Popular",
    youtubeId: "vLj-27T-SEQ"
  },
  {
    name: "Grand Theft Auto V & VI",
    description: "Jump into high-stakes GTA Online heists, custom RP servers, and get ready for Vice City on our 240Hz RTX battle stations.",
    price: "₹80 / hr",
    image: "/images/games/gta5.jpg",
    category: "PC Battle Arena",
    tag: "High FPS",
    youtubeId: "QkkoHAzjnUs"
  },
  {
    name: "God of War Ragnarök",
    description: "Embark on an epic mythic journey across the Nine Realms with Kratos and Atreus in glorious 4K 60FPS fidelity.",
    price: "₹80 / hr",
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
    role: "Competitive FPS Gamer",
    quote: "240Hz Fast-IPS panels and dedicated fiber ping give a proper competitive edge. Top-tier PC rigs at just ₹80/hr."
  }
];

const tickerHighlights = [
  "₹80 / HOUR STANDARD RATE",
  "EA SPORTS FC 24 & FIFA",
  "IT TAKES TWO CO-OP",
  "GTA V & GTA VI READY",
  "GOD OF WAR RAGNARÖK",
  "MORTAL KOMBAT 1",
  "FORZA HORIZON 5",
  "NEED FOR SPEED UNBOUND",
  "BATTLEFIELD 1 & 2042",
  "NBA 2K & WWE 2K",
  "240HZ FAST-IPS MONITORS",
  "1 GBPS ULTRA-LOW PING FIBER"
];

export default function Home() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative">
      <Hero />

      {/* Flat Pricing Highlight Banner */}
      <section className="py-12 bg-coffee-dark text-white relative z-10 border-y border-cappuccino/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-5 text-center md:text-left">
            <div className="w-16 h-16 rounded-2xl bg-cappuccino/20 border border-cappuccino/40 flex items-center justify-center text-cappuccino shrink-0 hidden sm:flex">
              <Zap size={32} />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-cappuccino font-bold block mb-1">
                Transparent &amp; Affordable Pricing
              </span>
              <h2 className="text-3xl md:text-4xl font-serif italic text-white">
                Game at Just <span className="text-cappuccino font-sans not-italic font-bold">₹80</span> / Hour
              </h2>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-white/80">
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
              <Monitor size={16} className="text-cappuccino" /> PC Rigs Included
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
              <Gamepad2 size={16} className="text-cappuccino" /> PS5 4K Included
            </div>
            <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-full">
              <ShieldCheck size={16} className="text-cappuccino" /> Zero Extra Charges
            </div>
          </div>
        </div>
      </section>

      {/* Featured Arena & Games Showcase */}
      <section className="py-20 md:py-32 px-6 md:px-12 bg-premium-gradient relative z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            subtitle="The Highlights"
            title="Featured Games &amp; Battle Stations"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {featuredItems.map((item, index) => (
              <MenuItemCard 
                key={index} 
                index={index} 
                {...item} 
                onPlay={(id) => setActiveVideo(id)}
              />
            ))}
          </div>
          <div className="mt-16 md:mt-20 text-center">
            <Link
              href="/portfolio"
              className="inline-block px-12 py-5 bg-coffee-dark text-white rounded-full font-bold text-xs uppercase tracking-[0.3em] hover:bg-cappuccino hover:text-coffee-dark transition-all shadow-premium hover:shadow-premium-hover active:scale-95 cursor-pointer"
            >
              View More Games Vault
            </Link>
          </div>
        </div>
      </section>



      {/* Condensed About Section */}
      <section id="about" className="py-20 md:py-24 px-6 md:px-12 bg-background overflow-hidden relative z-10">
        <div className="max-w-4xl mx-auto text-center">
           <span className="text-[10px] uppercase tracking-[0.5em] text-cappuccino font-bold mb-6 block">Our Philosophy</span>
           <h2 className="text-4xl md:text-6xl font-serif text-coffee-dark italic leading-tight mb-8">
             Built by Gamers, for Gamers
           </h2>
           <p className="text-coffee-dark/70 leading-relaxed text-lg font-light max-w-2xl mx-auto mb-10">
             Clutch Gaming Cafe was created to bring high-performance gaming hardware, 240Hz high-FPS displays, low-latency dedicated optical fiber, and delicious cafe comfort directly to gamers in Trichy.
           </p>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-cream">
             <div>
               <h4 className="text-3xl font-serif text-coffee-dark italic mb-1">₹80</h4>
               <p className="text-[10px] uppercase tracking-widest text-coffee-dark/50 font-bold">Hourly Rate</p>
             </div>
             <div>
               <h4 className="text-3xl font-serif text-coffee-dark italic mb-1">240Hz+</h4>
               <p className="text-[10px] uppercase tracking-widest text-coffee-dark/50 font-bold">Fast-IPS Displays</p>
             </div>
             <div>
               <h4 className="text-3xl font-serif text-coffee-dark italic mb-1">1 Gbps</h4>
               <p className="text-[10px] uppercase tracking-widest text-coffee-dark/50 font-bold">Low Ping Fiber</p>
             </div>
             <div>
               <h4 className="text-3xl font-serif text-coffee-dark italic mb-1">PS5 4K</h4>
               <p className="text-[10px] uppercase tracking-widest text-coffee-dark/50 font-bold">OLED Lounge</p>
             </div>
           </div>
        </div>
      </section>

      {/* Continuous Capabilities Ticker */}
      <section className="py-10 bg-coffee-dark overflow-hidden border-y border-white/10">
        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            className="flex items-center gap-12 whitespace-nowrap px-6"
          >
            {[...tickerHighlights, ...tickerHighlights].map((item, i) => (
              <React.Fragment key={i}>
                <span className="text-lg md:text-2xl font-bold font-serif italic text-white/90 tracking-widest flex items-center gap-2">
                  <Flame size={16} className="text-cappuccino" /> {item}
                </span>
                <span className="text-cappuccino text-2xl opacity-60">•</span>
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
            className="object-cover brightness-[0.28]"
          />
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center px-6">
          <div className="text-center">
            <span className="text-[10px] uppercase tracking-[0.5em] text-cappuccino font-bold mb-4 block">The Clutch Standard</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white italic mb-6">High FPS. Low Latency. Pure Passion.</h2>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition-all shadow-lg active:scale-95 cursor-pointer"
            >
              Visit Us in Trichy
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Compact & Unique Dark Glowing Style */}
      <section className="py-12 sm:py-20 md:py-28 px-4 sm:px-8 md:px-12 bg-background relative z-10">
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
                className="bg-gradient-to-br from-[#2A1D1D] to-[#181010] p-5 sm:p-7 md:p-8 rounded-[1.5rem] sm:rounded-[2rem] text-white flex flex-col justify-between shadow-premium hover:shadow-[0_15px_40px_rgba(200,160,120,0.22)] transition-all relative overflow-hidden group border border-cappuccino/25"
              >
                {/* Subtle Ambient Aura */}
                <div className="absolute top-0 right-0 w-36 sm:w-48 h-36 sm:h-48 bg-cappuccino/10 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cappuccino/20 transition-colors duration-500 blur-[35px] pointer-events-none" />
                
                {/* Top Row: 5-Star Rating & Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-3.5 relative z-10">
                  <div className="flex items-center gap-1 text-cappuccino">
                    {[...Array(5)].map((_, sI) => (
                      <Star key={sI} size={13} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(200,149,95,0.6)]" />
                    ))}
                  </div>
                  <span className="text-[8.5px] uppercase tracking-wider font-bold text-cappuccino bg-white/5 border border-cappuccino/30 px-2.5 py-0.5 rounded-full backdrop-blur-xs">
                    5.0 ★ Verified
                  </span>
                </div>
                
                {/* Compact Quote Text */}
                <p className="text-sm sm:text-base md:text-lg font-serif leading-snug sm:leading-relaxed mb-4 sm:mb-6 italic relative z-10 text-white/95 drop-shadow-sm">
                  &ldquo;{test.quote}&rdquo;
                </p>
                
                {/* User Info Footer */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-cappuccino/20 border border-cappuccino/40 flex items-center justify-center text-cappuccino shadow-sm group-hover:bg-cappuccino group-hover:text-coffee-dark transition-colors duration-500 shrink-0">
                      <User2 size={16} />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-white leading-tight">{test.name}</h4>
                      <p className="text-cappuccino font-sans text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-widest">{test.role}</p>
                    </div>
                  </div>
                  <span className="text-[8px] uppercase tracking-widest text-white/40 font-bold hidden xs:inline-block">
                    Trichy Arena
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Prominent Location Banner for Visitors - Compact & Balanced Gaming Sanctuary Card */}
      <section className="py-10 sm:py-14 md:py-16 px-4 sm:px-8 md:px-12 bg-white relative z-10 border-t border-cream">
        <div className="group max-w-5xl mx-auto rounded-2xl sm:rounded-[2.25rem] bg-[#180E0E] text-white p-6 sm:p-8 md:p-10 relative overflow-hidden shadow-premium hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(200,149,95,0.25)] hover:-translate-y-1 border border-cappuccino/30 hover:border-cappuccino/60 transition-all duration-500">
          
          {/* Subtle Ambient Golden Glow */}
          <div 
            className="absolute -right-10 -bottom-10 w-64 sm:w-80 h-64 sm:h-80 pointer-events-none opacity-30 group-hover:opacity-60 transition-opacity duration-700" 
            style={{ background: "radial-gradient(circle at bottom right, rgba(200,149,95,0.2) 0%, transparent 65%)" }} 
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cappuccino/10 border border-cappuccino/30 text-cappuccino text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.25em]">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open Everyday • Direct Walk-In</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-serif italic text-white leading-tight">
                Visit Clutch Gaming Cafe <span className="text-cappuccino font-sans not-italic text-xs sm:text-sm font-bold uppercase tracking-wider block sm:inline-block sm:ml-2">Trichy • ₹80/hr</span>
              </h2>

              <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed">
                Step into our air-conditioned arena at Samayapuram with 50+ high-FPS PC battle stations and PS5 4K OLED lounge.
              </p>

              {/* 4 Clean Dark Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#241717] border border-cappuccino/20 group-hover:border-cappuccino/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-cappuccino/15 flex items-center justify-center shrink-0 text-cappuccino">
                    <MapPin size={14} />
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/95 font-medium">1st Floor (Above KFC)</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#241717] border border-cappuccino/20 group-hover:border-cappuccino/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-cappuccino/15 flex items-center justify-center shrink-0 text-cappuccino">
                    <Clock size={14} />
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/95 font-medium">10:00 AM – 11:00 PM</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#241717] border border-cappuccino/20 group-hover:border-cappuccino/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-cappuccino/15 flex items-center justify-center shrink-0 text-cappuccino">
                    <Gamepad2 size={14} />
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/95 font-medium">240Hz PC &amp; PS5 4K</span>
                </div>

                <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-[#241717] border border-cappuccino/20 group-hover:border-cappuccino/40 transition-colors">
                  <div className="w-7 h-7 rounded-lg bg-cappuccino/15 flex items-center justify-center shrink-0 text-cappuccino">
                    <ShieldCheck size={14} />
                  </div>
                  <span className="text-[11px] sm:text-xs text-white/95 font-medium">1 Gbps Dedicated Fiber</span>
                </div>
              </div>
            </motion.div>

            {/* Action Buttons Container */}
            <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center pt-2 sm:pt-0">
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1st+Floor+No+21%2FB+Above+KFC+Trichy-Chennai+Highway+Samayapuram+Tiruchirappalli+Tamil+Nadu+621112" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-3.5 px-6 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:shadow-[0_0_20px_rgba(200,149,95,0.5)] transition-all shadow-lg active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <MapPin size={15} />
                <span>Get Google Maps Route</span>
              </a>
              <a 
                href="tel:+919345469023" 
                className="w-full py-3.5 px-6 border border-white/20 bg-white/[0.03] text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-white/10 hover:border-cappuccino/50 transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Phone size={15} className="text-cappuccino" /> 
                <span>Call: +91 93454 69023</span>
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
