import '../styles/global.css'
import { Montserrat } from '@next/font/google'
import { Layout, Footer } from '../components'
import { AdminProvider } from '../contexts'

const montserratFont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <AdminProvider>
      <Layout>
        <main className={montserratFont.className}>
          <Component {...pageProps} />
          <Footer />
        </main>
      </Layout>
    </AdminProvider>
  )
}