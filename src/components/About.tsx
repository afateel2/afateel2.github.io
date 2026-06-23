import { about, skillGroups } from '../data/profile'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="about" className="border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="01" title="About" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr]">
          <div className="space-y-5">
            {about.map((paragraph, i) => (
              <p key={i} className="text-lg leading-relaxed text-[var(--color-ink-muted)]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="space-y-5">
            {skillGroups.map((group) => (
              <div key={group.label} className="flex gap-4">
                <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)] pt-1">
                  {group.label}
                </span>
                <p className="text-sm leading-relaxed text-[var(--color-ink)]">
                  {group.items.join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
