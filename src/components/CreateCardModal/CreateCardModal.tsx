'use client';

import React, { useCallback } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import cx from 'classnames';

import withOpenModal from '@/hocs/withOpenModal';

import CreateCardType from './CreateCardModal.types';
import styles from './CreateCardModal.module.scss';

function CreateCardModal({
  className,
  text,
  openModal,
  component,
}: CreateCardType) {
  const onCreateExerciseHandler = useCallback(() => {
    openModal({ component });
  }, [openModal, component]);

  return (
    <button
      type="button"
      className={cx(className, styles.container)}
      onClick={onCreateExerciseHandler}
    >
      <div className={styles.text}>{text}</div>
      <FaPlusCircle size={40} className={styles.icon} />
    </button>
  );
}

export default withOpenModal(CreateCardModal);
