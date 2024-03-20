import React from 'react';

import Exercise from '@/components/Container/Exercise';
import exercisesService from '@/services/exerciseService';

import styles from './PreviewExercisePage.module.scss';
import { PageProps } from '@/types';

async function PreviewExercisePage({ params }: PageProps) {
  const { id } = params;
  const data = await exercisesService.getById(id);
  return <Exercise className={styles.exercise} exercise={data} isPreview />;
}

export default PreviewExercisePage;
