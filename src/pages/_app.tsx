import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {Roboto,M_PLUS_1_Code } from '@next/font/google'


const roboto = Roboto({ subsets: ['latin'], weight:['400','700'] })
const mplus = M_PLUS_1_Code({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={mplus.className}>
      <Component {...pageProps} />
    </main>
  )
}
