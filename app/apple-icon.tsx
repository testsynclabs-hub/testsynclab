import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1D4ED8",
          borderRadius: 40,
        }}
      >
        <svg width="120" height="120" viewBox="0 0 512 512">
          <path
            d="M156 210c28-48 92-72 148-58"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="36"
            strokeLinecap="round"
          />
          <path
            d="M356 302c-28 48-92 72-148 58"
            fill="none"
            stroke="#93C5FD"
            strokeWidth="36"
            strokeLinecap="round"
          />
          <path
            d="M188 268l52 52 112-128"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="52"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
