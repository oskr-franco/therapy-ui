import React from 'react';
import { Inter } from 'next/font/google';
import Menu from '@/components/Container/Menu';
import Header from '@/components/Container/Header';
import Alerts from '@/components/Alerts/Alerts';
import Store from '../store/Store';
import Modal from '../components/Modal';

import '@/styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });
import styles from './layout.module.scss';

export const metadata = {
  title: 'Body Health',
  description:
    'Pagina para facilitar la administracion de los ejercicios de los pacientes y cuerpo humano',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Store>
        <body className={inter.className}>
          <Menu />
          <Header />
          <main className={styles.main}>{children}</main>
          <Modal />
          <Alerts />
        </body>
      </Store>
    </html>
  );
}
