import ProtocolPage from '../../components/ProtocolPage'

export const metadata = {
  title: 'Academia Sem Fila | IM Personal',
  description: 'Planilha prática com substituições inteligentes pra treinar bem mesmo com a academia lotada ou pouco tempo.',
}

export default function AcademiaSemFila() {
  return (
    <ProtocolPage
      label="Treine sem perder tempo"
      title="Academia Sem Fila"
      tagline="Treine bem mesmo com pouco tempo disponível ou a academia lotada de gente."
      heroImage="/images/portrait-close.jpeg"
      heroAlt="Protocolo Academia Sem Fila"
      heroWidth={2048}
      heroHeight={1536}
      meta={['Planilha prática', 'Substituições inteligentes', 'Acesso imediato']}
      paragraphs={[
        'Todo mundo já passou por isso: chegar na academia, o equipamento que você precisa está ocupado, e o treino que era pra levar 50 minutos vira uma hora e meia de fila. A Academia Sem Fila resolve isso com uma lógica de substituições inteligentes — pra cada exercício principal, você tem alternativas equivalentes prontas.',
        'É um protocolo enxuto, direto ao ponto, pensado pra quem tem rotina apertada e não pode dar o luxo de perder tempo esperando equipamento livre.',
      ]}
      includes={[
        'Planilha de treino prática e direta ao ponto',
        'Lista de substituições inteligentes por exercício/equipamento',
        'Lógica de treino enxuto sem perder estímulo de treino',
        'Acesso imediato após a confirmação da compra',
      ]}
      forWho="Quem treina em academia cheia, tem pouco tempo disponível no dia e precisa de um plano prático que funcione mesmo quando o equipamento ideal não está livre."
      ctaHref="https://pages.mfitpersonal.com.br/p/2jia"
      ctaLabel="Acessar o programa"
    />
  )
}
