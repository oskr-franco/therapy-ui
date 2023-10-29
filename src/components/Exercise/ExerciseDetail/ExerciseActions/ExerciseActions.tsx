'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { ClipboardButton } from '@/components/Button';

import styles from './ExerciseActions.module.scss';

function ExerciseActions({ id }) {
  const pathname = usePathname();
  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.href);
      setDomain(url.origin);
    }
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <ClipboardButton url={`${domain}/preview/${id}`} />
    </div>
  );
}

export default ExerciseActions;
