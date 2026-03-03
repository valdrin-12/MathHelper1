# Paysera Integration Setup Guide

## ✅ What's Been Done

The MathHelper backend has been successfully migrated from Stripe to Paysera:

- ✅ Removed Stripe package and installed `paysera-nodejs`
- ✅ Updated payment controller with Paysera integration
- ✅ Updated routes (`/check-session` → `/check-payment`)
- ✅ Updated webhook handling (Stripe → Paysera callback)
- ✅ Updated success page to work with Paysera order IDs
- ✅ Updated environment variable files

## 🔧 What You Need To Do

### 1. Create Paysera Account

1. Visit [paysera.com/v2/en/checkout/kosovo](https://www.paysera.com/v2/en/checkout/kosovo)
2. Sign up for a business account
3. Complete the verification process (may take a few days)
4. Wait for approval

### 2. Create Payment Project

Once your account is approved:

1. Log in to Paysera dashboard
2. Navigate to "Projects" or "Services"
3. Create a new payment project
4. You'll receive:
   - **Project ID** (e.g., `12345`)
   - **Sign Password** (a secret key for signatures)

### 3. Configure Callback URL

In your Paysera project settings:

1. Find "Callback URL" or "Notification URL" setting
2. Enter: `https://mathhelper.online/api/purchases/paysera-callback`
3. Save settings

### 4. Update Environment Variables

#### Local Development (`.env` file):

```bash
PAYSERA_PROJECT_ID=your_project_id_here
PAYSERA_SIGN_PASSWORD=your_sign_password_here
APP_URL=http://localhost:19006
```

#### Production (Render Dashboard):

1. Go to your Render service dashboard
2. Navigate to "Environment" tab
3. **Delete these variables:**
   - `STRIPE_SECRET_KEY`
   - `STRIPE_WEBHOOK_SECRET`
   - `STRIPE_PRICE_ID`

4. **Add these variables:**
   - `PAYSERA_PROJECT_ID` = (your project ID)
   - `PAYSERA_SIGN_PASSWORD` = (your sign password)

5. Keep existing:
   - `APP_URL` = `https://mathhelper.online`

6. Click "Save Changes" and redeploy

### 5. Test The Integration

#### Local Testing (Sandbox Mode):

The code is already set to use `test: 1` for sandbox testing.

1. Start backend: `cd backend && npm run dev`
2. Open your app at `http://localhost:19006`
3. Navigate to a premium feature
4. Click "Buy Premium"
5. You should be redirected to Paysera test gateway
6. Use Paysera test cards (you'll find these in Paysera documentation)
7. Complete the test payment
8. Check backend logs for: `[Paysera] User {userId} upgraded to premium`
9. You should be redirected back to success page and then to dashboard

#### Production Testing:

**⚠️ IMPORTANT:** Before going live, remove the test mode:

1. Open `backend/src/controllers/purchaseController.js`
2. Find the `createCheckout` function
3. Remove the line: `test: 1,`
4. Commit and deploy

Then test with a real €1.99 payment.

### 6. Verify Everything Works

✅ Web payment redirects to Paysera
✅ Callback fires and user is upgraded
✅ Success page shows confirmation
✅ User can access premium features
✅ Mobile IAP still works (iOS/Android)

## 📊 Fees

With Paysera for a €1.99 payment:

- Paysera fee: ~€0.10 (minimum)
- Card processing: ~€0.15-0.25
- **You receive: ~€1.64-1.74**

Compare to Stripe: €1.68 (similar)

## 🆘 Troubleshooting

### "Paysera not configured" error
- Check that `PAYSERA_PROJECT_ID` and `PAYSERA_SIGN_PASSWORD` are set in `.env`
- Restart the backend server

### Callback not firing
- Verify callback URL is set correctly in Paysera dashboard
- Check Paysera dashboard logs for callback attempts
- Ensure your server is publicly accessible (use ngrok for local testing)

### Payment succeeds but user not upgraded
- Check backend logs for errors
- Verify callback signature is valid
- Check that orderid format is correct: `premium-{userId}-{timestamp}`

### Test mode not working
- Ensure `test: 1` is present in `buildRequestUrl()` params
- Check Paysera documentation for test card numbers
- Some test environments require special credentials

## 📚 Resources

- [Paysera Developer Docs](https://developers.paysera.com/)
- [paysera-nodejs GitHub](https://github.com/dzonatan/paysera-nodejs)
- [Paysera Test Cards](https://developers.paysera.com/en/checkout/testing)
- [Paysera Fee Calculator](https://www.paysera.com/v2/en/fees/payment-gateway-fees)

## 🔒 Security Notes

- Never commit `PAYSERA_SIGN_PASSWORD` to git
- Keep `.env` in `.gitignore`
- Use environment variables for all credentials
- Callback signature verification is critical - never skip it
- Always respond with "OK" to Paysera callbacks (already handled in code)

---

**Need help?** Check Paysera support or their developer documentation.
