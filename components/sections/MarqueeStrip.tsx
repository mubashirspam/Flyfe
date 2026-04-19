const items = [
  "Luxury Living",
  "Premium Investments",
  "Wayanad's Finest",
  "Resort Developments",
  "NRI Investments",
  "Kerala Heritage",
];

const Dot = () => (
  <span
    className="w-1.5 h-1.5 rounded-full flex-shrink-0 inline-block"
    style={{ background: "var(--gold)" }}
  />
);

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      className="py-7 overflow-hidden whitespace-nowrap border-t border-b"
      style={{ borderColor: "var(--border2)", background: "var(--bg)" }}
    >
      <div className="marquee-inner" aria-hidden="true">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-[18px] px-10">
            <span
              className="text-[19px] italic font-light"
              style={{ fontFamily: "var(--font-display)", color: "var(--ink2)" }}
            >
              {item}
            </span>
            <Dot />
          </span>
        ))}
      </div>
    </div>
  );
}
