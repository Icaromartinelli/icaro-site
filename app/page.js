import { Instagram, MessageCircle, ChevronRight, Star, ShieldCheck, Dumbbell, Trophy, Sparkles, Menu } from 'lucide-react'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'

const programs = [
  {
    title: 'Seca & Define',
    label: 'Emagrecimento estratégico',
    text: 'Programa para reduzir gordura, organizar rotina e construir definição com treino, dieta e consistência.',
    link: 'https://payfast.greenn.com.br/111211',
    cta: 'Entrar no Seca & Define',
  },
  {
    title: 'Hard Core',
    label: 'Hipertrofia e intensidade',
    text: 'Treinos fortes, técnicos e progressivos para quem quer evoluir o físico com disciplina e volume real.',
    link: 'https://payfast.greenn.com.br/116234',
    cta: 'Conhecer o Hard Core',
  },
  {
    title: 'Academia Sem Fila',
    label: 'Treine sem perder tempo',
    text: 'Planilha prática com substituições inteligentes para treinar bem mesmo com a academia lotada.',
    link: 'https://pages.mfitpersonal.com.br/p/2jia',
    cta: 'Acessar o programa',
  },
  {
    title: 'Consultoria Online',
    label: 'Acompanhamento personalizado',
    text: 'Treino individualizado para sua rotina, objetivo, nível e estrutura disponível, com direcionamento próximo.',
    link: whatsapp,
    cta: 'Falar no WhatsApp',
  },
]

const nav = [
  ['Início', '#inicio'],
  ['Programas', '#programas'],
  ['Consultoria', '#consultoria'],
  ['Depoimentos', '#depoimentos'],
  ['Sobre', '#sobre'],
]

const testimonials = [
  '“O treino ficou muito mais claro, objetivo e intenso. Evoluí muito mais quando parei de improvisar.”',
  '“O acompanhamento fez diferença porque eu sabia exatamente o que fazer, quando ajustar e como progredir.”',
  '“A consultoria me deu rotina. Parei de começar e parar toda semana.”',
]

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a href="#inicio" className="brand" aria-label="Ícaro Martinelli">
          <span className="monogram">IM</span>
          <span><b>Ícaro Martinelli</b><small>Personal Trainer</small></span>
        </a>
        <nav className="desktop-nav">
          {nav.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
        </nav>
        <a className="mini-cta" href={whatsapp} target="_blank"><MessageCircle size={16}/> WhatsApp</a>
        <button className="menu"><Menu size={20}/></button>
      </header>

      <section id="inicio" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> Método, disciplina e resultado</div>
          <h1>Treino premium para quem quer evolução física de verdade.</h1>
          <p>Consultoria online, programas de treino e acompanhamento personalizado com uma abordagem direta, técnica e sustentável.</p>
          <div className="actions">
            <a className="btn primary" href={whatsapp} target="_blank"><MessageCircle size={18}/> Falar no WhatsApp</a>
            <a className="btn secondary" href="#programas">Ver programas</a>
          </div>
          <div className="metrics">
            <div><Dumbbell/><b>8+</b><span>anos de experiência</span></div>
            <div><Trophy/><b>AA</b><span>público premium</span></div>
            <div><ShieldCheck/><b>100%</b><span>método e constância</span></div>
          </div>
        </div>
        <div className="hero-media">
          <img src="/images/hero-green.jpeg" alt="Ícaro Martinelli" />
          <div className="hero-card"><Star size={16}/> Treino sério. Execução. Resultado.</div>
        </div>
      </section>

      <section className="photo-strip">
        <img src="/images/portrait-black.jpeg" alt="Ícaro na academia" />
        <img src="/images/laptop-wide.png" alt="Consultoria online" />
        <img src="/images/hotel-blue.png" alt="Ícaro Martinelli" />
      </section>

      <section id="programas" className="section programs">
        <div className="section-head">
          <span>Programas</span>
          <h2>Escolha o caminho certo para o seu momento.</h2>
          <p>Produtos diretos, objetivos e pensados para tirar você do improviso.</p>
        </div>
        <div className="program-grid">
          {programs.map((p) => (
            <article className="program-card" key={p.title}>
              <div className="rank">✦</div>
              <small>{p.label}</small>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
              <a href={p.link} target="_blank" className="program-link">{p.cta}<ChevronRight size={18}/></a>
            </article>
          ))}
        </div>
      </section>

      <section id="consultoria" className="section split">
        <div className="split-media"><img src="/images/laptop-close.png" alt="Consultoria online Ícaro Martinelli" /></div>
        <div className="split-copy">
          <span>Consultoria Online</span>
          <h2>Treino personalizado, sem achismo.</h2>
          <p>Você recebe uma estrutura pensada para sua rotina, objetivo, nível técnico, equipamentos disponíveis e capacidade real de recuperação.</p>
          <ul>
            <li>Planejamento individual</li>
            <li>Ajustes estratégicos</li>
            <li>Direcionamento por WhatsApp</li>
            <li>Organização de treino e cardio</li>
          </ul>
          <a className="btn primary" href={whatsapp} target="_blank">Quero consultoria</a>
        </div>
      </section>

      <section id="depoimentos" className="section testimonials">
        <div className="section-head">
          <span>Depoimentos</span>
          <h2>Resultados vêm de consistência, método e acompanhamento.</h2>
          <p>Espaço reservado para prints, fotos e relatos dos alunos.</p>
        </div>
        <div className="testimonial-grid">
          {testimonials.map((t, i) => <div className="testimonial" key={i}><div className="stars">★★★★★</div><p>{t}</p></div>)}
        </div>
      </section>

      <section id="sobre" className="section about">
        <div className="about-copy">
          <span>Sobre mim</span>
          <h2>Eu sou Ícaro Martinelli.</h2>
          <p>Personal trainer, treinador e criador de programas de treino para pessoas que buscam estética, força, performance e consistência. Minha entrega une técnica, disciplina e uma leitura realista da rotina de cada aluno.</p>
          <p>Não é sobre treinar mais por impulso. É sobre treinar melhor, com direção.</p>
        </div>
        <div className="about-gallery">
          <img src="/images/executive-suit.png" alt="Ícaro executivo" />
          <img src="/images/gym-vertical.png" alt="Ícaro treinador" />
        </div>
      </section>

      <footer className="footer">
        <div><b>Ícaro Martinelli</b><span>IM Personal</span></div>
        <div className="footer-links">
          <a href="https://instagram.com/icaro.martinelli" target="_blank"><Instagram size={18}/> Instagram</a>
          <a href={whatsapp} target="_blank"><MessageCircle size={18}/> WhatsApp</a>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href="https://instagram.com/icaro.martinelli" target="_blank"><Instagram size={18}/> Instagram</a>
        <a href={whatsapp} target="_blank"><MessageCircle size={18}/> WhatsApp</a>
      </div>
    </main>
  )
}
