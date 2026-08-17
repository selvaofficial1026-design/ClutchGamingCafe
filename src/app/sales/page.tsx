"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { 
  ShieldCheck, 
  Wrench, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Truck
} from "lucide-react";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "918489800905";

interface Product {
  id: string;
  name: string;
  category: "ps5" | "ps4" | "service" | "accessories";
  badge: string;
  availability: string;
  description: string;
  specs: string[];
  image: string;
  whatsappMessage: string;
}

const products: Product[] = [
  {
    id: "ps5-slim-disc",
    name: "Sony PS5 Slim (Disc Edition • 1TB)",
    category: "ps5",
    badge: "Official Sony",
    availability: "In Stock • Best Deal",
    description: "Brand new PS5 Slim with 1TB SSD, 4K 120FPS ray-tracing, and Ultra HD Blu-ray drive.",
    specs: [
      "1TB Custom Gen4 NVMe SSD",
      "4K 120Hz & 8K HDR Support",
      "DualSense Wireless Controller",
      "1 Year Sony India Warranty"
    ],
    image: "/images/store/ps5.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — STORE INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Product:* Sony PS5 Slim (Disc Edition • 1TB)\n✨ *Condition:* Brand New Box Pack\n🛡️ *Warranty:* 1 Year Sony Official Warranty\n📍 *Pickup/Delivery:* Trichy (Store Handover / Fast Dispatch)\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I would like to know the best price, live stock availability, and payment details for this console."
  },
  {
    id: "ps5-slim-digital",
    name: "Sony PS5 Slim (Digital Edition • 1TB)",
    category: "ps5",
    badge: "Official Sony",
    availability: "In Stock • Best Deal",
    description: "Compact all-digital PS5 with 1TB SSD. Blazing-fast digital game downloads and DualSense haptics.",
    specs: [
      "1TB High-Speed NVMe Storage",
      "Ray Tracing & 120FPS Fidelity",
      "Tempest 3D Audio Engine",
      "1 Year Sony India Warranty"
    ],
    image: "/images/store/ps5.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — STORE INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Product:* Sony PS5 Slim (Digital Edition • 1TB)\n✨ *Condition:* Brand New Box Pack\n🛡️ *Warranty:* 1 Year Sony Official Warranty\n📍 *Pickup/Delivery:* Trichy (Store Handover / Fast Dispatch)\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I would like to know the best price and current availability for the PS5 Digital Edition."
  },
  {
    id: "ps4-pro-1tb",
    name: "Sony PS4 Pro (1TB • 4K Enhanced)",
    category: "ps4",
    badge: "Certified Tested",
    availability: "Ready Stock",
    description: "Certified tested & serviced PS4 Pro 1TB console. Enhanced 4K boost mode for God of War & GTA V.",
    specs: [
      "1TB Storage (Huge Game Capacity)",
      "4K HDR & Pro Boost Mode",
      "1x DualShock 4 Controller",
      "Deep Cleaned & Tested 100%"
    ],
    image: "/images/store/ps4.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — STORE INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Product:* Sony PS4 Pro (1TB • 4K Edition)\n✨ *Condition:* 100% Certified & Deep Serviced\n🎮 *Includes:* 1x DualShock 4 Controller + Cables\n🕹️ *Games:* Preloaded Game Bundles Available\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I am interested in buying the PS4 Pro 1TB console. Please share available units, game list, and best price."
  },
  {
    id: "ps4-slim-1tb",
    name: "Sony PS4 Slim (1TB / 500GB)",
    category: "ps4",
    badge: "Certified Tested",
    availability: "Ready Stock",
    description: "Whisper-quiet, highly reliable PS4 Slim console. Ideal for family gaming, FIFA, and solo adventures.",
    specs: [
      "1TB / 500GB Storage Options",
      "Whisper-Quiet Slim Chassis",
      "1x Original DualShock 4",
      "Ready to Plug & Play"
    ],
    image: "/images/store/ps4.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — STORE INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Product:* Sony PS4 Slim (1TB / 500GB)\n✨ *Condition:* 100% Certified Tested\n🎮 *Includes:* 1x Original DualShock 4 Controller\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I want to purchase a PS4 Slim console. Please share pricing for 500GB/1TB options and ready stock details."
  },
  {
    id: "dualsense-accessories",
    name: "PS5 DualSense Wireless Controllers",
    category: "accessories",
    badge: "100% Original",
    availability: "In Stock",
    description: "100% genuine Sony DualSense wireless gamepads with adaptive triggers and haptic feedback.",
    specs: [
      "Dynamic Haptic Feedback",
      "Adaptive Triggers Engine",
      "Midnight Black, Cosmic Red, White",
      "1 Year Warranty Backed"
    ],
    image: "/images/store/controllers.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — ACCESSORIES INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Item:* Sony PS5 DualSense Wireless Controller\n✨ *Type:* 100% Original Sony\n🎨 *Colors:* Midnight Black / White / Cosmic Red\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I want to buy Sony PS5 DualSense controllers. Please share available colors and price."
  },
  {
    id: "dualshock4-accessories",
    name: "PS4 DualShock 4 Wireless Controllers",
    category: "accessories",
    badge: "100% Original",
    availability: "In Stock",
    description: "Original Sony DualShock 4 gamepads for PlayStation 4 gaming with precision analog sticks.",
    specs: [
      "High-Precision Analog Sticks",
      "Multi-Touch Responsive Touchpad",
      "Built-in Speaker & Stereo Jack",
      "Tested & Quality Certified"
    ],
    image: "/images/store/controllers.jpg",
    whatsappMessage: "🎮 *CLUTCH GAMING CAFE — ACCESSORIES INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Item:* Sony PS4 DualShock 4 Wireless Controller\n✨ *Type:* 100% Original Sony Gamepad\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I want to buy Sony PS4 DualShock 4 controllers. Please share available stock and price."
  },
  {
    id: "console-service",
    name: "Console Thermal Service & Repair",
    category: "service",
    badge: "Expert Service",
    availability: "Same-Day Service",
    description: "Professional PlayStation maintenance: dust cleaning, thermal paste replacement, and stick drift fixes.",
    specs: [
      "PS4 & PS5 Deep Dust Cleaning",
      "Premium Thermal Paste Replacement",
      "Analog Stick Drift Fix",
      "SSD / Storage Upgrades"
    ],
    image: "/images/arena/zone_vip_lan.jpg",
    whatsappMessage: "🔧 *CLUTCH GAMING CAFE — SERVICE BOOKING*\n━━━━━━━━━━━━━━━━━━━━\n📌 *Service:* PlayStation Thermal Service & Repair\n🛠️ *Scope:* Deep Dust Cleaning / Thermal Paste / Stick Drift / Storage Upgrade\n📍 *Lounge:* 1st Floor Above KFC, Samayapuram, Trichy\n━━━━━━━━━━━━━━━━━━━━\nHello Clutch Team, I want to book a service/cleaning for my PlayStation Console (PS4/PS5). Please guide me on timings and service cost."
  }
];

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProducts = activeTab === "all"
    ? products
    : products.filter((item) => item.category === activeTab);

  const createWhatsAppLink = (message: string) => {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="min-h-screen flex flex-col pt-28 sm:pt-32 bg-[#080C14] text-white relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-[#00D2FF]/5 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -right-[5%] w-[35%] h-[50%] bg-[#0284C7]/5 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 md:px-10 py-6 sm:py-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <SectionHeading
            subtitle="Clutch PlayStation Store"
            title="PlayStation Sales &amp; Console Services"
          />

          {/* Compact Store Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 max-w-4xl mx-auto mb-8 sm:mb-10">
            <div className="p-3 rounded-xl bg-[#0D131F] border border-slate-800 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <ShieldCheck size={16} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-white block">100% Genuine</span>
                <span className="text-[9px] text-slate-400">Tested Units &amp; Warranty</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D131F] border border-slate-800 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Truck size={16} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-white block">Fast Handover</span>
                <span className="text-[9px] text-slate-400">Trichy &amp; Surroundings</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D131F] border border-slate-800 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Wrench size={16} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-white block">Expert Service</span>
                <span className="text-[9px] text-slate-400">Thermal Care &amp; Repairs</span>
              </div>
            </div>

            <div className="p-3 rounded-xl bg-[#0D131F] border border-slate-800 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <MessageSquare size={16} />
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-bold text-white block">WhatsApp Direct</span>
                <span className="text-[9px] text-slate-400">+91 84898 00905</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
            {[
              { id: "all", label: "All Items" },
              { id: "ps5", label: "PlayStation 5" },
              { id: "ps4", label: "PlayStation 4" },
              { id: "accessories", label: "Controllers & Gear" },
              { id: "service", label: "Console Service" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                  activeTab === tab.id
                    ? "bg-[#00D2FF] text-[#080C14] font-black shadow-[0_0_15px_rgba(0,210,255,0.6)] scale-105"
                    : "bg-[#0D131F] text-slate-300 hover:text-white border border-slate-800 hover:border-[#00D2FF]/40"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Compact Medium-Sized Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.05 }}
                className="group bg-[#0D131F] rounded-2xl border border-slate-800 hover:border-[#00D2FF]/60 shadow-[0_10px_30px_rgba(0,0,0,0.8)] hover:shadow-[0_12px_35px_rgba(0,210,255,0.2)] transition-all duration-400 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Product Poster with Clean 16:9 Aspect Ratio */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#080C14]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/20 to-transparent" />
                  
                  {/* Badge Top Left */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="bg-[#00D2FF] text-[#080C14] text-[8.5px] uppercase tracking-widest font-black px-2.5 py-0.5 rounded-full shadow-md">
                      {product.badge}
                    </span>
                  </div>

                  {/* Availability Tag Bottom Right */}
                  <div className="absolute bottom-2 right-2 z-10 bg-[#080C14]/90 backdrop-blur-md px-2 py-1 rounded-lg border border-slate-700 shadow-md">
                    <span className="text-[10px] font-bold text-[#00D2FF] font-sans block leading-none">
                      {product.availability}
                    </span>
                  </div>
                </div>

                {/* Compact Content Container */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  
                  <div>
                    <h3 className="text-sm sm:text-base font-serif font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug line-clamp-1 mb-1">
                      {product.name}
                    </h3>
                    <p className="text-[11px] text-slate-300 font-light leading-relaxed line-clamp-2 min-h-[2rem] mb-2.5">
                      {product.description}
                    </p>

                    {/* Specs Bullet Points */}
                    <div className="space-y-1 pt-2 border-t border-slate-800/80">
                      {product.specs.map((spec, sI) => (
                        <div key={sI} className="flex items-start gap-1.5 text-[10.5px] text-slate-300">
                          <CheckCircle2 size={11} className="text-[#00D2FF] shrink-0 mt-0.5" />
                          <span className="leading-tight line-clamp-1">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* WhatsApp Action Button */}
                  <div className="pt-2.5 border-t border-slate-800/80">
                    <a
                      href={createWhatsAppLink(product.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 px-3.5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full font-bold text-[11px] uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-1.5 shadow-[0_3px_15px_rgba(37,211,102,0.3)] hover:shadow-[0_4px_20px_rgba(37,211,102,0.5)] active:scale-95 cursor-pointer"
                    >
                      <MessageSquare size={13} />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Compact Direct Consultation Banner (Direct Call Only) */}
          <div className="mt-10 sm:mt-14 p-5 sm:p-8 rounded-2xl bg-[#0D131F] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-left">
            <div className="space-y-1 max-w-xl">
              <span className="text-[9.5px] uppercase tracking-[0.25em] font-bold text-[#00D2FF] block">
                PlayStation Stock • Game Bundles • Bulk Inquiries
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-white italic">
                Get Best Pricing on Any PlayStation Console
              </h3>
              <p className="text-slate-300 text-xs font-light leading-relaxed">
                Connect directly for live inventory, game setups, trade-ins, or on-site testing at our Samayapuram lounge.
              </p>
            </div>

            <div className="flex shrink-0 w-full sm:w-auto justify-center md:justify-end">
              <a
                href="tel:+918489800905"
                className="w-full sm:w-auto px-7 py-3 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.6)] flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
              >
                <Phone size={14} className="fill-current" />
                <span>Direct Call: 84898 00905</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
