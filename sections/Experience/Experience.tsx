"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { HiBriefcase, HiMapPin, HiCalendar, HiArrowTrendingUp } from "react-icons/hi2";
import { experiences } from "@/constants/experience";

type ColorKey = "green" | "orange" | "purple";

/** One accent hex per row: dot, line, company, and light-mode pills all reference this */
const CIRCLE = {
  deloitte: {
    fillHex: "#14b8a8",
    dot: "bg-[#14b8a8]",
    /** Past roles: solid fill only — no outer glow (glow reads like a “ring”) */
    dotPlain: "bg-[#14b8a8]",
    ring: "ring-2 ring-[#14b8a8]/55 ring-offset-2 ring-offset-background",
    shadow: "shadow-[0_0_0_3px_hsl(var(--background)),0_0_0_5px_rgb(20_184_168_/_0.3)]",
    stackAccent: "deloitte" as const,
  },
  maximus: {
    fillHex: "#a56be4",
    dot: "bg-[#5E2D91]",
    dotPlain: "bg-[#5E2D91]",
    /** Strong ring so purple reads clearly on paper/off-white (was nearly invisible at /40) */
    ring: "ring-2 ring-[#5E2D91] ring-offset-2 ring-offset-background",
    shadow: "shadow-[0_0_0_3px_hsl(var(--background)),0_0_0_5px_#5E2D91/35]",
    stackAccent: "maximus" as const,
  },
  amber: {
    fillHex: "#f59e0b",
    dot: "bg-[#f59e0b]",
    dotPlain: "bg-[#f59e0b]",
    ring: "ring-2 ring-[#f59e0b]/70 ring-offset-2 ring-offset-background",
    shadow: "shadow-[0_0_0_3px_hsl(var(--background)),0_0_0_5px_rgb(245_158_11_/_0.3)]",
    stackAccent: "amber" as const,
  },
} as const;

function hexToRgb(hex: string) {
  const h = hex.replace("#", "");
  return {
    r: parseInt(h.slice(0, 2), 16),
    g: parseInt(h.slice(2, 4), 16),
    b: parseInt(h.slice(4, 6), 16),
  };
}

function timelineLineGradient(fillHex: string) {
  const { r, g, b } = hexToRgb(fillHex);
  return `linear-gradient(180deg, ${fillHex} 0%, ${fillHex} 22%, rgba(${r},${g},${b},0.45) 52%, rgba(${r},${g},${b},0.12) 82%, rgba(${r},${g},${b},0.03) 94%, transparent 100%)`;
}

type StackAccent = "deloitte" | "maximus" | "amber";

type TimelineTheme = {
  dot: string;
  dotPlain: string;
  ring: string;
  lineFade: string;
  stackAccent: StackAccent;
  /** Same hex as inner dot + line gradient — company label uses this only (no CSS tint) */
  fillHex: string;
};

function getTimelineTheme(color: ColorKey): TimelineTheme {
  if (color === "green") {
    const c = CIRCLE.deloitte;
    return {
      dot: `${c.dot} ${c.shadow}`,
      dotPlain: c.dotPlain,
      ring: c.ring,
      lineFade: timelineLineGradient(c.fillHex),
      stackAccent: c.stackAccent,
      fillHex: c.fillHex,
    };
  }
  if (color === "purple") {
    const c = CIRCLE.maximus;
    return {
      dot: `${c.dot} ${c.shadow}`,
      dotPlain: c.dotPlain,
      ring: c.ring,
      lineFade: timelineLineGradient(c.fillHex),
      stackAccent: c.stackAccent,
      fillHex: c.fillHex,
    };
  }
  const c = CIRCLE.amber;
  return {
    dot: `${c.dot} ${c.shadow}`,
    dotPlain: c.dotPlain,
    ring: c.ring,
    lineFade: timelineLineGradient(c.fillHex),
    stackAccent: c.stackAccent,
    fillHex: c.fillHex,
  };
}

const cardClassName =
  "hover-elevate overflow-hidden rounded-2xl border border-border/70 bg-card/95 shadow-md backdrop-blur-sm transition hover:border-primary/25 hover:shadow-lg";

