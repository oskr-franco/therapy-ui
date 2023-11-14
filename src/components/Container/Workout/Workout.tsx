import React from 'react';

import WorkoutProps from './Workout.types';

function WorkoutContainer({ workout }: WorkoutProps) {
  console.log(workout);
  return <div>Workout</div>;
}

export default WorkoutContainer;
