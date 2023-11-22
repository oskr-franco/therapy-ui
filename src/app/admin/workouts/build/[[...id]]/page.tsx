import React, { Suspense } from 'react';

import WorkoutForm from '@/components/Workout/WorkoutForm';
import { getExercises } from '@/actions/exercises/actions';
import { getWorkout } from '@/actions/workouts/actions';

export const revalidate = 0;
// export const dynamic = 'force-dynamic';
// export const dynamicParams = false;

async function WorkoutBuilderPage({ params }: { params: { id: number[] } }) {
  const [id] = params?.id || [];
  const initialExercises = await getExercises();
  const initialWorkout = id ? await getWorkout(id) : undefined;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WorkoutForm
        initialExercises={initialExercises}
        initialData={initialWorkout}
      />
    </Suspense>
  );
}

export default WorkoutBuilderPage;
