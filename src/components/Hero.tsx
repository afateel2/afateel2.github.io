import { profile } from '../data/profile'
import Divider from './Divider'
import Reticle from './Reticle'
import gradPhoto from '../assets/grad-photo.jpg'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-[var(--color-line-faint)]">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8">
        <Divider className="h-full w-full" />
      </div>

      <div className="relative mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 pt-20 pb-28 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-8 md:px-10 md:pt-28">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-signal)]">
            {profile.location}, Computer Science
          </p>
          <h1 className="mt-4 font-[var(--font-display)] text-[2.5rem] leading-[1.05] tracking-tight text-[var(--color-ink)] md:text-[3.5rem]">
            {profile.name}
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-[var(--color-ink-muted)]">
            {profile.tagline}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={profile.cvPath}
              download
              className="rounded-sm border border-[var(--color-signal)] px-5 py-2.5 font-mono text-sm text-[var(--color-signal)] transition-colors hover:bg-[var(--color-signal)] hover:text-[var(--color-canvas)]"
            >
              Download CV
            </a>
            <a
              href="#work"
              className="font-mono text-sm text-[var(--color-ink-muted)] underline decoration-[var(--color-line)] underline-offset-4 transition-colors hover:text-[var(--color-ink)] hover:decoration-[var(--color-signal)]"
            >
              View work →
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-48 md:mx-0 md:w-full md:max-w-56">
          <Reticle />
          <img
            src={gradPhoto}
            alt="Abdullah Alfateel"
            className="relative aspect-[4/5] w-full object-cover grayscale contrast-110"
          />
          <p className="mt-3 text-right font-mono text-[10px] uppercase tracking-widest text-[var(--color-ink-faint)]">
            KFUPM, 2025
          </p>
        </div>
      </div>
    </section>
  )
}
