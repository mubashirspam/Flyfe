"use client";
export default function Footer() {
  return (
    <footer style={{ background: "var(--ink)", color: "#F0EBE0" }}>

      {/* ── Pre-footer CTA band ──────────────────────────────────────────── */}
      <div
        className="px-5 sm:px-8 lg:px-14 py-16 sm:py-20 lg:py-24 border-b"
        style={{ borderColor: "rgba(201,168,76,0.15)" }}
      >
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 lg:gap-20">
          <div className="max-w-[560px]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px" style={{ background: "var(--gold)" }} />
              <span className="text-[9px] tracking-[0.28em] uppercase" style={{ color: "var(--gold)" }}>
                Start Your Journey
              </span>
            </div>
            <h2
              className="leading-[1.06] mb-5"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(34px, 4.5vw, 62px)",
                fontWeight: 300,
                color: "#F0EBE0",
              }}
            >
              Ready to Invest in{" "}
              <em style={{ fontStyle: "italic", color: "var(--gold-lt)" }}>Wayanad&apos;s</em>
              <br />Finest Properties?
            </h2>
            <p className="text-[13px] sm:text-[14px] leading-[1.85]" style={{ color: "rgba(240,235,224,0.5)" }}>
              Speak directly with our investment team — whether you&apos;re exploring
              resort land, luxury villas, or NRI portfolio packages.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full lg:w-auto">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 text-[11px] font-medium tracking-[0.18em] uppercase px-9 sm:px-11 py-4 sm:py-[18px] transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: "var(--gold)", color: "var(--ink)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--gold-lt)")}
              onMouseLeave={e => (e.currentTarget.style.background = "var(--gold)")}
            >
              Enquire Now
              <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                <path d="M1 5H15M15 5L11 1M15 5L11 9" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </a>
            <a
              href="https://wa.me/916282864667"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 text-[11px] font-light tracking-[0.18em] uppercase px-8 sm:px-10 py-[15px] sm:py-[17px] transition-all duration-300"
              style={{ border: "1px solid rgba(240,235,224,0.2)", color: "rgba(240,235,224,0.7)" }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--gold)"; e.currentTarget.style.color = "var(--gold-lt)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(240,235,224,0.2)"; e.currentTarget.style.color = "rgba(240,235,224,0.7)"; }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer grid ─────────────────────────────────────────────── */}
      <div
        className="px-5 sm:px-8 lg:px-14 py-14 sm:py-16 lg:py-20 border-b"
        style={{ borderColor: "rgba(201,168,76,0.15)" }}
      >
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand col — wider */}
          <div className="sm:col-span-2 lg:col-span-4">
            <div
              className="text-[26px] sm:text-[28px] font-light tracking-[0.06em] mb-1.5"
              style={{ fontFamily: "var(--font-display)", color: "#F0EBE0" }}
            >
              Flyfe <span style={{ color: "var(--gold)" }}>Developers</span>
            </div>
            <div className="text-[9px] tracking-[0.14em] uppercase mb-5" style={{ color: "rgba(240,235,224,0.3)" }}>
              Building Tomorrow&apos;s Landmarks
            </div>
            <p className="text-[13px] leading-[1.9]" style={{ color: "rgba(240,235,224,0.4)", maxWidth: 280 }}>
              Premium luxury real estate and resort developments rooted in the
              highlands of Wayanad, Kerala — since 2018.
            </p>

            {/* Contact block */}
            <div className="mt-8 space-y-3">
              <a
                href="tel:+916282864667"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-gold/20"
                  style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <svg width="13" height="13" viewBox="0 0 20 20" fill="none" style={{ color: "var(--gold)" }}>
                    <path d="M3 3h4l2 5-2.5 1.5a11 11 0 005 5L13 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span
                  className="text-[13px] transition-colors duration-300 group-hover:text-gold-lt"
                  style={{ color: "rgba(240,235,224,0.55)" }}
                >
                  +91 62828 64667
                </span>
              </a>
              <a
                href="mailto:contact@flyfedevelopers.com"
                className="flex items-center gap-3 group"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 group-hover:bg-gold/20"
                  style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <svg width="13" height="11" viewBox="0 0 20 16" fill="none" style={{ color: "var(--gold)" }}>
                    <rect x="1" y="1" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <path d="M1 4l9 6 9-6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <span
                  className="text-[13px] transition-colors duration-300 group-hover:text-gold-lt"
                  style={{ color: "rgba(240,235,224,0.55)" }}
                >
                  contact@flyfedevelopers.com
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ border: "1px solid rgba(201,168,76,0.25)" }}
                >
                  <svg width="11" height="14" viewBox="0 0 14 18" fill="none" style={{ color: "var(--gold)" }}>
                    <path d="M7 1C4.24 1 2 3.24 2 6c0 4 5 11 5 11s5-7 5-11c0-2.76-2.24-5-5-5z" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="7" cy="6" r="1.5" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                </div>
                <span className="text-[13px]" style={{ color: "rgba(240,235,224,0.55)" }}>
                  Kalpetta, Wayanad, Kerala — 673122
                </span>
              </div>
            </div>
          </div>

          {/* Projects */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4
              className="text-[9px] tracking-[0.26em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Projects
            </h4>
            <ul className="space-y-3.5">
              {[
                "Balhiz Vista Resort",
                "The Palisade Villas",
                "Verdant Heights",
                "Nilgiri Retreat",
              ].map(p => (
                <li key={p}>
                  <a
                    href="#projects"
                    className="text-[13px] leading-none transition-colors duration-300 hover:text-gold-lt"
                    style={{ color: "rgba(240,235,224,0.4)" }}
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4
              className="text-[9px] tracking-[0.26em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Company
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "About Us",    href: "#about"   },
                { label: "Why Flyfe",   href: "#whyus"   },
                { label: "NRI Corner",  href: "#contact" },
                { label: "Careers",     href: "#contact" },
              ].map(item => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] leading-none transition-colors duration-300 hover:text-gold-lt"
                    style={{ color: "rgba(240,235,224,0.4)" }}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="lg:col-span-2">
            <h4
              className="text-[9px] tracking-[0.26em] uppercase mb-6"
              style={{ color: "var(--gold)" }}
            >
              Legal
            </h4>
            <ul className="space-y-3.5">
              {["Privacy Policy", "RERA Compliance", "Terms of Use", "Disclaimer"].map(item => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[13px] leading-none transition-colors duration-300 hover:text-gold-lt"
                    style={{ color: "rgba(240,235,224,0.4)" }}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────────────────── */}
      <div className="px-5 sm:px-8 lg:px-14 py-5 sm:py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-[11px] tracking-[0.04em]" style={{ color: "rgba(240,235,224,0.2)" }}>
            © 2026 Flyfe Developers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <div className="w-1 h-1 rounded-full" style={{ background: "var(--gold)", opacity: 0.5 }} />
            <span className="text-[11px] tracking-[0.08em]" style={{ color: "rgba(240,235,224,0.2)" }}>
              Est. 2018 · Wayanad, Kerala
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
}
