import React from 'react';

import ExerciseCard from '@/components/ExerciseCard';
import CreateCard from '@/components/CreateCardModal';
import ExerciseForm from '@/components/ExerciseForm';

import IExercisesProps from './IExercises';

import styles from './Exercises.module.scss';

function Exercises({ data }: IExercisesProps) {
  const { data: exercises } = data;
  if (!data || !exercises) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateCard
        className={styles.card}
        text="Agregar Ejercicio"
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
