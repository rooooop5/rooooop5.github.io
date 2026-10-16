import { ArrowDown, ArrowUpRight } from "lucide-react"

import { GitHubIcon } from "@/components/icons"
import { ProjectCard } from "@/components/project-card"
import { ThemeToggle } from "@/components/theme-toggle"
import { ZimiEyes } from "@/components/zimi-eyes"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { experiments, featured, zimi } from "@/data/projects"
import { profile } from "@/data/profile"

const nav = [
  { href: "#work", label: "Work" },
  { href: "#zimi", label: "Zimi" },
  { href: "#experiments", label: "Experiments" },
]

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-8 flex flex-col gap-2">
      <span className="font-mono text-xs tracking-wider text-brand uppercase">{eyebrow}</span>
      <h2 className="text-3xl font-semibold tracking-tight text-balance">{title}</h2>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-svh">
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
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
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        <section className="flex flex-col gap-6 py-20 sm:py-28">
          <span className="font-mono text-sm text-muted-foreground">{profile.role}</span>
          <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-pretty text-muted-foreground">
            {profile.intro}
          </p>
          <div className="flex flex-wrap gap-2">
            {["C", "Python", "FastAPI", "Node.js", "C++ / ESP32", "LLM tooling"].map((t) => (
              <Badge key={t} variant="outline" className="font-mono font-normal">
                {t}
              </Badge>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#work">
                See the work <ArrowDown />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.github} target="_blank" rel="noreferrer">
                <GitHubIcon /> GitHub
              </a>
            </Button>
          </div>
        </section>

        <section id="work" className="scroll-mt-20 pb-20">
          <SectionHeading eyebrow="Selected work" title="Six projects I'd show first" />
          <div className="grid gap-6 lg:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        <section id="zimi" className="scroll-mt-20 pb-20">
          <SectionHeading eyebrow="Off the screen" title="Zimi, a robot with moods" />
          <Card className="overflow-hidden py-0">
            <div className="grid md:grid-cols-[1.1fr_1fr]">
              <div className="flex items-center justify-center bg-oled p-6 sm:p-10">
                <div className="aspect-[2/1] w-full max-w-md rounded-md ring-1 ring-white/10">
                  {zimi.gif ? (
                    <img
                      src={zimi.gif}
                      alt="Zimi's eyes animating on the OLED"
                      className="h-full w-full rounded-md object-cover"
                    />
                  ) : (
                    <ZimiEyes />
                  )}
                </div>
              </div>
              <CardContent className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                <span className="font-mono text-xs text-muted-foreground">{zimi.kind}</span>
                <h3 className="text-2xl font-semibold tracking-tight">{zimi.name}</h3>
                <p className="text-pretty text-muted-foreground">{zimi.tagline}</p>
                <p className="text-sm leading-relaxed text-pretty">{zimi.summary}</p>
                <div className="flex flex-wrap gap-1.5">
                  {zimi.stack.map((s) => (
                    <Badge key={s} variant="secondary" className="font-mono font-normal">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </div>
          </Card>
        </section>

        <section id="experiments" className="scroll-mt-20 pb-24">
          <SectionHeading eyebrow="Smaller things" title={experiments.title} />
          <Card className="py-2">
            <CardContent className="flex flex-col px-2">
              {experiments.items.map((item, i) => (
                <div key={item.name}>
                  {i > 0 && <Separator />}
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-start justify-between gap-4 rounded-md px-4 py-4 transition-colors hover:bg-muted/50"
                  >
                    <div className="flex flex-col gap-1">
                      <span className="font-mono text-sm font-medium">{item.name}</span>
                      <span className="text-sm text-pretty text-muted-foreground">{item.text}</span>
                    </div>
                    <ArrowUpRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              ))}
            </CardContent>
          </Card>
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
    </div>
  )
}
