interface ReticleProps {
  className?: string
}

// Four corner brackets, like a viewfinder/instrument readout frame.
// Replaces a plain border — ties into the "Signal" instrumentation concept rather than decorating arbitrarily.
export default function Reticle({ className = '' }: ReticleProps) {
  const corner =
    'absolute h-4 w-4 border-[var(--color-signal)] md:h-5 md:w-5'
  return (
    <div className={`pointer-events-none absolute -inset-3 ${className}`} aria-hidden="true">
      <span className={`${corner} left-0 top-0 border-l border-t`} />
      <span className={`${corner} right-0 top-0 border-r border-t`} />
      <span className={`${corner} bottom-0 left-0 border-b border-l`} />
      <span className={`${corner} bottom-0 right-0 border-b border-r`} />
    </div>
  )
}
