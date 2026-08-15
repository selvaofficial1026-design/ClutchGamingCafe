import React from "react";
import Link from "next/link";
import { MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-white pt-24 pb-12 px-6 md:px-12 relative overflow-hidden font-sans">
      {/* Decorative background circle */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cappuccino/5 rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-12 mb-16 md:mb-20 relative z-10">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-4 mb-8 group">
            <div className="relative w-12 h-12 overflow-hidden rounded-full border border-cappuccino/30 shadow-[0_0_15px_rgba(200,160,120,0.2)] flex items-center justify-center bg-white/5 group-hover:bg-cappuccino/10 transition-colors duration-500">
              <span className="font-serif font-bold italic text-cappuccino tracking-tighter text-base">
                CGC
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl font-bold tracking-tight italic text-white leading-tight">
                Clutch <span className="text-cappuccino">Gaming Cafe</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-cappuccino font-bold">
                Trichy • ₹80 / Hour
              </span>
            </div>
          </Link>
          <p className="text-white/60 leading-relaxed mb-8 font-light text-base">
            Where high-FPS gaming meets luxury cafe comfort. High-end RTX rigs, 240Hz monitors, and PS5 4K lounge.
          </p>
          <div className="flex items-center gap-4">
            {/* Instagram - Official Gradient on Hover/Click */}
            <a 
              href="https://www.instagram.com/clutch.trichy/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-gradient-to-tr hover:from-[#F58529] hover:via-[#DD2A7B] hover:to-[#8134AF] active:bg-gradient-to-tr active:from-[#F58529] active:via-[#DD2A7B] active:to-[#8134AF] hover:shadow-[0_0_22px_rgba(221,42,123,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer" 
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>

            {/* WhatsApp - Official Green on Hover/Click */}
            <a 
              href="https://wa.me/919345469023" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-[#25D366] active:bg-[#25D366] hover:shadow-[0_0_22px_rgba(37,211,102,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer" 
              aria-label="WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:scale-110"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </a>

            {/* Phone Call - Vibrant Blue/Green Call Accent on Hover/Click */}
            <a 
              href="tel:+919345469023" 
              className="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:border-transparent hover:bg-[#007AFF] active:bg-[#007AFF] hover:shadow-[0_0_22px_rgba(0,122,255,0.7)] hover:scale-110 active:scale-95 transition-all duration-300 group cursor-pointer" 
              aria-label="Call Directly"
            >
              <Phone size={18} className="transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-serif text-lg md:text-xl font-bold mb-6 md:mb-8 italic text-cappuccino">Explore</h4>
          <ul className="space-y-4 text-white/60 text-sm md:text-base">
            <li><Link href="/" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Home</Link></li>
            <li><Link href="/portfolio" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Top Games &amp; Gallery</Link></li>
            <li><Link href="/about" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Hardware &amp; Specs</Link></li>
            <li><Link href="/contact" className="hover:text-cappuccino transition-colors flex items-center gap-3 group"><div className="w-1.5 h-1.5 rounded-full bg-cappuccino/30 group-hover:bg-cappuccino transition-all" /> Location &amp; Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1 md:col-span-1">
          <h4 className="font-serif text-lg md:text-xl font-bold mb-6 md:mb-8 italic text-cappuccino">Visit Us</h4>
          <ul className="space-y-6 text-white/60">
            <li>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=1st+Floor+No+21%2FB+Above+KFC+Trichy-Chennai+Highway+Samayapuram+Tiruchirappalli+Tamil+Nadu+621112"
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-3 md:gap-4 items-start group cursor-pointer active:scale-95 transition-all duration-300"
              >
                <MapPin className="text-cappuccino shrink-0 mt-0.5 md:mt-1 group-hover:scale-125 group-active:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] group-active:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] transition-all duration-300 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm leading-relaxed group-hover:text-white group-active:text-white transition-colors duration-300">1st Floor (Above KFC), Samayapuram, Trichy - 621112</span>
              </a>
            </li>
            <li>
              <a href="tel:+919345469023" className="flex gap-3 md:gap-4 items-center group cursor-pointer active:scale-95 transition-all duration-300">
                <Phone className="text-cappuccino shrink-0 group-hover:scale-125 group-active:scale-125 group-hover:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] group-active:drop-shadow-[0_0_10px_rgba(200,160,120,0.8)] transition-all duration-300 w-4 h-4 md:w-5 md:h-5" />
                <span className="text-xs md:text-sm group-hover:text-white group-active:text-white transition-colors duration-300">+91 93454 69023</span>
              </a>
            </li>
            <li className="text-[11px] uppercase tracking-widest text-cappuccino/80 font-bold pl-7 md:pl-9">
              Open Everyday: 10:00 AM – 11:00 PM
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-[10px] font-bold uppercase tracking-[0.2em] relative z-10">
        <p>© {new Date().getFullYear()} Clutch Gaming Cafe. All rights reserved.</p>
        <div className="flex gap-8">
          <Link href="/privacy" className="group relative hover:text-white transition-colors duration-300">
            <span className="relative z-10">House Rules & Privacy</span>
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cappuccino transition-all duration-300 group-hover:w-full shadow-[0_0_8px_rgba(200,149,95,0.8)]" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
