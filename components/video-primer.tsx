import { ExternalLink } from "lucide-react"
import { SectionHeader } from "@/components/section-header"

export function VideoPrimer() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Video Primer"
          description="Watch Tushar and Nick's talk from Breakpoint 2025"
        />

        <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-border bg-card">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/sZ7B8bm9-vY"
            title="Solana Constitution - Breakpoint 2025"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>

        <div className="mt-6 text-center">
          <a
            href="https://www.youtube.com/watch?v=sZ7B8bm9-vY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
          >
            Watch on YouTube
            <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
