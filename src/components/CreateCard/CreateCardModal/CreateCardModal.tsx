'use client';

import React, { useCallback } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import cx from 'classnames';

import withOpenModal from '@/hocs/withOpenModal';

import CreateCardType from './CreateCardModal.types';
import styles from '../CreateCard.module.scss';

function CreateCardModal({
  className,
  text,
  modal,
  component,
  iconSize = 'large',
}: CreateCardType) {
  const onCreateExerciseHandler = useCallback(() => {
    modal.open({ component });
  }, [modal, component]);

  return (
    <button
      type="button"
      className={cx(className, styles.container)}
      onClick={onCreateExerciseHandler}
    >
      <div>{text}</div>
      <FaPlusCircle className={cx(styles.icon, styles[iconSize])} />
    </button>
  );
}

export default withOpenModal(CreateCardModal);
