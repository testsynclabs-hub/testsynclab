import { ImageResponse } from "next/og";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export const alt =
  "TestSync Lab — Affordable monthly QA retainers from $999";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  const host = SITE_URL.replace(/^https?:\/\//, "");

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background:
            "linear-gradient(135deg, #eff6ff 0%, #ffffff 45%, #dbeafe 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            color: "#1d4ed8",
            fontSize: 36,
            fontWeight: 800,
          }}
        >
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#0f172a",
              fontSize: 54,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Senior QA retainers that keep every release shippable
          </div>
          <div style={{ color: "#475569", fontSize: 28, maxWidth: 860 }}>
            Manual, API, Playwright automation, and release gates — monthly
            packages from $999 for product teams worldwide.
          </div>
        </div>
        <div style={{ color: "#1e40af", fontSize: 22, fontWeight: 600 }}>
          {host}
        </div>
      </div>
    ),
    { ...size },
  );
}
