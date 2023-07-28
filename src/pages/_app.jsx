import { Inter } from 'next/font/google'

import Store from '../store/Store';
import Modal from '../components/Modal';
import Alerts from '@/components/Alerts/Alerts';

import '../styles/globals.scss'
import Layout from '../layout';

const inter = Inter({ subsets: ['latin'] })

export default function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Layout className={inter.className}>
        <Component {...pageProps} />
      </Layout>
      <Modal className={inter.className} />
      <Alerts />
    </Store>
  )
}