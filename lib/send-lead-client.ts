import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

// Activated FormSubmit inbox for testsynclab.com (public form id, not a secret).
const FORMSUBMIT_FORM_ID = "d034c3ad4f74e1083b1ac982b58fcaf8";

export type LeadFields = {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
  source: string;
  message: string;
};

function payload(fields: LeadFields) {
  return {
    name: fields.name,
    email: fields.email,
    _replyto: fields.email,
    _subject: `New lead (${fields.plan}): ${fields.name}${
      fields.company ? ` @ ${fields.company}` : ""
    }`,
    _template: "table",
    _captcha: "false",
    _honey: "",
    company: fields.company || "—",
    website: fields.website || "—",
    plan: fields.plan,
    source: fields.source || "direct",
    message: fields.message,
    from_name: SITE_NAME,
  };
}

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
  if (!ok) return false;
  const message = String(body?.message || "");
  if (isActivationMessage(message)) return false;
  if (!body) return true;
  return (
    body.success === true ||
    body.success === "true" ||
    message.toLowerCase().includes("success") ||
    message.length === 0
  );
}

async function readBodyWithTimeout(response: Response) {
  return Promise.race([
    response.json().catch(() => null),
    new Promise<null>((resolve) => {
      setTimeout(() => resolve(null), 800);
    }),
  ]) as Promise<{ success?: boolean | string; message?: string } | null>;
}

async function postJson(url: string, data: Record<string, string>) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  });
  const body = await readBodyWithTimeout(response);
  return { ok: response.ok, body };
}

export async function sendLeadFromBrowser(fields: LeadFields) {
  const data = {
    ...payload(fields),
    _cc: SITE_EMAIL,
  };

  const delivered = await postJson(
    `https://formsubmit.co/ajax/${FORMSUBMIT_FORM_ID}`,
    data,
  );
  if (isDeliveredResponse(delivered.ok, delivered.body)) {
    void postJson(
      `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
      payload(fields),
    );
    return true;
  }

  const inbox = await postJson(
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
    payload(fields),
  );
  return isDeliveredResponse(inbox.ok, inbox.body);
}
