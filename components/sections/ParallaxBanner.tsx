"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

export default function ParallaxBanner() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 1);

  return (
    <div className="parallax-container" style={{ height: "520px" }}>
      <div ref={parallaxRef} className="parallax-inner">
        <img
          src="/11.jpg"
          alt="Wayanad mountains misty"
          loading="lazy"
          className="w-full h-full object-cover"
        />
        
      </div>
      <div
        className="absolute inset-0 flex flex-col items-center justify-center gap-5 text-center px-10"
        style={{ background: "rgba(10,8,5,0.52)" }}
      >
        <p
          className="reveal leading-[1.1] tracking-[-0.01em] text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(32px, 5vw, 72px)",
            fontWeight: 300,
          }}
        >
          <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>
            Rooted in Kerala.
          </em>
          <br />
          Built for the World.
        </p>
        <p
          className="reveal d1 text-[13px] tracking-[0.08em] max-w-[500px]"
          style={{ color: "rgba(255,255,255,0.65)" }}
        >
          Every project carries the soul of Wayanad&apos;s highlands — its mist, its
          silence, its timeless green.
        </p>
      </div>
    </div>
  );
}
