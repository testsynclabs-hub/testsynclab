export type CareerFormValues = {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  interest: string;
  linkedin: string;
  note: string;
  skills: string[];
};

export type CareerState = {
  status: "idle" | "success" | "validation" | "delivery";
  message?: string;
  values?: CareerFormValues;
};
