"use client";

import Link from "next/link";
import { useState } from "react";

const CONTACT_ROWS = [
  {
    label: "Email",
    value: "mohan.arjunan@outlook.in",
    href: "mailto:mohan.arjunan@outlook.in",
  },
  {
    label: "Alt. Email",
    value: "itsmohanarjunan@gmail.com",
    href: "mailto:itsmohanarjunan@gmail.com",
  },
  { label: "Location", value: "Nagercoil, Tamil Nadu" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/mohanarjunan",
    href: "https://linkedin.com/in/mohanarjunan",
  },
  {
    label: "GitHub",
    value: "github.com/mohanarjunan",
    href: "https://github.com/mohanarjunan",
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  type Status = "idle" | "sending" | "sent" | "error";

  // ...inside your component:
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e:any) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send message.");
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message.",
      );
    }
  }

  return (
    <div className="w-full bg-surface-300">
      <div className="mx-auto max-w-[760px] px-6 pt-16 pb-20">
        <div className="mb-9 font-mono text-[13px] tracking-wide text-dark-200">
          CONTACT
        </div>

        <h1 className=" font-avenir text-5xl font-semibold tracking-tight text-dark-100">
          Mohan Arjunan
        </h1>

        <p className="mb-10 font-serif text-lg italic text-dark-300">
          Backend Engineer — Fintech &amp; Capital Markets
        </p>

        <div className="border-t border-[#D7D2C4] dark:border-[#33383B]">
          {CONTACT_ROWS.map((row) => (
            <div
              key={row.label}
              className="flex flex-col gap-1 border-b border-[#D7D2C4] py-[18px]
                       dark:border-[#33383B]
                       sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <span className="text-sm text-dark-200">{row.label}</span>
              <span className="text-left font-mono text-[15px] sm:text-right text-dark-100">
                {row.href ? (
                  <Link
                    href={row.href}
                    target="_blank"
                    className="border-b border-[#D7D2C4] text-inherit no-underline hover:border-dark-300 hover:text-dark-300 "
                  >
                    {row.value}
                  </Link>
                ) : (
                  row.value
                )}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="mt-14 text-dark-100">
          <p className="mb-6 max-w-[52ch] text-dark-200">
            Have a project, an opportunity, or a question about backend
            development and market-data systems? Feel free to reach out — I'd be
            happy to connect.
          </p>

          <div className="mb-5">
            <label htmlFor="name" className="mb-1.5 block text-[13px]">
              Your name *
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full rounded-sm border border-dark-500 bg-surface-200 px-3.5 py-3 text-[15px] text-inherit
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-400"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="email" className="mb-1.5 block text-[13px]">
              Your email *
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full rounded-sm border border-dark-500 bg-surface-200 px-3.5 py-3 text-[15px] text-inherit
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-400"
            />
          </div>

          <div className="mb-5">
            <label htmlFor="message" className="mb-1.5 block text-[13px]">
              Message *
            </label>
            <textarea
              id="message"
              required
              className="min-h-[120px] w-full resize-y rounded-sm border border-dark-500 bg-surface-200 px-3.5 py-3 text-[15px] text-inherit
                       focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dark-400"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm bg-[#2F6F5E] px-6 py-3 text-[15px] font-medium text-[#F6F5F1]
                     hover:opacity-90
                     focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2F6F5E]
                     dark:bg-dark-500 dark:text-dark-100 cursor-pointer"
          >
            Send message
          </button>

          {sent && (
            <p className="mt-3.5 text-sm text-[#2F6F5E] dark:text-[#5FB79E]">
              Message ready — wire this form up to an API route or email service
              to send it.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}
