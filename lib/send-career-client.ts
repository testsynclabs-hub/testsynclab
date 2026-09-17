import { SITE_EMAIL, SITE_NAME, SITE_URL } from "@/lib/site";

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

/** AJAX endpoint — reliable for text fields, often drops file attachments. */
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
 * This path is what FormSubmit documents for file uploads — AJAX frequently
 * accepts the request but never attaches the file (you only see cv_filename).
 */
async function postClassicWithAttachment(
  endpoint: string,
  fields: CareerLeadFields,
  cv: File,
) {
  const data = new FormData();
  appendCareerFields(data, fields);
  appendCv(data, cv);
  // Keep the iframe/browser on-site after FormSubmit processes the upload.
  data.set("_next", `${SITE_URL}/become-a-tester?applied=1`);

  const response = await fetch(endpoint, {
    method: "POST",
    body: data,
    redirect: "follow",
  });

  // Classic endpoint returns HTML (thank-you / redirect). Treat 2xx as delivered.
  return response.ok || response.type === "opaqueredirect";
}

/**
 * Hidden-iframe classic submit — another multipart path when fetch is blocked.
 */
function postClassicIframeWithAttachment(
  endpoint: string,
  fields: CareerLeadFields,
  cv: File,
): Promise<boolean> {
  if (typeof document === "undefined") return Promise.resolve(false);

  return new Promise((resolve) => {
    const iframeName = `careers_fs_${Date.now()}`;
    const iframe = document.createElement("iframe");
    iframe.name = iframeName;
    iframe.title = "careers-upload";
    iframe.setAttribute("aria-hidden", "true");
    iframe.style.cssText =
      "position:absolute;width:0;height:0;border:0;visibility:hidden";
    document.body.appendChild(iframe);

    const form = document.createElement("form");
    form.method = "POST";
    form.enctype = "multipart/form-data";
    form.action = endpoint;
    form.target = iframeName;
    form.style.display = "none";

    const addHidden = (name: string, value: string) => {
      const input = document.createElement("input");
      input.type = "hidden";
      input.name = name;
      input.value = value;
      form.appendChild(input);
    };

    addHidden("name", fields.name);
    addHidden("email", fields.email);
    addHidden("_replyto", fields.email);
    addHidden(
      "_subject",
      `[TestSync Lab] New tester applied: ${fields.name} (${fields.interest})`,
    );
    addHidden("_template", "table");
    addHidden("_captcha", "false");
    addHidden("location", fields.location || "—");
    addHidden("phone", fields.phone || "—");
    addHidden("experience", fields.experience || "—");
    addHidden("skills", fields.skills || "—");
    addHidden("linkedin", fields.linkedin || "—");
    addHidden("interest", fields.interest);
    addHidden("source", fields.source || "become-a-tester");
    addHidden("note", fields.note);
    addHidden("from_name", SITE_NAME);
    addHidden("_cc", SITE_EMAIL);
    addHidden("_next", `${SITE_URL}/become-a-tester?applied=1`);

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.name = "attachment";
    const transfer = new DataTransfer();
    transfer.items.add(cv);
    fileInput.files = transfer.files;
    form.appendChild(fileInput);

    document.body.appendChild(form);

    let settled = false;
    const finish = (ok: boolean) => {
      if (settled) return;
      settled = true;
      form.remove();
      iframe.remove();
      resolve(ok);
    };

    iframe.addEventListener("load", () => finish(true), { once: true });
    window.setTimeout(() => finish(true), 10000);

    try {
      form.submit();
    } catch {
      finish(false);
    }
  });
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
        // try iframe / next endpoint
      }
      try {
        if (await postClassicIframeWithAttachment(endpoint, fields, cv)) {
          return { ok: true, cvAttached: true };
        }
      } catch {
        // continue
      }
    }
  }

  // Text-only AJAX fallback (no trustworthy attachment).
  const ajaxData = new FormData();
  appendCareerFields(ajaxData, fields);
  if (cv) {
    // Keep metadata so inbox still shows which file was attempted.
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
