import { useRef, useState } from 'react'
import { tracks } from '../data/tracks'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import { useCablePath } from '../hooks/useCablePath'
import { useReveal } from '../hooks/useReveal'

function Jack({
  label,
  sub,
  active,
  onClick,
  innerRef,
}: {
  label: string
  sub: string
  active: boolean
  onClick?: () => void
  innerRef: React.RefObject<HTMLButtonElement | null>
}) {
  const isButton = typeof onClick === 'function'
  const Tag = isButton ? 'button' : 'div'
  return (
    <Tag
      ref={innerRef as never}
      type={isButton ? 'button' : undefined}
      onClick={onClick}
      className={`group flex flex-col items-center gap-2 ${isButton ? 'cursor-pointer' : ''}`}
      aria-pressed={isButton ? active : undefined}
    >
      <span
        className={`jack-ring is-${active ? 'lit' : 'unlit'} flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--color-line)] bg-[var(--color-canvas)] transition-transform group-hover:scale-105 md:h-14 md:w-14`}
      >
        <span className="h-3 w-3 rounded-full bg-[var(--color-surface-3)]" />
      </span>
      <span className="flex items-center gap-1.5">
        <span className={`led ${active ? 'is-lit' : ''}`} />
        <span className="font-mono text-[11px] uppercase tracking-widest text-[var(--color-ink-muted)]">
          {sub}
        </span>
      </span>
      <span className="font-[var(--font-display)] text-sm text-[var(--color-ink)]">{label}</span>
    </Tag>
  )
}

export default function PatchBay() {
  const [active, setActive] = useState('featured')
  const containerRef = useRef<HTMLDivElement>(null)
  const monitorRef = useRef<HTMLButtonElement>(null)
  const channelRefs = useRef<Record<string, React.RefObject<HTMLButtonElement | null>>>(
    Object.fromEntries(tracks.map((t) => [t.id, { current: null }]))
  )

  const activeRef = channelRefs.current[active]
  const path = useCablePath(containerRef, activeRef, monitorRef, [active])

  const filtered = projects.filter((p) => p.tracks.includes(active))
  const revealRef = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="02" title="Patch Bay — Selected Work" />
        <p className="-mt-6 mb-10 max-w-lg text-sm leading-relaxed text-[var(--color-ink-faint)]">
          Patch a channel into the monitor to route its work below. Featured is the recommended
          mix; the rest are organised by what I actually studied and built it with.
        </p>

        <div ref={containerRef} className="panel relative overflow-hidden rounded-md px-6 pt-10 pb-8 md:px-10">
          <span className="screw left-2 top-2" />
          <span className="screw right-2 top-2" />
          <span className="screw bottom-2 left-2" />
          <span className="screw bottom-2 right-2" />

          <svg className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true">
            {path && (
              <path
                d={path}
                fill="none"
                stroke="var(--color-signal)"
                strokeWidth={2.5}
                strokeLinecap="round"
                opacity={0.85}
              />
            )}
          </svg>

          <div className="relative flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:justify-between">
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
              {tracks.map((track) => (
                <Jack
                  key={track.id}
                  label={track.label}
                  sub={track.channel}
                  active={active === track.id}
                  onClick={() => setActive(track.id)}
                  innerRef={channelRefs.current[track.id]}
                />
              ))}
            </div>

            <Jack label="Monitor" sub="OUT" active innerRef={monitorRef} />
          </div>
        </div>

        <div ref={revealRef} className="reveal mt-12">
          {filtered.map((project) => (
            <article
              key={project.index}
              className="border-t border-[var(--color-line-faint)] py-10 first:border-t-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-[var(--font-display)] text-xl text-[var(--color-ink)] md:text-2xl">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-[var(--color-ink-faint)]">{project.period}</span>
              </div>
              <p className="mt-1 font-mono text-xs uppercase tracking-widest text-[var(--color-signal)]">
                {project.tag}
              </p>

              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[var(--color-ink-muted)]">
                {project.summary}
              </p>

              <ul className="mt-5 space-y-2.5 border-l border-[var(--color-line)] pl-5">
                {project.detail.map((point, i) => (
                  <li key={i} className="text-sm leading-relaxed text-[var(--color-ink-muted)]">
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-sm border border-[var(--color-line)] px-2 py-1 font-mono text-[11px] text-[var(--color-ink-faint)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.metric && (
                  <span className="font-mono text-xs text-[var(--color-signal)]">{project.metric}</span>
                )}
                {project.repo && (
                  <a
                    href={project.repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-xs text-[var(--color-ink-muted)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-signal)]"
                  >
                    {project.repo.label} →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
