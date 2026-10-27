import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inkloom Shield | Enterprise AI Security Core',
  description: 'Next-Generation Content & Document Security Platform by Team tutu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-slate-100 min-h-screen selection:bg-blue-500 selection:text-white antialiased">
        {children}
      </body>
    </html>
  )
}
