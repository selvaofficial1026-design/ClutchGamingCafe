"use client";

import React from "react";
import { MapPin, Phone, Clock, MessageSquare, Sparkles, Navigation, ShieldCheck, Gamepad2, CheckCircle2, Compass } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const fullMapQueryUrl = "https://www.google.com/maps/search/?api=1&query=1st+Floor+No+21%2FB+Above+KFC+Trichy-Chennai+Highway+Samayapuram+Tiruchirappalli+Tamil+Nadu+621112";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col pt-0 bg-background relative overflow-hidden">
      
      {/* Hero Section */}
      <section className="relative h-[48vh] md:h-[52vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/arena/zone_pc_arena.jpg"
            alt="Clutch Gaming Cafe Location"
            fill
            unoptimized
            className="object-cover brightness-[0.3] scale-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/70" />
        </div>
        
        <div className="relative z-10 text-center px-6">
          <motion.span 
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-6 py-2 mb-6 border border-cappuccino/40 rounded-full text-cappuccino text-[10px] font-bold tracking-[0.3em] uppercase backdrop-blur-md bg-white/5 shadow-[0_0_15px_rgba(200,160,120,0.2)]"
          >
            Arena Location &amp; Visit Details
          </motion.span>
          
          {/* Word-by-Word Kinetic Slide-In from Left */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-4 italic tracking-tight drop-shadow-2xl">
            {"Visit Clutch Gaming Cafe".split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -60, filter: "blur(6px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="inline-block mr-2 sm:mr-3"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-white/80 text-sm md:text-base font-light max-w-xl mx-auto"
          >
            Located on the 1st Floor (Above KFC) on Trichy-Chennai Highway, Samayapuram, Tiruchirappalli. Walk-in anytime!
          </motion.p>
        </div>
      </section>

      {/* Continuous Kinetic Location Ticker Strip */}
      <section className="py-2.5 sm:py-3.5 bg-coffee-dark border-y border-cappuccino/20 overflow-hidden relative z-10">
        {/* Left & Right Edge Fade Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-r from-coffee-dark to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 bg-gradient-to-l from-coffee-dark to-transparent z-10 pointer-events-none" />

        <div className="flex w-max">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 30, repeat: Infinity }}
            className="flex items-center gap-6 sm:gap-8 whitespace-nowrap px-4 sm:px-6"
          >
            {[
              "1st Floor (Above KFC)",
              "Trichy-Chennai National Highway",
              "Samayapuram, Tiruchirappalli",
              "Open Everyday: 10:00 AM – 11:00 PM",
              "Dedicated Customer Parking",
              "Direct Walk-in Welcome",
              "Standard Rate: ₹80 / Hour",
              "1st Floor (Above KFC)",
              "Trichy-Chennai National Highway",
              "Samayapuram, Tiruchirappalli",
              "Open Everyday: 10:00 AM – 11:00 PM",
              "Dedicated Customer Parking",
              "Direct Walk-in Welcome",
              "Standard Rate: ₹80 / Hour"
            ].map((locItem, lI) => (
              <React.Fragment key={lI}>
                <span className="text-[10px] sm:text-xs md:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.22em] text-white flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cappuccino animate-pulse shrink-0" />
                  <span>{locItem}</span>
                </span>
                <span className="text-cappuccino/50 text-xs">•</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="px-6 md:px-12 py-16 md:py-20 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Info Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            
            {/* Location & Quick Contact Details */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-[10px] uppercase tracking-[0.4em] text-cappuccino font-bold block">
                  Trichy Headquarters
                </span>
                <h2 className="text-3xl md:text-4xl font-serif text-coffee-dark italic leading-tight">
                  Where to Find Us &amp; Game
                </h2>
                <p className="text-coffee-dark/70 text-sm leading-relaxed">
                  We are open 7 days a week with direct walk-in access. Standard rate is <strong className="text-coffee-dark font-bold">₹80 / Hour</strong> with zero hidden charges.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Address Card with Hover Lift & Golden Glow */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4.5 sm:p-6 rounded-[1.75rem] bg-white border border-cream hover:border-cappuccino hover:shadow-[0_20px_45px_rgba(200,149,95,0.22)] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cappuccino/10 rounded-full blur-2xl group-hover:bg-cappuccino/20 group-hover:scale-150 transition-all duration-500 pointer-events-none" />
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-background rounded-2xl flex items-center justify-center shrink-0 text-cappuccino group-hover:bg-cappuccino group-hover:text-coffee-dark group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-sm">
                    <MapPin size={22} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-coffee-dark/50 uppercase tracking-[0.2em] text-[10px] mb-1 group-hover:text-cappuccino transition-colors">Official Postal Address</h4>
                    <p className="text-coffee-dark text-base md:text-lg font-bold leading-snug group-hover:text-coffee-dark transition-colors">
                      1st Floor, No. 21/B, Trichy-Chennai Highway
                    </p>
                    <p className="text-coffee-dark/70 text-sm mt-1">
                      Above KFC, Samayapuram, Tiruchirappalli, Tamil Nadu – 621112
                    </p>
                  </div>
                </div>

                {/* Hours & Rate Card with Hover Lift & Golden Glow */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4.5 sm:p-6 rounded-[1.75rem] bg-white border border-cream hover:border-cappuccino hover:shadow-[0_20px_45px_rgba(200,149,95,0.22)] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cappuccino/10 rounded-full blur-2xl group-hover:bg-cappuccino/20 group-hover:scale-150 transition-all duration-500 pointer-events-none" />
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-background rounded-2xl flex items-center justify-center shrink-0 text-cappuccino group-hover:bg-cappuccino group-hover:text-coffee-dark group-hover:scale-110 group-hover:-rotate-6 transition-all duration-500 shadow-sm">
                    <Clock size={22} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-coffee-dark/50 uppercase tracking-[0.2em] text-[10px] mb-1 group-hover:text-cappuccino transition-colors">Operating Hours &amp; Rate</h4>
                    <p className="text-coffee-dark text-base md:text-lg font-bold">
                      Open Everyday: 10:00 AM – 11:00 PM
                    </p>
                    <p className="text-cappuccino text-sm font-bold mt-1 flex items-center gap-1.5">
                      <Sparkles size={14} /> Standard Rate: ₹80 / Hour (PC &amp; PS5)
                    </p>
                  </div>
                </div>

                {/* Phone & Direct Contact with Hover Lift & Golden Glow */}
                <div className="group flex items-start gap-4 sm:gap-5 p-4.5 sm:p-6 rounded-[1.75rem] bg-white border border-cream hover:border-cappuccino hover:shadow-[0_20px_45px_rgba(200,149,95,0.22)] hover:-translate-y-2 hover:scale-[1.015] transition-all duration-500 cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cappuccino/10 rounded-full blur-2xl group-hover:bg-cappuccino/20 group-hover:scale-150 transition-all duration-500 pointer-events-none" />
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-background rounded-2xl flex items-center justify-center shrink-0 text-cappuccino group-hover:bg-[#007AFF] group-hover:text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-sm">
                    <Phone size={22} />
                  </div>
                  <div className="relative z-10">
                    <h4 className="font-bold text-coffee-dark/50 uppercase tracking-[0.2em] text-[10px] mb-1 group-hover:text-cappuccino transition-colors">Direct Phone &amp; WhatsApp</h4>
                    <p className="text-coffee-dark text-base md:text-lg font-bold group-hover:text-[#007AFF] transition-colors">
                      +91 93454 69023
                    </p>
                    <p className="text-coffee-dark/60 text-xs mt-1">
                      Direct line available for directions, queries, and group sessions.
                    </p>
                  </div>
                </div>

              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a
                  href={fullMapQueryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-6 bg-coffee-dark text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-cappuccino hover:text-coffee-dark hover:shadow-[0_12px_30px_rgba(200,149,95,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <Navigation size={16} /> Open Google Maps
                </a>
                <a
                  href="https://wa.me/919345469023"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 px-6 bg-[#25D366] text-white rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-[#1EBE5D] hover:shadow-[0_12px_30px_rgba(37,211,102,0.4)] transition-all active:scale-95 flex items-center justify-center gap-2"
                >
                  <MessageSquare size={16} /> WhatsApp Us
                </a>
              </div>

            </motion.div>

            {/* Arena Highlights & Visitor Information Card with Ambient Glow - Compact & Professional */}
            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2, duration: 0.8 }}
               className="flex flex-col justify-between"
            >
              <div className="group bg-gradient-to-br from-[#241717] via-coffee-dark to-[#140D0D] text-white p-5 sm:p-7 md:p-9 rounded-2xl sm:rounded-[2.25rem] shadow-premium hover:shadow-[0_25px_60px_rgba(0,0,0,0.8),0_0_35px_rgba(200,149,95,0.3)] hover:-translate-y-1.5 hover:border-cappuccino/60 relative overflow-hidden h-full flex flex-col justify-between border border-cappuccino/25 transition-all duration-500">
                
                {/* Subtle Glow with Hover Pulse */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-cappuccino/15 rounded-full -translate-y-1/2 translate-x-1/2 blur-[80px] group-hover:bg-cappuccino/30 group-hover:scale-125 transition-all duration-700 pointer-events-none" />
                
                <div className="relative z-10 space-y-4">
                  <div>
                    {/* Live Status Pill */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cappuccino/15 border border-cappuccino/30 text-cappuccino text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.22em] mb-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>Direct Walk-In • No Booking Needed</span>
                    </div>
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-serif italic text-white leading-tight group-hover:text-cappuccino transition-colors">
                      Walk-In &amp; Start Playing
                    </h3>
                  </div>

                  <p className="text-white/75 text-xs sm:text-sm font-light leading-relaxed">
                    No prior booking or reservations needed. Step into our air-conditioned lounge, grab any battle station or PS5 recliner, and game at ₹80/hr.
                  </p>

                  {/* Compact 2x2 Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-cappuccino/20 flex items-center justify-center text-cappuccino shrink-0">
                        <MapPin size={13} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">1st Floor (Above KFC)</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-cappuccino/20 flex items-center justify-center text-cappuccino shrink-0">
                        <Gamepad2 size={13} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">240Hz PC &amp; PS5 OLED</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-cappuccino/20 flex items-center justify-center text-cappuccino shrink-0">
                        <ShieldCheck size={13} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">1 Gbps Low Ping Fiber</span>
                    </div>

                    <div className="flex items-center gap-2.5 p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:border-cappuccino/30 transition-colors">
                      <div className="w-6 h-6 rounded-lg bg-cappuccino/20 flex items-center justify-center text-cappuccino shrink-0">
                        <Sparkles size={13} />
                      </div>
                      <span className="text-[10px] sm:text-xs text-white/90 font-medium">₹80 / Hour Standard</span>
                    </div>
                  </div>
                </div>

                {/* Direct Call Strip */}
                <div className="mt-5 pt-4 border-t border-white/10 relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-center sm:text-left">
                    <span className="text-[9.5px] uppercase tracking-widest text-cappuccino font-bold block">
                      Direct Walk-In Helpline
                    </span>
                    <span className="text-[11px] text-white/70 font-light">
                      Call anytime for routes &amp; station status
                    </span>
                  </div>
                  <a
                    href="tel:+919345469023"
                    className="w-full sm:w-auto px-5 py-2.5 bg-cappuccino text-coffee-dark rounded-full font-bold text-xs uppercase tracking-widest text-center hover:bg-white hover:shadow-[0_0_20px_rgba(200,149,95,0.6)] transition-all active:scale-95 flex items-center justify-center gap-1.5"
                  >
                    <Phone size={13} />
                    <span>Call: 93454 69023</span>
                  </a>
                </div>

              </div>
            </motion.div>

          </div>



          {/* Quick Route Guide Bar with Hover Lift */}
          <div className="group mt-12 p-8 md:p-10 rounded-[2.25rem] bg-white border border-cream hover:border-cappuccino hover:shadow-[0_20px_50px_rgba(200,149,95,0.22)] hover:-translate-y-2 transition-all duration-500 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden cursor-pointer">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cappuccino/10 rounded-full blur-3xl group-hover:bg-cappuccino/20 group-hover:scale-150 transition-all duration-500 pointer-events-none" />
            <div className="relative z-10">
              <span className="text-[10px] uppercase tracking-[0.3em] text-cappuccino font-bold block mb-1">
                Landmark &amp; Parking
              </span>
              <h3 className="text-xl font-serif text-coffee-dark font-bold italic mb-1 group-hover:text-cappuccino transition-colors">
                Easy Highway Accessibility &amp; Ample Parking
              </h3>
              <p className="text-coffee-dark/70 text-xs md:text-sm">
                Located on the 1st Floor directly above KFC on the main Trichy-Chennai Highway, Samayapuram. Dedicated two-wheeler and four-wheeler customer parking available.
              </p>
            </div>
            <Link 
              href="/portfolio"
              className="relative z-10 px-8 py-3.5 bg-coffee-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cappuccino hover:text-coffee-dark transition-all shrink-0 active:scale-95 shadow-md hover:shadow-lg"
            >
              Explore 700+ Games
            </Link>
          </div>

        </div>
      </section>

    </main>
  );
}
