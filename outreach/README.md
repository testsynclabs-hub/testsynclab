# TestSync Lab — Cold Outreach

Lead list and email templates for remote QA outreach to IT / AI / SaaS product teams.

## Files

| File | Purpose |
|------|---------|
| `leads-50-ai-saas.csv` | ~50 public lead targets (company, site, contact, region, focus, notes) |
| `cold-email-template.html` | HTML version for ESP / paste into Gmail |
| `cold-email-plain.txt` | Plain-text version (preferred for cold starts) |

## Send cadence

- Send from **info@testsynclab.com** only.
- Cap at **10–15 emails per day**. Do not blast the full CSV in one session.
- Spread USA / UK-Canada-Australia / Middle East / global rows across days so volume stays even.
- Prefer weekday mornings in the prospect’s timezone when practical.

## Personalization

Templates use merge fields. Replace every `{{…}}` before send:

| Field | Source |
|-------|--------|
| `{{company}}` | CSV `company` |
| `{{product_or_ai_surface}}` | Derive from CSV `focus` + their homepage (e.g. “RAG search”, “checkout API”, “support chatbot”) |
| `{{first_name}}` | Only if you have a real public contact name; otherwise use “there” or open with the company name |
| `{{sender_name}}` | Your name |

Do **not** invent personal founder Gmail addresses. Use the CSV `contact_email_or_url` (public `hello@` / `info@` / `contact@` when listed, otherwise their `/contact` page).

## Which template

1. Start with **`cold-email-plain.txt`** for first touches (higher deliverability, less “marketing” feel).
2. Use **`cold-email-template.html`** when the ESP requires HTML or for a short follow-up with the audit CTA button.
3. Pick one subject line from the options in the plain template; do not A/B more than two variants at this volume.

## Compliance (CAN-SPAM and good practice)

- Include a clear physical/business identity and **testsynclab.com** link in every message (already in the templates).
- Every email must offer an easy opt-out: reply **stop** (already in the templates). Honor stop requests immediately — no further mail to that address.
- Honest subject lines; no deceptive “Re:” / “Fwd:” prefixes.
- One commercial pitch per thread; if they ask for info, reply helpfully without adding new cold leads to the same chain.

## Verify before send

Before any message leaves the inbox:

1. Confirm the domain and contact URL still resolve (no dead `/contact` pages).
2. If using a public inbox (`hello@`, `info@`, `contact@`), confirm it is still published on their site — do not guess aliases.
3. Spot-check that the company still fits remote QA (shipping a product, not pure consulting/agency).
4. Fill all merge fields; send yourself a test from `info@testsynclab.com` once per template change.
5. Never send to personal consumer Gmail/Yahoo addresses fabricated from founder names.

## Suggested daily workflow

1. Pull the next 10–15 unverified rows from `leads-50-ai-saas.csv`.
2. Verify contacts; skip or fix rows that fail.
3. Personalize `{{product_or_ai_surface}}` from their current product page.
4. Send plain-text first touch from `info@testsynclab.com`.
5. Log sent date + outcome (replied / stop / bounced / no reply) outside this folder or in your CRM.
