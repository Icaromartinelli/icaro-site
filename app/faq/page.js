export const metadata = {
  title: 'FAQ | IM Personal',
  description: 'Perguntas frequentes sobre programas de treino e consultoria online.',
}

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

export default function FAQ() {
  return (
    <main>
      <section className="section">
        <div className="section-head">
          <span>FAQ</span>
          <h1>Perguntas frequentes.</h1>
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
    </main>
  )
}
