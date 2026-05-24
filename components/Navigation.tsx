"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import { FocusTrap } from "@/lib/a11y/FocusTrap";
import { useScrollLock } from "@/lib/a11y/useScrollLock";
import { useEscapeKey } from "@/lib/a11y/useEscapeKey";

const navLinks = [
  { href: "/#fleet", label: "Our fleet" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useScrollLock(menuOpen);
  useEscapeKey(() => setMenuOpen(false), menuOpen);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#e5c158]/15 py-4"
            : "bg-transparent py-6"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex flex-col leading-none group" aria-label="Prestige Chauffeur — home">
            <span
              className="text-2xl font-bold tracking-[0.15em] text-white group-hover:text-[#e5c158] transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
            >
              PRESTIGE
            </span>
            <span className="text-[0.6rem] tracking-[0.35em] uppercase text-[#e5c158]">
              Chauffeur
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm tracking-widest uppercase text-[#bbb] hover:text-[#e5c158] transition-colors duration-300 relative group"
              >
                {link.label}
                <span aria-hidden className="absolute -bottom-1 left-0 w-0 h-px bg-[#e5c158] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+442079460900"
              className="flex items-center gap-2 text-sm text-[#bbb] hover:text-[#e5c158] transition-colors"
              aria-label="Call +44 20 7946 0900"
            >
              <Phone size={14} aria-hidden />
              <span className="tracking-wider">+44 20 7946 0900</span>
            </a>
            <a
              href="/#booking"
              className="px-6 py-2.5 text-xs tracking-[0.2em] uppercase border border-[#e5c158] text-[#e5c158] hover:bg-[#e5c158] hover:text-black transition-all duration-300 font-medium"
            >
              Book now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
          >
            {menuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="mobile-nav"
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col pt-28 px-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <FocusTrap active className="flex flex-col gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className="block text-3xl font-light tracking-widest text-white hover:text-[#e5c158] transition-colors"
                    style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href="/#booking"
                className="mt-4 w-full text-center py-4 border border-[#e5c158] text-[#e5c158] tracking-[0.2em] uppercase text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Book now
              </a>
            </FocusTrap>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
