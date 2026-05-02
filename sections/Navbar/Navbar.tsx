"use client";

import { useEffect, useState } from "react";
import { HiBars3, HiMoon, HiSun, HiXMark } from "react-icons/hi2";
import { navLinks } from "@/constants/navLinks";
import { fontDisplay } from "@/lib/fonts";
import { initTheme, toggleTheme, type ThemeMode } from "@/lib/theme.action";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeMode>("light");

  useEffect(() => {
    setTheme(initTheme());
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-[0_8px_30px_hsl(222_47%_11%_/_0.06)] backdrop-blur-xl dark:bg-background/75 dark:shadow-[0_8px_30px_hsl(0_0%_0%_/_0.35)]"
          : "border-b border-transparent bg-background/40 backdrop-blur-md dark:bg-transparent"
      }`}
      data-testid="navigation"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-[4.25rem] md:px-8">
        <a
          href="#"
          className={`${fontDisplay.className} text-lg font-medium tracking-tight text-foreground md:text-xl`}
          data-testid="link-logo"
          onClick={(event) => {
            event.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Sheryl Mathew
        </a>

        <div className="hidden items-center gap-0.5 md:flex">
          {navLinks.map((item) => (
            <button
              key={item.href}
              type="button"
              className="rounded-full px-4 py-2 text-sm font-medium tracking-wide text-muted-foreground transition hover:bg-muted/90 hover:text-foreground"
              onClick={() => scrollToSection(item.href)}
              data-testid={`link-nav-${item.label.toLowerCase()}`}
            >
              {item.label}
            </button>
          ))}
          <button
            type="button"
            className="ml-2 inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm transition hover:border-primary/35 hover:bg-muted/60"
            onClick={() => setTheme((current) => toggleTheme(current))}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm transition hover:bg-muted/60"
            onClick={() => setTheme((current) => toggleTheme(current))}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            data-testid="button-theme-toggle"
          >
            {theme === "dark" ? <HiSun className="h-5 w-5" /> : <HiMoon className="h-5 w-5" />}
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/80 bg-card/80 text-foreground shadow-sm transition hover:bg-muted/60"
            onClick={() => setIsMobileMenuOpen((open) => !open)}
            data-testid="button-mobile-menu"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <HiXMark className="h-5 w-5" /> : <HiBars3 className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-5 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col gap-1 rounded-2xl border border-border/50 bg-card/50 p-2 shadow-lg">
            {navLinks.map((item) => (
              <button
                key={item.href}
                type="button"
                className="rounded-xl px-4 py-3 text-left text-sm font-medium text-muted-foreground transition hover:bg-muted/80 hover:text-foreground"
                onClick={() => scrollToSection(item.href)}
                data-testid={`link-mobile-nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
