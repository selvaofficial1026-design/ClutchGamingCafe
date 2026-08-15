"use client";

import React from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function TermsPage() {
  return (
    <main className="min-h-screen flex flex-col pt-32 bg-background">
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto">
        <SectionHeading subtitle="Cafe Guidelines" title="House Rules & Terms" />
        <div className="prose prose-stone max-w-none text-coffee-dark/75 font-light space-y-6 mt-10">
          <p className="text-xs uppercase tracking-widest text-cappuccino font-bold">Clutch Gaming Cafe • Trichy</p>
          
          <h2 className="text-2xl font-serif text-coffee-dark mt-8 italic">1. Station Rates & Usage</h2>
          <p>The standard rate is ₹80 per hour per station (PC Battle Arena or PS5 Lounge). Time begins once logged into the station.</p>
          
          <h2 className="text-2xl font-serif text-coffee-dark mt-8 italic">2. Hardware & Peripherals Care</h2>
          <p>All gaming rigs, mechanical keyboards, mice, headsets, and PS5 DualSense controllers are high-end precision equipment. Please handle with care. Any deliberate hardware damage is subject to replacement costs.</p>
          
          <h2 className="text-2xl font-serif text-coffee-dark mt-8 italic">3. Fair Play & Personal Accounts</h2>
          <p>Use of third-party cheats, hacks, or malicious software on cafe PCs is strictly prohibited and results in immediate termination of the session. Players are responsible for logging out of their personal Steam, Riot, or PlayStation accounts after use.</p>
          
          <h2 className="text-2xl font-serif text-coffee-dark mt-8 italic">4. Food & Drinks Policy</h2>
          <p>Cafe beverages and food items are available at our fuel counter. Please keep drinks inside designated cup holders to prevent accidental spills on equipment.</p>
        </div>

        <div className="mt-12 text-center">
          <Link href="/" className="px-8 py-3.5 bg-coffee-dark text-white rounded-full font-bold text-xs uppercase tracking-widest hover:bg-cappuccino hover:text-coffee-dark transition-all inline-block">
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}
