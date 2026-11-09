'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { projects, type Project } from '@/lib/data'
import { FadeIn } from '@/components/ui/fade-in'
import { Tag } from '@/components/ui/tag'
import { SectionHeading } from '@/components/ui/section-heading'

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    if (!selectedProject) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelectedProject(null)
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', closeOnEscape)
      document.body.style.overflow = ''
    }
  }, [selectedProject])

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
                <div>
                  <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                  {project.links && <ProjectLinks links={project.links} compact />}
                  <ProjectTech tech={project.tech} />
                </div>
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="w-8 h-8 rounded-xl bg-violet-dim border border-violet/20 flex items-center justify-center flex-shrink-0 text-violet-light hover:bg-violet/20 transition-colors"
                  aria-label={`View details for ${project.name}`}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-violet-light" />
                  </svg>
                </button>
              </div>

              <p className="text-sm text-ink-dim leading-relaxed mb-5">{project.description}</p>

              <ul className="space-y-2 mb-3" role="list">
                {project.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2.5 text-sm text-ink-dim leading-relaxed">
                    <span className="text-violet flex-shrink-0 mt-0.5 text-xs">▸</span>
                    {h}
                  </li>
                ))}
              </ul>

              <button type="button" onClick={() => setSelectedProject(project)} className="self-start mt-auto pt-4 text-sm font-medium text-violet-light hover:text-ink transition-colors">
                Project details <span aria-hidden>↗</span>
              </button>

            </article>
          </FadeIn>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}

function ProjectLinks({ links, compact = false }: { links: NonNullable<Project['links']>; compact?: boolean }) {
  return (
    <div className={`flex flex-wrap gap-x-3 gap-y-1 ${compact ? 'mt-1.5' : 'mt-4'}`}>
      {links.map(link => (
        <a key={link.label} href={link.href} target="_blank" rel="noreferrer" onClick={event => event.stopPropagation()} className="text-xs text-violet-light hover:text-ink transition-colors underline underline-offset-4">
          {link.label}
        </a>
      ))}
    </div>
  )
}

function ProjectTech({ tech }: { tech: Project['tech'] }) {
  return (
    <div className="flex flex-wrap gap-1.5 mt-4">
      {tech.map(item => <Tag key={item} label={item} variant="accent" size="sm" />)}
    </div>
  )
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8" role="presentation" onMouseDown={event => event.target === event.currentTarget && onClose()}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 bg-void/80 backdrop-blur-sm"
        onMouseDown={onClose}
        aria-hidden="true"
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-dialog-title"
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-edge bg-surface p-6 shadow-2xl md:p-8"
      >
        <button type="button" onClick={onClose} className="absolute right-5 top-5 text-2xl leading-none text-ink-dim hover:text-ink" aria-label="Close project details">×</button>
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-violet-light">Project details</p>
        <h3 id="project-dialog-title" className="pr-8 text-2xl font-semibold text-ink">{project.name}</h3>
        <ProjectLinks links={project.links ?? []} />
        <ProjectTech tech={project.tech} />
        <p className="mt-6 text-sm leading-relaxed text-ink-dim">{project.description}</p>
        <ul className="mt-6 space-y-3" role="list">
          {project.highlights.map((highlight, index) => <li key={index} className="flex gap-3 text-sm leading-relaxed text-ink-dim"><span className="mt-1 text-violet">▸</span>{highlight}</li>)}
        </ul>
      </motion.div>
    </div>
  )
}
