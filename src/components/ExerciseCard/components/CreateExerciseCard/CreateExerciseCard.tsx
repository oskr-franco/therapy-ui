'use client';

import React, { useCallback } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import cx from 'classnames';

import ExerciseForm from '@/components/ExerciseForm';
import withOpenModal from '@/hocs/withOpenModal';

import cardStyles from '../../ExerciseCard.module.scss';
import styles from './CreateExerciseCard.module.scss';

function CreateExerciseCard({ openModal }) {
  const text = 'Agregar Ejercicio';

  const onCreateExerciseHandler = useCallback(() => {
    openModal({
      component: ExerciseForm,
    });
  }, [openModal]);

  return (
    <button
      type="button"
      className={cx(cardStyles.card, styles.container)}
      onClick={onCreateExerciseHandler}
    >
      <div className={styles.text}>{text}</div>
      <FaPlusCircle size={40} className={styles.icon} />
    </button>
  );
}

export default withOpenModal(CreateExerciseCard);
