import './globals.css';

export const metadata = {
  title: 'Ícaro Martinelli | Programas de Treino',
  description: 'Programas de treino, consultoria online e personal trainer presencial em São Paulo.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
