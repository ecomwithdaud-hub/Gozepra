import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/contact-schema";

export const runtime = "nodejs";

const CONTACT_TO = process.env.CONTACT_TO || process.env.SMTP_TO || "info@gozepra.tech";
const PHONE = "+1 (302) 469-4003";

function smtpConfigured() {
  return Boolean(
    process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
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
          message: "Please fill in every field correctly and try again.",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 },
      );
    }

    if (!smtpConfigured()) {
      return Response.json(
        {
          ok: false,
          message: `Email is not connected yet. Please write to us directly at ${CONTACT_TO} or call ${PHONE}.`,
        },
        { status: 503 },
      );
    }

    const data = parsed.data;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: CONTACT_TO,
      replyTo: data.email,
      subject: `New inquiry from ${data.name} | ${data.service}`,
      text: [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone}`,
        `Service: ${data.service}`,
        `Budget: ${data.budget}`,
        `Timeline: ${data.timeline}`,
        "",
        "Project goals:",
        data.message,
      ].join("\n"),
    });

    return Response.json({
      ok: true,
      message: "Thanks. Your message was sent. We reply within 24 hours.",
    });
  } catch (error) {
    console.error("[contact-route-error]", error);

    return Response.json(
      {
        ok: false,
        message: `We could not send your message right now. Please write to us directly at ${CONTACT_TO} or call ${PHONE}.`,
      },
      { status: 500 },
    );
  }
}
