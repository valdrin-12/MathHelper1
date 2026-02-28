const { Resend } = require('resend');

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  return new Resend(apiKey);
}

async function sendEmail(to, subject, html) {
  const resend = getResendClient();
  if (!resend) {
    console.log('[Email] Resend not configured, skipping email to', to);
    return;
  }

  const fromEmail = process.env.EMAIL_FROM || 'MathHelper <onboarding@resend.dev>';

  await resend.emails.send({
    from: fromEmail,
    to,
    subject,
    html,
  });
}

// ─── Translations ───────────────────────────────────────────

const translations = {
  al: {
    welcome: {
      subject: (name) => `Mire se vjen ne MathHelper, ${name}! 🧮`,
      title: (name) => `Mire se vjen, ${name}! 👋`,
      subtitle: 'Asistenti yt personal i matematikes',
      body: 'Regjistrimi yt ne MathHelper u krye me sukses. Tani ke akses te plote ne te gjitha funksionalitetet tona.',
      feature1Title: 'Analizo probleme me kamer',
      feature1Sub: 'Fotografo problemin dhe merr zgjidhjen menjehere',
      feature2Title: 'Kurse te plota matematike',
      feature2Sub: 'Meso nga fillestari deri ne avancuar',
      feature3Title: 'Kuize interaktive',
      feature3Sub: 'Testo njohurite e tua me kuize te ndryshme',
      footer: 'Nese ke ndonje pytje ose problem, mos hezito te na kontaktosh.',
      copyright: 'Te gjitha te drejtat te rezervuara.',
    },
    reset: {
      subject: 'MathHelper - Kodi per rivendosjen e fjalekalimit',
      headerText: 'Rivendosja e fjalekalimit',
      title: 'Rivendos fjalekalimin tend',
      body: 'Perdor kodin me poshte per te rivendosur fjalekalimin. Ky kod skadon per 15 minuta.',
      ignore: 'Nese nuk e keni kerkuar kete, mund ta injoroni kete email.',
      copyright: 'Te gjitha te drejtat te rezervuara.',
    },
  },
  en: {
    welcome: {
      subject: (name) => `Welcome to MathHelper, ${name}! 🧮`,
      title: (name) => `Welcome, ${name}! 👋`,
      subtitle: 'Your personal math assistant',
      body: 'Your registration on MathHelper was successful. You now have full access to all our features.',
      feature1Title: 'Analyze problems with camera',
      feature1Sub: 'Take a photo and get the solution instantly',
      feature2Title: 'Complete math courses',
      feature2Sub: 'Learn from beginner to advanced',
      feature3Title: 'Interactive quizzes',
      feature3Sub: 'Test your knowledge with various quizzes',
      footer: 'If you have any questions or issues, don\'t hesitate to contact us.',
      copyright: 'All rights reserved.',
    },
    reset: {
      subject: 'MathHelper - Password Reset Code',
      headerText: 'Password Reset',
      title: 'Reset your password',
      body: 'Use the code below to reset your password. This code expires in 15 minutes.',
      ignore: 'If you didn\'t request this, you can safely ignore this email.',
      copyright: 'All rights reserved.',
    },
  },
  de: {
    welcome: {
      subject: (name) => `Willkommen bei MathHelper, ${name}! 🧮`,
      title: (name) => `Willkommen, ${name}! 👋`,
      subtitle: 'Dein persönlicher Mathe-Assistent',
      body: 'Deine Registrierung bei MathHelper war erfolgreich. Du hast jetzt vollen Zugriff auf alle unsere Funktionen.',
      feature1Title: 'Probleme mit Kamera analysieren',
      feature1Sub: 'Fotografiere das Problem und erhalte sofort die Lösung',
      feature2Title: 'Vollständige Mathekurse',
      feature2Sub: 'Lerne vom Anfänger bis zum Fortgeschrittenen',
      feature3Title: 'Interaktive Quizze',
      feature3Sub: 'Teste dein Wissen mit verschiedenen Quizzen',
      footer: 'Wenn du Fragen oder Probleme hast, zögere nicht uns zu kontaktieren.',
      copyright: 'Alle Rechte vorbehalten.',
    },
    reset: {
      subject: 'MathHelper - Passwort-Zurücksetzungscode',
      headerText: 'Passwort zurücksetzen',
      title: 'Setze dein Passwort zurück',
      body: 'Verwende den folgenden Code, um dein Passwort zurückzusetzen. Dieser Code läuft in 15 Minuten ab.',
      ignore: 'Wenn du dies nicht angefordert hast, kannst du diese E-Mail ignorieren.',
      copyright: 'Alle Rechte vorbehalten.',
    },
  },
};

