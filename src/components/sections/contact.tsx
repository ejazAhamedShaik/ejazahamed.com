import { siteConfig } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeading } from '@/components/ui/section-heading'

const links = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    description: 'Best way to reach me',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ejaz-ahamed-shaik',
    href: siteConfig.linkedin,
    description: 'Professional profile',
    external: true,
  },
  {
    label: 'GitHub',
    value: 'github.com/ejaz-ahamed',
    href: siteConfig.github,
    description: 'Open source & projects',
    external: true,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Contact"
        title="Let's work together."
        description="Open to fully remote roles globally — US, Europe, Canada, Australia, Middle East, and senior roles in India. I respond to every message."
      />

      <div className="grid md:grid-cols-3 gap-4 max-w-3xl">
        {links.map((link, i) => (
          <FadeIn key={link.label} delay={i * 0.1}>
            <a
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex flex-col gap-1.5 p-5 rounded-2xl border border-edge bg-surface hover:border-violet/30 hover:bg-surface-2 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono tracking-widest text-violet uppercase">{link.label}</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  aria-hidden
                  className="text-ink-ghost group-hover:text-violet-light transition-colors"
                >
                  <path d="M2 10L10 2M10 2H4M10 2v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-sm text-ink font-medium truncate">{link.value}</span>
              <span className="text-xs text-ink-ghost">{link.description}</span>
            </a>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.4}>
        <div className="mt-12 p-6 rounded-2xl border border-edge-subtle bg-surface max-w-3xl">
          <p className="text-sm text-ink-dim leading-relaxed">
            <span className="text-ink font-medium">Currently available</span> for new opportunities.{' '}
            Whether you&apos;re a startup building a product or an enterprise team scaling a platform —
            let&apos;s build something great together.
          </p>
        </div>
      </FadeIn>
    </section>
  )
}
