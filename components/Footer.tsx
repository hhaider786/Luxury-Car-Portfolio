import { Phone, Mail, MapPin, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#080808] border-t border-[#c9a84c]/10">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <div className="mb-5">
            <p
              className="text-2xl font-bold tracking-[0.15em] text-white"
              style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
            >
              PRESTIGE
            </p>
            <p className="text-[0.6rem] tracking-[0.35em] uppercase text-[#c9a84c]">
              Chauffeur
            </p>
          </div>
          <p className="text-[#666] text-sm leading-relaxed mb-6">
            Setting the standard for luxury ground transportation since 2009. Available 24
            hours, 7 days a week.
          </p>
          <div className="flex gap-3">
            {[Globe, MessageCircle, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 border border-[#c9a84c]/20 flex items-center justify-center text-[#888] hover:text-[#c9a84c] hover:border-[#c9a84c]/60 transition-all duration-300"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Quick Links
          </h4>
          <ul className="space-y-3">
            {["Our Fleet", "Services", "About Us", "Book Now", "FAQ"].map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="text-[#666] text-sm hover:text-[#c9a84c] hover:pl-1 transition-all duration-300 block"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Services
          </h4>
          <ul className="space-y-3">
            {[
              "Airport Transfers",
              "Corporate Travel",
              "Weddings & Events",
              "City Tours",
              "Hourly Charter",
            ].map((svc) => (
              <li key={svc}>
                <a
                  href="#services"
                  className="text-[#666] text-sm hover:text-[#c9a84c] hover:pl-1 transition-all duration-300 block"
                >
                  {svc}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Contact
          </h4>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <Phone size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[#666] text-sm">+1 (234) 567-890</p>
                <p className="text-[#555] text-xs">Available 24/7</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
              <p className="text-[#666] text-sm">hello@prestigechauffeur.com</p>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={14} className="text-[#c9a84c] mt-0.5 flex-shrink-0" />
              <p className="text-[#666] text-sm">
                123 Mayfair Street
                <br />
                London, W1K 4AA
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-[#555] text-xs tracking-wider">
            © 2025 Prestige Chauffeur. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[#555] text-xs hover:text-[#c9a84c] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="#booking"
          className="shimmer-gold px-5 py-3 text-black text-xs font-bold tracking-[0.2em] uppercase shadow-lg"
        >
          Book Now
        </a>
      </div>
    </footer>
  );
}
