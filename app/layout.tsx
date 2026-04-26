import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Liceu Monteiro Lobato - Educação que forma futuros',
  description: 'Tradição e inovação no ensino. Uma instituição comprometida com a excelência educacional.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
