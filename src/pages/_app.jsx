import { Inter } from 'next/font/google'

import Store from '../store/Store';
import Modal from '../components/Modal';

import '../styles/globals.scss'
import Layout from '../layout';

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout className={inter.className}>
      <Store>
        <Component {...pageProps} />
        <Modal />
      </Store>
    </Layout>
  )
}