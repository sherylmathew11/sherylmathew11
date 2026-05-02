import { FaLinkedin } from "react-icons/fa6";
import { HiDocumentText, HiEnvelope, HiGlobeAmericas, HiMapPin } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { socialLinks } from "@/constants/socialLinks";
import { fontDisplay } from "@/lib/fonts";

const iconMap = {
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Email: HiEnvelope,
  Resume: HiDocumentText,
};

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative w-full border-t border-border/60 bg-gradient-to-b from-muted/40 to-muted/70 py-12 sm:py-14 md:py-16"
      data-testid="section-contact"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="mx-auto max-w-6xl px-4 text-center md:px-8">
        <div className="mx-auto mb-8 max-w-2xl">
          <h2 className={`${fontDisplay.className} text-3xl font-medium tracking-tight sm:text-[2rem] md:text-4xl`}>
            Let&apos;s connect
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {socialLinks.map((link) => {
            const Icon = iconMap[link.label as keyof typeof iconMap];
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-5 py-2.5 text-sm font-semibold text-foreground shadow-sm transition hover:border-primary/35 hover:bg-muted/70 hover:shadow-md"
                data-testid={`button-social-${link.label.toLowerCase()}`}
              >
                {Icon ? <Icon className="h-4 w-4" /> : null}
                {link.label}
              </a>
            );
          })}
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center gap-2 rounded-2xl border border-border/50 bg-muted/30 px-4 py-3 text-sm text-muted-foreground backdrop-blur-sm sm:flex-row sm:justify-center sm:gap-6 sm:px-6 sm:py-3.5 dark:bg-muted/20">
          <span className="flex items-center justify-center gap-2 sm:justify-start">
            <HiMapPin className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span className="text-center sm:text-left">
              <span className="sr-only">Location: </span>
              New York, United States
            </span>
          </span>
          <span
            className="hidden h-4 w-px shrink-0 bg-border/70 sm:block"
            aria-hidden
          />
          <span className="flex items-center justify-center gap-2 border-t border-border/40 pt-2 sm:justify-start sm:border-t-0 sm:pt-0">
            <HiGlobeAmericas className="h-4 w-4 shrink-0 text-primary" aria-hidden />
            <span className="text-center sm:text-left">
              <span className="sr-only">Availability: </span>
              Open to relocation and remote opportunities
            </span>
          </span>
        </div>
      </div>
    </footer>
  );
}
