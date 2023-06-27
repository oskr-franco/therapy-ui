


import React, { useCallback } from 'react';
import { FaPlusCircle } from "react-icons/fa";

import ExerciseCard from '@/components/ExerciseCard';
import ExerciseForm from '@/components/ExerciseForm';
import { IconButton } from '@/components/Button';
import { withOpenModal } from '@/hocs/withOpenModal';
import { withExercises } from '@/hocs/withExercises';

import styles from './Exercises.module.scss';

function Exercises({ openModal, exercises }) {
  const onCreateExerciseHandler = useCallback(() => {
    openModal({
      component: ExerciseForm,
    });
  }, [openModal]);

  if (!exercises) {
    return null;
  }

  return (
    <>
      <IconButton icon={FaPlusCircle} onClick={onCreateExerciseHandler} className={styles.addBtn} />
      <div className={styles.cards}>
        {exercises.map((exercise) => (
          <ExerciseCard key={exercise.id} {...exercise} />
        ))}
      </div>
    </>
  );
}

export default withExercises(withOpenModal(Exercises));