import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>Kaas by Napa & Innotech</title>
      <link rel="icon" type="image/svg+xml" href="/icons/kaas.svg" />
    </Head>
    <Component {...pageProps} className="font-poppins" />
  </>
} 