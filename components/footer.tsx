import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="mx-auto mb-8 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          This is an independent community resource maintained by H2O Nodes. It is not affiliated with, endorsed by, or
          operated by Solana Labs, the Solana Foundation, or any official Solana entity. Official voting takes place at{" "}
          <a
            href="https://governance.solana.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 transition-colors hover:text-foreground"
          >
            governance.solana.com
          </a>
          .
        </p>
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
