# Google Ads — TestSync Lab (US first)

**No real free trial.** Pakistan accounts usually get **$0 credit**. Campaign banao, **paused** rakho, conversion lagao, phir $20–$30/day on karo.

Do **not** run Meta, Display, Performance Max, or YouTube first. Search only.

## Do not spend until this checklist is green

1. Live thank-you URL works: `https://www.testsynclab.com/contact/thanks`
2. Test the contact form once — you must land on `/contact/thanks`
3. Google Ads → Goals → Conversions → **Lead**  
   - Website conversion  
   - URL contains: `/contact/thanks`  
   - Value: `$999`
4. Paste conversion IDs into Vercel, then redeploy:
   - `NEXT_PUBLIC_GOOGLE_ADS_ID` = `AW-……`
   - `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL` = the label from the conversion snippet
5. Campaign **location = United States** only
6. Networks: **Search on**. Display / Search partners **off**
7. Daily budget cap: **$20–$30**
8. Bid: **Manual CPC** or Maximize clicks with **$8 max CPC**.  
   Do **not** use Maximize conversions until you have ~15 real leads.

## Final URL (ads click here — not the homepage)

`https://www.testsynclab.com/qa-services-usa?utm_source=google&utm_medium=cpc&utm_campaign=usa-search`

## Campaign setup

- Campaign: `US | Search | QA retainers`
- Language: English
- Location: United States (Presence: people **in** the US)
- 3 ad groups below. Keywords: **Phrase + Exact only**. No Broad.

### Ad group 1 — Hire QA testers

Keywords:
```
"hire QA testers"
[hire QA testers]
"hire remote QA testers"
[hire remote QA team]
"hire QA testers USA"
```

### Ad group 2 — Outsourced QA

Keywords:
```
"outsourced QA"
[outsourced QA]
"outsource software testing"
[QA as a service]
"outsourced QA for startups"
```

### Ad group 3 — Software testing company

Keywords:
```
"software testing company"
[software testing company]
"QA testing company"
"Playwright testing services"
"software testing services for startups"
```

### Negative keywords (campaign-level — paste all)

```
jobs
job
salary
resume
cv
course
courses
tutorial
internship
intern
what is
meaning
istqb
interview
wikipedia
pakistan
lahore
india
free
pdf
template
```

## Responsive Search Ad (same ad in all 3 groups)

**Headlines** (paste as many as Google allows):

```
Remote QA From $999/Mo
Hire QA Testers This Week
Outsourced QA For SaaS
Free QA Audit In 24 Hours
Stop Shipping Release Bugs
Skip The QA Hiring Cycle
Monthly QA, No Lock-In
Manual + Playwright Testing
Senior Testers On Retainer
TestSync Lab QA Agency
US Startup QA Coverage
QA Before Your Next Launch
```

**Descriptions:**

```
Monthly QA retainers from $999. Manual, API, and Playwright testing for SaaS teams.
Book a free QA audit in 24h. USD pricing. No full-time hire needed to start.
You ship the build. We verify overnight. Engineer-ready bugs in Slack or Jira.
```

Display path: `qa-services-usa` / `audit`

## Kill rules (so money does not burn)

- Pause any keyword with 40+ clicks and **0** form submits
- If CPC > $12 with no lead in 7 days, pause that ad group
- Reply to every lead in **24 hours** or ads are wasted anyway
- Canada / Australia: copy this campaign only after US gets 1 paying client
