"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const features = [
  {
    number: "01",
    subtitle: "Interior Mastery",
    title: "Handcrafted Leather",
    description:
      "Every surface is upholstered in hand-selected, full-grain leather. Individually stitched by master craftsmen — no two interiors are identical.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1400&q=90",
    accent: "Leather & Suede",
  },
  {
    number: "02",
    subtitle: "Perfect Temperature",
    title: "Four-Zone Climate",
    description:
      "Intelligent multi-zone climate control maintains an ideal environment for every passenger, independently — pre-cooled or heated before you even board.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1400&q=90",
    accent: "Climate Control",
  },
  {
    number: "03",
    subtitle: "Celestial Ambiance",
    title: "Starlight Ceiling",
    description:
      "Over 1,000 hand-finished fiber-optic lights recreate a private night sky above you — transforming every journey into a truly intimate experience.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1400&q=90",
    accent: "Fiber Optics",
  },
  {
    number: "04",
    subtitle: "Concert Hall Sound",
    title: "Crystal Audio",
    description:
      "Bespoke speaker systems from Burmester, Naim, or Bowers & Wilkins fill the cabin with studio-quality sound — music the way the artist intended.",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=90",
    accent: "Premium Audio",
  },
];

const SECTION_MULTIPLIER = features.length + 1;

export default function Features() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const scrolled = -rect.top;
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return;
      const progress = Math.max(0, Math.min(1, scrolled / scrollable));
      const i = Math.floor(progress * SECTION_MULTIPLIER);
      setActiveIndex(Math.max(0, Math.min(features.length - 1, i)));
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  const active = features[activeIndex];

  return (
    <section ref={ref} style={{ height: `${SECTION_MULTIPLIER * 100}vh` }}>
      <div className="sticky top-0 h-screen bg-[#050505]" style={{ overflow: "clip" }}>

        {/* Full-bleed background image — dimmed */}
        <AnimatePresence mode="sync">
          <motion.div
            key={active.title + "-bg"}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${active.image}')`,
              backgroundColor: "#111",
            }}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 0.3, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        </AnimatePresence>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/60 via-transparent to-[#050505]/40" />

        {/* ── DESKTOP ── */}
        <div className="hidden md:flex absolute inset-0">
          {/* Left: large sharp image */}
          <div className="relative w-[42%] h-full overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={active.title + "-left"}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${active.image}')`,
                  backgroundColor: "#1a1a1a",
                }}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.75, ease: "easeOut" }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#050505]" />
          </div>

          {/* Right: text */}
          <div className="w-[58%] h-full flex flex-col justify-center pl-16 pr-20 relative">
            {/* Section eyebrow */}
            <div className="absolute top-10 left-16">
              <span className="section-eyebrow">Crafted for Perfection</span>
            </div>

            {/* Giant ghost number */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + "-num"}
                className="absolute right-16 top-1/2 -translate-y-1/2 select-none pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <span
                  className="text-[18rem] font-bold leading-none"
                  style={{
                    fontFamily: "var(--font-playfair-var), Georgia, serif",
                    color: "rgba(201,168,76,0.04)",
                  }}
                >
                  {active.number}
                </span>
              </motion.div>
            </AnimatePresence>

            {/* Feature text */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -22 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="relative z-10"
              >
                <motion.p
                  className="text-[#c9a84c] text-xs tracking-[0.35em] uppercase mb-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.05 }}
                >
                  {active.subtitle}
                </motion.p>

                <h2
                  className="text-5xl xl:text-[4.5rem] font-bold text-white leading-tight mb-5"
                  style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                >
                  {active.title}
                </h2>

                <span className="gold-line block w-24 mb-7" />

                <p className="text-[#999] text-lg leading-relaxed max-w-md mb-8">
                  {active.description}
                </p>

                <div className="inline-flex items-center gap-3 border border-[#c9a84c]/20 px-5 py-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                  <span className="text-[#c9a84c] text-xs tracking-[0.25em] uppercase">
                    {active.accent}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Vertical progress bar on the right edge */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-5 items-end">
              {features.map((f, i) => (
                <div key={i} className="flex items-center gap-3">
                  {i === activeIndex && (
                    <motion.span
                      className="text-[#666] text-[0.6rem] tracking-[0.2em] uppercase text-right"
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {f.subtitle}
                    </motion.span>
                  )}
                  <div
                    className="transition-all duration-500"
                    style={{
                      width: "1px",
                      height: i === activeIndex ? "3rem" : "1.2rem",
                      backgroundColor: i === activeIndex ? "#c9a84c" : "#222",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── MOBILE ── */}
        <div className="md:hidden absolute inset-0 flex flex-col justify-end pb-14 px-6">
          {/* Sharp image top half */}
          <div className="absolute inset-0">
            <AnimatePresence mode="sync">
              <motion.div
                key={active.title + "-mob-img"}
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${active.image}')`,
                  backgroundColor: "#1a1a1a",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-[#050505]/20" />
          </div>

          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + "-mob"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="section-eyebrow mb-2">{active.subtitle}</p>
                <h2
                  className="text-3xl font-bold text-white mb-3"
                  style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                >
                  {active.title}
                </h2>
                <span className="gold-line block w-16 mb-4" />
                <p className="text-[#999] text-sm leading-relaxed mb-5">
                  {active.description}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {features.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "1.5rem" : "0.4rem",
                    height: "0.4rem",
                    backgroundColor: i === activeIndex ? "#c9a84c" : "#333",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
