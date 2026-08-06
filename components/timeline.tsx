import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const events = [
  {
    id: 5,
    title: "Solana Foundation Validator Community Call",
    date: "2nd Thursday of every month, 2:00 PM Eastern",
    description:
      "Monthly Solana Foundation validator community call. Join live, add the calendar, or catch up on previous recordings.",
    links: [
      {
        label: "Add to calendar",
        href: "https://calendar.google.com/calendar/u/0?cid=Y18yMTlmYzJlYzRkYWRhOTM0NWUzMmVlZTdmYjA1Nzk3NjAzNWZmNjlmZGMzYTc2MjkzNjBlZThlNWY0NTBlMDQ2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20",
      },
      {
        label: "Join video call",
        href: "https://meet.google.com/ehg-ycog-aeb",
      },
      {
        label: "Previous recordings",
        href: "https://www.youtube.com/playlist?list=PLilwLeBwGuK78yjGBZwYhTf7rao0t13Zw",
      },
    ],
  },
  {
    id: 4,
    title: "Community-led Validator Community Call",
    date: "4th Thursday of every month, 2:00 PM Eastern",
    description: "Monthly validator community call, featuring an update on the latest from governance discussions",
    links: [
      {
        label: "Sign up",
        href: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
      },
      {
        label: "Join video call",
        href: "https://meet.google.com/oxt-avji-yvz",
      },
      {
        label: "Agenda",
        href: "https://hackmd.io/1DFauFMWTZG37-U7CXhxMg?view#Solana-Community-Led-Validator-Call-Agendas",
      },
    ],
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Discussion Events"
          description="Track the journey of community consultation and governance discussions"
          className="mb-16"
        />

        <div className="mx-auto max-w-2xl space-y-6">
          {events.map((event) => (
            <Card key={event.id}>
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Calendar className="h-6 w-6 text-muted-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="mt-1">{event.date}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-pretty leading-relaxed text-muted-foreground">{event.description}</p>
                {event.links.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2">
                    {event.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
