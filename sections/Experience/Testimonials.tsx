"use client";

import { useEffect, useState } from "react";
import { FaLinkedin } from "react-icons/fa6";
import { HiChatBubbleLeftRight } from "react-icons/hi2";
import { SectionHeader } from "@/components/SectionHeader";
import { testimonials } from "@/constants/testimonials";

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const totalReal = testimonials.length;
  const extendedTestimonials = [testimonials[totalReal - 1], ...testimonials, testimonials[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (currentSlide === totalReal + 1) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(1);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
    if (currentSlide === 0) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentSlide(totalReal);
      }, 500);
      const timeout2 = setTimeout(() => {
        setIsTransitioning(true);
      }, 550);
      return () => {
        clearTimeout(timeout);
        clearTimeout(timeout2);
      };
    }
  }, [currentSlide, totalReal]);

  return (
    <section id="testimonials" className="relative bg-muted/35 py-16 sm:py-20 md:py-24" data-testid="section-testimonials">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-px w-[min(80%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-8">
        <SectionHeader title="Testimonials" Icon={HiChatBubbleLeftRight} className="mb-8 md:mb-10" />

        <div className="testimonial-carousel">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-background/40 shadow-inner backdrop-blur-sm">
            <div
              className={`flex gap-4 p-1 ${isTransitioning ? "transition-transform duration-500 ease-out" : ""}`}
              style={
                {
                  "--slide-index": currentSlide,
                } as React.CSSProperties
              }
            >
              {extendedTestimonials.map((testimonial, index) => {
                const isActive = index === currentSlide;
                return (
                  <div
                    key={index}
                    className={`testimonial-slide flex-shrink-0 transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-[0.94] opacity-35"
                    }`}
                    data-testid={`testimonial-slide-${index}`}
                  >
                    <div
                      className={`relative flex h-full min-h-[220px] flex-col justify-center overflow-hidden rounded-xl p-5 sm:p-6 md:p-8 ${
                        isActive
                          ? "border border-primary/25 bg-gradient-to-br from-card via-card to-primary/[0.06] shadow-lg"
                          : "border border-transparent bg-card/60"
                      }`}
                    >
                      <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-primary/10 blur-2xl" />
                      <HiChatBubbleLeftRight className="absolute bottom-5 right-5 h-14 w-14 text-primary/[0.08]" />

                      <div className="relative z-10">
                        <div className="mb-5 flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/15 to-transparent text-sm font-bold text-primary">
                              {testimonial.from
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                                .slice(0, 2)}
                            </div>
                            <div>
                              <p className="font-semibold text-foreground">{testimonial.from}</p>
                              <p className="text-xs text-muted-foreground">
                                {testimonial.position} · Deloitte
                              </p>
                            </div>
                          </div>
                          <a
                            href={testimonial.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#0A66C2]/25 bg-[#0A66C2]/10 text-[#0A66C2] transition hover:bg-[#0A66C2] hover:text-white"
                            data-testid={`linkedin-${testimonial.from.split(" ")[0].toLowerCase()}`}
                          >
                            <FaLinkedin className="h-4 w-4" />
                          </a>
                        </div>

                        <p className="mb-3 text-sm leading-relaxed text-foreground/90 [text-wrap:pretty] md:text-base">
                          {testimonial.message.split("[LINK]")[0]}

                          {testimonial.link && (
                            <a
                              href={testimonial.link}
                              target="_blank"
                              rel="noreferrer"
                              className="text-blue-500 underline"
                            >
                              {testimonial.linkText ?? "Read more"}
                            </a>
                          )}

                          {testimonial.message.split("[LINK]")[1]}
                        </p>
                        <p className="text-right text-xs font-medium text-muted-foreground">{testimonial.date}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => {
                  setIsTransitioning(true);
                  setCurrentSlide(index + 1);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === (currentSlide - 1 + totalReal) % totalReal ? "w-8 bg-primary shadow-sm shadow-primary/30" : "w-2 bg-muted-foreground/25 hover:bg-muted-foreground/45"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
