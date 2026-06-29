import { siteConfig } from '@/lib/data'

export function Footer() {
  return (
    <footer className="border-t border-edge-subtle mt-24">
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-ink-ghost text-sm font-mono">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
        <div className="flex items-center gap-6">
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-ghost hover:text-ink-dim text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-ghost hover:text-ink-dim text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-ink-ghost hover:text-ink-dim text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
