import NavBar from '@/components/NavBar'
import { LightContextProvider } from '@/contexts/lightContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {

  return (
    <LightContextProvider>
      <NavBar />
      <Component {...pageProps} />
    </LightContextProvider>
  )
}
