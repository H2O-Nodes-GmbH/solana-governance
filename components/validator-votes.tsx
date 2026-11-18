import { ExternalLink, BarChart3 } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export function ValidatorVotes() {
  return (
    <section className="py-8 md:py-12 bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionHeader
          title="How Validators Voted"
          description="See stake-weighted results and how validators voted on past and live Solana Governance Proposals"
        />

        <div className="mx-auto max-w-2xl">
          <a
            href="https://solgov.app/?tab=votes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between gap-4 rounded-lg border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md group"
          >
            <div className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  Open the voting tracker on solgov.app
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Live tallies, proposal outcomes, and validator-level vote breakdowns
                </p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
