"use server";

import nodemailer from "nodemailer";
import type { CareerState } from "@/lib/career-state";
import {
  CV_EXTENSIONS,
  CV_MAX_BYTES,
  CV_MIME_TYPES,
  CV_SERVER_SAFE_BYTES,
} from "@/lib/careers";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

const LEAD_INBOX = process.env.SITE_EMAIL?.trim() || SITE_EMAIL;

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function isAllowedCv(file: File) {
  const name = file.name.toLowerCase();
  const extOk = CV_EXTENSIONS.some((ext) => name.endsWith(ext));
  const mimeOk =
    !file.type ||
    (CV_MIME_TYPES as readonly string[]).includes(file.type) ||
    file.type === "application/octet-stream";
  return extOk && mimeOk && file.size > 0 && file.size <= CV_MAX_BYTES;
}

function careerText(fields: {
  name: string;
  email: string;
  location: string;
  experience: string;
  skills: string;
  linkedin: string;
  interest: string;
  source: string;
  note: string;
  cvName: string;
}) {
  return [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Location / timezone: ${fields.location || "—"}`,
    `Experience: ${fields.experience || "—"}`,
    `Skills: ${fields.skills || "—"}`,
    `LinkedIn / portfolio: ${fields.linkedin || "—"}`,
    `Interest: ${fields.interest}`,
    `Source: ${fields.source || "become-a-tester"}`,
    `CV file: ${fields.cvName || "—"}`,
    "",
    fields.note,
  ].join("\n");
}

function careerHtml(fields: {
  name: string;
  email: string;
  location: string;
  experience: string;
  skills: string;
  linkedin: string;
  interest: string;
  source: string;
  note: string;
  cvName: string;
}) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;color:#64748b;font:600 13px/1.4 ui-sans-serif,system-ui">${label}</td><td style="padding:8px 12px;color:#0f172a;font:400 13px/1.4 ui-sans-serif,system-ui">${value}</td></tr>`;

  return `<!doctype html><html><body style="margin:0;background:#f8fafc;padding:24px">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px">
    <tr><td style="padding:20px 24px;border-bottom:1px solid #e2e8f0">
      <div style="font:800 18px/1.2 ui-sans-serif,system-ui;color:#1e3a8a">${SITE_NAME} — Become a tester</div>
      <div style="margin-top:6px;font:500 13px/1.4 ui-sans-serif,system-ui;color:#64748b">Talent / CV submission</div>
    </td></tr>
    <tr><td style="padding:8px 12px">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row("Name", fields.name)}
        ${row("Email", fields.email)}
        ${row("Location", fields.location || "—")}
        ${row("Experience", fields.experience || "—")}
        ${row("Skills", fields.skills || "—")}
        ${row("LinkedIn", fields.linkedin || "—")}
        ${row("Interest", fields.interest)}
        ${row("Source", fields.source || "become-a-tester")}
        ${row("CV", fields.cvName || "—")}
      </table>
    </td></tr>
    <tr><td style="padding:16px 24px 24px">
      <div style="font:600 13px/1.4 ui-sans-serif,system-ui;color:#64748b;margin-bottom:8px">Note</div>
      <div style="white-space:pre-wrap;font:400 14px/1.6 ui-sans-serif,system-ui;color:#0f172a">${fields.note}</div>
    </td></tr>
  </table>
  </body></html>`;
}

type MailPayload = {
  replyTo: string;
  subject: string;
  text: string;
  html: string;
  attachment?: { filename: string; content: Buffer; contentType: string };
};

async function sendViaSmtp(options: MailPayload) {
  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  if (!host || !user || !pass) return false;

  const preferredPort = Number(process.env.SMTP_PORT || "465");
  const attempts = [
    { port: preferredPort, secure: preferredPort === 465 },
    { port: 587, secure: false },
    { port: 465, secure: true },
  ].filter(
    (attempt, index, list) =>
      list.findIndex((item) => item.port === attempt.port) === index,
  );

  let lastError: unknown;
  for (const attempt of attempts) {
    try {
      const requireTLS =
        process.env.SMTP_REQUIRE_TLS === "true" ||
        (process.env.SMTP_REQUIRE_TLS !== "false" && !attempt.secure);

      const transporter = nodemailer.createTransport({
        host,
        port: attempt.port,
        secure: attempt.secure,
        requireTLS,
        auth: { user, pass },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 20000,
      });

      await transporter.sendMail({
        from: `"${SITE_NAME} Careers" <${user}>`,
        to: LEAD_INBOX,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
        attachments: options.attachment
          ? [
              {
                filename: options.attachment.filename,
                content: options.attachment.content,
                contentType: options.attachment.contentType,
              },
            ]
          : undefined,
      });
      return true;
    } catch (error) {
      lastError = error;
    }
  }

  console.error("Careers SMTP failed", lastError);
  return false;
}

async function sendViaResend(options: MailPayload) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (!resendKey) return false;

  const from =
    process.env.RESEND_FROM?.trim() ||
    `${SITE_NAME} Careers <onboarding@resend.dev>`;

  const body: Record<string, unknown> = {
    from,
    to: [LEAD_INBOX],
    reply_to: options.replyTo,
    subject: options.subject,
    text: options.text,
    html: options.html,
  };

  if (options.attachment) {
    body.attachments = [
      {
        filename: options.attachment.filename,
        content: options.attachment.content.toString("base64"),
      },
    ];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.error("Careers Resend error", response.status, await response.text());
    return false;
  }
  return true;
}

