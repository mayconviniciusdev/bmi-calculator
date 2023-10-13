import './globals.css'
import type { Metadata } from 'next'
import { Poppins} from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '600']})
export const metadata: Metadata = {title: 'Calculadora IMC',}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}