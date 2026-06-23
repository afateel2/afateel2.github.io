interface WaveformProps {
  className?: string
  animated?: boolean
}

// EKG-shaped trace: flat baseline, small P wave, sharp QRS spike, T wave, repeated three times.
// A bright "comet" segment sweeps along this path continuously (see .heartbeat-sweep in index.css),
// like a heart monitor — not a one-time draw-in.
const PATH =
  'M0,40 L24,40 L34,36 L44,40 L54,40 L60,8 L66,68 L72,40 L82,40 L92,30 L102,40 L126,40 ' +
  'L150,40 L160,36 L170,40 L180,40 L186,8 L192,68 L198,40 L208,40 L218,30 L228,40 L252,40 ' +
  'L276,40 L286,36 L296,40 L306,40 L312,8 L318,68 L324,40 L334,40 L344,30 L354,40 L380,40'

export default function Waveform({ className = '', animated = true }: WaveformProps) {
  return (
    <svg
      viewBox="0 0 380 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {/* dim baseline trace, always visible */}
      <path
        d={PATH}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity={0.22}
      />
      {/* bright traveling segment, sweeps continuously like a heart monitor.
          pathLength=100 normalizes stroke-dash math to percentages regardless of real arc length. */}
      {animated && (
        <path
          d={PATH}
          fill="none"
          stroke="var(--color-signal)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          pathLength={100}
          className="heartbeat-sweep"
        />
      )}
    </svg>
  )
}
