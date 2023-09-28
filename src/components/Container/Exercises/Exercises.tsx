import React from 'react';

import { ExerciseCard, CreateExerciseCard } from '@/components/ExerciseCard';

import IExercisesProps from './IExercises';

import styles from './Exercises.module.scss';

function Exercises({ data }: IExercisesProps) {
  const { data: exercises } = data;
  if (!data || !exercises) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateExerciseCard />
      {exercises.map((exercise) => (
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

export default Exercises;
