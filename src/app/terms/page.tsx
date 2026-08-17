"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 bg-[#080C14] text-white">
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <SectionHeading subtitle="Cafe Guidelines" title="House Rules & Terms" />
        <div className="bg-[#0D131F] p-8 sm:p-12 rounded-[2rem] border border-slate-800 shadow-[0_15px_45px_rgba(0,0,0,0.8)] text-slate-300 font-light space-y-6 mt-10">
          <p className="text-xs uppercase tracking-widest text-[#00D2FF] font-bold">Clutch Gaming Cafe • Trichy</p>
          
          <h2 className="text-2xl font-serif text-white mt-8 italic">1. Station Rates &amp; Usage</h2>
          <p>Station rates are ₹100 per hour for PlayStation 5 (Extra controller: ₹80) and ₹80 per hour for PlayStation 4 / PC (Extra controller: ₹60). Time begins once logged into the station.</p>
          
          <h2 className="text-2xl font-serif text-white mt-8 italic">2. Hardware &amp; Peripherals Care</h2>
          <p>All gaming rigs, mechanical keyboards, mice, headsets, and PS5 DualSense controllers are high-end precision equipment. Please handle with care. Any deliberate hardware damage is subject to replacement costs.</p>
          
          <h2 className="text-2xl font-serif text-white mt-8 italic">3. Fair Play &amp; Personal Accounts</h2>
          <p>Use of third-party cheats, hacks, or malicious software on cafe PCs is strictly prohibited and results in immediate termination of the session. Players are responsible for logging out of their personal Steam, Riot, or PlayStation accounts after use.</p>
          
          <h2 className="text-2xl font-serif text-white mt-8 italic">4. Food &amp; Drinks Policy</h2>
          <p>Cafe beverages and food items are available at our fuel counter. Please keep drinks inside designated cup holders to prevent accidental spills on equipment.</p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="px-8 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all inline-block shadow-[0_0_20px_rgba(0,210,255,0.5)]">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
