import { SectionHeader } from "@/components/SectionHeader";
import { HiCheckBadge, HiArrowUpRight} from "react-icons/hi2";
import { recognitions } from "@/constants/recognitions";

export default function Recognition() {
  return (
    <section id="recognition" className="relative py-12 pb-16 md:py-14 md:pb-20" data-testid="section-recognition">
      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Recognition" Icon={HiCheckBadge} />

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-5">
          {recognitions.map((award, index) => (
            <div
              key={index}
              className={`group flex items-start gap-4 rounded-2xl border p-5 shadow-sm transition hover:shadow-md ${
                award.highlight
                  ? "border-primary/35 bg-gradient-to-br from-primary/12 via-card to-card"
                  : "border-border/60 bg-card/90 hover:border-primary/20"
              }`}
              data-testid={`award-item-${index}`}
            >
              <span
                className={`mt-2 h-2 w-2 shrink-0 rounded-full ${
                  award.highlight ? "bg-primary ring-4 ring-primary/15" : "bg-muted-foreground/35"
                }`}
              />
              <div className="text-sm leading-relaxed text-foreground/90">
                <p className="font-medium tracking-tight text-foreground [text-wrap:pretty]">
                  {award.spotAwardLink ? (
                    <>
                      Recognized with a{" "}
                      <a 
                        href={award.spotAwardLink} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-primary underline decoration-dotted underline-offset-4 hover:text-primary/80 transition-colors font-semibold inline-flex items-center gap-0.5"
                      >
                        Spot Award
                        <HiArrowUpRight className="h-3 w-3 inline" />
                      </a>{" "}
                      at Deloitte for high-quality analysis, attention to detail, and adaptability
                    </>
                  ) : (
                    award.title
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
