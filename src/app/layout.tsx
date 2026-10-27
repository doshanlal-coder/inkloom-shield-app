import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Inkloom Shield - AI Security Dashboard',
  description: 'Smart India Hackathon Submission by Team tutu',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
