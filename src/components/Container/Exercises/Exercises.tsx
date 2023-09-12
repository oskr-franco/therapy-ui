import React from 'react';

import { ExerciseCard, CreateExerciseCard } from '@/components/ExerciseCard';

import styles from './Exercises.module.scss';

function Exercises({ data }) {
  if (!data) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateExerciseCard />
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

export default Exercises;
