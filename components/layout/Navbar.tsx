"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[200] flex items-center justify-between transition-all duration-500 ${
        scrolled
          ? "px-5 sm:px-8 lg:px-14 py-3 bg-[rgba(250,248,244,0.96)] backdrop-blur-md shadow-[0_1px_0_rgba(26,21,16,0.08),0_8px_32px_rgba(26,21,16,0.06)]"
          : "px-5 sm:px-8 lg:px-14 py-5"
      }`}
    >
      {/* Logo */}
      <a href="#" className="flex items-center gap-2.5 leading-none">
        <Image
          src="/logo.png"
          alt="Flyfe logo"
          width={50}
          height={50}
         
          style={{ width: 50, height: 50 }}
          priority
        />
        <div className="flex flex-col gap-0.5">
          <span
            className={`nav-wordmark text-[20px] tracking-[0.06em] font-medium leading-none transition-colors duration-400 ${
              scrolled ? "text-ink" : "text-white"
            }`}
            style={{ fontFamily: "var(--font-display)" }}
          >
            Flyfe
          </span>
          <span
            className={`nav-sub text-[8px] tracking-[0.24em] uppercase leading-none transition-colors duration-400 ${
              scrolled ? "text-gold-dk" : "text-white/65"
            }`}
          >
            Developers · Wayanad
          </span>
        </div>
      </a>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-8 lg:gap-10 list-none">
        {["About", "Projects", "Why Us", "Contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className={`nav-link text-[11px] tracking-[0.14em] uppercase font-normal ${
                scrolled ? "text-muted" : "text-white/85"
              }`}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA — desktop */}
      <a
        href="#contact"
        className="hidden md:inline-block text-[11px] tracking-[0.14em] uppercase font-medium text-ink bg-gold px-5 lg:px-6 py-2.5 transition-all duration-300 hover:bg-gold-lt hover:-translate-y-px"
      >
        Enquire Now
      </a>

      {/* Hamburger */}
      <button
        className="flex md:hidden flex-col gap-[5px] w-[24px] p-1"
        aria-label="Menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className={`block h-[1.5px] transition-colors duration-300 ${
              scrolled ? "bg-ink" : "bg-white"
            }`}
          />
        ))}
      </button>

      {/* Mobile drawer */}
      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(250,248,244,0.98)] backdrop-blur-md border-t border-[var(--border2)] py-6 px-5 flex flex-col gap-4 md:hidden shadow-lg">
          {["About", "Projects", "Why Us", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "")}`}
              className="text-[11px] tracking-[0.14em] uppercase text-muted hover:text-gold transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 text-[11px] tracking-[0.14em] uppercase font-medium text-ink bg-gold px-5 py-3 text-center"
            onClick={() => setMenuOpen(false)}
          >
            Enquire Now
          </a>
        </div>
      )}
    </nav>
  );
}
