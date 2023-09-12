'use client';

import React, { useCallback, useState } from 'react';

import { ExerciseCard, CreateExerciseCard } from '@/components/ExerciseCard';
import ExerciseForm from '@/components/ExerciseForm';
import withOpenModal from '@/hocs/withOpenModal';

import styles from './Exercises.module.scss';

function Exercises({ data, openModal }) {
  const onCreateExerciseHandler = useCallback(() => {
    openModal({
      component: ExerciseForm,
    });
  }, [openModal]);

  if (!data) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateExerciseCard onClick={onCreateExerciseHandler} />
      {data.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}
          description={exercise.description}
          instructions={exercise.instructions}
          media={exercise.media}
        />
      ))}
    </div>
  );
}

export default withOpenModal(Exercises);
