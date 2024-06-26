import React from 'react';

import Exercise from '@/components/Container/Exercise';

import exercisesService from '@/services/exerciseService';
import { PageProps } from '@/types';

export const revalidate = 0;

async function ExercisePage({ params }: PageProps) {
  const { slug } = params;

  const data = await exercisesService.getBySlug(slug);
  return <Exercise exercise={data} />;
}

export default ExercisePage;
