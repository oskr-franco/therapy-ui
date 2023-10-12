import React from 'react';

import Workouts from '@/components/Container/Workouts';
import workoutsService from '@/services/workoutService';

export const revalidate = 0;

async function WorkoutPage() {
  const response = await workoutsService.getAll();
  if (!response) {
    return null;
  }
  return <Workouts data={response} />;
}

export default WorkoutPage;
