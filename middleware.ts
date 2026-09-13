import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Keep document HTML / RSC responses out of sticky CDN/browser caches
 * so new Vercel deployments appear on a normal refresh (no hard reload).
 * Fingerprinted `/_next/static` assets stay long-lived via next.config.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const path = request.nextUrl.pathname;

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
