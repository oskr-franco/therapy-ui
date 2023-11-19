import React from 'react';

import Paths from '@/constants/paths';
import { CreateCardLink } from '@/components/CreateCard';
import WorkoutCard from '@/components/Workout/WorkoutCard';

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
        href={Paths.CreateWorkout}
      />
      {workouts.map((workout) => (
        <WorkoutCard
          className={styles.card}
          key={workout.id}
          id={workout.id}
          name={workout.name}
          workoutExercises={workout.workoutExercises}
        />
      ))}
    </div>
  );
}

export default Workouts;
