const cells = [
  {
    img: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80&auto=format&fit=crop",
    label: "Pool & Leisure",
    tall: true,
  },
  {
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&q=80&auto=format&fit=crop",
    label: "Villa Exterior",
    tall: false,
  },
  {
    img: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&q=80&auto=format&fit=crop",
    label: "Architecture",
    tall: false,
  },
  {
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80&auto=format&fit=crop",
    label: "Interior Design",
    tall: false,
  },
  {
    img: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=600&q=80&auto=format&fit=crop",
    label: "Aerial — Wayanad",
    tall: false,
  },
];

export default function ImageMosaic() {
  return (
    <div className="image-mosaic">
      {cells.map((cell) => (
        <div key={cell.label} className={`mosaic-cell ${cell.tall ? "tall" : ""}`}>
          <img src={cell.img} alt={cell.label} loading="lazy" />
          <div
            className="absolute bottom-3.5 left-3.5 text-[9px] tracking-[0.2em] uppercase px-2.5 py-1 backdrop-blur-sm"
            style={{
              color: "rgba(255,255,255,0.7)",
              background: "rgba(10,8,5,0.45)",
            }}
          >
            {cell.label}
          </div>
        </div>
      ))}
    </div>
  );
}
