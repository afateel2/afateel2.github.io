export interface Track {
  id: string
  channel: string
  label: string
}

export const tracks: Track[] = [
  { id: 'featured', channel: 'CH 1', label: 'Featured' },
  { id: 'ai-ml', channel: 'CH 2', label: 'AI / ML' },
  { id: 'swe', channel: 'CH 3', label: 'Software Eng.' },
  { id: 'security', channel: 'CH 4', label: 'Cybersec & Infra' },
]
