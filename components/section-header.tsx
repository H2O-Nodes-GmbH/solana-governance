import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className }: SectionHeaderProps) {
  return (
    <div className={cn("mx-auto max-w-2xl text-center mb-10", className)}>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-3 text-pretty text-lg leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  )
}
