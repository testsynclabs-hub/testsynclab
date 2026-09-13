export type CareerState = {
  status: "idle" | "success" | "validation" | "delivery";
  message?: string;
};
