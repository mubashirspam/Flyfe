"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";

export default function QuoteBanner() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.2);

  return (
    <div className="parallax-container" style={{ height: "440px" }}>
      <div ref={parallaxRef} className="parallax-inner">
        <img
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=85&auto=format&fit=crop"
          alt="Wayanad aerial landscape"
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center px-14"
        style={{ background: "rgba(10,8,5,0.64)" }}
      >
        <p
          className="reveal text-center leading-[1.25] max-w-[900px] text-white"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(24px, 4vw, 52px)",
            fontStyle: "italic",
            fontWeight: 300,
          }}
        >
          "In Wayanad, every acre tells a story. We build{" "}
          <strong style={{ color: "var(--gold-lt)", fontWeight: 400 }}>yours</strong>."
        </p>
      </div>
    </div>
  );
}
