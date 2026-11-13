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
    connectionTimeout: 20000,
    greetingTimeout: 20000,
    socketTimeout: 30000,
  });
}

function fromAddress() {
  const name = env("EMAIL_FROM_NAME", "Performa Care");
  const user = env("EMAIL_USER");
  return `"${name}" <${user}>`;
}

function siteUrl() {
  return env("NEXT_PUBLIC_SITE_URL", "https://performacaretechnical.ae").replace(/\/$/, "");
}

function buildSubscribeWelcomeHtml(locale: string) {
  const base = siteUrl();
  const logoUrl = `${base}/images/logo-white-01.png`;
  const isAr = locale === "ar";

  const title = isAr ? "مرحباً بك في بيرفورما كير!" : "Welcome to Performa Care!";
  const thanks = isAr
    ? "شكراً لاشتراكك. يسعدنا انضمامك إلينا."
    : "Thank you for subscribing. We're glad to have you with us.";
  const p1 = isAr
    ? "في <strong style=\"color:#0d2236;\">بيرفورما كير للخدمات التقنية وخدمات الضيافة</strong> نقدم خدمات التنظيف الاحترافية وتوفير الموظفين المدربين وحلول الصيانة التقنية في دبي."
    : "At <strong style=\"color:#0d2236;\">Performa Care Technical Services &amp; Hospitality Services</strong>, we provide professional cleaning, trained staff supply, and technical maintenance solutions across Dubai.";
  const p2 = isAr
    ? "سواء احتجت تنظيفاً منتظماً أو طاقم تدبير منزلي أو مراسلين مكتبيين أو نوادل للفعاليات أو صيانة MEP — نحن شريكك الموثوق."
    : "Whether you need regular cleaning, housekeeping staff, office boys, waiters for events, or MEP maintenance — we are your single trusted partner.";
  const cta = isAr ? "زيارة موقعنا" : "Visit Our Website";
  const contactTitle = isAr ? "تواصل معنا" : "Get in Touch";
  const footerNote = isAr
    ? "تصلك هذه الرسالة لأنك اشتركت في تحديثاتنا."
    : "You are receiving this because you subscribed to our updates.";

  return `<!DOCTYPE html>
<html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${title}</title>
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
              <h1 style="margin:0;font-size:28px;line-height:1.25;color:#0d2236;font-weight:800;">${title}</h1>
              <p style="margin:12px 0 0;font-size:16px;line-height:1.5;color:#5b6b7b;">${thanks}</p>
            </td>
          </tr>
          <tr>
            <td style="padding:8px 32px 8px;">
              <p style="margin:0 0 14px;font-size:15px;line-height:1.65;color:#33495e;">${p1}</p>
              <p style="margin:0 0 22px;font-size:15px;line-height:1.65;color:#33495e;">${p2}</p>
            </td>
          </tr>
          <tr>
            <td align="center" style="padding:0 32px 28px;">
              <a href="${base}" style="display:inline-block;background:#0d2236;color:#ffffff;text-decoration:none;font-size:15px;font-weight:700;padding:14px 28px;border-radius:999px;">${cta}</a>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f0f6fb;border-radius:12px;">
                <tr>
                  <td style="padding:20px 18px;">
                    <p style="margin:0 0 10px;font-size:16px;font-weight:800;color:#0d2236;">${contactTitle}</p>
                    <p style="margin:0 0 6px;font-size:14px;">
                      <a href="tel:+971502247589" style="color:#1a6397;text-decoration:none;font-weight:700;">+971 50 224 7589</a>
                    </p>
                    <p style="margin:0 0 6px;font-size:14px;">
                      <a href="mailto:info@performacaretechnical.ae" style="color:#1a6397;text-decoration:none;font-weight:700;">info@performacaretechnical.ae</a>
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
              <p style="margin:0;font-size:11px;line-height:1.5;color:#9bb0c3;">${footerNote}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function sendSubscribeWelcomeEmail(email: string, locale = "en") {
  if (!isMailConfigured()) {
    console.warn("Subscribe email skipped: SMTP env is not fully configured.");
    return { sent: false };
  }

  const isAr = locale === "ar";
  const transporter = getTransporter();
  const info = await transporter.sendMail({
    from: fromAddress(),
    to: email,
    subject: isAr
      ? "مرحباً بك في بيرفورما كير — شكراً لاشتراكك"
      : "Welcome to Performa Care — thanks for subscribing",
    html: buildSubscribeWelcomeHtml(locale),
    text: isAr
      ? [
          "مرحباً بك في بيرفورما كير!",
          "شكراً لاشتراكك. يسعدنا انضمامك إلينا.",
          "",
          `زيارة موقعنا: ${siteUrl()}`,
          "+971 50 224 7589",
          "info@performacaretechnical.ae",
        ].join("\n")
      : [
          "Welcome to Performa Care!",
          "Thank you for subscribing. We're glad to have you with us.",
          "",
          `Visit our website: ${siteUrl()}`,
          "+971 50 224 7589",
          "info@performacaretechnical.ae",
        ].join("\n"),
  });

  console.log("Subscribe welcome email sent:", info.messageId, "to", email);
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

function buildQuoteThanksHtml(payload: QuoteMailPayload) {
  const isAr = payload.locale === "ar";
  const base = siteUrl();
  const logoUrl = `${base}/images/logo-white-01.png`;
  const title = isAr ? "شكراً لتواصلك معنا" : "Thanks for messaging us";
  const greeting = isAr
    ? `مرحباً ${escapeHtml(payload.name)},`
    : `Hi ${escapeHtml(payload.name)},`;
  const body = isAr
    ? "شكراً لتواصلك مع بيرفورما كير. لقد استلمنا رسالتك وطلبك، وسيتواصل معك فريقنا قريباً."
    : "Thanks for contacting Performa Care. We have received your message and request, and our team will get back to you soon.";
  const regards = isAr ? "مع تحيات<br/>بيرفورما كير" : "Best regards,<br/>Performa Care";

  return `<!DOCTYPE html>
<html lang="${isAr ? "ar" : "en"}" dir="${isAr ? "rtl" : "ltr"}">
<head><meta charset="UTF-8" /><title>${title}</title></head>
<body style="margin:0;padding:0;background:#e8eef4;font-family:Arial,Helvetica,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#e8eef4;padding:24px 12px;">
    <tr><td align="center">
      <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:8px;overflow:hidden;border:1px solid #d7e2ec;">
        <tr><td style="background:#0d2236;padding:18px 28px;">
          <img src="${logoUrl}" alt="Performa Care" width="64" style="display:block;border:0;width:64px;height:auto;" />
        </td></tr>
        <tr><td style="padding:32px;">
          <h1 style="margin:0 0 12px;font-size:24px;color:#0d2236;">${title}</h1>
          <p style="margin:0 0 12px;font-size:15px;line-height:1.6;color:#33495e;">${greeting}</p>
          <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#33495e;">${body}</p>
          <p style="margin:0 0 18px;font-size:15px;line-height:1.6;color:#33495e;">${regards}</p>
          <p style="margin:0;font-size:13px;color:#5b6b7b;">+971 50 224 7589 · info@performacaretechnical.ae</p>
        </td></tr>
      </table>
    </td></tr>
  </table>
</body>
</html>`;
}

export async function sendQuoteEmails(payload: QuoteMailPayload) {
  if (!isMailConfigured()) {
    console.warn("Email skipped: SMTP env is not fully configured.");
    return { adminSent: false, userSent: false };
  }

  const transporter = getTransporter();
  const adminTo = env("EMAIL_TO", env("EMAIL_USER"));
  const from = fromAddress();
  const userEmail = payload.email.trim().toLowerCase();
  const isAr = payload.locale === "ar";

  const detailsHtml = `
    <h2 style="margin:0 0 12px;font-family:Arial,sans-serif;color:#0d2236;">New quote request</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;color:#0d2236;">
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Name</td><td>${escapeHtml(payload.name)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Phone</td><td>${escapeHtml(payload.phone)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Email</td><td>${escapeHtml(userEmail || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Service</td><td>${escapeHtml(payload.service || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Property</td><td>${escapeHtml(payload.property || "—")}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;">Locale</td><td>${escapeHtml(payload.locale)}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;font-weight:bold;vertical-align:top;">Message</td><td>${escapeHtml(payload.message || "—").replace(/\n/g, "<br/>")}</td></tr>
    </table>
  `;

  // Send user thank-you first so form filler always gets confirmation,
  // then notify admin. Run independently so one failure does not block the other.
  const userPromise = userEmail
    ? transporter
        .sendMail({
          from,
          to: userEmail,
          replyTo: env("EMAIL_USER"),
          subject: isAr
            ? "شكراً لتواصلك مع بيرفورما كير"
            : "Thanks for messaging Performa Care",
          html: buildQuoteThanksHtml({ ...payload, email: userEmail }),
          text: isAr
            ? `مرحباً ${payload.name},\n\nشكراً لتواصلك معنا. لقد استلمنا رسالتك وسنرد عليك قريباً.\n\nبيرفورما كير\n+971 50 224 7589`
            : `Hi ${payload.name},\n\nThanks for messaging us. We have received your request and will respond to you soon.\n\nPerforma Care\n+971 50 224 7589`,
        })
        .then((info) => {
          console.log("Quote thank-you email sent:", info.messageId, "to", userEmail, info.response);
          return true;
        })
        .catch((error) => {
          console.error("Quote thank-you email failed:", error);
          return false;
        })
    : Promise.resolve(false);

  const adminPromise = transporter
    .sendMail({
      from,
      to: adminTo,
      replyTo: userEmail || undefined,
      subject: `New quote request from ${payload.name}`,
      html: detailsHtml,
      text: [
        "New quote request",
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Email: ${userEmail || "—"}`,
        `Service: ${payload.service || "—"}`,
        `Property: ${payload.property || "—"}`,
        `Locale: ${payload.locale}`,
        `Message: ${payload.message || "—"}`,
      ].join("\n"),
    })
    .then((info) => {
      console.log("Quote admin email sent:", info.messageId, info.response);
      return true;
    })
    .catch((error) => {
      console.error("Quote admin email failed:", error);
      return false;
    });

  // User confirmation first, then admin (avoids slow admin SMTP delaying thank-you).
  const userSent = await userPromise;
  const adminSent = await adminPromise;

  return { adminSent, userSent };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
