import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

/** Activated FormSubmit inbox for testsynclab.com (public form id, not a secret). */
export const FORMSUBMIT_FORM_ID = "d034c3ad4f74e1083b1ac982b58fcaf8";

/**
 * Native HTML form POST to FormSubmit.
 *
 * Browser `fetch()` to formsubmit.co is often blocked (CORS / Cloudflare),
 * which makes the AJAX helpers fail even when a real visitor could deliver
 * mail via a classic form POST. This helper uses that classic path and
 * redirects back through `_next`.
 */
export function navigateFormSubmit(options: {
  fields: Record<string, string>;
  files?: Array<{ fieldName: string; file: File }>;
  nextUrl: string;
  /** Prefer the activated form id; fall back to the inbox email. */
  endpoint?: "id" | "email";
}) {
  if (typeof document === "undefined") {
    throw new Error("navigateFormSubmit requires a browser document");
  }

  const action =
    options.endpoint === "email"
      ? `https://formsubmit.co/${encodeURIComponent(SITE_EMAIL)}`
      : `https://formsubmit.co/${FORMSUBMIT_FORM_ID}`;

  const form = document.createElement("form");
  form.method = "POST";
  form.action = action;
  form.enctype = options.files?.length
    ? "multipart/form-data"
    : "application/x-www-form-urlencoded";
  form.acceptCharset = "UTF-8";
  form.style.display = "none";

  const fields: Record<string, string> = {
    _captcha: "false",
    _honey: "",
    _template: "table",
    from_name: SITE_NAME,
    ...options.fields,
    _next: options.nextUrl,
  };

  for (const [name, value] of Object.entries(fields)) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  if (options.files?.length) {
    for (const { fieldName, file } of options.files) {
      const input = document.createElement("input");
      input.type = "file";
      input.name = fieldName;
      const transfer = new DataTransfer();
      transfer.items.add(file);
      input.files = transfer.files;
      form.appendChild(input);
    }
  }

  document.body.appendChild(form);
  form.submit();
}

export function contactThanksAbsoluteUrl(plan: string, source: string) {
  const params = new URLSearchParams({
    plan: plan || "audit",
    source: source || "direct",
  });
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://www.testsynclab.com";
  return `${origin}/contact/thanks?${params.toString()}`;
}

export function careersAppliedAbsoluteUrl() {
  const origin =
    typeof window !== "undefined" ? window.location.origin : "https://www.testsynclab.com";
  return `${origin}/become-a-tester?applied=1`;
}
