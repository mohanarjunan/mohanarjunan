import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Mohan Arjunan",
  description: "Resume of Mine!",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`font-sans font antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