function getTranslation(lang) {
  return translations[lang] || translations['al'];
}

// ─── HTML Templates ─────────────────────────────────────────

function getWelcomeEmailHtml(userName, lang) {
  const t = getTranslation(lang).welcome;
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
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 40px 30px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">🧮</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:bold;">MathHelper</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">${t.subtitle}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">${t.title(userName)}</h2>
              <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:24px;">${t.body}</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding:12px 16px;background-color:#f0f4ff;border-radius:12px;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="padding-right:12px;font-size:24px;vertical-align:middle;">📸</td>
                      <td>
                        <div style="color:#1a1a2e;font-weight:600;font-size:14px;">${t.feature1Title}</div>
                        <div style="color:#6b7280;font-size:13px;">${t.feature1Sub}</div>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#f0fff4;border-radius:12px;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="padding-right:12px;font-size:24px;vertical-align:middle;">📚</td>
                      <td>
                        <div style="color:#1a1a2e;font-weight:600;font-size:14px;">${t.feature2Title}</div>
                        <div style="color:#6b7280;font-size:13px;">${t.feature2Sub}</div>
                      </td>
                    </tr></table>
                  </td>
                </tr>
                <tr><td style="height:8px;"></td></tr>
                <tr>
                  <td style="padding:12px 16px;background-color:#fff8f0;border-radius:12px;">
                    <table cellpadding="0" cellspacing="0"><tr>
                      <td style="padding-right:12px;font-size:24px;vertical-align:middle;">🎯</td>
                      <td>
                        <div style="color:#1a1a2e;font-weight:600;font-size:14px;">${t.feature3Title}</div>
                        <div style="color:#6b7280;font-size:13px;">${t.feature3Sub}</div>
                      </td>
                    </tr></table>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#6b7280;font-size:14px;line-height:22px;">${t.footer}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">&copy; ${new Date().getFullYear()} MathHelper. ${t.copyright}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function getPasswordResetEmailHtml(code, lang) {
  const t = getTranslation(lang).reset;
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
          <tr>
            <td style="background:linear-gradient(135deg,#667eea 0%,#764ba2 100%);padding:40px 40px 30px;text-align:center;">
              <div style="font-size:48px;margin-bottom:12px;">🔐</div>
              <h1 style="margin:0;color:#ffffff;font-size:28px;font-weight:bold;">MathHelper</h1>
              <p style="margin:8px 0 0;color:rgba(255,255,255,0.85);font-size:14px;">${t.headerText}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:40px;">
              <h2 style="margin:0 0 8px;color:#1a1a2e;font-size:22px;">${t.title}</h2>
              <p style="margin:0 0 24px;color:#6b7280;font-size:15px;line-height:24px;">${t.body}</p>
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td align="center" style="padding:24px;background-color:#f0f4ff;border-radius:12px;">
                    <div style="font-size:36px;font-weight:bold;letter-spacing:8px;color:#667eea;font-family:monospace;">${code}</div>
                  </td>
                </tr>
              </table>
              <p style="margin:0;color:#6b7280;font-size:14px;line-height:22px;">${t.ignore}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 40px;background-color:#f9fafb;border-top:1px solid #e5e7eb;text-align:center;">
              <p style="margin:0;color:#9ca3af;font-size:12px;">&copy; ${new Date().getFullYear()} MathHelper. ${t.copyright}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

// ─── Public API ──────────────────────────────────────────────

async function sendWelcomeEmail(toEmail, userName, lang = 'al') {
  try {
    const t = getTranslation(lang).welcome;
    await sendEmail(
      toEmail,
      t.subject(userName),
      getWelcomeEmailHtml(userName, lang)
    );
    console.log('[Email] Welcome email sent to', toEmail, 'lang:', lang);
  } catch (error) {
    console.error('[Email] Failed to send welcome email:', error.message);
  }
}

async function sendPasswordResetEmail(toEmail, code, lang = 'al') {
  try {
    const t = getTranslation(lang).reset;
    await sendEmail(
      toEmail,
      t.subject,
      getPasswordResetEmailHtml(code, lang)
    );
    console.log('[Email] Password reset email sent to', toEmail, 'lang:', lang);
  } catch (error) {
    console.error('[Email] Failed to send reset email:', error.message);
  }
}

module.exports = { sendWelcomeEmail, sendPasswordResetEmail };
