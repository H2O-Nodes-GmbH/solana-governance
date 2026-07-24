import { ExternalLink, FileText, Vote } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex flex-col items-center gap-2.5 sm:gap-3">
            <Image
              src="/solana-logo.png"
              alt="Solana"
              width={300}
              height={60}
              className="h-12 w-auto sm:h-16"
              priority
            />
            <h1 className="font-brand text-[2.15rem] font-extrabold uppercase leading-none tracking-[0.12em] text-foreground sm:text-[3.1rem]">
              Governance
            </h1>
          </div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            <span>Community Initiative</span>
          </div>
          <p className="mx-auto mb-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A community-driven initiative to establish foundational governance principles for the Solana ecosystem, led
            by industry leaders and shaped by community voices.
          </p>
          <a
            href="https://governance.solana.com/proposals"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto flex max-w-xl items-center justify-between gap-4 rounded-lg border border-primary/40 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-5 text-left transition-all hover:border-primary group"
          >
            <div className="flex items-center gap-3">
              <Vote className="h-6 w-6 flex-shrink-0 text-primary" />
              <div>
                <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                  Vote on the Governance Platform
                </h2>
                <p className="mt-0.5 text-sm text-muted-foreground">Cast and track votes at governance.solana.com</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 flex-shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
          </a>
        </div>
      </div>
    </section>
  )
}
