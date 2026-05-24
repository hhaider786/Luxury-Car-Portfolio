import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ContactForm } from "./ContactForm";
import { buildMetadata } from "@/lib/seo/buildMetadata";

const SITE_URL = "https://prestige-chauffeur.example.com";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Contact Prestige Chauffeur — 24/7 concierge support, corporate accounts, and bespoke enquiries.",
  siteName: "Prestige Chauffeur",
  url: `${SITE_URL}/contact`,
});

const INFO = [
  { Icon: Phone, label: "Phone (24/7)", value: "+44 20 7946 0900", href: "tel:+442079460900" },
  { Icon: Mail, label: "Email", value: "bookings@prestige-chauffeur.example.com", href: "mailto:bookings@prestige-chauffeur.example.com" },
  { Icon: MapPin, label: "Office", value: "1 Brook Street · London · W1S 1AA" },
  { Icon: Clock, label: "Concierge hours", value: "24 hours · 7 days a week" },
];

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main id="main" className="pt-24 pb-20 bg-[#0a0a0a]">
        <header className="text-center px-6 py-12 max-w-3xl mx-auto">
          <span className="section-eyebrow">Concierge desk</span>
          <span className="gold-line mt-3 mx-auto w-20 block" aria-hidden />
          <h1
            className="text-5xl md:text-6xl font-bold text-white mt-5 mb-4"
            style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
          >
            Get in touch
          </h1>
          <p className="text-[#bbb]">For bookings, corporate accounts, or any bespoke enquiry — our concierge is available around the clock.</p>
        </header>

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-[1.1fr_1fr] gap-10 items-start">
          <ContactForm />

          <aside className="space-y-4">
            {INFO.map(({ Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-4 p-5 border border-[#e5c158]/15 bg-[#0f0f0f]">
                <Icon size={18} className="text-[#e5c158] mt-0.5 flex-shrink-0" aria-hidden />
                <div className="min-w-0">
                  <p className="text-[#aaa] text-[0.65rem] tracking-[0.25em] uppercase mb-1">{label}</p>
                  {href ? (
                    <a href={href} className="text-white hover:text-[#e5c158] transition-colors break-words">
                      {value}
                    </a>
                  ) : (
                    <p className="text-white break-words">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
