import { SectionHeader } from "@/components/SectionHeader";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { skillCategories } from "@/constants/skills";

export default function Skills() {
  return (
    <section id="skills" className="relative py-10 sm:py-12 md:py-14" data-testid="section-skills">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-0 h-40 w-40 rounded-full bg-primary/[0.05] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Skills" Icon={HiWrenchScrewdriver} className="mb-6 md:mb-7" />

        <div className="rounded-2xl border border-border/60 bg-card/90 p-4 shadow-md dark:bg-card/85 sm:p-5">
          <div className="grid grid-cols-1 gap-7 sm:gap-6 md:grid-cols-2 md:gap-x-8 md:gap-y-7">
            {skillCategories.map((category, index) => (
              <div key={category.title} data-testid={`skill-category-${index}`}>
                <div className="mb-2.5 flex items-center gap-2">
                  <span
                    className={`inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border ${category.borderColor} ${category.bgColor}`}
                    aria-hidden
                  >
                    <category.icon className={`h-3.5 w-3.5 ${category.color}`} />
                  </span>
                  <h3 className="text-xl py-2 font-semibold tracking-tight text-foreground sm:text-md">{category.title}</h3>
                </div>

                <ul className="flex flex-wrap gap-1.5" aria-label={`${category.title} skills`}>
                  {category.skills.map((skill) => {
                    const featured = skill.featured === true;
                    return ( 
                      <li key={skill.name}>
                        <span
                          className={`inline-flex max-w-full items-center gap-2 rounded-md border px-3 py-1 text-md leading-tight ${
                            featured
                              ? "bg-primary/10 text-foreground/90 dark:bg-primary/15"
                              : "bg-muted/40 text-foreground/90 dark:bg-muted/30"
                          }`}
                        >
                          {skill.icon ? (
                            <skill.icon
                              className={`h-3 w-3 shrink-0 ${featured ? category.color : "text-muted-foreground"}`}
                              aria-hidden
                            />
                          ) : null}
                          {skill.name}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
