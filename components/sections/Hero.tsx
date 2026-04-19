"use client";
import { useRef, useEffect, useCallback } from "react";
import { useScrollVideo } from "@/hooks/useScrollVideo";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef    = useRef<HTMLVideoElement>(null);
  const contentRef  = useRef<HTMLDivElement>(null);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const badgeRef    = useRef<HTMLDivElement>(null);

  // All DOM animation happens here — zero React re-renders on scroll
  const onProgress = useCallback((progress: number) => {
    // Content: start fading at 12%, fully gone at 52%
    const FADE_START = 0.12;
    const FADE_END   = 0.52;
    const fade = Math.max(0, Math.min(1, (progress - FADE_START) / (FADE_END - FADE_START)));

    const content = contentRef.current;
    if (content) {
      content.style.opacity   = `${1 - fade}`;
      content.style.transform = `translateY(${fade * -56}px) scale(${1 - fade * 0.035})`;
    }

    // Scroll indicator fades in first 12%
    const indicator = indicatorRef.current;
    if (indicator) {
      indicator.style.opacity = `${Math.max(0, 1 - progress / 0.12)}`;
    }

    // Badge fades with content but a bit slower
    const badge = badgeRef.current;
    if (badge) {
      const badgeFade = Math.max(0, Math.min(1, (progress - 0.08) / 0.35));
      badge.style.opacity = `${1 - badgeFade}`;
    }
  }, []);

  useScrollVideo(videoRef, containerRef, onProgress);

  // Prevent browser from trying to autoplay
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  }, []);

  return (
    /*
     * Outer container is 260vh tall — the inner section is sticky, so the
     * user "stays" on the hero for ~1.6× the viewport height of scrolling
     * before moving on to the next section.
     */
    <div ref={containerRef} style={{ height: "260vh", position: "relative" }}>
      <section
        id="hero"
        className="sticky top-0 flex items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* ── Fallback bg (visible while video loads or on error) ── */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=85&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* ── Scroll-driven background video ── */}
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1920&q=85&auto=format&fit=crop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ willChange: "transform", zIndex: 1 }}
        >
          <source src="/bg.mp4" type="video/mp4" />
        </video>

        {/* ── Gradient overlay ── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,6,3,0.48) 0%, rgba(8,6,3,0.12) 38%, rgba(8,6,3,0.12) 58%, rgba(8,6,3,0.76) 100%)",
            zIndex: 2,
          }}
        />

        {/* ── Est. badge ── */}
        <div
          ref={badgeRef}
          className="absolute top-28 right-14 hidden md:flex flex-col items-center justify-center w-[88px] h-[88px] rounded-full"
          style={{
            border: "1px solid rgba(201,168,76,0.45)",
            zIndex: 3,
            willChange: "opacity",
          }}
        >
          <div
            className="text-center text-[25px] font-light leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold-lt)" }}
          >
            Est
            <br />
            2018
          </div>
          <div className="text-[8px] tracking-[0.18em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Wayanad
          </div>
        </div>

        {/* ── Hero content (animated via ref, no re-renders) ── */}
        <div
          ref={contentRef}
          className="relative w-full max-w-[880px] mx-auto px-6 md:px-14 text-center flex flex-col items-center"
          style={{ zIndex: 3, willChange: "opacity, transform" }}
        >
          {/* Eyebrow */}
          <div className="hero-eyebrow flex items-center gap-4 mb-8">
            <div className="w-10 h-px" style={{ background: "var(--gold-lt)" }} />
            <p className="text-[10px] tracking-[0.3em] uppercase" style={{ color: "var(--gold-lt)" }}>
              Wayanad · Kerala · India
            </p>
            <div className="w-10 h-px" style={{ background: "var(--gold-lt)" }} />
          </div>

          {/* Headline */}
          <h1
            className="hero-headline text-white leading-[1.02] tracking-[-0.015em]"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(50px, 8.5vw, 114px)",
              fontWeight: 300,
            }}
          >
            Building{" "}
            <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>
              {"Tomorrow's"}
            </em>
            <br />
            Landmarks
          </h1>

          {/* Gold vertical rule */}
          <div
            className="hero-sub mt-8 mb-5 w-px h-10"
            style={{ background: "rgba(201,168,76,0.38)" }}
          />

          {/* Subtext */}
          <p
            className="hero-sub max-w-[460px] text-[15px] leading-[1.85] text-center"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            Premium luxury properties and resort developments crafted for discerning
            investors and homeowners across the highlands of Kerala.
          </p>

          {/* CTAs */}
          <div className="hero-actions flex flex-wrap gap-4 items-center justify-center mt-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase text-ink px-10 py-[17px] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gold)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--gold-lt)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--gold)")}
            >
              Explore Projects
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 text-[11px] font-light tracking-[0.18em] uppercase text-white/80 px-8 py-[16px] transition-all duration-300"
              style={{ border: "1px solid rgba(255,255,255,0.32)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--gold)";
                e.currentTarget.style.color = "var(--gold)";
                e.currentTarget.style.background = "rgba(201,168,76,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)";
                e.currentTarget.style.color = "rgba(255,255,255,0.8)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Investor Enquiry
            </a>
          </div>
        </div>

        {/* ── Scroll indicator — fades out as soon as scrolling starts ── */}
        <div
          ref={indicatorRef}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 3, willChange: "opacity" }}
        >
          <div
            className="scroll-line w-px h-12"
            style={{ background: "linear-gradient(180deg, var(--gold-lt), transparent)" }}
          />
          <span className="text-[9px] tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
            Scroll
          </span>
        </div>
      </section>
    </div>
  );
}
