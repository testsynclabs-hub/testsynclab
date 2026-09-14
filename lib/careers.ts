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

export type CareerInterest =
  | "join-team"
  | "freelance"
  | "cv-review"
  | "open-to-both";

export const careerInterests: {
  value: CareerInterest;
  label: string;
  hint: string;
}[] = [
  {
    value: "join-team",
    label: "Join as a tester",
    hint: "You want a role when we open capacity.",
  },
  {
    value: "freelance",
    label: "Freelance / contract",
    hint: "Project or surge coverage work.",
  },
  {
    value: "cv-review",
    label: "CV review only",
    hint: "Feedback on your QA resume — no hire assumed.",
  },
  {
    value: "open-to-both",
    label: "Open to hire or review",
    hint: "We’ll reply with the best next step.",
  },
];

export const careerSkillOptions = [
  "Manual / exploratory",
  "API testing",
  "Playwright / UI automation",
  "Mobile QA",
  "Performance basics",
  "AI / chatbot QA",
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
  return `${(bytes / (1024 * 1024)).toFixed(bytes >= 10 * 1024 * 1024 ? 0 : 1)} MB`;
}
