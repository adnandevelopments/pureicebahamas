import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { buildContactEmail, getContactLogoAttachment } from "@/lib/contact-email";

type ContactBody = {
  fullName?: string;
  phone?: string;
  email?: string;
  message?: string;
};

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function getErrorDetail(error: unknown): string {
  if (!error || typeof error !== "object") {
    return String(error ?? "Unknown error");
  }
  const err = error as {
    message?: string;
    code?: string;
    response?: string;
    responseCode?: number;
    command?: string;
  };
  return (
    [
      err.code && `code=${err.code}`,
      err.responseCode && `responseCode=${err.responseCode}`,
      err.command && `command=${err.command}`,
      err.response && `response=${err.response}`,
      err.message && `message=${err.message}`,
    ]
      .filter(Boolean)
      .join(" | ") || "Unknown SMTP error"
  );
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const fullName = body.fullName?.trim();
  const phone = body.phone?.trim();
  const email = body.email?.trim();
  const message = body.message?.trim();

  if (
    !isNonEmptyString(fullName) ||
    !isNonEmptyString(phone) ||
    !isNonEmptyString(email) ||
    !isNonEmptyString(message)
  ) {
    return NextResponse.json({ error: "Please fill in all required fields." }, { status: 400 });
  }

  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT || "465");
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL;

  const missing = [
    !smtpHost && "SMTP_HOST",
    !smtpUser && "SMTP_USER",
    !smtpPass && "SMTP_PASS",
    !adminEmail && "CONTACT_ADMIN_EMAIL",
  ].filter(Boolean);

  if (missing.length > 0) {
    const detail = `Missing env: ${missing.join(", ")}`;
    console.error("[contact]", detail);
    return NextResponse.json(
      { error: "Email is not configured. Please try again later.", detail },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: { user: smtpUser, pass: smtpPass },
    pool: false,
    maxConnections: 1,
    connectionTimeout: 20_000,
    greetingTimeout: 20_000,
    socketTimeout: 20_000,
  });

  try {
    const mail = buildContactEmail({ fullName, phone, email, message });

    console.log("[contact] Sending…", { to: adminEmail, from: smtpUser });

    const info = await transporter.sendMail({
      from: `"Pure Ice Bahamas" <${smtpUser}>`,
      to: adminEmail,
      replyTo: email,
      subject: mail.subject,
      text: mail.text,
      html: mail.html,
      attachments: [getContactLogoAttachment()],
    });

    console.log("[contact] Email sent", {
      messageId: info.messageId,
      response: info.response,
      accepted: info.accepted,
      rejected: info.rejected,
    });

    return NextResponse.json({
      ok: true,
      messageId: info.messageId,
      response: info.response,
    });
  } catch (error) {
    const detail = getErrorDetail(error);
    console.error("[contact] Failed to send email:", detail, error);
    return NextResponse.json(
      { error: "Could not send your message. Please try again.", detail },
      { status: 500 },
    );
  }
}
