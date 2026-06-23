import type { Visual } from '../data/projects'

const chartImages: Record<string, string> = {
  'eeg-model-accuracy.png': new URL('../assets/charts/eeg-model-accuracy.png', import.meta.url).href,
  'ai4i-eda.png': new URL('../assets/charts/ai4i-eda.png', import.meta.url).href,
  'uber-eda.png': new URL('../assets/charts/uber-eda.png', import.meta.url).href,
  'weather-forecast.png': new URL('../assets/charts/weather-forecast.png', import.meta.url).href,
  'chd-roc.png': new URL('../assets/charts/chd-roc.png', import.meta.url).href,
}

const screenshotImages: Record<string, string> = {
  'pentest-nmap.jpg': new URL('../assets/shots/pentest-nmap.jpg', import.meta.url).href,
  'sail-dashboard.jpg': new URL('../assets/shots/sail-dashboard.jpg', import.meta.url).href,
  'buildit-main.jpg': new URL('../assets/shots/buildit-main.jpg', import.meta.url).href,
  'roadsafety-home.jpg': new URL('../assets/shots/roadsafety-home.jpg', import.meta.url).href,
  'codvel-search.jpg': new URL('../assets/shots/codvel-search.jpg', import.meta.url).href,
}

export default function ProjectVisual({ visual }: { visual: Visual }) {
  if (visual.type === 'chart') {
    return (
      <figure className="overflow-hidden rounded-md border border-[var(--color-line)] bg-white">
        <img src={chartImages[visual.src]} alt={visual.alt} className="w-full" />
      </figure>
    )
  }

  if (visual.type === 'screenshot') {
    return (
      <figure className="overflow-hidden rounded-md border border-[var(--color-line)]">
        <img src={screenshotImages[visual.src]} alt={visual.alt} className="w-full" />
      </figure>
    )
  }

  if (visual.type === 'code') {
    return (
      <pre className="overflow-x-auto rounded-md border border-[var(--color-line)] bg-[var(--color-surface-1)] p-4 font-mono text-[11px] leading-relaxed text-[var(--color-ink-muted)]">
        <code>{visual.code}</code>
      </pre>
    )
  }

  return (
    <div className="flex aspect-[4/3] items-center justify-center rounded-md border border-dashed border-[var(--color-line)] bg-[var(--color-surface-1)] p-6 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-ink-faint)]">
        {visual.note}
      </p>
    </div>
  )
}
