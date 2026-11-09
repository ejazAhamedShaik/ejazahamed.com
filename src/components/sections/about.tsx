import { about } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeading } from '@/components/ui/section-heading'

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="About"
        title="Crafting web products that scale."
      />

      <div className="grid md:grid-cols-[1fr_320px] gap-12 lg:gap-20">
        <div className="space-y-5">
          {about.paragraphs.map((p, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <p className="text-ink-dim text-base md:text-lg leading-8">{p}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3} direction="left">
          <div className="space-y-5">
            <h3 className="text-xs font-mono tracking-widest text-ink-ghost uppercase mb-4">
              What I bring
            </h3>
            <ul className="space-y-2" role="list">
              {about.traits.map(trait => (
                <li
                  key={trait}
                  className="flex items-center gap-3 text-sm text-ink-dim"
                >
                  <span className="w-1 h-1 rounded-full bg-violet flex-shrink-0" aria-hidden />
                  {trait}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
