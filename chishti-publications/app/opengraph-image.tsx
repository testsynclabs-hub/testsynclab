import { ImageResponse } from "next/og";

export const alt = "Chishti Publications — books, copies, and educational products";
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
          background: "#6B3142",
          color: "#FFF6F2",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "#F8DDE2" }}>
          CHISHTI PUBLICATIONS
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ display: "flex", fontSize: 68, lineHeight: 1.05 }}>
            Quality Books & Copies for Every Learning Journey
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#F8DDE2" }}>chishtipublications.com</div>
      </div>
    ),
    { ...size },
  );
}
