import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"

const events = [
  {
    id: 4,
    title: "Monthly Validator Community Calls",
    date: "4th Thursday of every month, 18:00 UTC",
    description: "Monthly validator community call, featuring an update on the latest from governance discussions",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
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
                {event.link && (
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                  >
                    Sign up →
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
