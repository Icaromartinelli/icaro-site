import ProgramTabs from '../components/ProgramTabs'

export const metadata = {
  title: 'Programas | IM Personal',
  description: 'Programas de treino e consultoria online com Ícaro Martinelli.',
}

const whatsapp = 'https://wa.me/551199295982?text=Ol%C3%A1%2C%20%C3%8Dcaro.%20Quero%20saber%20mais%20sobre%20a%20consultoria%20e%20os%20programas%20de%20treino.'

const items = [
  {
    id: 'seca',
    label: 'Emagrecimento estratégico',
    title: 'Seca & Define',
    tagline: 'Perca gordura com estrutura e método — não com sofrimento aleatório.',
    points: [
      'Plano de treino estruturado para redução de gordura e definição',
      'Orientação nutricional prática, sem dieta restritiva insustentável',
      'Organização de rotina e hábitos para manter consistência',
    ],
    internalHref: '/programas/seca-e-define',
    ctaHref: 'https://payfast.greenn.com.br/111211',
    ctaLabel: 'Entrar no Seca & Define',
  },
  {
    id: 'hardcore',
    label: 'Hipertrofia e intensidade',
    title: 'Hard Core',
    tagline: 'Treino técnico, pesado e progressivo pra quem já passou do básico.',
    points: [
      'Divisão de treino progressiva focada em hipertrofia',
      'Indicações técnicas de execução para cada exercício',
      'Periodização de carga e volume ao longo do protocolo',
    ],
    internalHref: '/programas/hard-core',
    ctaHref: 'https://payfast.greenn.com.br/116234',
    ctaLabel: 'Conhecer o Hard Core',
  },
  {
    id: 'semfila',
    label: 'Treine sem perder tempo',
    title: 'Academia Sem Fila',
    tagline: 'Treine bem mesmo com pouco tempo ou a academia lotada.',
    points: [
      'Planilha de treino prática e direta ao ponto',
      'Lista de substituições inteligentes por equipamento',
      'Lógica de treino enxuto sem perder estímulo',
    ],
    internalHref: '/programas/academia-sem-fila',
    ctaHref: 'https://pages.mfitpersonal.com.br/p/2jia',
    ctaLabel: 'Acessar o programa',
  },
  {
    id: 'consultoria',
    label: 'Acompanhamento personalizado',
    title: 'Consultoria Online',
    tagline: 'Treino individualizado, sem achismo, com direcionamento próximo.',
    points: [
      'Planejamento individual pra sua rotina e objetivo',
      'Ajustes estratégicos conforme sua resposta ao treino',
      'Direcionamento direto por WhatsApp',
      'Organização de treino e cardio',
    ],
    ctaHref: whatsapp,
    ctaLabel: 'Falar no WhatsApp',
  },
]

export default function Programas() {
  return (
    <main>
      <section className="section programs-header">
        <div className="section-head">
          <span>Programas</span>
          <h1>Escolha o caminho certo para o seu momento.</h1>
          <p>Produtos diretos, objetivos e pensados para tirar você do improviso.</p>
        </div>
      </section>

      <section className="section">
        <ProgramTabs items={items} />
      </section>
    </main>
  )
}
