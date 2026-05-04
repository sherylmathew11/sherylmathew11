"use client";

import { SectionHeader } from "@/components/SectionHeader";
import { volunteerMeta, volunteerPoints } from "@/constants/volunteer";
import { HiHeart } from "react-icons/hi2";

export default function Volunteer() {
  return (
    <section id="volunteer" className="w-full" data-testid="section-volunteer">
      <div className="w-full bg-muted/40 pt-4 pb-14 sm:pt-6 sm:pb-16 md:pb-20">
        <div className="mx-auto w-full max-w-6xl px-4 md:px-8">
          <SectionHeader title="Volunteer Work" Icon={HiHeart} align="center" className="mb-8 md:mb-10" />

          <div className="relative overflow-hidden rounded-3xl border-2 border-border/80 bg-card shadow-xl">
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -left-28 -top-28 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -bottom-28 -right-28 h-80 w-80 rounded-full bg-teal-500/10 blur-3xl dark:bg-teal-400/15" />
            </div>

            <div className="relative px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 md:px-10 md:pb-12 md:pt-12">
              <div className="mb-8 text-center">
                <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">{volunteerMeta.organization}</p>
                <p className="mt-1.5 text-base font-semibold text-primary sm:text-lg">{volunteerMeta.title}</p>
                <a
                  href={volunteerMeta.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex max-w-full items-center justify-center break-all rounded-full border border-border/60 bg-background/70 px-4 py-1.5 text-sm text-primary transition hover:border-primary/40 hover:bg-background"
                >
                  {volunteerMeta.url}
                </a>
              </div>

              <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
                {volunteerPoints.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 rounded-2xl border border-border/60 bg-background/50 p-4 text-sm text-muted-foreground shadow-sm backdrop-blur-sm md:p-5 md:text-base"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)_/_0.12)]" />
                    <span className="leading-relaxed">{item.point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
