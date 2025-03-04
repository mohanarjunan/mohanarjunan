import React from "react"
import "./globals.scss"

export const metadata = {
  title: '  | MOHAN',
  description: 'Sign-By: Mohan Arjunan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
