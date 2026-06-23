interface SectionHeadingProps {
  index: string
  title: string
}

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-[var(--color-signal)]">{index}</span>
      <h2 className="font-[var(--font-display)] text-2xl text-[var(--color-ink)] md:text-[2rem]">
        {title}
      </h2>
      <span className="h-px flex-1 bg-[var(--color-line)]" aria-hidden="true" />
    </div>
  )
}
