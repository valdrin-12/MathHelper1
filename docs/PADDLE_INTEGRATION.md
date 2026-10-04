# Paddle Integration — MathHelper

Web payments for MathHelper Premium run on **Paddle Billing** (Merchant of Record). Paddle replaced Paysera. Native iOS/Android still use store in-app purchases (`react-native-iap`).

Status (2026-10-04): **sandbox** integration on mathhelper.online. Fulfillment mirroring and the customer portal (sections 9–10) are built and tested locally, but not deployed yet. Live payments are not enabled — see [Going live](#7-going-live-checklist).

---

## 1. How it works

```
PremiumModal (web)
  ├─ Paddle.PricePreview()  → localized price for the visitor's IP country
  └─ Paddle.Checkout.open() → one-page overlay, customData { user_id }
            │
            ▼
     Paddle processes payment (card / Apple Pay / Google Pay)
            │
            ├─ browser → /premium/success  (polls /api/auth/me until tier = premium)
            └─ webhook → POST /api/paddle/webhook
                          verify Paddle-Signature → update users row
```

- The **webhook is the only thing that grants Premium**. The success page only waits for it.
- Events handled: `subscription.created/updated/canceled/activated/trialing/past_due/paused/resumed`, `customer.created/updated`, `transaction.completed`. Any other type gets a 200 and is ignored.
- The user is matched through `customData.user_id` (set at checkout), or through the stored `paddle_subscription_id` as a fallback.
- `premium_expires_at` = end of the subscription's current billing period (or trial). The existing rate limiter (`backend/src/middleware/rateLimit.js`) keeps using `tier` + `premium_expires_at` unchanged.

| Subscription status | Effect on user |
|---|---|
| `trialing`, `active` | `tier = premium`, expires at current period end |
| `past_due` | unchanged (Paddle is retrying payment; access isn't extended) |
| `canceled`, `paused` | `tier = free`, expires now |

A `scheduled_change` (cancel or pause at period end) does **not** revoke access; only the actual status does. The logic lives in `backend/src/services/paddleAccess.js`.

Every handler upserts on the Paddle ID, and events older than the stored `last_event_at` / `paddle_event_at` are ignored, so duplicate and out-of-order deliveries are safe.

---

## 2. Catalog (sandbox)

| Item | Paddle ID | Base price | Trial |
|---|---|---|---|
| Product: MathHelper Premium | `pro_01m3h9z6emgy5f1hdqptjnvrqw` | — | — |
| Price: Monthly | `pri_01m3h9z6m7f0ghgjj5rxh4kr8h` | EUR 3.99 / month | 7 days, card required |
| Price: Yearly | `pri_01m3h9z6sp4rrd2b2370ybg5zg` | EUR 29.99 / year | 7 days, card required |

Product `custom_data`: `{ "tier": "premium", "daily_analyses": 10 }`. Tax category: `standard`.

Country price overrides (monthly / yearly):

| Countries | Price |
|---|---|
| Default (DE, AT, rest of world) | EUR 3.99 / 29.99 |
| AL, XK | EUR 1.99 / 14.99 |
| CH | CHF 4.49 / 33.99 |
| GB | GBP 3.49 / 25.99 |
| US | USD 3.99 / 29.99 |

> Kosovo: Paddle adds VAT on top, so XK customers see **€2.35 / €17.69**. Change the prices to tax-inclusive if €1.99 should be the final price.

---

## 3. Steps we followed

1. **Checked the Paddle MCP servers.** `paddle-sandbox` works. `paddle-live` and `paddle-docs` still need OAuth (`/mcp`).
2. **Created the catalog in sandbox** (section 2). Before creating anything we confirmed that Paddle supports the currencies and countries (including Kosovo `XK`), and that no duplicate product existed.
3. **Created a client-side token** "MathHelper Web" (`ctkn_01m3ha9mwnhqc00wpe4wqzkvf1`) for Paddle.js.
4. **Frontend (Expo web):**
   - `npm install @paddle/paddle-js`
   - `services/paddleService.web.js`: initializes Paddle.js and throws a clear error if the env is missing or invalid, so it never silently defaults to sandbox or live. Also contains `fetchPrices()` and `openCheckout()`.
   - `services/paddleService.js`: native stub (Paddle is web only).
   - `config/plans.js`: plan features and price IDs (from env).
   - `components/PremiumModal.js`: Monthly/Yearly chips, Paddle's formatted price shown as-is, overlay checkout with email prefill and `user_id`. Native flow untouched.
   - Locales (`al`, `en`, `de`): new keys added; "one-time purchase" copy removed; limits fixed (Free: 2 analyses total, Premium: 10/day).
5. **Backend:**
   - `npm install @paddle/paddle-node-sdk`, `npm uninstall paysera-nodejs`
   - `backend/src/controllers/paddleController.js`: webhook handler (signature verification + subscription sync).
   - `backend/src/app.js`: `POST /api/paddle/webhook` mounted with `express.raw()` **before** `express.json()`; `/premium/success` rewritten; `app.set('trust proxy', 1)` for Render.
   - `backend/migrations/009_add_paddle_subscription.sql`: `paddle_customer_id`, `paddle_subscription_id`, `paddle_subscription_status`, `paddle_event_at`.
6. **Removed Paysera:** controller functions, routes, callback, `payment.html`, `paysera-demo.html`, both `PAYSERA_SETUP.md` files, the verification meta tag, and the Paysera env vars. The privacy policy now names Paddle.
7. **Webhook destinations** (Paddle → Developer tools → Notifications), both subscribed to all `subscription.*` events, traffic source "all":
   - `ntfset_01m3hbct2wtwqv35smj2x8z98f`: `https://mathhelper.online/api/paddle/webhook` (Render)
   - `ntfset_01m3hc57vwx0mkydaee2zbh7w1`: Cloudflare quick tunnel (local development)
   - On 2026-10-04 both were extended with `customer.created/updated` and `transaction.completed` (11 events total). These are permanent infrastructure: don't delete them.
8. **Local test setup:** Postgres via Docker, backend on `:3001`, and a public tunnel via `cloudflared` (section 5).
9. **Verified:**
   - Signed webhook tests return 200 (event applied); bad or missing signature returns 400; missing secret returns 503.
   - Localized prices confirmed via Paddle pricing preview for DE, AL, XK, GB, US, CH.
   - The web bundle contains only the public client token and price IDs, no secrets.
10. **Deployed:** merged to `main` and pushed. Render auto-deployed and ran migration 009 in its build command.

---

## 4. Configuration

### Frontend — root `.env` (inlined at build time by Expo)

```
EXPO_PUBLIC_PADDLE_ENV=sandbox            # or production
EXPO_PUBLIC_PADDLE_CLIENT_TOKEN=test_...  # live tokens start with live_
EXPO_PUBLIC_PADDLE_PRICE_MONTHLY=pri_...
EXPO_PUBLIC_PADDLE_PRICE_YEARLY=pri_...
```

The web build is committed in `backend/public`, so these values are **baked into the build**. Changing them on Render does nothing; you must rebuild (`bash scripts/build-web.sh`) and commit.

### Backend — `backend/.env` locally, Render → Environment in production

```
PADDLE_WEBHOOK_SECRET=pdl_ntfset_...   # Secret key of the matching notification destination
PADDLE_API_KEY=pdl_sdbx_apikey_...     # server-only; used to mint customer portal sessions
PADDLE_ENV=sandbox                     # sandbox | production — must match the API key
```

- Each destination has its **own** secret. Render uses the mathhelper.online destination's secret; local uses the tunnel destination's secret.
- Find it under Notifications → ⋯ → Edit destination → **Secret key**. This is not the URL, and not the API key.
- `PADDLE_API_KEY` must never get an `EXPO_PUBLIC_` prefix or appear in app code. Without it (or `PADDLE_ENV`), `/api/paddle/portal-session` returns 503.

### Paddle dashboard

- **Checkout → Checkout settings → Default payment link:** `https://mathhelper.online` (localhost is OK on sandbox).
- **Apple Pay / Google Pay:** enable in the dashboard; Apple Pay also needs domain verification.

---

## 5. Local development

```bash
docker compose up -d postgres                  # Postgres on localhost:5433
cd backend && npm run migrate && npm run dev   # API + web build on :3001
cloudflared tunnel --url http://localhost:3001 # prints https://<random>.trycloudflare.com
```

- The backend's `DATABASE_URL` must point to `localhost:5433` when it runs outside Docker.
- A quick-tunnel URL **changes on every restart**. Update the local notification destination in Paddle each time, or switch to ngrok with a free static domain (`ngrok config add-authtoken …`, then `ngrok http 3001 --url=<domain>`).

---

## 6. Testing (sandbox)

1. Sign in on mathhelper.online (or localhost:3001) and open Premium.
2. Pick Monthly or Yearly and click Upgrade.
3. Pay with card `4242 4242 4242 4242`, any future expiry date, any CVC.
4. The success page switches to Premium within a few seconds.
5. If it doesn't, check Paddle → Notifications → destination → **logs** for the response code:
   - `503`: `PADDLE_WEBHOOK_SECRET` isn't set on the server.
   - `400 Invalid signature`: the secret doesn't match this destination.
   - `200` but the user isn't Premium: check the server log for `[Paddle] No user for subscription` or `Skipped`.

Webhooks can also be sent without paying: Paddle → Developer tools → **Simulations**.

---

## 7. Going-live checklist

- [ ] Paddle live account verified; `mathhelper.online` approved as a checkout domain
- [ ] Recreate the product and prices in **live**; update the price IDs
- [ ] Create a live client token (`live_...`) and a live notification destination → set `PADDLE_WEBHOOK_SECRET` on Render
- [ ] Rebuild the web app with `EXPO_PUBLIC_PADDLE_ENV=production` + live values, commit, deploy
- [ ] Set the live default payment link; enable Apple Pay / Google Pay
- [ ] Update the Terms of Service text (it still says payments go only through the app stores); legal review of trial and cancellation terms
- [ ] Deactivate the local-tunnel sandbox destination when it's no longer needed

## 8. Known gaps / follow-ups

- **Checkout language:** Albanian falls back to English (Paddle checkout has no Albanian).
- **Native billing:** still uses store IAP. `/api/purchases/restore` re-grants a month to anyone with any past store purchase (pre-existing bug).
- **Secrets in git:** `docker-compose.yml` contains real-looking secrets. Rotate them and move them to env files that git ignores.

---

## 9. Fulfillment mirror (migration 010)

Verified webhooks are mirrored into three tables (`backend/migrations/010_paddle_mirror.sql`):

| Table | Key | Written by |
|---|---|---|
| `paddle_customers` | `paddle_customer_id` | `customer.*`; also linked to a user by subscription and transaction events |
| `paddle_subscriptions` | `paddle_subscription_id` | `subscription.*` (status, price/product, period end, scheduled change) |
| `paddle_transactions` | `paddle_transaction_id` | `transaction.completed` (status, currency, `total` in the lowest denomination) |

- **User matching:** `customData.user_id` first (only if that user exists), then a user already linked to the Paddle customer. Email is never used, because users can change it.
- **No foreign keys between the paddle_* tables,** because Paddle doesn't guarantee event order. Each table references `users(id)` with `ON DELETE SET NULL`.
- Subscription handlers still write `users.tier` / `premium_expires_at`, so `rateLimit.js` remains the single access check.
- `/api/auth/me` returns `hasPaddleSubscription` (a boolean only, no Paddle IDs).
- All rows are live state: never delete them as cleanup.

## 10. Customer portal

- **Backend:** `POST /api/paddle/portal-session` (`backend/src/routes/paddle.js` → `paddlePortalController.js`), behind `authMiddleware`.
- **Customer lookup:** the Paddle customer is resolved server-side from `req.userId`. Any customer ID in the request body is ignored.
- **Session:** minted with `paddle.customerPortalSessions.create(customerId, [subscriptionId])`. The response has `url` (overview), plus `cancelUrl` and `updatePaymentMethodUrl` when there's a manageable subscription.
- **Error codes:** 401 without a token, 404 `NO_PADDLE_CUSTOMER`, 503 if `PADDLE_API_KEY` / `PADDLE_ENV` is missing.
- **App:** Settings → **Subscription → Manage subscription**. Shown only to Premium users with a Paddle subscription. Opens the Paddle-hosted portal in the same tab on web, or with `Linking.openURL` on native, never in an iframe or WebView. The portal lets customers update their payment method, view invoices and cancel.
- **API key:** create the sandbox key in Paddle → Developer tools → Authentication, with the minimum permission to create customer portal sessions.

