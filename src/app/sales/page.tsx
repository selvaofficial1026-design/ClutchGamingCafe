"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { 
  Gamepad2, 
  Tv, 
  Cpu, 
  Wrench, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Phone, 
  Flame, 
  Truck, 
  Zap,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const WHATSAPP_NUMBER = "918489800905";

interface Product {
  id: string;
  name: string;
  category: "ps5" | "ps4" | "pc" | "service" | "accessories";
  badge: string;
  availability: string;
  description: string;
  specs: string[];
  features: string[];
  image: string;
  whatsappMessage: string;
}

const products: Product[] = [
  {
    id: "ps5-slim-disc",
    name: "Sony PlayStation 5 Slim (Disc Edition • 1TB)",
    category: "ps5",
    badge: "Official Sony",
    availability: "In Stock • Best Deal",
    description: "Brand new Sony PS5 Slim Disc Edition with 1TB ultra-fast Gen4 SSD. Enjoy 4K 120FPS ray-traced gaming, Ultra HD Blu-ray, and DualSense haptics.",
    specs: [
      "1TB Custom Gen4 NVMe SSD Storage",
      "Ultra HD 4K Blu-ray Disc Drive",
      "4K 120Hz & 8K HDR Output Support",
      "Tempest 3D AudioTech Sound Engine",
      "DualSense Wireless Controller Included",
      "1 Year Sony India Official Manufacturer Warranty"
    ],
    features: ["100% Genuine Box Pack", "Free Game Setup", "Store Handover / Fast Dispatch"],
    image: "/images/store/ps5.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to buy the Sony PlayStation 5 Slim Disc Edition (1TB). Please share current stock availability, best pricing, and payment/pickup details."
  },
  {
    id: "ps5-slim-digital",
    name: "Sony PlayStation 5 Slim (Digital Edition • 1TB)",
    category: "ps5",
    badge: "Official Sony",
    availability: "In Stock • Best Deal",
    description: "Sleek all-digital PS5 with 1TB SSD. Instant digital game library downloads with blazing-fast load speeds.",
    specs: [
      "1TB High-Speed NVMe Storage",
      "All-Digital Compact Form Factor",
      "Ray Tracing & 120FPS Game Fidelity",
      "DualSense Adaptive Triggers & Haptics",
      "1 Year Official Sony India Warranty"
    ],
    features: ["Instant Setup", "PSN Account Setup Assistance", "Store Pickup Available"],
    image: "/images/store/ps5.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to buy the Sony PlayStation 5 Slim Digital Edition (1TB). Please share stock availability and best pricing deal."
  },
  {
    id: "ps4-pro-1tb",
    name: "Sony PlayStation 4 Pro (1TB • 4K Enhanced)",
    category: "ps4",
    badge: "Certified Tested",
    availability: "Ready Stock",
    description: "Certified tested & serviced PS4 Pro 1TB console. Delivers 4K boost mode performance for God of War, GTA V, and FC 24.",
    specs: [
      "1TB Storage (Huge Game Library Capacity)",
      "4K HDR & Pro Boost Mode Performance",
      "1x Sony DualShock 4 Wireless Controller",
      "Deep Thermal Cleaned with New Thermal Paste",
      "Preloaded Games Available On Demand",
      "Store Testing & Replacement Warranty"
    ],
    features: ["Fully Tested 100%", "Preloaded Hit Games", "Ready to Plug & Play"],
    image: "/images/store/ps4.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I am interested in buying the PS4 Pro 1TB 4K Edition. Please share available units, game bundles, and pricing."
  },
  {
    id: "ps4-slim-1tb",
    name: "Sony PlayStation 4 Slim (1TB / 500GB Edition)",
    category: "ps4",
    badge: "Certified Tested",
    availability: "Ready Stock",
    description: "Compact, silent, and highly reliable PS4 Slim console. Ideal for family gaming, FIFA tournaments, and solo campaigns.",
    specs: [
      "1TB / 500GB High-Speed Storage Options",
      "Whisper-Quiet Slim Chassis",
      "1x Original DualShock 4 Controller",
      "All Connection Cables & Power Supply Included",
      "Tested with 100% Comprehensive Quality Check"
    ],
    features: ["Budget Friendly", "Low Power Draw", "Ready to Game"],
    image: "/images/store/ps4.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to buy the PlayStation 4 Slim console. Please share price options (500GB/1TB) and stock details."
  },
  {
    id: "custom-rtx-gaming-pc",
    name: "Custom RTX Tournament Gaming PC Rig",
    category: "pc",
    badge: "Custom Build",
    availability: "Built to Order",
    description: "Custom-tailored battle station built for high-FPS competitive esports and 1440p ultra gaming. Assembled with branded parts and stress-tested.",
    specs: [
      "Intel Core i5 13th/14th Gen or AMD Ryzen 5",
      "NVIDIA GeForce RTX 4060 / 3060 8GB/12GB",
      "16GB / 32GB DDR4/DDR5 RGB Gaming RAM",
      "1TB M.2 NVMe Gen4 High-Speed SSD",
      "650W 80+ Bronze Certified Power Supply",
      "Panoramic Tempered Glass RGB Cabinet",
      "3 Years Brand Warranty on Internal Components"
    ],
    features: ["Custom Built", "Zero Bottleneck", "High-FPS Competitive Ready"],
    image: "/images/store/pc.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to build/buy a Custom RTX Gaming PC. Please share configuration options and quotation."
  },
  {
    id: "dualsense-accessories",
    name: "Sony DualSense & DualShock Wireless Controllers",
    category: "accessories",
    badge: "100% Original",
    availability: "In Stock",
    description: "100% genuine wireless gamepads in multiple colorways. Perfect for 2-player local co-op and tournament matches.",
    specs: [
      "PS5 DualSense (Haptic & Adaptive Triggers)",
      "PS4 DualShock 4 Wireless Controllers",
      "Colors: Midnight Black, White, Cosmic Red, Blue",
      "Ergonomic Non-Slip Precision Grip",
      "Built-in Microphone & Headset Jack"
    ],
    features: ["100% Original Sony", "Instant Stock", "Warranty Backed"],
    image: "/images/store/controllers.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to buy PS5 DualSense / PS4 DualShock controllers. Please share available colors and pricing."
  },
  {
    id: "console-pc-service",
    name: "Console & PC Thermal Service / Hardware Repair",
    category: "service",
    badge: "Expert Service",
    availability: "Same-Day Service",
    description: "Professional gaming console and PC maintenance. Fix overheating, fan noise, controller stick drift, and storage upgrades.",
    specs: [
      "PS4 & PS5 Deep Dust Cleaning & Heatsink Wash",
      "Premium Thermal Paste & Liquid Metal Replacement",
      "Controller Analog Stick Drift Fix & Button Servicing",
      "HDD to SSD Upgrade & High-Speed Data Cloning",
      "PC Cable Management & Thermal Airflow Optimization",
      "Same-Day Quick Turnaround at Samayapuram Lounge"
    ],
    features: ["Expert Technicians", "Before/After Temps Check", "Affordable Service"],
    image: "/images/arena/zone_vip_lan.jpg",
    whatsappMessage: "Hello Clutch Gaming Cafe! I want to book a service/repair for my PlayStation Console / Gaming PC. Please guide me on timings and service cost."
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
    <main className="min-h-screen flex flex-col pt-32 bg-[#080C14] text-white relative overflow-hidden">
      
      {/* Ambient Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[10%] -left-[10%] w-[45%] h-[45%] bg-[#00D2FF]/5 rounded-full blur-[140px]" />
        <div className="absolute top-[45%] -right-[5%] w-[35%] h-[50%] bg-[#0284C7]/5 rounded-full blur-[120px]" />
      </div>

      <section className="relative z-10 px-4 sm:px-6 md:px-12 py-8 sm:py-12 md:py-16">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <SectionHeading
            subtitle="Clutch Gaming Store"
            title="Sales, Custom Rigs &amp; Console Services"
          />

          {/* Quick Store Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-5xl mx-auto mb-10 sm:mb-14">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D131F] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">100% Genuine</span>
                <span className="text-[10px] text-slate-400">Tested &amp; Certified Units</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D131F] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Truck size={20} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">Fast Handover</span>
                <span className="text-[10px] text-slate-400">Trichy &amp; Surrounding Areas</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D131F] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <Wrench size={20} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">Expert Service</span>
                <span className="text-[10px] text-slate-400">Thermal Care &amp; Upgrades</span>
              </div>
            </div>

            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#0D131F] border border-slate-800 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#00D2FF]/15 flex items-center justify-center text-[#00D2FF] shrink-0">
                <MessageSquare size={20} />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-bold text-white block">Direct Inquiry</span>
                <span className="text-[10px] text-slate-400">+91 84898 00905</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
            {[
              { id: "all", label: "All Products & Services" },
              { id: "ps5", label: "PlayStation 5" },
              { id: "ps4", label: "PlayStation 4" },
              { id: "pc", label: "Custom Gaming PCs" },
              { id: "accessories", label: "Controllers & Gear" },
              { id: "service", label: "Console & PC Service" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  "px-4 sm:px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer",
                  activeTab === tab.id
                    ? "bg-[#00D2FF] text-[#080C14] font-black shadow-[0_0_20px_rgba(0,210,255,0.6)] scale-105"
                    : "bg-[#0D131F] text-slate-300 hover:text-white border border-slate-800 hover:border-[#00D2FF]/40"
                )}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="group bg-[#0D131F] rounded-2xl sm:rounded-[2rem] border border-slate-800 hover:border-[#00D2FF]/60 shadow-[0_10px_35px_rgba(0,0,0,0.8)] hover:shadow-[0_15px_45px_rgba(0,210,255,0.2)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative"
              >
                {/* Product Poster with Aspect Ratio */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080C14]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D131F] via-[#0D131F]/30 to-transparent" />
                  
                  {/* Badge Top Left */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className="bg-[#00D2FF] text-[#080C14] text-[9.5px] uppercase tracking-widest font-extrabold px-3 py-1 rounded-full shadow-lg">
                      {product.badge}
                    </span>
                  </div>

                  {/* Availability Tag Bottom Right */}
                  <div className="absolute bottom-3 right-3 z-10 bg-[#080C14]/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-700 shadow-xl">
                    <span className="text-xs font-bold text-[#00D2FF] font-sans block leading-none">
                      {product.availability}
                    </span>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white group-hover:text-[#00D2FF] transition-colors leading-snug mb-2">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-300 font-light leading-relaxed mb-4">
                      {product.description}
                    </p>

                    {/* Specs Bullet Points */}
                    <div className="space-y-1.5 pt-3 border-t border-slate-800">
                      <span className="text-[9.5px] uppercase tracking-widest font-bold text-[#00D2FF] block mb-2">
                        Specifications &amp; Features:
                      </span>
                      {product.specs.map((spec, sI) => (
                        <div key={sI} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 size={13} className="text-[#00D2FF] shrink-0 mt-0.5" />
                          <span className="leading-snug">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Order on WhatsApp Action Button */}
                  <div className="pt-4 border-t border-slate-800">
                    <a
                      href={createWhatsAppLink(product.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3.5 px-5 bg-[#25D366] hover:bg-[#1EBE5D] text-white rounded-full font-bold text-xs uppercase tracking-widest text-center transition-all duration-200 flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,211,102,0.35)] hover:shadow-[0_6px_25px_rgba(37,211,102,0.55)] active:scale-95 cursor-pointer"
                    >
                      <MessageSquare size={15} />
                      <span>Order on WhatsApp</span>
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

          {/* Direct Consultation Banner */}
          <div className="mt-14 sm:mt-20 p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-[2.25rem] bg-[#0D131F] border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
            <div className="space-y-2 max-w-2xl">
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#00D2FF] block">
                Looking for Custom Rig Specs or Bulk Deals?
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white italic">
                Get Best Pricing on Any Console or Rig
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                Connect directly with our team for live stock availability, game preloading, trade-ins, or on-site testing at our Samayapuram lounge.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hello Clutch Gaming Cafe! I have a custom inquiry regarding console purchase / PC build / gaming service.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.6)] flex items-center justify-center gap-2 active:scale-95"
              >
                <MessageSquare size={15} />
                <span>WhatsApp Us</span>
              </a>
              <a
                href="tel:+918489800905"
                className="px-8 py-3.5 border border-slate-700 bg-[#080C14]/90 text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-[#00D2FF]/15 hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone size={15} className="text-[#00D2FF]" />
                <span>Direct Call</span>
              </a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
