"use client";

import { FaLinkedin } from "react-icons/fa6";
import { HiArrowDown, HiDocumentText, HiEnvelope } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { socialLinks } from "@/constants/socialLinks";
import { fontHeading } from "@/lib/fonts";

const iconMap = {
  Email: HiEnvelope,
  GitHub: SiGithub,
  LinkedIn: FaLinkedin,
  Resume: HiDocumentText,
} as const;

const mailHref = socialLinks.find((l) => l.label === "Email")?.href ?? "mailto:sherylmathew1103@gmail.com";

export default function Header() {
  return (
    <section
      id="about"
      className="mesh-hero relative flex min-h-0 flex-col overflow-hidden py-6 sm:py-8 md:min-h-[min(78vh,calc(100vh-4.5rem))] md:py-0"
      data-testid="section-hero"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-1/4 h-[28rem] w-[28rem] -translate-y-1/2 translate-x-1/4 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-full bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Main hero: vertically centered with extra top bias so it sits slightly below midline */}
      <div className="relative z-10 flex min-h-0 flex-1 flex-col justify-center px-4 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 md:pb-20 md:pt-24">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
          <div className="flex w-full flex-col items-center gap-5 md:gap-7">
            <div className="relative shrink-0">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-primary/40 via-primary/15 to-transparent opacity-80 blur-md" />
              <div className="relative h-36 w-36 overflow-hidden rounded-full border-2 border-border/60 bg-card shadow-2xl ring-4 ring-background md:h-44 md:w-44">
                <img
                  src="/images/ProfileImage.jpg"
                  alt="Sheryl Mathew"
                  width={256}
                  height={256}
                  className="h-full w-full object-cover"
                  data-testid="img-avatar"
                />
              </div>
            </div>

            <div className="w-full max-w-2xl">
              <h1
                className={`${fontHeading.className} text-[2.1rem] font-medium leading-[1.12] tracking-tight text-foreground sm:text-[2.35rem] md:text-5xl lg:text-6xl`}
              >
                Sheryl Mathew
              </h1>

              <p className="mx-auto mt-4 max-w-xl text-[0.9375rem] leading-relaxed text-muted-foreground sm:text-base md:mt-5 md:text-[1.0625rem] md:leading-[1.65]">
                Data Analyst with experience in exploratory data analysis of complex financial datasets and healthcare operations support. Skilled in Python,
                SQL, PySpark, and Azure Databricks, with a track record of automating analytics workflows and building
                Tableau and Power BI dashboards that surface data patterns, risks and trends. Strong communicator with a B.Tech in
                Electronics and Computer Engineering.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3 md:mt-7">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold tracking-wide text-primary-foreground shadow-lg shadow-primary/25 transition hover:bg-primary/92 hover:shadow-xl hover:shadow-primary/30"
                  onClick={() => document.querySelector("#experience")?.scrollIntoView({ behavior: "smooth" })}
                  data-testid="button-view-work"
                >
                  View Experience
                </button>
                <a
                  href={mailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-border/80 bg-card/80 px-7 py-3 text-sm font-semibold tracking-wide text-foreground shadow-sm backdrop-blur-sm transition hover:border-primary/35 hover:bg-muted/80"
                  data-testid="button-contact"
                >
                  Get in Touch
                </a>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2.5 md:mt-7">
                {socialLinks.map((link) => {
                  const Icon = iconMap[link.label as keyof typeof iconMap];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border/70 bg-card/90 text-foreground shadow-sm transition hover:border-primary/40 hover:bg-muted/60 hover:shadow-md"
                      aria-label={link.label}
                      data-testid={`link-social-${link.label.toLowerCase()}`}
                    >
                      {Icon ? <Icon className="h-4 w-4" /> : null}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => {
          const element = document.querySelector("#experience");
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
        className="absolute bottom-2 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-muted-foreground transition hover:text-primary sm:bottom-3 md:bottom-4"
        aria-label="Scroll down"
        data-testid="button-scroll-down"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.35em]">Scroll</span>
        <HiArrowDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
}
