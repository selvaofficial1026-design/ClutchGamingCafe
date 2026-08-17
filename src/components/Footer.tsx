import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#06090F] text-white pt-8 sm:pt-10 md:pt-12 pb-6 px-4 sm:px-8 md:px-12 relative overflow-hidden font-sans border-t border-slate-800/80">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 right-0 w-64 sm:w-80 h-64 sm:h-80 bg-[#00D2FF]/5 rounded-full translate-y-1/3 translate-x-1/3 pointer-events-none blur-3xl" />
      
      <div className="max-w-7xl mx-auto mb-5 sm:mb-6 relative z-10">
        
        {/* Top Header: Brand on Left with Social Icons directly below it */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-800">
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-full border border-[#00D2FF]/50 shadow-[0_0_15px_rgba(0,210,255,0.35)] flex items-center justify-center bg-[#0D131F] group-hover:bg-[#00D2FF]/10 group-hover:border-[#00D2FF] transition-all duration-300 shrink-0">
                <span className="font-serif font-bold italic text-[#00D2FF] tracking-tighter text-xs sm:text-sm group-hover:scale-110 transition-transform">
                  CGC
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-base sm:text-xl font-bold tracking-tight italic text-white leading-tight">
                  CLUTCH <span className="text-[#00D2FF]">GAMING CAFE</span>
                </span>
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-[#00D2FF]/90 font-bold">
                  Trichy • ₹80 / Hour
                </span>
              </div>
            </Link>

            {/* 3 Quick-Connect Icons directly below/next to the logo */}
            <div className="flex items-center gap-2.5">
              {/* Instagram */}
              <a 
                href="https://www.instagram.com/clutch.trichy/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#0D131F] border border-slate-700 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] active:bg-gradient-to-tr active:from-[#F58529] active:via-[#DD2A7B] active:to-[#8134AF] hover:shadow-[0_0_15px_rgba(221,42,123,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer" 
                aria-label="Instagram Profile"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.me/919345469023" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#0D131F] border border-slate-700 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-[#25D366] active:bg-[#25D366] hover:shadow-[0_0_15px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer" 
                aria-label="WhatsApp Direct Chat"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="transition-transform group-hover:scale-110"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.16C10.57 20.16 9.12 19.76 7.85 19L7.55 18.82L4.44 19.64L5.27 16.61L5.07 16.29C4.24 14.97 3.8 13.47 3.8 11.91C3.8 7.37 7.5 3.67 12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.16 12.05 20.16ZM16.57 14.39C16.32 14.26 15.1 13.66 14.87 13.58C14.64 13.5 14.48 13.46 14.31 13.71C14.15 13.96 13.68 14.51 13.53 14.68C13.39 14.84 13.24 14.86 12.99 14.74C12.74 14.61 11.94 14.35 10.99 13.5C10.25 12.84 9.75 12.03 9.6 11.78C9.46 11.53 9.59 11.4 9.71 11.27C9.82 11.16 9.96 10.98 10.09 10.83C10.21 10.68 10.25 10.57 10.33 10.41C10.42 10.24 10.38 10.1 10.31 9.98C10.25 9.85 9.76 8.65 9.56 8.16C9.36 7.68 9.16 7.74 9.01 7.73C8.87 7.73 8.71 7.72 8.54 7.72C8.38 7.72 8.11 7.78 7.89 8.02C7.66 8.27 7.03 8.86 7.03 10.06C7.03 11.27 7.91 12.43 8.03 12.59C8.16 12.76 9.76 15.22 12.21 16.28C12.79 16.53 13.25 16.68 13.6 16.79C14.19 16.98 14.72 16.95 15.15 16.89C15.63 16.82 16.62 16.29 16.83 15.71C17.03 15.13 17.03 14.64 16.97 14.54C16.91 14.43 16.76 14.37 16.57 14.39Z" />
                </svg>
              </a>

              {/* Phone Call */}
              <a 
                href="tel:+919345469023" 
                className="w-8 h-8 sm:w-8.5 sm:h-8.5 rounded-full bg-[#0D131F] border border-slate-700 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-[#00D2FF] hover:text-[#080C14] hover:shadow-[0_0_15px_rgba(0,210,255,0.8)] hover:scale-105 active:scale-95 transition-all duration-200 group cursor-pointer" 
                aria-label="Direct Phone Call"
              >
                <Phone size={14} className="transition-transform group-hover:scale-110" />
              </a>
            </div>
          </div>

          {/* Right Side: Quick Highlight Tag */}
          <div className="hidden md:flex flex-col items-end gap-0.5">
            <span className="text-[9.5px] uppercase tracking-[0.25em] text-[#00D2FF] font-bold">Premier Gaming Lounge</span>
            <span className="text-[11px] text-slate-400 font-light">1st Floor (Above KFC), Samayapuram, Trichy</span>
          </div>
        </div>

        {/* 2-Column on Mobile / 3-Column Compact Grid on Desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 pt-5">
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="font-serif text-sm sm:text-base font-bold mb-2.5 italic text-[#00D2FF]">
              Explore
            </h4>
            <ul className="space-y-1.5 text-slate-300 text-[11px] sm:text-xs font-light">
              <li>
                <Link href="/" className="hover:text-[#00D2FF] active:text-[#00D2FF] transition-colors block py-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-[#00D2FF] active:text-[#00D2FF] transition-colors block py-0.5">
                  Top Games
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#00D2FF] active:text-[#00D2FF] transition-colors block py-0.5">
                  Hardware &amp; Specs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#00D2FF] active:text-[#00D2FF] transition-colors block py-0.5">
                  Location &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="col-span-1">
            <h4 className="font-serif text-sm sm:text-base font-bold mb-2.5 italic text-[#00D2FF]">
              Visit Us
            </h4>
            <ul className="space-y-2 text-[11px] sm:text-xs">
              <li>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=1st+Floor+No+21%2FB+Above+KFC+Trichy-Chennai+Highway+Samayapuram+Tiruchirappalli+Tamil+Nadu+621112"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start gap-1.5 text-slate-300 hover:text-[#00D2FF] transition-colors"
                >
                  <MapPin size={13} className="text-[#00D2FF] shrink-0 mt-0.5" />
                  <span className="leading-snug">1st Floor (Above KFC), Samayapuram</span>
                </a>
              </li>
              <li>
                <a 
                  href="tel:+919345469023" 
                  className="flex items-center gap-1.5 text-slate-300 hover:text-[#00D2FF] font-semibold transition-colors"
                >
                  <Phone size={12} className="text-[#00D2FF] shrink-0" />
                  <span>+91 93454 69023</span>
                </a>
              </li>
              <li className="text-[9.5px] uppercase tracking-wider text-[#00D2FF] font-bold pt-0.5">
                10 AM – 11 PM Daily
              </li>
            </ul>
          </div>

          {/* Arena Brief (Desktop Only) */}
          <div className="hidden md:block col-span-1 space-y-2">
            <h4 className="font-serif text-sm sm:text-base font-bold italic text-[#00D2FF]">
              The Arena
            </h4>
            <p className="text-slate-300 text-[11px] font-light leading-relaxed">
              High-FPS battle stations, 240Hz Fast-IPS monitors, and PS5 4K OLED lounge at ₹80/hr.
            </p>
            <div className="inline-block px-2.5 py-0.5 rounded-full bg-[#0D131F] border border-[#00D2FF]/30 text-[9px] uppercase tracking-widest font-bold text-[#00D2FF] shadow-[0_0_10px_rgba(0,210,255,0.2)]">
              ₹80 / Hour Standard Rate
            </div>
          </div>

        </div>

      </div>

      {/* Bottom Bar: Copyright */}
      <div className="max-w-7xl mx-auto pt-4 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.16em] relative z-10">
        <p>© {new Date().getFullYear()} Clutch Gaming Cafe. All rights reserved.</p>
        <p className="text-[#00D2FF]/90 text-[9px] sm:text-[10px] tracking-widest font-semibold">Trichy&apos;s Premier Gaming Lounge • ₹80 / Hr</p>
      </div>
    </footer>
  );
}
