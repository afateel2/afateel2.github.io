import { experience, certifications } from '../data/profile'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="03" title="Experience" />

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1fr]">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                {experience.company}
              </h3>
              <span className="font-mono text-xs text-[var(--color-ink-faint)]">{experience.period}</span>
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-signal)]">
              {experience.title} — {experience.location}
            </p>
            <ul className="mt-5 space-y-3 border-l border-[var(--color-line)] pl-5">
              {experience.points.map((point, i) => (
                <li key={i} className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
              Certifications
            </p>
            <ul className="mt-4 space-y-2.5">
              {certifications.map((cert) => (
                <li key={cert} className="flex items-start gap-2 text-sm text-[var(--color-ink-muted)]">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-signal)]" />
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
