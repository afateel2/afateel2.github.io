import { experience } from '../data/profile'
import SectionHeading from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import aramcoLogo from '../assets/aramco-logo.webp'

export default function Experience() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="experience" className="border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div ref={ref} className="reveal mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="03" title="Experience" />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-[7fr_5fr] md:gap-12">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)]">
                {experience.company}
              </h3>
              <span className="font-mono text-sm text-[var(--color-ink-faint)]">{experience.period}</span>
            </div>
            <p className="mt-1 font-mono text-sm uppercase tracking-widest text-[var(--color-signal)]">
              {experience.title}, {experience.location}
            </p>
            <ul className="mt-5 space-y-3 border-l border-[var(--color-line)] pl-5">
              {experience.points.map((point, i) => (
                <li key={i} className="text-base leading-relaxed text-[var(--color-ink-muted)]">
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative min-h-[200px]"
            style={{
              backgroundImage: `url(${aramcoLogo})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              opacity: 0.4,
              maskImage:
                'linear-gradient(to right, transparent, black 25%, black 75%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              maskComposite: 'intersect',
              WebkitMaskImage:
                'linear-gradient(to right, transparent, black 25%, black 75%, transparent), linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
              WebkitMaskComposite: 'source-in',
            }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  )
}
