// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Missing required fields: name, email, or message" },
        { status: 400 }
      );
    }

    if (
      !process.env.MAIL_USER ||
      !process.env.MAIL_PASS ||
      !process.env.MAIL_TO
    ) {
      return NextResponse.json(
        { message: "Email configuration is missing on server" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      cc: process.env.MAIL_CC || undefined,
      subject: `New message from ${name} | Website`,
      text: message,
      html: `
        <div style="font-family: sans-serif;">
          <div>New message from <strong>${name}</strong></div>
          <p>${message}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { message: "Failed to send message. Try again later." },
      { status: 500 }
    );
  }
}

// Optional: Add GET to test in browser
export async function GET() {
  return NextResponse.json({ message: "API is working!" });
}
