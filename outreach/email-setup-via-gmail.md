# Fix “via gmail.com” + header/footer on outbound email

## Why Gmail shows `via gmail.com`

You send as `info@testsynclab.com`, but the message is actually relayed by **Gmail**. Recipients see:

`TestSync Lab <info@testsynclab.com> via gmail.com`

That happens when SPF/DKIM do **not** authorize Google to send for your domain.

**Current DNS (as of last check):**
- MX → ImprovMX
- SPF → `v=spf1 include:spf.improvmx.com ~all` only  
- No Google SPF · no visible Google DKIM · no DMARC

So Google is not on your allow-list → “via gmail.com” (and weaker trust).

An agent **cannot** change your DNS or Gmail settings. You (or whoever owns the domain DNS) must.

---

## Fix (pick one path)

### Path A — Keep sending from Gmail / Google (recommended if you live in Gmail)

1. DNS → edit SPF TXT on `testsynclab.com` to:

```
v=spf1 include:_spf.google.com include:spf.improvmx.com ~all
```

2. Google Admin (Workspace) **or** Gmail “Send mail as” setup → enable **DKIM** for `testsynclab.com` → publish the TXT record Google gives you.
3. Add DMARC (start soft):

```
_dmarc.testsynclab.com  TXT  v=DMARC1; p=none; rua=mailto:info@testsynclab.com
```

4. Wait DNS propagate (often 15 min–24h). Send yourself a test. “via gmail.com” should disappear when SPF+DKIM pass as `testsynclab.com`.

### Path B — Send through ImprovMX SMTP (matches your MX)

1. ImprovMX dashboard → SMTP credentials for `info@…`
2. In Gmail: Settings → Accounts → Send mail as → SMTP server = ImprovMX (not Google).
3. Keep SPF as ImprovMX (already set). Add DKIM if ImprovMX provides it.

### Path C — Google Workspace on the domain

Move mail fully to Google Workspace, update MX + SPF + DKIM + DMARC per Google’s wizard. Cleanest long-term if the team lives in Gmail.

---

## Header / footer — can they “auto set”?

| Method | Header | Footer | Notes |
|--------|--------|--------|--------|
| **Gmail Signature** | Logo + name | Soft CTA + unsubscribe | Auto on every compose from that account. Best for plain cold mail. |
| **HTML template** (`cold-email-template.html`) | Built-in | Built-in + Unsubscribe link | Paste as HTML (ESP) or “Insert HTML” extensions — Gmail plain compose won’t inject this automatically. |
| **ESP** (e.g. Instantly, MailerLite) | Template | Template + one-click unsub | Best for volume; still keep 10–15/day for cold. |

### Suggested Gmail signature (plain)

```
{{Your Name}}
TestSync Lab · Remote QA
info@testsynclab.com · https://www.testsynclab.com
Retainers from $999/mo

Unsubscribe: reply “stop”
```

Optional: add logo image in signature → https://www.testsynclab.com/brand/logo-icon-1024.png

---

## Packages in the cold email?

**No full Basic / Growth / Scale table in the first touch.**  
It kills the purple-cow first line and feels like a brochure.

Footer only: `Retainers from $999/mo · ~40 QA hours/week`  
Packages after they reply or on the audit call.

---

## After DNS fix — verify

1. Send test to yourself (Gmail + another inbox).
2. Open original → check SPF/DKIM = PASS for `testsynclab.com`.
3. Confirm “via gmail.com” is gone.