export default function Experience() {
  return (
    <section id="experience" className="relative py-16 sm:py-20 md:py-24" data-testid="section-experience">
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-90">
        <div className="absolute right-[10%] top-24 h-72 w-72 rounded-full bg-primary/[0.06] blur-3xl" />
        <div className="absolute bottom-32 left-[5%] h-56 w-56 rounded-full bg-teal-500/[0.05] blur-3xl dark:bg-teal-400/[0.07]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Experience" Icon={HiBriefcase} />

        <div className="relative mx-auto max-w-4xl lg:max-w-5xl">
          <ol className="m-0 list-none space-y-0 p-0">
            {experiences.map((exp, index) => {
              const theme = getTimelineTheme(exp.color);
              const isLast = index === experiences.length - 1;
              const isCurrentRole = index === 0;

              return (
                <li
                  key={index}
                  className={`flex items-stretch gap-3 sm:gap-4 ${isLast ? "pb-2" : "pb-12 sm:pb-14"}`}
                  data-testid={`experience-item-${index}`}
                >
                  <div
                    className="flex min-h-0 w-9 shrink-0 flex-col items-center self-stretch sm:w-10"
                    aria-hidden
                  >
                    <div className="flex shrink-0 flex-col items-center pt-5 sm:pt-6 md:pt-7">
                      <div className="relative z-[2] flex justify-center">
                        {isCurrentRole ? (
                          <span
                            className={`relative flex h-[1.125rem] w-[1.125rem] items-center justify-center rounded-full md:h-5 md:w-5 ${theme.ring}`}
                          >
                            <span className={`h-2.5 w-2.5 rounded-full md:h-3 md:w-3 ${theme.dot}`} />
                          </span>
                        ) : (
                          <span
                            className={`block h-3.5 w-3.5 rounded-full md:h-4 md:w-4 ${theme.dotPlain}`}
                            aria-hidden
                          />
                        )}
                      </div>
                    </div>
                    <div
                      className="mt-0 min-h-0 w-[3px] flex-1 rounded-full"
                      style={{ background: theme.lineFade }}
                    />
                  </div>

                  <div className="relative z-[1] min-w-0 flex-1">
                    <article className={cardClassName}>
                      <div className="p-5 sm:p-6 md:p-7">
                        <div className="mb-5 flex flex-col gap-4 border-b border-border/50 pb-5 sm:flex-row sm:items-start sm:justify-between">
                          <div className="min-w-0 space-y-2">
                            {exp.previousRole ? (
                              <div>
                                <span className="text-sm text-muted-foreground line-through">{exp.previousRole}</span>
                                <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{exp.role}</h3>
                              </div>
                            ) : (
                              <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{exp.role}</h3>
                            )}
                            <p
                              className="min-w-0 text-base font-semibold leading-snug tracking-tight"
                              data-accent={theme.stackAccent}
                              style={{
                                color: theme.fillHex,
                                WebkitTextFillColor: theme.fillHex,
                              }}
                            >
                              {exp.company}
                            </p>
                          </div>

                          <dl className="flex shrink-0 flex-col gap-2 text-sm text-muted-foreground sm:items-end sm:text-right">
                            <div className="flex items-center gap-2 sm:justify-end">
                              <dt className="sr-only">Duration</dt>
                              <dd className="flex items-center gap-2">
                                <HiCalendar className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                                <span>{exp.duration}</span>
                              </dd>
                            </div>
                            <div className="flex items-center gap-2 sm:justify-end">
                              <dt className="sr-only">Location</dt>
                              <dd className="flex items-center gap-1.5">
                                <HiMapPin className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
                                <span>{exp.location}</span>
                              </dd>
                            </div>
                          </dl>
                        </div>

                        <div className="mb-5 flex items-start gap-3 rounded-xl border border-primary/15 bg-primary/5 px-3.5 py-2.5 text-sm dark:border-primary/20 dark:bg-primary/10">
                          <HiArrowTrendingUp className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                          <span className="font-medium leading-snug text-foreground">{exp.impact}</span>
                        </div>

                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex gap-3 text-sm leading-relaxed text-foreground/90 [text-wrap:pretty] sm:text-[0.9375rem]"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/80 dark:bg-primary/70"
                                aria-hidden
                              />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>

                        <div
                          className="exp-tech-stack mt-5 border-t border-border/40 pt-4 sm:mt-6 sm:pt-5"
                          data-accent={theme.stackAccent}
                        >
                          {exp.technologies.map((tech) => (
                            <span key={tech} className="exp-tech-pill">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
