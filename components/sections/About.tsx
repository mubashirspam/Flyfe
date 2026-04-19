"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.4);

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-14 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Image with gold corner frame — wrapper keeps overflow:visible for corners */}
        <div className="about-img-frame reveal-left" style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16, paddingBottom: 16 }}>
          <div
            className="parallax-container"
            style={{ height: "clamp(280px, 45vw, 600px)" }}
          >
            <div ref={parallaxRef} className="parallax-inner">
              <img
                src="/5.jpg"
                alt="Wayanad landscape Kerala"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel text="Our Story" className="reveal" />
          <h2
            className="reveal d1 leading-[1.08] tracking-[-0.01em] text-ink mb-7"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 58px)", fontWeight: 300 }}
          >
            Where <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Nature</em>
            <br />Meets Ambition
          </h2>

          <div className="reveal d2 space-y-4 text-[14px] sm:text-[15px] leading-[1.9]" style={{ color: "var(--muted)", maxWidth: 480 }}>
            <p>
              Flyfe Developers was born from a singular vision — to create landmark
              properties that honour the pristine landscapes of Wayanad while
              delivering world-class luxury to those who seek something extraordinary.
            </p>
            <p>
              From our first project beside the emerald shores of Banasura Sagar to
              a growing portfolio of resort developments and premium residences, we
              have built a reputation for uncompromising quality and thoughtful design.
            </p>
          </div>

          <div
            className="reveal d3 mt-8 px-6 py-5 border-l-2"
            style={{ borderColor: "var(--gold)", background: "var(--gold-pale)" }}
          >
            <p
              className="text-[17px] sm:text-[19px] italic font-normal leading-[1.5]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink2)" }}
            >
              &ldquo;We don&apos;t just build structures. We craft destinations that families
              return to, and investors trust with their legacy.&rdquo;
            </p>
            <cite className="block mt-2.5 text-[10px] tracking-[0.16em] uppercase not-italic" style={{ color: "var(--muted)" }}>
              — Founder, Flyfe Developers
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
