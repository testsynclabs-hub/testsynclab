import { sendGAEvent } from "@next/third-parties/google";

/** Fire a GA4 lead conversion when the contact form succeeds. */
export function trackLeadSubmit(fields: {
  plan?: string;
  source?: string;
}) {
  try {
    sendGAEvent("event", "generate_lead", {
      plan: fields.plan || "audit",
      source: fields.source || "direct",
    });
  } catch {
    // Analytics must never break form UX.
  }
}
