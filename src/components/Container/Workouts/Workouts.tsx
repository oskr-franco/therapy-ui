import React from 'react';
// import Exercises from '../Exercises';

function Workouts({ workouts }) {
  console.log(workouts);
  return <div>Workouts: {workouts.length}</div>;
}

export default Workouts;
