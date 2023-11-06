import React from 'react';

import WorkoutForm from '@/components/Workout/WorkoutForm';
import { fetchExercises } from '@/actions/fetchExercises';

async function WorkoutBuilderPage() {
  const initialExercises = await fetchExercises();
  return <WorkoutForm initialExercises={initialExercises} />;
}

export default WorkoutBuilderPage;
