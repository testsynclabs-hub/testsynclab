# Free calendar booking (Calendly / Cal.com)

“Book a 20-min audit call” buttons show **only** when this env var is set on Vercel:

```
NEXT_PUBLIC_BOOKING_URL=https://calendly.com/YOUR-USER/20min
```

Until then, contact page uses the form + `info@testsynclab.com` only (no fake call button).

## Free Calendly (≈2 minutes)

1. Sign up: https://calendly.com (Free plan is enough)
2. Create event: **15 or 20 min** · name e.g. `Free QA Audit`
3. Copy your link, e.g. `https://calendly.com/yourname/free-qa-audit`
4. Vercel → Project → Settings → Environment Variables → add:
   - Name: `NEXT_PUBLIC_BOOKING_URL`
   - Value: your Calendly link
   - Environments: Production (+ Preview if you want)
5. **Redeploy** Production (env vars need a new deploy)

## Free alternative: Cal.com

1. https://cal.com → create account + 20-min event  
2. Same env var with your `https://cal.com/...` link  
3. Redeploy

## After it works

Buttons reappear on `/contact` and open Calendly in a new tab.
