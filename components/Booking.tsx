"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Booking() {
  return (
    <section id="booking" className="py-24 md:py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">Reserve Your Journey</span>
          <span className="gold-line mt-3 mx-auto w-20 block" />
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-5"
            style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          >
            Book a Chauffeur
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-0 border border-[#c9a84c]/15">
          <motion.div
            className="md:col-span-2 bg-[#c9a84c]/5 border-b md:border-b-0 md:border-r border-[#c9a84c]/10 p-10 flex flex-col justify-between"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="w-px h-24 bg-[#c9a84c] mb-8" />
              <Quote size={24} className="text-[#c9a84c] mb-4" />
              <p
                className="text-white text-xl leading-relaxed italic"
                style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
              >
                &ldquo;Every journey deserves to be an experience, not just a commute.&rdquo;
              </p>
              <p className="text-[#c9a84c] text-sm mt-4 tracking-wider">
                — The Prestige Promise
              </p>
            </div>
            <div className="mt-12 space-y-4">
              {[
                "Fully insured & licensed fleet",
                "Professional, vetted chauffeurs",
                "24/7 customer support",
                "Complimentary water & WiFi",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c]" />
                  <span className="text-[#aaa] text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.form
            className="md:col-span-3 bg-[#0f0f0f] p-10 grid grid-cols-1 md:grid-cols-2 gap-5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
          >
            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Smith"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="+1 (234) 567-890"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="john@example.com"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Service Type
              </label>
              <select
                required
                defaultValue=""
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none cursor-pointer"
              >
                <option value="" disabled>Select service</option>
                <option value="airport">Airport Transfer</option>
                <option value="corporate">Corporate Travel</option>
                <option value="wedding">Wedding &amp; Events</option>
                <option value="tour">City Tour</option>
                <option value="hourly">Hourly Charter</option>
              </select>
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Passengers
              </label>
              <select
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors appearance-none cursor-pointer"
              >
                {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                  <option key={n} value={n}>
                    {n} {n === 1 ? "Passenger" : "Passengers"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Pickup Location
              </label>
              <input
                type="text"
                placeholder="Street, City"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Destination
              </label>
              <input
                type="text"
                placeholder="Street, City"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white placeholder-[#555] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors"
              />
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Date
              </label>
              <input
                type="date"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors [color-scheme:dark]"
              />
            </div>

            <div>
              <label className="block text-[#888] text-xs tracking-[0.2em] uppercase mb-2">
                Time
              </label>
              <input
                type="time"
                required
                className="w-full bg-[#111] border border-[#c9a84c]/15 text-white px-4 py-3 text-sm focus:outline-none focus:border-[#c9a84c]/60 transition-colors [color-scheme:dark]"
              />
            </div>

            <div className="md:col-span-2 mt-2">
              <button
                type="submit"
                className="shimmer-gold w-full py-4 text-black font-bold text-sm tracking-[0.25em] uppercase hover:opacity-90 transition-opacity cursor-pointer"
              >
                Confirm Reservation
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
