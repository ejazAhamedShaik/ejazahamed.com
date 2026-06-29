import { experience } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { Tag } from '@/components/ui/tag'
import { SectionHeading } from '@/components/ui/section-heading'

export function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Experience"
        title="Where I've built things."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-[200px] lg:left-[240px] top-0 bottom-0 w-px bg-edge hidden md:block" aria-hidden />

        <div className="space-y-14">
          {experience.map((job, i) => (
            <FadeIn key={job.company} delay={i * 0.15}>
              <div className="md:grid md:grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-10">
                {/* Left: company info */}
                <div className="mb-4 md:mb-0 md:pr-8 md:text-right">
                  <div className="flex items-center gap-2 md:justify-end mb-1">
                    {job.current && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono text-emerald border border-emerald/20 bg-emerald/5 rounded-full px-2 py-0.5">
                        <span className="w-1 h-1 rounded-full bg-emerald animate-pulse" aria-hidden />
                        Current
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-semibold text-ink">{job.company}</h3>
                  <p className="text-sm text-ink-dim">{job.role}</p>
                  <p className="text-xs font-mono text-ink-ghost mt-1">{job.period}</p>
                  <p className="text-xs text-ink-ghost mt-0.5">{job.location}</p>
                </div>

                {/* Right: details */}
                <div className="relative md:pl-10">
                  {/* Timeline dot */}
                  <div
                    className="hidden md:block absolute left-0 top-1.5 w-2 h-2 rounded-full border-2 border-violet bg-void -translate-x-[4.5px]"
                    aria-hidden
                  />

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {job.tech.map(t => (
                      <Tag key={t} label={t} variant="default" size="sm" />
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3" role="list">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-3 text-sm text-ink-dim leading-relaxed">
                        <span className="text-violet flex-shrink-0 mt-0.5 text-xs">▸</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
