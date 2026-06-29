interface TagProps {
  label: string
  variant?: 'default' | 'accent' | 'subtle'
  size?: 'sm' | 'md'
}

export function Tag({ label, variant = 'default', size = 'sm' }: TagProps) {
  const base = 'inline-flex items-center rounded-full font-mono tracking-wide border transition-colors'

  const sizes = {
    sm: 'text-[10px] px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  }

  const variants = {
    default: 'bg-surface border-edge text-ink-dim',
    accent: 'bg-violet-dim border-violet/20 text-violet-light',
    subtle: 'bg-transparent border-edge-subtle text-ink-ghost',
  }

  return (
    <span className={`${base} ${sizes[size]} ${variants[variant]}`}>
      {label}
    </span>
  )
}
