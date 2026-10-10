export const FREE_QA_AUDIT_LABEL = "Free QA Audit" as const;
export const FREE_QA_AUDIT_PLAN = "audit" as const;
export const AI_CONSULT_LABEL = "Talk about AI testing" as const;
export const AI_CONSULT_PLAN = "ai" as const;

export const PLAN_LABELS: Record<string, string> = {
  audit: "Free QA Audit",
  basic: "Basic",
  growth: "Growth",
  scale: "Scale",
  enterprise: "Enterprise",
  ai: "AI testing",
  "ai-test-sprint": "AI Testing Sprint",
  "ai-qa-retainer": "AI + QA retainer add-on",
  "ai-sprint": "AI Feature Sprint (build + test)",
  "ai-pod": "AI + QA pod",
};

export function planDisplayName(plan: string) {
  return PLAN_LABELS[plan] ?? plan.replace(/-/g, " ");
}

export function auditHref(source?: string) {
  const params = new URLSearchParams({ plan: FREE_QA_AUDIT_PLAN });
  if (source) params.set("source", source);
  return `/contact?${params.toString()}`;
}

export function isAiInquiry(plan: string) {
  return plan === AI_CONSULT_PLAN || plan.startsWith("ai-");
}

export function aiHref(source?: string, plan: string = AI_CONSULT_PLAN) {
  const params = new URLSearchParams({ plan });
  if (source) params.set("source", source);
  return `/contact?${params.toString()}`;
}
