import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solanagovernance.com"),
  title: "Solana Constitution | Community-Driven Governance Initiative",
  description:
    "Track the progress of the Solana Constitution and Declaration. Join community discussions led by Nick Almond (Jito Foundation) and Tushar Jain (Multicoin Capital) to shape Solana's decentralized governance framework.",
  keywords: [
    "Solana Constitution",
    "Solana Governance",
    "Blockchain Governance",
    "Decentralized Governance",
    "Solana Protocol",
    "SGP",
    "Solana Governance Proposal",
    "Validator Governance",
    "Jito Foundation",
    "Multicoin Capital",
    "Nick Almond",
    "Tushar Jain",
    "Breakpoint Conference",
  ],
  authors: [{ name: "Solana Constitution Initiative" }],
  creator: "H2O Nodes",
  publisher: "Solana Constitution Initiative",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.solanagovernance.com",
    siteName: "Solana Constitution",
    title: "Solana Constitution | Community-Driven Governance Initiative",
    description:
      "Track the progress of the Solana Constitution and Declaration. Join community discussions to shape Solana's decentralized governance framework.",
    images: [
      {
        url: "/solana-logo.png",
        width: 1200,
        height: 630,
        alt: "Solana Constitution Initiative",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Constitution | Community-Driven Governance",
    description:
      "Track the progress of the Solana Constitution and Declaration. Join community discussions to shape Solana's governance.",
    images: ["/solana-logo.png"],
    creator: "@H2oNodes",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
