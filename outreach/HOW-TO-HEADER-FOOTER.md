# Email header + footer (manual Gmail)

## A) Full email with header + footer (har cold mail)

1. Open: https://www.testsynclab.com/email/cold-outreach.html  
   (after this PR is live; locally: `public/email/cold-outreach.html`)
2. Select the white card → **Copy**
3. Gmail → **Compose** → **Paste**
4. Subject:
   `You close with a build — we send engineer-ready bugs by morning`
5. Edit “Hi there” / add your name if you want → Send

Logo + blue header + unsubscribe footer already included.

## B) Auto footer on every mail (signature)

1. Open: https://www.testsynclab.com/email/gmail-signature.html
2. Select all → Copy
3. Gmail → ⚙️ Settings → See all settings → **Signature**
4. Paste → save → set as default for `info@testsynclab.com`

Signature = footer har mail pe. Top header ke liye option A use karo (cold outreach HTML).

## Files

| File | Use |
|------|-----|
| `public/email/cold-outreach.html` | Full message: header + body + footer |
| `public/email/gmail-signature.html` | Gmail auto signature / footer |
| `outreach/cold-email-plain.txt` | Plain text if HTML paste fails |
