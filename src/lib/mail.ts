import nodemailer from "nodemailer";

function env(name: string, fallback = "") {
  return process.env[name]?.trim() || fallback;
}

export function isMailConfigured() {
  return Boolean(env("EMAIL_HOST") && env("EMAIL_USER") && env("EMAIL_PASS"));
}

function getTransporter() {
  const port = Number(env("EMAIL_PORT", "465"));
  const secure = env("EMAIL_SECURE", "true") !== "false";

  return nodemailer.createTransport({
    host: env("EMAIL_HOST"),
    port,
    secure,
    auth: {
      user: env("EMAIL_USER"),
      pass: env("EMAIL_PASS"),
    },
  });
}

function fromAddress() {
  const name = env("EMAIL_FROM_NAME", "Performa Care");
  const user = env("EMAIL_USER");
  return `"${name}" <${user}>`;
}

function siteUrl() {
  return env("NEXT_PUBLIC_SITE_URL", "https://performacaretechnical.com").replace(/\/$/, "");
}

function buildSubscribeWelcomeHtml() {
  const base = siteUrl();
  const logoUrl = `${base}/images/logo-white-01.png`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Performa Care</title>
</head>
<body style="margin:0;padding:0;background:#e8eef4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#e8eef4;padding:24px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #d7e2ec;">
          <tr>
            <td style="background:#0d2236;padding:18px 28px;">
              <img src="${logoUrl}" alt="Performa Care" width="64" height="64" style="display:block;border:0;outline:none;width:64px;height:auto;" />
            </td>
          </tr>
          <tr>
            <td style="padding:36px 32px 12px;text-align:center;">
              <h1 style="margin:0;font-size:28px;line-height:1.25;color:#0d2236;font-weight:800;">Welcome to Performa Care!</h1>
              <p style="margin:12px 0 0;font-size:16px;line-height:1.5;color:#5b6b7b;">Thank you for subscribing. We're glad to have you with us.</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 8px;">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#33495e;">
                At <strong style="color:#0d2236;">Performa Care Technical Services &amp; Hospitality Services</strong>, we provide professional cleaning, trained staff supply, and technical maintenance solutions across Dubai.
              </p>
              <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:#33495e;">
                Whether you need regular cleaning, housekeeping staff, office boys, waiters for events, or MEP maintenance — we are your single trusted partner.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 8px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0f6fb;border-radius:12px;margin-bottom:12px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#0d2236;">✓ 2-Hour Response</p>
                    <p style="margin:0;font-size:14px;line-height:1.5;color:#5b6b7b;">We respond to any issue within 2 hours.</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0f6fb;border-radius:12px;margin-bottom:12px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#0d2236;">✓ Trained Professionals</p>
                    <p style="margin:0;font-size:14px;line-height:1.5;color:#5b6b7b;">Skilled cleaners, housekeeping, office boys &amp; hospitality staff.</p>
                  </td>
                </tr>
              </table>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0f6fb;border-radius:12px;margin-bottom:24px;">
                <tr>
                  <td style="padding:16px 18px;">
                    <p style="margin:0 0 4px;font-size:15px;font-weight:700;color:#0d2236;">✓ Eco-Friendly &amp; Modern</p>
                    <p style="margin:0;font-size:14px;line-height:1.5;color:#5b6b7b;">Safe products and state-of-the-art equipment.</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 32px 28px;">
              <a href="${base}" style="display:inline-block;background:#0d2236;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 28px;border-radius:999px;">Visit Our Website</a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0f6fb;border-radius:12px;">
                <tr>
                  <td style="padding:20px 18px;">
                    <p style="margin:0 0 10px;font-size:16px;font-weight:800;color:#0d2236;">Get in Touch</p>
                    <p style="margin:0 0 6px;font-size:14px;">
                      <a href="tel:+971502247589" style="color:#1a6397;text-decoration:none;font-weight:700;">+971 50 224 7589</a>
                    </p>
                    <p style="margin:0 0 6px;font-size:14px;">
                      <a href="mailto:info@performacaretechnical.com" style="color:#1a6397;text-decoration:none;font-weight:700;">info@performacaretechnical.com</a>
                    </p>
                    <p style="margin:0;font-size:14px;line-height:1.5;color:#5b6b7b;">Office 476, Arjumand Building, Green Community Village, Dubai</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="background:#0d2236;padding:22px 28px;text-align:center;">
              <p style="margin:0 0 8px;font-size:12px;line-height:1.5;color:#ffffff;">© 2026 Performa Care Technical Services &amp; Hospitality Services. Dubai, UAE.</p>
              <p style="margin:0;font-size:11px;line-height:1.5;color:#9bb0c3;">You are receiving this because you subscribed to our updates.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendSubscribeWelcomeEmail(email: string) {
  if (!isMailConfigured()) {
    console.warn("Subscribe email skipped: SMTP env is not fully configured.");
    return { sent: false };
  }

  const transporter = getTransporter();
  await transporter.sendMail({
    from: fromAddress(),
    to: email,
    subject: "Welcome to Performa Care — thanks for subscribing",
    html: buildSubscribeWelcomeHtml(),
    text: [
      "Welcome to Performa Care!",
      "Thank you for subscribing. We're glad to have you with us.",
      "",
      "At Performa Care Technical Services & Hospitality Services, we provide professional cleaning, trained staff supply, and technical maintenance solutions across Dubai.",
      "",
      "Whether you need regular cleaning, housekeeping staff, office boys, waiters for events, or MEP maintenance — we are your single trusted partner.",
      "",
      "2-Hour Response — We respond to any issue within 2 hours.",
      "Trained Professionals — Skilled cleaners, housekeeping, office boys & hospitality staff.",
      "Eco-Friendly & Modern — Safe products and state-of-the-art equipment.",
      "",
      `Visit our website: ${siteUrl()}`,
      "",
      "Get in Touch",
      "+971 50 224 7589",
      "info@performacaretechnical.com",
      "Office 476, Arjumand Building, Green Community Village, Dubai",
      "",
      "© 2026 Performa Care Technical Services & Hospitality Services. Dubai, UAE.",
      "You are receiving this because you subscribed to our updates.",
    ].join("\n"),
  });

  return { sent: true };
}

export type QuoteMailPayload = {
  name: string;
  phone: string;
  email: string;
  service: string;
  property: string;
  message: string;
  locale: string;
};

export async function sendQuoteEmails(payload: QuoteMailPayload) {
  if (!isMailConfigured()) {
    console.warn("Email skipped: SMTP env is not fully configured.");
    return { adminSent: false, userSent: false };
  }

  const transporter = getTransporter();
  const adminTo = env("EMAIL_TO", env("EMAIL_USER"));
  const from = fromAddress();

  const detailsHtml = `
    <h2 style="margin:0 0 12px;font-family:Arial,sans-serif;color:#0d2236;">New quote request</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#0d2236;">
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Name</td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Phone</td><td>${escapeHtml(payload.phone)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td>${escapeHtml(payload.email || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Service</td><td>${escapeHtml(payload.service || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Property</td><td>${escapeHtml(payload.property || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Locale</td><td>${escapeHtml(payload.locale)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;">Message</td><td>${escapeHtml(payload.message || "—").replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  const adminMail = await transporter.sendMail({
    from,
    to: adminTo,
    replyTo: payload.email || undefined,
    subject: `New quote request from ${payload.name}`,
    html: detailsHtml,
    text: [
      "New quote request",
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      `Email: ${payload.email || "—"}`,
      `Service: ${payload.service || "—"}`,
      `Property: ${payload.property || "—"}`,
      `Locale: ${payload.locale}`,
      `Message: ${payload.message || "—"}`,
    ].join("\n"),
  });

  let userSent = false;
  if (payload.email) {
    const isAr = payload.locale === "ar";
    const userSubject = isAr
      ? "شكراً لتواصلك مع بيرفورما كير"
      : "Thanks for messaging Performa Care";
    const userHtml = isAr
      ? `
        <div style="font-family:Arial,sans-serif;color:#0d2236;line-height:1.6;">
          <p>مرحباً ${escapeHtml(payload.name)},</p>
          <p>شكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك قريباً.</p>
          <p>مع تحيات<br/>بيرفورما كير</p>
          <p style="color:#5b6b7b;font-size:13px;">+971 50 224 7589 · info@performacaretechnical.com</p>
        </div>
      `
      : `
        <div style="font-family:Arial,sans-serif;color:#0d2236;line-height:1.6;">
          <p>Hi ${escapeHtml(payload.name)},</p>
          <p>Thanks for messaging us. We have received your request and will respond to you soon.</p>
          <p>Best regards,<br/>Performa Care</p>
          <p style="color:#5b6b7b;font-size:13px;">+971 50 224 7589 · info@performacaretechnical.com</p>
        </div>
      `;

    await transporter.sendMail({
      from,
      to: payload.email,
      subject: userSubject,
      html: userHtml,
      text: isAr
        ? `مرحباً ${payload.name},\n\nشكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك قريباً.\n\nبيرفورما كير`
        : `Hi ${payload.name},\n\nThanks for messaging us. We have received your request and will respond to you soon.\n\nPerforma Care`,
    });
    userSent = true;
  }

  return {
    adminSent: Boolean(adminMail.messageId),
    userSent,
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
