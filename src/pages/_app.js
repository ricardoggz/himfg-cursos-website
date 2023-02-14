import '../styles/global.css'
import { Montserrat } from '@next/font/google'
const montserratFont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <main className={montserratFont.className}>
      <Component {...pageProps} />
    </main>
  )
}