'use client'

import { useState, useEffect } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

export default function MobileNav({ nav, whatsapp }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <button
        className="menu"
        aria-label={open ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <div className={`mobile-drawer ${open ? 'is-open' : ''}`} role="dialog" aria-modal="true">
        <div className="mobile-drawer-backdrop" onClick={() => setOpen(false)} />
        <nav className="mobile-drawer-panel">
          {nav.map(([label, href]) => (
            <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <a className="btn primary" href={whatsapp} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
            <MessageCircle size={18} /> Falar no WhatsApp
          </a>
        </nav>
      </div>
    </>
  )
}
