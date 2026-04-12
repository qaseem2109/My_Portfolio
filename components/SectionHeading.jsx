/**
 * Reusable section heading component.
 * Renders a label, main title, and optional subtitle.
 */
export default function SectionHeading({ label, title, subtitle }) {
  return (
    <div className="mb-16">
      <span className="inline-flex items-center gap-2 mb-4">
        <span className="w-4 h-px bg-accent" />
        <span className="text-xs uppercase tracking-widest text-accent font-medium">{label}</span>
      </span>
      <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
        {title}
      </h2>
      {subtitle && (
        <p className="text-[#7A7875] max-w-lg text-base leading-relaxed">{subtitle}</p>
      )}
    </div>
  );
}
