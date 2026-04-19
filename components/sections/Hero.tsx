"use client";
import { useRef, useEffect, useCallback, useState } from "react";
import { useScrollVideo } from "@/hooks/useScrollVideo";

const TAGLINES = [
  { eye: "Wayanad · Kerala · India",      line1: "Building",       italic: "Tomorrow's",  line2: "Landmarks"   },
  { eye: "Premium Luxury Properties",      line1: "Where Nature",   italic: "Meets",       line2: "Luxury"      },
  { eye: "Trusted Developers Since 2018",  line1: "Your Investment",italic: "Journey",     line2: "Begins"      },
];

type LoadStage = "loading" | "fading" | "gone";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const taglineRefs  = useRef<(HTMLDivElement | null)[]>([null, null, null]);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const badgeRef     = useRef<HTMLDivElement>(null);
  const ctasRef      = useRef<HTMLDivElement>(null);

  const [loadPct, setLoadPct] = useState(0);
  const [stage, setStage]     = useState<LoadStage>("loading");

  // ── scroll-driven tagline + UI animation (zero re-renders) ─────────────
  const onProgress = useCallback((progress: number) => {
    const N    = TAGLINES.length;
    const ZONE = 1 / N;     // 0.333 per tagline
    const FADE = 0.07;      // crossfade window in progress units

    taglineRefs.current.forEach((el, i) => {
      if (!el) return;
      // T0 starts fully visible; others slide in from below
      const fadeInStart = i === 0 ? 0              : i * ZONE - FADE;
      const fadeInEnd   = i === 0 ? 0              : i * ZONE;
      const peakEnd     = (i + 1) * ZONE - FADE;
      const fadeOutEnd  = Math.min((i + 1) * ZONE, 1);

      let opacity: number, y: number;
      if (progress < fadeInStart) {
        opacity = 0; y = 40;
      } else if (progress < fadeInEnd) {
        const t = (progress - fadeInStart) / FADE;
        opacity = t; y = 40 * (1 - t);
      } else if (progress <= peakEnd) {
        opacity = 1; y = 0;
      } else if (progress < fadeOutEnd) {
        const t = (progress - peakEnd) / FADE;
        opacity = 1 - t; y = -30 * t;
      } else {
        opacity = 0; y = -30;
      }

      el.style.opacity   = String(Math.max(0, Math.min(1, opacity)));
      el.style.transform = `translateY(${y}px)`;
    });

    const indicator = indicatorRef.current;
    if (indicator) indicator.style.opacity = String(Math.max(0, 1 - progress / 0.08));

    const badge = badgeRef.current;
    if (badge) badge.style.opacity = String(Math.max(0, 1 - Math.min(1, progress / 0.18)));

    const ctas = ctasRef.current;
    if (ctas) ctas.style.opacity = String(Math.max(0, 1 - Math.min(1, (progress - 0.14) / 0.10)));
  }, []);

  useScrollVideo(videoRef, containerRef, onProgress);
  useScrollVideo(mobileVideoRef, containerRef, onProgress);

  // ── video init + loader ─────────────────────────────────────────────────
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;

    let fired = false;
    let safetyTimer: ReturnType<typeof setTimeout> | undefined;

    const markReady = () => {
      if (fired) return;
      fired = true;
      setLoadPct(100);
      setTimeout(() => {
        setStage("fading");
        setTimeout(() => setStage("gone"), 850);
      }, 350);
    };

    const onProgressEv = () => {
      if (!v.duration || fired) return;
      const buf = v.buffered;
      if (buf.length > 0) {
        const pct = Math.round((buf.end(buf.length - 1) / v.duration) * 100);
        setLoadPct(p => Math.max(p, Math.min(pct, 99)));
      }
    };

    v.addEventListener("canplaythrough", markReady);
    v.addEventListener("progress", onProgressEv);
    v.addEventListener("loadeddata", onProgressEv);

    if (v.readyState >= 4) {
      markReady();
    } else {
      safetyTimer = setTimeout(markReady, 8000);
    }

    return () => {
      clearTimeout(safetyTimer);
      v.removeEventListener("canplaythrough", markReady);
      v.removeEventListener("progress", onProgressEv);
      v.removeEventListener("loadeddata", onProgressEv);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" style={{ height: "260vh" }}>
      <section
        id="hero"
        className="sticky top-0 flex items-center justify-center overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Background video — scroll drives currentTime */}
        <div className="absolute inset-0" style={{ zIndex: 1 }}>
          <video
            ref={videoRef}
            muted
            playsInline
            preload="auto"
            className="hidden md:block absolute inset-0 w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
          >
            <source src="/bg.mp4" type="video/mp4" />
          </video>
          <video
            ref={mobileVideoRef}
            muted
            playsInline
            preload="auto"
            className="block md:hidden absolute inset-0 w-full h-full"
            style={{ objectFit: "cover", objectPosition: "center 60%" }}
          >
            <source src="/bgm.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg,rgba(8,6,3,0.58)0%,rgba(8,6,3,0.08)40%,rgba(8,6,3,0.08)58%,rgba(8,6,3,0.84)100%)",
            zIndex: 2,
          }}
        />

        {/* Est. badge — desktop only */}
        <div
          ref={badgeRef}
          className="absolute top-24 right-8 lg:right-14 hidden md:flex flex-col items-center justify-center w-[80px] h-[80px] lg:w-[88px] lg:h-[88px] rounded-full"
          style={{ border: "1px solid rgba(201,168,76,0.45)", zIndex: 3, willChange: "opacity" }}
        >
          <div
            className="text-center text-[22px] lg:text-[25px] font-light leading-none"
            style={{ fontFamily: "var(--font-display)", color: "var(--gold-lt)" }}
          >
            Est<br />2018
          </div>
          <div className="text-[7px] tracking-[0.16em] uppercase mt-1" style={{ color: "rgba(255,255,255,0.5)" }}>
            Wayanad
          </div>
        </div>

        {/* ── Tagline stack — 3 panels driven by scroll ─────────────────── */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ zIndex: 3 }}>
          {TAGLINES.map((t, i) => (
            <div
              key={i}
              ref={el => { taglineRefs.current[i] = el; }}
              className="absolute w-full px-5 sm:px-8 lg:px-14 text-center flex flex-col items-center"
              style={{
                opacity: i === 0 ? 1 : 0,
                transform: i === 0 ? "none" : "translateY(40px)",
                willChange: "opacity, transform",
              }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-5 sm:mb-8">
                <div className="w-6 sm:w-10 h-px" style={{ background: "var(--gold-lt)" }} />
                <p className="text-[9px] sm:text-[10px] tracking-[0.28em] uppercase whitespace-nowrap" style={{ color: "var(--gold-lt)" }}>
                  {t.eye}
                </p>
                <div className="w-6 sm:w-10 h-px" style={{ background: "var(--gold-lt)" }} />
              </div>

              {/* Headline — h1 for first, decorative p for the rest */}
              {i === 0 ? (
                <h1
                  className="text-white leading-[1.02] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 10vw, 114px)", fontWeight: 600 }}
                >
                  {t.line1}{" "}
                  <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>{t.italic}</em>
                  <br />{t.line2}
                </h1>
              ) : (
                <p
                  aria-hidden="true"
                  className="text-white leading-[1.02] tracking-[-0.015em]"
                  style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px, 10vw, 114px)", fontWeight: 600 }}
                >
                  {t.line1}{" "}
                  <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>{t.italic}</em>
                  <br />{t.line2}
                </p>
              )}

              {/* Thin gold rule below each tagline */}
              <div className="mt-6 w-px h-8 sm:h-10" style={{ background: "rgba(201,168,76,0.38)" }} />
            </div>
          ))}
        </div>

        {/* CTAs — visible at start, fade as scroll begins */}
        <div
          ref={ctasRef}
          className="absolute bottom-24 sm:bottom-28 left-0 right-0 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 items-center justify-center px-5 pointer-events-auto"
          style={{ zIndex: 4, willChange: "opacity" }}
        >
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase text-ink px-8 sm:px-10 py-4 sm:py-[17px] transition-all duration-300 hover:-translate-y-0.5"
            style={{ background: "var(--gold)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-lt)")}
            onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
          >
            Explore Projects
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </a>
          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 text-[11px] font-light tracking-[0.18em] uppercase text-white/80 px-7 sm:px-8 py-[15px] sm:py-[16px] transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.32)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold)"; e.currentTarget.style.background = "rgba(201,168,76,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.32)"; e.currentTarget.style.color = "rgba(255,255,255,0.8)"; e.currentTarget.style.background = "transparent"; }}
          >
            Investor Enquiry
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          ref={indicatorRef}
          className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ zIndex: 3, willChange: "opacity" }}
        >
          <div className="scroll-line w-px h-10 sm:h-12" style={{ background: "linear-gradient(180deg,var(--gold-lt),transparent)" }} />
          <span className="text-[8px] sm:text-[9px] tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.45)" }}>
            Scroll
          </span>
        </div>

        {/* ── Preloader overlay ─────────────────────────────────────────── */}
        {stage !== "gone" && (
          <div
            className="absolute inset-0 flex flex-col items-center justify-center select-none"
            style={{
              background: "#080603",
              zIndex: 100,
              opacity: stage === "fading" ? 0 : 1,
              transition: "opacity 0.85s cubic-bezier(0.4,0,0.2,1)",
              pointerEvents: stage === "fading" ? "none" : "auto",
            }}
          >
            {/* Wordmark */}
            <div
              className="text-[32px] sm:text-[42px] font-light tracking-[0.06em] mb-2"
              style={{ fontFamily: "var(--font-display)", color: "#F0EBE0" }}
            >
              Flyfe <span style={{ color: "var(--gold)" }}>Developers</span>
            </div>
            <div className="text-[9px] tracking-[0.28em] uppercase mb-14" style={{ color: "rgba(255,255,255,0.28)" }}>
              Wayanad · Kerala · India
            </div>

            {/* Progress bar */}
            <div className="relative w-52 sm:w-80 h-px" style={{ background: "rgba(255,255,255,0.08)" }}>
              <div
                className="absolute top-0 left-0 h-full"
                style={{
                  width: `${loadPct}%`,
                  background: "var(--gold)",
                  transition: "width 0.4s ease-out",
                }}
              />
            </div>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-[8px] tracking-[0.22em] uppercase" style={{ color: "rgba(255,255,255,0.22)" }}>
                {loadPct < 100 ? "Loading" : "Ready"}
              </span>
              {loadPct < 100 && (
                <span className="text-[8px] tabular-nums" style={{ color: "rgba(201,168,76,0.5)" }}>
                  {loadPct}%
                </span>
              )}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
