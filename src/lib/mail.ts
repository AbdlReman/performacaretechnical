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
