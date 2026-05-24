import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Prestige Chauffeur — Luxury Car Service";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 20% 30%, #1a1a1a 0%, #0a0a0a 60%)",
          color: "#fff",
          fontFamily: "serif",
        }}
      >
        <div style={{ display: "flex", letterSpacing: 14, fontSize: 22, color: "#e5c158" }}>PRESTIGE CHAUFFEUR</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ fontSize: 24, color: "#e5c158", letterSpacing: 6, textTransform: "uppercase" }}>
            Luxury Car Service · London
          </div>
          <div style={{ fontSize: 92, color: "#fff", lineHeight: 1.05, letterSpacing: -1 }}>
            Arrive in silence.<br /><i style={{ color: "#e5c158" }}>Depart in style.</i>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 20, color: "#aaa" }}>
          <span>24/7 · Airport · Corporate · Events</span>
          <span>4.95 ★ · 612 reviews</span>
        </div>
      </div>
    ),
    size
  );
}
