'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CheckCircle2 } from 'lucide-react'

export default function ProgramTabs({ items }) {
  const [active, setActive] = useState(items[0].id)
  const current = items.find((i) => i.id === active)

  return (
    <div className="tabs">
      <div className="tabs-list" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === active}
            className={`tab-btn ${item.id === active ? 'is-active' : ''}`}
            onClick={() => setActive(item.id)}
          >
            {item.title}
          </button>
        ))}
      </div>

      <div className="tab-panel">
        <span className="eyebrow">{current.label}</span>
        <h2>{current.title}</h2>
        <p className="tab-tagline">{current.tagline}</p>
        <ul className="protocol-list">
          {current.points.map((p) => (
            <li key={p}><CheckCircle2 size={18} /> {p}</li>
          ))}
        </ul>
        <div className="tab-actions">
          {current.internalHref && (
            <Link className="btn secondary" href={current.internalHref}>Ver protocolo completo</Link>
          )}
          <a className="btn primary" href={current.ctaHref} target="_blank" rel="noopener noreferrer">{current.ctaLabel}</a>
        </div>
      </div>
    </div>
  )
}
