const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

function getWelcomeEmailHtml(userName) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fb;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 40px 30px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">🧮</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:bold;">MathHelper</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Asistenti yt personal i matematikes</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">Mire se vjen, ${userName}! 👋</h2>
              <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:24px;">
                Regjistrimi yt ne MathHelper u krye me sukses. Tani ke akses te plote ne te gjitha funksionalitetet tona.
              </p>

              <!-- Features -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f4ff;border-radius:12px;margin-bottom:8px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:12px;font-size:24px;vertical-align:middle;">📸</td>
                        <td>
                          <div style="color:#1a1a2e;font-weight:600;font-size:14px;">Analizo probleme me kamer</div>
                          <div style="color:#6b7280;font-size:13px;">Fotografo problemin dhe merr zgjidhjen menjehere</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f0fff4;border-radius:12px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:12px;font-size:24px;vertical-align:middle;">📚</td>
                        <td>
                          <div style="color:#1a1a2e;font-weight:600;font-size:14px;">Kurse te plota matematike</div>
                          <div style="color:#6b7280;font-size:13px;">Meso nga fillestari deri ne avancuar</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#fff8f0;border-radius:12px;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding-right:12px;font-size:24px;vertical-align:middle;">🎯</td>
                        <td>
                          <div style="color:#1a1a2e;font-weight:600;font-size:14px;">Kuize interaktive</div>
                          <div style="color:#6b7280;font-size:13px;">Testo njohurite e tua me kuize te ndryshme</div>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0;color:#6b7280;font-size:14px;line-height:22px;">
                Nese ke ndonje pytje ose problem, mos hezito te na kontaktosh.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                &copy; ${new Date().getFullYear()} MathHelper. Te gjitha te drejtat te rezervuara.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendWelcomeEmail(toEmail, userName) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[Email] SMTP not configured, skipping welcome email for', toEmail);
    return;
  }

  try {
    await transporter.sendMail({
      from: `"MathHelper" <${process.env.SMTP_USER}>`,
      to: toEmail,
      subject: `Mire se vjen ne MathHelper, ${userName}! 🧮`,
      html: getWelcomeEmailHtml(userName),
    });
    console.log('[Email] Welcome email sent to', toEmail);
  } catch (error) {
    console.error('[Email] Failed to send welcome email:', error.message);
  }
}

function getPasswordResetEmailHtml(code) {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f5f7fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f7fb;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 40px 30px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">🔐</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:bold;">MathHelper</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">Password Reset</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">Reset your password</h2>
              <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:24px;">
                Use the code below to reset your password. This code expires in 15 minutes.
              </p>

              <!-- Code -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center" style="padding:24px;background-color:#f0f4ff;border-radius:12px;">
                    <div style="font-size:36px;font-weight:bold;letter-spacing:8px;color:#667eea;font-family:monospace;">${code}</div>
                  </td>
                </tr>
              </table>

              <p style="margin:0;color:#6b7280;font-size:14px;line-height:22px;">
                If you didn't request this, you can safely ignore this email.
              </p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">
                &copy; ${new Date().getFullYear()} MathHelper. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

async function sendPasswordResetEmail(toEmail, code) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('[Email] SMTP not configured, skipping reset email. Code:', code);
    return;
  }

  // Fire-and-forget: don't await, so the API response is instant
  transporter.sendMail({
    from: `"MathHelper" <${process.env.SMTP_USER}>`,
    to: toEmail,
    subject: 'MathHelper - Password Reset Code',
    html: getPasswordResetEmailHtml(code),
  }).then(() => {
    console.log('[Email] Password reset email sent to', toEmail);
  }).catch((error) => {
    console.error('[Email] Failed to send reset email:', error.message);
  });
}

module.exports = { sendWelcomeEmail, sendPasswordResetEmail };
