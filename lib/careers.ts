export const CAREERS_PATH = "/become-a-tester" as const;

export const CV_MAX_BYTES = 10 * 1024 * 1024; // 10 MB
/** Prefer smaller uploads for reliable email delivery through serverless limits. */
export const CV_SERVER_SAFE_BYTES = 3.5 * 1024 * 1024;

export const CV_ACCEPT =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document" as const;

export const CV_MIME_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
] as const;

export const CV_EXTENSIONS = [".pdf", ".doc", ".docx"] as const;

export type CareerInterest = "join-team" | "freelance";

export const careerInterests: {
  value: CareerInterest;
  label: string;
}[] = [
  { value: "join-team", label: "Join the team (full-time / retainer)" },
  { value: "freelance", label: "Freelance / contract" },
];

export const careerSkillOptions = [
  "Manual / exploratory",
  "API testing",
  "Playwright / automation",
  "Mobile QA",
  "AI / chatbot QA",
] as const;

export const hiringProcessSteps = [
  {
    title: "Apply",
    detail: "Short form + CV. We review on business days.",
  },
  {
    title: "Initial call",
    detail: "15–20 min fit call — experience, tools, and availability.",
  },
  {
    title: "Final interview",
    detail: "Deeper QA discussion / practical check with the team.",
  },
  {
    title: "Selected or rejected",
    detail: "Clear yes/no with next steps — we do not leave you hanging.",
  },
] as const;

export function isAllowedCvFile(file: File) {
  const name = file.name.toLowerCase();
  const extOk = CV_EXTENSIONS.some((ext) => name.endsWith(ext));
  const mimeOk =
    !file.type ||
    (CV_MIME_TYPES as readonly string[]).includes(file.type);
  return extOk && mimeOk && file.size > 0 && file.size <= CV_MAX_BYTES;
}

export function formatMb(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
