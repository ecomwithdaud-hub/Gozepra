import nodemailer from "nodemailer";

import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

export async function POST(request) {
  try {
    const payload = await request.json();
    const parsed = contactSchema.safeParse(payload);

    if (!parsed.success) {
      return Response.json(
        {
          ok: false,
          message: "Please submit all required fields correctly.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    const inquiry = parsed.data;
    const transporter = createTransporter();

    if (transporter) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_TO || process.env.SMTP_TO || process.env.SMTP_USER,
        replyTo: inquiry.email,
        subject: `New Zepra Tech inquiry: ${inquiry.service}`,
        text: buildPlainText(inquiry),
        html: buildHtml(inquiry),
      });
    }

    console.log("[Zepra Tech inquiry]", inquiry);

    return Response.json({
      ok: true,
      message:
        "Thanks for reaching out to Zepra Tech. Your inquiry has been received and the team will respond soon.",
    });
  } catch (error) {
    console.error("[contact-route-error]", error);

    return Response.json(
      {
        ok: false,
        message:
          "We could not submit your inquiry right now. Please try again shortly or contact us directly by email.",
      },
      { status: 500 },
    );
  }
}

function createTransporter() {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null;
  }

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function buildPlainText(inquiry) {
  return `
New Zepra Tech inquiry

Name: ${inquiry.name}
Company: ${inquiry.company}
Email: ${inquiry.email}
Phone: ${inquiry.phone}
Service: ${inquiry.service}
Budget: ${inquiry.budget}
Timeline: ${inquiry.timeline}

Message:
${inquiry.message}
`.trim();
}

function buildHtml(inquiry) {
  return `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New Zepra Tech inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(inquiry.name)}</p>
      <p><strong>Company:</strong> ${escapeHtml(inquiry.company)}</p>
      <p><strong>Email:</strong> ${escapeHtml(inquiry.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(inquiry.phone)}</p>
      <p><strong>Service:</strong> ${escapeHtml(inquiry.service)}</p>
      <p><strong>Budget:</strong> ${escapeHtml(inquiry.budget)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(inquiry.timeline)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(inquiry.message).replace(/\n/g, "<br />")}</p>
    </div>
  `.trim();
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
