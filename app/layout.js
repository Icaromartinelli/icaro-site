import './globals.css'

export const metadata = {
  title: 'Ícaro Martinelli | IM Personal',
  description: 'Programas de treino, consultoria online e personal trainer em São Paulo.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
