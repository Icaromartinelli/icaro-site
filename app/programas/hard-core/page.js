import ProtocolPage from '../../components/ProtocolPage'

export const metadata = {
  title: 'Hard Core | IM Personal',
  description: 'Programa de hipertrofia e intensidade com treinos técnicos, progressivos e volume real.',
}

export default function HardCore() {
  return (
    <ProtocolPage
      label="Hipertrofia e intensidade"
      title="Hard Core"
      tagline="Treino técnico, pesado e progressivo pra quem já passou do básico e quer volume real."
      heroImage="/images/hero-gym.jpeg"
      heroAlt="Protocolo Hard Core"
      heroWidth={2048}
      heroHeight={1536}
      meta={['Hipertrofia', 'Alto volume', 'Acesso imediato']}
      paragraphs={[
        'O Hard Core não é treino de academia genérico. É um protocolo de hipertrofia com progressão de carga e volume pensada pra quem já tem base de treino e quer evoluir o físico de forma séria — sem estagnar repetindo a mesma ficha de sempre.',
        'A execução técnica vem em primeiro lugar: cada exercício tem indicação de como executar, quando progredir e como ajustar volume conforme sua recuperação. Disciplina e consistência fazem o resto.',
      ]}
      includes={[
        'Divisão de treino progressiva focada em hipertrofia',
        'Indicações técnicas de execução para cada exercício',
        'Periodização de carga e volume ao longo do protocolo',
        'Acesso imediato após a confirmação da compra',
      ]}
      forWho="Quem já treina com regularidade, domina a execução básica dos principais exercícios e quer intensificar o físico com estrutura — não recomendado pra quem está começando do zero."
      ctaHref="https://payfast.greenn.com.br/116234"
      ctaLabel="Conhecer o Hard Core"
    />
  )
}
