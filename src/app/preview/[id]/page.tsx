import React from 'react';

import Exercise from '@/components/Container/Exercise';
import exercisesService from '@/services/exerciseService';

import styles from './PreviewExercisePage.module.scss';

async function PreviewExercisePage({ params }) {
  const { id } = params;
  const data = await exercisesService.getById(id);
  return <Exercise className={styles.exercise} exercise={data} isPreview />;
}

export default PreviewExercisePage;
