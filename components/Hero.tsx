"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div
          className="hero-zoom absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=90')",
            backgroundColor: "#1a1a1a",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-eyebrow">Premium Luxury Service</span>
          <span className="gold-line mt-3 mx-auto w-24 block" />
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-white"
          style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Arrive in Silence.
          <br />
          <span className="italic text-[#c9a84c]">Depart in Style.</span>
        </motion.h1>

        <motion.p
          className="text-[#aaa] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Experience unparalleled luxury transportation. Our professional chauffeurs
          and world-class fleet ensure every journey is an occasion.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#booking"
            className="shimmer-gold px-8 py-4 text-black text-sm tracking-[0.25em] uppercase font-bold hover:opacity-90 transition-opacity"
          >
            Reserve Your Journey
          </a>
          <a
            href="#fleet"
            className="px-8 py-4 text-sm tracking-[0.25em] uppercase border border-white/30 text-white hover:border-[#c9a84c] hover:text-[#c9a84c] transition-all duration-300"
          >
            Explore Our Fleet
          </a>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
      >
        <span className="text-[#888] text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-[#c9a84c]" />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#c9a84c]/10 bg-[#0a0a0a]/80 backdrop-blur-sm hidden md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        {[
          { value: "15+", label: "Years Experience" },
          { value: "500+", label: "Happy Clients" },
          { value: "50+", label: "Luxury Vehicles" },
          { value: "24/7", label: "Available Service" },
        ].map((stat, i) => (
          <div
            key={i}
            className={`flex-1 py-5 text-center ${i < 3 ? "border-r border-[#c9a84c]/10" : ""}`}
          >
            <div
              className="text-[#c9a84c] text-2xl font-bold"
              style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
            >
              {stat.value}
            </div>
            <div className="text-[#666] text-xs tracking-widest uppercase mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
