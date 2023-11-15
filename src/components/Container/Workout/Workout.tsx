import React from 'react';

import WorkoutProps from './Workout.types';

function WorkoutContainer({ workout }: WorkoutProps) {
  // console.log(workout);
  const { name, workoutExercises } = workout;
  console.log(workoutExercises);

  return <h2>{name}</h2>;
}

export default WorkoutContainer;
