export default function Footer() {
  return (
    <footer className="bg-ink px-14 py-14" style={{ background: "var(--ink)" }}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/[0.08]">
          {/* Brand */}
          <div>
            <div
              className="text-[24px] font-medium tracking-[0.06em] text-[#F0EBE0]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Flyfe <span className="text-gold">Developers</span>
            </div>
            <div className="text-[11px] tracking-[0.12em] text-white/35 mt-1.5">
              Building Tomorrow's Landmarks
            </div>
            <p className="text-[13px] text-white/40 leading-7 mt-4 max-w-[220px]">
              Premium luxury real estate and resort developments rooted in the
              highlands of Wayanad, Kerala.
            </p>
          </div>

          {/* Projects */}
          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-gold mb-5">
              Projects
            </h4>
            <ul className="space-y-2.5">
              {[
                "Balhiz Vista Resort",
                "The Palisade Villas",
                "Verdant Heights",
                "Nilgiri Retreat",
              ].map((p) => (
                <li key={p}>
                  <a
                    href="#projects"
                    className="text-[13px] text-white/45 transition-colors hover:text-gold"
                  >
                    {p}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-gold mb-5">
              Company
            </h4>
            <ul className="space-y-2.5">
              {["About Us", "Why Flyfe", "Careers", "NRI Corner"].map((item) => (
                <li key={item}>
                  <a
                    href="#about"
                    className="text-[13px] text-white/45 transition-colors hover:text-gold"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] tracking-[0.22em] uppercase text-gold mb-5">
              Contact
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "+91 94470 XXXXX", href: "tel:+919447000000" },
                { label: "invest@flyfe.in", href: "mailto:invest@flyfe.in" },
                { label: "Kalpetta, Wayanad", href: "#contact" },
                { label: "Kerala — 673122", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[13px] text-white/45 transition-colors hover:text-gold"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-wrap justify-between items-center gap-3">
          <p className="text-[11px] text-white/25 tracking-[0.04em]">
            © 2026 Flyfe Developers Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "RERA Compliance", "Disclaimer"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[11px] text-white/25 transition-colors hover:text-gold"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
