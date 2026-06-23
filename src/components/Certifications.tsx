import { certifications } from '../data/profile'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Certifications() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="certifications" className="border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="04" title="Certifications" />

        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {certifications.map((cert) => (
            <li key={cert} className="flex items-start gap-2 text-sm text-[var(--color-ink-muted)]">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
              {cert}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
