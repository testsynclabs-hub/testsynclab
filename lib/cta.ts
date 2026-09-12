export const FREE_QA_AUDIT_LABEL = "Free QA Audit" as const;
export const FREE_QA_AUDIT_PLAN = "audit" as const;

export function auditHref(source?: string) {
  const params = new URLSearchParams({ plan: FREE_QA_AUDIT_PLAN });
  if (source) params.set("source", source);
  return `/contact?${params.toString()}`;
}
