import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0a0a0a]">
      <span className="section-eyebrow mb-3">Error 404</span>
      <span className="gold-line mx-auto w-20 block mb-6" aria-hidden />
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
        Wrong turn
      </h1>
      <p className="text-[#aaa] max-w-md mb-10">That route isn&rsquo;t in our system. Let&rsquo;s get you back on the road.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/" className="shimmer-gold px-8 py-3.5 text-black text-xs tracking-[0.25em] uppercase font-bold">
          Back to home
        </Link>
        <Link href="/contact" className="px-8 py-3.5 text-xs tracking-[0.25em] uppercase border border-white/30 text-white hover:border-[#e5c158] hover:text-[#e5c158] transition-all">
          Contact us
        </Link>
      </div>
    </main>
  );
}
