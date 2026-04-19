"use client";
import { useRef, useState, useEffect } from "react";
import { useCounter } from "@/hooks/useCounter";

const stats = [
  { count: 12, suffix: "+", label: "Projects Delivered" },
  { count: 7, suffix: " Yrs", label: "Years of Excellence" },
  { count: 240, suffix: "+", label: "Acres Developed" },
  { count: 500, suffix: "+", label: "Happy Investors" },
];

function StatCell({
  count,
  suffix,
  label,
  delay,
}: {
  count: number;
  suffix: string;
  label: string;
  delay: string;
}) {
  const cellRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = cellRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          el.classList.add("in");
          io.disconnect();
        }
      },
      { threshold: 0.18 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useCounter(numRef, count, suffix, visible);

  return (
    <div
      ref={cellRef}
      className={`stat-cell px-10 py-11 border-r border-white/[0.07] last:border-r-0 reveal ${delay}`}
    >
      <div
        ref={numRef}
        className="text-[60px] font-light leading-none tracking-[-0.02em]"
        style={{ fontFamily: "var(--font-display)", color: "var(--gold)" }}
      >
        0{suffix}
      </div>
      <div className="mt-1.5 text-[10px] tracking-[0.2em] uppercase text-white/40">
        {label}
      </div>
    </div>
  );
}

export default function StatsBand() {
  return (
    <div
      className="grid grid-cols-2 lg:grid-cols-4"
      style={{ background: "var(--ink)" }}
    >
      {stats.map((s, i) => (
        <StatCell
          key={s.label}
          count={s.count}
          suffix={s.suffix}
          label={s.label}
          delay={["", "d1", "d2", "d3"][i]}
        />
      ))}
    </div>
  );
}
