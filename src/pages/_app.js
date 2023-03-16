import '../styles/global.css'
import { Montserrat } from '@next/font/google'
import { Layout } from '../components'
import { AdminProvider } from '../contexts'

const montserratFont = Montserrat({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <AdminProvider>
      <Layout>
        <main className={montserratFont.className}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </AdminProvider>
  )
}