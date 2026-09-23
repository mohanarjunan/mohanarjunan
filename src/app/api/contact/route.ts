import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Basic email format check.
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'That email address looks invalid.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE !== 'false', // true for port 465, false for 587
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, // most providers require "from" to match the authenticated account
      replyTo: email, // so hitting "reply" in your inbox goes to the visitor
      to: process.env.CONTACT_TO_EMAIL,
      subject: `New message from ${name} (via Portfolio)`,
      text: message,
      html: `
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Contact form send failed:', err);
    return NextResponse.json(
      { error: 'Something went wrong sending your message. Please try again shortly.' },
      { status: 500 }
    );
  }
}

// Minimal HTML escaping so message content can't break out of the email markup.
function escapeHtml(str: string) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}