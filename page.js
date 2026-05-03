import { Instagram, MessageCircle, Dumbbell, Flame, Trophy, ShieldCheck, CheckCircle2, ArrowRight, Star } from 'lucide-react';

const whatsapp = 'https://wa.me/551199295982?text=Olá,%20Ícaro.%20Vim%20pelo%20site%20e%20quero%20saber%20mais%20sobre%20seus%20programas%20de%20treino.';
const instagram = 'https://instagram.com/icaro.martinelli';

const programs = [
  {
    title: 'Seca & Define',
    tag: 'Emagrecimento inteligente',
    text: 'Programa online para reduzir gordura, organizar rotina e construir resultado com treino, dieta e consistência.',
    items: ['Treinos estruturados', 'Estratégia nutricional', 'Foco em definição', 'Acompanhamento online'],
  },
  {
    title: 'Hard Core — Shape em Construção',
    tag: 'Hipertrofia e intensidade',
    text: 'Treinos mais fortes, técnicos e objetivos para quem quer evoluir físico, volume e densidade muscular.',
    items: ['Musculação avançada', 'Técnicas intensivas', 'Guia nutricional', 'Mentalidade de treino'],
  },
  {
    title: 'Academia Sem Fila',
    tag: 'Treine sem perder tempo',
    text: 'Planilha inteligente com substituições por exercício para treinar bem mesmo com a academia lotada.',
    items: ['Até 3 substituições', 'Treino prático', 'Ideal para horários cheios', 'Execução simples'],
  },
  {
    title: 'Consultoria Online',
    tag: 'Treino personalizado',
    text: 'Planejamento individual via plataforma, com treinos montados para seu objetivo, nível, rotina e estrutura disponível.',
    items: ['Treino sob medida', 'Ajustes periódicos', 'Organização semanal', 'Suporte estratégico'],
  },
];

const services = [
  'Personal trainer presencial em São Paulo',
  'Consultoria online personalizada',
  'Programas de emagrecimento e hipertrofia',
  'Treinos para mulheres, homens e atletas',
  'Musculação, força, estética e performance',
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <header className="topbar">
            <div>
              <p className="eyebrow">IM Personal</p>
              <h1>Ícaro Martinelli</h1>
            </div>
            <a className="iconButton" href={instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={21} />
            </a>
          </header>

          <div className="heroContent">
            <div className="badge"><ShieldCheck size={15} /> Treino sério. Resultado com consistência.</div>
            <h2>Programas de treino para quem quer resultado de verdade.</h2>
            <p>
              Personal trainer, treinador de fisiculturistas e especialista em musculação, estética e performance. Aqui você encontra meus programas, consultorias e conteúdos principais em um só lugar.
            </p>
            <div className="actions">
              <a className="primaryButton" href={whatsapp} target="_blank" rel="noreferrer">
                Falar no WhatsApp <MessageCircle size={18} />
              </a>
              <a className="secondaryButton" href="#programas">Ver programas</a>
            </div>
          </div>

          <div className="stats">
            <div><Dumbbell /><strong>8+</strong><span>anos</span></div>
            <div><Trophy /><strong>AA</strong><span>público</span></div>
            <div><Flame /><strong>100%</strong><span>foco</span></div>
          </div>
        </div>
      </section>

      <section id="programas" className="section container">
        <p className="eyebrow gold">Programas</p>
        <h3>Escolha seu caminho</h3>
        <div className="cards">
          {programs.map((program) => (
            <article className="card" key={program.title}>
              <div className="cardHead">
                <div>
                  <p>{program.tag}</p>
                  <h4>{program.title}</h4>
                </div>
                <ArrowRight className="arrow" />
              </div>
              <p className="description">{program.text}</p>
              <div className="gridItems">
                {program.items.map((item) => (
                  <span key={item}><CheckCircle2 size={15} /> {item}</span>
                ))}
              </div>
              <a className="fullButton" href={whatsapp} target="_blank" rel="noreferrer">Quero saber mais</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="goldBox">
          <p className="eyebrow gold">Atendimento</p>
          <h3>Como eu posso te ajudar</h3>
          <div className="serviceList">
            {services.map((service) => <div key={service}><Star size={16} /> {service}</div>)}
          </div>
        </div>
      </section>

      <section className="section container last">
        <div className="authority">
          <p className="eyebrow gold">Autoridade</p>
          <h3>Treino com método, não com achismo.</h3>
          <p>
            Formado em Educação Física, pós-graduando em Farmacologia e Bioquímica Esportiva, treinador de atletas de fisiculturismo e profissional atuante no mercado premium de São Paulo.
          </p>
          <blockquote>“Liberdade com consciência. Resultados com consistência.”</blockquote>
        </div>
      </section>

      <nav className="bottomBar">
        <a href={instagram} target="_blank" rel="noreferrer"><Instagram size={18} /> Instagram</a>
        <a className="whats" href={whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={18} /> WhatsApp</a>
      </nav>
    </main>
  );
}
