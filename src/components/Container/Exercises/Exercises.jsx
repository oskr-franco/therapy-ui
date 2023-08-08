'use client';

import React, { useCallback, useState } from 'react';

import { ExerciseCard, CreateExerciseCard } from '@/components/ExerciseCard';
import ExerciseForm from '@/components/ExerciseForm';
import withOpenModal from '@/hocs/withOpenModal';

import styles from './Exercises.module.scss';

function Exercises({ data, openModal }) {
  const [exercises, setExercises] = useState(data);

  const onCreateExerciseHandler = useCallback(() => {
    openModal({
      component: ExerciseForm,
    });
  }, [openModal]);

  if (!data) {
    return null;
  }

  const handleDelete = async (id) => {
    setExercises(exercises.filter((item) => item.id !== id));
  };

  return (
    <div className={styles.cards}>
      <CreateExerciseCard onClick={onCreateExerciseHandler} />
      {exercises.map((exercise) => (
        <ExerciseCard
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}
          description={exercise.description}
          media={exercise.media}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default withOpenModal(Exercises);
