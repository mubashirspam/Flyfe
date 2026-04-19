interface SectionLabelProps {
  text: string;
  className?: string;
}

export default function SectionLabel({ text, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3.5 mb-6 ${className}`}>
      <div className="w-9 h-px bg-gold flex-shrink-0" />
      <span
        className="text-[10px] tracking-[0.24em] uppercase font-medium text-gold-dk"
      >
        {text}
      </span>
    </div>
  );
}
