import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohan Arjunan",
  description: "Resume of Mine!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
