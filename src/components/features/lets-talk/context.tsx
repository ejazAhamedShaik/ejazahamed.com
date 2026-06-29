'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type LetsTalkContextType = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const LetsTalkContext = createContext<LetsTalkContextType | null>(null)

export function LetsTalkProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <LetsTalkContext.Provider value={{ isOpen, open: () => setIsOpen(true), close: () => setIsOpen(false) }}>
      {children}
    </LetsTalkContext.Provider>
  )
}

export function useLetsTalk() {
  const ctx = useContext(LetsTalkContext)
  if (!ctx) throw new Error('useLetsTalk must be used within LetsTalkProvider')
  return ctx
}
