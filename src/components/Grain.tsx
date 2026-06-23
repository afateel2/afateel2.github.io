// A fixed, full-viewport noise overlay for tactile depth — very low opacity, never interactive.
// Pure SVG feTurbulence, no image asset needed.
export default function Grain() {
  return (
    <svg
      className="pointer-events-none fixed inset-0 z-40 h-full w-full opacity-[0.035] mix-blend-overlay"
      aria-hidden="true"
    >
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" />
    </svg>
  )
}
