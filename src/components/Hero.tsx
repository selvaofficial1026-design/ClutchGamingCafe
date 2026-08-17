"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Magnetic from "./Magnetic";

export default function Hero() {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Parallax: 0.3x speed on desktop, disabled on mobile for max battery/performance
  const yBg = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 180]);
  const yContent = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -45]);

  // Motion values update GPU directly without triggering React re-renders on mousemove
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rotateX = useSpring(rawRotateX, { stiffness: 220, damping: 25, mass: 0.4 });
  const rotateY = useSpring(rawRotateY, { stiffness: 220, damping: 25, mass: 0.4 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 8;
    const y = (clientY / innerHeight - 0.5) * -8;
    rawRotateX.set(y);
    rawRotateY.set(x);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden p-0 py-24 md:py-32 perspective-1000"
    >
      {/* Background Image with Pro Parallax */}
      <motion.div 
        style={{ y: yBg }} 
        className="absolute inset-0 z-0 will-change-transform"
      >
        <Image
          src="/images/hero_real_arena.jpg"
          alt="Clutch Gaming Cafe Battle Arena"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.32] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-[#080C14]/60 to-black/85" />
      </motion.div>

      {/* Cyber Cyan Ambient Orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[600px] h-96 sm:h-[600px] bg-[#00D2FF]/10 rounded-full blur-[140px] pointer-events-none" />

      <motion.div 
        style={{ 
          y: yContent, 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-20 text-center px-6 sm:px-12 max-w-5xl my-auto"
      >
        <div>
          <span className="inline-block px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-[#00D2FF]/50 rounded-full text-[#00D2FF] text-[10px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase backdrop-blur-md bg-[#080C14]/80 shadow-[0_0_20px_rgba(0,210,255,0.25)]">
            Trichy&apos;s Premier Gaming Lounge • Standard: ₹80 / Hour
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 sm:mb-10 tracking-tight leading-[1.1] text-balance drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)]">
            Clutch Every Round. <br />
            <span className="italic font-normal text-[#00D2FF] drop-shadow-[0_0_35px_rgba(0,210,255,0.4)]">Play At Peak Performance.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
            <Magnetic>
              <Link
                href="/portfolio"
                className="group relative w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs sm:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 shadow-[0_10px_35px_rgba(0,210,255,0.4)] hover:shadow-[0_15px_45px_rgba(0,210,255,0.7)] hover:bg-white active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <span className="relative z-10 font-bold">Explore Top Games</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 sm:px-12 py-4 sm:py-5 bg-[#0D131F]/90 text-white border border-[#00D2FF]/40 hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] hover:text-[#00D2FF] rounded-full font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.6)] active:scale-95 flex items-center justify-center cursor-pointer backdrop-blur-md"
              >
                Find Our Location
              </Link>
            </Magnetic>
          </div>
        </div>

      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        aria-hidden="true"
        className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 sm:gap-4 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-16 sm:h-24 bg-gradient-to-b from-[#00D2FF] to-transparent shadow-[0_0_8px_#00D2FF]" />
      </motion.div>
    </section>
  );
}
