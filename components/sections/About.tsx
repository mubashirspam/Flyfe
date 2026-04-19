"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import SectionLabel from "@/components/ui/SectionLabel";

export default function About() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.18);

  return (
    <section id="about" className="py-32 px-14 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Image */}
        <div className="about-img-frame parallax-container reveal-left" style={{ height: "600px" }}>
          <div ref={parallaxRef} className="parallax-inner">
            <img
              src="https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=1200&q=85&auto=format&fit=crop"
              alt="Wayanad landscape Kerala"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <SectionLabel text="Our Story" className="reveal" />
          <h2
            className="reveal d1 leading-[1.08] tracking-[-0.01em] text-ink mb-7"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 3.8vw, 58px)",
              fontWeight: 300,
            }}
          >
            Where <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Nature</em>
            <br />
            Meets Ambition
          </h2>

          <div className="reveal d2 space-y-4 text-[15px] leading-[1.9]" style={{ color: "var(--muted)", maxWidth: "480px" }}>
            <p>
              Flyfe Developers was born from a singular vision — to create landmark
              properties that honour the pristine landscapes of Wayanad while
              delivering world-class luxury to those who seek something
              extraordinary.
            </p>
            <p>
              From our first project beside the emerald shores of Banasura Sagar to
              a growing portfolio of resort developments and premium residences, we
              have built a reputation for uncompromising quality and thoughtful
              design.
            </p>
          </div>

          {/* Quote */}
          <div
            className="reveal d3 mt-9 px-7 py-6 border-l-2"
            style={{ borderColor: "var(--gold)", background: "var(--gold-pale)" }}
          >
            <p
              className="text-[19px] italic font-normal leading-[1.5]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink2)" }}
            >
              "We don't just build structures. We craft destinations that families
              return to, and investors trust with their legacy."
            </p>
            <cite
              className="block mt-2.5 text-[10px] tracking-[0.16em] uppercase not-italic"
              style={{ color: "var(--muted)" }}
            >
              — Founder, Flyfe Developers
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
}
