import { ArrowUpRight, Lock } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import type { Project } from "@/data/projects"
import { useMediaQuery } from "@/hooks/use-media-query"

type Props = { project: Project | null; open: boolean; onOpenChange: (open: boolean) => void }

// A centered dialog on wide screens, a bottom sheet on phones.
export function ProjectDetails({ project, open, onOpenChange }: Props) {
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-h-[85svh] overflow-y-auto sm:max-w-xl">
          {project && (
            <>
              <DialogHeader>
                <span className="font-mono text-xs text-brand">{project.kind}</span>
                <DialogTitle className="text-2xl">{project.name}</DialogTitle>
                <DialogDescription className="text-base">{project.tagline}</DialogDescription>
              </DialogHeader>
              <Body project={project} />
            </>
          )}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[90svh]">
        {project && (
          <>
            <DrawerHeader className="group-data-[vaul-drawer-direction=bottom]/drawer-content:text-left">
              <span className="font-mono text-xs text-brand">{project.kind}</span>
              <DrawerTitle className="text-2xl">{project.name}</DrawerTitle>
              <DrawerDescription className="text-base">{project.tagline}</DrawerDescription>
            </DrawerHeader>
            <div className="overflow-y-auto px-4 pb-8">
              <Body project={project} />
            </div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  )
}

function Body({ project }: { project: Project }) {
  return (
    <div className="flex flex-col gap-6">
      <p className="leading-relaxed text-pretty">{project.about}</p>

      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium">What it does</h4>
        <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground">
          {project.features.map((f) => (
            <li key={f} className="flex gap-2.5">
              <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
              <span className="text-pretty">{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <pre className="overflow-x-auto rounded-lg border bg-oled px-4 py-3 font-mono text-[0.8rem] leading-relaxed text-oled-fg/90">
        {project.snippet.join("\n")}
      </pre>

      {project.note && (
        <p className="rounded-md border border-dashed px-3 py-2 text-xs text-muted-foreground">
          {project.note}
        </p>
      )}

      <div className="flex flex-col gap-3">
        <h4 className="text-sm font-medium">Built with</h4>
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((s) => (
            <Badge key={s} variant="outline" className="font-mono font-normal">
              {s}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.links.length === 0 ? (
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <Lock className="size-4" /> The code for this one is private.
          </span>
        ) : (
          project.links.map((link) => (
            <Button key={link.href} variant={link.label === "Source" ? "default" : "outline"} asChild>
              <a href={link.href} target="_blank" rel="noreferrer">
                {link.label === "Source" ? <GitHubIcon /> : null}
                {link.label === "Source" ? "View the code" : link.label}
                <ArrowUpRight />
              </a>
            </Button>
          ))
        )}
      </div>
    </div>
  )
}
