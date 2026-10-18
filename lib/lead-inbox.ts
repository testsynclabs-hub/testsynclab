import { SITE_EMAIL } from "@/lib/site";

/**
 * Where website leads / career applications should land.
 *
 * Always includes SITE_EMAIL (info@). Also includes SMTP_USER when set, so
 * Gmail App-Password setups still deliver into the mailbox the team checks —
 * even if info@ is not a live inbox.
 */
export function leadRecipients(): string[] {
  const inbox = (process.env.SITE_EMAIL?.trim() || SITE_EMAIL).toLowerCase();
  const smtpUser = process.env.SMTP_USER?.trim().toLowerCase();
  const extra = process.env.LEAD_NOTIFY_EMAIL?.trim() || "";

  const set = new Set<string>();
  if (inbox.includes("@")) set.add(inbox);
  if (smtpUser && smtpUser.includes("@")) set.add(smtpUser);
  for (const part of extra.split(/[,;\s]+/)) {
    const email = part.trim().toLowerCase();
    if (email.includes("@")) set.add(email);
  }
  return [...set];
}

/** Nodemailer / Resend friendly primary + optional CC of the rest. */
export function leadMailTargets() {
  const all = leadRecipients();
  const to = all[0] || SITE_EMAIL;
  const cc = all.slice(1);
  return { to, cc, all };
}

/** Gmail App Passwords are often pasted with spaces — strip them. */
export function smtpPassword() {
  return (process.env.SMTP_PASS || "").replace(/\s+/g, "").trim();
}
