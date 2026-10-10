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
**Without SMTP (or Resend/Brevo) on Vercel, both `/contact` and `/become-a-tester` fail to deliver.**  
Browser FormSubmit AJAX is often blocked by CORS/Cloudflare, so Hostinger SMTP is the durable path.

After setting env vars, open `/api/mail-status` — `ok` should be `true`. Then redeploy and submit a test lead.

| Name | Value |
|------|--------|
| `SMTP_HOST` | `smtp.hostinger.com` |
| `SMTP_PORT` | `465` |
| `SMTP_USER` | `info@testsynclab.com` |
| `SMTP_PASS` | your Hostinger email password |

Optional fallbacks: `RESEND_API_KEY` (https://resend.com) or `BREVO_API_KEY` (https://www.brevo.com).  
If server mail fails, the site falls back to a classic FormSubmit POST (then returns to `/contact/thanks` or `?applied=1`).

### Optional booking calendar
Set `NEXT_PUBLIC_BOOKING_URL` to your Cal.com / Calendly (or similar) public link. Contact and “Book a call” buttons open that URL. If unset, they fall back to the `/contact` form.

### Google Analytics 4 (free)
Site code already loads GA when the env var is present (`components/analytics.tsx`). Live tracking only starts after you add the Measurement ID on Vercel.

1. Open https://analytics.google.com → **Admin** → **Create** → **Property**.
2. Property name: `TestSync Lab`, timezone/currency as you prefer.
3. Platform: **Web** → Website URL `https://testsynclab.com` → Create stream.
4. Copy the **Measurement ID** (`G-XXXXXXXXXX`).
5. Vercel → Project → **Settings** → **Environment Variables**:
   - Name: `NEXT_PUBLIC_GA_MEASUREMENT_ID`
   - Value: `G-XXXXXXXXXX`
   - Environments: Production (+ Preview if you want)
6. **Redeploy** Production (env vars apply on the next build).
7. Open the live site, click around, then in GA check **Reports → Realtime** (can take 1–2 minutes).

Optional conversion: successful contact submits send a `generate_lead` event (plan, source, currency, value). **Mark `generate_lead` as a Key Event** in GA4 → Admin → Events → `generate_lead` → Mark as key event. Careers uses a separate `job_application` event so hiring does not inflate sales leads.

## 3) Connect testsynclab.com (Hostinger DNS)
In Vercel → Project → Settings → Domains → add:
- `testsynclab.com`
- `www.testsynclab.com`

Then in Hostinger → Domains → DNS / DNS Zone for `testsynclab.com`, set what Vercel shows. Typical pattern:

| Type  | Name | Value                         | TTL  |
|-------|------|-------------------------------|------|
| A     | @    | *(copy from Vercel Domains)*  | 300  |
| CNAME | www  | *(copy from Vercel Domains)*  | 300  |

Exact values can differ — **always copy from the Vercel Domains panel** (may look like `216.198.79.1` + a `*.vercel-dns-017.com` CNAME, not the old `76.76.21.21` / `cname.vercel-dns.com` examples).

Remove conflicting Hostinger parking / default A records that point elsewhere.

### Fix: browser shows `DNS_PROBE_FINISHED_NXDOMAIN` for a few seconds, then loads
This is **DNS flakiness**, not a Next.js bug. Chrome fails the first lookup, then retries and the site appears.

Do this in order:

1. **Vercel → Project → Settings → Domains**
   - Both `testsynclab.com` and `www.testsynclab.com` must show **Valid**.
   - Copy the exact A / CNAME values Vercel shows (do not guess).

2. **Hostinger → Domains → DNS Zone** for `testsynclab.com`
   - `@` (apex) → **A** → Vercel’s IP, TTL **300**
   - `www` → **CNAME** → Vercel’s target, TTL **300**
   - Delete extra/old A or CNAME rows for `@` or `www` (parking pages, old hosts)
   - Keep **MX** records for `info@` email — do not delete those

3. **Prefer linking `https://www.testsynclab.com`** in LinkedIn / Reddit / email (canonical host). Apex should 308 → www after DNS works.

4. **If NXDOMAIN flash continues (best durable fix):** move DNS off Hostinger’s flaky `*.dns-parking.com` nameservers:
   - **Option A (recommended):** Cloudflare free → change nameservers at Hostinger registrar to Cloudflare → proxy **DNS only** (grey cloud) for `@` and `www` → same A/CNAME as Vercel
   - **Option B:** Vercel Domains → use **Vercel nameservers** for the domain (then recreate MX at the new DNS host so email still works)

5. After changes: wait 15–60 min, then on your PC run `ipconfig /flushdns` (Windows) or reboot router Wi‑Fi, and retry in an Incognito window.

## 4) Email (info@testsynclab.com)
Keep Hostinger email / MX records for mailbox. DNS for web (A/CNAME) and email (MX) can coexist.

## 5) After DNS propagates
- https://www.testsynclab.com
- https://www.testsynclab.com/sitemap.xml
- https://www.testsynclab.com/robots.txt

Submit sitemap in Google Search Console.

## Lead form
Delivery order:

1. Hostinger SMTP (`SMTP_HOST` / `SMTP_USER` / `SMTP_PASS`) — preferred
2. Resend (`RESEND_API_KEY`)
3. Brevo (`BREVO_API_KEY`)
4. Browser FormSubmit AJAX (often blocked)
5. Classic FormSubmit HTML POST → redirect back to `/contact/thanks` or `/become-a-tester?applied=1`

Set SMTP on Vercel. Confirm with `https://www.testsynclab.com/api/mail-status`.  
If every path fails, the visitor sees an on-page error and can email `info@` directly.

## Form submitted but no email in inbox
1. **Vercel → Project → Settings → Environment Variables** (Production):
   - `SMTP_HOST=smtp.hostinger.com`
   - `SMTP_PORT=465`
   - `SMTP_USER=info@testsynclab.com`
   - `SMTP_PASS=` *(Hostinger email password for info@ — not your Hostinger login)*
2. After saving vars → **Deployments → … → Redeploy** (env vars apply only on a new deploy).
3. Check **info@testsynclab.com** → Inbox **and Spam/Junk** for subjects like `New lead (audit): …`.
4. Hostinger → Email → confirm `info@` mailbox exists and webmail login works.
5. Vercel → Deployments → latest → **Logs / Functions**: look for `Lead emailed via smtp` or `Lead NOT emailed` / `SMTP not configured`.
6. FormSubmit alone is unreliable (Cloudflare challenges). Do **not** rely on it — SMTP on Vercel is required.
