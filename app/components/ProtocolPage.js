import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, CheckCircle2, MessageCircle } from 'lucide-react'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'

export default function ProtocolPage({
  label,
  title,
  tagline,
  heroImage,
  heroAlt,
  heroWidth,
  heroHeight,
  meta,
  paragraphs,
  includes,
  forWho,
  ctaHref,
  ctaLabel,
}) {
  return (
    <main>
      <section className="section protocol-hero">
        <div className="protocol-hero-copy">
          <Link href="/#programas" className="protocol-back"><ArrowLeft size={15}/> Voltar aos programas</Link>
          <span className="eyebrow">{label}</span>
          <h1>{title}</h1>
          <p className="hero-copy-lead">{tagline}</p>
          <div className="protocol-meta">
            {meta.map((m) => <span key={m}>{m}</span>)}
          </div>
        </div>
        <div className="protocol-hero-media">
          <Image src={heroImage} alt={heroAlt} width={heroWidth} height={heroHeight} priority />
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <span>O protocolo</span>
          <h2>Como funciona.</h2>
        </div>
        {paragraphs.map((p, i) => <p key={i} style={{ fontSize: 16, maxWidth: 720, marginBottom: 14 }}>{p}</p>)}

        <ul className="protocol-list">
          {includes.map((item) => (
            <li key={item}><CheckCircle2 size={18}/> {item}</li>
          ))}
        </ul>

        <div className="section-head" style={{ marginTop: 40 }}>
          <span>Pra quem é</span>
          <h2 style={{ fontSize: 28 }}>{forWho}</h2>
        </div>

        <div className="protocol-cta">
          <a className="btn primary" href={ctaHref} target="_blank" rel="noopener noreferrer">{ctaLabel}</a>
          <a className="btn secondary" href={whatsapp} target="_blank" rel="noopener noreferrer" style={{ marginLeft: 12 }}>
            <MessageCircle size={16}/> Tirar dúvida antes
          </a>
        </div>
      </section>
    </main>
  )
}
