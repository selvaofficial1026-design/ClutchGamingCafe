"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Games & Arena", href: "/portfolio" },
  { name: "About & Specs", href: "/about" },
  { name: "Location", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position immediately on mount/navigation
    handleScroll();
    // Re-check after a tiny delay to catch browser scroll restoration
    const timeoutId = setTimeout(handleScroll, 100);
    
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

  return (
    <nav
      className={cn(
        "fixed left-0 right-0 z-50 transition-all duration-700 px-3 sm:px-6 md:px-8 lg:px-12 pointer-events-none",
        scrolled ? "top-3 sm:top-4 md:top-6" : "top-0"
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-700 pointer-events-auto px-4 sm:px-6 md:px-8",
        scrolled 
          ? "bg-background/90 backdrop-blur-2xl py-2.5 sm:py-3.5 rounded-full shadow-premium-hover border border-white/30 w-full md:w-fit md:min-w-[700px] md:gap-10 lg:gap-16" 
          : "bg-transparent py-4 sm:py-7 md:py-10 w-full"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 whitespace-nowrap">
          <div className={cn(
            "relative overflow-hidden rounded-full border border-cappuccino/30 group-hover:scale-105 transition-all duration-700 shadow-[0_0_15px_rgba(200,160,120,0.3)] flex items-center justify-center bg-coffee-dark shrink-0",
            scrolled ? "w-10 h-10" : "w-11 h-11 md:w-14 md:h-14"
          )}>
            <span className={cn(
              "font-serif font-bold italic text-cappuccino tracking-tighter",
              scrolled ? "text-xs" : "text-sm md:text-base"
            )}>
              CGC
            </span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold tracking-tight transition-all duration-700 leading-tight whitespace-nowrap",
              scrolled ? "text-sm md:text-base" : "text-lg md:text-2xl",
              scrolled ? "text-coffee-dark" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white" : "text-coffee-dark")
            )}>
              Clutch <span className="text-cappuccino italic font-normal">Gaming</span>
            </span>
            {!scrolled && (
              <span className={cn(
                "text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold whitespace-nowrap",
                pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white/60" : "text-coffee-dark/60"
              )}>
                Gaming Cafe
              </span>
            )}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-[10px] lg:text-[11px] font-bold tracking-[0.2em] lg:tracking-[0.25em] uppercase transition-all duration-300 relative group whitespace-nowrap py-1",
                scrolled ? "text-coffee-dark/70" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white/80" : "text-coffee-dark/70"),
                pathname === link.href && (scrolled ? "text-cappuccino font-extrabold" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white font-extrabold" : "text-coffee-dark font-extrabold")),
                "hover:text-cappuccino"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-0 h-[2px] bg-cappuccino transition-all duration-300 group-hover:w-full",
                pathname === link.href && "w-full"
              )} />
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          className={cn(
            "md:hidden p-2 transition-colors shrink-0",
            scrolled ? "text-coffee-dark" : (pathname === "/" || pathname === "/contact" || pathname === "/about" ? "text-white" : "text-coffee-dark")
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6 sm:p-10 gap-8 sm:gap-10 md:hidden pointer-events-auto"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl font-bold text-coffee-dark italic">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close mobile menu"
                className="text-coffee-dark"
              >
                <X size={40} />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-2xl font-serif font-bold tracking-widest uppercase transition-colors duration-300",
                      pathname === link.href ? "text-cappuccino" : "text-coffee-dark hover:text-coffee-dark/70"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-coffee-dark/40 font-bold">Connect With Us</p>
              <div className="flex gap-6 text-coffee-dark">
                <a href="https://www.instagram.com/clutch.trichy/" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-cappuccino transition-colors">Instagram</a>
                <a href="https://wa.me/919345469023" target="_blank" rel="noopener noreferrer" className="text-sm font-bold uppercase tracking-widest hover:text-cappuccino transition-colors">WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
