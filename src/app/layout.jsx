import React from 'react';
import { Inter } from 'next/font/google'

import Store from '../store/Store';
import Modal from '../components/Modal';
import Alerts from '@/components/Alerts/Alerts';

const inter = Inter({ subsets: ['latin'] })

import '@/styles/globals.scss'


export const metadata = {
  title: 'Body Health',
  description: 'Pagina para facilitar la administracion de los ejercicios de los pacientes y cuerpo humano',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <Store>
        <body className={inter.className}>
          {children}
          <Modal />
          <Alerts />
        </body>
      </Store>
    </html>
  )
}
