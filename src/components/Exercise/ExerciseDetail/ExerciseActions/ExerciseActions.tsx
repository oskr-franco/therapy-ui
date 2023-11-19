'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

import { ClipboardButton } from '@/components/Button';
import Paths from '@/constants/paths';

import styles from './ExerciseActions.module.scss';

type ExerciseActionsProps = {
  id: number;
};

function ExerciseActions({ id }: ExerciseActionsProps) {
  const pathname = usePathname();
  const [domain, setDomain] = useState('');
  const previewId = Paths.ExercisePreview(id);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const url = new URL(pathname, window.location.href);
      setDomain(url.origin);
    }
  }, [pathname]);

  return (
    <div className={styles.wrapper}>
      <ClipboardButton url={`${domain}${previewId}`} />
    </div>
  );
}

export default ExerciseActions;
