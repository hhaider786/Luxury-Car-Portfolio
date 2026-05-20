"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";

const vehicles = [
  {
    name: "Rolls-Royce Phantom",
    class: "Ultra Luxury",
    specs: ["6.75L V12 Engine", "5 Passengers", "Starlight Headliner", "Bespoke Leather"],
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1200&q=90",
    price: "$300",
  },
  {
    name: "Mercedes S-Class",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Burmester Sound", "Massage Seats"],
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=90",
    price: "$180",
  },
  {
    name: "Bentley Flying Spur",
    class: "Grand Tourer",
    specs: ["6.0L W12 Engine", "4 Passengers", "Diamond Stitching", "Naim Audio"],
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=1200&q=90",
    price: "$250",
  },
  {
    name: "Cadillac Escalade",
    class: "SUV Luxury",
    specs: ["6.2L V8 Engine", "6 Passengers", '35" Display', "AKG Sound"],
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=1200&q=90",
    price: "$200",
  },
  {
    name: "Mercedes V-Class",
    class: "Group Luxury",
    specs: ["2.0L Diesel", "7 Passengers", "Executive Seating", "Conference Setup"],
    image: "https://images.unsplash.com/photo-1574023278046-e7f25c9028ee?w=1200&q=90",
    price: "$160",
  },
  {
    name: "BMW 7 Series",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Bowers & Wilkins", "Sky Lounge Roof"],
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=90",
    price: "$150",
  },
];

const SECTION_MULTIPLIER = vehicles.length + 1;

export default function Fleet() {
  const ref = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => {
      const i = Math.floor(v * SECTION_MULTIPLIER);
      setActiveIndex(Math.max(0, Math.min(vehicles.length - 1, i)));
    });
    return unsubscribe;
  }, [scrollYProgress]);

  const active = vehicles[activeIndex];

  return (
    <section
      id="fleet"
      ref={ref}
      style={{ height: `${SECTION_MULTIPLIER * 100}vh` }}
    >
      <div className="sticky top-0 h-screen bg-[#0a0a0a] overflow-hidden">

        {/* ── DESKTOP LAYOUT ── */}
        <div className="hidden md:block absolute inset-0">
          {/* Left: full-height image panel */}
          <div className="absolute left-0 top-0 w-[58%] h-full overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={active.name + "-img"}
                className="absolute inset-[-4%] bg-cover bg-center"
                style={{
                  backgroundImage: `url('${active.image}')`,
                  backgroundColor: "#1a1a1a",
                }}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              />
            </AnimatePresence>
            {/* Fade edge toward right */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/30" />
          </div>

          {/* Right: text panel */}
          <div className="absolute right-0 top-0 w-[46%] h-full flex flex-col justify-center pl-4 pr-16">
            {/* Section label top-left */}
            <div className="absolute top-10 left-4">
              <span className="section-eyebrow">Our Exclusive Fleet</span>
            </div>

            {/* Counter top-right */}
            <div className="absolute top-10 right-16 font-mono text-sm tracking-widest">
              <span className="text-[#c9a84c]">
                {String(activeIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-[#333] mx-1">/</span>
              <span className="text-[#555]">
                {String(vehicles.length).padStart(2, "0")}
              </span>
            </div>

            {/* Vehicle content — AnimatePresence swaps on index change */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -18 }}
                transition={{ duration: 0.38, ease: "easeOut" }}
              >
                <p className="section-eyebrow mb-3">{active.class}</p>
                <h2
                  className="text-5xl xl:text-6xl font-bold text-white leading-tight mb-4"
                  style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                >
                  {active.name}
                </h2>
                <span className="gold-line block w-20 mb-7" />

                {/* Specs — staggered on each vehicle change */}
                <div className="space-y-3 mb-8">
                  {active.specs.map((spec, si) => (
                    <motion.div
                      key={spec}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + si * 0.09, duration: 0.32 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                      <span className="text-[#bbb] text-sm tracking-wide">{spec}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2 mb-7">
                  <span
                    className="text-[#c9a84c] text-4xl font-bold"
                    style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                  >
                    {active.price}
                  </span>
                  <span className="text-[#555] text-sm">/ hour</span>
                </div>

                <a
                  href="#booking"
                  className="shimmer-gold inline-block px-8 py-3.5 text-black text-xs tracking-[0.25em] uppercase font-bold"
                >
                  Reserve This Vehicle
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Progress dots */}
            <div className="absolute bottom-10 left-4 flex items-center gap-2.5">
              {vehicles.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "2rem" : "0.45rem",
                    height: "0.45rem",
                    backgroundColor: i === activeIndex ? "#c9a84c" : "#2a2a2a",
                  }}
                />
              ))}
            </div>

            {/* Scroll hint */}
            <div className="absolute bottom-10 right-16 text-[#333] text-[0.65rem] tracking-[0.25em] uppercase">
              Scroll to explore
            </div>
          </div>
        </div>

        {/* ── MOBILE LAYOUT ── */}
        <div className="md:hidden absolute inset-0">
          {/* Full-screen image */}
          <AnimatePresence mode="sync">
            <motion.div
              key={active.name + "-mob"}
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: `url('${active.image}')`,
                backgroundColor: "#1a1a1a",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            />
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/20" />

          {/* Counter */}
          <div className="absolute top-6 right-6 font-mono text-sm tracking-widest">
            <span className="text-[#c9a84c]">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="text-[#444] mx-1">/</span>
            <span className="text-[#666]">{String(vehicles.length).padStart(2, "0")}</span>
          </div>

          {/* Text at bottom */}
          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex + "-mob-text"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <span className="section-eyebrow mb-2 block">{active.class}</span>
                <h2
                  className="text-3xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                >
                  {active.name}
                </h2>
                <span className="gold-line block w-16 mb-4" />
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span
                    className="text-[#c9a84c] text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                  >
                    {active.price}
                  </span>
                  <span className="text-[#666] text-sm">/ hour</span>
                </div>
                <a
                  href="#booking"
                  className="shimmer-gold inline-block px-6 py-3 text-black text-xs tracking-[0.2em] uppercase font-bold"
                >
                  Reserve
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex items-center gap-2 mt-5">
              {vehicles.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "1.5rem" : "0.4rem",
                    height: "0.4rem",
                    backgroundColor: i === activeIndex ? "#c9a84c" : "#444",
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
