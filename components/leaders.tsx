import { Card, CardContent } from "@/components/ui/card"
import { Building2 } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const leaders = [
  {
    name: "Nick Almond",
    role: "Head of Governance",
    organization: "Jito Foundation",
    twitter: "https://x.com/DrNickA",
    handle: "@DrNickA",
    image: "/nick-almond.jpg",
  },
  {
    name: "Tushar Jain",
    role: "Cofounder and Managing Partner",
    organization: "Multicoin Capital",
    twitter: "https://x.com/TusharJain_",
    handle: "@TusharJain_",
    image: "/tushar-jain.jpg",
  },
]

export function Leaders() {
  return (
    <section id="leaders" className="bg-muted/30 py-8 sm:py-12">
      <div className="container mx-auto px-6 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Initiative Hosts
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Meet the community members guiding the Solana Constitution initiative
          </p>
        </div>

        <div className="mx-auto max-w-4xl space-y-3">
          {leaders.map((leader) => (
            <Card key={leader.name} className="overflow-hidden transition-shadow hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <img
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    className="h-24 w-24 flex-shrink-0 rounded-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground">{leader.name}</h3>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <Building2 className="h-4 w-4" />
                      <span>
                        {leader.role}, {leader.organization}
                      </span>
                    </div>
                    <a
                      href={leader.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                    >
                      <Image src="/x-logo.png" alt="X" width={16} height={16} className="h-4 w-4 object-contain" />
                      {leader.handle}
                    </a>
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
            <a href="https://discord.gg/solana" target="_blank" rel="noopener noreferrer">
              Get Involved
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
