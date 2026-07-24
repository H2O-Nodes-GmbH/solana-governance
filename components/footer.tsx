import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Image src="/solana-logo.png" alt="Solana" width={150} height={30} className="h-8 w-auto" />
          </div>
          <p className="text-center text-sm text-muted-foreground sm:text-left">
            A community-driven governance initiative for the Solana ecosystem
          </p>
        </div>
        <div className="mt-8 flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Vibe coded by</span>
          <a
            href="https://x.com/H2oNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Image src="/h2o-nodes-logo.png" alt="H2O Nodes" width={120} height={30} className="h-6 w-auto" />
          </a>
        </div>
        <div className="mt-4 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Solana Constitution Initiative. Built with the community, for the community.
        </div>
      </div>
    </footer>
  )
}
