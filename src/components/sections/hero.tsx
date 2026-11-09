'use client'

import { motion } from 'framer-motion'
import { hero, siteConfig } from '@/lib/data'
import { useLetsTalk } from '@/components/features/lets-talk'

const ease = [0.21, 0.47, 0.32, 0.98] as const

function AnimItem({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function Hero() {
  const { open: openLetsTalk } = useLetsTalk()

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center px-6 md:px-12 pt-24 pb-16 max-w-6xl mx-auto"
      aria-label="Introduction"
    >
      {/* Background glow */}
      <div className="hero-glow absolute inset-0 pointer-events-none" aria-hidden />

      <div className="relative z-10 max-w-4xl">
        <AnimItem delay={0.1}>
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-edge bg-surface text-xs font-mono text-ink-dim">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald animate-pulse" aria-hidden />
            {hero.label}
          </div>
        </AnimItem>

        <AnimItem delay={0.2}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-none mb-6">
            <span className="gradient-text">{hero.name}</span>
            <span className="text-violet">.</span>
          </h1>
        </AnimItem>

        <AnimItem delay={0.35}>
          <p className="text-lg sm:text-xl md:text-2xl text-ink-dim leading-relaxed mb-4 max-w-2xl">
            {hero.headline}
          </p>
        </AnimItem>

        <AnimItem delay={0.45}>
          <p className="text-sm md:text-base text-ink-ghost max-w-xl mb-10 leading-relaxed">
            {hero.subheadline}
          </p>
        </AnimItem>

        <AnimItem delay={0.55}>
          <div className="flex flex-wrap items-center gap-3 mb-14">
            <button
              onClick={openLetsTalk}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-violet text-ink text-sm font-medium hover:bg-violet-light transition-colors duration-200"
            >
              Let&apos;s talk
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-edge text-ink-dim text-sm font-medium hover:text-ink hover:border-edge transition-colors duration-200"
            >
              View my work
            </a>
            <a href="/resume-fullstack.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-edge text-ink-dim text-sm font-medium hover:text-ink hover:border-violet/40 transition-colors duration-200">
              Full Stack résumé <span aria-hidden>↗</span>
            </a>
            <a href="/resume-frontend.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-edge text-ink-dim text-sm font-medium hover:text-ink hover:border-violet/40 transition-colors duration-200">
              Frontend résumé <span aria-hidden>↗</span>
            </a>
          </div>
        </AnimItem>

        <AnimItem delay={0.65}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-mono text-ink-ghost">
            <span className="flex items-center gap-1.5">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M6 1a3.5 3.5 0 0 1 3.5 3.5C9.5 7.5 6 11 6 11S2.5 7.5 2.5 4.5A3.5 3.5 0 0 1 6 1z" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="6" cy="4.5" r="1.2" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              {siteConfig.location}
            </span>
            <span className="hidden sm:block text-edge">|</span>
            <span>{siteConfig.availability}</span>
          </div>
        </AnimItem>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-ink-ghost"
        aria-hidden
      >
        <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-ink-ghost to-transparent"
        />
      </motion.div>
    </section>
  )
}
