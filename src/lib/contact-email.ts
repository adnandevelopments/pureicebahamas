import { readFileSync } from "fs";
import path from "path";

const BRAND = "Pure Ice Bahamas";
const ACCENT = "#2BA9DE";
const LOGO_CID = "pureice-logo@pureicebahamas.com";

export type ContactEmailInput = {
  fullName: string;
  phone: string;
  email: string;
  message: string;
};

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function getContactLogoAttachment() {
  const filePath = path.join(process.cwd(), "public", "images", "logo.png");
  return {
    filename: "logo.png",
    content: readFileSync(filePath),
    cid: LOGO_CID,
    contentType: "image/png" as const,
  };
}

export function buildContactEmail({ fullName, phone, email, message }: ContactEmailInput) {
  const safeName = escapeHtml(fullName);
  const safePhone = escapeHtml(phone);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");
  const replyHref = `mailto:${encodeURIComponent(email)}`;

  const html = `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet">
</head>
<body style="margin:0;padding:24px;background:#f4f7f8;font-family:'Poppins',Arial,Helvetica,sans-serif;color:#0D0D0D;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="max-width:480px;margin:0 auto;background:#ffffff;padding:28px 28px 24px;">
    <tr>
      <td>
        <img src="cid:${LOGO_CID}" alt="${BRAND}" width="120" style="display:block;height:auto;border:0;">
        <p style="margin:20px 0 0;font-size:18px;font-weight:600;">New inquiry</p>
        <div style="width:72px;height:2px;background:${ACCENT};margin:8px 0 20px;"></div>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.5;">Name: ${safeName}</p>
        <p style="margin:0 0 8px;font-size:14px;line-height:1.5;">Phone: <a href="tel:${safePhone}" style="color:${ACCENT};text-decoration:none;">${safePhone}</a></p>
        <p style="margin:0 0 16px;font-size:14px;line-height:1.5;">Email: <a href="mailto:${safeEmail}" style="color:${ACCENT};font-weight:600;text-decoration:none;">${safeEmail}</a></p>
        <p style="margin:0 0 6px;font-size:14px;line-height:1.5;">Message:</p>
        <p style="margin:0 0 24px;font-size:14px;line-height:1.6;">${safeMessage}</p>
        <a href="${replyHref}" style="display:inline-block;background:${ACCENT};color:#ffffff;text-decoration:none;font-size:14px;font-weight:600;padding:10px 22px;border-radius:999px;">Reply</a>
        <p style="margin:28px 0 0;font-size:12px;color:#7a7a7a;">${BRAND}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const text = [
    `New inquiry — ${BRAND}`,
    "",
    `Name: ${fullName}`,
    `Phone: ${phone}`,
    `Email: ${email}`,
    "",
    "Message:",
    message,
  ].join("\n");

  return {
    subject: `New inquiry from ${fullName} — ${BRAND}`,
    html,
    text,
  };
}
