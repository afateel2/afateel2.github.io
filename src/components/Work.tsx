import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { tracks } from '../data/tracks'
import { projects } from '../data/projects'
import SectionHeading from './SectionHeading'
import ProjectVisual from './ProjectVisual'

function TabBar({ active, onChange }: { active: string; onChange: (id: string) => void }) {
  return (
    <div className="mb-12 flex flex-wrap gap-1 border-b border-[var(--color-line-faint)]">
      {tracks.map((track) => (
        <button
          key={track.id}
          type="button"
          onClick={() => onChange(track.id)}
          className="tab-trigger relative px-3 py-3 font-mono text-xs uppercase tracking-widest md:px-4 md:text-sm lg:text-base"
          style={{ color: active === track.id ? 'var(--color-ink)' : 'var(--color-ink-faint)' }}
        >
          {track.label}
          {active === track.id && (
            <motion.span
              layoutId="tab-underline"
              className="absolute inset-x-0 -bottom-px h-[2px] bg-[var(--color-signal)]"
              transition={{ type: 'spring', stiffness: 500, damping: 35 }}
            />
          )}
        </button>
      ))}
    </div>
  )
}

function ProjectRow({ project, flip }: { project: (typeof projects)[number]; flip: boolean }) {
  const textBlock = (
    <div>
      <p className="font-mono text-[13px] uppercase tracking-widest text-[var(--color-signal)]">
        {project.tag}
      </p>
      <h3 className="mt-2 font-[var(--font-display)] text-[1.625rem] text-[var(--color-ink)] md:text-[2.25rem]">
        {project.title}
      </h3>
      <p className="mt-1 font-mono text-[13px] text-[var(--color-ink-faint)]">{project.period}</p>

      <p className="mt-4 text-lg leading-relaxed text-[var(--color-ink-muted)]">
        {project.summary}
      </p>

      <ul className="mt-4 space-y-2 border-l border-[var(--color-line)] pl-4">
        {project.detail.map((point, i) => (
          <li key={i} className="text-base leading-relaxed text-[var(--color-ink-muted)]">
            {point}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-sm border border-[var(--color-line)] px-2 py-1 font-mono text-sm text-[var(--color-ink-faint)]"
            >
              {tech}
            </span>
          ))}
        </div>
        {project.metric && (
          <span className="font-mono text-sm text-[var(--color-signal)]">{project.metric}</span>
        )}
      </div>

      {project.repo && (
        <a
          href={project.repo.url}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-sm border border-[var(--color-signal)] px-4 py-2 font-mono text-sm uppercase tracking-wide text-[var(--color-signal)] transition-colors hover:bg-[var(--color-signal)] hover:text-[var(--color-canvas)]"
        >
          <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" aria-hidden="true">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.5 7.5 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.5 0 1.09-.01 1.95-.01 2.22 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
          </svg>
          {project.repo.label}
        </a>
      )}
    </div>
  )

  const visualBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <ProjectVisual visual={project.visual} />
    </motion.div>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 gap-8 border-t border-[var(--color-line-faint)] py-14 md:gap-12 lg:gap-16"
      style={{ gridTemplateColumns: flip ? '7fr 5fr' : '5fr 7fr' }}
    >
      {flip ? (
        <>
          {visualBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {visualBlock}
        </>
      )}
    </motion.div>
  )
}

export default function Work() {
  const [active, setActive] = useState('featured')
  const filtered = projects.filter((p) => p.tracks.includes(active))

  return (
    <section id="work" className="relative overflow-hidden border-b border-[var(--color-line-faint)] py-20 md:py-28">
      <div className="ambient-field pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <SectionHeading index="02" title="Selected Work" />

        <TabBar active={active} onChange={setActive} />

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {filtered.map((project, i) => (
              <ProjectRow key={project.index} project={project} flip={i % 2 === 1} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
