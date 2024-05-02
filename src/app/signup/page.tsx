import React from 'react';
import { SignupForm } from '@/components/Account';

import styles from './SignupPage.module.scss';

async function LoginPage() {
  return (
    <div className={styles.container}>
      <SignupForm />
    </div>
  );
}

export default LoginPage;