async function sendViaBrevo(options: MailPayload) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) return false;

  const fromEmail =
    process.env.BREVO_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    LEAD_INBOX;

  const payload: Record<string, unknown> = {
    sender: { name: `${SITE_NAME} Careers`, email: fromEmail },
    to: [{ email: LEAD_INBOX, name: SITE_NAME }],
    replyTo: { email: options.replyTo },
    subject: options.subject,
    textContent: options.text,
    htmlContent: options.html,
  };

  if (options.attachment) {
    payload.attachment = [
      {
        name: options.attachment.filename,
        content: options.attachment.content.toString("base64"),
      },
    ];
  }

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    console.error("Careers Brevo error", response.status, await response.text());
    return false;
  }
  return true;
}

export async function submitCareer(
  _prev: CareerState,
  formData: FormData,
): Promise<CareerState> {
  const honeypot = asString(formData.get("company_website"));
  if (honeypot) return { status: "success" };

  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const location = asString(formData.get("location"));
  const experience = asString(formData.get("experience"));
  const skills = asString(formData.get("skills"));
  const linkedin = asString(formData.get("linkedin"));
  const interest = asString(formData.get("interest")) || "open-to-both";
  const note = asString(formData.get("note"));
  const source = asString(formData.get("source")) || "become-a-tester";
  const cvEntry = formData.get("cv");
  const cv = cvEntry instanceof File && cvEntry.size > 0 ? cvEntry : null;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !note || !emailPattern.test(email)) {
    return { status: "validation" };
  }
  if (!cv) {
    return {
      status: "validation",
      message: "Please attach your CV (PDF or Word).",
    };
  }
  if (!isAllowedCv(cv)) {
    return {
      status: "validation",
      message: "CV must be PDF or Word (.doc/.docx) and under 10 MB.",
    };
  }

  let attachment:
    | { filename: string; content: Buffer; contentType: string }
    | undefined;

  if (cv.size <= CV_SERVER_SAFE_BYTES) {
    const buffer = Buffer.from(await cv.arrayBuffer());
    attachment = {
      filename: cv.name.replace(/[^\w.\- ()[\]]+/g, "_"),
      content: buffer,
      contentType: cv.type || "application/octet-stream",
    };
  }

  const fields = {
    name,
    email,
    location,
    experience,
    skills,
    linkedin,
    interest,
    source,
    note,
    cvName: cv.name,
  };

  const subject = `Become a tester (${interest}): ${name}`;
  const text = careerText(fields);
  const html = careerHtml(fields);

  const senders = [sendViaSmtp, sendViaResend, sendViaBrevo];
  for (const send of senders) {
    try {
      if (
        await send({
          replyTo: email,
          subject,
          text,
          html,
          attachment,
        })
      ) {
        return { status: "success" };
      }
    } catch (error) {
      console.error("Careers email attempt failed", error);
    }
  }

  console.error("Careers lead NOT emailed", {
    name,
    email,
    interest,
    cv: cv.name,
  });
  return { status: "delivery" };
}
