import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  {
    id: 4,
    title: "Monthly Validator Community Calls",
    date: "4th Thursday of every month, 18:00 UTC",
    description: "Monthly validator community call, featuring an update on the latest from governance discussions",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
    icon: Calendar,
  },
]

export function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Discussion Events
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Track the journey of community consultation and governance discussions
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border sm:left-1/2" />

            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    <div className="absolute left-8 flex h-16 w-16 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-background bg-muted">
                        <Icon className="h-6 w-6 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="ml-24 flex-1 sm:ml-0 sm:w-[calc(50%-3rem)]">
                      <Card className={index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"}>
                        <CardHeader>
                          <CardTitle className="text-xl">{event.title}</CardTitle>
                          <CardDescription className="mt-1 flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {event.date}
                          </CardDescription>
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
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
