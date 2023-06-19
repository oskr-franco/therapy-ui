import '../styles/globals.scss'
import Layout from '../layout';
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Component {...pageProps} />
    </Layout>
  )
}