import { headers } from "next/headers";

/** Escape text before interpolating into HTML email bodies. */
export function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function clampText(value: string, max: number) {
  return value.trim().slice(0, max);
}

const CONTACT_PLANS = new Set([
  "audit",
  "starter",
  "growth",
  "scale",
  "ai",
  "ai-consult",
  "retainer",
  "custom",
]);

export function sanitizePlan(value: string) {
  const plan = value.trim().toLowerCase().slice(0, 40);
  if (!plan) return "audit";
  if (CONTACT_PLANS.has(plan)) return plan;
  // Allow simple slug-like custom plans from CTAs, still bounded.
  if (/^[a-z0-9][a-z0-9_-]{0,39}$/.test(plan)) return plan;
  return "audit";
}

export function sanitizeSource(value: string) {
  const source = value.trim().toLowerCase().slice(0, 80);
  if (!source) return "direct";
  if (/^[a-z0-9][a-z0-9_./:-]{0,79}$/.test(source)) return source;
  return "direct";
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(value: string) {
  return value.length <= 254 && EMAIL_PATTERN.test(value);
}

/** Best-effort in-memory rate limit (per serverless instance). */
type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function rateLimit(key: string, limit: number, windowMs: number) {
  const now = Date.now();
  const current = buckets.get(key);
  if (!current || current.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }
  if (current.count >= limit) {
    return { ok: false, remaining: 0 };
  }
  current.count += 1;
  return { ok: true, remaining: limit - current.count };
}

export async function clientKey(prefix: string) {
  const h = await headers();
  const forwarded = h.get("x-forwarded-for")?.split(",")[0]?.trim();
  const realIp = h.get("x-real-ip")?.trim();
  const ip = forwarded || realIp || "unknown";
  return `${prefix}:${ip}`;
}

/** PDF (%PDF) or ZIP/DOCX (PK) magic bytes — rejects renamed executables. */
export function looksLikeAllowedCv(buffer: Buffer, filename: string) {
  const lower = filename.toLowerCase();
  if (lower.endsWith(".pdf")) {
    return buffer.subarray(0, 4).toString("utf8") === "%PDF";
  }
  if (lower.endsWith(".docx") || lower.endsWith(".doc")) {
    // OLE Compound File (legacy .doc) or ZIP (.docx)
    const ole =
      buffer.length >= 4 &&
      buffer[0] === 0xd0 &&
      buffer[1] === 0xcf &&
      buffer[2] === 0x11 &&
      buffer[3] === 0xe0;
    const zip =
      buffer.length >= 2 && buffer[0] === 0x50 && buffer[1] === 0x4b;
    return ole || zip;
  }
  return false;
}
