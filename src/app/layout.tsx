import type { Metadata, Viewport } from 'next'
import { Red_Hat_Display, Red_Hat_Text } from 'next/font/google'
import './globals.css'

const display = Red_Hat_Display({
  subsets: ['latin'],
  variable: '--font-red-hat-display',
  display: 'swap',
})

const text = Red_Hat_Text({
  subsets: ['latin'],
  variable: '--font-red-hat-text',
  display: 'swap',
})

// Runs before paint: saved choice wins, otherwise follow the device setting
const themeScript = `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='light'}})();`

export const metadata: Metadata = {
  title: 'Maid for Cleaning LLC | Residential, Commercial & Short-Term Rental Cleaning',
  description: 'Insured, background-checked cleaning for homes, offices, and short-term rentals. Supplies included. Request a quote for your space.',
  openGraph: {
    title: 'Maid for Cleaning LLC',
    description: 'Residential, commercial, and short-term rental cleaning from an insured, background-checked team.',
    type: 'website'
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#fbfcfe' },
    { media: '(prefers-color-scheme: dark)', color: '#0c1220' },
  ],
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${text.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
