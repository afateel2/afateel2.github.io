const links = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-line-faint)] bg-[var(--color-canvas)]/85 backdrop-blur-sm">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <a
          href="#top"
          className="font-mono text-sm tracking-wide text-[var(--color-ink)] hover:text-[var(--color-signal)] transition-colors"
        >
          AA<span className="text-[var(--color-signal)]">.</span>
        </a>
        <ul className="flex items-center gap-6 font-mono text-xs uppercase tracking-widest text-[var(--color-ink-muted)]">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-[var(--color-signal)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
