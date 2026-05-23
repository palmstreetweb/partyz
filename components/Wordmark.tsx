type WordmarkProps = {
  /** Text to render. */
  children: string;
  /** Extra classes on the heading (font-size lives here). */
  className?: string;
  /** Number of cream "depth" layers stacked between front face and outline. */
  depth?: number;
  /** Front fill (top face). */
  frontColor?: string;
  /** Depth-side fill (the cream slab visible between front and far edge). */
  depthColor?: string;
  /** Outline color (single layer at the far corner of the extrusion). */
  outlineColor?: string;
  /** Override the wrapping element (default h1; pass "span" for inline use). */
  as?: "h1" | "h2" | "span" | "div";
};

/**
 * 3D extruded wordmark, built from many stacked text-shadows.
 *
 * The stack is: <depth> layers of `depthColor` at 1..depth px offsets to build a
 * solid slab of depth, then one final layer of `outlineColor` at depth+1 px to
 * stroke the far edge. Front face is `frontColor` (the `color` property).
 *
 * Extrusion direction is bottom-right.
 */
export function Wordmark({
  children,
  className = "",
  depth = 12,
  frontColor = "var(--color-purple)",
  depthColor = "var(--color-cream)",
  outlineColor = "var(--color-purple)",
  as: Tag = "h1",
}: WordmarkProps) {
  const slab = Array.from(
    { length: depth },
    (_, i) => `${i + 1}px ${i + 1}px 0 ${depthColor}`,
  );
  slab.push(`${depth + 1}px ${depth + 1}px 0 ${outlineColor}`);
  return (
    <Tag
      className={`font-display leading-[0.85] tracking-[-0.02em] ${className}`}
      style={{ color: frontColor, textShadow: slab.join(", ") }}
    >
      {children}
    </Tag>
  );
}
