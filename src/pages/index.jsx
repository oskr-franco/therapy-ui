import React from 'react';

import appConfig from '@/app.config';

import styles from './index.module.scss';

function Home() {
  const { apiService } = appConfig;
  return (
    <>
      Bienvenido a nuestro demo
    </>
  )
}

export default Home;
