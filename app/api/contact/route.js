import nodemailer from "nodemailer";

import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO || "info@gozepra.tech";
const CONTACT_FROM = process.env.SMTP_FROM || process.env.SMTP_USER || "info@gozepra.tech";

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS,
  );
}

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

    if (!smtpConfigured()) {
      console.log("[Zepra Tech inquiry, email not configured]", parsed.data);
      return Response.json(
        {
          ok: false,
          emailSent: false,
          message:
            "Email sending is not connected yet. Please email info@gozepra.tech or call +1 (302) 469-4003 and we will reply within 24 hours.",
          contactEmail: "info@gozepra.tech",
          contactPhone: "+1 (302) 469-4003",
        },
        { status: 503 },
      );
    }

    const { name, company, email, phone, service, budget, timeline, message } =
      parsed.data;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const text = [
      `New website inquiry for Zepra Tech`,
      ``,
      `Full Name: ${name}`,
      `Company: ${company}`,
      `Work Email: ${email}`,
      `Phone: ${phone}`,
      `Service Needed: ${service}`,
      `Estimated Budget: ${budget}`,
      `Preferred Timeline: ${timeline}`,
      ``,
      `Project Goals:`,
      message,
    ].join("\n");

    await transporter.sendMail({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `New inquiry from ${name} | ${service}`,
      text,
    });

    return Response.json({
      ok: true,
      emailSent: true,
      message:
        "Thanks, your message was sent to the Zepra Tech team. We reply within 24 hours.",
    });
  } catch (error) {
    console.error("[contact-route-error]", error);

    return Response.json(
      {
        ok: false,
        emailSent: false,
        message:
          "We could not send your message right now. Please email info@gozepra.tech or call +1 (302) 469-4003.",
        contactEmail: "info@gozepra.tech",
        contactPhone: "+1 (302) 469-4003",
      },
      { status: 500 },
    );
  }
}
