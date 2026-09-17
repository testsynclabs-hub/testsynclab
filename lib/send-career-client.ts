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

export type CareerBrowserSendResult = {
  ok: boolean;
  /** True when we used the classic multipart path that can deliver files. */
  cvAttached: boolean;
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

function appendCareerFields(data: FormData, fields: CareerLeadFields) {
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
  data.set("_cc", SITE_EMAIL);
}

function appendCv(data: FormData, cv: File) {
  // FormSubmit file uploads work best with a field named "attachment"
  // on the classic (non-AJAX) endpoint.
  data.set("attachment", cv, cv.name);
  data.set("cv", cv, cv.name);
}

async function postAjax(url: string, data: FormData) {
  const response = await fetch(url, {
    method: "POST",
    headers: { Accept: "application/json" },
    body: data,
  });
  const body = (await Promise.race([
    response.json().catch(() => null),
    new Promise<null>((resolve) => setTimeout(() => resolve(null), 20000)),
  ])) as { success?: boolean | string; message?: string } | null;
  return { ok: response.ok, body };
}

/**
 * Classic FormSubmit multipart POST (not /ajax/).
 *
 * Important: do NOT set `_next` back to testsynclab.com. FormSubmit redirects
 * the browser to `_next` after upload; that full navigation was causing
 * intermittent DNS_PROBE_FINISHED_NXDOMAIN on first hit (refresh then worked).
 * Stay on FormSubmit's own thank-you response instead — our React UI already
 * shows "Application received" without needing a redirect home.
 */
async function postClassicWithAttachment(
  endpoint: string,
  fields: CareerLeadFields,
  cv: File,
) {
  const data = new FormData();
  appendCareerFields(data, fields);
  appendCv(data, cv);
  // Disable FormSubmit redirect back to our domain.
  data.set("_next", "https://formsubmit.co/thank-you-page");

  const response = await fetch(endpoint, {
    method: "POST",
    body: data,
    // Don't follow redirects into a top-level navigation of our site.
    redirect: "manual",
  });

  // 2xx, or opaque/manual redirect from FormSubmit = accepted.
  return (
    response.ok ||
    response.type === "opaqueredirect" ||
    (response.status >= 300 && response.status < 400)
  );
}

/** Browser multipart post so CV files can reach FormSubmit. */
export async function sendCareerFromBrowser(
  fields: CareerLeadFields,
  cv?: File | null,
): Promise<CareerBrowserSendResult> {
  const classicEndpoints = [
    `https://formsubmit.co/${encodeURIComponent(SITE_EMAIL)}`,
    `https://formsubmit.co/${FORMSUBMIT_FORM_ID}`,
  ];

  if (cv) {
    for (const endpoint of classicEndpoints) {
      try {
        if (await postClassicWithAttachment(endpoint, fields, cv)) {
          return { ok: true, cvAttached: true };
        }
      } catch {
        // try next endpoint / AJAX fallback
      }
    }
  }

  // Text-only AJAX fallback (no trustworthy attachment).
  const ajaxData = new FormData();
  appendCareerFields(ajaxData, fields);
  if (cv) {
    ajaxData.set("cv_filename", cv.name);
    ajaxData.set("cv_size_bytes", String(cv.size));
    ajaxData.set(
      "cv_note",
      "CV file may not be attached by FormSubmit AJAX — ask applicant to resend if missing.",
    );
  }

  const primary = await postAjax(
    `https://formsubmit.co/ajax/${encodeURIComponent(SITE_EMAIL)}`,
    ajaxData,
  );
  if (isDeliveredResponse(primary.ok, primary.body)) {
    return { ok: true, cvAttached: false };
  }

  const fallback = await postAjax(
    `https://formsubmit.co/ajax/${FORMSUBMIT_FORM_ID}`,
    ajaxData,
  );
  if (isDeliveredResponse(fallback.ok, fallback.body)) {
    return { ok: true, cvAttached: false };
  }

  return { ok: false, cvAttached: false };
}
