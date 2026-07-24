"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, ExternalLink, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ProposalSimulator } from "./proposal-simulator"
import { SectionHeader } from "@/components/section-header"

const phases = [
  {
    id: 0,
    title: "Phase 0: Proposal Formation",
    image: "/phase-0-formation.png",
    description: "Initial ideation and formation of governance proposals",
  },
  {
    id: 1,
    title: "Phase 1: Proposal Creation",
    image: "/phase-1-creation.png",
    description: "Creating the formal SGP draft with validator sponsors",
  },
  {
    id: 2,
    title: "Phase 2: Support Gathering",
    image: "/phase-2-support.png",
    description: "Gathering community support for the proposal",
  },
  {
    id: 3,
    title: "Phase 3: Voting",
    image: "/phase-3-voting.png",
    description: "Active voting period with validator and staker participation",
  },
  {
    id: 4,
    title: "Phase 4: Outcomes",
    image: "/phase-4-outcomes.png",
    description: "Final results and implementation of the proposal",
  },
]

export function GovernancePhases() {
  const [currentPhase, setCurrentPhase] = useState(0)

  const goToPrevious = () => {
    setCurrentPhase((prev) => (prev === 0 ? phases.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentPhase((prev) => (prev === phases.length - 1 ? 0 : prev + 1))
  }

  const phase = phases[currentPhase]

  return (
    <section className="py-12 md:py-16 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <SectionHeader
            title="Governance Process"
            description="Explore the five phases of the proposal process"
            className="mb-6"
          />
          <a
            href="https://docs.governance.solana.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 text-left transition-all hover:border-primary/50 hover:shadow-md group"
          >
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  Governance Docs
                </h3>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Technical documentation at docs.governance.solana.com
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>

        <div className="relative">
          {/* Phase Navigation Dots */}
          <div className="flex justify-center gap-2 mb-6">
            {phases.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPhase(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentPhase
                    ? "w-8 bg-gradient-to-r from-[#14F195] to-[#9945FF]"
                    : "w-2 bg-muted-foreground/30"
                }`}
                aria-label={`Go to phase ${index}`}
              />
            ))}
          </div>

          {/* Phase Content */}
          <div className="bg-background rounded-lg border shadow-lg overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center justify-end mb-4">
                <span className="text-sm text-muted-foreground">
                  {currentPhase + 1} / {phases.length}
                </span>
              </div>

              {/* Flowchart Image */}
              <div className="relative w-full aspect-[16/9] bg-white rounded-lg overflow-hidden">
                <Image
                  src={phase.image || "/placeholder.svg"}
                  alt={phase.title}
                  fill
                  className="object-contain p-4"
                  priority
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between p-4 border-t bg-muted/20">
              <Button onClick={goToPrevious} variant="outline" size="lg" className="gap-2 bg-transparent">
                <ChevronLeft className="h-5 w-5" />
                Previous
              </Button>
              <Button
                onClick={goToNext}
                size="lg"
                className="gap-2 bg-gradient-to-r from-[#14F195] to-[#9945FF] hover:opacity-90"
              >
                Next
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="mt-6 text-center">
            <ProposalSimulator />
          </div>
        </div>
      </div>
    </section>
  )
}
