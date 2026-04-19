"use client";
import { useEffect, useRef, RefObject } from "react";

export function useScrollVideo(
  videoRef: RefObject<HTMLVideoElement | null>,
  containerRef: RefObject<HTMLElement | null>,
  onProgress?: (progress: number) => void
) {
  // Keep latest callback without re-running the main effect
  const callbackRef = useRef(onProgress);
  useEffect(() => {
    callbackRef.current = onProgress;
  });

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;
    if (!video || !container) return;

    // ── state that lives entirely outside React ──────────────────────────
    let targetTime  = 0;   // where scroll says we should be
    let displayTime = 0;   // lerped value we actually write to currentTime
    let isSeeking   = false;
    let tickId: number | null = null;
    let lastProgress = -1;

    // ── 1. compute scroll progress & update targetTime ───────────────────
    const computeProgress = (): number => {
      const { top, height } = container.getBoundingClientRect();
      const scrollRange = height - window.innerHeight;
      if (scrollRange <= 0) return 0;
      return Math.max(0, Math.min(1, -top / scrollRange));
    };

    // ── 2. lerp displayTime → targetTime, then seek once settled ─────────
    // This removes the harsh jump when a big scroll delta arrives suddenly.
    const LERP = 0.18; // 0 = never moves, 1 = snaps instantly

    const tick = () => {
      tickId = requestAnimationFrame(tick);

      if (!video.duration || !isFinite(video.duration)) return;

      const diff = targetTime - displayTime;

      // Stop ticking when close enough to avoid unnecessary seeks
      if (Math.abs(diff) < 0.001) {
        displayTime = targetTime;
        if (!isSeeking) video.currentTime = displayTime;
        cancelAnimationFrame(tickId!);
        tickId = null;
        return;
      }

      displayTime += diff * LERP;
      if (!isSeeking) {
        isSeeking = true;
        video.currentTime = displayTime;
      }
    };

    // ── 3. after each seek settles, immediately queue the next one ────────
    const onSeeked = () => {
      isSeeking = false;
      // If tick loop already computed a newer displayTime, apply it now
      if (Math.abs(video.currentTime - displayTime) > 0.001 && !isSeeking) {
        isSeeking = true;
        video.currentTime = displayTime;
      }
    };

    // ── 4. scroll handler ─────────────────────────────────────────────────
    let rafId: number | null = null;

    const onScroll = () => {
      if (rafId) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;

        const progress = computeProgress();
        if (progress === lastProgress) return;
        lastProgress = progress;

        if (video.duration && isFinite(video.duration)) {
          targetTime = progress * video.duration;
        }

        callbackRef.current?.(progress);

        // Kick off the lerp ticker if not already running
        if (!tickId) tickId = requestAnimationFrame(tick);
      });
    };

    // ── 5. run once metadata is available ────────────────────────────────
    const init = () => {
      const progress = computeProgress();
      lastProgress = progress;
      if (video.duration && isFinite(video.duration)) {
        targetTime  = progress * video.duration;
        displayTime = targetTime;
        video.currentTime = targetTime;
      }
      callbackRef.current?.(progress);
    };

    video.addEventListener("seeked", onSeeked);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll,  { passive: true });

    if (video.readyState >= 1) {
      init();
    } else {
      video.addEventListener("loadedmetadata", init, { once: true });
    }

    return () => {
      video.removeEventListener("seeked", onSeeked);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId)   cancelAnimationFrame(rafId);
      if (tickId)  cancelAnimationFrame(tickId);
    };
  }, [videoRef, containerRef]);
}
