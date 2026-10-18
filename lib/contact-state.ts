export type ContactState = {
  status: "idle" | "success" | "validation" | "delivery" | "rate_limited";
  message?: string;
  /** Client-only: absolute or relative path to open after a successful send. */
  redirectTo?: string;
};
