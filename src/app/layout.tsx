import React from "react"
import "./globals.scss"

export const metadata = {
  title: 'Mohan | Profile',
  description: 'Sign: MohanArjunan',
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
