"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Impeccable service from start to finish. The chauffeur arrived 10 minutes early and the car was immaculate. Will use Prestige for every business trip.",
    name: "James Harrington",
    city: "London",
  },
  {
    quote:
      "We used Prestige for our wedding day and it was absolutely perfect. The Rolls-Royce was stunning and the driver was incredibly professional.",
    name: "Sarah & Michael Cole",
    city: "New York",
  },
  {
    quote:
      "As a frequent flyer, punctuality is everything. Prestige has never let me down — not once in three years of corporate bookings.",
    name: "David Chen",
    city: "Hong Kong",
  },
  {
    quote:
      "The most luxurious travel experience I've had outside of a private jet. The Mercedes S-Class was spotless and the champagne was a wonderful touch.",
    name: "Isabella Fontaine",
    city: "Paris",
  },
  {
    quote:
      "Exceptional attention to detail. My client was blown away — it genuinely made a difference to our business relationship.",
    name: "Robert Walsh",
    city: "Dubai",
  },
  {
    quote:
      "Booked the Bentley for a special anniversary dinner. My wife couldn't believe how beautiful everything was. Truly memorable.",
    name: "Thomas Albrecht",
    city: "Monaco",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div className="flex-shrink-0 w-80 bg-[#111] border border-[#c9a84c]/10 p-7 mx-3">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="#c9a84c" className="text-[#c9a84c]" />
        ))}
      </div>
      <p className="text-[#bbb] text-sm leading-relaxed mb-6 italic">
        &ldquo;{t.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 border-t border-[#c9a84c]/10 pt-4">
        <div className="w-9 h-9 rounded-full bg-[#c9a84c]/20 flex items-center justify-center text-[#c9a84c] font-bold text-sm">
          {t.name[0]}
        </div>
        <div>
          <p
            className="text-white text-sm font-medium"
            style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          >
            {t.name}
          </p>
          <p className="text-[#666] text-xs tracking-wider">{t.city}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-[#080808] overflow-hidden">
      <motion.div
        className="text-center mb-14 px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="section-eyebrow">Client Stories</span>
        <span className="gold-line mt-3 mx-auto w-20 block" />
        <h2
          className="text-4xl md:text-5xl font-bold text-white mt-5"
          style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
        >
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="marquee-wrapper overflow-hidden">
        <div className="marquee-track">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
