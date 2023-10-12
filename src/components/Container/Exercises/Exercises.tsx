import React from 'react';

import ExerciseCard from '@/components/Exercise/ExerciseCard';
import CreateCard from '@/components/CreateCardModal';
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
      <CreateCard
        className={styles.card}
        text={addExercise}
        component={ExerciseForm}
      />
      {exercises.map((exercise) => (
        <ExerciseCard
          className={styles.card}
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

export default Exercises;
