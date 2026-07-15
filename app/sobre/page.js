import Image from 'next/image'

export const metadata = {
  title: 'Sobre | IM Personal',
  description: 'Conheça o método e a trajetória de Ícaro Martinelli, personal trainer.',
}

export default function Sobre() {
  return (
    <main>
      <section className="section about">
        <div className="about-copy">
          <span>Sobre mim</span>
          <h1>Eu sou Ícaro Martinelli.</h1>
          <p>Personal trainer, treinador e criador de programas de treino para pessoas que buscam estética, força, performance e consistência. Minha entrega une técnica, disciplina e uma leitura realista da rotina de cada aluno.</p>
          <p>Não é sobre treinar mais por impulso. É sobre treinar melhor, com direção.</p>
        </div>
        <div className="about-media">
          <Image src="/images/profile-crossed.jpg" alt="Ícaro Martinelli" width={1254} height={1254} priority sizes="(max-width: 900px) 100vw, 40vw" />
        </div>
      </section>
    </main>
  )
}
