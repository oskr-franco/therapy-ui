import React from 'react';

import Workouts from '@/components/Container/Workouts';
import workoutsService from '@/services/workoutService';

async function WorkoutPage() {
  const data = await workoutsService.getAll();
  if (!data) {
    return null;
  }
  return <Workouts workouts={data} />;
}

export default WorkoutPage;
