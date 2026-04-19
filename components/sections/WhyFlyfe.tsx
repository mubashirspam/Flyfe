"use client";
import { useRef } from "react";
import { useParallax } from "@/hooks/useParallax";
import SectionLabel from "@/components/ui/SectionLabel";

const features = [
  {
    num: "01",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2L2 7v11h6v-6h4v6h6V7L10 2z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: "Prime Locations",
    desc: "Every project is carefully sited near water, within nature reserves or scenic highlands — ensuring long-term appreciation and an unmatched lifestyle quotient.",
  },
  {
    num: "02",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M10 2l2 6h6l-5 3.6 2 6L10 14l-5 3.6 2-6L2 8h6l2-6z" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
    title: "Trusted Quality",
    desc: "Certified contractors, premium materials, and a zero-compromise quality protocol — every structure is built to last and exceed regulatory standards.",
  },
  {
    num: "03",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 10a7 7 0 1014 0A7 7 0 003 10zm7-4v4l3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "On-Time Delivery",
    desc: "We have delivered 100% of our projects within committed timelines — a track record that speaks to our operational discipline and respect for your capital.",
  },
  {
    num: "04",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M3 17l4-4 3 3 6-10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Strong ROI",
    desc: "Wayanad's tourism boom and Kerala's NRI investment appetite make our projects consistently outperform regional real estate benchmarks by 2–3×.",
  },
  {
    num: "05",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.2" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Eco Commitment",
    desc: "Sustainable construction practices, rainwater harvesting, and minimal forest footprint — building in harmony with Wayanad's UNESCO-recognised biodiversity.",
  },
  {
    num: "06",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
        <path d="M4 4h12v12H4V4z" stroke="currentColor" strokeWidth="1.2" />
        <path d="M8 4V2M12 4V2M4 8h12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    title: "Legal Clarity",
    desc: "Clean titles, RERA compliance, and full documentation support — especially for NRI buyers navigating FEMA regulations and repatriation of returns.",
  },
];

export default function WhyFlyfe() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  useParallax(parallaxRef, 0.16);

  return (
    <section id="whyus" className="py-32 px-14 max-w-[1400px] mx-auto">
      {/* Top: Image + Text */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
        <div className="reveal-left parallax-container" style={{ height: "480px" }}>
          <div ref={parallaxRef} className="parallax-inner">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=85&auto=format&fit=crop"
              alt="Premium luxury home"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div>
          <SectionLabel text="Why Choose Us" className="reveal" />
          <h2
            className="reveal d1 leading-[1.08] mb-6"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(38px, 3.8vw, 58px)",
              fontWeight: 300,
              color: "var(--ink)",
            }}
          >
            The Flyfe
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Difference</em>
          </h2>
          <p
            className="reveal d2 text-[15px] leading-[1.85] max-w-[460px]"
            style={{ color: "var(--muted)" }}
          >
            Six principles that define every square foot we build — and every
            relationship we build alongside it. We believe luxury and integrity must
            coexist.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div
        className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border"
        style={{
          borderColor: "var(--border2)",
          background: "var(--surface)",
          boxShadow: "0 4px 40px rgba(26,21,16,0.06)",
        }}
      >
        {features.map((f, i) => (
          <div
            key={f.num}
            className={`why-item relative p-11 border-r border-b reveal ${["", "d1", "d2", "d1", "d2", "d3"][i]}`}
            style={{ borderColor: "var(--border2)" }}
          >
            <span
              className="absolute top-6 right-6 text-[13px] tracking-[0.08em]"
              style={{
                fontFamily: "var(--font-display)",
                color: "rgba(26,21,16,0.2)",
              }}
            >
              {f.num}
            </span>
            <div className="why-icon mb-6">{f.icon}</div>
            <h3
              className="text-[21px] font-medium mb-3 leading-[1.25]"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
            >
              {f.title}
            </h3>
            <p className="text-[13.5px] leading-[1.75]" style={{ color: "var(--muted)" }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
