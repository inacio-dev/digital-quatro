import Footer from '@/components/Footer'
import Header from '@/components/Header'
import '@/styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence mode="wait">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </>
  )
}
