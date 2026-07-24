import { ExternalLink } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"

export function Documents() {
  const documents = [
    {
      title: "Constitution",
      emoji: "📜",
      description: "Operational document defining governance processes",
      versions: [
        {
          version: "V5.0",
          label: "Latest",
          url: "https://docs.google.com/document/d/1-VN_PW9DSNsLoK8tsxCPWJWC1HPUzpZ_YShQS2OMtLM/edit?usp=sharing",
        },
        {
          version: "V3.0",
          label: "Previous",
          url: "https://docs.google.com/document/d/1URT3IwwX_-ULcQd-xJtUH0Oes9rpECaRvJVLGS4op_8/edit?usp=drivesdk",
        },
        {
          version: "V2.2",
          label: "Previous",
          url: "https://docs.google.com/document/d/1S7hHZ4bXvwqK672H8dT9rJxAhSynapCI1lUiJt_cVeo/edit?pli=1&tab=t.0#heading=h.438duhlpaizi",
        },
      ],
    },
    {
      title: "Declaration",
      emoji: "✍️",
      description: "Aspirational document articulating values and objectives",
      versions: [
        {
          version: "v0.70",
          label: "Latest",
          url: "https://docs.google.com/document/d/1kfsNdKMrDwxkjB_uP0WD1jpLfrXSgmrhu_-G4zI7W-Q/edit?usp=drivesdk",
        },
        {
          version: "v0.60",
          label: "Previous",
          url: "https://docs.google.com/document/d/1J_1gxij_-fPxkNM74Iqv1TEAiRaCo5F9vumsFFD2fSM/edit?tab=t.0#heading=h.wwc4rt8dse7",
        },
      ],
    },
  ]

  return (
    <section className="py-12 md:py-16 px-6 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto max-w-4xl">
        <SectionHeader
          title="Core Documents"
          description="Review and contribute to the foundational documents"
        />
        <div className="grid md:grid-cols-2 gap-4">
          {documents.map((doc) => (
            <Card key={doc.title} className="p-6 hover:shadow-lg transition-all border-2 hover:border-primary/50">
              <div className="flex items-start gap-3 mb-4">
                <span className="text-3xl flex-shrink-0">{doc.emoji}</span>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{doc.title}</h3>
                  <p className="text-muted-foreground text-sm">{doc.description}</p>
                </div>
              </div>
              <div className="space-y-2 ml-12">
                {doc.versions.map((version) => (
                  <a
                    key={version.version}
                    href={version.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-2 p-2 rounded-md hover:bg-muted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">{version.version}</span>
                      {version.label === "Latest" && (
                        <Badge className="bg-gradient-to-r from-primary to-secondary text-white">Latest</Badge>
                      )}
                      {version.label === "Previous" && (
                        <Badge variant="outline" className="text-xs">
                          Previous
                        </Badge>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </a>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
