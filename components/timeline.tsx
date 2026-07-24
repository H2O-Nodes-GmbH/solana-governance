import { Calendar, Users, CheckCircle2, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    id: 4,
    title: "Monthly Validator Community Calls",
    date: "4th Thursday of every month, 18:00 UTC",
    status: "upcoming",
    isNext: true,
    description: "Monthly validator community call, featuring an update on the latest from governance discussions",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSenJo3P35l2BMTfpth4lOQvIZdipFiSlaiuZ5Lghkb_naDujQ/viewform",
    icon: Calendar,
  },
  {
    id: 3,
    title: "Final Constitution Discussion",
    date: "Thursday, December 4, 8:00 PM - 9:00 PM GMT+1",
    status: "completed",
    description:
      "Final discussion of the Solana Constitution and future governance, covering the SGP process, governance mechanisms, implementation timelines, and voting procedures. Last opportunity to edit before SGP-1 preparation.",
    link: "https://luma.com/oyu4hgjb",
    icon: Users,
  },
  {
    id: 2,
    title: "2nd Consultation Event",
    date: "Thursday, October 30, 8:30 PM - 9:30 PM GMT+1",
    status: "completed",
    description:
      "Second consultation event focused on validators, continuing the discussion on governance structure and constitutional principles.",
    link: "https://luma.com/0kgnfoj3?tk=9h99t4",
    icon: Users,
  },
  {
    id: 1,
    title: "First Consultation Event",
    date: "October 2, 2024",
    status: "completed",
    description:
      "Solana Constitution and Declaration Consultation Event - Initial community gathering to discuss foundational principles and governance structure.",
    link: "https://luma.com/4tyce81a?tk=RE6WWw",
    icon: Users,
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
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border sm:left-1/2" />

            <div className="space-y-12">
              {events.map((event, index) => {
                const Icon = event.icon
                const isCompleted = event.status === "completed"
                const isNextEvent = event.isNext

                return (
                  <div
                    key={event.id}
                    className={`relative flex items-start gap-8 ${
                      index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-8 flex h-16 w-16 items-center justify-center sm:left-1/2 sm:-translate-x-1/2">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full border-4 border-background ${
                          isCompleted
                            ? "bg-primary"
                            : isNextEvent
                              ? "bg-gradient-to-r from-primary to-secondary"
                              : "bg-muted"
                        }`}
                      >
                        <Icon
                          className={`h-6 w-6 ${isCompleted || isNextEvent ? "text-primary-foreground" : "text-muted-foreground"}`}
                        />
                      </div>
                    </div>

                    {/* Content card */}
                    <div className="ml-24 flex-1 sm:ml-0 sm:w-[calc(50%-3rem)]">
                      <Card
                        className={`${index % 2 === 0 ? "sm:mr-8" : "sm:ml-8"} ${
                          isNextEvent ? "border-2 border-primary shadow-lg shadow-primary/20" : ""
                        }`}
                      >
                        <CardHeader>
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <CardTitle className="text-xl">{event.title}</CardTitle>
                              <CardDescription className="mt-1 flex items-center gap-2">
                                <Calendar className="h-4 w-4" />
                                {event.date}
                              </CardDescription>
                            </div>
                            {isNextEvent ? (
                              <Badge className="shrink-0 bg-gradient-to-r from-primary to-secondary">
                                <Clock className="mr-1 h-3 w-3" />
                                Next Event
                              </Badge>
                            ) : (
                              <Badge variant={isCompleted ? "default" : "secondary"} className="shrink-0">
                                {isCompleted ? (
                                  <>
                                    <CheckCircle2 className="mr-1 h-3 w-3" />
                                    Completed
                                  </>
                                ) : (
                                  <>
                                    <Clock className="mr-1 h-3 w-3" />
                                    Upcoming
                                  </>
                                )}
                              </Badge>
                            )}
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
                              {event.id === 4 ? "Sign up →" : "View Event Details →"}
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
