"use server";

import { redirect } from "next/navigation";
import { SITE_EMAIL } from "@/lib/site";

function asString(value: FormDataEntryValue | null) {
  return typeof value === "string" ? value.trim() : "";
}

export async function submitContact(formData: FormData) {
  const honeypot = asString(formData.get("company_website"));
  if (honeypot) {
    redirect("/contact?sent=1");
  }

  const name = asString(formData.get("name"));
  const email = asString(formData.get("email"));
  const message = asString(formData.get("message"));
  const website = asString(formData.get("website"));
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

  const payload = {
    to: SITE_EMAIL,
    from: email,
    name,
    plan,
    source,
    website,
    message,
    receivedAt: new Date().toISOString(),
  };

  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "TestSync Lab Website <onboarding@resend.dev>",
          to: [SITE_EMAIL],
          reply_to: email,
          subject: `New lead (${plan}): ${name}`,
          text: `Name: ${name}\nEmail: ${email}\nWebsite: ${website || "—"}\nPlan: ${plan}\nSource: ${source || "direct"}\n\n${message}`,
        }),
      });
    } catch {
      // Still acknowledge the lead UX; configure Resend for production delivery.
      console.error("Resend delivery failed", payload);
    }
  } else {
    console.info("Lead captured (configure RESEND_API_KEY for email delivery)", payload);
  }

  const okQuery = new URLSearchParams({ sent: "1", plan });
  if (source) okQuery.set("source", source);
  redirect(`/contact?${okQuery.toString()}`);
}
