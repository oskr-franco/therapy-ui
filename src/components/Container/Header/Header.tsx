'use client';
import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

import { IconButton } from '@/components/Button';

import styles from './Header.module.scss';

function Header() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };
  return (
    <div className={styles.container}>
      <IconButton
        icon={FaArrowLeft}
        tooltip="Regresar"
        tooltipPosition="bottom"
        onClick={handleBack}
      />
    </div>
  );
}

export default Header;
