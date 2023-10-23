import React from 'react';
import { Inter } from 'next/font/google';
import cx from 'classnames';
import Menu from '@/components/Container/Menu';
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
        <body className={cx(inter.className, styles.bodyContent)}>
          <Menu />
          <main>{children}</main>
          <Modal />
          <Alerts />
        </body>
      </Store>
    </html>
  );
}
