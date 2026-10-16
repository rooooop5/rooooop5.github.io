import { ArrowDown, ArrowUpRight } from "lucide-react"
import { useState } from "react"

import { GitHubIcon } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"
import { ProjectDetails } from "@/components/project-details"
import { ZimiEyes } from "@/components/zimi-eyes"
import { Badge } from "@/components/ui/badge"
import { BlurFade } from "@/components/ui/blur-fade"
import { Button } from "@/components/ui/button"
import { DotPattern } from "@/components/ui/dot-pattern"
import { MagicCard } from "@/components/ui/magic-card"
import { WordRotate } from "@/components/ui/word-rotate"
import { experiments, featured, zimi, type Project } from "@/data/projects"
import { profile } from "@/data/profile"
import { cn } from "@/lib/utils"

const nav = [
  { href: "#work", label: "Work" },
  { href: "#zimi", label: "Zimi" },
  { href: "#experiments", label: "Experiments" },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <BlurFade inView className="mb-8 flex flex-col gap-2">
      <span className="font-mono text-xs tracking-wider text-brand uppercase">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance">{title}</h2>
    </BlurFade>
  )
}

export default function App() {
  // Keep the last project after closing so its content stays put while the dialog animates out.
  const [selected, setSelected] = useState<Project | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-20 border-b bg-background/70 backdrop-blur-md">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <a href="#top" className="font-mono text-sm">
            <span className="text-brand">~/</span>
            {profile.handle}
          </a>
          <nav className="flex items-center gap-1">
            {nav.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" className="hidden sm:inline-flex" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
            <Button variant="ghost" size="icon" aria-label="GitHub profile" asChild>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon />
              </a>
            </Button>
          </nav>
        </div>
      </header>

      <div id="top" className="relative overflow-hidden">
        <DotPattern
          className={cn(
            "text-white/15",
            "[mask-image:radial-gradient(ellipse_at_top,white_20%,transparent_70%)]",
          )}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[40rem] -translate-x-1/2 rounded-full bg-brand/15 blur-3xl"
        />
        <section className="relative mx-auto flex max-w-5xl flex-col gap-6 px-4 py-24 sm:px-6 sm:py-32">
          <BlurFade delay={0.05}>
            <span className="font-mono text-sm text-muted-foreground">Hi, I'm</span>
          </BlurFade>
          <BlurFade delay={0.1}>
            <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>
          </BlurFade>
          <BlurFade delay={0.15} className="flex flex-wrap items-baseline gap-x-3 text-2xl sm:text-3xl">
            <span className="text-muted-foreground">I build</span>
            <WordRotate
              words={[...profile.building]}
              className="font-semibold text-brand"
            />
          </BlurFade>
          <BlurFade delay={0.2}>
            <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
              {profile.intro}
            </p>
          </BlurFade>
          <BlurFade delay={0.25} className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#work">
                See my projects <ArrowDown />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </Button>
          </BlurFade>
        </section>
      </div>

      <main className="mx-auto max-w-5xl px-4 sm:px-6">
        <section id="work" className="scroll-mt-20 pt-8 pb-20">
          <SectionHeading eyebrow="Projects" title="Things I've built" />
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((project, i) => (
              <BlurFade key={project.slug} inView delay={0.05 * (i % 2)} className="h-full">
                <ProjectCard project={project} index={i} onOpen={() => {
                    setSelected(project)
                    setOpen(true)
                  }} />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="zimi" className="scroll-mt-20 pb-20">
          <SectionHeading eyebrow="Off the screen" title="Meet Zimi" />
          <BlurFade inView>
            <MagicCard className="overflow-hidden rounded-xl" gradientColor="#1c2330">
              <div className="grid md:grid-cols-[1.1fr_1fr]">
                <div className="flex items-center justify-center bg-oled p-6 sm:p-10">
                  <div className="aspect-[2/1] w-full max-w-md rounded-md ring-1 ring-white/10">
                    {zimi.gif ? (
                      <img
                        src={zimi.gif}
                        alt="Zimi's eyes animating on its screen"
                        className="h-full w-full rounded-md object-cover"
                      />
                    ) : (
                      <ZimiEyes />
                    )}
                  </div>
                </div>
                <div className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                  <span className="font-mono text-xs text-muted-foreground">{zimi.kind}</span>
                  <h3 className="text-2xl font-semibold tracking-tight">{zimi.name}</h3>
                  <p className="text-pretty text-muted-foreground">{zimi.tagline}</p>
                  <p className="text-sm leading-relaxed text-pretty">{zimi.summary}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {zimi.stack.map((s) => (
                      <Badge key={s} variant="secondary" className="font-normal">
                        {s}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </MagicCard>
          </BlurFade>
        </section>

        <section id="experiments" className="scroll-mt-20 pb-24">
          <SectionHeading eyebrow="On the side" title={experiments.title} />
          <div className="grid gap-4 sm:grid-cols-2">
            {experiments.items.map((item, i) => (
              <BlurFade key={item.name} inView delay={0.05 * i} className="h-full">
                <MagicCard className="h-full rounded-xl" gradientColor="#1c2330">
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex h-full items-start justify-between gap-4 rounded-xl p-5 outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-pretty text-muted-foreground">{item.text}</span>
                    </div>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </MagicCard>
              </BlurFade>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 px-4 py-10 sm:flex-row sm:items-center sm:px-6">
          <div className="flex flex-col gap-1">
            <span className="font-medium">Want to talk about any of these?</span>
            <span className="text-sm text-muted-foreground">Everything public lives on GitHub.</span>
          </div>
          <Button variant="outline" asChild>
            <a href={profile.github} target="_blank" rel="noreferrer">
              <GitHubIcon /> github.com/{profile.handle}
            </a>
          </Button>
        </div>
      </footer>

      <ProjectDetails project={selected} open={open} onOpenChange={setOpen} />
    </div>
  )
}
