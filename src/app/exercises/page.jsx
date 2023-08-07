import React from 'react';

import Exercises from '@/components/Container/Exercises'

import { exercisesService } from '../../services/exerciseService';

async function ExercisesPage() {
  const data = await exercisesService.getAll();

  if (!data) {
    return null;
  }
  return (<Exercises data={data} />)
}

export default ExercisesPage;
