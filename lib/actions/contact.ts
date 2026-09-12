"use server";

import nodemailer from "nodemailer";
import type { ContactState } from "@/lib/contact-state";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

const LEAD_INBOX = process.env.SITE_EMAIL?.trim() || SITE_EMAIL;

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

function leadText(fields: {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
  source: string;
  message: string;
}) {
  return [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    `Company: ${fields.company || "—"}`,
    `Website: ${fields.website || "—"}`,
    `Plan: ${fields.plan}`,
    `Source: ${fields.source || "direct"}`,
    "",
    fields.message,
  ].join("\n");
}

function leadHtml(fields: {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
  source: string;
  message: string;
}) {
  const row = (label: string, value: string) =>
    `<tr><td style="padding:8px 12px;color:#64748b;font:600 13px/1.4 ui-sans-serif,system-ui">${label}</td><td style="padding:8px 12px;color:#0f172a;font:400 13px/1.4 ui-sans-serif,system-ui">${value}</td></tr>`;

  return `<!doctype html><html><body style="margin:0;background:#f8fafc;padding:24px">
  <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:16px">
    <tr><td style="padding:20px 24px;border-bottom:1px solid #e2e8f0">
      <div style="font:800 18px/1.2 ui-sans-serif,system-ui;color:#1e3a8a">${SITE_NAME} website lead</div>
      <div style="margin-top:6px;font:500 13px/1.4 ui-sans-serif,system-ui;color:#64748b">New form submission</div>
    </td></tr>
    <tr><td style="padding:8px 12px">
      <table width="100%" cellpadding="0" cellspacing="0">
        ${row("Name", fields.name)}
        ${row("Email", fields.email)}
        ${row("Company", fields.company || "—")}
        ${row("Website", fields.website || "—")}
        ${row("Plan", fields.plan)}
        ${row("Source", fields.source || "direct")}
      </table>
    </td></tr>
    <tr><td style="padding:16px 24px 24px">
      <div style="font:600 13px/1.4 ui-sans-serif,system-ui;color:#64748b;margin-bottom:8px">Message</div>
      <div style="white-space:pre-wrap;font:400 14px/1.6 ui-sans-serif,system-ui;color:#0f172a">${fields.message}</div>
    </td></tr>
  </table>
  </body></html>`;
}

async function sendViaSmtp(options: {
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
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
        connectionTimeout: 8000,
        greetingTimeout: 8000,
        socketTimeout: 8000,
      });

      await transporter.sendMail({
        from: `"${SITE_NAME} Website" <${user}>`,
        to: LEAD_INBOX,
        replyTo: options.replyTo,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
      return true;
    } catch (error) {
      lastError = error;
    }
  }

  console.error("SMTP delivery failed", lastError);
  return false;
}

async function sendViaResend(options: {
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const resendKey = process.env.RESEND_API_KEY?.trim();
  if (!resendKey) return false;

  const from =
    process.env.RESEND_FROM?.trim() ||
    `${SITE_NAME} Website <onboarding@resend.dev>`;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [LEAD_INBOX],
      reply_to: options.replyTo,
      subject: options.subject,
      text: options.text,
      html: options.html,
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return false;
  }

  return true;
}

async function sendViaBrevo(options: {
  replyTo: string;
  subject: string;
  text: string;
  html: string;
}) {
  const apiKey = process.env.BREVO_API_KEY?.trim();
  if (!apiKey) return false;

  const fromEmail =
    process.env.BREVO_FROM?.trim() ||
    process.env.SMTP_USER?.trim() ||
    LEAD_INBOX;

  const response = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      accept: "application/json",
      "api-key": apiKey,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      sender: { name: `${SITE_NAME} Website`, email: fromEmail },
      to: [{ email: LEAD_INBOX, name: SITE_NAME }],
      replyTo: { email: options.replyTo },
      subject: options.subject,
      textContent: options.text,
      htmlContent: options.html,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Brevo error", response.status, body);
    return false;
  }

  return true;
}

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const honeypot = asString(formData.get("company_website"));
  if (honeypot) {
    return { status: "success" };
  }

  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const company = asString(formData.get("company"));
  const website = asString(formData.get("website"));
  const message = asString(formData.get("message"));
  const plan = asString(formData.get("plan")) || "audit";
  const source = asString(formData.get("source"));

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name || !email || !message || !emailPattern.test(email)) {
    return { status: "validation" };
  }

  const fields = { name, email, company, website, plan, source, message };
  const subject = `New lead (${plan}): ${name}${company ? ` @ ${company}` : ""}`;
  const text = leadText(fields);
  const html = leadHtml(fields);

  const attempts = [sendViaSmtp, sendViaResend, sendViaBrevo];
  for (const send of attempts) {
    try {
      if (await send({ replyTo: email, subject, text, html })) {
        return { status: "success" };
      }
    } catch (error) {
      console.error("Lead email attempt failed", error);
    }
  }

  console.error("Lead NOT emailed", { name, email, company, website, plan, source });
  return { status: "delivery" };
}
