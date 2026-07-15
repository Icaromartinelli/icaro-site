import Image from 'next/image'
import Link from 'next/link'
import { Instagram, MessageCircle, ChevronRight, Star, ShieldCheck, Dumbbell, Trophy, Sparkles } from 'lucide-react'

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'
const instagram = 'https://ig.me/m/icaro.martinelli'

const programs = [
  {
    slug: 'seca-e-define',
    title: 'Seca & Define',
    label: 'Emagrecimento estratégico',
    text: 'Programa para reduzir gordura, organizar rotina e construir definição com treino, dieta e consistência.',
    cta: 'Conhecer o protocolo',
  },
  {
    slug: 'hard-core',
    title: 'Hard Core',
    label: 'Hipertrofia e intensidade',
    text: 'Treinos fortes, técnicos e progressivos para quem quer evoluir o físico com disciplina e volume real.',
    cta: 'Conhecer o protocolo',
  },
  {
    slug: 'academia-sem-fila',
    title: 'Academia Sem Fila',
    label: 'Treine sem perder tempo',
    text: 'Planilha prática com substituições inteligentes para treinar bem mesmo com a academia lotada.',
    cta: 'Conhecer o protocolo',
  },
  {
    title: 'Consultoria Online',
    label: 'Acompanhamento personalizado',
    text: 'Treino individualizado para sua rotina, objetivo, nível e estrutura disponível, com direcionamento próximo.',
    link: whatsapp,
    cta: 'Falar no WhatsApp',
  },
]

const faqs = [
  {
    q: 'Como funciona a consultoria online?',
    a: 'Você preenche um levantamento de rotina, objetivo, nível técnico e equipamento disponível. A partir disso eu monto um planejamento individual, com ajustes periódicos e direcionamento por WhatsApp — não é uma planilha genérica, é acompanhamento real.',
  },
  {
    q: 'Os programas (Seca & Define, Hard Core, Academia Sem Fila) servem para iniciantes?',
    a: 'Sim, desde que você siga a progressão indicada. Cada protocolo tem instruções de execução e substituições para diferentes níveis. Se você tem lesão ou condição específica, recomendo a Consultoria Online, que é individualizada.',
  },
  {
    q: 'Qual a diferença entre os programas prontos e a Consultoria Online?',
    a: 'Os programas são protocolos estruturados e fechados — você segue o passo a passo sozinho. A Consultoria é acompanhamento individual comigo, com ajustes conforme sua resposta ao treino. Programas são mais em conta e diretos; consultoria é mais próxima e personalizada.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Os programas são pagos uma vez, com acesso imediato após a confirmação, direto na plataforma de checkout. A Consultoria Online é combinada por WhatsApp conforme o formato de acompanhamento.',
  },
  {
    q: 'Preciso de equipamentos específicos ou academia completa?',
    a: 'Não necessariamente. A Academia Sem Fila, por exemplo, foi pensada justamente para treinar bem mesmo com estrutura limitada ou academia lotada, usando substituições inteligentes.',
  },
  {
    q: 'Em quanto tempo vejo resultado?',
    a: 'Depende do ponto de partida, consistência e protocolo escolhido. Resultado sério vem de método aplicado com constância — não prometo prazo mágico, mas com disciplina na execução as mudanças aparecem nas primeiras semanas e se consolidam nos meses seguintes.',
  },
  {
    q: 'Você atende presencial em São Paulo?',
    a: 'O atendimento estruturado hoje é 100% online (programas e consultoria), o que permite acompanhar alunos em qualquer cidade com o mesmo nível de direcionamento. Pra tratar um caso específico, me chama no WhatsApp.',
  },
]

export default function Page() {
  return (
    <main>
      <section id="inicio" className="hero section">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> Método, disciplina e resultado</div>
          <h1>Treino premium para quem quer evolução física de verdade.</h1>
          <p>Consultoria online, programas de treino e acompanhamento personalizado com uma abordagem direta, técnica e sustentável.</p>
          <div className="actions">
            <a className="btn primary" href={whatsapp} target="_blank" rel="noopener noreferrer"><MessageCircle size={18}/> Falar no WhatsApp</a>
            <a className="btn secondary" href="#programas">Ver programas</a>
          </div>
          <div className="metrics">
            <div><Dumbbell/><b>8+</b><span>anos de experiência</span></div>
            <div><Trophy/><b>AA</b><span>público premium</span></div>
            <div><ShieldCheck/><b>100%</b><span>método e constância</span></div>
          </div>
        </div>
        <div className="hero-media">
          <Image src="/images/hero-green.jpeg" alt="Ícaro Martinelli" width={2048} height={1536} priority sizes="(max-width: 900px) 100vw, 45vw" />
          <div className="hero-card"><Star size={16}/> Treino sério. Execução. Resultado.</div>
        </div>
      </section>

      <section className="photo-strip">
        <Image src="/images/portrait-black.jpeg" alt="Ícaro na academia" width={2048} height={1536} sizes="(max-width: 900px) 100vw, 33vw" />
        <Image src="/images/laptop-wide.jpg" alt="Consultoria online" width={1172} height={2048} sizes="(max-width: 900px) 100vw, 33vw" />
        <Image src="/images/hotel-blue.jpg" alt="Ícaro Martinelli" width={736} height={1312} sizes="(max-width: 900px) 100vw, 33vw" />
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
              {p.slug ? (
                <Link href={`/programas/${p.slug}`} className="program-link">{p.cta}<ChevronRight size={18}/></Link>
              ) : (
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="program-link">{p.cta}<ChevronRight size={18}/></a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="consultoria" className="section split">
        <div className="split-media"><Image src="/images/laptop-close.jpg" alt="Consultoria online Ícaro Martinelli" width={1172} height={2048} sizes="(max-width: 900px) 100vw, 45vw" /></div>
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
          <a className="btn primary" href={whatsapp} target="_blank" rel="noopener noreferrer">Quero consultoria</a>
        </div>
      </section>

      <section id="depoimentos" className="section testimonials">
        <div className="section-head">
          <span>Depoimentos</span>
          <h2>Resultados vêm de consistência, método e acompanhamento.</h2>
          <p>Estamos reunindo relatos e resultados reais de alunos — em breve, cases completos aqui.</p>
        </div>
        <div className="testimonial-grid">
          <div className="testimonial testimonial-cta">
            <div className="stars"><Star size={16}/><Star size={16}/><Star size={16}/></div>
            <p>Quer ver resultados reais antes de decidir? Acompanhe o dia a dia e cases de alunos direto no Instagram.</p>
            <a className="btn secondary" href={instagram} target="_blank" rel="noopener noreferrer"><Instagram size={16}/> Ver no Instagram</a>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq">
        <div className="section-head">
          <span>FAQ</span>
          <h2>Perguntas frequentes.</h2>
          <p>O que a maioria pergunta antes de começar.</p>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details className="faq-item" key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
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
          <Image src="/images/executive-suit.jpg" alt="Ícaro executivo" width={1172} height={2048} sizes="(max-width: 900px) 50vw, 25vw" />
          <Image src="/images/gym-vertical.jpg" alt="Ícaro treinador" width={736} height={1312} sizes="(max-width: 900px) 50vw, 25vw" />
        </div>
      </section>
    </main>
  )
}
