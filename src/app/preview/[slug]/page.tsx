import React from 'react';

import Exercise from '@/components/Container/Exercise';
import exercisesService from '@/services/exerciseService';

import styles from './PreviewExercisePage.module.scss';
import { PageProps } from '@/types';

async function PreviewExercisePage({ params }: PageProps) {
  const { slug } = params;
  const data = await exercisesService.getBySlug(slug);
  return <Exercise className={styles.exercise} exercise={data} isPreview />;
}

export default PreviewExercisePage;
