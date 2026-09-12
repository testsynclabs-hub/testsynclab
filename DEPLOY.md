# TestSync Lab — Deploy on Vercel + Hostinger DNS

## Why this setup
- Host Next.js on **Vercel** (best DX, SSL, CDN, Git deploys).
- Keep the domain at **Hostinger** and point DNS only — do not use Hostinger Node hosting for this app.

## 1) GitHub
Repo: https://github.com/HrazaSQA/testsynclab  
Push to `main` (or `master` if that is the production branch).

## 2) Vercel
1. Go to https://vercel.com and import the GitHub repo.
2. Framework: Next.js (auto-detected).
3. Add env var (optional but recommended for lead email delivery):
   - `RESEND_API_KEY` = your Resend API key
   - Verify a sending domain in Resend later; until then Resend sandbox/`onboarding@resend.dev` works for tests.
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
- https://testsynclab.com
- https://testsynclab.com/sitemap.xml
- https://testsynclab.com/robots.txt

Submit sitemap in Google Search Console.

## Lead form
Forms post to server action → `info@testsynclab.com` when `RESEND_API_KEY` is set. Without it, leads are validated and logged in Vercel function logs (configure Resend for production inbox delivery).
