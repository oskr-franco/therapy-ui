import React from 'react';

import ExerciseCard from '@/components/Exercise/ExerciseCard';
import { CreateCardModal } from '@/components/CreateCard';
import ExerciseForm from '@/components/Exercise/ExerciseForm';

import ExercisesType from './Exercises.types';

import styles from './Exercises.module.scss';

function Exercises({ data }: ExercisesType) {
  const addExercise = 'Crear Ejercicio';
  const { data: exercises } = data;
  if (!data || !exercises) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateCardModal
        className={styles.card}
        text={addExercise}
        component={ExerciseForm}
      />
      {exercises.map((exercise) => (
        <ExerciseCard className={styles.card} key={exercise.id} {...exercise} />
      ))}
    </div>
  );
}

export default Exercises;
