import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message)
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      cc: process.env.MAIL_CC,
      subject: `New message from ${name} | Through Website`,
      text: message,
      html: `
        <div style="font-family: sans-serif;">
          <div>New message from <strong>${name}</strong></div>
          <p>${message}</p>
          <p><strong>Contact Email:</strong> ${email}</p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message send successfully!" });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
