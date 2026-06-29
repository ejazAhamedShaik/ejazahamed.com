import { skills } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeading } from '@/components/ui/section-heading'

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Skills"
        title="The tools I reach for."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skills.map((category, i) => (
          <FadeIn key={category.name} delay={i * 0.1}>
            <div className="p-5 rounded-2xl border border-edge bg-surface group hover:border-violet/20 transition-colors duration-300">
              <h3 className="text-xs font-mono tracking-widest text-violet uppercase mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map(skill => (
                  <span
                    key={skill}
                    className="text-xs px-2.5 py-1 rounded-full bg-surface-2 border border-edge-subtle text-ink-dim hover:text-ink hover:border-edge transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
