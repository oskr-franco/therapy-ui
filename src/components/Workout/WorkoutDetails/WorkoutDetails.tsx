import React from 'react';

import ExerciseDetail from '@/components/Exercise/ExerciseDetail';

import styles from './WorkoutDetails.module.scss';
import WorkoutDetailProps from './WorkoutDetails.types';

function WorkoutDetails({ id, name, workoutExercises }: WorkoutDetailProps) {
  const setsText = 'Series';
  const repsText = 'Repeticiones';
  return (
    <>
      <h1 key={id}>{name}</h1>
      {workoutExercises.map((workoutExercise) => {
        const {
          exerciseId,
          name: workoutName,
          description,
          instructions,
          media,
          sets,
          reps,
        } = workoutExercise;
        return (
          <ExerciseDetail
            key={exerciseId}
            name={workoutName}
            description={description}
            instructions={instructions}
            media={media}
          >
            <span className={styles.setsReps}>
              {sets} {setsText} - {reps} {repsText}
            </span>
          </ExerciseDetail>
        );
      })}
    </>
  );
}

export default WorkoutDetails;
