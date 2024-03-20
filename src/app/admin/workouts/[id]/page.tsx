import React from 'react';

import workoutService from '@/services/workoutService';
import Workout from '@/components/Container/Workout';
import { PageProps } from '@/types';

async function WorkoutPage({ params }: PageProps) {
  const { id } = params;

  const data = await workoutService.getById(id);
  return <Workout workout={data} />;
}

export default WorkoutPage;
