import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { MagicCard } from "@/components/ui/magic-card"
import type { Project } from "@/data/projects"

type Props = { project: Project; index: number; onOpen: () => void }

export function ProjectCard({ project, index, onOpen }: Props) {
  return (
    <MagicCard
      className="h-full rounded-xl"
      gradientFrom="var(--brand)"
      gradientTo="var(--oled-fg)"
      gradientColor="#1c2330"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-haspopup="dialog"
        className="group flex h-full w-full flex-col gap-4 rounded-xl p-6 text-left outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <div className="flex items-center justify-between font-mono text-xs text-muted-foreground">
          <span>
            <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>
            <span className="ml-3">{project.kind}</span>
          </span>
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
        </div>
        <h3 className="text-2xl font-semibold tracking-tight">{project.name}</h3>
        <p className="text-pretty text-muted-foreground">{project.tagline}</p>
        <div className="mt-auto flex items-center justify-between gap-3 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((t) => (
              <Badge key={t} variant="secondary" className="font-normal">
                {t}
              </Badge>
            ))}
          </div>
          <span className="text-xs text-muted-foreground transition-colors group-hover:text-foreground">
            View details
          </span>
        </div>
      </button>
    </MagicCard>
  )
}
