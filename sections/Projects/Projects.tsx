import { HiArrowTopRightOnSquare, HiCheck, HiCodeBracketSquare, HiGlobeAsiaAustralia } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { SectionHeader } from "@/components/SectionHeader";
import { projects } from "@/constants/projects";

export default function Projects() {
  return (
    <section id="projects" className="relative py-16 sm:py-20 md:py-24" data-testid="section-projects">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[12%] top-32 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Projects" Icon={HiCodeBracketSquare} />

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group hover-elevate relative overflow-hidden rounded-2xl border border-border/70 bg-card shadow-md transition hover:border-primary/25 hover:shadow-xl"
              data-testid={`project-card-${index}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-teal-500/90 to-cyan-500/80 opacity-90" />
              <div className="p-5 sm:p-6 md:p-7">
                <div className="mb-4">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight sm:text-xl">{project.title}</h3>
                      <p className="mt-1 text-sm font-medium text-primary/90">{project.description}</p>
                    </div>
                    <div className="flex shrink-0 items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition hover:border-primary/35 hover:bg-muted"
                          data-testid={`button-github-${index}`}
                        >
                          <SiGithub className="h-4 w-4" />
                        </a>
                      )}

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live demo"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition hover:border-primary/35 hover:bg-muted"
                          data-testid={`button-live-${index}`}
                        >
                          <HiArrowTopRightOnSquare className="h-4 w-4" />
                        </a>
                      )}
                      {project.logsUrl && (
                        <a
                          href={project.logsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Project Logs"
                          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/70 bg-muted/40 text-foreground transition hover:border-primary/35 hover:bg-muted"
                          data-testid={`button-logs-${index}`}
                        >
                          <HiGlobeAsiaAustralia className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground [text-wrap:pretty]">{project.longDescription}</p>
                </div>

                <ul className="mb-5 space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                      <HiCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/60 bg-muted/50 px-3 py-1 text-xs font-medium text-foreground/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
