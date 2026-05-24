"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => { console.error(error); }, [error]);

  return (
    <main id="main" className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#0a0a0a]">
      <span className="section-eyebrow mb-3" style={{ color: "#f87171" }}>Engine warning</span>
      <h1 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6" style={{ fontFamily: "var(--font-playfair-var), Georgia, serif" }}>
        We hit a bump.
      </h1>
      <p className="text-[#aaa] max-w-md mb-10">Something unexpected happened. Try again, or head back home.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button onClick={reset} className="shimmer-gold px-8 py-3.5 text-black text-xs tracking-[0.25em] uppercase font-bold">
          Try again
        </button>
        <Link href="/" className="px-8 py-3.5 text-xs tracking-[0.25em] uppercase border border-white/30 text-white hover:border-[#e5c158] hover:text-[#e5c158] transition-all">
          Back to home
        </Link>
      </div>
    </main>
  );
}
