import { ExternalLink } from "lucide-react"

export function VideoPrimer() {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Video Primer
          </h2>
          <p className="text-muted-foreground text-lg">Watch Tushar and Nick's talk from Breakpoint 2025</p>
        </div>

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
