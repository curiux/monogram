import './globals.css'
import type { Metadata } from 'next'
import { Inter } from "next/font/google"

const inter = Inter({
  weight: ["200", "300", "400", "800"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Front-end Dev Exercise',
  description: 'Front-end Dev Exercise III for Monogram.io',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
