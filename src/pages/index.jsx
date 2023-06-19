import React from 'react';

import appConfig from '@/app.config';

import styles from './index.module.scss';

function Home() {
  const { apiService } = appConfig;
  return (
    <>
      <input type="text" placeholder="Search..." className={styles.searchBox} />
    </>
  )
}

export default Home;
