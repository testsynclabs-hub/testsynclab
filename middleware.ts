import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { securityHeaders } from "@/lib/security-headers";

/**
 * Keep document HTML / RSC responses out of sticky CDN/browser caches
 * so new Vercel deployments appear on a normal refresh (no hard reload).
 * Also apply baseline security headers on every matched request.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;

  for (const header of securityHeaders) {
    response.headers.set(header.key, header.value);
  }

  if (
    path.startsWith("/_next/static") ||
    path.startsWith("/_next/image") ||
    path.includes(".")
  ) {
    return response;
  }

  response.headers.set(
    "Cache-Control",
    "public, max-age=0, must-revalidate",
  );
  response.headers.set("CDN-Cache-Control", "max-age=0, must-revalidate");
  response.headers.set(
    "Vercel-CDN-Cache-Control",
    "max-age=0, must-revalidate",
  );

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)",
  ],
};
