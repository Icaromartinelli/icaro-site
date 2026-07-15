import { MessageCircle } from 'lucide-react'
import MobileNav from './MobileNav'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'

export const nav = [
  ['Início', '/#inicio'],
  ['Programas', '/#programas'],
  ['Consultoria', '/#consultoria'],
  ['Depoimentos', '/#depoimentos'],
  ['FAQ', '/#faq'],
  ['Sobre', '/#sobre'],
]

export default function SiteHeader() {
  return (
    <header className="topbar">
      <a href="/#inicio" className="brand" aria-label="Ícaro Martinelli">
        <span className="monogram">IM</span>
        <span><b>Ícaro Martinelli</b><small>Personal Trainer</small></span>
      </a>
      <nav className="desktop-nav">
        {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
      </nav>
      <a className="mini-cta" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={16}/> WhatsApp</a>
      <MobileNav nav={nav} whatsapp={whatsapp} />
    </header>
  )
}
