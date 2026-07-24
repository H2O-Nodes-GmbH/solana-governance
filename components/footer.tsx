import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Vibe coded by</span>
          <a
            href="https://x.com/H2oNodes"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-80"
          >
            <Image src="/h2o-nodes-logo.png" alt="H2O Nodes" width={160} height={40} className="h-8 w-auto" />
          </a>
        </div>
      </div>
    </footer>
  )
}
