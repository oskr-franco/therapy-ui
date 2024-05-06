import React from 'react';
import { SignupForm } from '@/components/Auth';

import styles from './SignupPage.module.scss';

async function LoginPage() {
  return (
    <div className={styles.container}>
      <SignupForm />
    </div>
  );
}

export default LoginPage;
