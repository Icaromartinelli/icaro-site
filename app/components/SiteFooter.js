import { Instagram, MessageCircle, Mail } from 'lucide-react'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'
const instagram = 'https://ig.me/m/icaro.martinelli'
const email = 'mailto:icaromartinelli@gmail.com'

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div><b>Ícaro Martinelli</b><span>Built to perform</span></div>
      <div className="footer-links">
        <a href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={18}/> Instagram</a>
        <a href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> WhatsApp</a>
        <a href={email}><Mail size={18}/> E-mail</a>
      </div>
    </footer>
  )
}
