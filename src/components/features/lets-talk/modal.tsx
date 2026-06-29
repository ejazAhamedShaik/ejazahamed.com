'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useLetsTalk } from './context'

const INQUIRY_TYPES = [
  'Job opportunity',
  'Freelance project',
  'Collaboration',
  'Just saying hi',
  'Other',
]

type FormState = 'idle' | 'sending' | 'success' | 'error'

const ease = [0.21, 0.47, 0.32, 0.98] as const

export function LetsTalkModal() {
  const { isOpen, close } = useLetsTalk()
  const formRef = useRef<HTMLFormElement>(null)
  const firstFieldRef = useRef<HTMLInputElement>(null)
  const [formState, setFormState] = useState<FormState>('idle')

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      const t = setTimeout(() => firstFieldRef.current?.focus(), 150)
      return () => clearTimeout(t)
    }
    document.body.style.overflow = ''
  }, [isOpen])

  useEffect(() => {
    return () => { document.body.style.overflow = '' }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') close() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [close])

  // Reset form state when modal closes
  useEffect(() => {
    if (!isOpen) setTimeout(() => setFormState('idle'), 300)
  }, [isOpen])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!formRef.current) return
    setFormState('sending')
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
      )
      setFormState('success')
      formRef.current.reset()
    } catch {
      setFormState('error')
    }
  }

  const inputClass =
    'px-3 py-2.5 rounded-xl bg-surface-2 border border-edge text-sm text-ink placeholder:text-ink-ghost focus:outline-none focus:border-violet/50 transition-colors w-full'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-void/80 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lets-talk-title"
          >
            <motion.div
              key="modal"
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.25, ease }}
              className="w-full max-w-lg bg-surface border border-edge rounded-2xl shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-6 pt-6 pb-4 border-b border-edge-subtle">
                <div>
                  <p className="text-xs font-mono tracking-widest text-violet uppercase mb-1">Contact</p>
                  <h2 id="lets-talk-title" className="text-xl font-semibold text-ink">
                    Let&apos;s talk
                  </h2>
                </div>
                <button
                  onClick={close}
                  aria-label="Close dialog"
                  className="p-2 rounded-lg text-ink-ghost hover:text-ink hover:bg-surface-2 transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="px-6 py-5">
                {formState === 'success' ? (
                  <div className="flex flex-col items-center gap-3 py-10 text-center">
                    <div className="w-12 h-12 rounded-full bg-emerald/10 flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                        <path
                          d="M4 10l4.5 4.5L16 6"
                          stroke="#34d399"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <p className="text-ink font-medium">Message sent!</p>
                    <p className="text-sm text-ink-dim">I&apos;ll get back to you as soon as possible.</p>
                    <button
                      onClick={close}
                      className="mt-2 text-xs text-ink-ghost hover:text-ink transition-colors underline underline-offset-2"
                    >
                      Close
                    </button>
                  </div>
                ) : (
                  <form ref={formRef} onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lt-name" className="text-xs font-mono text-ink-ghost tracking-wider uppercase">
                          Name
                        </label>
                        <input
                          ref={firstFieldRef}
                          id="lt-name"
                          name="from_name"
                          type="text"
                          required
                          placeholder="Your name"
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label htmlFor="lt-email" className="text-xs font-mono text-ink-ghost tracking-wider uppercase">
                          Email
                        </label>
                        <input
                          id="lt-email"
                          name="reply_to"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lt-subject" className="text-xs font-mono text-ink-ghost tracking-wider uppercase">
                        Inquiry type
                      </label>
                      <select
                        id="lt-subject"
                        name="subject"
                        required
                        defaultValue=""
                        className={`${inputClass} appearance-none`}
                        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2338384e' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 12px center' }}
                      >
                        <option value="" disabled>Select inquiry type</option>
                        {INQUIRY_TYPES.map(t => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="lt-message" className="text-xs font-mono text-ink-ghost tracking-wider uppercase">
                        Message
                      </label>
                      <textarea
                        id="lt-message"
                        name="message"
                        required
                        rows={4}
                        placeholder="Tell me about your project or opportunity…"
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    {formState === 'error' && (
                      <p className="text-xs text-red-400">
                        Something went wrong. Please try again or{' '}
                        <a
                          href="mailto:shaik.ejaz.dev@gmail.com"
                          className="underline underline-offset-2 hover:text-red-300"
                        >
                          email me directly
                        </a>
                        .
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={formState === 'sending'}
                      className="w-full py-2.5 rounded-xl bg-violet text-ink text-sm font-medium hover:bg-violet-light transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
                    >
                      {formState === 'sending' ? 'Sending…' : 'Send message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
