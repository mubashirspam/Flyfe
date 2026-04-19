"use client";
import { useState, useRef } from "react";
import SectionLabel from "@/components/ui/SectionLabel";

const projects = [
  { img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=85&auto=format&fit=crop", badge: "New Launch", type: "Luxury Resort",       name: "Balhiz Vista\nResort",   location: "Banasura Sagar, Wayanad", area: "14 Acres" },
  { img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=85&auto=format&fit=crop", badge: null,         type: "Premium Villas",       name: "The Palisade\nVillas",   location: "Kalpetta, Wayanad",       area: "28 Acres" },
  { img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=85&auto=format&fit=crop", badge: null,         type: "Residential Complex",  name: "Verdant\nHeights",       location: "Mananthavady, Wayanad",   area: "8 Acres"  },
  { img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=85&auto=format&fit=crop", badge: null,         type: "Eco Retreat",          name: "Nilgiri\nRetreat",       location: "Sulthan Bathery, Wayanad",area: "19 Acres" },
];

const PinIcon = () => (
  <svg width="10" height="12" viewBox="0 0 10 12" fill="none">
    <path d="M5 1C2.79 1 1 2.79 1 5c0 3 4 7 4 7s4-4 4-7c0-2.21-1.79-4-4-4z" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const NavBtn = ({ dir, onClick }: { dir: "prev" | "next"; onClick: () => void }) => (
  <button
    onClick={onClick}
    aria-label={dir === "prev" ? "Previous" : "Next"}
    className="w-10 h-10 sm:w-[46px] sm:h-[46px] flex items-center justify-center border transition-all duration-300 hover:border-gold hover:text-gold-dk"
    style={{ borderColor: "var(--border2)", color: "var(--muted)", background: "var(--surface)" }}
  >
    <svg width="14" height="9" viewBox="0 0 16 10" fill="none">
      {dir === "prev"
        ? <path d="M15 5H1M1 5L5 1M1 5L5 9" stroke="currentColor" strokeWidth="1.2" />
        : <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" />}
    </svg>
  </button>
);

export default function Projects() {
  const [pos, setPos] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const cardWidth = () => {
    const card = trackRef.current?.querySelector<HTMLElement>(".proj-card");
    return card ? card.offsetWidth + 20 : 0;
  };
  const maxPos = () => {
    const track = trackRef.current;
    if (!track) return 0;
    return Math.max(0, projects.length * cardWidth() - 20 - track.parentElement!.offsetWidth);
  };
  const prev = () => setPos(p => Math.max(p - cardWidth(), 0));
  const next = () => setPos(p => Math.min(p + cardWidth(), maxPos()));

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32" style={{ background: "var(--bg2)" }}>

      {/* Header */}
      <div className="px-5 sm:px-8 lg:px-14 max-w-[1400px] mx-auto mb-10 sm:mb-16 flex justify-between items-end">
        <div>
          <SectionLabel text="Our Portfolio" className="reveal" />
          <h2
            className="reveal d1 leading-[1.08]"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 4vw, 58px)", fontWeight: 300, color: "var(--ink)" }}
          >
            Featured<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Projects</em>
          </h2>
        </div>
        <div className="reveal d2 flex gap-2.5">
          <NavBtn dir="prev" onClick={prev} />
          <NavBtn dir="next" onClick={next} />
        </div>
      </div>

      {/* Scrollable track */}
      <div className="overflow-hidden px-5 sm:px-8 lg:px-14">
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 transition-transform duration-700"
          style={{ transform: `translateX(-${pos}px)`, transitionTimingFunction: "var(--ease-silk)" }}
        >
          {projects.map((proj, i) => (
            <article
              key={proj.name}
              className={`proj-card reveal ${["","d1","d2","d3"][i]} flex-none cursor-pointer transition-all duration-500 hover:-translate-y-1`}
              style={{
                /* 85 vw on mobile so next card peeks; 33% on desktop */
                width: "min(85vw, calc(33.333% - 14px))",
                minWidth: 260,
                background: "var(--surface)",
                boxShadow: "0 2px 20px rgba(26,21,16,0.06)",
              }}
            >
              <div className="relative overflow-hidden" style={{ height: "clamp(220px,40vw,380px)" }}>
                <img
                  src={proj.img}
                  alt={proj.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[900ms]"
                  style={{ transitionTimingFunction: "var(--ease-silk)" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.07)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(180deg,transparent 40%,rgba(10,8,5,0.75)100%)" }} />
                {proj.badge && (
                  <div className="absolute top-4 left-4 text-[9px] font-medium tracking-[0.18em] uppercase px-2.5 py-1.5" style={{ background: "var(--gold)", color: "var(--ink)" }}>
                    {proj.badge}
                  </div>
                )}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="text-[9px] tracking-[0.2em] uppercase mb-1" style={{ color: "var(--gold-lt)" }}>{proj.type}</div>
                  <div className="text-[22px] sm:text-[26px] font-normal leading-[1.2] text-white whitespace-pre-line" style={{ fontFamily: "var(--font-display)" }}>
                    {proj.name}
                  </div>
                </div>
                <div className="proj-cta-overlay">
                  <span className="text-[11px] font-medium tracking-[0.2em] uppercase pb-0.5" style={{ color: "var(--ink)", borderBottom: "1px solid var(--ink)" }}>
                    View Project
                  </span>
                </div>
              </div>
              <div className="px-5 py-4 flex justify-between items-center border-t" style={{ borderColor: "var(--border2)" }}>
                <div className="flex items-center gap-1.5 text-[11px] sm:text-[12px]" style={{ color: "var(--muted)" }}>
                  <PinIcon />{proj.location}
                </div>
                <div className="text-[18px] sm:text-[20px] font-normal" style={{ fontFamily: "var(--font-display)", color: "var(--ink2)" }}>
                  {proj.area}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
