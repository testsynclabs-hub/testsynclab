# Fix “via gmail.com” (official From look)

## Why you see it

Screenshot case:

`Testsync Lab <info@testsynclab.com> via gmail.com`

Meaning: **From** is your domain, but the mail was **relayed by Gmail** (`smtp.gmail.com`) without domain auth that aligns with `testsynclab.com`.

**Live DNS right now:**
- MX → ImprovMX ✅
- SPF → `v=spf1 include:spf.improvmx.com ~all` only ❌ (Google not allowed)
- DKIM → none for Google / ImprovMX ❌
- DMARC → none ❌

An agent **cannot** change your DNS or Gmail SMTP. You must do this in the domain DNS panel + Gmail.

---

## Best free-friendly fix (recommended for you)

You already use **ImprovMX** for MX. Free ImprovMX = receive only. To **send** as the domain without “via gmail.com”, use **ImprovMX SMTP** (Premium).

### Steps

1. ImprovMX → upgrade to Premium (SMTP unlock).
2. ImprovMX → copy SMTP host / port / username / password for `info@testsynclab.com`.
3. Gmail → ⚙️ Settings → See all settings → **Accounts** → **Send mail as** → edit `info@testsynclab.com`:
   - SMTP server = **ImprovMX** (not `smtp.gmail.com`)
   - Port usually **587** (TLS) or whatever ImprovMX shows
   - Username / password = ImprovMX SMTP credentials
   - Treat as alias: **OFF** (recommended)
4. Keep SPF as ImprovMX (already set):

```
v=spf1 include:spf.improvmx.com ~all
```

5. If ImprovMX shows a **DKIM** TXT/CNAME, add it in DNS.
6. Add soft DMARC:

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@testsynclab.com
```

7. Wait 15 min–24h → send a new test to yourself.  
   “via gmail.com” should be gone → looks like a normal official `info@testsynclab.com` send.

---

## Alternate: keep sending via Gmail SMTP (weaker / incomplete on free Gmail)

Only if you stay on `smtp.gmail.com`:

1. Edit SPF TXT on `testsynclab.com` to:

```
v=spf1 include:_spf.google.com include:spf.improvmx.com ~all
```

2. Add the same soft DMARC record above.

3. **DKIM for custom domain** normally needs **Google Workspace Admin** (paid). Free Gmail “Send mail as” usually still signs as Google, so **“via gmail.com” often remains** even after SPF.

So: SPF help is good for deliverability, but **ImprovMX SMTP (or Workspace / ESP)** is what actually removes the “via” badge reliably.

---

## Other clean options

| Path | Removes “via gmail.com”? | Cost note |
|------|--------------------------|-----------|
| ImprovMX Premium SMTP | Yes (domain-aligned send) | ~$9/mo typical |
| Google Workspace | Yes (MX+SPF+DKIM Google) | Paid seats |
| ESP (Instantly / Resend / etc.) | Yes after domain auth | Varies |

---

## After fix — verify

1. Send a **new** test (old emails keep old headers).
2. Open mail → ⋮ → **Show original**.
3. Check:
   - `SPF: PASS` with `testsynclab.com`
   - `DKIM: PASS` aligned to your domain (or ImprovMX)
   - No “via gmail.com” in the Gmail UI From line

---

## Also: footer / Unsubscribe in your latest test

Your latest screenshot is **plain text body only** (no signature).  
After DNS/SMTP fix, also paste the live signature once:

https://www.testsynclab.com/email/gmail-signature.html  

Or full card: https://www.testsynclab.com/email/cold-outreach.html
