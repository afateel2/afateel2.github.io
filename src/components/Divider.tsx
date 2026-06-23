interface DividerProps {
  className?: string
}

// Scrolling name marquee used as the signature divider strip at Hero and Contact.
// Content is rendered twice back-to-back so translateX(-50%) loops seamlessly,
// the two copies must stay pixel-identical for the loop to be jitter-free.
const REPEAT_COUNT = 20

export default function Divider({ className = '' }: DividerProps) {
  const repeat = Array.from({ length: REPEAT_COUNT })

  return (
    <div className={`flex items-center overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee-track flex h-full shrink-0 items-center">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex h-full shrink-0 items-center">
            {repeat.map((_, i) => (
              <span
                key={i}
                className="px-3 font-mono text-sm font-medium tracking-widest whitespace-nowrap"
                style={{ color: i % 2 === 0 ? '#ffffff' : 'var(--color-signal)' }}
              >
                ABDULLAH ALFATEEL //
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
