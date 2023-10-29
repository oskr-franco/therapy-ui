import React from 'react';

import { CreateCardLink } from '@/components/CreateCard';

import WorkoutsType from './Workouts.types';
import styles from './Workouts.module.scss';

function Workouts({ data }: WorkoutsType) {
  const addWorkout = 'Crear Workout';
  const { data: workouts } = data;

  if (!data || !workouts) {
    return null;
  }

  return (
    <div className={styles.cards}>
      <CreateCardLink
        className={styles.card}
        text={addWorkout}
        href="/workouts/build"
      />
      {/* {exercises.map((exercise) => (
        <ExerciseCard
          className={styles.card}
          key={exercise.id}
          id={exercise.id}
          name={exercise.name}
          description={exercise.description}
          instructions={exercise.instructions}
          media={exercise.media}
        />
      ))} */}
    </div>
  );
}

export default Workouts;
