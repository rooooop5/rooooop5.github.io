import { ArrowUpRight, Lock } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import type { Project } from "@/data/projects"

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Card id={project.slug} className="scroll-mt-24 gap-5">
      <CardHeader>
        <div className="flex items-center gap-3 font-mono text-xs text-muted-foreground">
          <span className="text-brand">{String(index + 1).padStart(2, "0")}</span>
          <span>{project.kind}</span>
        </div>
        <CardTitle className="text-2xl tracking-tight">{project.name}</CardTitle>
        <CardDescription className="text-base text-pretty">{project.tagline}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        <pre className="overflow-x-auto rounded-lg border bg-muted/50 px-4 py-3 font-mono text-[0.8rem] leading-relaxed text-muted-foreground">
          {project.snippet.join("\n")}
        </pre>

        <p className="text-sm leading-relaxed text-pretty">{project.summary}</p>

        <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2.5">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              <span className="text-pretty">{h}</span>
            </li>
          ))}
        </ul>

        {project.note && (
          <p className="rounded-md border border-dashed px-3 py-2 text-xs text-muted-foreground">
            {project.note}
          </p>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="secondary" className="font-mono font-normal">
              {s}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          {project.links.length === 0 ? (
            <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Lock className="size-3.5" /> Private repo
            </span>
          ) : (
            project.links.map((link) => (
              <Button key={link.href} variant="outline" size="sm" asChild>
                <a href={link.href} target="_blank" rel="noreferrer">
                  {link.label === "Source" ? <GitHubIcon /> : null}
                  {link.label}
                  {link.label !== "Source" ? <ArrowUpRight /> : null}
                </a>
              </Button>
            ))
          )}
        </div>
      </CardFooter>
    </Card>
  )
}
