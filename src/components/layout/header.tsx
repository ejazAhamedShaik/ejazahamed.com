'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '@/lib/data'
import { useLetsTalk } from '@/components/features/lets-talk'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Header() {
  const { open: openLetsTalk } = useLetsTalk()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const ids = navLinks.map(l => l.href.slice(1))
    const observers: IntersectionObserver[] = []

    ids.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-void/80 backdrop-blur-xl border-b border-edge-subtle' : ''
        }`}
      >
        <nav
          className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between h-16"
          aria-label="Main navigation"
        >
          <a
            href="#"
            className="font-mono text-sm font-semibold text-ink hover:text-violet-light transition-colors"
            aria-label="Back to top"
          >
            {siteConfig.shortName.split(' ').map(w => w[0]).join('')}
            <span className="text-violet">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map(link => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-3 py-1.5 text-sm transition-colors rounded-md ${
                    activeSection === link.href.slice(1)
                      ? 'text-ink'
                      : 'text-ink-dim hover:text-ink'
                  }`}
                >
                  {activeSection === link.href.slice(1) && (
                    <motion.span
                      layoutId="active-pill"
                      className="absolute inset-0 rounded-md bg-surface-2 border border-edge"
                      style={{ zIndex: -1 }}
                    />
                  )}
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={openLetsTalk}
            className="hidden md:inline-flex items-center gap-2 text-sm px-4 py-1.5 rounded-full border border-edge text-ink-dim hover:text-ink hover:border-violet/40 transition-all duration-200"
          >
            Let&apos;s talk
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 7 : 0 }}
              className="block w-5 h-px bg-ink"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-5 h-px bg-ink"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -7 : 0 }}
              className="block w-5 h-px bg-ink"
            />
          </button>
        </nav>
      </header>

      {/* Mobile menu — rendered as a sibling outside <header> so the header's
          backdrop-filter does not establish a containing block for this fixed element */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40 flex flex-col px-6 pt-24 pb-12"
            style={{ backgroundColor: '#0d0d14' }}
          >
            <ul className="flex flex-col gap-2" role="list">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-2xl font-semibold text-ink-dim hover:text-ink transition-colors border-b border-edge-subtle"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto">
              <button
                onClick={() => { setMenuOpen(false); openLetsTalk() }}
                className="inline-flex items-center justify-center w-full py-3 rounded-full border border-violet/30 text-violet-light font-medium mt-8 hover:bg-violet-dim transition-colors"
              >
                Let&apos;s talk
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
