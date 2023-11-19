import React from 'react';

import Exercises from '@/components/Container/Exercises';

import exercisesService from '../../../services/exerciseService';

export const revalidate = 0;

async function ExercisesPage() {
  const response = await exercisesService.getAll();

  if (!response) {
    return null;
  }
  return <Exercises data={response} />;
}

export default ExercisesPage;
