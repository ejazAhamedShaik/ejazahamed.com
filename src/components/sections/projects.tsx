import { projects } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { Tag } from '@/components/ui/tag'
import { SectionHeading } from '@/components/ui/section-heading'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Projects"
        title="Things I've shipped."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => (
          <FadeIn key={project.name} delay={i * 0.1}>
            <article className="p-6 md:p-8 rounded-2xl border border-edge bg-surface hover:border-violet/20 transition-colors duration-300 h-full flex flex-col">
              <div className="flex items-start justify-between gap-4 mb-4">
                <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                <div className="w-8 h-8 rounded-xl bg-violet-dim border border-violet/20 flex items-center justify-center flex-shrink-0" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-light" />
                  </svg>
                </div>
              </div>

              <p className="text-sm text-ink-dim leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-6 flex-1" role="list">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-ink-dim leading-relaxed">
                    <span className="text-violet flex-shrink-0 mt-0.5 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-edge-subtle">
                {project.tech.map(t => (
                  <Tag key={t} label={t} variant="accent" size="sm" />
                ))}
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
