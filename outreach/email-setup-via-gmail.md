# Fix “via gmail.com” — **FREE only**

## Honest truth

Agar tum **sirf free Gmail** (`smtp.gmail.com` + App Password) se `info@testsynclab.com` bhejte ho, to:

- From address sahi dikhegi
- Lekin Gmail aksar **`via gmail.com`** dikhata rehta hai

Kyun? Free Gmail custom-domain **DKIM** nahi deta (woh Google Workspace / paid pe aata hai).  
**SPF mein Google add karne se aksar via nahi hat-ta.**

So free pe 2 real choices:

| Choice | Cost | `via gmail.com` |
|--------|------|-----------------|
| A) Free Gmail SMTP jaise ab hai | $0 | Usually **reh-ta** hai |
| B) Free SMTP (Brevo) + DNS DKIM | $0 | **Hat sakta** hai |
| ImprovMX Premium / Workspace | Paid | Skip — tum free chahte ho |

---

## Path B (recommended free) — Brevo free SMTP

ImprovMX free receive rehne do. Send ke liye free Brevo SMTP use karo. Domain pe DKIM lagao → client ko official From lage, `via gmail.com` usually chala jaye.

### 1) Brevo account
1. https://www.brevo.com → free signup  
2. **Senders & Domains** → add domain `testsynclab.com`  
3. Brevo jo DNS records de (Brevo-code + **DKIM** + DMARC) → apne DNS panel mein paste karo  
4. Brevo pe **Authenticate / Verify** green hone tak wait

ImprovMX MX / SPF mat todo. Receive ImprovMX pe hi rahe.

### 2) Brevo SMTP key
Brevo → SMTP & API → **SMTP** → generate SMTP key  
Note:
- Host: `smtp-relay.brevo.com`
- Port: `587`
- Login: Brevo SMTP login email
- Password: SMTP key (API key nahi)

### 3) Gmail “Send mail as” change
Gmail → Settings → Accounts → **Send mail as** → `info@testsynclab.com` → edit:

- SMTP server: `smtp-relay.brevo.com`
- Port: `587`
- Username / password: Brevo SMTP
- **Treat as an alias: OFF**
- Save / verify if asked

`smtp.gmail.com` hata do — warna via wapas aa jayega.

### 4) Soft DMARC (agar Brevo ne already na lagaya)

```
Type: TXT
Name: _dmarc
Value: v=DMARC1; p=none; rua=mailto:info@testsynclab.com
```

### 5) Test
Nayi test email bhejo (purani mails mein via reh sakta hai).  
Expect: `info@testsynclab.com` without `via gmail.com`.

Verify: mail open → ⋮ → **Show original** → SPF/DKIM pass.

### Limits / warning
- Brevo free ~ daily send cap (often ~300; check your plan).
- Cold outreach carefully — 10–15/day rakho, spammy blasts mat karo (free accounts limit / block ho sakte hain).
- Har cold mail pe Unsubscribe rakho: https://www.testsynclab.com/unsubscribe

---

## Path A — bilkul free Gmail, zero extra account

Rehne do `smtp.gmail.com`. Optional SPF (deliverability thodi better, via usually same):

```
v=spf1 include:_spf.google.com include:spf.improvmx.com ~all
```

+ soft DMARC above.

**Expectation:** From sahi, lekin **`via gmail.com` commonly reh-ta hai.** Free Gmail ki limitation hai — code/site se fix nahi.

---

## After send looks official — footer bhi

Signature paste: https://www.testsynclab.com/email/gmail-signature.html  
Full card: https://www.testsynclab.com/email/cold-outreach.html
