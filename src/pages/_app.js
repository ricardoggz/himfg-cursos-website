import '../styles/global.css'
import { Montserrat } from '@next/font/google'
import { Layout } from '../components'

const montserratFont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <main className={montserratFont.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  )
}