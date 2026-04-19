"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  { num:"01", title:"Prime Locations",   desc:"Every project is carefully sited near water, within nature reserves or scenic highlands — ensuring long-term appreciation and an unmatched lifestyle quotient.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2L2 7v11h6v-6h4v6h6V7L10 2z" stroke="currentColor" strokeWidth="1.2"/></svg> },
  { num:"02", title:"Trusted Quality",   desc:"Certified contractors, premium materials, and a zero-compromise quality protocol — every structure is built to last and exceed regulatory standards.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 2l2 6h6l-5 3.6 2 6L10 14l-5 3.6 2-6L2 8h6l2-6z" stroke="currentColor" strokeWidth="1.2"/></svg> },
  { num:"03", title:"On-Time Delivery",  desc:"We have delivered 100% of our projects within committed timelines — a track record that speaks to our operational discipline and respect for your capital.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 10a7 7 0 1014 0A7 7 0 003 10zm7-4v4l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  { num:"04", title:"Strong ROI",        desc:"Wayanad's tourism boom and Kerala's NRI investment appetite make our projects consistently outperform regional real estate benchmarks by 2–3×.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M3 17l4-4 3 3 6-10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { num:"05", title:"Eco Commitment",    desc:"Sustainable construction practices, rainwater harvesting, and minimal forest footprint — building in harmony with Wayanad's UNESCO-recognised biodiversity.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2"/><path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
  { num:"06", title:"Legal Clarity",     desc:"Clean titles, RERA compliance, and full documentation support — especially for NRI buyers navigating FEMA regulations and repatriation of returns.",
    icon:<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.2"/><path d="M8 4V2M12 4V2M4 8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg> },
];

export default function WhyFlyfe() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 1);

  return (
    <section id="whyus" className="py-16 sm:py-24 lg:py-32 px-5 sm:px-8 lg:px-14 max-w-[1400px] mx-auto">

      {/* Top: image + intro */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center mb-10 lg:mb-20">
        <div className="reveal-left parallax-container" style={{ height: "clamp(260px, 40vw, 480px)" }}>
          <div ref={parallaxRef} className="parallax-inner">
            <img
              src="/12.jpg"
              alt="Premium luxury home"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <SectionLabel text="Why Choose Us" className="reveal" />
          <h2
            className="reveal d1 leading-[1.08] mb-5"
            style={{ fontFamily: "var(--font-display)", fontSize: "clamp(32px, 3.8vw, 58px)", fontWeight: 300, color: "var(--ink)" }}
          >
            The Flyfe<br />
            <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Difference</em>
          </h2>
          <p className="reveal d2 text-[14px] sm:text-[15px] leading-[1.85]" style={{ color: "var(--muted)", maxWidth: 460 }}>
            Six principles that define every square foot we build — and every
            relationship we build alongside it.
          </p>
        </div>
      </div>

      {/* Feature grid */}
      <div
        className="why-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border"
        style={{ borderColor: "var(--border2)", background: "var(--surface)", boxShadow: "0 4px 40px rgba(26,21,16,0.06)" }}
      >
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`why-item relative p-7 sm:p-9 lg:p-11 border-r border-b reveal ${["","d1","d2","d1","d2","d3"][i]}`}
            style={{ borderColor: "var(--border2)" }}
          >
            <span className="absolute top-5 right-5 text-[12px] tracking-[0.08em]" style={{ fontFamily: "var(--font-display)", color: "rgba(26,21,16,0.18)" }}>
              {f.num}
            </span>
            <div className="why-icon mb-5">{f.icon}</div>
            <h3 className="text-[18px] sm:text-[21px] font-medium mb-2.5 leading-[1.25]" style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}>
              {f.title}
            </h3>
            <p className="text-[13px] leading-[1.75]" style={{ color: "var(--muted)" }}>{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
