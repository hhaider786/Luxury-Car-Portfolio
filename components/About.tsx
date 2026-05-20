"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Users } from "lucide-react";

const stats = [
  { value: 15, suffix: "+", label: "Years of Excellence" },
  { value: 500, suffix: "+", label: "Satisfied Clients" },
  { value: 50, suffix: "+", label: "Luxury Vehicles" },
  { value: 100, suffix: "%", label: "On-Time Arrivals" },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2000;
          const step = 16;
          const increment = target / (duration / step);
          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, step);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

const values = [
  {
    icon: Shield,
    title: "Discretion",
    description:
      "Your privacy is paramount. We serve many high-profile clients with absolute confidentiality.",
  },
  {
    icon: Clock,
    title: "Punctuality",
    description:
      "We track flights, monitor traffic, and plan meticulously so you're never left waiting.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Every detail — from vehicle presentation to driver attire — is held to the highest standard.",
  },
  {
    icon: Users,
    title: "Bespoke Service",
    description:
      "We tailor every journey to your preferences, ensuring a personal and memorable experience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 px-6"
      style={{ background: "linear-gradient(180deg, #0a0a0a 0%, #0c0c0c 100%)" }}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#c9a84c]/10 mb-24 border border-[#c9a84c]/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#0a0a0a] py-10 text-center">
              <div
                className="text-4xl md:text-5xl font-bold text-[#c9a84c]"
                style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
              >
                <CountUp target={s.value} suffix={s.suffix} />
              </div>
              <div className="text-[#666] text-xs tracking-[0.2em] uppercase mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div
              className="w-full h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80')",
                backgroundColor: "#1a1a1a",
              }}
            />
            <div className="absolute -bottom-6 -right-6 w-40 h-40 border border-[#c9a84c]/30 hidden md:block" />
            <div className="absolute -top-6 -left-6 w-40 h-40 border border-[#c9a84c]/10 hidden md:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section-eyebrow">Our Story</span>
            <span className="gold-line mt-3 mb-6 w-20 block" />
            <h2
              className="text-4xl md:text-5xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
            >
              Redefining Luxury Transportation
            </h2>
            <p className="text-[#888] leading-relaxed mb-5">
              Founded over 15 years ago, Prestige Chauffeur was born from a simple belief: that
              every journey should be a pleasure, not just a necessity. We set out to create a
              service where luxury, reliability, and personal care converge.
            </p>
            <p className="text-[#888] leading-relaxed mb-8">
              Today, we serve discerning clients across the country — from FTSE 100 executives to
              newlyweds, from concert artists to private families — all united by one expectation:
              the very best.
            </p>

            <div className="grid grid-cols-2 gap-5">
              {values.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex gap-3">
                  <Icon size={18} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{title}</p>
                    <p className="text-[#666] text-xs leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
