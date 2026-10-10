import { headers } from "next/headers";
import { SITE_URL } from "@/lib/site";

/**
 * Reject cross-site POSTs to server actions (basic CSRF guard).
 * Allows missing Origin (some same-site navigations) when Host matches our site.
 */
export async function assertTrustedOrigin(): Promise<boolean> {
  const h = await headers();
  const origin = h.get("origin")?.trim();
  const host = h.get("x-forwarded-host")?.split(",")[0]?.trim() || h.get("host")?.trim();

  const allowedHosts = new Set<string>();
  try {
    allowedHosts.add(new URL(SITE_URL).host);
  } catch {
    // ignore
  }
  if (host) {
    allowedHosts.add(host.replace(/:\d+$/, ""));
  }
  // Local / preview hosts for Cursor + Vercel previews
  allowedHosts.add("localhost");
  allowedHosts.add("127.0.0.1");

  if (!origin) {
    // No Origin — only allow when Host is one of ours (server action from our pages).
    return Boolean(host && [...allowedHosts].some((allowed) => host.includes(allowed)));
  }

  try {
    const originHost = new URL(origin).host.replace(/:\d+$/, "");
    if (allowedHosts.has(originHost)) return true;
    // Vercel preview deployments: *.vercel.app
    if (originHost.endsWith(".vercel.app")) return true;
    return false;
  } catch {
    return false;
  }
}
