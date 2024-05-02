import React from 'react';
import { LoginForm } from '@/components/Account';

import styles from './LoginPage.module.scss';

async function LoginPage() {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
}

export default LoginPage;
