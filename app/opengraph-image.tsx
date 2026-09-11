import { ImageResponse } from "next/og";

export const alt = "TestSync Lab — Enterprise Software Quality Assurance";
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
          TestSync Lab
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div
            style={{
              color: "#0f172a",
              fontSize: 58,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 920,
            }}
          >
            Enterprise Software Quality Assurance & Automation
          </div>
          <div style={{ color: "#475569", fontSize: 28, maxWidth: 860 }}>
            Automated testing, API validation, performance testing, and
            continuous QA for web and mobile platforms.
          </div>
        </div>
        <div style={{ color: "#1e40af", fontSize: 22, fontWeight: 600 }}>
          testsynclab.com
        </div>
      </div>
    ),
    { ...size },
  );
}
