"use server";

import { redirect } from "next/navigation";
import nodemailer from "nodemailer";
import { SITE_EMAIL, SITE_NAME } from "@/lib/site";

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

async function sendViaSmtp(options: {
  replyTo: string;
  subject: string;
  text: string;
}) {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const port = Number(process.env.SMTP_PORT || "465");

  if (!host || !user || !pass) {
    return false;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  await transporter.sendMail({
    from: `"${SITE_NAME} Website" <${user}>`,
    to: SITE_EMAIL,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
  });

  return true;
}

async function sendViaResend(options: {
  replyTo: string;
  subject: string;
  text: string;
}) {
  const resendKey = process.env.RESEND_API_KEY;
  if (!resendKey) return false;

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `${SITE_NAME} Website <onboarding@resend.dev>`,
      to: [SITE_EMAIL],
      reply_to: options.replyTo,
      subject: options.subject,
      text: options.text,
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Resend error", response.status, body);
    return false;
  }

  return true;
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
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company: ${company || "—"}`,
    `Website: ${website || "—"}`,
    `Plan: ${plan}`,
    `Source: ${source || "direct"}`,
    "",
    message,
  ].join("\n");

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
    console.error(
      "Lead NOT emailed — configure SMTP_* (Hostinger) or RESEND_API_KEY on Vercel",
      { name, email, company, website, plan, source, message },
    );
    const deliveryQuery = new URLSearchParams({ error: "delivery", plan });
    if (source) deliveryQuery.set("source", source);
    redirect(`/contact?${deliveryQuery.toString()}`);
  }

  const okQuery = new URLSearchParams({ sent: "1", plan });
  if (source) okQuery.set("source", source);
  redirect(`/contact?${okQuery.toString()}`);
}
