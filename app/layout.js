import './globals.css'
import SiteHeader from './components/SiteHeader'
import SiteFooter from './components/SiteFooter'

export const metadata = {
  title: 'Ícaro Martinelli | IM Personal',
  description: 'Programas de treino, consultoria online e personal trainer em São Paulo.',
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f1110',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  )
}
