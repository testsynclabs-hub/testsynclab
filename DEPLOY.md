# TestSync Lab — Deploy on Vercel + Hostinger DNS

## Why this setup
- Host Next.js on **Vercel** (best DX, SSL, CDN, Git deploys).
- Keep the domain at **Hostinger** and point DNS only — do not use Hostinger Node hosting for this app.

## 1) GitHub
Repo: https://github.com/testsynclabs-hub/testsynclab  
Push to `main` (production branch).

## 2) Vercel
1. Go to https://vercel.com and import the GitHub repo.
2. Framework: Next.js (auto-detected).
3. Add env vars (Project → Settings → Environment Variables), then **redeploy**:

### Lead form → info@ inbox (required)
Use **Hostinger SMTP** (same mailbox password as `info@testsynclab.com`):

| Name | Value |
|------|--------|
| `SMTP_HOST` | `smtp.hostinger.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@testsynclab.com` |
| `SMTP_PASS` | your Hostinger email password |

Optional fallbacks: `RESEND_API_KEY` (or `RESEND_API_KEY`) from https://resend.com, then FormSubmit. Without any delivery path, the form shows a clear error instead of fake success.

### Google Analytics 4 (free)
1. Create a GA4 property at https://analytics.google.com for `testsynclab.com`.
2. Copy Measurement ID (`G-XXXXXXXXXX`).
3. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX` on Vercel.
4. Redeploy. Traffic sources appear under **Reports → Acquisition**.

4. Deploy. Note the `*.vercel.app` URL.

## 3) Connect testsynclab.com (Hostinger DNS)
In Vercel → Project → Settings → Domains → add:
- `testsynclab.com`
- `www.testsynclab.com`

Then in Hostinger → Domains → DNS / DNS Zone for `testsynclab.com`, set what Vercel shows. Typical pattern:

| Type  | Name | Value                         | TTL  |
|-------|------|-------------------------------|------|
| A     | @    | 76.76.21.21                   | 300  |
| CNAME | www  | cname.vercel-dns.com.         | 300  |

Exact values can differ — **always copy from the Vercel Domains panel**.

Remove conflicting Hostinger parking / default A records that point elsewhere.

## 4) Email (info@testsynclab.com)
Keep Hostinger email / MX records for mailbox. DNS for web (A/CNAME) and email (MX) can coexist.

## 5) After DNS propagates
- https://www.testsynclab.com
- https://www.testsynclab.com/sitemap.xml
- https://www.testsynclab.com/robots.txt

Submit sitemap in Google Search Console.

## Lead form
The contact form emails **info@testsynclab.com** from the server in this order:

1. Hostinger SMTP (`SMTP_HOST` / `SMTP_USER` / `SMTP_PASS`)
2. Resend (`RESEND_API_KEY`)
3. FormSubmit API fallback (first submit may need inbox confirmation)

If every path fails, the visitor sees a delivery error and can email `info@` directly.
