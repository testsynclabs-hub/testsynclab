"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
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

async function sendViaSmtp(options: {
  replyTo: string;
  subject: string;
  text: string;
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
      const transporter = nodemailer.createTransport({
        host,
        port: attempt.port,
        secure: attempt.secure,
        requireTLS: !attempt.secure,
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
    }),
  });

  if (!response.ok) {
    console.error("Resend error", response.status, await response.text());
    return false;
  }

  return true;
}

async function sendViaFormSubmit(fields: {
  name: string;
  email: string;
  company: string;
  website: string;
  plan: string;
  source: string;
  message: string;
  subject: string;
}) {
  try {
    const response = await fetch(
      `https://formsubmit.co/ajax/${encodeURIComponent(LEAD_INBOX)}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: fields.name,
          email: fields.email,
          _replyto: fields.email,
          _subject: fields.subject,
          _template: "table",
          _captcha: "false",
          company: fields.company || "—",
          website: fields.website || "—",
          plan: fields.plan,
          source: fields.source || "direct",
          message: fields.message,
        }),
      },
    );

    const body = (await response.json().catch(() => null)) as {
      success?: boolean | string;
      message?: string;
    } | null;

    return (
      response.ok &&
      (body?.success === true ||
        body?.success === "true" ||
        Boolean(body?.message?.toLowerCase().includes("success")))
    );
  } catch (error) {
    console.error("FormSubmit delivery failed", error);
    return false;
  }
}

export async function submitContact(formData: FormData) {
  const honeypot = asString(formData.get("company_website"));
  if (honeypot) {
    redirect("/contact?sent=1");
  }

  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const company = asString(formData.get("company"));
  const website = asString(formData.get("website"));
  const message = asString(formData.get("message"));
  const plan = asString(formData.get("plan")) || "audit";
  const source = asString(formData.get("source"));

  const failQuery = new URLSearchParams({ error: "1", plan });
  if (source) failQuery.set("source", source);

  if (!name || !email || !message) {
    redirect(`/contact?${failQuery.toString()}`);
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    redirect(`/contact?${failQuery.toString()}`);
  }

  const subject = `New lead (${plan}): ${name}${company ? ` @ ${company}` : ""}`;
  const text = leadText({
    name,
    email,
    company,
    website,
    plan,
    source,
    message,
  });

  let delivered = false;

  try {
    delivered = await sendViaSmtp({ replyTo: email, subject, text });
  } catch (error) {
    console.error("SMTP delivery failed", error);
  }

  if (!delivered) {
    try {
      delivered = await sendViaResend({ replyTo: email, subject, text });
    } catch (error) {
      console.error("Resend delivery failed", error);
    }
  }

  if (!delivered) {
    delivered = await sendViaFormSubmit({
      name,
      email,
      company,
      website,
      plan,
      source,
      message,
      subject,
    });
  }

  if (!delivered) {
    console.error("Lead NOT emailed", {
      name,
      email,
      company,
      website,
      plan,
      source,
      message,
    });
    const deliveryQuery = new URLSearchParams({ error: "delivery", plan });
    if (source) deliveryQuery.set("source", source);
    redirect(`/contact?${deliveryQuery.toString()}`);
  }

  const okQuery = new URLSearchParams({ sent: "1", plan });
  if (source) okQuery.set("source", source);
  redirect(`/contact?${okQuery.toString()}`);
}
