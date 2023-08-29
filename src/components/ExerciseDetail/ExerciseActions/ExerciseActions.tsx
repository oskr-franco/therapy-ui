'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

import { FaArrowLeft } from 'react-icons/fa';

import { IconButton, ClipboardButton } from '@/components/Button';

import styles from './ExerciseActions.module.scss';

function ExerciseActions({ id }) {
  const router = useRouter();
  const pathname = usePathname();
  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.href);
      setDomain(url.origin);
    }
  }, [pathname]);

  const handleBack = () => {
    router.push('/exercises');
  };

  return (
    <div className={styles.wrapper}>
      <IconButton
        icon={FaArrowLeft}
        tooltip="Regresar"
        tooltipPosition="bottom"
        onClick={handleBack}
      />
      <ClipboardButton url={`${domain}/preview/${id}`} />
    </div>
  );
}

export default ExerciseActions;
