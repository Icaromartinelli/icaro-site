import ProtocolPage from '../../components/ProtocolPage'

export const metadata = {
  title: 'Seca & Define | IM Personal',
  description: 'Programa de emagrecimento estratégico com treino, orientação nutricional e organização de rotina.',
}

export default function SecaEDefine() {
  return (
    <ProtocolPage
      label="Emagrecimento estratégico"
      title="Seca & Define"
      tagline="Perca gordura com estrutura e método — não com sofrimento aleatório e dieta da moda."
      heroImage="/images/mentor-beige.jpg"
      heroAlt="Protocolo Seca & Define"
      heroWidth={1144}
      heroHeight={2047}
      meta={['Treino + orientação nutricional', 'Acesso imediato', '100% online']}
      paragraphs={[
        'O Seca & Define foi criado pra quem já tentou emagrecer sozinho, no improviso, e não conseguiu manter consistência. O protocolo une um plano de treino focado em gasto energético e definição com orientação nutricional prática, sem contagem obsessiva ou dieta restritiva insustentável.',
        'A lógica é simples: organizar sua rotina de treino e alimentação em um método fechado, com progressão clara, pra você parar de "começar segunda-feira" toda semana e efetivamente ver o resultado se consolidar.',
      ]}
      includes={[
        'Plano de treino estruturado para redução de gordura e definição',
        'Orientação nutricional prática, sem dieta restritiva insustentável',
        'Organização de rotina e hábitos para manter consistência',
        'Acesso imediato após a confirmação da compra',
      ]}
      forWho="Quem já treina (ou já tentou treinar) sem direção clara, quer emagrecer com método e cansou de recomeçar do zero a cada mês."
      ctaHref="https://payfast.greenn.com.br/111211"
      ctaLabel="Entrar no Seca & Define"
    />
  )
}
