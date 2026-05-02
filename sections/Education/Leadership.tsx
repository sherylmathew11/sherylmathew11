import { SectionHeader } from "@/components/SectionHeader";
import { HiUserGroup } from "react-icons/hi2";
import { leadership } from "@/constants/leadership";

export default function Leadership() {
  return (
    <section id="leadership" className="relative bg-muted/30 py-12 md:py-14" data-testid="section-leadership">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Ownership & Mentorship" Icon={HiUserGroup} />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {leadership.map((item, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 rounded-2xl border border-border/60 bg-card/90 p-5 shadow-sm transition hover:border-primary/25 hover:shadow-md"
              data-testid={`leadership-item-${index}`}
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary/70 ring-4 ring-primary/10" />
              <div className="text-sm leading-relaxed text-foreground/90 [text-wrap:pretty]">
                <p className="font-medium text-foreground">
                  {item.title}
                  {item.link && item.linkText && (
                    <>
                      {" "}
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-primary underline-offset-2 hover:underline"
                      >
                        {item.linkText}
                      </a>
                      {item.suffix}
                    </>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
