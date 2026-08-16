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
    window.addEventListener("resize", handleResize, { passive: true });
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

  const isDarkPage = pathname === "/" || pathname === "/contact" || pathname === "/about";

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
          ? "bg-background/95 backdrop-blur-md py-2 sm:py-3 rounded-full shadow-premium-hover border border-white/30 w-full md:w-fit md:min-w-[650px] md:gap-10 lg:gap-16" 
          : "bg-transparent py-4 sm:py-6 md:py-8 w-full"
      )}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 whitespace-nowrap">
          <div className={cn(
            "relative overflow-hidden rounded-full border border-cappuccino/30 group-hover:scale-105 shadow-[0_0_15px_rgba(200,160,120,0.3)] flex items-center justify-center bg-coffee-dark shrink-0 transition-[width,height,transform] duration-300",
            scrolled ? "w-9 h-9 sm:w-10 sm:h-10" : "w-11 h-11 md:w-13 md:h-13"
          )}>
            <span className={cn(
              "font-serif font-bold italic text-cappuccino tracking-tighter transition-all duration-300",
              scrolled ? "text-xs" : "text-sm md:text-base"
            )}>
              CGC
            </span>
          </div>
          <div className="flex flex-col">
            <span className={cn(
              "font-serif font-bold tracking-tight leading-tight whitespace-nowrap transition-colors duration-300",
              scrolled ? "text-sm md:text-base text-coffee-dark" : cn("text-lg md:text-2xl", isDarkPage ? "text-white" : "text-coffee-dark")
            )}>
              Clutch <span className="text-cappuccino italic font-normal">Gaming</span>
            </span>
            {!scrolled && (
              <span className={cn(
                "text-[8px] md:text-[9px] uppercase tracking-[0.2em] font-bold whitespace-nowrap",
                isDarkPage ? "text-white/60" : "text-coffee-dark/60"
              )}>
                Gaming Cafe
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
                  scrolled 
                    ? (isActive ? "text-cappuccino font-extrabold" : "text-coffee-dark/70 hover:text-cappuccino")
                    : (isDarkPage ? (isActive ? "text-white font-extrabold" : "text-white/80 hover:text-cappuccino") : (isActive ? "text-coffee-dark font-extrabold" : "text-coffee-dark/70 hover:text-cappuccino"))
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 w-full h-[2px] bg-cappuccino origin-left transition-transform duration-200",
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                )} />
              </Link>
            );
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          aria-label={isOpen ? "Close mobile menu" : "Open mobile menu"}
          className={cn(
            "md:hidden p-2 transition-colors shrink-0",
            scrolled ? "text-coffee-dark" : (isDarkPage ? "text-white" : "text-coffee-dark")
          )}
          onClick={toggleMenu}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
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
            className="fixed inset-0 bg-white z-[60] flex flex-col p-6 sm:p-10 gap-8 sm:gap-10 md:hidden pointer-events-auto overflow-y-auto"
          >
            <div className="flex justify-between items-center">
              <span className="font-serif text-3xl font-bold text-coffee-dark italic">Menu</span>
              <button
                onClick={closeMenu}
                aria-label="Close mobile menu"
                className="text-coffee-dark"
              >
                <X size={36} />
              </button>
            </div>
            <div className="flex flex-col gap-7 mt-8">
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
                      "text-2xl font-serif font-bold tracking-widest uppercase transition-colors duration-200",
                      pathname === link.href ? "text-cappuccino" : "text-coffee-dark hover:text-coffee-dark/70"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>
            <div className="mt-auto space-y-4 pt-6 border-t border-coffee-dark/10">
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
