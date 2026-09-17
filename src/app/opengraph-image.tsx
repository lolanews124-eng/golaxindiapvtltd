import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Golax India — Offshore Software Partner for USA & Global Clients";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0f172a 100%)",
          color: "#ffffff",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            marginBottom: "24px",
            fontSize: 28,
            color: "#38bdf8",
            fontWeight: 600,
          }}
        >
          Offshore Partner · USA · UK · UAE · 12+ Countries
        </div>
        <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, marginBottom: 24 }}>
          Golax India Pvt Ltd
        </div>
        <div style={{ fontSize: 32, color: "#cbd5e1", lineHeight: 1.4, maxWidth: 900 }}>
          Hire senior engineers from India — Web · SaaS · Mobile · Dedicated Teams
        </div>
        <div style={{ marginTop: 40, fontSize: 24, color: "#94a3b8" }}>
          golaxindiapvtltd.in · USD billing · NDA & IP ready
        </div>
      </div>
    ),
    { ...size }
  );
}
