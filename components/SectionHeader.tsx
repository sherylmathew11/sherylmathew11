import type { ComponentType } from "react";
import { twMerge } from "tailwind-merge";
import { fontHeading } from "@/lib/fonts";

type SectionHeaderProps = {
  title: string;
  Icon?: ComponentType<{ className?: string }>;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({ title, Icon, align = "left", className = "" }: SectionHeaderProps) {
  const isCenter = align === "center";

  const iconWrap = Icon ? (
    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-border/80 bg-gradient-to-br from-primary/12 via-card to-card text-primary shadow-[inset_0_1px_0_0_hsl(0_0%_100%_/_0.06)] dark:shadow-[inset_0_1px_0_0_hsl(0_0%_100%_/_0.04)] sm:h-12 sm:w-12">
      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
    </span>
  ) : null;

  return (
    <div className={twMerge("mb-10 md:mb-12", isCenter && "text-center", className)}>
      {isCenter ? (
        <div className="flex flex-col items-center gap-3">
          {iconWrap}
          <h2
            className={`${fontHeading.className} text-3xl font-medium tracking-tight text-foreground sm:text-[2rem] md:text-4xl`}
          >
            {title}
          </h2>
        </div>
      ) : (
        <div className="flex items-center gap-3 sm:gap-4">
          {iconWrap}
          <h2
            className={`${fontHeading.className} text-3xl font-medium tracking-tight text-foreground sm:text-[2rem] md:text-4xl`}
          >
            {title}
          </h2>
        </div>
      )}
    </div>
  );
}
