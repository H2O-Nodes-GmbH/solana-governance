import { FileText } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container relative mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex flex-col items-center gap-3">
            <Image
              src="/solana-logo.png"
              alt="Solana"
              width={300}
              height={60}
              className="h-12 w-auto sm:h-16"
              priority
            />
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Constitution</h2>
          </div>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <FileText className="h-4 w-4" />
            <span>Community Initiative</span>
          </div>
          <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground sm:text-xl">
            A community-driven initiative to establish foundational governance principles for the Solana ecosystem, led
            by industry leaders and shaped by community voices.
          </p>
        </div>
      </div>
    </section>
  )
}
