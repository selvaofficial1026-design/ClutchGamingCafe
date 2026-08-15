"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
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

  // Subtle parallax: 0.3x speed. Disabled on mobile for performance.
  const yBg = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : 200]);
  const yContent = useTransform(scrollY, [0, 800], [0, isMobile ? 0 : -50]);

  // Mouse movement for subtle 3D tilt (max 5deg)
  const [rotateX, setRotateX] = React.useState(0);
  const [rotateY, setRotateY] = React.useState(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 8;
    const y = (clientY / innerHeight - 0.5) * -8;
    setRotateX(y);
    setRotateY(x);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
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
          unoptimized
          sizes="100vw"
          className="object-cover brightness-[0.38] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F1515] via-black/40 to-black/75" />
      </motion.div>

      <motion.div 
        style={{ 
          y: yContent, 
          rotateX,
          rotateY,
          transformStyle: "preserve-3d"
        }}
        className="relative z-20 text-center px-6 sm:px-12 max-w-5xl transition-transform duration-200 ease-out my-auto"
      >
        <div>
          <span className="inline-block px-4 sm:px-6 py-2 mb-6 sm:mb-8 border border-cappuccino/60 rounded-full text-cappuccino text-[9px] sm:text-[10px] md:text-xs font-bold tracking-[0.2em] sm:tracking-[0.3em] uppercase backdrop-blur-md bg-black/60 shadow-lg">
            Trichy&apos;s Premier Gaming Lounge • Standard: ₹80 / Hour
          </span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif text-white mb-8 sm:mb-10 tracking-tight leading-[1.1] text-balance drop-shadow-2xl">
            Clutch Every Round. <br />
            <span className="italic font-normal text-cappuccino drop-shadow-xl">Play At Peak Performance.</span>
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-7">
            <Magnetic>
              <Link
                href="/portfolio"
                className="group relative w-full sm:w-auto px-10 sm:px-12 py-4.5 sm:py-5 bg-cappuccino text-coffee-dark rounded-full font-black text-xs sm:text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 shadow-[0_10px_35px_rgba(200,149,95,0.5)] hover:shadow-[0_15px_45px_rgba(200,149,95,0.7)] hover:bg-white hover:text-coffee-dark active:scale-95 flex items-center justify-center cursor-pointer"
              >
                <span className="relative z-10 font-bold">Explore Top Games</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none" />
              </Link>
            </Magnetic>
            <Magnetic>
              <Link
                href="/contact"
                className="group w-full sm:w-auto px-10 sm:px-12 py-4.5 sm:py-5 bg-white text-coffee-dark hover:bg-cappuccino hover:text-white rounded-full font-black text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)] active:scale-95 flex items-center justify-center cursor-pointer"
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
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 z-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-white/60 font-bold">Scroll to explore</span>
        <div className="w-[1px] h-24 bg-gradient-to-b from-cappuccino to-transparent" />
      </motion.div>
    </section>
  );
}
