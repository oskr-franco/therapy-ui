import React from 'react';

import WorkoutDetails, {
  WorkoutActions,
} from '@/components/Workout/WorkoutDetails';
import WorkoutProps from './Workout.types';
import styles from './Workout.module.scss';

function WorkoutContainer({ className, workout, isPreview }: WorkoutProps) {
  const { slug, name, workoutExercises } = workout;

  return (
    <div className={className}>
      {!isPreview && (
        <WorkoutActions className={styles.workoutActions} slug={slug} />
      )}
      <WorkoutDetails name={name} workoutExercises={workoutExercises} />
    </div>
  );
}

export default WorkoutContainer;
