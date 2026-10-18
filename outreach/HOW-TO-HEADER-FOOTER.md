# Email header + footer (manual Gmail)

## A) Full email with header + Alibaba-style footer (har cold mail)

1. Open: https://www.testsynclab.com/email/cold-outreach.html  
   (after deploy; locally: `public/email/cold-outreach.html`)
2. Select the white card → **Copy**
3. Gmail → **Compose** → **Paste**
4. Subject:
   `You close with a build — we send engineer-ready bugs by morning`
5. Edit “Hi there” / add your name if you want → Send

Logo + blue header + gray Alibaba-style footer (Privacy | Terms | Preferences | **Unsubscribe**) included.
Unsubscribe opens: `https://www.testsynclab.com/unsubscribe`

## B) Auto footer on every mail (signature)

1. Open: https://www.testsynclab.com/email/gmail-signature.html
2. Select all → Copy
3. Gmail → ⚙️ Settings → See all settings → **Signature**
4. Paste → save → set as default for `info@testsynclab.com`
5. **Purani signature delete / replace** karo — warna pehle wala “reply stop / email us” footer hi dikhega.

Signature = footer har mail pe. Top header ke liye option A use karo (cold outreach HTML).

## Why Gmail top “Unsubscribe” chip missing?

Alibaba emails often show **Unsubscribe** next to the sender name because their ESP adds `List-Unsubscribe` headers.  
Gmail “Send as” / free SMTP **cannot** add that header. Your in-body **Unsubscribe** link still works and looks professional.

## Files

| File | Use |
|------|-----|
| `public/email/cold-outreach.html` | Full message: header + body + Alibaba footer |
| `public/email/gmail-signature.html` | Gmail auto signature / footer |
| `app/unsubscribe/page.tsx` | Live opt-out page |
| `outreach/cold-email-plain.txt` | Plain text if HTML paste fails |
