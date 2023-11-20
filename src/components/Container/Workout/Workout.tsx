import React from 'react';

import WorkoutDetails, {
  WorkoutActions,
} from '@/components/Workout/WorkoutDetails';
import WorkoutProps from './Workout.types';
import styles from './Workout.module.scss';

function WorkoutContainer({ workout, isPreview }: WorkoutProps) {
  // console.log(workout);
  const { id, name, workoutExercises } = workout;

  return (
    <>
      {!isPreview && (
        <WorkoutActions className={styles.workoutActions} id={workout.id} />
      )}
      <WorkoutDetails id={id} name={name} workoutExercises={workoutExercises} />
    </>
  );
}

export default WorkoutContainer;
