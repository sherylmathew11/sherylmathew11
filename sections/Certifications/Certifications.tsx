import { SectionHeader } from "@/components/SectionHeader";
import { HiAcademicCap, HiArrowTopRightOnSquare } from "react-icons/hi2";
import { SiDatabricks, SiUdemy, SiAlteryx, SiLeetcode } from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { certifications } from "@/constants/certifications";

const iconMap = {
  aws: FaAws,
  databricks: SiDatabricks,
  udemy: SiUdemy,
  alteryx: SiAlteryx,
  leetcode: SiLeetcode,
};

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-muted/45 py-16 sm:py-20 md:py-24" data-testid="section-certifications">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute bottom-20 left-1/4 h-40 w-40 rounded-full bg-amber-500/[0.06] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Certifications" Icon={HiAcademicCap} />

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const Icon = iconMap[cert.icon];
            return (
              <div
                key={cert.title}
                className="hover-elevate group overflow-hidden rounded-2xl border border-border/60 bg-card shadow-md transition hover:border-primary/25 hover:shadow-lg"
                data-testid={`certification-item-${index}`}
              >
                <div className="p-5 sm:p-6">
                  <div className="flex items-start gap-4">
                    <div className={`rounded-xl bg-muted/80 p-3 ring-1 ring-border/50 ${cert.iconColor}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-start justify-between gap-2">
                        <h3 className="text-sm font-semibold leading-snug tracking-tight">{cert.title}</h3>
                        <a
                          href={cert.credentialUrl || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`shrink-0 rounded-lg border border-border/60 bg-muted/50 p-2 transition hover:border-primary/35 hover:bg-muted ${
                            !cert.credentialUrl ? "pointer-events-none opacity-40" : ""
                          }`}
                          aria-label="View Credential"
                          data-testid={`link-credential-${index}`}
                        >
                          <HiArrowTopRightOnSquare className="h-4 w-4 text-muted-foreground" />
                        </a>
                      </div>
                      <p className="mb-2 text-sm text-muted-foreground">{cert.issuer}</p>
                      {cert.year && <span className="text-xs font-medium text-muted-foreground">{cert.year}</span>}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
