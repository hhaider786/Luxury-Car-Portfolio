"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, type MotionValue } from "framer-motion";
import Link from "next/link";
import { fleet } from "@/data/fleet";
import { ImageWithBlur } from "@/lib/motion/ImageWithBlur";

const vehicles = fleet;
const SECTION_MULTIPLIER = vehicles.length + 1;

function useIndexFromProgress(progress: MotionValue<number>): [number, (n: number) => void] {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const update = () => {
      const p = progress.get();
      const i = Math.min(vehicles.length - 1, Math.max(0, Math.floor(p * SECTION_MULTIPLIER)));
      setValue(i);
    };
    update();
    return progress.on("change", update);
  }, [progress]);
  return [value, setValue];
}

export default function Fleet() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const [activeIndex, setActiveIndex] = useIndexFromProgress(scrollYProgress);
  const active = vehicles[activeIndex];

  return (
    <section
      id="fleet"
      ref={ref}
      style={{ height: `${SECTION_MULTIPLIER * 100}vh` }}
    >
      <div className="sticky top-0 h-screen bg-[#0a0a0a]" style={{ overflow: "clip" }}>
        <div className="hidden md:block absolute inset-0">
          <div className="absolute left-0 top-0 w-[58%] h-full overflow-hidden">
            <AnimatePresence mode="sync">
              <motion.div
                key={active.slug + "-img"}
                className="absolute inset-[-4%]"
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.85, ease: "easeOut" }}
              >
                <ImageWithBlur src={active.image} alt="" aria-hidden fill priority={activeIndex === 0} sizes="60vw" className="object-cover" />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0a0a0a]" aria-hidden />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/40 via-transparent to-[#0a0a0a]/30" aria-hidden />
          </div>

          <div className="absolute right-0 top-0 w-[46%] h-full flex flex-col justify-center pl-4 pr-16">
            <div className="absolute top-10 left-4">
              <span className="section-eyebrow">Our exclusive fleet</span>
            </div>

            <div className="absolute top-10 right-16 font-mono text-sm tracking-widest" aria-hidden>
              <span className="text-[#e5c158]">{String(activeIndex + 1).padStart(2, "0")}</span>
              <span className="text-[#444] mx-1">/</span>
              <span className="text-[#666]">{String(vehicles.length).padStart(2, "0")}</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.article
                key={active.slug}
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
                <span className="gold-line block w-20 mb-7" aria-hidden />

                <ul className="space-y-3 mb-8">
                  {active.specs.map((spec, si) => (
                    <motion.li
                      key={spec}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: 18 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.12 + si * 0.09, duration: 0.32 }}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#e5c158] flex-shrink-0" aria-hidden />
                      <span className="text-[#ccc] text-sm tracking-wide">{spec}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-2 mb-7">
                  <span className="text-[#e5c158] text-4xl font-bold" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
                    {active.price}
                  </span>
                  <span className="text-[#888] text-sm">/ hour</span>
                </div>

                <div className="flex gap-3">
                  <a
                    href="#booking"
                    className="shimmer-gold inline-block px-6 py-3.5 text-black text-xs tracking-[0.25em] uppercase font-bold"
                  >
                    Reserve
                  </a>
                  <Link
                    href={`/fleet/${active.slug}`}
                    className="inline-block px-6 py-3.5 border border-white/25 text-white text-xs tracking-[0.25em] uppercase hover:border-[#e5c158] hover:text-[#e5c158] transition-all"
                  >
                    Details
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="absolute bottom-10 left-4 flex items-center gap-2.5" aria-label="Fleet progress">
              {vehicles.map((v, i) => (
                <button
                  type="button"
                  key={v.slug}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${v.name}`}
                  aria-current={i === activeIndex}
                  className="rounded-full transition-all duration-500 focus-visible:ring-2 focus-visible:ring-[#e5c158] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
                  style={{
                    width: i === activeIndex ? "2rem" : "0.45rem",
                    height: "0.45rem",
                    backgroundColor: i === activeIndex ? "#e5c158" : "#3a3a3a",
                  }}
                />
              ))}
            </div>

            <div className="absolute bottom-10 right-16 text-[#555] text-[0.65rem] tracking-[0.25em] uppercase" aria-hidden>
              Scroll to explore
            </div>
          </div>
        </div>

        <div className="md:hidden absolute inset-0">
          <AnimatePresence mode="sync">
            <motion.div
              key={active.slug + "-mob"}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ImageWithBlur src={active.image} alt="" aria-hidden fill sizes="100vw" className="object-cover" />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/20" aria-hidden />

          <div className="absolute top-6 right-6 font-mono text-sm tracking-widest" aria-hidden>
            <span className="text-[#e5c158]">{String(activeIndex + 1).padStart(2, "0")}</span>
            <span className="text-[#555] mx-1">/</span>
            <span className="text-[#777]">{String(vehicles.length).padStart(2, "0")}</span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 px-6 pb-14">
            <AnimatePresence mode="wait">
              <motion.article
                key={active.slug + "-mob-text"}
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
                <span className="gold-line block w-16 mb-4" aria-hidden />
                <div className="flex items-baseline gap-1.5 mb-5">
                  <span
                    className="text-[#e5c158] text-2xl font-bold"
                    style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                  >
                    {active.price}
                  </span>
                  <span className="text-[#888] text-sm">/ hour</span>
                </div>
                <div className="flex gap-2">
                  <a href="#booking" className="shimmer-gold inline-block px-5 py-3 text-black text-xs tracking-[0.2em] uppercase font-bold">
                    Reserve
                  </a>
                  <Link href={`/fleet/${active.slug}`} className="inline-block px-5 py-3 border border-white/25 text-white text-xs tracking-[0.2em] uppercase">
                    Details
                  </Link>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="flex items-center gap-2 mt-5" aria-label="Fleet progress">
              {vehicles.map((v, i) => (
                <button
                  type="button"
                  key={v.slug}
                  onClick={() => setActiveIndex(i)}
                  aria-label={`Show ${v.name}`}
                  aria-current={i === activeIndex}
                  className="rounded-full transition-all duration-500"
                  style={{
                    width: i === activeIndex ? "1.5rem" : "0.4rem",
                    height: "0.4rem",
                    backgroundColor: i === activeIndex ? "#e5c158" : "#555",
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
