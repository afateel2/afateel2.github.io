import { profile } from '../data/profile'
import Divider from './Divider'

export default function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-8">
        <Divider className="h-full w-full" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">05, Contact</p>
        <h2 className="mt-4 max-w-lg font-[var(--font-display)] text-3xl leading-tight text-[var(--color-ink)] md:text-[2.5rem]">
          Open to Software Engineering and applied AI roles.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 font-mono text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="text-[var(--color-ink)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-signal)] hover:decoration-[var(--color-signal)]"
          >
            {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-ink-muted)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-signal)] hover:decoration-[var(--color-signal)]"
          >
            LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-[var(--color-ink-muted)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-signal)] hover:decoration-[var(--color-signal)]"
          >
            GitHub
          </a>
          <span className="text-[var(--color-ink-faint)]">{profile.phone}</span>
        </div>

        <p className="mt-16 font-mono text-xs text-[var(--color-ink-faint)]">
          {profile.name}, {profile.location}
        </p>
      </div>
    </footer>
  )
}
