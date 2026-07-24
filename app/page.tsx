import { Hero } from "@/components/hero"
import { SGPs } from "@/components/sgps"
import { Documents } from "@/components/documents"
import { VideoPrimer } from "@/components/video-primer"
import { GovernancePhases } from "@/components/governance-phases"
import { Blog } from "@/components/blog"
import { Timeline } from "@/components/timeline"
import { Leaders } from "@/components/leaders"
import { Footer } from "@/components/footer"

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "Solana Governance Initiative",
        url: "https://www.solanagovernance.com",
        logo: "https://www.solanagovernance.com/solana-logo.png",
        description: "Community-driven initiative to establish governance framework for the Solana blockchain",
        sameAs: ["https://x.com/H2oNodes", "https://discord.gg/solana"],
      },
      {
        "@type": "WebSite",
        name: "Solana Governance",
        url: "https://www.solanagovernance.com",
        description: "Track the progress of Solana governance, the Constitution, and Declaration",
        publisher: {
          "@type": "Organization",
          name: "Solana Governance Initiative",
        },
      },
      {
        "@type": "Event",
        name: "Monthly Validator Community Calls",
        description: "Monthly validator community call, featuring an update on the latest from governance discussions",
        startDate: "2024-01-01T18:00:00Z",
        endDate: "2024-12-31T19:00:00Z",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "VirtualLocation",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
        },
        organizer: [
          {
            "@type": "Person",
            name: "Nick Almond",
            affiliation: "Jito Foundation",
          },
          {
            "@type": "Person",
            name: "Tushar Jain",
            affiliation: "Multicoin Capital",
          },
        ],
      },
      {
        "@type": "Event",
        name: "Breakpoint Conference - Constitution Signing",
        description: "Official signing ceremony for the Solana Constitution at the annual Breakpoint conference",
        startDate: "2025-12-01",
        eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        location: {
          "@type": "Place",
          name: "Breakpoint Conference",
          url: "https://solana.com/breakpoint",
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <main className="min-h-screen">
        <Hero />
        <SGPs />
        <Documents />
        <VideoPrimer />
        <GovernancePhases />
        <Blog />
        <Timeline />
        <Leaders />
        <Footer />
      </main>
    </>
  )
}
