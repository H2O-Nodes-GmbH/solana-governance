import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.solanagovernance.com"),
  title: {
    default: "Solana Governance",
    template: "%s | Solana Governance",
  },
  applicationName: "Solana Governance",
  description:
    "Solana Governance — track SGPs, the Constitution and Declaration, validator community calls, and the official voting platform at governance.solana.com.",
  keywords: [
    "Solana Governance",
    "Solana Constitution",
    "Solana Governance Proposal",
    "SGP",
    "Solana validator governance",
    "governance.solana.com",
    "decentralized governance",
    "Solana Declaration",
    "Jito Foundation",
    "Multicoin Capital",
  ],
  authors: [{ name: "Solana Governance Initiative" }],
  creator: "H2O Nodes",
  publisher: "Solana Governance Initiative",
  category: "technology",
  alternates: {
    canonical: "https://www.solanagovernance.com",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.solanagovernance.com",
    siteName: "Solana Governance",
    title: "Solana Governance",
    description:
      "Track Solana governance proposals (SGPs), community discussions, and the Constitution initiative — vote at governance.solana.com.",
    images: [
      {
        url: "/solana-logo.png",
        width: 1200,
        height: 630,
        alt: "Solana Governance",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solana Governance",
    description:
      "Track Solana governance proposals (SGPs), community discussions, and the Constitution initiative — vote at governance.solana.com.",
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

const brand = Outfit({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-brand",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${inter.variable} ${brand.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
