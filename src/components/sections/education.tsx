import { education } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeading } from '@/components/ui/section-heading'

export function Education() {
  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Education"
        title="Where I sharpened my craft."
      />

      <div className="grid md:grid-cols-2 gap-5">
        {education.map((item, i) => (
          <FadeIn key={item.degree} delay={i * 0.15}>
            <div className="p-6 md:p-8 rounded-2xl border border-edge bg-surface hover:border-violet/20 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div
                  className="w-10 h-10 rounded-xl bg-violet-dim border border-violet/20 flex items-center justify-center flex-shrink-0 text-violet-light font-semibold text-sm"
                  aria-hidden
                >
                  {item.institution.charAt(0)}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-ink leading-snug">{item.degree}</h3>
                  <p className="text-sm text-ink-dim mt-0.5">{item.institution}</p>
                  <p className="text-xs font-mono text-ink-ghost mt-1">{item.period}</p>
                </div>
              </div>

              {item.highlights && (
                <ul className="space-y-1.5 mt-4 pt-4 border-t border-edge-subtle" role="list">
                  {item.highlights.map(h => (
                    <li key={h} className="flex items-center gap-2 text-xs text-ink-dim">
                      <span className="w-1 h-1 rounded-full bg-ink-ghost flex-shrink-0" aria-hidden />
                      {h}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
