"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 bg-[#080C14] text-white">
      <section className="px-4 sm:px-6 md:px-12 py-10 sm:py-16 max-w-4xl mx-auto">
        <SectionHeading subtitle="Cafe Guidelines" title="House Rules & Terms" />
        <div className="bg-[#0D131F] p-5 sm:p-8 md:p-12 rounded-2xl sm:rounded-[2rem] border border-slate-800 shadow-[0_15px_45px_rgba(0,0,0,0.8)] text-slate-300 font-light space-y-5 sm:space-y-6 mt-8 sm:mt-10 text-sm sm:text-base">
          <p className="text-xs uppercase tracking-widest text-[#00D2FF] font-bold">Clutch Gaming Cafe • Trichy</p>
          
          <h2 className="text-xl sm:text-2xl font-serif text-white mt-6 sm:mt-8 italic">1. Station Rates &amp; Usage</h2>
          <p>Station rates are ₹100 per hour for PlayStation 5 (Extra controller: ₹80) and ₹80 per hour for PlayStation 4 (Extra controller: ₹60). Time begins once logged into the station.</p>
          
          <h2 className="text-xl sm:text-2xl font-serif text-white mt-6 sm:mt-8 italic">2. Hardware &amp; Peripherals Care</h2>
          <p>All PlayStation 5 and PlayStation 4 consoles, 120Hz displays, DualSense and DualShock wireless controllers are high-end precision equipment. Please handle with care. Any deliberate hardware damage is subject to replacement costs.</p>
          
          <h2 className="text-xl sm:text-2xl font-serif text-white mt-6 sm:mt-8 italic">3. Fair Play &amp; Personal Accounts</h2>
          <p>Players are responsible for logging out of their personal PlayStation Network (PSN) accounts after their gaming session. Toxic conduct or physical disruption is strictly prohibited in the lounge.</p>
          
          <h2 className="text-xl sm:text-2xl font-serif text-white mt-6 sm:mt-8 italic">4. Food &amp; Drinks Policy</h2>
          <p>Cafe beverages, juices, and Lays snacks are available at our fuel counter. Please keep drinks inside designated cup holders to prevent accidental spills on equipment.</p>
        </div>

        <div className="mt-10 sm:mt-12 text-center">
          <Link href="/" className="w-full sm:w-auto px-8 py-3.5 bg-[#00D2FF] text-[#080C14] rounded-full font-black text-xs uppercase tracking-widest hover:bg-white transition-all inline-block shadow-[0_0_20px_rgba(0,210,255,0.5)] text-center">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
