'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";

import { FaArrowLeft } from "react-icons/fa";

import { IconButton, ClipboardButton } from "@/components/Button";

import styles from './ExerciseActions.module.scss';

function ExerciseActions({ id }) {
  const router = useRouter();
  const [domain, setDomain] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      const url = new URL(router.asPath, window.location.href);
      setDomain(url.origin);
    }
  }, [router.asPath]);

  const handleBack = () => {
    router.back();
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