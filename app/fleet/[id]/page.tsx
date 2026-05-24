import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { ChevronRight, Check } from "lucide-react";
import { fleet, getVehicleBySlug } from "@/data/fleet";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ImageWithBlur } from "@/lib/motion/ImageWithBlur";
import { buildMetadata } from "@/lib/seo/buildMetadata";
import { JsonLd } from "@/lib/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schemas";

const SITE_URL = "https://prestige-chauffeur.example.com";

export function generateStaticParams() {
  return fleet.map((v) => ({ id: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const v = getVehicleBySlug(id);
  if (!v) return { title: "Vehicle not found" };
  return buildMetadata({
    title: v.name,
    description: `${v.name} (${v.class}) — ${v.description.slice(0, 140)}`,
    siteName: "Prestige Chauffeur",
    url: `${SITE_URL}/fleet/${v.slug}`,
    ogImage: v.image,
  });
}

export default async function FleetDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const v = getVehicleBySlug(id);
  if (!v) notFound();

  const others = fleet.filter((x) => x.slug !== v.slug).slice(0, 3);

  return (
    <>
      <Navigation />
      <main id="main" className="pt-24 pb-20 bg-[#0a0a0a]">
        <nav className="max-w-7xl mx-auto px-6 mb-6" aria-label="Breadcrumb">
          <ol className="flex items-center gap-2 text-[0.65rem] tracking-[0.2em] uppercase text-[#888]">
            <li><Link href="/" className="hover:text-[#e5c158]">Home</Link></li>
            <li><ChevronRight size={11} aria-hidden /></li>
            <li><Link href="/#fleet" className="hover:text-[#e5c158]">Fleet</Link></li>
            <li><ChevronRight size={11} aria-hidden /></li>
            <li aria-current="page" className="text-white truncate max-w-[40vw]">{v.name}</li>
          </ol>
        </nav>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="relative aspect-[3/2] bg-[#1a1a1a] overflow-hidden">
            <ImageWithBlur src={v.image} alt={`${v.name} exterior`} fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <p className="section-eyebrow mb-3">{v.class}</p>
            <h1
              className="text-4xl md:text-5xl font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}
            >
              {v.name}
            </h1>
            <span className="gold-line block w-20 mb-7" aria-hidden />
            <p className="text-[#bbb] text-base leading-relaxed mb-8">{v.description}</p>

            <ul className="space-y-3 mb-8" aria-label="Specifications">
              {v.specs.map((s) => (
                <li key={s} className="flex items-center gap-3">
                  <Check size={15} className="text-[#e5c158]" aria-hidden />
                  <span className="text-[#ccc] text-sm">{s}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-[#e5c158] text-4xl font-bold" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
                {v.price}
              </span>
              <span className="text-[#888]">/ hour</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#booking"
                className="shimmer-gold inline-block px-8 py-4 text-black text-xs tracking-[0.25em] uppercase font-bold text-center"
              >
                Reserve this vehicle
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 text-xs tracking-[0.25em] uppercase border border-white/25 text-white hover:border-[#e5c158] hover:text-[#e5c158] transition-all text-center"
              >
                Concierge enquiry
              </Link>
            </div>
          </div>
        </div>

        <section className="max-w-7xl mx-auto px-6 mt-16">
          <h2 className="text-[0.7rem] tracking-[0.2em] uppercase text-[#e5c158] mb-5">What this vehicle includes</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {v.features.map((f) => (
              <li key={f} className="flex items-start gap-3 border border-[#e5c158]/15 bg-[#0f0f0f] p-4">
                <Check size={16} className="text-[#e5c158] mt-0.5" aria-hidden />
                <span className="text-white/85 text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-7xl mx-auto px-6 mt-20">
          <span className="section-eyebrow mb-2 block">More from the fleet</span>
          <span className="gold-line block w-20 mb-10" aria-hidden />
          <div className="grid md:grid-cols-3 gap-5">
            {others.map((o) => (
              <Link key={o.slug} href={`/fleet/${o.slug}`} className="group block border border-[#e5c158]/15 bg-[#0f0f0f] overflow-hidden hover:border-[#e5c158]/50 transition-all">
                <div className="relative aspect-[3/2] bg-[#1a1a1a]">
                  <ImageWithBlur src={o.image} alt={o.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <p className="section-eyebrow text-[0.55rem] mb-1">{o.class}</p>
                  <h3 className="text-white text-xl" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>{o.name}</h3>
                  <p className="text-[#e5c158] mt-1 text-sm">{o.price} / hour</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", url: SITE_URL },
          { name: "Fleet", url: `${SITE_URL}/#fleet` },
          { name: v.name, url: `${SITE_URL}/fleet/${v.slug}` },
        ])}
      />
    </>
  );
}
