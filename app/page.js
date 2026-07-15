import Image from 'next/image'
import Link from 'next/link'
import { MessageCircle, ArrowRight, ShieldCheck, Dumbbell, Trophy, Sparkles, ClipboardList, HelpCircle, UserRound } from 'lucide-react'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'

const quickLinks = [
  {
    href: '/programas',
    icon: ClipboardList,
    title: 'Programas & Consultoria',
    text: 'Protocolos de treino prontos ou acompanhamento individual — veja qual encaixa no seu momento.',
  },
  {
    href: '/faq',
    icon: HelpCircle,
    title: 'Perguntas frequentes',
    text: 'Como funciona, formas de pagamento, prazo de resultado e mais.',
  },
  {
    href: '/sobre',
    icon: UserRound,
    title: 'Sobre mim',
    text: 'Método, trajetória e a filosofia por trás do trabalho.',
  },
]

export default function Page() {
  return (
    <main>
      <section className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> Método, disciplina e resultado</div>
          <h1>Treino premium para quem quer evolução física de verdade.</h1>
          <p>Consultoria online, programas de treino e acompanhamento personalizado com uma abordagem direta, técnica e sustentável.</p>
          <div className="actions">
            <a className="btn primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Falar no WhatsApp</a>
            <Link className="btn secondary" href="/programas">Ver programas</Link>
          </div>
          <div className="metrics">
            <div><Dumbbell/><b>8+</b><span>anos de experiência</span></div>
            <div><Trophy/><b>AA</b><span>público premium</span></div>
            <div><ShieldCheck/><b>100%</b><span>método e constância</span></div>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/images/profile-crossed.jpg" alt="Ícaro Martinelli" width={1254} height={1254} priority sizes="(max-width: 900px) 100vw, 45vw" />
        </div>
      </section>

      <section className="section quicklinks">
        <div className="quicklink-grid">
          {quickLinks.map(({ href, icon: Icon, title, text }) => (
            <Link href={href} key={href} className="quicklink-card">
              <Icon size={22} />
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="quicklink-go">Acessar <ArrowRight size={16}/></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section cta-band">
        <h2>Pronto pra treinar com direção?</h2>
        <p>Fale comigo agora e vamos definir o melhor caminho pro seu momento.</p>
        <a className="btn primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Falar no WhatsApp</a>
      </section>
    </main>
  )
}
