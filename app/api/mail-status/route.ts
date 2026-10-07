import { NextResponse } from "next/server";

/**
 * Non-sensitive mail provider readiness check for ops.
 * Does not expose credentials — only whether env vars are present.
 */
export async function GET() {
  const smtpConfigured = Boolean(
    process.env.SMTP_HOST?.trim() &&
      process.env.SMTP_USER?.trim() &&
      process.env.SMTP_PASS?.trim(),
  );
  const resendConfigured = Boolean(process.env.RESEND_API_KEY?.trim());
  const brevoConfigured = Boolean(process.env.BREVO_API_KEY?.trim());

  return NextResponse.json(
    {
      ok: smtpConfigured || resendConfigured || brevoConfigured,
      smtpConfigured,
      resendConfigured,
      brevoConfigured,
    },
    {
      headers: {
        "Cache-Control": "no-store",
      },
    },
  );
}
