import React from 'react';

import Exercise from '@/components/Container/Exercise';

import exercisesService from '@/services/exerciseService';

export const revalidate = 0;

async function ExercisePage({ params }) {
  const { id } = params;

  const data = await exercisesService.getById(id);
  return <Exercise exercise={data} />;
}

export default ExercisePage;
