import { sendGAEvent } from "@next/third-parties/google";

const PLAN_VALUES: Record<string, number> = {
  audit: 999,
  basic: 999,
  growth: 1899,
  scale: 2799,
  enterprise: 2799,
};

/** GA4 recommended lead event — mark `generate_lead` as a Key Event in GA Admin. */
export function trackLeadSubmit(fields: {
  plan?: string;
  source?: string;
}) {
  try {
    const plan = (fields.plan || "audit").toLowerCase();
    sendGAEvent("event", "generate_lead", {
      plan,
      source: fields.source || "direct",
      currency: "USD",
      value: PLAN_VALUES[plan] ?? 999,
    });
  } catch {
    // Analytics must never break form UX.
  }
}

/** Careers applications — separate from sales leads so Key Events stay clean. */
export function trackCareerSubmit(fields: { source?: string }) {
  try {
    sendGAEvent("event", "job_application", {
      source: fields.source || "become-a-tester",
    });
  } catch {
    // Analytics must never break form UX.
  }
}

export function trackCtaClick(fields: { source?: string; label?: string }) {
  try {
    sendGAEvent("event", "cta_click", {
      source: fields.source || "site",
      label: fields.label || "free_qa_audit",
    });
  } catch {
    // no-op
  }
}
