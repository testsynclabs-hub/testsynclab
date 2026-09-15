import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

// Same activated FormSubmit inbox used by the contact form (public form id).
const FORMSUBMIT_FORM_ID = "d034c3ad4f74e1083b1ac982b58fcaf8";

export type CareerLeadFields = {
  name: string;
  email: string;
  phone: string;
  location: string;
  experience: string;
  skills: string;
  linkedin: string;
  interest: string;
  note: string;
  source: string;
};

function isActivationMessage(message: string) {
  const text = message.toLowerCase();
  return (
    text.includes("activat") ||
    text.includes("confirm") ||
    text.includes("check your email")
  );
}

function isDeliveredResponse(
  ok: boolean,
  body: { success?: boolean | string; message?: string } | null,
) {
  if (!ok || !body) return false;
  const message = String(body?.message || "");
  if (isActivationMessage(message)) return false;
  return (
    body.success === true ||
    body.success === "true" ||
    message.toLowerCase().includes("success")
  );
}

async function postFormData(url: string, data: FormData) {
  const response = await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });
  // CV uploads can be slow — wait for a real JSON body before claiming success.
  const body = (await Promise.race([
    response.json().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 12000)),
  ])) as { success?: boolean | string; message?: string } | null;
  return { ok: response.ok, body };
}

function buildFormData(fields: CareerLeadFields, cv?: File | null) {
  const data = new FormData();
  data.set("name", fields.name);
  data.set("email", fields.email);
  data.set("_replyto", fields.email);
  data.set(
    "_subject",
    `[TestSync Lab] New tester applied: ${fields.name} (${fields.interest})`,
  );
  data.set("_template", "table");
  data.set("_captcha", "false");
  data.set("_honey", "");
  data.set("location", fields.location || "—");
  data.set("phone", fields.phone || "—");
  data.set("experience", fields.experience || "—");
  data.set("skills", fields.skills || "—");
  data.set("linkedin", fields.linkedin || "—");
  data.set("interest", fields.interest);
  data.set("source", fields.source || "become-a-tester");
  data.set("note", fields.note);
  data.set("from_name", SITE_NAME);
  // Deliver to the business inbox (FormSubmit activated address).
  data.set("_cc", SITE_EMAIL);
  if (cv) data.set("cv", cv, cv.name);
  return data;
}

/** Browser multipart post so CV files can reach FormSubmit without serverless body limits. */
export async function sendCareerFromBrowser(
  fields: CareerLeadFields,
  cv?: File | null,
) {
  // Prefer direct inbox address so applications land in info@.
  const primary = await postFormData(
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
    buildFormData(fields, cv),
  );
  if (isDeliveredResponse(primary.ok, primary.body)) return true;

  const fallback = await postFormData(
    `https://formsubmit.co/ajax/${FORMSUBMIT_FORM_ID}`,
    buildFormData(fields, cv),
  );
  return isDeliveredResponse(fallback.ok, fallback.body);
}
