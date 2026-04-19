"use client";
import { useEffect, RefObject } from "react";

export function useCounter(
  ref: RefObject<HTMLElement | null>,
  target: number,
  suffix: string,
  triggered: boolean,
  duration = 2000
) {
  useEffect(() => {
    if (!triggered || !ref.current) return;
    const el = ref.current;
    if (el.dataset.done) return;
    el.dataset.done = "1";

    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const prog = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - prog, 3);
      el.textContent = Math.floor(ease * target) + suffix;
      if (prog < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [triggered, ref, target, suffix, duration]);
}
