"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Send, CheckCircle2 } from "lucide-react";

const WHATSAPP_NUMBER = "918489800905";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const text = `🎮 *CLUTCH GAMING CAFE — DIRECT INQUIRY*\n━━━━━━━━━━━━━━━━━━━━\n👤 *Name:* ${formData.fullName}\n📱 *Contact:* ${formData.phone || "Not specified"}\n💬 *Message:* ${formData.message}\n━━━━━━━━━━━━━━━━━━━━\nSent from website contact form.`;
    
    // Open WhatsApp directly
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        role="status"
        aria-live="polite"
        className="bg-[#0D131F] p-8 md:p-12 rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.8)] border border-slate-800 text-center space-y-4"
      >
        <div className="w-16 h-16 rounded-full bg-[#00D2FF]/15 border border-[#00D2FF]/40 flex items-center justify-center mx-auto text-[#00D2FF]">
          <CheckCircle2 size={32} />
        </div>
        <h3 className="text-2xl font-serif text-white italic">Inquiry Dispatched!</h3>
        <p className="text-slate-300 text-sm max-w-md mx-auto">
          Thank you for reaching out. We have opened WhatsApp to connect you directly with our lounge manager at Samayapuram, Trichy.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 px-6 py-2.5 bg-[#080C14] border border-slate-700 text-white rounded-full text-xs font-bold uppercase tracking-wider hover:border-[#00D2FF] hover:text-[#00D2FF] transition-all cursor-pointer"
        >
          Send Another Message
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-6 bg-[#0D131F] p-6 sm:p-8 md:p-10 rounded-[2rem] shadow-[0_15px_45px_rgba(0,0,0,0.8)] border border-slate-800"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="space-y-2">
          <label htmlFor="full-name" className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase ml-1">
            Full Name *
          </label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            required
            placeholder="Your Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            className="w-full bg-[#080C14] border border-slate-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#00D2FF] transition-all duration-300 font-sans text-white placeholder:text-slate-500 text-sm"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="phone-number" className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase ml-1">
            Mobile Number (Optional)
          </label>
          <input
            id="phone-number"
            name="phone"
            type="tel"
            placeholder="+91 84898 00905"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full bg-[#080C14] border border-slate-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#00D2FF] transition-all duration-300 font-sans text-white placeholder:text-slate-500 text-sm"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase ml-1">
          Your Inquiry / Question *
        </label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="Ask about station availability, group booking, console sales, or tournament schedules..."
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full bg-[#080C14] border border-slate-800 rounded-xl px-5 py-3.5 focus:outline-none focus:border-[#00D2FF] transition-all duration-300 font-sans text-white placeholder:text-slate-500 text-sm resize-none"
        />
      </div>
      <button
        type="submit"
        className="w-full py-4 bg-[#00D2FF] hover:bg-white text-[#080C14] rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all duration-200 shadow-[0_0_20px_rgba(0,210,255,0.4)] hover:shadow-[0_0_30px_rgba(0,210,255,0.7)] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
      >
        <MessageSquare size={16} />
        <span>Send on WhatsApp</span>
      </button>
    </motion.form>
  );
}
