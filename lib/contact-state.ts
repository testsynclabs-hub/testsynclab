export type ContactState = {
  status: "idle" | "success" | "validation" | "delivery" | "rate_limited";
  message?: string;
};
