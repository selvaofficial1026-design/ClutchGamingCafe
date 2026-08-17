"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games & Arena", href: "/portfolio" },
  { name: "Sales & Services", href: "/sales" },
  { name: "About & Specs", href: "/about" },
  { name: "Location", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 40);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    // Initial check
    handleScroll();
    const timeoutId = setTimeout(handleScroll, 80);
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 px-3 sm:px-6 md:px-8 lg:px-12 pointer-events-none transition-[top] duration-300",
        scrolled ? "top-2 sm:top-3 md:top-5" : "top-0"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between pointer-events-auto px-4 sm:px-6 md:px-8 transition-[background-color,border-color,box-shadow,padding,border-radius] duration-300",
        scrolled 
          ? "bg-[#080C14]/90 backdrop-blur-xl py-2 sm:py-3 rounded-full shadow-[0_4px_30px_rgba(0,210,255,0.18)] border border-[#00D2FF]/30 w-full md:w-fit md:min-w-[650px] md:gap-10 lg:gap-16" 
          : "bg-transparent py-4 sm:py-6 md:py-8 w-full"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 whitespace-nowrap">
          <div className={cn(
            "relative overflow-hidden rounded-full border border-[#00D2FF]/50 group-hover:scale-105 shadow-[0_0_15px_rgba(0,210,255,0.4)] flex items-center justify-center bg-[#0D131F] shrink-0 transition-[width,height,transform] duration-300",
            scrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-11 h-11 md:w-12 md:h-12"
          )}>
            <span className={cn(
              "font-serif font-bold italic text-[#00D2FF] tracking-tighter transition-all duration-300",
              scrolled ? "text-xs" : "text-sm md:text-base"
            )}>
              CGC
            </span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold tracking-tight leading-tight whitespace-nowrap text-white transition-colors duration-300",
              scrolled ? "text-sm md:text-base" : "text-lg md:text-2xl"
            )}>
              CLUTCH <span className="text-[#00D2FF] italic font-normal">GAMING</span>
            </span>
            {!scrolled && (
              <span className="text-[8px] md:text-[9px] uppercase tracking-[0.22em] font-bold text-[#00D2FF]/80 whitespace-nowrap">
                THE GAMING CAFE
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 shrink-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-[10px] lg:text-[11px] font-bold tracking-[0.2em] lg:tracking-[0.25em] uppercase relative group whitespace-nowrap py-1 transition-colors duration-200",
                  isActive ? "text-[#00D2FF] font-extrabold drop-shadow-[0_0_8px_rgba(0,210,255,0.5)]" : "text-white/80 hover:text-[#00D2FF]"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] bg-[#00D2FF] shadow-[0_0_8px_#00D2FF] origin-left transition-transform duration-200",
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-nav"
          className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-white hover:text-[#00D2FF] transition-colors shrink-0"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-[#080C14] z-[60] flex flex-col p-6 sm:p-10 gap-8 sm:gap-10 md:hidden pointer-events-auto overflow-y-auto text-white"
          >
            <div className="flex justify-between items-center border-b border-white/10 pb-4">
              <span className="font-serif text-3xl font-bold text-white italic">
                CLUTCH <span className="text-[#00D2FF]">MENU</span>
              </span>
              <button
                onClick={closeMenu}
                aria-label="Close mobile menu"
                className="min-w-[44px] min-h-[44px] flex items-center justify-center -mr-2 text-white hover:text-[#00D2FF] transition-colors cursor-pointer"
              >
                <X size={32} />
              </button>
            </div>
            <div className="flex flex-col gap-6 mt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      "text-2xl font-serif font-bold tracking-widest uppercase transition-colors duration-200 py-1.5 block",
                      pathname === link.href ? "text-[#00D2FF]" : "text-white/80 hover:text-[#00D2FF]"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-3 pt-6 border-t border-white/10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#00D2FF] font-bold">Connect With Us</p>
              <div className="flex gap-6 text-white/80">
                <a href="https://www.instagram.com/clutch.trichy/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#00D2FF] transition-colors py-2 inline-block">Instagram</a>
                <a href="https://wa.me/918489800905" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-[#00D2FF] transition-colors py-2 inline-block">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
