"use client";
import { useRef, useState, FormEvent } from "react";
import { useParallax } from "@/hooks/useParallax";
import SectionLabel from "@/components/ui/SectionLabel";

export default function Contact() {
  const parallaxRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  useParallax(parallaxRef, 0.15);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="py-32 px-14 border-t"
      style={{ background: "var(--bg)", borderColor: "var(--border2)" }}
    >
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        {/* Image */}
        <div className="reveal-left parallax-container" style={{ height: "540px" }}>
          <div ref={parallaxRef} className="parallax-inner">
            <img
              src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?w=1200&q=85&auto=format&fit=crop"
              alt="Luxury resort Wayanad"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 right-0 pt-9 px-7 pb-7"
            style={{
              background: "linear-gradient(180deg, transparent 0%, rgba(10,8,5,0.7) 100%)",
            }}
          >
            <h3
              className="text-[26px] font-light text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Balhiz Vista Resort
            </h3>
            <p className="text-[12px] tracking-[0.06em] mt-1" style={{ color: "rgba(255,255,255,0.6)" }}>
              Banasura Sagar Lake · Wayanad, Kerala
            </p>
          </div>
        </div>

        {/* Form side */}
        <div>
          <SectionLabel text="Get In Touch" className="reveal" />
          <h2
            className="reveal d1 leading-[1.1] mb-3"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(36px, 3.5vw, 52px)",
              fontWeight: 300,
              color: "var(--ink)",
            }}
          >
            Begin Your
            <br />
            <em style={{ fontStyle: "italic", color: "var(--gold-dk)" }}>Investment</em>
            <br />
            Journey
          </h2>
          <p
            className="reveal d2 text-[14px] leading-[1.8] max-w-[420px] mb-10"
            style={{ color: "var(--muted)" }}
          >
            Whether you're a first-time investor, an NRI looking to reconnect with
            Kerala, or a hospitality group seeking resort land — we'd love to talk.
          </p>

          {submitted ? (
            <div className="text-center py-16">
              <svg className="mx-auto mb-4" width="52" height="52" viewBox="0 0 52 52" fill="none">
                <circle cx="26" cy="26" r="25" stroke="#C9A84C" strokeWidth="1.5" />
                <path d="M15 26l8 8 14-16" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p
                className="text-[24px] font-light"
                style={{ fontFamily: "var(--font-display)", color: "var(--ink)" }}
              >
                Thank you for your enquiry
              </p>
              <small className="block mt-2 text-[13px]" style={{ color: "var(--muted)" }}>
                Our team will reach out within 24 hours.
              </small>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <FormField label="Full Name">
                  <input className="form-control" type="text" placeholder="Your name" required />
                </FormField>
                <FormField label="Phone / WhatsApp">
                  <input className="form-control" type="tel" placeholder="+91 XXXXX XXXXX" />
                </FormField>
              </div>
              <FormField label="Email Address">
                <input className="form-control" type="email" placeholder="your@email.com" />
              </FormField>
              <FormField label="Interested In">
                <select className="form-control">
                  <option value="">Select a project or type</option>
                  {[
                    "Balhiz Vista Resort",
                    "The Palisade Villas",
                    "Verdant Heights Residences",
                    "Nilgiri Retreat",
                    "Land Investment",
                    "NRI Portfolio Package",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </FormField>
              <FormField label="Budget Range">
                <select className="form-control">
                  <option value="">Select your budget</option>
                  {[
                    "₹50L – ₹1 Crore",
                    "₹1 Crore – ₹3 Crore",
                    "₹3 Crore – ₹10 Crore",
                    "₹10 Crore +",
                  ].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </FormField>
              <FormField label="Message (Optional)">
                <textarea
                  className="form-control resize-y"
                  placeholder="Tell us about your requirements..."
                  style={{ minHeight: "100px" }}
                />
              </FormField>

              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.2em] uppercase py-[18px] mt-2 transition-all duration-300 hover:-translate-y-0.5 disabled:opacity-70"
                style={{ background: "var(--ink)", color: "var(--gold)" }}
              >
                {loading ? "Sending…" : "Submit Enquiry"}
                {!loading && (
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                )}
              </button>

              <a
                href="https://wa.me/919447000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.14em] uppercase py-3.5 mt-4 transition-all duration-300"
                style={{
                  border: "1px solid rgba(34,85,45,0.3)",
                  background: "rgba(34,85,45,0.07)",
                  color: "#1e5c2c",
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Chat on WhatsApp
              </a>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="block text-[9px] tracking-[0.22em] uppercase mb-2 font-medium"
        style={{ color: "var(--muted)" }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}
