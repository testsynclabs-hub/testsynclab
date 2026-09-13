import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
];

/** HTML/docs: always revalidate so deploys show without a hard refresh. */
const htmlCacheHeaders = [
  {
    key: "Cache-Control",
    value: "public, max-age=0, must-revalidate",
  },
  {
    key: "CDN-Cache-Control",
    value: "max-age=0, must-revalidate",
  },
  {
    key: "Vercel-CDN-Cache-Control",
    value: "max-age=0, must-revalidate",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Fingerprinted build assets can stay cached forever.
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Page HTML + RSC payloads — revalidate on every request.
        source: "/:path((?!_next/static|_next/image|.*\\..*).*)",
        headers: htmlCacheHeaders,
      },
      {
        source: "/",
        headers: htmlCacheHeaders,
      },
    ];
  },
};

export default nextConfig;
