interface WaveformProps {
  className?: string
  animated?: boolean
}

// A single recurring signal-trace motif, used sparingly (hero background, section dividers).
// Path approximates an EEG-like trace: irregular but rhythmic, not a clean sine wave.
const PATH =
  'M0,40 L20,40 L28,18 L36,58 L44,40 L60,40 L68,12 L76,40 L92,40 L100,52 L108,28 L116,40 L132,40 L140,20 L148,46 L156,40 L172,40 L180,15 L188,40 L204,40 L212,55 L220,25 L228,40 L244,40 L252,18 L260,40 L276,40 L284,48 L292,32 L300,40 L316,40 L324,16 L332,40 L348,40 L356,52 L364,40 L380,40'

export default function Waveform({ className = '', animated = true }: WaveformProps) {
  return (
    <svg
      viewBox="0 0 380 80"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d={PATH}
        fill="none"
        stroke="var(--color-signal)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength={1}
        className={animated ? 'signal-draw' : ''}
      />
    </svg>
  )
}
