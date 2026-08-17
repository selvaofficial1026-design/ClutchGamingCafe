"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { Shield, Lock, Eye, Database } from "lucide-react";

export default function PrivacyPage() {
  const lastUpdated = "August 15, 2026";

  const policies = [
    {
      icon: Eye,
      title: "Information We Collect",
      content: "When you interact with Clutch Gaming Cafe, we may collect basic contact information such as your name, phone number, and squad inquiries when you contact us online or visit our arena in Trichy."
    },
    {
      icon: Database,
      title: "How We Use Your Data",
      content: "We utilize your information strictly to respond to your queries, provide tournament schedule updates, or coordinate group gaming sessions. We do not engage in spam."
    },
    {
      icon: Lock,
      title: "Account Security on Consoles",
      content: "Players can log in with their personal PlayStation Network (PSN) accounts. We strongly encourage every player to log out after their gaming session to ensure credentials remain secure."
    },
    {
      icon: Shield,
      title: "Fair & Safe Environment",
      content: "We provide an inclusive, safe, and air-conditioned gaming sanctuary. Toxic behavior, hacking, or physical disruptions are not tolerated in the arena."
    }
  ];

  return (
    <main className="min-h-screen flex flex-col pt-32 bg-[#080C14] text-white relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#00D2FF]/5 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <section className="px-6 md:px-12 py-20 max-w-5xl mx-auto relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <SectionHeading subtitle="Clutch Guidelines" title="Privacy & Security Policy" />
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mt-8">
            Last Updated: {lastUpdated}
          </p>
        </motion.div>

        <div className="space-y-12">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="prose prose-stone max-w-none text-slate-300 font-light text-base md:text-lg leading-relaxed text-center max-w-3xl mx-auto mb-20"
          >
            <p>
              At Clutch Gaming Cafe, we are dedicated to providing a premium, transparent, and secure gaming environment for all players in Trichy.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
            {policies.map((policy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="group bg-[#0D131F] p-6 md:p-10 rounded-[1.5rem] md:rounded-[2rem] border border-slate-800 hover:border-[#00D2FF]/60 shadow-[0_10px_35px_rgba(0,0,0,0.6)] hover:shadow-[0_15px_45px_rgba(0,210,255,0.2)] transition-all duration-500 flex flex-col"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#080C14] flex items-center justify-center text-[#00D2FF] mb-6 group-hover:bg-[#00D2FF] group-hover:text-[#080C14] transition-colors duration-500 shadow-sm shrink-0 border border-slate-800">
                  <policy.icon className="w-6 h-6" />
                </div>
                <h2 className="text-xl md:text-2xl font-serif italic text-white mb-3 leading-tight group-hover:text-[#00D2FF] transition-colors">
                  {policy.title}
                </h2>
                <p className="text-xs md:text-sm text-slate-400 font-light leading-relaxed flex-grow">
                  {policy.content}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="mt-20 p-10 md:p-12 bg-[#0D131F] border border-slate-800 rounded-[2rem] text-white text-center shadow-[0_15px_45px_rgba(0,0,0,0.8)] relative overflow-hidden"
          >
            <div className="relative z-10">
              <h2 className="text-3xl font-serif italic text-[#00D2FF] mb-4">Any Questions?</h2>
              <p className="text-slate-300 font-light max-w-xl mx-auto mb-8">
                Visit our arena in Samayapuram, Trichy (1st Floor, Above KFC) or contact our team directly.
              </p>
              <Link 
                href="/contact"
                className="inline-block px-8 py-4 bg-[#00D2FF] text-[#080C14] font-black text-xs uppercase tracking-[0.2em] rounded-full hover:bg-white transition-all shadow-[0_0_20px_rgba(0,210,255,0.6)]"
              >
                Contact &amp; Location
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
