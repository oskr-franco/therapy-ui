import React from 'react';

import workoutService from '@/services/workoutService';
import Workout from '@/components/Container/Workout';

async function WorkoutPage({ params }) {
  const { id } = params;

  const data = await workoutService.getById(id);
  return <Workout workout={data} />;
}

export default WorkoutPage;
