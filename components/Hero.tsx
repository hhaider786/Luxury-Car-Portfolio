"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ImageWithBlur } from "@/lib/motion/ImageWithBlur";
import { WebGLHero } from "@/lib/motion/WebGLHero";
import { MaskedText } from "@/lib/motion/MaskedText";
import { MagneticButton } from "@/lib/motion/MagneticButton";

const HERO_IMG = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=85";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  const bgY = useTransform(scrollY, [0, 700], [0, -180]);
  const bgScale = useTransform(scrollY, [0, 700], [1, 1.08]);
  const textY = useTransform(scrollY, [0, 500], [0, -70]);
  const heroOpacity = useTransform(scrollY, [0, 380], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      <motion.div className="absolute inset-[-10%] z-0" style={{ y: bgY, scale: bgScale, willChange: "transform" }}>
        <ImageWithBlur src={HERO_IMG} alt="" aria-hidden="true" fill priority sizes="100vw" className="object-cover object-center" />
      </motion.div>

      <WebGLHero
        palette="metallic"
        speed={0.4}
        intensity={1.0}
        className="absolute inset-0 z-0 mix-blend-soft-light opacity-55"
      />

      <div className="absolute inset-0 z-1 bg-gradient-to-b from-[#0a0a0a]/75 via-[#0a0a0a]/40 to-[#0a0a0a]/95" />
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]/60" />

      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ y: textY, opacity: heroOpacity, willChange: "transform" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6"
        >
          <span className="section-eyebrow">Premium luxury service</span>
          <span className="gold-line mt-3 mx-auto w-24 block" aria-hidden />
        </motion.div>

        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 text-white"
          style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
        >
          <MaskedText delay={0.2} stagger={0.08} duration={1}>Arrive in Silence.</MaskedText>
          <br />
          <span className="italic text-[#e5c158]">
            <MaskedText delay={0.5} stagger={0.08} duration={1}>Depart in Style.</MaskedText>
          </span>
        </h1>

        <motion.p
          className="text-[#bbb] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          Experience unparalleled luxury transportation. Our professional chauffeurs
          and world-class fleet ensure every journey is an occasion.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
        >
          <MagneticButton
            as="a"
            href="#booking"
            className="shimmer-gold px-8 py-4 text-black text-sm tracking-[0.25em] uppercase font-bold hover:opacity-95 transition-opacity inline-block"
          >
            Reserve your journey
          </MagneticButton>
          <a
            href="#fleet"
            className="px-8 py-4 text-sm tracking-[0.25em] uppercase border border-white/30 text-white hover:border-[#e5c158] hover:text-[#e5c158] transition-all duration-300"
          >
            Explore our fleet
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        style={{ opacity: heroOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        aria-hidden
      >
        <span className="text-[#999] text-[0.65rem] tracking-[0.3em] uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
          <ChevronDown size={20} className="text-[#e5c158]" />
        </motion.div>
      </motion.div>

      <motion.dl
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-[#e5c158]/15 bg-[#0a0a0a]/85 backdrop-blur-sm hidden md:flex"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        {[
          { value: "15+", label: "Years experience" },
          { value: "500+", label: "Happy clients" },
          { value: "50+", label: "Luxury vehicles" },
          { value: "24/7", label: "Available" },
        ].map((stat, i) => (
          <div key={i} className={`flex-1 py-5 text-center ${i < 3 ? "border-r border-[#e5c158]/15" : ""}`}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="text-[#e5c158] text-2xl font-bold block" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
                {stat.value}
              </span>
              <span className="text-[#888] text-xs tracking-widest uppercase mt-1 block">{stat.label}</span>
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
