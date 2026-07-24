import { Card, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"

const leaders = [
  {
    name: "Nick Almond",
    role: "Head of Governance",
    organization: "Jito Foundation",
    twitter: "https://x.com/DrNickA",
    handle: "@DrNickA",
    image: "/nick-almond.jpg",
    imageFit: "cover" as const,
    bio: "Identified the need for formal Solana governance, helped build early community support, and presented the initiative at Breakpoint. Contributed to the drafting of the Constitution and Declaration.",
  },
  {
    name: "Tushar Jain",
    role: "Cofounder and Managing Partner",
    organization: "Multicoin Capital",
    twitter: "https://x.com/TusharJain_",
    handle: "@TusharJain_",
    image: "/tushar-jain.jpg",
    imageFit: "cover" as const,
    bio: "Advanced the public discussion of Solana governance, presented at Breakpoint, and organized the initial community consultation sessions. Contributed to the drafting of the Constitution and Declaration.",
  },
  {
    name: "Nate Hughes",
    role: "Founder & CEO",
    organization: "Turbin3",
    twitter: "https://x.com/solanaturbine",
    handle: "@solanaturbine",
    image: "/nate-hughes.png",
    imageFit: "cover" as const,
    bio: "Led the development and coordination of svmgov, the Solana governance voting program and CLI used for proposal creation, ballot voting, and finalization across testing and mainnet phases.",
  },
  {
    name: "Dhruvraj Solanki",
    role: "Lead Developer",
    organization: "svmgov",
    twitter: "https://x.com/dhruvsol",
    handle: "@dhruvsol",
    image: "/dhruvraj-solanki.png",
    imageFit: "cover" as const,
    bio: "Lead developer of svmgov, the Solana governance voting program and CLI. Built the on-chain proposal, ballot, and vote accounting infrastructure that powers Solana governance.",
  },
  {
    name: "Bryan Cole",
    role: "Titan Analytics",
    organization: null,
    twitter: "https://x.com/Bryan_TitanA",
    handle: "@Bryan_TitanA",
    image: "/bryan-cole.png",
    imageFit: "cover" as const,
    bio: "NCN operator for Solana on-chain governance. Tested the governance tooling through multiple phases, from testnet validation of proposal and voting behavior to operator workflows including snapshot verification, merkle uploads, ballot voting, and finalization prior to mainnet deployment.",
  },
  {
    name: "Exotech",
    role: "Governance platform engineering",
    organization: null,
    twitter: "https://x.com/exo_tech_",
    handle: "@exo_tech_",
    image: "/exotech.png",
    imageFit: "contain" as const,
    bio: "Built the NCN (Node Consensus Network) infrastructure for Solana governance, including the snapshot system that captures stake weights and operator eligibility at epoch boundaries. Operator votes and ballot finalization are verified against these snapshots.",
  },
  {
    name: "Max Sherwood",
    role: "Co-founder",
    organization: "H2O Nodes",
    twitter: "https://x.com/maxh2onodes",
    handle: "@maxh2onodes",
    image: "/max-sherwood.png",
    imageFit: "cover" as const,
    bio: "Organizes the monthly validator community call as a regular forum for governance discussion, and developed this website to provide a central resource for governance updates.",
  },
]

export function Leaders() {
  return (
    <section id="leaders" className="bg-muted/30 py-8 sm:py-12">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <SectionHeader
          title="Governance Contributors"
          description="Meet the community members guiding Solana governance"
        />

        <div className="mx-auto grid max-w-5xl gap-3 sm:grid-cols-2">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex gap-4 items-start">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className={`h-20 w-20 flex-shrink-0 rounded-full bg-foreground/5 transition-transform hover:scale-105 ${
                      leader.imageFit === "contain" ? "object-contain p-2" : "object-cover"
                    }`}
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-foreground">{leader.name}</h3>
                    <div className="mt-1 flex items-start gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      <span>
                        {leader.organization ? `${leader.role}, ${leader.organization}` : leader.role}
                      </span>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{leader.bio}</p>
                    {leader.twitter && leader.handle && (
                      <a
                        href={leader.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        <Image src="/x-logo.png" alt="X" width={16} height={16} className="h-4 w-4 object-contain" />
                        {leader.handle}
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mx-auto max-w-4xl mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-primary to-secondary text-white hover:opacity-90 transition-opacity"
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfaPd_EH26daqkC4bCKUoP_2n7f47T-eCy3PtXpMCb7xAYbaQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Involved
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
