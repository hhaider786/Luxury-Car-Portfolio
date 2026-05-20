"use client";

import { motion } from "framer-motion";

const vehicles = [
  {
    name: "Rolls-Royce Phantom",
    class: "Ultra Luxury",
    specs: ["6.75L V12 Engine", "5 Passengers", "Starlight Headliner", "Bespoke Leather"],
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&q=80",
    price: "$300/hr",
  },
  {
    name: "Mercedes S-Class",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Burmester Sound", "Massage Seats"],
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80",
    price: "$180/hr",
  },
  {
    name: "Bentley Flying Spur",
    class: "Grand Tourer",
    specs: ["6.0L W12 Engine", "4 Passengers", "Diamond Stitching", "Naim Audio"],
    image:
      "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600&q=80",
    price: "$250/hr",
  },
  {
    name: "Cadillac Escalade",
    class: "SUV Luxury",
    specs: ["6.2L V8 Engine", "6 Passengers", '35" Screen', "AKG Sound System"],
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80",
    price: "$200/hr",
  },
  {
    name: "Mercedes V-Class",
    class: "Group Luxury",
    specs: ["2.0L Diesel", "7 Passengers", "Executive Seating", "Conference Setup"],
    image:
      "https://images.unsplash.com/photo-1574023278046-e7f25c9028ee?w=600&q=80",
    price: "$160/hr",
  },
  {
    name: "BMW 7 Series",
    class: "Executive",
    specs: ["3.0L Inline-6", "4 Passengers", "Bowers & Wilkins", "Sky Lounge Roof"],
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80",
    price: "$150/hr",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Fleet() {
  return (
    <section id="fleet" className="bg-[#0a0a0a] py-24 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-eyebrow">World-Class Vehicles</span>
          <span className="gold-line mt-3 mx-auto w-20 block" />
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-5"
            style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          >
            Our Exclusive Fleet
          </h2>
          <p className="text-[#888] mt-4 max-w-xl mx-auto leading-relaxed">
            Every vehicle in our collection is meticulously maintained and presented to
            the highest standard of luxury.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
        >
          {vehicles.map((v) => (
            <motion.div
              key={v.name}
              variants={item}
              className="group relative bg-[#111] overflow-hidden border border-transparent hover:border-[#c9a84c]/30 transition-colors duration-500"
            >
              <div className="relative h-56 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${v.image}')`, backgroundColor: "#1e1e1e" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent" />
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#c9a84c] text-black text-[0.65rem] tracking-[0.2em] uppercase font-bold">
                  {v.class}
                </div>
              </div>

              <div className="p-6">
                <h3
                  className="text-xl font-semibold text-white mb-1"
                  style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                >
                  {v.name}
                </h3>
                <span className="gold-line block w-12 mb-4" />

                <div className="overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 max-h-0 group-hover:max-h-40 transition-all duration-500">
                    {v.specs.map((s) => (
                      <div key={s} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#c9a84c] flex-shrink-0" />
                        <span className="text-[#888] text-xs">{s}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#c9a84c]/10">
                  <span className="text-[#888] text-xs tracking-widest uppercase">
                    From {v.price}
                  </span>
                  <a
                    href="#booking"
                    className="text-[#c9a84c] text-xs tracking-wider uppercase hover:underline"
                  >
                    Book →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
