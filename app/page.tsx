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
        "@id": "https://www.solanagovernance.com/#organization",
        name: "Solana Governance",
        url: "https://www.solanagovernance.com",
        logo: {
          "@type": "ImageObject",
          url: "https://www.solanagovernance.com/solana-logo.png",
        },
        description:
          "Community-driven initiative tracking Solana governance proposals, the Constitution and Declaration, and validator community discussions.",
        sameAs: [
          "https://x.com/H2oNodes",
          "https://x.com/maxh2onodes",
          "https://governance.solana.com/proposals",
          "https://github.com/solana-foundation/solana-governance-proposals",
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.solanagovernance.com/#website",
        name: "Solana Governance",
        url: "https://www.solanagovernance.com",
        description:
          "Track Solana governance proposals (SGPs), community discussions, and the Constitution initiative.",
        publisher: {
          "@id": "https://www.solanagovernance.com/#organization",
        },
        inLanguage: "en-US",
      },
      {
        "@type": "WebPage",
        "@id": "https://www.solanagovernance.com/#webpage",
        url: "https://www.solanagovernance.com",
        name: "Solana Governance",
        isPartOf: {
          "@id": "https://www.solanagovernance.com/#website",
        },
        about: {
          "@id": "https://www.solanagovernance.com/#organization",
        },
        description:
          "Solana Governance — SGPs, Constitution and Declaration documents, validator community calls, and links to the official voting platform.",
        inLanguage: "en-US",
      },
      {
        "@type": "Event",
        name: "Monthly Validator Community Calls",
        description:
          "Monthly validator community call featuring updates and discussion on Solana governance.",
        eventAttendanceMode: "https://schema.org/OnlineEventAttendanceMode",
        eventStatus: "https://schema.org/EventScheduled",
        eventSchedule: {
          "@type": "Schedule",
          repeatFrequency: "P1M",
          byDay: "https://schema.org/Thursday",
          startTime: "18:00:00",
          scheduleTimezone: "UTC",
        },
        location: {
          "@type": "VirtualLocation",
          url: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
        },
        organizer: {
          "@type": "Person",
          name: "Max Sherwood",
          affiliation: "H2O Nodes",
          url: "https://x.com/maxh2onodes",
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
        <VideoPrimer />
        <GovernancePhases />
        <Blog />
        <Documents />
        <Timeline />
        <Leaders />
        <Footer />
      </main>
    </>
  )
}
