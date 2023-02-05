import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {M_PLUS_1_Code } from '@next/font/google'


const mplus = M_PLUS_1_Code({ subsets: ['latin'], variable: '--font-mplus'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    
    <main className={`${mplus.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}
