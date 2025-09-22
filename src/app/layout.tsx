import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Maid for Cleaning LLC — Residential, Commercial & STR Cleaning',
  description: 'Sparkling homes, spotless rentals, and pristine workspaces. Serving your city with flexible, reliable, top-rated cleaning.',
  openGraph: {
    title: 'Maid for Cleaning LLC',
    description: 'Residential, commercial, and short-term rental cleaning that just hits different.',
    type: 'website'
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}