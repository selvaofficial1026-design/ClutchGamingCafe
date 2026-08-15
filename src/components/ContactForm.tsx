"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate async send (replace with real API call or mailto action)
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-8 md:p-12 rounded-premium shadow-premium border border-cream text-center space-y-4"
      >
        <div className="w-16 h-16 rounded-full bg-cappuccino/20 flex items-center justify-center mx-auto">
          <span className="text-cappuccino text-3xl">✓</span>
        </div>
        <h3 className="text-2xl font-serif text-coffee-dark italic">Message Sent!</h3>
        <p className="text-coffee-dark/70 text-sm">
          Thank you for reaching out. We&apos;ll get back to you shortly at our cafe.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onSubmit={handleSubmit}
      className="space-y-8 bg-white p-8 md:p-12 rounded-premium shadow-premium border border-cream"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label htmlFor="full-name" className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Full Name</label>
          <input
            id="full-name"
            name="fullName"
            type="text"
            required
            placeholder="John Doe"
            className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20"
          />
        </div>
        <div className="space-y-3">
          <label htmlFor="email-address" className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Email Address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20"
          />
        </div>
      </div>
      <div className="space-y-3">
        <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-coffee-dark/40 uppercase ml-1">Your Message</label>
        <textarea
          id="message"
          name="message"
          required
          placeholder="How can we help you?"
          rows={4}
          className="w-full bg-background border border-cream rounded-2xl px-6 py-4 focus:outline-none focus:border-cappuccino transition-all duration-300 font-sans text-coffee-dark placeholder:text-coffee-dark/20 resize-none"
        />
      </div>
      <button
        type="submit"
        disabled={submitting}
        className="group relative w-full py-5 bg-coffee-dark text-white rounded-full font-bold tracking-[0.2em] uppercase overflow-hidden transition-all shadow-premium hover:shadow-premium-hover active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
      >
        <span className="relative z-10">{submitting ? "Sending…" : "Submit Inquiry"}</span>
        <div className="absolute inset-0 bg-cappuccino translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
      </button>
    </motion.form>
  );
}
