import { certifications } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { SectionHeading } from '@/components/ui/section-heading'

const AwardIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <path d="M8 1l1.8 3.6L14 5.4l-3 2.9.7 4.1L8 10.4l-3.7 2 .7-4.1L2 5.4l4.2-.8L8 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
  </svg>
)

const CertIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
    <rect x="2" y="3" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
    <path d="M5 7h6M5 9.5h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
  </svg>
)

export function Certifications() {
  const awards = certifications.filter(c => c.type === 'award')
  const certs = certifications.filter(c => c.type === 'certification')

  return (
    <section id="certifications" className="py-20 md:py-32 px-6 md:px-12 max-w-6xl mx-auto">
      <SectionHeading
        label="Recognition"
        title="Awards & certifications."
      />

      <div className="space-y-10">
        {awards.length > 0 && (
          <div>
            <h3 className="text-xs font-mono tracking-widest text-ink-ghost uppercase mb-5">Awards</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {awards.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-edge bg-surface hover:border-violet/20 transition-colors duration-300">
                    <div className="w-9 h-9 rounded-lg bg-violet-dim border border-violet/20 flex items-center justify-center flex-shrink-0 text-violet-light">
                      <AwardIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      {item.issuer && (
                        <p className="text-xs text-ink-ghost mt-0.5 font-mono">{item.issuer}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}

        {certs.length > 0 && (
          <div>
            <h3 className="text-xs font-mono tracking-widest text-ink-ghost uppercase mb-5">Certifications</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certs.map((item, i) => (
                <FadeIn key={item.name} delay={i * 0.1}>
                  <div className="flex items-start gap-4 p-5 rounded-xl border border-edge bg-surface hover:border-violet/20 transition-colors duration-300">
                    <div className="w-9 h-9 rounded-lg bg-surface-2 border border-edge-subtle flex items-center justify-center flex-shrink-0 text-ink-dim">
                      <CertIcon />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-ink">{item.name}</p>
                      {item.issuer && (
                        <p className="text-xs text-ink-ghost mt-0.5 font-mono">{item.issuer}</p>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
