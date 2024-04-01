import React from 'react';

import workoutService from '@/services/workoutService';
import Workout from '@/components/Container/Workout';
import { PageProps } from '@/types';

async function WorkoutPage({ params }: PageProps) {
  const { slug } = params;

  const data = await workoutService.getBySlug(slug);
  return <Workout workout={data} />;
}

export default WorkoutPage;
