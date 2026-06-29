import { FadeIn } from './fade-in'

interface SectionHeadingProps {
  label: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export function SectionHeading({ label, title, description, align = 'left' }: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}>
      <FadeIn>
        <span className="font-mono text-xs tracking-widest text-violet uppercase">
          {label}
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-ink leading-tight">
          {title}
        </h2>
      </FadeIn>
      {description && (
        <FadeIn delay={0.2}>
          <p className="text-ink-dim text-base md:text-lg max-w-2xl leading-relaxed">
            {description}
          </p>
        </FadeIn>
      )}
    </div>
  )
}
