import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Medrasaty - Coming Soon",
  description: "Medrasaty is launching soon. Stay tuned for updates.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-mono bg-black text-white">{children}</body>
    </html>
  )
}
