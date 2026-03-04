# Paysera Payment Integration - Setup Guide

## Status: ✅ Code Complete - Awaiting Credentials

All Paysera integration code is implemented and ready. You just need to add your Paysera credentials.

---

## 1. Create Paysera Account

### Sign Up
1. Go to [https://www.paysera.com/v2/en/checkout/kosovo](https://www.paysera.com/v2/en/checkout/kosovo)
2. Register as a **business account**
3. Complete business verification (may take 2-5 business days)

### Requirements
- Business registration documents
- ID verification
- Bank account details
- Business address in Kosovo

---

## 2. Get Your Credentials

Once verified, log in to Paysera Dashboard:

1. Create a new **Project** for MathHelper
2. Go to **Project Settings**
3. Copy these credentials:
   - **Project ID** (numeric ID like `123456`)
   - **Sign Password** (secret key for signature verification)

---

## 3. Configure Environment Variables

### Local Development (.env)
Edit `backend/.env`:
```bash
# Paysera Payment
PAYSERA_PROJECT_ID=your_project_id_here
PAYSERA_SIGN_PASSWORD=your_sign_password_here

# Keep existing
APP_URL=http://localhost:19006
```

### Production (Render)
1. Go to [Render Dashboard](https://dashboard.render.com)
2. Select your **mathhelper-backend** service
3. Go to **Environment** tab
4. Add these variables:
   ```
   PAYSERA_PROJECT_ID=your_project_id_here
   PAYSERA_SIGN_PASSWORD=your_sign_password_here
   ```
5. Click **Save Changes** (auto-redeploys)

---

## 4. Configure Callback URL in Paysera

In Paysera Dashboard → Project Settings:

**Callback URL:**
```
https://mathhelper.online/api/purchases/paysera-callback
```

**Accept URL (success):**
```
https://mathhelper.online/premium/success
```

**Cancel URL:**
```
https://mathhelper.online/learn
```

---

## 5. Testing

### Sandbox Mode (Current Setup)
The code is currently in **test mode** (line 145 in `purchaseController.js`):
```javascript
test: 1, // Remove this for production
```

**Test Payment:**
1. Open web app: https://mathhelper.online
2. Click "Buy Premium" button
3. You'll be redirected to Paysera **test gateway**
4. Use Paysera test card numbers (provided in their docs)
5. Complete payment
6. Should redirect back with success

**Verify:**
- Check browser console for any errors
- Check Render logs: `[Paysera] User {userId} upgraded to premium`
- Check database: `SELECT * FROM users WHERE tier = 'premium'`

### Production Mode
When ready for real payments:

1. Edit `backend/src/controllers/purchaseController.js` line 145
2. Remove the `test: 1` line:
   ```javascript
   const paymentUrl = p.buildRequestUrl({
     orderid: orderId,
     amount: 199, // €1.99 in cents
     currency: 'EUR',
     // test: 1, ← Remove this line
   });
   ```
3. Commit and deploy
4. Real payments will now be processed

---

## 6. Price Configuration

Current price: **€1.99** (199 cents)

To change price, edit line 143 in `purchaseController.js`:
```javascript
amount: 199, // €1.99 in cents
```

Examples:
- €0.99 → `amount: 99`
- €2.99 → `amount: 299`
- €4.99 → `amount: 499`

---

## 7. Monitoring & Logs

### Check Successful Payments
In Render → Logs, look for:
```
[Paysera] Callback received: { orderid: 'premium-123-1234567890', status: 1 }
[Paysera] User 123 upgraded to premium via web payment
```

### Check Failed Payments
```
[Paysera] Invalid callback signature
[Paysera] Invalid orderid format
```

### Database Query
```sql
SELECT
  p.id,
  p.user_id,
  p.transaction_id,
  p.created_at,
  u.email,
  u.tier
FROM purchases p
JOIN users u ON u.id = p.user_id
WHERE p.platform = 'web'
ORDER BY p.created_at DESC;
```

---

## 8. Security Notes

✅ **Signature Verification:** Every callback is verified with MD5 signature
✅ **Idempotency:** Duplicate callbacks are ignored (prevents double-charging)
✅ **Server-to-Server:** Callback goes directly to backend (user can't fake it)
✅ **HTTPS Only:** All Paysera communication uses HTTPS

---

## 9. Troubleshooting

### "Paysera not configured" error
- Check that `PAYSERA_PROJECT_ID` and `PAYSERA_SIGN_PASSWORD` are set
- Restart the backend: `npm run dev`

### Payment succeeds but user not upgraded
- Check Render logs for callback errors
- Verify callback URL is correct in Paysera dashboard
- Check if signature verification is failing

### Callback not received
- Verify callback URL is accessible: https://mathhelper.online/api/purchases/paysera-callback
- Check Paysera dashboard for callback attempt logs
- Ensure Express urlencoded middleware is before the route (already done in app.js)

---

## 10. Next Steps After Credentials

Once you have credentials:

1. ✅ Add to Render environment variables
2. ✅ Configure callback URL in Paysera dashboard
3. ✅ Test with sandbox mode
4. ✅ Verify upgrade works in database
5. ✅ Remove `test: 1` for production
6. ✅ Test real payment
7. ✅ Monitor logs for successful transactions

---

## Files Reference

- `backend/src/controllers/purchaseController.js` - Main payment logic
- `backend/src/routes/purchases.js` - API routes
- `backend/src/app.js` - Webhook endpoint + success page HTML
- `backend/.env` - Local environment variables

---

## Support

- **Paysera Docs:** https://developers.paysera.com/en/checkout/basic
- **Paysera Support:** https://www.paysera.com/v2/en/contacts
- **Test Cards:** Available in Paysera developer documentation

---

**Status:** ✅ Integration complete. Waiting for Paysera account approval and credentials.
