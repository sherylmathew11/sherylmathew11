import { SectionHeader } from "@/components/SectionHeader";
import { HiAcademicCap } from "react-icons/hi2";

const education: {
  institution: string;
  degree: string;
  cgpa: string;
  cgpaLabel: string;
  period: string;
  highlight?: string;
  coursework?: string;
}[] = [
  {
    institution: "Vellore Institute of Technology, India",
    degree: "Bachelor of Technology - Electronics and Computer Engineering",
    cgpa: "8.72",
    cgpaLabel: "CGPA",
    period: "2019 – 2023",
    coursework:
      "Data Structures and Algorithms, Artificial Intelligence & Machine Learning, Relational Databases",
  },
];

export default function Education() {
  return (
    <section id="education" className="relative py-16 sm:py-20 md:py-24" data-testid="section-education">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[15%] top-20 h-56 w-56 rounded-full bg-rose-500/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Education" Icon={HiAcademicCap} />

        <div className="mx-auto max-w-3xl">
          {education.map((edu, index) => (
            <div
              key={edu.institution}
              className="hover-elevate overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-lg sm:p-8"
              data-testid={`education-item-${index}`}
            >
              <div className="mb-2 flex flex-wrap items-start justify-between gap-3">
                <h3 className="text-lg font-semibold leading-snug tracking-tight sm:text-xl">{edu.institution}</h3>
                {edu.highlight && (
                  <span className="shrink-0 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    {edu.highlight}
                  </span>
                )}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground sm:text-base">{edu.degree}</p>

              <div className="mb-6 flex items-baseline gap-2 border-b border-border/60 pb-6">
                <span className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                  {edu.cgpa}
                  <span className="ml-1 align-baseline text-base font-semibold text-muted-foreground sm:text-lg md:text-xl">
                     / 10
                  </span>
                </span>
                <span className="text-sm font-medium text-muted-foreground">{edu.cgpaLabel}</span>
              </div>

              {edu.coursework && (
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  <span className="font-semibold text-foreground/90">Coursework: </span>
                  {edu.coursework}
                </p>
              )}

              {edu.period && (
                <span className="inline-flex rounded-full bg-muted/70 px-3 py-1 text-xs font-medium text-muted-foreground">
                  {edu.period}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
